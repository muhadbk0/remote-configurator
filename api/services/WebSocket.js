const debug = require("debug")("app:ws");
const uuid = require("uuid");
const pkg = require("../../package.json");
const IO = require("socket.io");
const { Map } = require("immutable");
const EventEmitter = require("events");
const { devicesSelectors } = require("../state/devices");
const {
  terminalsSelectors,
  terminalsOperations
} = require("../state/terminals");
const { usersOperations, usersSelectors } = require("../state/users");
const { historiesSelectors } = require("../state/histories");
const constants = require("../../common/constants");

class WebSocket extends EventEmitter {
  constructor(app, config, store, getState, dispatch) {
    super();

    this.app = app;
    this.config = config;
    this.store = store;
    this.getState = getState;
    this.dispatch = dispatch;

    this.sessionTimeout = 15 * 60 * 1000;
    this.cache = Map({});
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "ws";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["app", "config", "store", "getState", "dispatch"];
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $lifecycle() {
    return "singleton";
  }

  async init() {
    this.io = new IO(this.app.server, {
      path: constants.socketsBase
    });
    this.io.on("connection", this.onConnection.bind(this));

    this.timer = setInterval(async () => {
      let offlineUsers = usersSelectors.getOfflineUsersList(this.getState(), {
        sessionTimeout: this.sessionTimeout
      });

      if (!offlineUsers.size) return;

      await Promise.all(
        offlineUsers // eslint-disable-line lodash/prefer-lodash-method
          .map(userId => {
            debug(`Destroying inactive user ${userId}`);
            this.dispatch(usersOperations.remove({ userId })).catch(
              console.error
            );
          })
          .toJS()
      );

      for (let userId of this.cache.keys()) {
        let sessions = usersSelectors.getSessionsMap(this.getState(), {
          userId
        });
        if (!sessions || !sessions.size) this.cache = this.cache.delete(userId);
      }
    }, 60 * 1000);

    this.unsubscribe = this.store.subscribe(this.onStateChanged.bind(this));
  }

  emit(userId, message, data) {
    let sessions = usersSelectors.getSessionsMap(this.getState(), {
      userId
    });

    if (sessions && sessions.size) {
      // eslint-disable-next-line lodash/prefer-lodash-method
      sessions.forEach(session => {
        // eslint-disable-next-line lodash/prefer-lodash-method
        session
          .get("sockets")
          .forEach(
            info => info.get("socket") && info.get("socket").emit(message, data)
          );
      });
    }
  }

  async emitStatus(socket, user) {
    if (_.isUndefined(user)) user = await socket.request.getUser();
    socket.emit(
      constants.messages.SET_STATUS,
      socket.request.di.get("auth").getStatus(user)
    );
  }

  async broadcastStatus(user, status) {
    if (!user || !status) return;
    let sessions = usersSelectors.getSessionsMap(this.getState(), {
      userId: user.id
    });
    if (sessions && sessions.size) {
      // eslint-disable-next-line lodash/prefer-lodash-method
      sessions.forEach(session => {
        // eslint-disable-next-line lodash/prefer-lodash-method
        session
          .get("sockets")
          .forEach(
            info =>
              info.get("socket") &&
              info.get("socket").emit(constants.messages.SET_STATUS, status)
          );
      });
    }
  }

  getDevice(deviceId) {
    let device = devicesSelectors.getDeviceMap(this.getState(), {
      deviceId
    });
    if (!device) return null;

    return {
      address: device.get("address")
    };
  }

  emitDevice(userId, deviceId) {
    let device = devicesSelectors.getDeviceMap(this.getState(), {
      deviceId
    });
    if (device && device.get("forwardedPort") !== constants.commandPort) return;

    let hash = device && device.hashCode();
    if (this.cache.getIn([userId, "devices", deviceId]) === hash) return;

    let data = this.getDevice(deviceId);
    if (data)
      this.emit(userId, constants.messages.SET_DEVICE, { deviceId, data });
    else this.emit(userId, constants.messages.DELETE_DEVICE, { deviceId });

    if (hash)
      this.cache = this.cache.setIn([userId, "devices", deviceId], hash);
    else this.cache = this.cache.deleteIn([userId, "devices", deviceId]);
  }

  getTerminal(terminalId) {
    let terminal = terminalsSelectors.getTerminalMap(this.getState(), {
      terminalId
    });
    if (!terminal) return null;

    let auth = terminal.get("auth");
    return {
      deviceId: terminal.get("deviceId"),
      whenCreated: terminal.get("whenCreated"),
      name: terminal.get("name"),
      isConnecting: terminal.get("isConnecting"),
      isWaiting: terminal.get("isWaiting"),
      isConnected: terminal.get("isConnected"),
      status: terminal.get("status"),
      auth:
        auth && auth.get("finish")
          ? {
              username: auth.get("username"),
              banner: auth.get("banner"),
              prompts: auth.get("prompts").toJS()
            }
          : null
    };
  }

  emitTerminal(userId, terminalId) {
    let terminal = terminalsSelectors.getTerminalMap(this.getState(), {
      terminalId
    });
    let hash = terminal && terminal.hashCode();

    if (this.cache.getIn([userId, "terminals", terminalId]) === hash) return;

    let data = this.getTerminal(terminalId);
    if (data)
      this.emit(userId, constants.messages.SET_TERMINAL, { terminalId, data });
    else this.emit(userId, constants.messages.DELETE_TERMINAL, { terminalId });

    if (hash)
      this.cache = this.cache.setIn([userId, "terminals", terminalId], hash);
    else this.cache = this.cache.deleteIn([userId, "terminals", terminalId]);
  }

  emitTerminalHistory(userId, historyId) {
    let history = historiesSelectors.getHistoryList(this.getState(), {
      historyId
    });
    if (!history || history.size === 0) return;

    let recordId = this.cache.getIn([userId, "histories", historyId]);
    if (recordId === history.last().get("recordId")) return;

    let data = history;
    if (recordId) {
      // eslint-disable-next-line lodash/prefer-lodash-method
      let index = history.findIndex(item => item.get("recordId") === recordId);
      if (index !== -1) data = data.slice(index + 1);
    }

    let output = [];
    for (let item of data.values()) {
      output.push({
        recordId: item.get("recordId"),
        isError: item.get("isError") || false,
        data: item.get("data")
      });
    }

    this.emit(userId, constants.messages.HISTORY, {
      historyId,
      data: output
    });

    this.cache = this.cache.setIn(
      [userId, "histories", historyId],
      history.last().get("recordId")
    );
  }

  async onConnection(socket) {
    try {
      let user = await socket.request.getUser();
      if (!user) {
        debug("Unauthorized socket dropped");
        this.emitStatus(socket, null);
        return process.nextTick(() => socket.disconnect(true));
      }

      const userId = user.id;
      const sessionId = socket.request.session.id;
      const socketId = uuid.v4();

      debug(`Socket ${socketId} connected`);

      socket.on(
        "disconnect",
        this.onDisconnect.bind(this, userId, sessionId, socketId)
      );
      socket.on(
        constants.messages.CONNECT_TERMINAL,
        this.onConnectTerminal.bind(this, userId, sessionId, socketId)
      );
      socket.on(
        constants.messages.KEYBOARD_AUTH,
        this.onKeyboardAuth.bind(this, userId, sessionId, socketId)
      );
      socket.on(
        constants.messages.TERMINAL_INPUT,
        this.onTerminalInput.bind(this, userId, sessionId, socketId)
      );
      socket.on(
        constants.messages.TERMINAL_RESIZED,
        this.onTerminalResized.bind(this, userId, sessionId, socketId)
      );
      socket.on(
        constants.messages.DISCONNECT_TERMINAL,
        this.onDisconnectTerminal.bind(this, userId, sessionId, socketId)
      );

      await this.dispatch(
        usersOperations.addSocket({
          userId,
          sessionId,
          socketId,
          socket
        })
      );

      socket.emit(constants.messages.HELLO, { version: pkg.version });

      // eslint-disable-next-line lodash/prefer-lodash-method
      devicesSelectors
        .getDevicesMap(this.getState())
        .forEach((device, deviceId) => {
          if (device.get("userId") !== userId) return;
          if (device.get("forwardedPort") !== constants.commandPort) return;

          let data = this.getDevice(deviceId);
          if (data)
            socket.emit(constants.messages.SET_DEVICE, { deviceId, data });
        });

      // eslint-disable-next-line lodash/prefer-lodash-method
      terminalsSelectors
        .getTerminalsMap(this.getState())
        .forEach((terminal, terminalId) => {
          if (terminal.get("userId") !== userId) return;

          let data = this.getTerminal(terminalId);
          if (data)
            socket.emit(constants.messages.SET_TERMINAL, { terminalId, data });

          if (
            historiesSelectors.hasHistory(this.getState(), {
              terminalId
            })
          ) {
            // eslint-disable-next-line lodash/prefer-lodash-method
            let output = historiesSelectors
              .getHistoryList(this.getState(), { terminalId })
              .map(item => ({
                recordId: item.get("recordId"),
                isError: item.get("isError"),
                data: item.get("data")
              }))
              .toList()
              .toJS();
            if (output.length) {
              socket.emit(constants.messages.HISTORY, {
                historyId: terminalId,
                data: output
              });
            }
          }
        });
    } catch (error) {
      console.error(error);
    }
  }

  async onConnectTerminal(userId, sessionId, socketId, msg, cb) {
    try {
      debug(`Socket ${socketId} is opening terminal to ${msg.deviceId}`);
      if (
        !devicesSelectors.hasDevice(this.getState(), {
          deviceId: msg.deviceId
        }) ||
        devicesSelectors.getUserId(this.getState(), {
          deviceId: msg.deviceId
        }) !== userId
      ) {
        return;
      }

      const result = await this.dispatch(
        terminalsOperations.create({
          deviceId: msg.deviceId,
          userId,
          username: msg.username,
          password: msg.password
        })
      );
      return cb(result);
    } catch (error) {
      console.error(error);
    }
  }

  async onKeyboardAuth(userId, sessionId, socketId, msg) {
    try {
      if (
        terminalsSelectors.getUserId(this.getState(), {
          terminalId: msg.terminalId
        }) !== userId
      ) {
        return;
      }

      debug(`Socket ${socketId} is doing keyboard auth`);
      await this.dispatch(
        terminalsOperations.finishAuth({
          terminalId: msg.terminalId,
          reply: msg.reply
        })
      );
    } catch (error) {
      console.error(error);
    }
  }

  async onTerminalInput(userId, sessionId, socketId, msg) {
    try {
      if (
        terminalsSelectors.getUserId(this.getState(), {
          terminalId: msg.terminalId
        }) !== userId
      ) {
        return;
      }

      debug(`Socket ${socketId} types on keyboard`);
      await this.dispatch(
        terminalsOperations.sendInput({
          terminalId: msg.terminalId,
          data: _.isObject(msg.data) ? msg.data.key : msg.data
        })
      );
    } catch (error) {
      console.error(error);
    }
  }

  async onTerminalResized(userId, sessionId, socketId, msg) {
    try {
      if (
        terminalsSelectors.getUserId(this.getState(), {
          terminalId: msg.terminalId
        }) !== userId
      ) {
        return;
      }

      debug(`Socket ${socketId} resizes terminal`);
      await this.dispatch(
        terminalsOperations.resize({
          terminalId: msg.terminalId,
          cols: msg.cols,
          rows: msg.rows,
          width: msg.width,
          height: msg.height
        })
      );
    } catch (error) {
      console.error(error);
    }
  }

  async onDisconnectTerminal(userId, sessionId, socketId, msg) {
    try {
      if (
        terminalsSelectors.getUserId(this.getState(), {
          terminalId: msg.terminalId
        }) !== userId
      ) {
        return;
      }

      debug(`Socket ${socketId} closes terminal`);
      await this.dispatch(
        terminalsOperations.remove({
          terminalId: msg.terminalId
        })
      );
    } catch (error) {
      console.error(error);
    }
  }

  async onDisconnect(userId, sessionId, socketId) {
    try {
      debug(`Socket ${socketId} disconnected`);
      await this.dispatch(
        usersOperations.removeSocket({ userId, sessionId, socketId })
      );
    } catch (error) {
      console.error(error);
    }
  }

  async onStateChanged() {
    try {
      let users = usersSelectors.getUsersMap(this.getState());
      let devices = devicesSelectors.getDevicesMap(this.getState());
      let terminals = terminalsSelectors.getTerminalsMap(this.getState());

      for (let userId of users.keys()) {
        if (!this.cache.has(userId)) {
          this.cache = this.cache.set(
            userId,
            Map({
              devices: Map({}),
              terminals: Map({}),
              histories: Map({})
            })
          );
        }

        for (let historyId of this.cache.getIn([userId, "histories"]).keys()) {
          if (
            !historiesSelectors.hasHistory(this.getState(), {
              historyId
            })
          ) {
            this.cache = this.cache.deleteIn([userId, "histories", historyId]); // deleted history
          }
        }

        for (let deviceId of this.cache.getIn([userId, "devices"]).keys()) {
          if (!devicesSelectors.hasDevice(this.getState(), { deviceId })) {
            this.emitDevice(userId, deviceId); // deleted device
          }
        }

        for (let deviceId of devices.keys()) {
          if (
            devicesSelectors.getForwardedPort(this.getState(), {
              deviceId
            }) === constants.commandPort &&
            devicesSelectors.getUserId(this.getState(), {
              deviceId
            }) === userId
          ) {
            this.emitDevice(userId, deviceId); // update device on user
          }
        }

        for (let terminalId of this.cache.getIn([userId, "terminals"]).keys()) {
          if (
            !terminalsSelectors.hasTerminal(this.getState(), {
              terminalId
            })
          ) {
            this.emitTerminal(userId, terminalId); // deleted terminal
          }
        }

        for (let terminalId of terminals.keys()) {
          if (
            terminalsSelectors.getUserId(this.getState(), {
              terminalId
            }) === userId
          ) {
            this.emitTerminal(userId, terminalId); // update terminal on user
            this.emitTerminalHistory(userId, terminalId); // update history on user
          }
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = WebSocket;
