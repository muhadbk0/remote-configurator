const EventEmitter = require("events");
const uuid = require("uuid");
const url = require("url");
const net = require("net");
const express = require("express");
const cookieParser = require("cookie-parser");
const crypto = require("crypto");
const httpProxy = require("http-proxy");
const decompressResponse = require("decompress-response");
const queryString = require("query-string");
const Chance = require("chance");
const jsotp = require("jsotp");
const helpers = require("../middleware/helpers");
const { proxiesSelectors } = require("../state/proxies");

class Proxy extends EventEmitter {
  constructor(app, config, di, getState, dispatch, deviceId, proxyId) {
    super();

    this.app = app;
    this.config = config;
    this.di = di;
    this.getState = getState;
    this.dispatch = dispatch;

    this.chance = new Chance();
    this.innerServer = null;
    this.innerSockets = {};
    this.outerServer = null;

    this.deviceId = deviceId;
    this.proxyId = proxyId;
    this.secretPath = "/.remoteConfigurator";
    this.secretCookie = "remoteConfiguratorToken";

    this.onKill = this.onKill.bind(this);
    this.di.get("ssh").on("kill", this.onKill);
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "proxy";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["app", "config", "di", "getState", "dispatch"];
  }

  getTarget(value = "") {
    let target = this.config.appOrigins[0];
    let index = target.indexOf(":", "https:".length);
    if (index !== -1) target = target.slice(0, index);
    target += ":" + this.outerPort;

    index = value.indexOf("//");
    if (index !== -1) value = value.slice(index + 2);
    index = value.indexOf("/");
    if (index !== -1) value = value.slice(index);

    return target + value;
  }

  getToken() {
    const totp = jsotp.TOTP(
      proxiesSelectors.getRandom(this.getState(), {
        proxyId: this.proxyId
      })
    );
    return totp.now();
  }

  checkToken(req, res) {
    if (
      !proxiesSelectors.hasProxy(this.getState(), {
        proxyId: this.proxyId
      })
    ) {
      this.app.routes.browser.template(404, req, res);
      this.stop().catch(console.error);
      return false;
    }

    const totp = jsotp.TOTP(
      proxiesSelectors.getRandom(this.getState(), {
        proxyId: this.proxyId
      })
    );
    let isValid = totp.verify(req.query.token);
    if (!isValid) this.app.routes.browser.template(403, req, res);
    return isValid;
  }

  getSecret() {
    const hash = crypto.createHash("sha256");
    hash.update(
      proxiesSelectors.getSecret(this.getState(), { proxyId: this.proxyId })
    );
    return hash.digest("hex");
  }

  async start() {
    if (!this.promise) {
      this.promise = new Promise(async (resolve, reject) => {
        try {
          await this.createInnerServer();
          await this.createOuterServer();
          this.di
            .get("ssh")
            .emit("proxy", { proxy: this, proxyId: this.proxyId });
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    }

    return this.promise;
  }

  async stop() {
    this.di.get("ssh").removeListener("kill", this.onKill);
    if (this.innerServer) {
      this.innerServer.close();
      this.innerServer = null;
    }
    if (this.outerServer) {
      this.outerServer.close();
      this.outerServer = null;
    }
    for (let id of _.keys(this.innerSockets)) {
      const socket = this.innerSockets[id];
      socket.end();
      setTimeout(() => socket.destroy(), 1000);
    }
    this.innerSockets = {};
    this.di.get("ssh").emit("proxy", { proxy: null, proxyId: this.proxyId });
  }

  async createInnerServer() {
    this.innerServer = net.createServer(this.onInnerConnection.bind(this));
    this.innerServer.on("error", this.onError.bind(this));

    return await new Promise((resolve, reject) => {
      try {
        this.innerServer.listen(0, "127.0.0.1", () => {
          this.innerPort = this.innerServer.address().port;
          resolve();
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  async createOuterServer() {
    const app = express();
    app.use(cookieParser());
    app.use((await helpers(this.app)).express);
    app.get(this.secretPath, this.onNock.bind(this));
    app.all("*", this.onOuterConnection.bind(this));

    const listen = () =>
      new Promise(resolve => {
        this.outerServer = app.listen(
          this.outerPort,
          this.config.appHost,
          error => {
            if (error) return resolve(false);
            app.on("error", this.onError.bind(this));
            resolve(true);
          }
        );
      });

    let numTries = 0;
    do {
      if (++numTries > 10000) throw new Error("Could not find a free port");
      this.outerPort = this.chance.integer({
        min: this.config.proxyPortLow,
        max: this.config.proxyPortHigh
      });
    } while (!(await listen()));
  }

  createProxy(forwardedHost, forwardedPort) {
    const proxy = httpProxy.createProxyServer({});
    proxy.on("error", (error, req, res) => {
      console.log(`Proxy ${this.proxyId}: ${error.message}`);
      this.app.routes.browser.template(500, req, res);
    });
    proxy.once("proxyReq", (proxyReq, req) => {
      if (!req.body || !_.keys(req.body).length) return;
      let body;
      switch (proxyReq.getHeader("Content-Type")) {
        case "application/json":
        case "application/json; charset=UTF-8":
          body = JSON.stringify(req.body);
          break;
        case "application/x-www-form-urlencoded":
          body = queryString.stringify(req.body);
          break;
        default:
      }
      if (body) {
        proxyReq.setHeader("Content-Length", Buffer.byteLength(body));
        proxyReq.write(body);
        proxyReq.end();
      }
    });
    proxy.on("proxyRes", (proxyRes, req, res) => {
      proxyRes = decompressResponse(proxyRes);
      let body = new Buffer("");
      proxyRes.on("data", data => {
        body = Buffer.concat([body, data]);
      });
      proxyRes.on("end", () => {
        for (let key of _.keys(proxyRes.headers)) {
          let value = proxyRes.headers[key];
          if (
            key.match(/^x-frame-options$/i) ||
            key.match(/^content-encoding$/i) ||
            key.match(/^content-length$/i)
          ) {
            delete proxyRes.headers[key];
          } else if (
            key.match(/^content-type$/i) &&
            value.match(/^text\/html/i)
          ) {
            body = body.toString();
            body = _.replace(
              body,
              /\s+href\s*=\s*(["'])(https?:\/\/[^"']+)(["'])/gi,
              (match, p1, p2, p3) => ` href=${p1}${this.getTarget(p2)}${p3}`
            );
            body = _.replace(
              body,
              /\s+src\s*=\s*(["'])(https?:\/\/[^"']+)(["'])/gi,
              (match, p1, p2, p3) => ` src=${p1}${this.getTarget(p2)}${p3}`
            );
            body = _.replace(
              body,
              /\s+action\s*=\s*(["'])(https?:\/\/[^"']+)(["'])/gi,
              (match, p1, p2, p3) => ` action=${p1}${this.getTarget(p2)}${p3}`
            );
          }
          if (
            _.includes([201, 301, 302, 307, 308], proxyRes.statusCode) &&
            key.match(/^location$/i)
          ) {
            proxyRes.headers[key] = this.getTarget(value);
          }
        }
        let target = new url.URL(this.getTarget());
        body = _.replace(
          body,
          new RegExp(`${forwardedHost}:${forwardedPort}`, "gi"),
          `${target.hostname}:${target.port}`
        );
        body = _.replace(
          body,
          new RegExp(`${forwardedHost}`, "gi"),
          `${target.hostname}`
        );
        res.writeHead(proxyRes.statusCode, proxyRes.headers);
        res.end(body);
        setTimeout(() => proxy.close());
      });
    });
    return proxy;
  }

  async redirect(req, res) {
    await this.start();
    res.redirect(
      this.getTarget() + this.secretPath + "?token=" + this.getToken()
    );
  }

  async onInnerConnection(socket) {
    const stream = await this.di.get("ssh.stream", this.proxyId).start();
    if (!stream) return socket.end();

    const socketId = uuid.v4();
    this.innerSockets[socketId] = socket;
    socket.on("close", this.onCloseInner.bind(this, socketId));
    socket.on("error", this.onError.bind(this));
    socket.pipe(stream).pipe(socket);
  }

  onNock(req, res) {
    if (!this.checkToken(req, res)) return;

    res.cookie(this.secretCookie, this.getSecret(), {
      expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      path: "/"
    });
    res.redirect(this.getTarget());
  }

  async onOuterConnection(req, res) {
    if (
      !proxiesSelectors.hasProxy(this.getState(), {
        proxyId: this.proxyId
      })
    ) {
      this.app.routes.browser.template(404, req, res);
      return this.stop().catch(console.error);
    }

    if (req.cookies[this.secretCookie] !== this.getSecret())
      return this.app.routes.browser.template(403, req, res);

    try {
      let forwardedHost = proxiesSelectors.getForwardedHost(this.getState(), {
        proxyId: this.proxyId
      });
      let forwardedPort = proxiesSelectors.getForwardedPort(this.getState(), {
        proxyId: this.proxyId
      });
      let isAuthNeeded = proxiesSelectors.getIsAuthNeeded(this.getState(), {
        proxyId: this.proxyId
      });
      let authUsername = proxiesSelectors.getAuthUsername(this.getState(), {
        proxyId: this.proxyId
      });
      let authPassword = proxiesSelectors.getAuthPassword(this.getState(), {
        proxyId: this.proxyId
      });
      let auth = isAuthNeeded ? `${authUsername}:${authPassword}` : undefined;

      const proxy = this.createProxy(forwardedHost, forwardedPort);
      return proxy.web(req, res, {
        target: `http://127.0.0.1:${this.innerPort}${req.originalUrl}`,
        headers: {
          Host: `${forwardedHost}:${forwardedPort}`
        },
        auth,
        localAddress: "127.0.0.1",
        changeOrigin: true,
        ignorePath: true,
        cookieDomainRewrite: "",
        cookiePathRewrite: "/",
        selfHandleResponse: true
      });
    } catch (error) {
      console.error(error);
      this.app.routes.browser.template(500, req, res);
    }
  }

  async onCloseInner(socketId) {
    delete this.innerSockets[socketId];
  }

  async onError(error) {
    console.error(`${this.proxyId}: ${error.message}`);
    await this.stop();
  }

  onKill({ deviceId }) {
    if (deviceId === this.deviceId) this.stop().catch(console.error);
  }
}

module.exports = Proxy;