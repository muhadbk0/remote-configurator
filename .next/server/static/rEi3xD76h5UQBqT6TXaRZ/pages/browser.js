module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_next/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "7474");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+1HE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.REMOVE = exports.SET = exports.CLEAR = void 0;
var CLEAR = "app/terminals/CLEAR";
exports.CLEAR = CLEAR;
var SET = "app/terminals/SET";
exports.SET = SET;
var REMOVE = "app/terminals/REMOVE";
exports.REMOVE = REMOVE;

/***/ }),

/***/ "+Opk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signOut = exports.signIn = exports.setStatus = exports.setCsrf = exports.setCookie = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var actions = _interopRequireWildcard(__webpack_require__("z+7x"));

var selectors = _interopRequireWildcard(__webpack_require__("p/Qe"));

var _state = __webpack_require__("E4eY");

var _getFormErrors = _interopRequireDefault(__webpack_require__("EUet"));

var _constants = _interopRequireDefault(__webpack_require__("o4p3"));

var _SignIn = _interopRequireDefault(__webpack_require__("1eZf"));

var _SignOut = _interopRequireDefault(__webpack_require__("DxzU"));

var setCookie = actions.setCookie;
exports.setCookie = setCookie;
var setCsrf = actions.setCsrf;
exports.setCsrf = setCsrf;

var fetchStatus = function fetchStatus() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(dispatch, getState, di) {
        var fetcher;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                fetcher = di.get("fetcher");
                _context.next = 4;
                return fetcher.fetch({
                  resource: "".concat(_constants.default.apiBase, "/status")
                });

              case 4:
                return _context.abrupt("return", _context.sent);

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.error("STATUS: ".concat(_context.t0.message));

              case 10:
                return _context.abrupt("return", new _promise.default(function (resolve) {
                  return setTimeout(function () {
                    return resolve(fetchStatus());
                  }, 3000);
                }));

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

var setStatus = function setStatus(status) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(dispatch, getState, di) {
        var socket;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (true) {
                  _context2.next = 4;
                  break;
                }

                _context2.next = 3;
                return dispatch(fetchStatus());

              case 3:
                status = _context2.sent;

              case 4:
                if (status) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return");

              case 6:
                _context2.next = 8;
                return dispatch(actions.setStatus(status));

              case 8:
                if (false) {}

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x4, _x5, _x6) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};

exports.setStatus = setStatus;

var signIn = function signIn(_ref3) {
  var login = _ref3.login,
      password = _ref3.password;
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _SignIn.default)(di, {
                  login: login,
                  password: password
                });

              case 2:
                data = _context3.sent;

                if (!_.get(data, "data.signIn.success", false)) {
                  _context3.next = 7;
                  break;
                }

                _context3.next = 6;
                return dispatch(setStatus());

              case 6:
                return _context3.abrupt("return", true);

              case 7:
                return _context3.abrupt("return", (0, _getFormErrors.default)(data, "APP_AUTH_FAILED"));

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x7, _x8, _x9) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
};

exports.signIn = signIn;

var signOut = function signOut() {
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(dispatch, getState, di) {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return dispatch(_state.appOperations.stop());

              case 2:
                _context4.next = 4;
                return (0, _SignOut.default)(di);

              case 4:
                window.location.href = "/";
                return _context4.abrupt("return", true);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x10, _x11, _x12) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
};

exports.signOut = signOut;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "+Wwo":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HIDE_CREDENTIALS_MODAL = exports.SHOW_CREDENTIALS_MODAL = exports.HIDE_EDIT_MODAL = exports.SHOW_EDIT_MODAL = exports.DESELECT_ALL = exports.SELECT_ALL = exports.SET_SELECTED = exports.REMOVE = exports.SET = exports.CLEAR = void 0;
var CLEAR = "app/devices/CLEAR";
exports.CLEAR = CLEAR;
var SET = "app/devices/SET";
exports.SET = SET;
var REMOVE = "app/devices/REMOVE";
exports.REMOVE = REMOVE;
var SET_SELECTED = "app/devices/SET_SELECTED";
exports.SET_SELECTED = SET_SELECTED;
var SELECT_ALL = "app/devices/SELECT_ALL";
exports.SELECT_ALL = SELECT_ALL;
var DESELECT_ALL = "app/devices/DESELECT_ALL";
exports.DESELECT_ALL = DESELECT_ALL;
var SHOW_EDIT_MODAL = "app/devices/SHOW_EDIT_MODAL";
exports.SHOW_EDIT_MODAL = SHOW_EDIT_MODAL;
var HIDE_EDIT_MODAL = "app/devices/HIDE_EDIT_MODAL";
exports.HIDE_EDIT_MODAL = HIDE_EDIT_MODAL;
var SHOW_CREDENTIALS_MODAL = "app/devices/SHOW_CREDENTIALS_MODAL";
exports.SHOW_CREDENTIALS_MODAL = SHOW_CREDENTIALS_MODAL;
var HIDE_CREDENTIALS_MODAL = "app/devices/HIDE_CREDENTIALS_MODAL";
exports.HIDE_CREDENTIALS_MODAL = HIDE_CREDENTIALS_MODAL;

/***/ }),

/***/ "+oT+":
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__("eVuF");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "+z5V":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SET_GOOGLE_MAPS_KEY = exports.SET_STATUS = exports.SET_CSRF = void 0;
var SET_CSRF = "app/auth/SET_CSRF";
exports.SET_CSRF = SET_CSRF;
var SET_STATUS = "app/auth/SET_STATUS";
exports.SET_STATUS = SET_STATUS;
var SET_GOOGLE_MAPS_KEY = "app/auth/SET_GOOGLE_MAPS_KEY";
exports.SET_GOOGLE_MAPS_KEY = SET_GOOGLE_MAPS_KEY;

/***/ }),

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "1eZf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _reactRelay = __webpack_require__("iuEU");

var mutation = function mutation() {
  return __webpack_require__("bI0k");
};

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _promise.default(function (resolve, reject) {
              (0, _reactRelay.commitMutation)(di.get("env"), {
                mutation: mutation,
                variables: {
                  input: input || {}
                },
                onCompleted: function onCompleted(data, errors) {
                  return resolve({
                    data: data,
                    errors: errors
                  });
                },
                onError: reject
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "6BQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

/***/ }),

/***/ "6eRU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clear = exports.removeStarting = exports.remove = exports.add = void 0;

var actions = _interopRequireWildcard(__webpack_require__("Ag9e"));

var add = actions.add;
exports.add = add;
var remove = actions.remove;
exports.remove = remove;
var removeStarting = actions.removeStarting;
exports.removeStarting = removeStarting;
var clear = actions.clear;
exports.clear = clear;

/***/ }),

/***/ "7474":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("bKT8");


/***/ }),

/***/ "7Z6F":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isConnected = exports.isStopped = exports.isStarted = exports.getLocale = exports.getSelfRegistration = exports.getSshPort = exports.getSshHost = exports.getProxyOrigin = exports.getAppOrigin = exports.getSubscriptionsServer = exports.getStatusCode = exports.getCreated = void 0;

var getCreated = function getCreated(state) {
  return state.getIn(["app", "created"]);
};

exports.getCreated = getCreated;

var getStatusCode = function getStatusCode(state) {
  return state.getIn(["app", "statusCode"]);
};

exports.getStatusCode = getStatusCode;

var getSubscriptionsServer = function getSubscriptionsServer(state) {
  return state.getIn(["app", "subscriptionsServer"]);
};

exports.getSubscriptionsServer = getSubscriptionsServer;

var getAppOrigin = function getAppOrigin(state) {
  return state.getIn(["app", "appOrigin"]);
};

exports.getAppOrigin = getAppOrigin;

var getProxyOrigin = function getProxyOrigin(state) {
  return state.getIn(["app", "proxyOrigin"]);
};

exports.getProxyOrigin = getProxyOrigin;

var getSshHost = function getSshHost(state) {
  return state.getIn(["app", "sshHost"]);
};

exports.getSshHost = getSshHost;

var getSshPort = function getSshPort(state) {
  return state.getIn(["app", "sshPort"]);
};

exports.getSshPort = getSshPort;

var getSelfRegistration = function getSelfRegistration(state) {
  return state.getIn(["app", "selfRegistration"]);
};

exports.getSelfRegistration = getSelfRegistration;

var getLocale = function getLocale(state) {
  return state.getIn(["app", "locale"]);
};

exports.getLocale = getLocale;

var isStarted = function isStarted(state) {
  return state.getIn(["app", "isStarted"]);
};

exports.isStarted = isStarted;

var isStopped = function isStopped(state) {
  return state.getIn(["app", "isStopped"]);
};

exports.isStopped = isStopped;

var isConnected = function isConnected(state) {
  return state.getIn(["app", "isConnected"]);
};

exports.isConnected = isConnected;

/***/ }),

/***/ "8L3H":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getToken = exports.getCookie = exports.setCookie = exports.start = exports.create = exports.stop = exports.setLocale = exports.setConnected = exports.setStatusCode = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var actions = _interopRequireWildcard(__webpack_require__("gRch"));

var _state = __webpack_require__("Yoxy");

var setStatusCode = actions.setStatusCode;
exports.setStatusCode = setStatusCode;
var setConnected = actions.setConnected;
exports.setConnected = setConnected;
var setLocale = actions.setLocale;
exports.setLocale = setLocale;
var stop = actions.stop; // called in App.getInitialProps()

exports.stop = stop;

var create = function create(_ref) {
  var statusCode = _ref.statusCode,
      cookie = _ref.cookie,
      csrf = _ref.csrf,
      status = _ref.status,
      subscriptionsServer = _ref.subscriptionsServer,
      appOrigin = _ref.appOrigin,
      proxyOrigin = _ref.proxyOrigin,
      sshHost = _ref.sshHost,
      sshPort = _ref.sshPort,
      selfRegistration = _ref.selfRegistration;
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(dispatch) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return dispatch(actions.create({
                  subscriptionsServer: subscriptionsServer,
                  appOrigin: appOrigin,
                  proxyOrigin: proxyOrigin,
                  sshHost: sshHost,
                  sshPort: sshPort,
                  selfRegistration: selfRegistration
                }));

              case 2:
                if (!statusCode) {
                  _context.next = 5;
                  break;
                }

                _context.next = 5;
                return dispatch(setStatusCode({
                  code: statusCode
                }));

              case 5:
                if (!cookie) {
                  _context.next = 8;
                  break;
                }

                _context.next = 8;
                return dispatch(_state.authOperations.setCookie({
                  cookie: cookie
                }));

              case 8:
                if (!csrf) {
                  _context.next = 11;
                  break;
                }

                _context.next = 11;
                return dispatch(_state.authOperations.setCsrf({
                  csrf: csrf
                }));

              case 11:
                if (!status) {
                  _context.next = 14;
                  break;
                }

                _context.next = 14;
                return dispatch(_state.authOperations.setStatus(status));

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
}; // called in App.costructor() client side


exports.create = create;

var start = function start() {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(dispatch) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return dispatch(_state.authOperations.setStatus());

              case 2:
                return _context2.abrupt("return", dispatch(actions.start()));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};

exports.start = start;

var setCookie = function setCookie(_ref4) {
  var name = _ref4.name,
      value = _ref4.value,
      days = _ref4.days;
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(dispatch, getState, di) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                di.get("cookie").set(name, value, days);

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3, _x4, _x5) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
};

exports.setCookie = setCookie;

var getCookie = function getCookie(_ref6) {
  var name = _ref6.name;
  return (
    /*#__PURE__*/
    function () {
      var _ref7 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(dispatch, getState, di) {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", di.get("cookie").get(name));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x6, _x7, _x8) {
        return _ref7.apply(this, arguments);
      };
    }()
  );
};

exports.getCookie = getCookie;

var getToken = function getToken() {
  return (
    /*#__PURE__*/
    function () {
      var _ref8 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(dispatch, getState, di) {
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", di.get("fetcher").getToken());

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x9, _x10, _x11) {
        return _ref8.apply(this, arguments);
      };
    }()
  );
};

exports.getToken = getToken;

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "9cni":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideCredentialsModal = exports.showCredentialsModal = exports.hideEditModal = exports.showEditModal = exports.deselectAll = exports.selectAll = exports.setSelected = exports.remove = exports.set = exports.clear = void 0;

var types = _interopRequireWildcard(__webpack_require__("+Wwo"));

var clear = function clear() {
  return {
    type: types.CLEAR
  };
};

exports.clear = clear;

var set = function set(data) {
  return _.assign({
    type: types.SET
  }, data);
};

exports.set = set;

var remove = function remove(_ref) {
  var deviceId = _ref.deviceId;
  return {
    type: types.REMOVE,
    deviceId: deviceId
  };
};

exports.remove = remove;

var setSelected = function setSelected(_ref2) {
  var deviceId = _ref2.deviceId,
      isSelected = _ref2.isSelected;
  return {
    type: types.SET_SELECTED,
    deviceId: deviceId,
    isSelected: isSelected
  };
};

exports.setSelected = setSelected;

var selectAll = function selectAll(_ref3) {
  var deviceIds = _ref3.deviceIds;
  return {
    type: types.SELECT_ALL,
    deviceIds: deviceIds
  };
};

exports.selectAll = selectAll;

var deselectAll = function deselectAll() {
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      exceptDeviceIds = _ref4.exceptDeviceIds;

  return {
    type: types.DESELECT_ALL,
    exceptDeviceIds: exceptDeviceIds
  };
};

exports.deselectAll = deselectAll;

var showEditModal = function showEditModal() {
  var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      deviceId = _ref5.deviceId;

  return {
    type: types.SHOW_EDIT_MODAL,
    deviceId: deviceId
  };
};

exports.showEditModal = showEditModal;

var hideEditModal = function hideEditModal() {
  return {
    type: types.HIDE_EDIT_MODAL
  };
};

exports.hideEditModal = hideEditModal;

var showCredentialsModal = function showCredentialsModal() {
  var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      deviceId = _ref6.deviceId;

  return {
    type: types.SHOW_CREDENTIALS_MODAL,
    deviceId: deviceId
  };
};

exports.showCredentialsModal = showCredentialsModal;

var hideCredentialsModal = function hideCredentialsModal() {
  return {
    type: types.HIDE_CREDENTIALS_MODAL
  };
};

exports.hideCredentialsModal = hideCredentialsModal;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "Ag9e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeStarting = exports.remove = exports.add = exports.clear = void 0;

var types = _interopRequireWildcard(__webpack_require__("jfPW"));

var clear = function clear() {
  return {
    type: types.CLEAR
  };
};

exports.clear = clear;

var add = function add(_ref) {
  var historyId = _ref.historyId,
      terminalId = _ref.terminalId,
      data = _ref.data;
  return {
    type: types.ADD,
    historyId: historyId,
    terminalId: terminalId,
    data: data
  };
};

exports.add = add;

var remove = function remove(_ref2) {
  var historyId = _ref2.historyId,
      terminalId = _ref2.terminalId;
  return {
    type: types.REMOVE,
    historyId: historyId,
    terminalId: terminalId
  };
};

exports.remove = remove;

var removeStarting = function removeStarting(_ref3) {
  var historyId = _ref3.historyId,
      terminalId = _ref3.terminalId;
  return {
    type: types.REMOVE_STARTING,
    historyId: historyId,
    terminalId: terminalId
  };
};

exports.removeStarting = removeStarting;

/***/ }),

/***/ "Avpf":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$getOwnPropertySymbols = __webpack_require__("4mXO");

var _Object$keys = __webpack_require__("pLtp");

var defineProperty = __webpack_require__("xHqa");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _Object$keys(source);

    if (typeof _Object$getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(_Object$getOwnPropertySymbols(source).filter(function (sym) {
        return _Object$getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "BlHF":
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/en.js");

/***/ }),

/***/ "Cg2A":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("y6vh");

/***/ }),

/***/ "DdWW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.devicesSelectors = exports.devicesOperations = exports.devicesTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__("mQDy"));

var devicesTypes = _interopRequireWildcard(__webpack_require__("+Wwo"));

exports.devicesTypes = devicesTypes;

var devicesOperations = _interopRequireWildcard(__webpack_require__("QGsx"));

exports.devicesOperations = devicesOperations;

var devicesSelectors = _interopRequireWildcard(__webpack_require__("I/1Q"));

exports.devicesSelectors = devicesSelectors;
var _default = _reducers.default;
exports.default = _default;

/***/ }),

/***/ "DxzU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _reactRelay = __webpack_require__("iuEU");

var mutation = function mutation() {
  return __webpack_require__("RJ40");
};

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _promise.default(function (resolve, reject) {
              (0, _reactRelay.commitMutation)(di.get("env"), {
                mutation: mutation,
                variables: {
                  input: input || {}
                },
                onCompleted: function onCompleted(data, errors) {
                  return resolve({
                    data: data,
                    errors: errors
                  });
                },
                onError: reject
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),

/***/ "E4eY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appSelectors = exports.appOperations = exports.appTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__("FE/x"));

var appTypes = _interopRequireWildcard(__webpack_require__("rz8+"));

exports.appTypes = appTypes;

var appOperations = _interopRequireWildcard(__webpack_require__("8L3H"));

exports.appOperations = appOperations;

var appSelectors = _interopRequireWildcard(__webpack_require__("7Z6F"));

exports.appSelectors = appSelectors;
var _default = _reducers.default;
exports.default = _default;

/***/ }),

/***/ "EUet":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFormErrors;

var _getIterator2 = _interopRequireDefault(__webpack_require__("XXOK"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("xHqa"));

var _finalForm = __webpack_require__("MrYO");

function getFormErrors(data) {
  var defaultMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "OPERATION_FAILED";
  var result = {};
  var errors = _.get(data, "errors") || [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator2.default)(errors), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var error = _step.value;
      if (error && error.code === "E_VALIDATION") _.merge(result, error.details);else result[_finalForm.FORM_ERROR] = (result[_finalForm.FORM_ERROR] || []).concat([error.message]);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (!_.keys(result).length) result = (0, _defineProperty2.default)({}, _finalForm.FORM_ERROR, defaultMessage);
  return result;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "EVP0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.historiesSelectors = exports.historiesOperations = exports.historiesTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__("KoUe"));

var historiesTypes = _interopRequireWildcard(__webpack_require__("jfPW"));

exports.historiesTypes = historiesTypes;

var historiesOperations = _interopRequireWildcard(__webpack_require__("6eRU"));

exports.historiesOperations = historiesOperations;

var historiesSelectors = _interopRequireWildcard(__webpack_require__("oUkC"));

exports.historiesSelectors = historiesSelectors;
var _default = _reducers.default;
exports.default = _default;

/***/ }),

/***/ "EmCc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "F7mk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = __webpack_require__("9Pu4");

var _BrowserPage = _interopRequireWildcard(__webpack_require__("zgVy"));

var BrowserPage = (0, _styles.withStyles)(_BrowserPage.styles)(_BrowserPage.default);
BrowserPage.getInitialProps = _BrowserPage.default.getInitialProps;
var _default = BrowserPage;
exports.default = _default;

/***/ }),

/***/ "FE/x":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _now = _interopRequireDefault(__webpack_require__("Cg2A"));

var _reduxImmutable = __webpack_require__("RGyf");

var types = _interopRequireWildcard(__webpack_require__("rz8+"));

var _locales = _interopRequireDefault(__webpack_require__("fXLo"));

/* State Shape
Map({
  created: Number, // timestamp
  locale: String,
  statusCode: Number, // current HTTP status code
  subscriptionsServer: String,
  appOrigin: String,
  proxyOrigin: String,
  sshHost: String,
  sshPort: Number,
  selfRegistration: Boolean,
  isStarted: Boolean,
  isStopped: Boolean,
  isConnected: Boolean, // WebSocket
})
*/
var createdReducer = function createdReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _now.default)();
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
      if (!_.isUndefined(action.created)) return action.created;
      break;
  }

  return state;
};

var localeReducer = function localeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _locales.default.defaultLocale;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_LOCALE:
      if (!_.isUndefined(action.locale)) return action.locale;
      break;
  }

  return state;
};

var statusCodeReducer = function statusCodeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_STATUS_CODE:
      if (_.isFinite(action.code) && action.code >= 200) return action.code;
      break;
  }

  return state;
};

var subscriptionsServerReducer = function subscriptionsServerReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
      if (!_.isUndefined(action.subscriptionsServer)) return action.subscriptionsServer;
      break;
  }

  return state;
};

var appOriginReducer = function appOriginReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "http://localhost";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
      if (!_.isUndefined(action.appOrigin)) return action.appOrigin;
      break;
  }

  return state;
};

var proxyOriginReducer = function proxyOriginReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "http://localhost";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
      if (!_.isUndefined(action.proxyOrigin)) return action.proxyOrigin;
      break;
  }

  return state;
};

var sshHostReducer = function sshHostReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "localhost";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
      if (!_.isUndefined(action.sshHost)) return action.sshHost;
      break;
  }

  return state;
};

var sshPortReducer = function sshPortReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 22;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
      if (!_.isUndefined(action.sshPort)) return action.sshPort;
      break;
  }

  return state;
};

var selfRegistrationReducer = function selfRegistrationReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
      if (!_.isUndefined(action.selfRegistration)) return action.selfRegistration;
      break;
  }

  return state;
};

var isStartedReducer = function isStartedReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.START:
      return true;
  }

  return state;
};

var isStoppedReducer = function isStoppedReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.STOP:
      return true;
  }

  return state;
};

var isConnectedReducer = function isConnectedReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_CONNECTED:
      if (!_.isUndefined(action.isConnected)) return action.isConnected;
      break;
  }

  return state;
};

var reducer = (0, _reduxImmutable.combineReducers)({
  created: createdReducer,
  locale: localeReducer,
  statusCode: statusCodeReducer,
  subscriptionsServer: subscriptionsServerReducer,
  appOrigin: appOriginReducer,
  proxyOrigin: proxyOriginReducer,
  sshHost: sshHostReducer,
  sshPort: sshPortReducer,
  selfRegistration: selfRegistrationReducer,
  isStarted: isStartedReducer,
  isStopped: isStoppedReducer,
  isConnected: isConnectedReducer
});
var _default = reducer;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "I/1Q":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInteractiveModalData = exports.isInteractiveModalOpen = exports.getInteractiveModalDeviceId = exports.getCredentialsModalData = exports.getCredentialsModalDeviceId = exports.isCredentialsModalOpen = exports.getEditModalDeviceId = exports.isEditModalOpen = exports.getSelected = exports.getAddress = exports.getName = exports.getDeviceInfo = exports.getOnline = void 0;

var _immutable = __webpack_require__("nuGg");

var _reselect = __webpack_require__("MWqi");

var getOnline = (0, _reselect.createSelector)(function (state) {
  return state.getIn(["devices", "online"]);
}, function (state) {
  return state.getIn(["terminals", "online"]);
}, function (devices, terminals) {
  return devices // eslint-disable-line lodash/prefer-lodash-method
  .map(function (deviceInfo, deviceId) {
    return deviceInfo.set("terminals", terminals // eslint-disable-line lodash/prefer-lodash-method
    .map(function (terminalInfo, terminalId) {
      return {
        id: terminalId,
        valid: terminalInfo.get("deviceId") === deviceId
      };
    }).toList().filter(function (item) {
      return !!item.valid;
    }).map(function (item) {
      return item.id;
    }));
  });
});
exports.getOnline = getOnline;
var getDeviceInfo = (0, _reselect.createSelector)(function (state) {
  return state.getIn(["devices", "online"]);
}, function (state, props) {
  return props.deviceId;
}, function (online, deviceId) {
  var info = online.get(deviceId);
  return info && info.toJS();
});
exports.getDeviceInfo = getDeviceInfo;

var getName = function getName(state, props) {
  return state.getIn(["devices", "online", props.deviceId, "name"]) || "";
};

exports.getName = getName;

var getAddress = function getAddress(state, props) {
  return state.getIn(["devices", "online", props.deviceId, "address"]) || "";
};

exports.getAddress = getAddress;
var getSelected = (0, _reselect.createSelector)(function (state) {
  return state.getIn(["devices", "selected"]);
}, function (selected) {
  return selected.toJS();
});
exports.getSelected = getSelected;

var isEditModalOpen = function isEditModalOpen(state) {
  return state.getIn(["devices", "isEditModalOpen"]);
};

exports.isEditModalOpen = isEditModalOpen;

var getEditModalDeviceId = function getEditModalDeviceId(state) {
  return state.getIn(["devices", "editModalDeviceId"]);
};

exports.getEditModalDeviceId = getEditModalDeviceId;

var isCredentialsModalOpen = function isCredentialsModalOpen(state) {
  return state.getIn(["devices", "isCredentialsModalOpen"]);
};

exports.isCredentialsModalOpen = isCredentialsModalOpen;

var getCredentialsModalDeviceId = function getCredentialsModalDeviceId(state) {
  return state.getIn(["devices", "credentialsModalDeviceId"]);
};

exports.getCredentialsModalDeviceId = getCredentialsModalDeviceId;

var getCredentialsModalData = function getCredentialsModalData(state) {
  var id = state.getIn(["devices", "credentialsModalDeviceId"]);
  if (!id) return (0, _immutable.Map)();
  var data = // eslint-disable-next-line lodash/prefer-lodash-method
  state.getIn(["devices", "online"]).find(function (item) {
    return item.get("deviceId") === id;
  }) || (0, _immutable.Map)();
  return data.toJS();
};

exports.getCredentialsModalData = getCredentialsModalData;

var getInteractiveModalDeviceId = function getInteractiveModalDeviceId(state) {
  return state.getIn(["devices", "online"]).findKey(function (device) {
    return !!device.getIn(["auth", "prompts"]);
  }) || null;
};

exports.getInteractiveModalDeviceId = getInteractiveModalDeviceId;

var isInteractiveModalOpen = function isInteractiveModalOpen(state) {
  return !!getInteractiveModalDeviceId(state);
};

exports.isInteractiveModalOpen = isInteractiveModalOpen;

var getInteractiveModalData = function getInteractiveModalData(state) {
  var id = getInteractiveModalDeviceId(state);
  var data = id && state.getIn(["devices", "online", id, "auth"]) || (0, _immutable.Map)();
  return data.toJS();
};

exports.getInteractiveModalData = getInteractiveModalData;

/***/ }),

/***/ "J3/a":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "KoUe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getIterator2 = _interopRequireDefault(__webpack_require__("XXOK"));

var _reduxImmutable = __webpack_require__("RGyf");

var _immutable = __webpack_require__("nuGg");

var _uuid = _interopRequireDefault(__webpack_require__("kNaX"));

var types = _interopRequireWildcard(__webpack_require__("jfPW"));

var _constants = _interopRequireDefault(__webpack_require__("o4p3"));

/* State Shape
Map({
  historyId: List([ // equals terminalId or cameraId
    {
      recordId: string,
      isError: Boolean,
      data: String,
    },
  ])
})
*/
var recordIdReducer = function recordIdReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _uuid.default.v4();
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.ADD:
      if (!_.isUndefined(action.recordId)) return action.recordId;
      break;
  }

  return state;
};

var isErrorReducer = function isErrorReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.ADD:
      if (!_.isUndefined(action.isError)) return action.isError;
      break;
  }

  return state;
};

var dataReducer = function dataReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.ADD:
      if (!_.isUndefined(action.data)) return action.data;
      break;
  }

  return state;
};

var recordReducer = (0, _reduxImmutable.combineReducers)({
  recordId: recordIdReducer,
  isError: isErrorReducer,
  data: dataReducer
});

var listReducer = function listReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.List)([]);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.ADD:
      return state.withMutations(function (list) {
        var data = _.isArray(action.data) ? action.data : [action.data];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          var _loop = function _loop() {
            var item = _step.value;
            // eslint-disable-next-line lodash/prefer-lodash-method
            if (list.find(function (el) {
              return el.get("recordId") === item.recordId;
            })) return "continue";
            list.push(recordReducer(undefined, _.assign({
              type: types.ADD
            }, item)));
            if (list.size > _constants.default.historySize) list.shift();
          };

          for (var _iterator = (0, _getIterator2.default)(data), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _ret = _loop();

            if (_ret === "continue") continue;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      });
  }

  return state;
};

var historiesReducer = function historiesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.Map)({});
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CLEAR:
      return (0, _immutable.Map)({});

    case types.ADD:
      return state.withMutations(function (map) {
        var id = action.historyId || action.terminalId;
        map.set(id, listReducer(map.get(id), action));
      });

    case types.REMOVE:
      return state.delete(action.historyId || action.terminalId);

    case types.REMOVE_STARTING:
      return state.withMutations(function (map) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = (0, _getIterator2.default)(map.keys()), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var id = _step2.value;
            if (_.startsWith(id, action.historyId || action.terminalId)) map.delete(id);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      });
  }

  return state;
};

var _default = historiesReducer;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "MWqi":
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),

/***/ "MrYO":
/***/ (function(module, exports) {

module.exports = require("final-form");

/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "O3Y7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _reactRelay = __webpack_require__("iuEU");

var mutation = function mutation() {
  return __webpack_require__("hY29");
};

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _promise.default(function (resolve, reject) {
              (0, _reactRelay.commitMutation)(di.get("env"), {
                mutation: mutation,
                variables: {
                  input: input || {}
                },
                onCompleted: function onCompleted(data, errors) {
                  return resolve({
                    data: data,
                    errors: errors
                  });
                },
                onError: reject
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),

/***/ "QGsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.disconnect = exports.openBrowser = exports.openTerminal = exports.doInteractiveAuth = exports.finishAuth = exports.cancelAuth = exports.startAuth = exports.reqRemove = exports.reqEdit = exports.reqCreate = exports.remove = exports.editFirstSelected = exports.deselectAll = exports.selectAll = exports.setSelected = exports.hideCredentialsModal = exports.showCredentialsModal = exports.hideEditModal = exports.showEditModal = exports.set = exports.clear = void 0;

var _parseInt2 = _interopRequireDefault(__webpack_require__("6BQ9"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _router = _interopRequireDefault(__webpack_require__("4Q3z"));

var actions = _interopRequireWildcard(__webpack_require__("9cni"));

var selectors = _interopRequireWildcard(__webpack_require__("I/1Q"));

var _state = __webpack_require__("cf5E");

var _getFormErrors = _interopRequireDefault(__webpack_require__("EUet"));

var _CreateDevice = _interopRequireDefault(__webpack_require__("O3Y7"));

var _EditDevice = _interopRequireDefault(__webpack_require__("njrX"));

var _DeleteDevice = _interopRequireDefault(__webpack_require__("nzBE"));

var _constants = _interopRequireDefault(__webpack_require__("o4p3"));

var clear = actions.clear;
exports.clear = clear;
var set = actions.set;
exports.set = set;
var showEditModal = actions.showEditModal;
exports.showEditModal = showEditModal;
var hideEditModal = actions.hideEditModal;
exports.hideEditModal = hideEditModal;
var showCredentialsModal = actions.showCredentialsModal;
exports.showCredentialsModal = showCredentialsModal;
var hideCredentialsModal = actions.hideCredentialsModal;
exports.hideCredentialsModal = hideCredentialsModal;
var setSelected = actions.setSelected;
exports.setSelected = setSelected;
var selectAll = actions.selectAll;
exports.selectAll = selectAll;
var deselectAll = actions.deselectAll;
exports.deselectAll = deselectAll;

var editFirstSelected = function editFirstSelected() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(dispatch, getState) {
        var selected;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                selected = selectors.getSelected(getState());

                if (!selected.length) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", dispatch(actions.showEditModal({
                  deviceId: selected[0]
                })));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

exports.editFirstSelected = editFirstSelected;

var remove = function remove(_ref2) {
  var deviceId = _ref2.deviceId;
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(dispatch, getState) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _promise.default.all( // eslint-disable-next-line lodash/prefer-lodash-method
                _state.terminalsSelectors.getTerminalsMap(getState()).map(function (terminal, terminalId) {
                  if (terminal.get("deviceId") === deviceId) return dispatch(_state.terminalsOperations.remove({
                    terminalId: terminalId
                  }));
                }).toList().filter(function (item) {
                  return !!item;
                }).toJS());

              case 2:
                return _context2.abrupt("return", dispatch(actions.remove({
                  deviceId: deviceId
                })));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x3, _x4) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};

exports.remove = remove;

var reqCreate = function reqCreate(_ref4) {
  var name = _ref4.name,
      password = _ref4.password;
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _CreateDevice.default)(di, {
                  name: name,
                  password: password
                });

              case 2:
                data = _context3.sent;

                if (!_.get(data, "data.createDevice.device.id", null)) {
                  _context3.next = 7;
                  break;
                }

                _context3.next = 6;
                return dispatch(actions.hideEditModal());

              case 6:
                return _context3.abrupt("return", true);

              case 7:
                return _context3.abrupt("return", (0, _getFormErrors.default)(data));

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x5, _x6, _x7) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
};

exports.reqCreate = reqCreate;

var reqEdit = function reqEdit(_ref6) {
  var id = _ref6.id,
      name = _ref6.name,
      password = _ref6.password;
  return (
    /*#__PURE__*/
    function () {
      var _ref7 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _EditDevice.default)(di, {
                  id: id,
                  name: name,
                  password: password
                });

              case 2:
                data = _context4.sent;

                if (!_.get(data, "data.editDevice.device.id", null)) {
                  _context4.next = 7;
                  break;
                }

                _context4.next = 6;
                return dispatch(actions.hideEditModal());

              case 6:
                return _context4.abrupt("return", true);

              case 7:
                return _context4.abrupt("return", (0, _getFormErrors.default)(data));

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x8, _x9, _x10) {
        return _ref7.apply(this, arguments);
      };
    }()
  );
};

exports.reqEdit = reqEdit;

var reqRemove = function reqRemove(_ref8) {
  var id = _ref8.id;
  return (
    /*#__PURE__*/
    function () {
      var _ref9 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(dispatch, getState, di) {
        var data;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return (0, _DeleteDevice.default)(di, {
                  id: id
                });

              case 2:
                data = _context5.sent;
                return _context5.abrupt("return", !!_.get(data, "data.deleteDevice.device.id", null));

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x11, _x12, _x13) {
        return _ref9.apply(this, arguments);
      };
    }()
  );
};

exports.reqRemove = reqRemove;

var startAuth = function startAuth(_ref10) {
  var deviceId = _ref10.deviceId;
  return (
    /*#__PURE__*/
    function () {
      var _ref11 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee6(dispatch) {
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", dispatch(showCredentialsModal({
                  deviceId: deviceId
                })));

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x14) {
        return _ref11.apply(this, arguments);
      };
    }()
  );
};

exports.startAuth = startAuth;

var cancelAuth = function cancelAuth() {
  return (
    /*#__PURE__*/
    function () {
      var _ref12 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee7(dispatch) {
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", dispatch(hideCredentialsModal()));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function (_x15) {
        return _ref12.apply(this, arguments);
      };
    }()
  );
};

exports.cancelAuth = cancelAuth;

var finishAuth = function finishAuth(_ref13) {
  var username = _ref13.username,
      password = _ref13.password;
  return (
    /*#__PURE__*/
    function () {
      var _ref14 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee8(dispatch, getState, di) {
        var deviceId, socket;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                deviceId = selectors.getCredentialsModalDeviceId(getState());
                _context8.next = 3;
                return dispatch(hideCredentialsModal());

              case 3:
                socket = di.get("socket");

                if (socket && deviceId) {
                  socket.emit(_constants.default.messages.CONNECT_DEVICE, {
                    deviceId: deviceId,
                    username: username,
                    password: password
                  });
                }

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      return function (_x16, _x17, _x18) {
        return _ref14.apply(this, arguments);
      };
    }()
  );
};

exports.finishAuth = finishAuth;

var doInteractiveAuth = function doInteractiveAuth() {
  var _ref15 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref15$reply = _ref15.reply,
      reply = _ref15$reply === void 0 ? "" : _ref15$reply;

  return (
    /*#__PURE__*/
    function () {
      var _ref16 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee9(dispatch, getState, di) {
        var deviceId, socket;
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                deviceId = selectors.getInteractiveModalDeviceId(getState());
                socket = di.get("socket");

                if (socket && deviceId) {
                  socket.emit(_constants.default.messages.FINISH_AUTH, {
                    deviceId: deviceId,
                    reply: reply
                  });
                }

              case 3:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      return function (_x19, _x20, _x21) {
        return _ref16.apply(this, arguments);
      };
    }()
  );
};

exports.doInteractiveAuth = doInteractiveAuth;

var openTerminal = function openTerminal(_ref17) {
  var deviceId = _ref17.deviceId;
  return (
    /*#__PURE__*/
    function () {
      var _ref18 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee11(dispatch, getState, di) {
        var socket;
        return _regenerator.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                socket = di.get("socket");

                if (socket) {
                  socket.emit(_constants.default.messages.CONNECT_TERMINAL, {
                    deviceId: deviceId
                  },
                  /*#__PURE__*/
                  function () {
                    var _ref19 = (0, _asyncToGenerator2.default)(
                    /*#__PURE__*/
                    _regenerator.default.mark(function _callee10(response) {
                      return _regenerator.default.wrap(function _callee10$(_context10) {
                        while (1) {
                          switch (_context10.prev = _context10.next) {
                            case 0:
                              if (response && response.id) {
                                _router.default.push({
                                  pathname: "/terminal",
                                  query: {
                                    terminalId: response.id
                                  }
                                });
                              }

                            case 1:
                            case "end":
                              return _context10.stop();
                          }
                        }
                      }, _callee10);
                    }));

                    return function (_x25) {
                      return _ref19.apply(this, arguments);
                    };
                  }());
                }

              case 2:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));

      return function (_x22, _x23, _x24) {
        return _ref18.apply(this, arguments);
      };
    }()
  );
};

exports.openTerminal = openTerminal;

var openBrowser = function openBrowser(_ref20) {
  var deviceId = _ref20.deviceId,
      host = _ref20.host,
      port = _ref20.port,
      isAuthNeeded = _ref20.isAuthNeeded,
      username = _ref20.username,
      password = _ref20.password;
  return (
    /*#__PURE__*/
    function () {
      var _ref21 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee13(dispatch, getState, di) {
        var socket;
        return _regenerator.default.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                port = (0, _parseInt2.default)(port);

                if (port) {
                  _context13.next = 3;
                  break;
                }

                return _context13.abrupt("return");

              case 3:
                socket = di.get("socket");

                if (socket) {
                  socket.emit(_constants.default.messages.CONNECT_BROWSER, {
                    deviceId: deviceId,
                    host: host,
                    port: port,
                    isAuthNeeded: isAuthNeeded,
                    username: username,
                    password: password
                  },
                  /*#__PURE__*/
                  function () {
                    var _ref22 = (0, _asyncToGenerator2.default)(
                    /*#__PURE__*/
                    _regenerator.default.mark(function _callee12(response) {
                      return _regenerator.default.wrap(function _callee12$(_context12) {
                        while (1) {
                          switch (_context12.prev = _context12.next) {
                            case 0:
                              if (response) {
                                _router.default.push({
                                  pathname: "/browser",
                                  query: {
                                    deviceId: deviceId,
                                    host: host,
                                    port: port
                                  }
                                });
                              }

                            case 1:
                            case "end":
                              return _context12.stop();
                          }
                        }
                      }, _callee12);
                    }));

                    return function (_x29) {
                      return _ref22.apply(this, arguments);
                    };
                  }());
                }

              case 5:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }));

      return function (_x26, _x27, _x28) {
        return _ref21.apply(this, arguments);
      };
    }()
  );
};

exports.openBrowser = openBrowser;

var disconnect = function disconnect(_ref23) {
  var deviceId = _ref23.deviceId;
  return (
    /*#__PURE__*/
    function () {
      var _ref24 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee14(dispatch, getState, di) {
        var socket;
        return _regenerator.default.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                socket = di.get("socket");

                if (socket) {
                  socket.emit(_constants.default.messages.DISCONNECT_DEVICE, {
                    deviceId: deviceId
                  });
                }

              case 2:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14);
      }));

      return function (_x30, _x31, _x32) {
        return _ref24.apply(this, arguments);
      };
    }()
  );
};

exports.disconnect = disconnect;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "RGyf":
/***/ (function(module, exports) {

module.exports = require("redux-immutable");

/***/ }),

/***/ "RJ40":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 865cce8ddb297161c467f77194d19177
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SignOutInput = {|
  clientMutationId?: ?string
|};
export type SignOutMutationVariables = {|
  input: SignOutInput
|};
export type SignOutMutationResponse = {|
  +signOut: ?{|
    +success: ?boolean
  |}
|};
export type SignOutMutation = {|
  variables: SignOutMutationVariables,
  response: SignOutMutationResponse,
|};
*/

/*
mutation SignOutMutation(
  $input: SignOutInput!
) {
  signOut(input: $input) {
    success
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "SignOutInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "signOut",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "SignOutInput!"
    }],
    "concreteType": "SignOutPayload",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "success",
      "args": null,
      "storageKey": null
    }]
  }];
  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "SignOutMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "operation": {
      "kind": "Operation",
      "name": "SignOutMutation",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "mutation",
      "name": "SignOutMutation",
      "id": null,
      "text": "mutation SignOutMutation(\n  $input: SignOutInput!\n) {\n  signOut(input: $input) {\n    success\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '417ec230bfa986933ff799e6fab9074c';
module.exports = node;

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Ty80":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //const moment = require("moment-timezone");

var moment = __webpack_require__("wy2R"); // Add locales:
//require("moment/locale/ru.js"); // en is already there


module.exports = moment;

/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "XXOK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("J3/a");

/***/ }),

/***/ "XyPp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.kill = exports.sendResize = exports.sendInput = exports.set = exports.clear = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var actions = _interopRequireWildcard(__webpack_require__("oTdc"));

var _state = __webpack_require__("EVP0");

var _constants = _interopRequireDefault(__webpack_require__("o4p3"));

var clear = actions.clear;
exports.clear = clear;
var set = actions.set;
exports.set = set;

var sendInput = function sendInput(_ref) {
  var terminalId = _ref.terminalId,
      data = _ref.data;
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(dispatch, getState, di) {
        var socket;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                socket = di.get("socket");

                if (socket) {
                  socket.emit(_constants.default.messages.TERMINAL_INPUT, {
                    terminalId: terminalId,
                    data: data
                  });
                }

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};

exports.sendInput = sendInput;

var sendResize = function sendResize(_ref3) {
  var terminalId = _ref3.terminalId,
      cols = _ref3.cols,
      rows = _ref3.rows,
      width = _ref3.width,
      height = _ref3.height;
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(dispatch, getState, di) {
        var socket;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                socket = di.get("socket");

                if (socket) {
                  socket.emit(_constants.default.messages.TERMINAL_RESIZED, {
                    terminalId: terminalId,
                    cols: cols,
                    rows: rows,
                    width: width,
                    height: height
                  });
                }

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x4, _x5, _x6) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
};

exports.sendResize = sendResize;

var kill = function kill(_ref5) {
  var terminalId = _ref5.terminalId;
  return (
    /*#__PURE__*/
    function () {
      var _ref6 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(dispatch, getState, di) {
        var socket;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                socket = di.get("socket");

                if (socket) {
                  socket.emit(_constants.default.messages.DISCONNECT_TERMINAL, {
                    terminalId: terminalId
                  });
                }

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x7, _x8, _x9) {
        return _ref6.apply(this, arguments);
      };
    }()
  );
};

exports.kill = kill;

var remove = function remove(_ref7) {
  var terminalId = _ref7.terminalId;
  return (
    /*#__PURE__*/
    function () {
      var _ref8 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(dispatch) {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return dispatch(_state.historiesOperations.remove({
                  terminalId: terminalId
                }));

              case 2:
                return _context4.abrupt("return", dispatch(actions.remove({
                  terminalId: terminalId
                })));

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x10) {
        return _ref8.apply(this, arguments);
      };
    }()
  );
};

exports.remove = remove;

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "Yoxy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authSelectors = exports.authOperations = exports.authTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__("xbgq"));

var authTypes = _interopRequireWildcard(__webpack_require__("+z5V"));

exports.authTypes = authTypes;

var authOperations = _interopRequireWildcard(__webpack_require__("+Opk"));

exports.authOperations = authOperations;

var authSelectors = _interopRequireWildcard(__webpack_require__("p/Qe"));

exports.authSelectors = authSelectors;
var _default = _reducers.default;
exports.default = _default;

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "a9Mw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash bedd920006f01dc47f1d1b914e7c35fd
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteDeviceInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type DeleteDeviceMutationVariables = {|
  input: DeleteDeviceInput
|};
export type DeleteDeviceMutationResponse = {|
  +deleteDevice: ?{|
    +device: ?{|
      +id: string
    |}
  |}
|};
export type DeleteDeviceMutation = {|
  variables: DeleteDeviceMutationVariables,
  response: DeleteDeviceMutationResponse,
|};
*/

/*
mutation DeleteDeviceMutation(
  $input: DeleteDeviceInput!
) {
  deleteDevice(input: $input) {
    device {
      id
    }
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteDeviceInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteDevice",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "DeleteDeviceInput!"
    }],
    "concreteType": "DeleteDevicePayload",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "device",
      "storageKey": null,
      "args": null,
      "concreteType": "Device",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }]
    }]
  }];
  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "DeleteDeviceMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "operation": {
      "kind": "Operation",
      "name": "DeleteDeviceMutation",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "mutation",
      "name": "DeleteDeviceMutation",
      "id": null,
      "text": "mutation DeleteDeviceMutation(\n  $input: DeleteDeviceInput!\n) {\n  deleteDevice(input: $input) {\n    device {\n      id\n    }\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '414bfc5fc7aa344a813e486866e69592';
module.exports = node;

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bI0k":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash c5beb0a0504b2cb87bdaa407d15f3dff
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SignInInput = {|
  login?: ?string,
  password?: ?string,
  clientMutationId?: ?string,
|};
export type SignInMutationVariables = {|
  input: SignInInput
|};
export type SignInMutationResponse = {|
  +signIn: ?{|
    +success: ?boolean
  |}
|};
export type SignInMutation = {|
  variables: SignInMutationVariables,
  response: SignInMutationResponse,
|};
*/

/*
mutation SignInMutation(
  $input: SignInInput!
) {
  signIn(input: $input) {
    success
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "SignInInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "signIn",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "SignInInput!"
    }],
    "concreteType": "SignInPayload",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "success",
      "args": null,
      "storageKey": null
    }]
  }];
  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "SignInMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "operation": {
      "kind": "Operation",
      "name": "SignInMutation",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "mutation",
      "name": "SignInMutation",
      "id": null,
      "text": "mutation SignInMutation(\n  $input: SignInInput!\n) {\n  signIn(input: $input) {\n    success\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '153fa344d90b87f0fcb641bc7a1ed120';
module.exports = node;

/***/ }),

/***/ "bKT8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _BrowserPageContainer.default;
  }
});

var _BrowserPageContainer = _interopRequireDefault(__webpack_require__("F7mk"));

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cf5E":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.terminalsSelectors = exports.terminalsOperations = exports.terminalsTypes = exports.default = void 0;

var _reducers = _interopRequireDefault(__webpack_require__("ivBY"));

var terminalsTypes = _interopRequireWildcard(__webpack_require__("+1HE"));

exports.terminalsTypes = terminalsTypes;

var terminalsOperations = _interopRequireWildcard(__webpack_require__("XyPp"));

exports.terminalsOperations = terminalsOperations;

var terminalsSelectors = _interopRequireWildcard(__webpack_require__("vi2s"));

exports.terminalsSelectors = terminalsSelectors;
var _default = _reducers.default;
exports.default = _default;

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "fXLo":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireDefault = __webpack_require__("KI45");

var _getIterator2 = _interopRequireDefault(__webpack_require__("XXOK"));

function parse(source) {
  var messages = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator2.default)(_.keys(source)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;
      messages[key] = _.isArray(source[key]) ? source[key].join("") : source[key];
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return messages;
}

module.exports = {
  defaultLocale: "en",
  locales: ["en"],
  flags: {
    en: "US"
  },
  names: {
    en: "English"
  },
  messages: {
    en: parse(__webpack_require__("vmr9"))
  },
  getLocaleData: function getLocaleData() {
    return [__webpack_require__("BlHF")];
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "gRch":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLocale = exports.setConnected = exports.setStatusCode = exports.stop = exports.start = exports.create = void 0;

var _moment = _interopRequireDefault(__webpack_require__("Ty80"));

var types = _interopRequireWildcard(__webpack_require__("rz8+"));

var create = function create(data) {
  return _.assign({
    type: types.CREATE
  }, data);
};

exports.create = create;

var start = function start() {
  return {
    type: types.START
  };
};

exports.start = start;

var stop = function stop() {
  return {
    type: types.STOP
  };
};

exports.stop = stop;

var setStatusCode = function setStatusCode(_ref) {
  var code = _ref.code;
  return {
    type: types.SET_STATUS_CODE,
    code: code
  };
};

exports.setStatusCode = setStatusCode;

var setConnected = function setConnected(_ref2) {
  var isConnected = _ref2.isConnected;
  return {
    type: types.SET_CONNECTED,
    isConnected: isConnected
  };
};

exports.setConnected = setConnected;

var setLocale = function setLocale(_ref3) {
  var locale = _ref3.locale;

  _moment.default.locale(locale);

  return {
    type: types.SET_LOCALE,
    locale: locale
  };
};

exports.setLocale = setLocale;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hY29":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash be6a9d2ac2d1bb568e51e308e7cbd573
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateDeviceInput = {|
  name?: ?string,
  password?: ?string,
  clientMutationId?: ?string,
|};
export type CreateDeviceMutationVariables = {|
  input: CreateDeviceInput
|};
export type CreateDeviceMutationResponse = {|
  +createDevice: ?{|
    +device: ?{|
      +id: string
    |}
  |}
|};
export type CreateDeviceMutation = {|
  variables: CreateDeviceMutationVariables,
  response: CreateDeviceMutationResponse,
|};
*/

/*
mutation CreateDeviceMutation(
  $input: CreateDeviceInput!
) {
  createDevice(input: $input) {
    device {
      id
    }
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateDeviceInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "createDevice",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "CreateDeviceInput!"
    }],
    "concreteType": "CreateDevicePayload",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "device",
      "storageKey": null,
      "args": null,
      "concreteType": "Device",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }]
    }]
  }];
  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "CreateDeviceMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "operation": {
      "kind": "Operation",
      "name": "CreateDeviceMutation",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "mutation",
      "name": "CreateDeviceMutation",
      "id": null,
      "text": "mutation CreateDeviceMutation(\n  $input: CreateDeviceInput!\n) {\n  createDevice(input: $input) {\n    device {\n      id\n    }\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '5b6180498bb2d5d9c5511f79955145a7';
module.exports = node;

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "iuEU":
/***/ (function(module, exports) {

module.exports = require("react-relay");

/***/ }),

/***/ "ivBY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _now = _interopRequireDefault(__webpack_require__("Cg2A"));

var _reduxImmutable = __webpack_require__("RGyf");

var _immutable = __webpack_require__("nuGg");

var types = _interopRequireWildcard(__webpack_require__("+1HE"));

/* State Shape
Map({
  online: Map({
    terminalId: Map({
      deviceId: String,
      name: String,
    })
  })
})
*/
var deviceIdReducer = function deviceIdReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
    case types.SET:
      if (!_.isUndefined(action.deviceId)) return action.deviceId;
      break;
  }

  return state;
};

var whenCreatedReducer = function whenCreatedReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _now.default)();
  return state;
};

var nameReducer = function nameReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CREATE:
    case types.SET:
      if (!_.isUndefined(action.name)) return action.name;
      break;
  }

  return state;
};

var terminalReducer = (0, _reduxImmutable.combineReducers)({
  deviceId: deviceIdReducer,
  whenCreated: whenCreatedReducer,
  name: nameReducer
});

var onlineReducer = function onlineReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.Map)({});
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CLEAR:
      return (0, _immutable.Map)({});

    case types.SET:
      return state.withMutations(function (map) {
        return map.set(action.terminalId, terminalReducer(map.get(action.terminalId), _.assign({
          type: types.SET
        }, action.data)));
      });

    case types.REMOVE:
      return state.delete(action.terminalId);
  }

  return state;
};

var reducer = (0, _reduxImmutable.combineReducers)({
  online: onlineReducer
});
var _default = reducer;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "j08L":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "jfPW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.REMOVE_STARTING = exports.REMOVE = exports.ADD = exports.CLEAR = void 0;
var CLEAR = "app/histories/CLEAR";
exports.CLEAR = CLEAR;
var ADD = "app/histories/ADD";
exports.ADD = ADD;
var REMOVE = "app/histories/REMOVE";
exports.REMOVE = REMOVE;
var REMOVE_STARTING = "app/histories/REMOVE_STARTING";
exports.REMOVE_STARTING = REMOVE_STARTING;

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "kNaX":
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "mQDy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getIterator2 = _interopRequireDefault(__webpack_require__("XXOK"));

var _immutable = __webpack_require__("nuGg");

var _reduxImmutable = __webpack_require__("RGyf");

var types = _interopRequireWildcard(__webpack_require__("+Wwo"));

/* State Shape
Map({
  online: Map({
    deviceId: Map({
      name: String,
      status: String, // or null
      address: String,
      isLoggingIn: Boolean,
      isLoggedIn: Boolean,
      auth: Map({
        banner: String, // or null
        prompts: List([String]), // or null if not requested
      }),
    }),
  })
  selected: Set([String]), // IDs
  editModalDeviceId: String, // null when creating a new device
  isEditModalOpen: false,
  credentialsModalDeviceId: String,
  isCredentialsModalOpen: false,
})
*/
var nameReducer = function nameReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET:
      if (!_.isUndefined(action.name)) return action.name;
      break;
  }

  return state;
};

var statusReducer = function statusReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET:
      if (!_.isUndefined(action.status)) return action.status;
      break;
  }

  return state;
};

var addressReducer = function addressReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET:
      if (!_.isUndefined(action.address)) return action.address;
      break;
  }

  return state;
};

var isLoggingInReducer = function isLoggingInReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET:
      if (!_.isUndefined(action.isLoggingIn)) return action.isLoggingIn;
      break;
  }

  return state;
};

var isLoggedInReducer = function isLoggedInReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET:
      if (!_.isUndefined(action.isLoggedIn)) return action.isLoggedIn;
      break;
  }

  return state;
};

var authBannerReducer = function authBannerReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var tmp;

  switch (action.type) {
    case types.SET:
      tmp = action.auth;
      if (!_.isUndefined(tmp)) return tmp && tmp.banner ? tmp.banner : null;
      break;
  }

  return state;
};

var authPromptsReducer = function authPromptsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var tmp;

  switch (action.type) {
    case types.SET:
      tmp = action.auth;
      if (!_.isUndefined(tmp)) return tmp && tmp.prompts ? (0, _immutable.fromJS)(tmp.prompts) : null;
      break;
  }

  return state;
};

var authReducer = (0, _reduxImmutable.combineReducers)({
  banner: authBannerReducer,
  prompts: authPromptsReducer
});
var deviceReducer = (0, _reduxImmutable.combineReducers)({
  name: nameReducer,
  status: statusReducer,
  address: addressReducer,
  isLoggingIn: isLoggingInReducer,
  isLoggedIn: isLoggedInReducer,
  auth: authReducer
});

var onlineReducer = function onlineReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.Map)({});
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.CLEAR:
      return (0, _immutable.Map)({});

    case types.SET:
      return state.withMutations(function (map) {
        return map.set(action.deviceId, deviceReducer(map.get(action.deviceId), _.assign({
          type: types.SET
        }, action.data)));
      });

    case types.REMOVE:
      return state.delete(action.deviceId);
  }

  return state;
};

var selectedReducer = function selectedReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.Set)([]);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_SELECTED:
      if (!_.isUndefined(action.deviceId) && !_.isUndefined(action.isSelected)) {
        // eslint-disable-next-line lodash/prefer-lodash-method
        if (state.includes(action.deviceId)) return state.delete(action.deviceId);else return state.add(action.deviceId);
      }

      break;

    case types.SELECT_ALL:
      if (!_.isUndefined(action.deviceIds)) return (0, _immutable.Set)(action.deviceIds);
      break;

    case types.DESELECT_ALL:
      if (_.isUndefined(action.exceptDeviceIds)) {
        return (0, _immutable.Set)([]);
      } else {
        return state.withMutations(function (set) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = (0, _getIterator2.default)(set.values()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var item = _step.value;
              if (!_.includes(action.exceptDeviceIds, item)) set.delete(item);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        });
      }

  }

  return state;
};

var editModalDeviceIdReducer = function editModalDeviceIdReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SHOW_EDIT_MODAL:
      return action.deviceId || null;
  }

  return state;
};

var isEditModalOpenReducer = function isEditModalOpenReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SHOW_EDIT_MODAL:
      return true;

    case types.HIDE_EDIT_MODAL:
      return false;
  }

  return state;
};

var credentialsModalDeviceIdReducer = function credentialsModalDeviceIdReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SHOW_CREDENTIALS_MODAL:
      return action.deviceId || null;
  }

  return state;
};

var isCredentialsModalOpenReducer = function isCredentialsModalOpenReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SHOW_CREDENTIALS_MODAL:
      return true;

    case types.HIDE_CREDENTIALS_MODAL:
      return false;
  }

  return state;
};

var reducer = (0, _reduxImmutable.combineReducers)({
  online: onlineReducer,
  selected: selectedReducer,
  editModalDeviceId: editModalDeviceIdReducer,
  isEditModalOpen: isEditModalOpenReducer,
  credentialsModalDeviceId: credentialsModalDeviceIdReducer,
  isCredentialsModalOpen: isCredentialsModalOpenReducer
});
var _default = reducer;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "njrX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _reactRelay = __webpack_require__("iuEU");

var mutation = function mutation() {
  return __webpack_require__("quj4");
};

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _promise.default(function (resolve, reject) {
              (0, _reactRelay.commitMutation)(di.get("env"), {
                mutation: mutation,
                variables: {
                  input: input || {}
                },
                onCompleted: function onCompleted(data, errors) {
                  return resolve({
                    data: data,
                    errors: errors
                  });
                },
                onError: reject
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),

/***/ "nuGg":
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),

/***/ "nzBE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _reactRelay = __webpack_require__("iuEU");

var mutation = function mutation() {
  return __webpack_require__("a9Mw");
};

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(di, input) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new _promise.default(function (resolve, reject) {
              (0, _reactRelay.commitMutation)(di.get("env"), {
                mutation: mutation,
                variables: {
                  input: input || {}
                },
                onCompleted: function onCompleted(data, errors) {
                  return resolve({
                    data: data,
                    errors: errors
                  });
                },
                onError: reject
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;

/***/ }),

/***/ "o4p3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var roles = {
  AUTHENTICATED: "AUTHENTICATED",
  // every one who is authorized has this
  ADMIN: "ADMIN"
};
module.exports = {
  apiBase: "/api",
  graphqlBase: "/graphql",
  socketsBase: "/ws",
  roles: roles,
  pages: {
    "/": {
      page: "/"
    },
    "/devices": {
      page: "/devices",
      icon: "devices",
      menu: "MENU_DEVICES",
      title: "TITLE_DEVICES",
      isAllowed: function isAllowed(userRoles) {
        return _.includes(userRoles, roles.AUTHENTICATED);
      }
    },
    "/terminal": {
      page: "/terminal",
      icon: "terminal",
      isAllowed: function isAllowed(userRoles) {
        return _.includes(userRoles, roles.AUTHENTICATED);
      }
    },
    "/browser": {
      page: "/browser",
      icon: "browser",
      isAllowed: function isAllowed(userRoles) {
        return _.includes(userRoles, roles.AUTHENTICATED);
      }
    },
    "/users": {
      page: "/users",
      icon: "users",
      menu: "MENU_USERS",
      title: "TITLE_USERS",
      isAllowed: function isAllowed(userRoles) {
        return _.includes(userRoles, roles.ADMIN);
      }
    }
  },
  messages: {
    // client requests
    CONNECT_DEVICE: "CONNECT_DEVICE",
    FINISH_AUTH: "FINISH_AUTH",
    DISCONNECT_DEVICE: "DISCONNECT_DEVICE",
    CONNECT_TERMINAL: "CONNECT_TERMINAL",
    TERMINAL_INPUT: "TERMINAL_INPUT",
    TERMINAL_RESIZED: "TERMINAL_RESIZED",
    DISCONNECT_TERMINAL: "DISCONNECT_TERMINAL",
    CONNECT_BROWSER: "CONNECT_BROWSER",
    // responses and commands
    HELLO: "HELLO",
    SET_STATUS: "SET_STATUS",
    SET_DEVICE: "SET_DEVICE",
    DELETE_DEVICE: "DELETE_DEVICE",
    SET_TERMINAL: "SET_TERMINAL",
    DELETE_TERMINAL: "DELETE_TERMINAL",
    HISTORY: "HISTORY"
  },
  events: {
    FONTS_LOADED: "FONTS_LOADED",
    SW_UPDATE_READY: "SW_UPDATE_READY"
  },
  historySize: 30,
  commandPort: 22
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "oTdc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.set = exports.clear = void 0;

var types = _interopRequireWildcard(__webpack_require__("+1HE"));

var clear = function clear() {
  return {
    type: types.CLEAR
  };
};

exports.clear = clear;

var set = function set(data) {
  return _.assign({
    type: types.SET
  }, data);
};

exports.set = set;

var remove = function remove(_ref) {
  var terminalId = _ref.terminalId;
  return {
    type: types.REMOVE,
    terminalId: terminalId
  };
};

exports.remove = remove;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "oUkC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getList = void 0;

var _immutable = __webpack_require__("nuGg");

var getList = function getList(state, props) {
  return state.getIn(["histories", props.historyId || props.terminalId]) || (0, _immutable.List)([]);
};

exports.getList = getList;

/***/ }),

/***/ "p/Qe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRoles = exports.getLogin = exports.isAdmin = exports.isAuthenticated = exports.getCsrf = void 0;

var _reselect = __webpack_require__("MWqi");

var _constants = _interopRequireDefault(__webpack_require__("o4p3"));

var getCsrf = function getCsrf(state) {
  return state.getIn(["auth", "csrf"]);
};

exports.getCsrf = getCsrf;

var isAuthenticated = function isAuthenticated(state) {
  return state.getIn(["auth", "isAuthenticated"]);
};
/* eslint-disable lodash/prefer-lodash-method */


exports.isAuthenticated = isAuthenticated;

var isAdmin = function isAdmin(state) {
  return state.getIn(["auth", "roles"]).includes(_constants.default.roles.ADMIN);
};
/* eslint-enable */


exports.isAdmin = isAdmin;

var getLogin = function getLogin(state) {
  return state.getIn(["auth", "login"]);
};

exports.getLogin = getLogin;
var getRoles = (0, _reselect.createSelector)(function (state) {
  return state.getIn(["auth", "roles"]);
}, function (roles) {
  return roles.toJS();
});
exports.getRoles = getRoles;

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "pUbC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _now = _interopRequireDefault(__webpack_require__("Cg2A"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("K47E"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = _interopRequireDefault(__webpack_require__("4Q3z"));

var _reactVirtualized = __webpack_require__("xvxd");

var _IconButton = _interopRequireDefault(__webpack_require__("EmCc"));

var _Refresh = _interopRequireDefault(__webpack_require__("uQSa"));

var _Close = _interopRequireDefault(__webpack_require__("j08L"));

var _Paper = _interopRequireDefault(__webpack_require__("qt1I"));

var _Typography = _interopRequireDefault(__webpack_require__("UVoM"));

var styles = function styles() {
  return {
    container: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      position: "relative",
      background: "#2a2c38"
    },
    header: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    },
    headerText: {
      flex: 1
    },
    browser: {
      flex: 1
    }
  };
};

exports.styles = styles;

var Browser =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Browser, _React$Component);

  function Browser(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Browser);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Browser).call(this, props));
    _this.state = {
      key: (0, _now.default)()
    };
    _this.handleClose = _this.handleClose.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleRefresh = _this.handleRefresh.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(Browser, [{
    key: "getIframeId",
    value: function getIframeId() {
      return "frame-".concat(this.props.deviceId, "-").concat(this.props.host, "-").concat(this.props.port);
    }
  }, {
    key: "handleRefresh",
    value: function handleRefresh() {
      this.setState({
        key: (0, _now.default)()
      });
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      _router.default.push("/");
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement(_Paper.default, {
        className: this.props.classes.container
      }, _react.default.createElement("div", {
        className: this.props.classes.header
      }, _react.default.createElement(_IconButton.default, {
        color: "inherit",
        onClick: this.handleRefresh
      }, _react.default.createElement(_Refresh.default, null)), _react.default.createElement(_Typography.default, {
        variant: "h5",
        className: this.props.classes.headerText
      }, this.props.host, ":", this.props.port, "\xA0-\xA0", this.props.name, "\xA0", !!this.props.address && "(" + this.props.address + ")"), _react.default.createElement(_IconButton.default, {
        color: "inherit",
        onClick: this.handleClose
      }, _react.default.createElement(_Close.default, null))), _react.default.createElement("div", {
        className: this.props.classes.browser
      }, _react.default.createElement(_reactVirtualized.AutoSizer, null, function (_ref) {
        var width = _ref.width,
            height = _ref.height;
        return _react.default.createElement("iframe", {
          key: "frame-".concat(_this2.state.key),
          id: _this2.getIframeId(),
          width: width,
          height: height,
          sandbox: "allow-forms allow-modals allow-popups allow-scripts allow-same-origin",
          style: {
            background: "#ffffff",
            border: "none"
          },
          src: "".concat(_this2.props.appOrigin, "/api/browser/").concat(_this2.props.deviceId, "/").concat(_this2.props.host, "/").concat(_this2.props.port)
        });
      })));
    }
  }]);
  return Browser;
}(_react.default.Component);

var _default = Browser;
exports.default = _default;

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qt1I":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "quj4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash f6d3e057036815dbc7b7eacb0c5c13c6
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type EditDeviceInput = {|
  id: string,
  name?: ?string,
  password?: ?string,
  clientMutationId?: ?string,
|};
export type EditDeviceMutationVariables = {|
  input: EditDeviceInput
|};
export type EditDeviceMutationResponse = {|
  +editDevice: ?{|
    +device: ?{|
      +id: string
    |}
  |}
|};
export type EditDeviceMutation = {|
  variables: EditDeviceMutationVariables,
  response: EditDeviceMutationResponse,
|};
*/

/*
mutation EditDeviceMutation(
  $input: EditDeviceInput!
) {
  editDevice(input: $input) {
    device {
      id
    }
  }
}
*/

var node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "EditDeviceInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "editDevice",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "EditDeviceInput!"
    }],
    "concreteType": "EditDevicePayload",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "device",
      "storageKey": null,
      "args": null,
      "concreteType": "Device",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }]
    }]
  }];
  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "EditDeviceMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "operation": {
      "kind": "Operation",
      "name": "EditDeviceMutation",
      "argumentDefinitions": v0
      /*: any*/
      ,
      "selections": v1
      /*: any*/

    },
    "params": {
      "operationKind": "mutation",
      "name": "EditDeviceMutation",
      "id": null,
      "text": "mutation EditDeviceMutation(\n  $input: EditDeviceInput!\n) {\n  editDevice(input: $input) {\n    device {\n      id\n    }\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '0283ca05ed653a95ce0faafe0d36788b';
module.exports = node;

/***/ }),

/***/ "rz8+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SET_LOCALE = exports.SET_CONNECTED = exports.SET_STATUS_CODE = exports.STOP = exports.START = exports.CREATE = void 0;
var CREATE = "app/app/CREATE";
exports.CREATE = CREATE;
var START = "app/app/START";
exports.START = START;
var STOP = "app/app/STOP";
exports.STOP = STOP;
var SET_STATUS_CODE = "app/app/SET_STATUS_CODE";
exports.SET_STATUS_CODE = SET_STATUS_CODE;
var SET_CONNECTED = "app/app/SET_CONNECTED";
exports.SET_CONNECTED = SET_CONNECTED;
var SET_LOCALE = "app/app/SET_LOCALE";
exports.SET_LOCALE = SET_LOCALE;

/***/ }),

/***/ "uQSa":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Refresh");

/***/ }),

/***/ "vi2s":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTerminalAddress = exports.getTerminalName = exports.getTerminalMap = exports.hasTerminal = exports.getTerminalsMap = void 0;

var _state = __webpack_require__("DdWW");

var getTerminalsMap = function getTerminalsMap(state) {
  return state.getIn(["terminals", "online"]);
};

exports.getTerminalsMap = getTerminalsMap;

var hasTerminal = function hasTerminal(state, props) {
  return state.hasIn(["terminals", "online", props.terminalId]);
};

exports.hasTerminal = hasTerminal;

var getTerminalMap = function getTerminalMap(state, props) {
  return state.getIn(["terminals", "online", props.terminalId]);
};

exports.getTerminalMap = getTerminalMap;

var getTerminalName = function getTerminalName(state, props) {
  return state.getIn(["terminals", "online", props.terminalId, "name"]);
};

exports.getTerminalName = getTerminalName;

var getTerminalAddress = function getTerminalAddress(state, props) {
  var terminal = state.getIn(["terminals", "online", props.terminalId]);
  if (!terminal) return "";
  return _state.devicesSelectors.getAddress(state, {
    deviceId: terminal.get("deviceId")
  });
};

exports.getTerminalAddress = getTerminalAddress;

/***/ }),

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vmr9":
/***/ (function(module) {

module.exports = {"MENU_DEVICES":"Device List","TITLE_DEVICES":"Remote Configurator","MENU_DEVICE":"Device","TITLE_DEVICE":"Device","MENU_USERS":"Users","TITLE_USERS":"Users","LAYOUT_SW_UPDATE_MESSAGE":"An update is available. Click here to reload the page.","SIDEBAR_SIGN_OUT_LINK":"Sign Out","DEVICES_PAGE_WORKFLOW_TITLE":"Workflow","DEVICES_PAGE_WORKFLOW_HTML":["<ul>","<li>Create a device with unique name and a password. You will be provided with a shell command you can then"," copy-paste into the terminal of your device.</li>","<li>Enter the same password you used to create the device and the device will appear in the list below after"," connecting to this server. All further interaction with the device will be done through this encrypted SSH channel.</li>","<li>Press \"SIGN IN\" button to sign in into your device. Please use the same user under which you typed the <strong>ssh</strong>"," command above or you might get \"Host key verification failed\" error otherwise.</li>","<li>When signed in you can then open an in-browser terminal session to this device under the credentials you used"," or create a private HTTP proxy for any port on your device</li>","</ul>"],"DEVICES_PAGE_SECURITY_TITLE":"Security Considerations","DEVICES_PAGE_SECURITY_HTML":["<ul>","<li>Credentials you use to sign in into your device are readable to this server. Although these credentials are never"," stored to disk and only live in the server's memory while the session exists, a compromised server might have a"," different idea what to do with your information.</li>","<li>A more secure apporoach would be to set up your own server (preferably after inspecting the source code) so you"," trust the credentials only to a reliable server.</li>","<li>Some web services protect their users from phishing sites, for which they detect and prevent proxies and &lt;iframe&gt;"," tags from working. You will have to configure an exception for the server in such case. For Webmin, you can achieve"," this by adding to the end of <strong>/etc/webmin/config</strong>: <pre>referers={origin}</pre></li>","</ul>"],"DEVICES_NAME_COLUMN":"Name","DEVICES_ADDRESS_COLUMN":"Address","DEVICES_CREATE_BUTTON":"Create Device","DEVICES_EDIT_BUTTON":"Edit Device","DEVICES_DELETE_BUTTON":"Delete Devices","DEVICES_CONNECT_BUTTON":"Sign In","DEVICES_OFFLINE_LABEL":"Offline","DEVICES_OPEN_TERMINAL_TIP":"Open terminal","DEVICES_OPEN_BROWSER_TIP":"Open browser","DEVICES_DISCONNECT_TIP":"Disconnect","EDIT_DEVICE_TITLE_CREATE":"Create Device","EDIT_DEVICE_TITLE_EDIT":"Edit Device","EDIT_DEVICE_NAME_LABEL":"Name","EDIT_DEVICE_PASSWORD_LABEL":"Password","EDIT_DEVICE_FAILED":"Form submission failed","EDIT_DEVICE_SUBMIT":"Submit","EDIT_DEVICE_CANCEL":"Cancel","DELETE_DEVICE_TITLE":"Delete Devices","DELETE_DEVICE_TEXT":"Delete selected devices?","DELETE_DEVICE_CANCEL":"Cancel","DELETE_DEVICE_SUBMIT":"Delete","PROXY_TPL_TITLE":"<h1>Proxy Reporting</h1>","PROXY_TPL_MESSAGE":"<h3>Could not fetch the page</h3>","PROXY_TPL_403":"<p>Access denied</p>","PROXY_TPL_404":"<p>Try to reopen this page from the Device List</p>","PROXY_TPL_502":"<p>Looks like nobody is listening on this port</p>","PROXY_MODAL_TITLE":"HTTP Proxy","PROXY_HOST_LABEL":"Which host to connect to?","PROXY_PORT_LABEL":"Which port to proxy?","PROXY_AUTH_LABEL":"Remote service needs HTTP BASIC AUTH","PROXY_LOGIN_LABEL":"Login","PROXY_PASSWORD_LABEL":"Password","PROXY_MODAL_CANCEL":"Cancel","PROXY_MODAL_SUBMIT":"Submit","USERS_LOGIN_COLUMN":"Login","USERS_ROLES_COLUMN":"Roles","USERS_CREATE_BUTTON":"Create User","USERS_EDIT_BUTTON":"Edit User","USERS_DELETE_BUTTON":"Delete Users","EDIT_USER_TITLE_CREATE":"Create User","EDIT_USER_TITLE_EDIT":"Edit User","EDIT_USER_LOGIN_LABEL":"Login","EDIT_USER_PASSWORD_LABEL":"Password","EDIT_USER_AUTHENTICATED_LABEL":"Authenticated","EDIT_USER_ADMIN_LABEL":"Administrator","EDIT_USER_CANCEL":"Cancel","EDIT_USER_SUBMIT":"Submit","EDIT_USER_FAILED":"An error occured","DELETE_USER_TITLE":"Delete Users","DELETE_USER_TEXT":"Delete selected users?","DELETE_USER_CANCEL":"Cancel","DELETE_USER_SUBMIT":"Delete","TERMINAL_CONNECTING_LABEL":"Connecting...","TERMINAL_NOT_CONNECTED_LABEL":"Not connected","APP_AUTH_TITLE":"Authentication","APP_AUTH_SELF_REGISTRATION_TITLE":"Self-registration enabled","APP_AUTH_SELF_REGISTRATION_MESSAGE":"If you are a new user, you can use any free login and the password you want to sign in","APP_AUTH_LOGIN_LABEL":"Login","APP_AUTH_PASSWORD_LABEL":"Password","APP_AUTH_SUBMIT":"Sign In","APP_AUTH_FAILED":"Invalid credentials","SETUP_AUTH_TITLE":"Authentication","SETUP_AUTH_LOGIN_LABEL":"Login","SETUP_AUTH_PASSWORD_LABEL":"Password","SETUP_AUTH_CANCEL":"Cancel","SETUP_AUTH_SUBMIT":"Submit","KEYBOARD_AUTH_TITLE":"Authentication","KEYBOARD_AUTH_REPLY_LABEL":"Response","KEYBOARD_AUTH_CANCEL":"Cancel","KEYBOARD_AUTH_SUBMIT":"Submit","OPERATION_FAILED":"Operations failed","ERROR_GO_HOME_LINK":"Reload the start page","ERROR_FIELD_REQUIRED":"This field is required","ERROR_INVALID_LOGIN":"Login should start with a letter and contain letters and digits only","ERROR_INVALID_PASSWORD":"Password must be at least 6 characters long"};

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xHqa":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _Object$defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "xbgq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _immutable = __webpack_require__("nuGg");

var _reduxImmutable = __webpack_require__("RGyf");

var types = _interopRequireWildcard(__webpack_require__("+z5V"));

/* State Shape
Map({
  csrf: String,
  isAuthenticated: Boolean,
  login: String,
  roles: List([String]),
  googleMapsKey: null,
})
*/
var csrfReducer = function csrfReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_CSRF:
      if (!_.isUndefined(action.csrf)) return action.csrf;
      break;
  }

  return state;
};

var isAuthenticatedReducer = function isAuthenticatedReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_STATUS:
      if (!_.isUndefined(action.isAuthenticated)) return action.isAuthenticated;
      break;
  }

  return state;
};

var loginReducer = function loginReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_STATUS:
      if (!_.isUndefined(action.login)) return action.login;
      break;
  }

  return state;
};

var rolesReducer = function rolesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.List)([]);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_STATUS:
      if (!_.isUndefined(action.roles)) return (0, _immutable.fromJS)(action.roles);
      break;
  }

  return state;
};

var reducer = (0, _reduxImmutable.combineReducers)({
  csrf: csrfReducer,
  isAuthenticated: isAuthenticatedReducer,
  login: loginReducer,
  roles: rolesReducer
});
var _default = reducer;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YLtl")))

/***/ }),

/***/ "xvxd":
/***/ (function(module, exports) {

module.exports = require("react-virtualized");

/***/ }),

/***/ "y6vh":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ }),

/***/ "z+7x":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setStatus = exports.setCsrf = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__("Avpf"));

var types = _interopRequireWildcard(__webpack_require__("+z5V"));

var setCsrf = function setCsrf(_ref) {
  var csrf = _ref.csrf;
  return {
    type: types.SET_CSRF,
    csrf: csrf
  };
};

exports.setCsrf = setCsrf;

var setStatus = function setStatus(status) {
  return (0, _objectSpread2.default)({
    type: types.SET_STATUS
  }, status);
};

exports.setStatus = setStatus;

/***/ }),

/***/ "z49V":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__("h74D");

var _router = __webpack_require__("4Q3z");

var _styles = __webpack_require__("9Pu4");

var _Browser = _interopRequireWildcard(__webpack_require__("pUbC"));

var _state = __webpack_require__("E4eY");

var _state2 = __webpack_require__("DdWW");

var mapStateToProps = function mapStateToProps(state, props) {
  return {
    appOrigin: _state.appSelectors.getAppOrigin(state),
    name: _state2.devicesSelectors.getName(state, props),
    address: _state2.devicesSelectors.getAddress(state, props)
  };
};

var Browser = (0, _styles.withStyles)(_Browser.styles)((0, _router.withRouter)((0, _reactRedux.connect)(mapStateToProps)(_Browser.default)));
var _default = Browser;
exports.default = _default;

/***/ }),

/***/ "zgVy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _parseInt2 = _interopRequireDefault(__webpack_require__("6BQ9"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("xHqa"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _BrowserContainer = _interopRequireDefault(__webpack_require__("z49V"));

var styles = function styles(theme) {
  return {
    layout: (0, _defineProperty2.default)({
      width: "100%",
      maxWidth: 1300 + 2 * theme.main.spacing,
      flex: 1,
      display: "flex",
      padding: theme.main.spacing
    }, theme.breakpoints.down("md"), {
      padding: theme.main.spacing / 2,
      maxWidth: 1300 + theme.main.spacing
    })
  };
};

exports.styles = styles;

var BrowserPage =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(BrowserPage, _React$Component);

  function BrowserPage() {
    (0, _classCallCheck2.default)(this, BrowserPage);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(BrowserPage).apply(this, arguments));
  }

  (0, _createClass2.default)(BrowserPage, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: this.props.classes.layout
      }, _react.default.createElement(_BrowserContainer.default, {
        key: "browser-".concat(this.props.deviceId, "-").concat(this.props.host, "-").concat(this.props.port),
        deviceId: this.props.deviceId,
        host: this.props.host,
        port: this.props.port
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var query = _ref.query;
      return {
        deviceId: query.deviceId,
        host: query.host,
        port: (0, _parseInt2.default)(query.port) || 0
      };
    }
  }]);
  return BrowserPage;
}(_react.default.Component);

var _default = BrowserPage;
exports.default = _default;

/***/ })

/******/ });