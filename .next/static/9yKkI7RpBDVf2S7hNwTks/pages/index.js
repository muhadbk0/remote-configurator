(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1815:function(e,t,n){__NEXT_REGISTER_PAGE("/",function(){return e.exports=n(1816),{page:e.exports.default}})},1816:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var o,r=(o=n(1817))&&o.__esModule?o:{default:o}},1817:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r=n(38),u=n(74),i=(o=n(1818))&&o.__esModule?o:{default:o};var c=(0,r.connect)(function(e){return{isAuthenticated:u.authSelectors.isAuthenticated(e)}})(i.default);c.getInitialProps=i.default.getInitialProps;var f=c;t.default=f},1818:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(n(1)),r=(u(n(2)),u(n(125)));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,a(t).apply(this,arguments))}var n,u,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,o.default.Component),n=t,(u=[{key:"componentDidMount",value:function(){this.props.isAuthenticated&&r.default.push("/devices")}},{key:"componentDidUdpate",value:function(){this.props.isAuthenticated&&r.default.push("/devices")}},{key:"render",value:function(){return o.default.createElement("div",null)}}])&&c(n.prototype,u),i&&c(n,i),t}();t.default=p}},[[1815,1,0]]]);