(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{100:function(e,t,r){"use strict";var n=r(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(0)).default.createContext();t.default=a},140:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HIDE_EDIT_MODAL=t.SHOW_EDIT_MODAL=t.DESELECT_ALL=t.SELECT_ALL=t.SET_SELECTED=t.SET_LIST=void 0;t.SET_LIST="app/users/SET_LIST";t.SET_SELECTED="app/users/SET_SELECTED";t.SELECT_ALL="app/users/SELECT_ALL";t.DESELECT_ALL="app/users/DESELECT_ALL";t.SHOW_EDIT_MODAL="app/users/SHOW_EDIT_MODAL";t.HIDE_EDIT_MODAL="app/users/HIDE_EDIT_MODAL"},1699:function(e,t,r){__NEXT_REGISTER_PAGE("/users",function(){return e.exports=r(1700),{page:e.exports.default}})},1700:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}});var n,a=(n=r(1701))&&n.__esModule?n:{default:n}},1701:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(r(24)),a=r(29),o=r(63),i=r(209),l=s(r(1702));function s(e){return e&&e.__esModule?e:{default:e}}function u(e,t,r,n,a,o,i){try{var l=e[o](i),s=l.value}catch(e){return void r(e)}l.done?t(s):Promise.resolve(s).then(n,a)}var c=(0,a.connect)(function(e){return{isAuthenticated:o.authSelectors.isAuthenticated(e)}},null,null,{pure:!1})(l.default);c.getInitialProps=function(){var e,t=(e=n.default.mark(function e(t){var r,a;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,a=t.req,e.next=3,r.dispatch(i.usersOperations.load({req:a}));case 3:case"end":return e.stop()}},e,this)}),function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function i(e){u(o,n,a,i,l,"next",e)}function l(e){u(o,n,a,i,l,"throw",e)}i(void 0)})});return function(e){return t.apply(this,arguments)}}();var d=c;t.default=d},1702:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(0)),a=(l(r(1)),r(32)),o=l(r(118)),i=l(r(1703));function l(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,d(t).apply(this,arguments))}var r,a,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,n.default.Component),r=t,(a=[{key:"render",value:function(){return this.props.isAuthenticated?n.default.createElement("div",{className:this.props.classes.layout},n.default.createElement(o.default,{container:!0,spacing:this.props.theme.main.spacing},n.default.createElement(o.default,{item:!0,xs:12},n.default.createElement(i.default,null)))):null}}])&&u(r.prototype,a),l&&u(r,l),t}(),h=(0,a.withStyles)(function(e){return{layout:(t={width:"100%",maxWidth:1300+2*e.main.spacing,flex:1,padding:e.main.spacing},r=e.breakpoints.down("md"),n={padding:e.main.spacing/2,maxWidth:1300+e.main.spacing},r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t)};var t,r,n},{withTheme:!0})(p);t.default=h},1703:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=r(29),o=r(31),i=r(209),l=(n=r(1704))&&n.__esModule?n:{default:n};var s=(0,o.injectIntl)((0,a.connect)(function(e){return{users:i.usersSelectors.getList(e),isAllSelected:i.usersSelectors.isAllSelected(e),isAllDeselected:i.usersSelectors.isAllDeselected(e)}},function(e){return{onLoad:function(){return e(i.usersOperations.load())},onCreate:function(){return e(i.usersOperations.showEditModal())},onEdit:function(){return e(i.usersOperations.editFirstSelected())},onDelete:function(t){return e(i.usersOperations.remove({id:t}))},onSetSelected:function(t,r){return e(i.usersOperations.setSelected({userId:t,isSelected:r}))},onSelectAll:function(){return e(i.usersOperations.selectAll())},onDeselectAll:function(){return e(i.usersOperations.deselectAll())}}})(l.default));t.default=s},1704:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=y(r(24)),a=y(r(0)),o=(y(r(1)),y(r(6))),i=(r(19),r(31)),l=r(32),s=y(r(483)),u=y(r(485)),c=y(r(487)),d=y(r(489)),f=y(r(491)),p=y(r(64)),h=y(r(427)),m=y(r(1705)),v=y(r(493));function y(e){return e&&e.__esModule?e:{default:e}}function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t,r,n,a,o,i){try{var l=e[o](i),s=l.value}catch(e){return void r(e)}l.done?t(s):Promise.resolve(s).then(n,a)}function E(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var w=function(e){function t(e){var r,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(r=!(a=_(t).call(this,e))||"object"!==b(a)&&"function"!=typeof a?S(n):a).state={isConfirmOpen:!1},r.handleCreateAction=r.handleCreateAction.bind(S(S(r))),r.handleEditAction=r.handleEditAction.bind(S(S(r))),r.handleDeleteAction=r.handleDeleteAction.bind(S(S(r))),r.handleCancelDelete=r.handleCancelDelete.bind(S(S(r))),r.handleConfirmDelete=r.handleConfirmDelete.bind(S(S(r))),r}var r,l,y;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,a.default.Component),r=t,(l=[{key:"handleToggleAll",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]||this.props.isAllSelected?this.props.onDeselectAll():this.props.onSelectAll()}},{key:"handleToggle",value:function(e){var t=this.props.users.find(function(t){return t.get("id")===e}),r=t&&t.get("isSelected");this.props.onSetSelected(e,!r)}},{key:"handleCreateAction",value:function(){this.props.onCreate()}},{key:"handleEditAction",value:function(){this.props.onEdit()}},{key:"handleDeleteAction",value:function(){this.setState({isConfirmOpen:!0})}},{key:"handleCancelDelete",value:function(){this.setState({isConfirmOpen:!1})}},{key:"handleConfirmDelete",value:function(){var e,t=(e=n.default.mark(function e(){var t=this;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isConfirmOpen:!1}),e.next=3,Promise.all(this.props.users.filter(function(e){return e.get("isSelected")}).map(function(e){return t.props.onDelete(e.get("id"))}));case 3:this.props.onLoad();case 4:case"end":return e.stop()}},e,this)}),function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function i(e){g(o,n,a,i,l,"next",e)}function l(e){g(o,n,a,i,l,"throw",e)}i(void 0)})});return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:this.props.classes.buttons},a.default.createElement(p.default,{variant:"contained",color:"secondary",classes:{root:this.props.classes.button},onClick:this.handleCreateAction},a.default.createElement(i.FormattedMessage,{id:"USERS_CREATE_BUTTON"})),a.default.createElement(p.default,{variant:"contained",color:"primary",disabled:this.props.isAllDeselected,classes:{root:this.props.classes.button},onClick:this.handleEditAction},a.default.createElement(i.FormattedMessage,{id:"USERS_EDIT_BUTTON"})),a.default.createElement(p.default,{variant:"contained",color:"primary",disabled:this.props.isAllDeselected,classes:{root:this.props.classes.button},onClick:this.handleDeleteAction},a.default.createElement(i.FormattedMessage,{id:"USERS_DELETE_BUTTON"}))),a.default.createElement(s.default,{padding:"dense"},a.default.createElement(d.default,null,a.default.createElement(f.default,null,a.default.createElement(c.default,{padding:"none",classes:{root:this.props.classes.checkboxField}},a.default.createElement(h.default,{checked:!!this.props.users.size&&this.props.isAllSelected,classes:{root:this.props.classes.checkbox},indeterminate:!this.props.isAllSelected&&!this.props.isAllDeselected,onChange:function(){return e.handleToggleAll()},value:"on"})),a.default.createElement(c.default,null,a.default.createElement(i.FormattedMessage,{id:"USERS_LOGIN_COLUMN"})),a.default.createElement(c.default,null,a.default.createElement(i.FormattedMessage,{id:"USERS_ROLES_COLUMN"})))),a.default.createElement(u.default,null,this.props.users.map(function(t,r){return a.default.createElement(f.default,{key:"row-".concat(r)},a.default.createElement(c.default,{padding:"none",className:(0,o.default)(r%2?"even":"odd",t.get("isSelected")&&"selected"),classes:{root:e.props.classes.checkboxField}},a.default.createElement(h.default,{checked:!!t.get("isSelected"),classes:{root:e.props.classes.checkbox},onChange:function(){return e.handleToggle(t.get("id"))},value:"on"})),a.default.createElement(c.default,{className:(0,o.default)(r%2?"even":"odd",t.get("isSelected")&&"selected"),component:"th",scope:"row"},t.get("login")),a.default.createElement(c.default,{className:(0,o.default)(r%2?"even":"odd",t.get("isSelected")&&"selected")},t.get("roles").toJS().map(function(t){return e.props.intl.formatMessage({id:"EDIT_USER_".concat(t,"_LABEL")})}).join(", ")))}))),a.default.createElement(m.default,null),a.default.createElement(v.default,{isOpen:this.state.isConfirmOpen,title:"DELETE_USER_TITLE",text:"DELETE_USER_TEXT",cancel:"DELETE_USER_CANCEL",submit:"DELETE_USER_SUBMIT",onCancel:this.handleCancelDelete,onSubmit:this.handleConfirmDelete}))}}])&&E(r.prototype,l),y&&E(r,y),t}(),T=(0,l.withStyles)(function(){return{buttons:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"flex-start",alignContent:"stretch"},button:{margin:"0.5rem"},checkboxField:{width:1},checkbox:{padding:"0.5rem 1rem"}}},{withTheme:!0})(w);t.default=T},1705:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(r(24)),a=r(19),o=r(31),i=r(55),l=r(182),s=r(209),u=d(r(183)),c=d(r(1706));function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t,r,n,a,o,i){try{var l=e[o](i),s=l.value}catch(e){return void r(e)}l.done?t(s):Promise.resolve(s).then(n,a)}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h=c.default.formName,m=(0,o.injectIntl)((0,u.default)(c.default,function(e){return{fieldValues:p({},h,(0,i.getFormValues)(h)(e)||(0,a.Map)()),fieldErrors:p({},h,(0,i.getFormAsyncErrors)(h)(e)||(0,a.Map)()),data:s.usersSelectors.getEditModalData(e),isOpen:s.usersSelectors.isEditModalOpen(e)}},function(e){return{dispatch:e,updateValidation:(t=n.default.mark(function t(r){return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e((0,l.startAsyncValidation)(h));case 2:return t.next=4,e((0,l.stopAsyncValidation)(h,r));case 4:case"end":return t.stop()}},t,this)}),r=function(){var e=this,r=arguments;return new Promise(function(n,a){var o=t.apply(e,r);function i(e){f(o,n,a,i,l,"next",e)}function l(e){f(o,n,a,i,l,"throw",e)}i(void 0)})},function(e){return r.apply(this,arguments)}),onCancel:function(){return e(s.usersOperations.hideEditModal())},onLoad:function(){return e(s.usersOperations.load())},onCreate:function(t,r,n){return e(s.usersOperations.create({login:t,password:r,isAdmin:n}))},onEdit:function(t,r,n,a){return e(s.usersOperations.edit({id:t,login:r,password:n,isAdmin:a}))}};var t,r}));t.default=m},1706:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=_(r(24)),a=_(r(0)),o=_(r(1)),i=r(19),l=r(31),s=r(55),u=r(32),c=_(r(96)),d=_(r(97)),f=_(r(98)),p=_(r(184)),h=_(r(117)),m=_(r(118)),v=_(r(64)),y=_(r(261)),b=_(r(185)),g=_(r(186)),E=_(r(53));function _(e){return e&&e.__esModule?e:{default:e}}function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t,r,n,a,o,i){try{var l=e[o](i),s=l.value}catch(e){return void r(e)}l.done?t(s):Promise.resolve(s).then(n,a)}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function M(e,t,r){return t&&T(e.prototype,t),r&&T(e,r),e}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var x=function(t){function r(e){var t,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),n=this,(t=!(a=w(r).call(this,e))||"object"!==O(a)&&"function"!=typeof a?P(n):a).state={isOpen:e.isOpen},t.submit=t.submit.bind(P(P(t))),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(r,b.default),M(r,null,[{key:"onSubmit",value:function(){var t,r=(t=n.default.mark(function t(r,a,o){var i;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!o.data){t.next=6;break}return t.next=3,o.onEdit(o.data.get("id"),this.getValue(o,"login"),this.getValue(o,"password"),"on"===this.getValue(o,"isAdmin"));case 3:i=t.sent,t.next=9;break;case 6:return t.next=8,o.onCreate(this.getValue(o,"login"),this.getValue(o,"password"),"on"===this.getValue(o,"isAdmin"));case 8:i=t.sent;case 9:if(!0!==i){t.next=14;break}return t.next=12,o.onLoad();case 12:t.next=16;break;case 14:if(!i||!e.isObject(i)){t.next=16;break}throw new s.SubmissionError(i);case 16:return t.abrupt("return",i);case 17:case"end":return t.stop()}},t,this)}),function(){var e=this,r=arguments;return new Promise(function(n,a){var o=t.apply(e,r);function i(e){S(o,n,a,i,l,"next",e)}function l(e){S(o,n,a,i,l,"throw",e)}i(void 0)})});return function(e,t,n){return r.apply(this,arguments)}}()},{key:"getDerivedStateFromProps",value:function(t,r){var n={};if(r.isOpen!==t.isOpen){var a=t.data&&t.data.get("login"),o=t.data&&t.data.get("roles").includes(E.default.roles.ADMIN);t.dispatch(t.change("login",a||"")),t.dispatch(t.change("password","")),t.dispatch(t.change("isAdmin",o?"on":"off")),t.dispatch(t.clearAsyncError()),t.dispatch(t.clearSubmitErrors()),n.isOpen=t.isOpen}return e.keys(n).length?n:null}}]),M(r,[{key:"render",value:function(){var t=this;return a.default.createElement(c.default,{maxWidth:"xs",fullWidth:!0,open:this.props.isOpen,onClose:this.props.onCancel},a.default.createElement(h.default,null,a.default.createElement(l.FormattedMessage,{id:this.props.data?"EDIT_USER_TITLE_EDIT":"EDIT_USER_TITLE_CREATE"})),this.props.error&&a.default.createElement(f.default,null,e.map(e.isArray(this.props.error)?this.props.error:[this.props.error],function(r,n){return a.default.createElement(p.default,{key:"error-".concat(n),classes:{root:t.props.classes.error}},e.isArray(r)?a.default.createElement(l.FormattedMessage,{id:r[0],values:r[1]}):a.default.createElement(l.FormattedMessage,{id:r}))})),a.default.createElement(f.default,null,a.default.createElement(m.default,{container:!0,spacing:16,component:"form",noValidate:!0,autoComplete:"off",onSubmit:this.submit},a.default.createElement(m.default,{item:!0,xs:12},a.default.createElement(g.default,{formFields:this.constructor.fields,formProps:this.props,name:"login",type:"text",onSubmit:this.submit})),a.default.createElement(m.default,{item:!0,xs:12},a.default.createElement(g.default,{formFields:this.constructor.fields,formProps:this.props,name:"password",type:"password",onSubmit:this.submit})),a.default.createElement(m.default,{item:!0,xs:12},a.default.createElement(g.default,{formFields:this.constructor.fields,formProps:this.props,name:"isAdmin",type:"checkbox",onSubmit:this.submit})))),a.default.createElement(d.default,{classes:{root:this.props.classes.actions}},a.default.createElement(v.default,{variant:"contained",color:"primary",disabled:this.props.submitting,onClick:this.props.onCancel},a.default.createElement(l.FormattedMessage,{id:"EDIT_USER_CANCEL"})),a.default.createElement(v.default,{variant:"contained",color:"secondary",disabled:this.props.submitting,onClick:this.submit},a.default.createElement(l.FormattedMessage,{id:"EDIT_USER_SUBMIT"}))))}}]),r}();D(x,"propTypes",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){D(e,t,r[t])})}return e}({},b.default.propTypes,{intl:l.intlShape,theme:o.default.object.isRequired,classes:o.default.object.isRequired,isOpen:o.default.bool.isRequired,data:o.default.instanceOf(i.Map),onCancel:o.default.func.isRequired,onLoad:o.default.func.isRequired,onCreate:o.default.func.isRequired,onEdit:o.default.func.isRequired})),D(x,"formName","editUserForm"),D(x,"fields",{login:{normalize:"rows:1|remove:spaces",transform:"trim",label:"EDIT_USER_LOGIN_LABEL"},password:{label:"EDIT_USER_PASSWORD_LABEL"},isAdmin:{label:"EDIT_USER_ADMIN_LABEL"}});var j=(0,u.withStyles)(function(){return{error:{color:y.default[500]},actions:{paddingLeft:"1rem",paddingRight:"1rem",paddingBottom:"1rem"}}},{withTheme:!0})(x);t.default=j}).call(this,r(14))},209:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.usersSelectors=t.usersOperations=t.usersTypes=t.default=void 0;var n,a=(n=r(397))&&n.__esModule?n:{default:n},o=s(r(140));t.usersTypes=o;var i=s(r(398));t.usersOperations=i;var l=s(r(210));function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}t.usersSelectors=l;var u=a.default;t.default=u},210:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getEditModalData=t.isEditModalOpen=t.isAllDeselected=t.isAllSelected=t.getNumSelected=t.getSelected=t.getList=void 0;var n=function(e){return e.getIn(["users","list"])};t.getList=n;var a=function(e){return e.getIn(["users","list"]).filter(function(e){return!!e.get("isSelected")})};t.getSelected=a;t.getNumSelected=function(e){return a(e).size};t.isAllSelected=function(e){return n(e).size===a(e).size};t.isAllDeselected=function(e){return 0===a(e).size};t.isEditModalOpen=function(e){return e.getIn(["users","isEditModalOpen"])};t.getEditModalData=function(e){var t=e.getIn(["users","editModalUserId"]);return t?e.getIn(["users","list"]).find(function(e){return e.get("id")===t}):null}},235:function(e,t,r){"use strict";var n=r(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(0)).default.createContext();t.default=a},397:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(19),a=r(110),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(140));var i=(0,a.combineReducers)({list:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,n.List)([]),r=arguments.length>1?arguments[1]:void 0;switch(r.type){case o.SET_LIST:if(!e.isUndefined(r.list))return(0,n.fromJS)(r.list).map(function(e,r){return e.set("isSelected",!!t.getIn([r,"isSelected"]))});break;case o.SET_SELECTED:if(!e.isUndefined(r.userId))return t.withMutations(function(e){var t=e.findIndex(function(e){return e.get("id")===r.userId});-1!==t&&e.setIn([t,"isSelected"],!!r.isSelected)});break;case o.SELECT_ALL:return t.map(function(e){return e.set("isSelected",!0)});case o.DESELECT_ALL:return t.map(function(e){return e.set("isSelected",!1)})}return t},editModalUserId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.SHOW_EDIT_MODAL:return t.userId||null}return e},isEditModalOpen:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case o.SHOW_EDIT_MODAL:return!0;case o.HIDE_EDIT_MODAL:return!1}return e}});t.default=i}).call(this,r(14))},398:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.remove=t.edit=t.create=t.load=t.editFirstSelected=t.deselectAll=t.selectAll=t.setSelected=t.hideEditModal=t.showEditModal=void 0;var n=u(r(24)),a=s(r(399)),o=s(r(210)),i=r(49),l=u(r(53));function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t,r,n,a,o,i){try{var l=e[o](i),s=l.value}catch(e){return void r(e)}l.done?t(s):Promise.resolve(s).then(n,a)}function d(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function i(e){c(o,n,a,i,l,"next",e)}function l(e){c(o,n,a,i,l,"throw",e)}i(void 0)})}}var f=a.showEditModal;t.showEditModal=f;var p=a.hideEditModal;t.hideEditModal=p;var h=a.setSelected;t.setSelected=h;var m=a.selectAll;t.selectAll=m;var v=a.deselectAll;t.deselectAll=v;t.editFirstSelected=function(){return e=d(n.default.mark(function e(t,r){var i;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i=o.getSelected(r())).size){e.next=3;break}return e.abrupt("return",t(a.showEditModal({userId:i.first().get("id")})));case 3:case"end":return e.stop()}},e,this)})),function(t,r){return e.apply(this,arguments)};var e};t.load=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).req;return r=d(n.default.mark(function r(o){var l,s;return n.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(!t){r.next=6;break}return r.next=3,t.di.get("repository.users").getUsers(t);case 3:l=r.sent,r.next=10;break;case 6:return r.next=8,o(i.appOperations.gqlQuery("\n          query {\n            users {\n              id\n              login\n              roles\n            }\n          }\n        "));case 8:s=r.sent,l=s&&e.get(s,"data.users");case 10:return r.next=12,o(a.setList({list:l}));case 12:case"end":return r.stop()}},r,this)})),function(e){return r.apply(this,arguments)};var r};t.create=function(t){var r=t.login,o=t.password,s=t.isAdmin;return u=d(n.default.mark(function t(u){var c,d,f,p,h,m,v,y,b;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return c=!1,t.prev=1,t.next=4,u(i.appOperations.gqlQuery("\n          mutation ($login: String, $password: String, $roles: [UserRole]) {\n            createUser(login: $login, password: $password, roles: $roles) {\n              success\n            }\n          }\n        ",{login:r,password:o,roles:e.compact([s&&l.default.roles.ADMIN])}));case 4:if(!(d=t.sent)||!e.get(d,"data.createUser.success",!1)){t.next=11;break}return t.next=8,u(a.hideEditModal());case 8:return t.abrupt("return",!0);case 11:for(c={},f=d&&e.get(d,"errors",[]),p=!0,h=!1,m=void 0,t.prev=16,v=f[Symbol.iterator]();!(p=(y=v.next()).done);p=!0)(b=y.value)&&"E_VALIDATION"===b.code?e.merge(c,b.details):c._error=(c._error||[]).concat([b.message]);t.next=24;break;case 20:t.prev=20,t.t0=t.catch(16),h=!0,m=t.t0;case 24:t.prev=24,t.prev=25,p||null==v.return||v.return();case 27:if(t.prev=27,!h){t.next=30;break}throw m;case 30:return t.finish(27);case 31:return t.finish(24);case 32:e.keys(c).length||(c={_error:"EDIT_USER_FAILED"});case 33:t.next=38;break;case 35:t.prev=35,t.t1=t.catch(1),console.error(t.t1);case 38:return t.abrupt("return",c);case 39:case"end":return t.stop()}},t,this,[[1,35],[16,20,24,32],[25,,27,31]])})),function(e){return u.apply(this,arguments)};var u};t.edit=function(t){var r=t.id,o=t.login,s=t.password,u=t.isAdmin;return c=d(n.default.mark(function t(c){var d,f,p,h,m,v,y,b,g;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=!1,t.prev=1,t.next=4,c(i.appOperations.gqlQuery("\n          mutation ($id: String, $login: String, $password: String, $roles: [UserRole]) {\n            editUser(id: $id, login: $login, password: $password, roles: $roles) {\n              success\n            }\n          }\n        ",{id:r,login:o,password:s,roles:e.compact([u&&l.default.roles.ADMIN])}));case 4:if(!(f=t.sent)||!e.get(f,"data.editUser.success",!1)){t.next=11;break}return t.next=8,c(a.hideEditModal());case 8:return t.abrupt("return",!0);case 11:for(d={},p=f&&e.get(f,"errors",[]),h=!0,m=!1,v=void 0,t.prev=16,y=p[Symbol.iterator]();!(h=(b=y.next()).done);h=!0)(g=b.value)&&"E_VALIDATION"===g.code?e.merge(d,g.details):d._error=(d._error||[]).concat([g.message]);t.next=24;break;case 20:t.prev=20,t.t0=t.catch(16),m=!0,v=t.t0;case 24:t.prev=24,t.prev=25,h||null==y.return||y.return();case 27:if(t.prev=27,!m){t.next=30;break}throw v;case 30:return t.finish(27);case 31:return t.finish(24);case 32:e.keys(d).length||(d={_error:"EDIT_USER_FAILED"});case 33:t.next=38;break;case 35:t.prev=35,t.t1=t.catch(1),console.error(t.t1);case 38:return t.abrupt("return",d);case 39:case"end":return t.stop()}},t,this,[[1,35],[16,20,24,32],[25,,27,31]])})),function(e){return c.apply(this,arguments)};var c};t.remove=function(t){var r=t.id;return a=d(n.default.mark(function t(a){var o;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a(i.appOperations.gqlQuery("\n        mutation ($id: String) {\n          deleteUser(id: $id) {\n            success\n          }\n        }\n      ",{id:r}));case 2:return o=t.sent,t.abrupt("return",o&&e.get(o,"data.deleteUser.success")||!1);case 4:case"end":return t.stop()}},t,this)})),function(e){return a.apply(this,arguments)};var a}}).call(this,r(14))},399:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hideEditModal=t.showEditModal=t.deselectAll=t.selectAll=t.setSelected=t.setList=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(140));t.setList=function(e){var t=e.list;return{type:n.SET_LIST,list:t}};t.setSelected=function(e){var t=e.userId,r=e.isSelected;return{type:n.SET_SELECTED,userId:t,isSelected:r}};t.selectAll=function(){return{type:n.SELECT_ALL}};t.deselectAll=function(){return{type:n.DESELECT_ALL}};t.showEditModal=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).userId;return{type:n.SHOW_EDIT_MODAL,userId:e}};t.hideEditModal=function(){return{type:n.HIDE_EDIT_MODAL}}},483:function(e,t,r){"use strict";var n=r(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}});var a=n(r(484))},484:function(e,t,r){"use strict";var n=r(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var a=n(r(4)),o=n(r(5)),i=n(r(12)),l=n(r(13)),s=n(r(15)),u=n(r(16)),c=n(r(17)),d=n(r(0)),f=(n(r(1)),n(r(6))),p=n(r(8)),h=n(r(235)),m=function(e){return{root:{display:"table",fontFamily:e.typography.fontFamily,width:"100%",borderCollapse:"collapse",borderSpacing:0}}};t.styles=m;var v=function(e){function t(){var e,r;(0,i.default)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=(0,s.default)(this,(e=(0,u.default)(t)).call.apply(e,[this].concat(a)))).memoizedContextValue={},r}return(0,c.default)(t,e),(0,l.default)(t,[{key:"useMemo",value:function(e){for(var t=Object.keys(e),r=0;r<t.length;r+=1){var n=t[r];if(e[n]!==this.memoizedContextValue[n]){this.memoizedContextValue=e;break}}return this.memoizedContextValue}},{key:"render",value:function(){var e=this.props,t=e.classes,r=e.className,n=e.component,i=e.padding,l=(0,o.default)(e,["classes","className","component","padding"]);return d.default.createElement(h.default.Provider,{value:this.useMemo({padding:i})},d.default.createElement(n,(0,a.default)({className:(0,f.default)(t.root,r)},l)))}}]),t}(d.default.Component);v.propTypes={},v.defaultProps={component:"table",padding:"default"};var y=(0,p.default)(m,{name:"MuiTable"})(v);t.default=y},485:function(e,t,r){"use strict";var n=r(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}});var a=n(r(486))},486:function(e,t,r){"use strict";var n=r(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var a=n(r(4)),o=n(r(5)),i=n(r(0)),l=(n(r(1)),n(r(6))),s=n(r(8)),u=n(r(100)),c={root:{display:"table-row-group"}};t.styles=c;var d={variant:"body"};function f(e){var t=e.classes,r=e.className,n=e.component,s=(0,o.default)(e,["classes","className","component"]);return i.default.createElement(u.default.Provider,{value:d},i.default.createElement(n,(0,a.default)({className:(0,l.default)(t.root,r)},s)))}f.propTypes={},f.defaultProps={component:"tbody"};var p=(0,s.default)(c,{name:"MuiTableBody"})(f);t.default=p},487:function(e,t,r){"use strict";var n=r(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}});var a=n(r(488))},488:function(e,t,r){"use strict";var n=r(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var a=n(r(4)),o=n(r(9)),i=n(r(5)),l=n(r(0)),s=(n(r(1)),n(r(6))),u=n(r(8)),c=r(37),d=r(133),f=n(r(235)),p=n(r(100)),h=function(e){return{root:{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?(0,d.lighten)((0,d.fade)(e.palette.divider,1),.88):(0,d.darken)((0,d.fade)(e.palette.divider,1),.68)),textAlign:"left",padding:"4px 56px 4px 24px","&:last-child":{paddingRight:24}},head:{color:e.palette.text.secondary,fontSize:e.typography.pxToRem(12),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary,fontSize:e.typography.pxToRem(13),fontWeight:e.typography.fontWeightRegular},footer:{borderBottom:0,color:e.palette.text.secondary,fontSize:e.typography.pxToRem(12)},numeric:{textAlign:"right",flexDirection:"row-reverse"},paddingDense:{paddingRight:24},paddingCheckbox:{padding:"0 12px","&:last-child":{paddingRight:12}},paddingNone:{padding:0,"&:last-child":{padding:0}}}};function m(e){var t=e.children,r=e.classes,n=e.className,u=e.component,d=e.sortDirection,h=e.numeric,m=e.padding,v=e.scope,y=e.variant,b=(0,i.default)(e,["children","classes","className","component","sortDirection","numeric","padding","scope","variant"]);return l.default.createElement(f.default.Consumer,null,function(e){return l.default.createElement(p.default.Consumer,null,function(i){var f,p;p=u||(i&&"head"===i.variant?"th":"td");var g=v;!g&&i&&"head"===i.variant&&(g="col");var E=m||(e&&e.padding?e.padding:"default"),_=(0,s.default)(r.root,(f={},(0,o.default)(f,r.head,y?"head"===y:i&&"head"===i.variant),(0,o.default)(f,r.body,y?"body"===y:i&&"body"===i.variant),(0,o.default)(f,r.footer,y?"footer"===y:i&&"footer"===i.variant),(0,o.default)(f,r.numeric,h),(0,o.default)(f,r["padding".concat((0,c.capitalize)(E))],"default"!==E),f),n),O=null;return d&&(O="asc"===d?"ascending":"descending"),l.default.createElement(p,(0,a.default)({className:_,"aria-sort":O,scope:g},b),t)})})}t.styles=h,m.propTypes={},m.defaultProps={numeric:!1};var v=(0,u.default)(h,{name:"MuiTableCell"})(m);t.default=v},489:function(e,t,r){"use strict";var n=r(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}});var a=n(r(490))},490:function(e,t,r){"use strict";var n=r(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var a=n(r(4)),o=n(r(5)),i=n(r(0)),l=(n(r(1)),n(r(6))),s=n(r(8)),u=n(r(100)),c={root:{display:"table-header-group"}};t.styles=c;var d={variant:"head"};function f(e){var t=e.classes,r=e.className,n=e.component,s=(0,o.default)(e,["classes","className","component"]);return i.default.createElement(u.default.Provider,{value:d},i.default.createElement(n,(0,a.default)({className:(0,l.default)(t.root,r)},s)))}f.propTypes={},f.defaultProps={component:"thead"};var p=(0,s.default)(c,{name:"MuiTableHead"})(f);t.default=p},491:function(e,t,r){"use strict";var n=r(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}});var a=n(r(492))},492:function(e,t,r){"use strict";var n=r(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var a=n(r(4)),o=n(r(9)),i=n(r(5)),l=n(r(0)),s=(n(r(1)),n(r(6))),u=n(r(8)),c=n(r(100)),d=function(e){return{root:{color:"inherit",display:"table-row",height:48,verticalAlign:"middle",outline:"none","&$selected":{backgroundColor:"light"===e.palette.type?"rgba(0, 0, 0, 0.04)":"rgba(255, 255, 255, 0.08)"},"&$hover:hover":{backgroundColor:"light"===e.palette.type?"rgba(0, 0, 0, 0.07)":"rgba(255, 255, 255, 0.14)"}},selected:{},hover:{},head:{height:56},footer:{height:56}}};function f(e){var t=e.classes,r=e.className,n=e.component,u=e.hover,d=e.selected,f=(0,i.default)(e,["classes","className","component","hover","selected"]);return l.default.createElement(c.default.Consumer,null,function(e){var i,c=(0,s.default)(t.root,(i={},(0,o.default)(i,t.head,e&&"head"===e.variant),(0,o.default)(i,t.footer,e&&"footer"===e.variant),(0,o.default)(i,t.hover,u),(0,o.default)(i,t.selected,d),i),r);return l.default.createElement(n,(0,a.default)({className:c},f))})}t.styles=d,f.propTypes={},f.defaultProps={component:"tr",hover:!1,selected:!1};var p=(0,u.default)(d,{name:"MuiTableRow"})(f);t.default=p},493:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=f(r(0)),a=(f(r(1)),r(31)),o=r(32),i=f(r(96)),l=f(r(97)),s=f(r(98)),u=f(r(184)),c=f(r(117)),d=f(r(64));function f(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,v(t).apply(this,arguments))}var r,o,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,n.default.PureComponent),r=t,(o=[{key:"render",value:function(){return n.default.createElement(i.default,{maxWidth:"xs",fullWidth:!0,open:this.props.isOpen,onClose:this.props.onCancel},n.default.createElement(c.default,null,n.default.createElement(a.FormattedMessage,{id:this.props.title})),n.default.createElement(s.default,null,n.default.createElement(u.default,null,n.default.createElement(a.FormattedMessage,{id:this.props.text,values:this.props.values}))),n.default.createElement(l.default,{classes:{root:this.props.classes.actions}},n.default.createElement(d.default,{variant:"contained",color:"primary",onClick:this.props.onCancel},n.default.createElement(a.FormattedMessage,{id:this.props.cancel})),n.default.createElement(d.default,{variant:"contained",color:"secondary",onClick:this.props.onSubmit},n.default.createElement(a.FormattedMessage,{id:this.props.submit}))))}}])&&h(r.prototype,o),f&&h(r,f),t}(),g=(0,o.withStyles)(function(){return{actions:{paddingLeft:"1rem",paddingRight:"1rem",paddingBottom:"1rem"}}},{withTheme:!0})(b);t.default=g}},[[1699,1,0]]]);