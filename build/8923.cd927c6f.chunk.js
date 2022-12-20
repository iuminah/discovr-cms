(self["webpackChunkdiscovr_360_cms"] = self["webpackChunkdiscovr_360_cms"] || []).push([[8923],{

/***/ 60985:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

  
  
  if (true) {
    module.exports = __webpack_require__(34387);
  } else {}
  

/***/ }),

/***/ 34387:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(n,t){ true?module.exports=t(__webpack_require__(67294),__webpack_require__(78384),__webpack_require__(39711)):0}(this,(function(n,t,e){return function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=116)}({0:function(n,t,e){n.exports=e(19)()},1:function(t,e){t.exports=n},10:function(n,t,e){var r=e(25),o=e(26),a=e(22),i=e(27);n.exports=function(n,t){return r(n)||o(n,t)||a(n,t)||i()},n.exports.default=n.exports,n.exports.__esModule=!0},116:function(n,t,e){"use strict";e.r(t),e.d(t,"LinkButton",(function(){return S}));var r,o=e(5),a=e.n(o),i=e(4),c=e.n(i),u=e(3),s=e.n(u),l=e(1),d=e.n(l),f=e(37),p=e(2),h=e.n(p),b=e(0),g=e.n(b),m=e(8),v=e(6),x=e(33),y=e(17),O=e(38),_=["variant","startIcon","endIcon","disabled","children","size","href","to"],w=h()(O.BaseButtonWrapper)(r||(r=s()(["\n  padding: ",";\n  background: ",";\n  border: 1px solid ",";\n  border-radius: ",";\n  "," {\n    display: flex;\n    align-items: center;\n  }\n  "," {\n    color: ",";\n  }\n  &[aria-disabled='true'] {\n    ","\n    &:active {\n      ","\n    }\n  }\n  &:hover {\n    ","\n  }\n  &:active {\n    ","\n  }\n  ","\n  /**\n    Link specific properties\n  */\n  display: inline-flex;\n  text-decoration: none;\n  pointer-events: ",";\n"])),(function(n){var t=n.theme,e=n.size;return"".concat("S"===e?t.spaces[2]:"10px"," ").concat(t.spaces[4])}),(function(n){return n.theme.colors.buttonPrimary600}),(function(n){return n.theme.colors.buttonPrimary600}),(function(n){return n.theme.borderRadius}),v.Box,m.Typography,(function(n){return n.theme.colors.buttonNeutral0}),x.b,x.b,x.c,x.a,x.d,(function(n){return n.disabled?"none":void 0})),S=d.a.forwardRef((function(n,t){var e=n.variant,r=n.startIcon,o=n.endIcon,i=n.disabled,u=n.children,s=n.size,l=n.href,p=n.to,h=c()(n,_),b=l?"_blank":void 0,g=l?"noreferrer noopener":void 0;return d.a.createElement(w,a()({ref:t,"aria-disabled":i,size:s,variant:e,target:b,rel:g,to:i?void 0:p,href:i?"#":l},h,{as:p&&!i?f.NavLink:"a"}),r&&d.a.createElement(v.Box,{"aria-hidden":!0,paddingRight:2},r),"S"===s?d.a.createElement(m.Typography,{variant:"pi",fontWeight:"bold"},u):d.a.createElement(m.Typography,{fontWeight:"bold"},u),o&&d.a.createElement(v.Box,{"aria-hidden":!0,paddingLeft:2},o))}));S.displayName="LinkButton",S.defaultProps={disabled:!1,startIcon:void 0,endIcon:void 0,size:"S",variant:"default",onClick:void 0,href:void 0,to:void 0},S.propTypes={children:g.a.string.isRequired,disabled:g.a.bool,endIcon:g.a.element,href:function(n){if(!n.disabled&&!n.to&&!n.href)return new Error("href must be defined")},onClick:g.a.func,size:g.a.oneOf(y.a),startIcon:g.a.element,to:function(n){if(!n.disabled&&!n.href&&!n.to)return new Error("to must be defined")},variant:g.a.oneOf(y.k)}},13:function(n,t){function e(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(n.exports=e=function(n){return typeof n},n.exports.default=n.exports,n.exports.__esModule=!0):(n.exports=e=function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n.exports.default=n.exports,n.exports.__esModule=!0),e(t)}n.exports=e,n.exports.default=n.exports,n.exports.__esModule=!0},16:function(n,t,e){"use strict";e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return a}));var r=function(n){return function(t){var e=t.theme,r=t.size;return e.sizes[n][r]}},o=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"&";return function(t){var e=t.theme,r=t.hasError;return"\n      outline: none;\n      box-shadow: 0;\n      transition-property: border-color, box-shadow, fill;\n      transition-duration: 0.2s;\n\n      ".concat(n,":focus-within {\n        border: 1px solid ").concat(r?e.colors.danger600:e.colors.primary600,";\n        box-shadow: ").concat(r?e.colors.danger600:e.colors.primary600," 0px 0px 0px 2px;\n      }\n    ")}},a=function(n){var t=n.theme;return"\n  position: relative;\n  outline: none;\n  \n  &:after {\n    transition-property: all;\n    transition-duration: 0.2s;\n    border-radius: 8px;\n    content: '';\n    position: absolute;\n    top: -4px;\n    bottom: -4px;\n    left: -4px;\n    right: -4px;\n    border: 2px solid transparent;\n  }\n\n  &:focus-visible {\n    outline: none;\n    &:after {\n      border-radius: 8px;\n      content: '';\n      position: absolute;\n      top: -5px;\n      bottom: -5px;\n      left: -5px;\n      right: -5px;\n      border: 2px solid ".concat(t.colors.primary600,";\n    }\n  }\n")}},17:function(n,t,e){"use strict";e.d(t,"i",(function(){return r})),e.d(t,"c",(function(){return o})),e.d(t,"d",(function(){return a})),e.d(t,"j",(function(){return i})),e.d(t,"g",(function(){return c})),e.d(t,"b",(function(){return u})),e.d(t,"h",(function(){return s})),e.d(t,"e",(function(){return l})),e.d(t,"f",(function(){return d})),e.d(t,"k",(function(){return f})),e.d(t,"a",(function(){return p}));var r="success-light",o="danger-light",a="default",i="tertiary",c="secondary",u="danger",s="success",l="ghost",d=[r,o],f=[a,i,c,u,s,l].concat(d),p=["S","L"]},19:function(n,t,e){"use strict";var r=e(20);function o(){}function a(){}a.resetWarningCache=o,n.exports=function(){function n(n,t,e,o,a,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return n}n.isRequired=n;var e={array:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:t,element:n,elementType:n,instanceOf:t,node:n,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return e.PropTypes=e,e}},2:function(n,e){n.exports=t},20:function(n,t,e){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(n,t){n.exports=function(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r},n.exports.default=n.exports,n.exports.__esModule=!0},22:function(n,t,e){var r=e(21);n.exports=function(n,t){if(n){if("string"==typeof n)return r(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(n,t):void 0}},n.exports.default=n.exports,n.exports.__esModule=!0},24:function(n,t){n.exports=function(n,t){if(null==n)return{};var e,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||(o[e]=n[e]);return o},n.exports.default=n.exports,n.exports.__esModule=!0},25:function(n,t){n.exports=function(n){if(Array.isArray(n))return n},n.exports.default=n.exports,n.exports.__esModule=!0},26:function(n,t){n.exports=function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,o,a=[],i=!0,c=!1;try{for(e=e.call(n);!(i=(r=e.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(n){c=!0,o=n}finally{try{i||null==e.return||e.return()}finally{if(c)throw o}}return a}},n.exports.default=n.exports,n.exports.__esModule=!0},27:function(n,t){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},n.exports.default=n.exports,n.exports.__esModule=!0},29:function(n,t,e){var r=e(42),o=e(43),a=e(22),i=e(44);n.exports=function(n){return r(n)||o(n)||a(n)||i()},n.exports.default=n.exports,n.exports.__esModule=!0},3:function(n,t){n.exports=function(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))},n.exports.default=n.exports,n.exports.__esModule=!0},33:function(n,t,e){"use strict";e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return s})),e.d(t,"a",(function(){return l})),e.d(t,"d",(function(){return d}));var r=e(29),o=e.n(r),a=e(8),i=e(17),c=function(n){return i.f.includes(n)?n.substring(0,n.lastIndexOf("-")):n===i.j?"neutral":[i.d,i.g].includes(n)||!i.k.includes(n)?"primary":n},u=function(n){var t=n.theme;return"\n    border: 1px solid ".concat(t.colors.neutral200,";\n    background: ").concat(t.colors.neutral150,";\n    ").concat(a.Typography," {\n      color: ").concat(t.colors.neutral600,";\n    }\n    svg {\n      > g, path {\n        fill: ").concat(t.colors.neutral600,";\n      }\n    }\n  ")},s=function(n){var t=n.theme,e=n.variant;return[].concat(o()(i.f),[i.g]).includes(e)?"\n      background-color: ".concat(t.colors.neutral0,";\n    "):e===i.j||e===i.e?"\n      background-color: ".concat(t.colors.neutral100,";\n    "):e===i.d?"\n      border: 1px solid ".concat(t.colors.buttonPrimary500,";\n      background: ").concat(t.colors.buttonPrimary500,";\n    "):"\n    border: 1px solid ".concat(t.colors["".concat(c(e),"500")],";\n    background: ").concat(t.colors["".concat(c(e),"500")],";\n  ")},l=function(n){var t=n.theme,e=n.variant;return[].concat(o()(i.f),[i.g]).includes(e)?"\n      background-color: ".concat(t.colors.neutral0,";\n      border: 1px solid ").concat(t.colors["".concat(c(e),"600")],";\n      ").concat(a.Typography," {\n        color: ").concat(t.colors["".concat(c(e),"600")],";\n      }\n      svg {\n        > g, path {\n          fill: ").concat(t.colors["".concat(c(e),"600")],";\n        }\n      }\n    "):e===i.j?"\n      background-color: ".concat(t.colors.neutral150,";\n    "):"\n    border: 1px solid ".concat(t.colors["".concat(c(e),"600")],";\n    background: ").concat(t.colors["".concat(c(e),"600")],";\n  ")},d=function(n){var t=n.theme,e=n.variant;switch(e){case i.c:case i.i:case i.g:return"\n          border: 1px solid ".concat(t.colors["".concat(c(e),"200")],";\n          background: ").concat(t.colors["".concat(c(e),"100")],";\n          ").concat(a.Typography," {\n            color: ").concat(t.colors["".concat(c(e),"700")],";\n          }\n          svg {\n            > g, path {\n              fill: ").concat(t.colors["".concat(c(e),"700")],";\n            }\n          }\n        ");case i.j:return"\n          border: 1px solid ".concat(t.colors.neutral200,";\n          background: ").concat(t.colors.neutral0,";\n          ").concat(a.Typography," {\n            color: ").concat(t.colors.neutral800,";\n          }\n          svg {\n            > g, path {\n              fill: ").concat(t.colors.neutral800,";\n            }\n          }\n        ");case i.e:return"\n        border: 1px solid transparent;\n        background: transparent;\n\n        ".concat(a.Typography," {\n          color: ").concat(t.colors.neutral800,";\n        }\n\n        svg {\n          > g, path {\n            fill: ").concat(t.colors.neutral500,";\n          }\n        }\n      ");case i.h:case i.b:return"\n          border: 1px solid ".concat(t.colors["".concat(c(e),"600")],";\n          background: ").concat(t.colors["".concat(c(e),"600")],";\n          ").concat(a.Typography," {\n            color: ").concat(t.colors.neutral0,";\n          }\n        ");default:return"\n          svg {\n            > g, path {\n              fill: ".concat(t.colors.buttonNeutral0,";\n            }\n          }\n        ")}}},37:function(n,t){n.exports=e},38:function(n,t,e){"use strict";e.r(t),e.d(t,"BaseButtonWrapper",(function(){return v})),e.d(t,"BaseButton",(function(){return x}));var r,o=e(5),a=e.n(o),i=e(4),c=e.n(i),u=e(3),s=e.n(u),l=e(1),d=e.n(l),f=e(0),p=e.n(f),h=e(2),b=e.n(h),g=e(16),m=["disabled","children"],v=b.a.button(r||(r=s()(["\n  display: flex;\n  cursor: pointer;\n  padding: ",";\n  border-radius: ",";\n  background: ",";\n  border: 1px solid ",";\n  svg {\n    height: ",";\n    width: ",";\n  }\n  svg {\n    > g,\n    path {\n      fill: ",";\n    }\n  }\n  &[aria-disabled='true'] {\n    pointer-events: none;\n  }\n\n  ","\n"])),(function(n){return n.theme.spaces[2]}),(function(n){return n.theme.borderRadius}),(function(n){return n.theme.colors.neutral0}),(function(n){return n.theme.colors.neutral200}),(function(n){return n.theme.spaces[3]}),(function(n){return n.theme.spaces[3]}),(function(n){return n.theme.colors.neutral0}),g.a),x=d.a.forwardRef((function(n,t){var e=n.disabled,r=n.children,o=c()(n,m);return d.a.createElement(v,a()({ref:t,"aria-disabled":e,type:"button",disabled:e},o),r)}));x.displayName="BaseButton",x.defaultProps={disabled:!1},x.propTypes={children:p.a.node.isRequired,disabled:p.a.bool}},4:function(n,t,e){var r=e(24);n.exports=function(n,t){if(null==n)return{};var e,o,a=r(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)e=i[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a},n.exports.default=n.exports,n.exports.__esModule=!0},42:function(n,t,e){var r=e(21);n.exports=function(n){if(Array.isArray(n))return r(n)},n.exports.default=n.exports,n.exports.__esModule=!0},43:function(n,t){n.exports=function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)},n.exports.default=n.exports,n.exports.__esModule=!0},44:function(n,t){n.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},n.exports.default=n.exports,n.exports.__esModule=!0},5:function(n,t){function e(){return n.exports=e=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},n.exports.default=n.exports,n.exports.__esModule=!0,e.apply(this,arguments)}n.exports=e,n.exports.default=n.exports,n.exports.__esModule=!0},6:function(n,t,e){"use strict";e.r(t),e.d(t,"Box",(function(){return m}));var r,o=e(3),a=e.n(o),i=e(2),c=e.n(i),u=e(7),s=e(1),l=e.n(s),d=e(0),f=e.n(d),p=function(n){return l.a.createElement("div",n)},h={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},b={_hover:f.a.func,background:f.a.string,basis:f.a.oneOfType([f.a.string,f.a.string]),borderColor:f.a.string,children:f.a.oneOfType([f.a.node,f.a.string]),color:f.a.string,flex:f.a.oneOfType([f.a.string,f.a.string]),grow:f.a.oneOfType([f.a.string,f.a.string]),hasRadius:f.a.bool,hiddenS:f.a.bool,hiddenXS:f.a.bool,padding:f.a.oneOfType([f.a.number,f.a.arrayOf(f.a.number)]),paddingBottom:f.a.oneOfType([f.a.number,f.a.arrayOf(f.a.number)]),paddingLeft:f.a.oneOfType([f.a.number,f.a.arrayOf(f.a.number)]),paddingRight:f.a.oneOfType([f.a.number,f.a.arrayOf(f.a.number)]),paddingTop:f.a.oneOfType([f.a.number,f.a.arrayOf(f.a.number)]),shadow:f.a.string,shrink:f.a.oneOfType([f.a.string,f.a.string])};p.defaultProps=h,p.propTypes=b;var g={color:!0},m=c.a.div.withConfig({shouldForwardProp:function(n,t){return!g[n]&&t(n)}})(r||(r=a()(["\n  // Font\n  font-size: ",";\n\n  // Colors\n  background: ",";\n  color: ",";\n\n  // Spaces\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  // Responsive hiding\n  ","\n  ","\n  \n\n  // Borders\n  border-radius: ",";\n  border-style: ",";\n  border-width: ",";\n  border-color: ",";\n  border: ",";\n\n  // Shadows\n  box-shadow: ",";\n\n  // Handlers\n  pointer-events: ",";\n  &:hover {\n    ","\n  }\n\n  // Display\n  display: ",";\n\n  // Position\n  position: ",";\n  left: ",";\n  right: ",";\n  top: ",";\n  bottom: ",";\n  z-index: ",";\n  overflow: ",";\n  cursor: ",";\n\n  // Size\n  width: ",";\n  max-width: ",";\n  min-width: ",";\n  height: ",";\n  max-height: ",";\n  min-height: ",";\n\n  // Animation\n  transition: ",";\n  transform: ",";\n  animation: ",";\n\n  //Flexbox children props\n  flex-shrink: ",";\n  flex-grow: ",";\n  flex-basis: ",";\n  flex: ",";\n\n  // Text\n  text-align: ",";\n  text-transform: ",";\n  line-height: ",";\n\n  // Cursor\n  cursor: ",";\n"])),(function(n){var t=n.fontSize;return n.theme.fontSizes[t]||t}),(function(n){var t=n.theme,e=n.background;return t.colors[e]}),(function(n){var t=n.theme,e=n.color;return t.colors[e]}),(function(n){var t=n.theme,e=n.padding;return Object(u.a)("padding",e,t)}),(function(n){var t=n.theme,e=n.paddingTop;return Object(u.a)("padding-top",e,t)}),(function(n){var t=n.theme,e=n.paddingRight;return Object(u.a)("padding-right",e,t)}),(function(n){var t=n.theme,e=n.paddingBottom;return Object(u.a)("padding-bottom",e,t)}),(function(n){var t=n.theme,e=n.paddingLeft;return Object(u.a)("padding-left",e,t)}),(function(n){var t=n.theme,e=n.marginLeft;return Object(u.a)("margin-left",e,t)}),(function(n){var t=n.theme,e=n.marginRight;return Object(u.a)("margin-right",e,t)}),(function(n){var t=n.theme,e=n.marginTop;return Object(u.a)("margin-top",e,t)}),(function(n){var t=n.theme,e=n.marginBottom;return Object(u.a)("margin-bottom",e,t)}),(function(n){var t=n.theme;return n.hiddenS?"".concat(t.mediaQueries.tablet," { display: none; }"):void 0}),(function(n){var t=n.theme;return n.hiddenXS?"".concat(t.mediaQueries.mobile," { display: none; }"):void 0}),(function(n){var t=n.theme,e=n.hasRadius,r=n.borderRadius;return e?t.borderRadius:r}),(function(n){return n.borderStyle}),(function(n){return n.borderWidth}),(function(n){var t=n.borderColor;return n.theme.colors[t]}),(function(n){var t=n.theme,e=n.borderColor,r=n.borderStyle,o=n.borderWidth;if(e&&!r&&!o)return"1px solid ".concat(t.colors[e])}),(function(n){var t=n.theme,e=n.shadow;return t.shadows[e]}),(function(n){return n.pointerEvents}),(function(n){var t=n._hover,e=n.theme;return t?t(e):void 0}),(function(n){return n.display}),(function(n){return n.position}),(function(n){var t=n.left;return n.theme.spaces[t]||t}),(function(n){var t=n.right;return n.theme.spaces[t]||t}),(function(n){var t=n.top;return n.theme.spaces[t]||t}),(function(n){var t=n.bottom;return n.theme.spaces[t]||t}),(function(n){return n.zIndex}),(function(n){return n.overflow}),(function(n){return n.cursor}),(function(n){var t=n.width;return n.theme.spaces[t]||t}),(function(n){var t=n.maxWidth;return n.theme.spaces[t]||t}),(function(n){var t=n.minWidth;return n.theme.spaces[t]||t}),(function(n){var t=n.height;return n.theme.spaces[t]||t}),(function(n){var t=n.maxHeight;return n.theme.spaces[t]||t}),(function(n){var t=n.minHeight;return n.theme.spaces[t]||t}),(function(n){return n.transition}),(function(n){return n.transform}),(function(n){return n.animation}),(function(n){return n.shrink}),(function(n){return n.grow}),(function(n){return n.basis}),(function(n){return n.flex}),(function(n){return n.textAlign}),(function(n){return n.textTransform}),(function(n){return n.lineHeight}),(function(n){return n.cursor}));m.defaultProps=h,m.propTypes=b},7:function(n,t,e){"use strict";var r=e(10),o=e.n(r),a=e(13),i=e.n(a);t.a=function(n,t,e){var r=t;if(Array.isArray(t)||"object"!==i()(t)||(r=[null==t?void 0:t.desktop,null==t?void 0:t.tablet,null==t?void 0:t.mobile]),void 0!==r){if(Array.isArray(r)){var a=r,c=o()(a,3),u=c[0],s=c[1],l=c[2],d="".concat(n,": ").concat(e.spaces[u],";");return void 0!==s&&(d+="".concat(e.mediaQueries.tablet,"{\n          ").concat(n,": ").concat(e.spaces[s],";\n        }")),void 0!==l&&(d+="".concat(e.mediaQueries.mobile,"{\n          ").concat(n,": ").concat(e.spaces[l],";\n        }")),d}var f=e.spaces[r]||r;return"".concat(n,": ").concat(f,";")}}},8:function(n,t,e){"use strict";e.r(t),e.d(t,"Typography",(function(){return m}));var r,o=e(3),a=e.n(o),i=e(2),c=e.n(i),u=["alpha","beta","delta","epsilon","omega","pi","sigma"],s=e(1),l=e.n(s),d=e(0),f=e.n(d),p=function(n){return l.a.createElement("div",n)},h={ellipsis:!1,fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:"omega"},b={ellipsis:f.a.bool,fontSize:f.a.oneOfType([f.a.number,f.a.string]),fontWeight:f.a.string,lineHeight:f.a.oneOfType([f.a.number,f.a.string]),textColor:f.a.string,textTransform:f.a.string,variant:f.a.oneOf(u)};p.defaultProps=h,p.propTypes=b;var g={fontSize:!0,fontWeight:!0},m=c.a.span.withConfig({shouldForwardProp:function(n,t){return!g[n]&&t(n)}})(r||(r=a()(["\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  color: ",";\n  text-transform: ",";\n  ","\n  ","\n"])),(function(n){var t=n.theme,e=n.fontWeight;return t.fontWeights[e]}),(function(n){var t=n.theme,e=n.fontSize;return t.fontSizes[e]}),(function(n){var t=n.theme,e=n.lineHeight;return t.lineHeights[e]}),(function(n){var t=n.theme,e=n.textColor;return t.colors[e||"neutral800"]}),(function(n){return n.textTransform}),(function(n){return n.ellipsis&&"\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  "}),(function(n){var t=n.variant,e=n.theme;switch(t){case"alpha":return"\n        font-weight: ".concat(e.fontWeights.bold,";\n        font-size: ").concat(e.fontSizes[5],";\n        line-height: ").concat(e.lineHeights[2],";\n      ");case"beta":return"\n        font-weight: ".concat(e.fontWeights.bold,";\n        font-size: ").concat(e.fontSizes[4],";\n        line-height: ").concat(e.lineHeights[1],";\n      ");case"delta":return"\n        font-weight: ".concat(e.fontWeights.semiBold,";\n        font-size: ").concat(e.fontSizes[3],";\n        line-height: ").concat(e.lineHeights[2],";\n      ");case"epsilon":return"\n        font-size: ".concat(e.fontSizes[3],";\n        line-height: ").concat(e.lineHeights[6],";\n      ");case"omega":return"\n        font-size: ".concat(e.fontSizes[2],";\n        line-height: ").concat(e.lineHeights[4],";\n      ");case"pi":return"\n        font-size: ".concat(e.fontSizes[1],";\n        line-height: ").concat(e.lineHeights[3],";\n      ");case"sigma":return"\n        font-weight: ".concat(e.fontWeights.bold,";\n        font-size: ").concat(e.fontSizes[0],";\n        line-height: ").concat(e.lineHeights[5],";\n        text-transform: uppercase;\n      ");default:return"\n        font-size: ".concat(e.fontSizes[2],";\n      ")}}));m.defaultProps=h,m.propTypes=b}})}));

/***/ }),

/***/ 26163:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(67294)):0}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=97)}({0:function(t,r){t.exports=e},97:function(e,t,r){"use strict";r.r(t);var n=r(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=function(e){return n.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{d:"M0 4a4 4 0 014-4h24a4 4 0 014 4v24a4 4 0 01-4 4H4a4 4 0 01-4-4V4z",fill:"#4945FF"}),n.createElement("path",{d:"M15.733 8c.343 0 .678.108.963.31.285.202.507.49.639.826.13.337.165.707.098 1.064a1.879 1.879 0 01-.474.942 1.705 1.705 0 01-.887.504 1.64 1.64 0 01-1.002-.105 1.76 1.76 0 01-.778-.678A1.924 1.924 0 0114 9.841a1.9 1.9 0 01.508-1.302c.325-.345.766-.539 1.225-.539zM20 24h-8v-2.265h2.933v-6.23H12.8v-2.266h4.267v8.495H20V24z",fill:"#fff"}))}}})}));

/***/ }),

/***/ 28923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_App)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-seo/admin/src/pluginId.js
var pluginId = __webpack_require__(274);
var pluginId_default = /*#__PURE__*/__webpack_require__.n(pluginId);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Box.js
var Box = __webpack_require__(5493);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-seo/admin/src/utils/index.js + 1 modules
var utils = __webpack_require__(76835);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-seo/admin/src/utils/api.js
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};


const fetchSeoComponent = () => __async(void 0, null, function* () {
  try {
    const data = yield (0,build.request)(`/${(pluginId_default())}/component`, { method: "GET" });
    return data;
  } catch (error) {
    return null;
  }
});
const fetchContentTypes = () => __async(void 0, null, function* () {
  try {
    const data = yield (0,build.request)(`/${(pluginId_default())}/content-types`, { method: "GET" });
    return data;
  } catch (error) {
    return null;
  }
});
const createSeoComponent = () => __async(void 0, null, function* () {
  try {
    const data = yield (0,build.request)(
      `/${(pluginId_default())}/component`,
      {
        method: "POST"
      },
      true
    );
    return data.json();
  } catch (error) {
    return null;
  }
});


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Flex.js
var Flex = __webpack_require__(67826);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/LinkButton.js
var LinkButton = __webpack_require__(60985);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Typography.js
var Typography = __webpack_require__(49425);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/EmptyStateLayout.js
var EmptyStateLayout = __webpack_require__(62791);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Table.js
var Table = __webpack_require__(41798);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/Plus.js
var Plus = __webpack_require__(80768);
var Plus_default = /*#__PURE__*/__webpack_require__.n(Plus);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/Check.js
var Check = __webpack_require__(84734);
var Check_default = /*#__PURE__*/__webpack_require__.n(Check);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-seo/admin/src/components/SeoPage/Info/EmptyComponentLayout/illo.js
var illo = __webpack_require__(10156);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Tabs.js
var Tabs = __webpack_require__(11402);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(96486);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-seo/admin/src/components/SeoPage/Info/index.js














const Info = ({ contentTypes }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Box.Box, {
    padding: 8
  }, /* @__PURE__ */ react.createElement(Tabs.TabGroup, {
    label: "label",
    id: "tabs"
  }, /* @__PURE__ */ react.createElement(Tabs.Tabs, null, /* @__PURE__ */ react.createElement(Tabs.Tab, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "omega"
  }, " Collection Types")), /* @__PURE__ */ react.createElement(Tabs.Tab, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "omega"
  }, " Single Types"))), /* @__PURE__ */ react.createElement(Tabs.TabPanels, null, /* @__PURE__ */ react.createElement(Tabs.TabPanel, null, /* @__PURE__ */ react.createElement(Table.Table, {
    colCount: 2,
    rowCount: contentTypes.collectionTypes.length
  }, /* @__PURE__ */ react.createElement(Table.Thead, null, /* @__PURE__ */ react.createElement(Table.Tr, null, /* @__PURE__ */ react.createElement(Table.Th, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "sigma"
  }, "Name")))), /* @__PURE__ */ react.createElement(Table.Tbody, null, contentTypes && contentTypes.collectionTypes && !lodash_default().isEmpty(contentTypes.collectionTypes) ? contentTypes.collectionTypes.map((item) => /* @__PURE__ */ react.createElement(Table.Tr, {
    key: item.uid
  }, /* @__PURE__ */ react.createElement(Table.Td, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    textColor: "neutral800"
  }, item.globalId)), /* @__PURE__ */ react.createElement(Table.Td, null, /* @__PURE__ */ react.createElement(Flex.Flex, {
    justifyContent: "right",
    alignItems: "right"
  }, item.seo ? /* @__PURE__ */ react.createElement(LinkButton.LinkButton, {
    disabled: true,
    startIcon: /* @__PURE__ */ react.createElement((Check_default()), null)
  }, formatMessage({
    id: (0,utils/* getTrad */.O)("SEOPage.info.added"),
    defaultMessage: "Added"
  })) : /* @__PURE__ */ react.createElement(LinkButton.LinkButton, {
    startIcon: /* @__PURE__ */ react.createElement((Plus_default()), null),
    variant: "secondary",
    to: `/plugins/content-type-builder/content-types/${item.uid}`
  }, formatMessage({
    id: (0,utils/* getTrad */.O)("SEOPage.info.add"),
    defaultMessage: "Add component"
  })))))) : /* @__PURE__ */ react.createElement(Box.Box, {
    padding: 8,
    background: "neutral0"
  }, /* @__PURE__ */ react.createElement(EmptyStateLayout.EmptyStateLayout, {
    icon: /* @__PURE__ */ react.createElement(illo/* Illo */.w, null),
    content: formatMessage({
      id: (0,utils/* getTrad */.O)("SEOPage.info.no-collection-types"),
      defaultMessage: "You don't have any collection-types yet..."
    }),
    action: /* @__PURE__ */ react.createElement(LinkButton.LinkButton, {
      to: "/plugins/content-type-builder",
      variant: "secondary",
      startIcon: /* @__PURE__ */ react.createElement((Plus_default()), null)
    }, formatMessage({
      id: (0,utils/* getTrad */.O)(
        "SEOPage.info.create-collection-type"
      ),
      defaultMessage: "Create your first collection-type"
    }))
  }))))), /* @__PURE__ */ react.createElement(Tabs.TabPanel, null, /* @__PURE__ */ react.createElement(Table.Table, {
    colCount: 2,
    rowCount: contentTypes.singleTypes.length
  }, /* @__PURE__ */ react.createElement(Table.Thead, null, /* @__PURE__ */ react.createElement(Table.Tr, null, /* @__PURE__ */ react.createElement(Table.Th, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "sigma"
  }, "Name")))), /* @__PURE__ */ react.createElement(Table.Tbody, null, contentTypes && contentTypes.singleTypes && !lodash_default().isEmpty(contentTypes.singleTypes) ? contentTypes.singleTypes.map((item) => /* @__PURE__ */ react.createElement(Table.Tr, {
    key: item.uid
  }, /* @__PURE__ */ react.createElement(Table.Td, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    textColor: "neutral800"
  }, item.globalId)), /* @__PURE__ */ react.createElement(Table.Td, null, /* @__PURE__ */ react.createElement(Flex.Flex, {
    justifyContent: "right",
    alignItems: "right"
  }, item.seo ? /* @__PURE__ */ react.createElement(LinkButton.LinkButton, {
    disabled: true,
    startIcon: /* @__PURE__ */ react.createElement((Check_default()), null)
  }, formatMessage({
    id: (0,utils/* getTrad */.O)("SEOPage.info.added"),
    defaultMessage: "Added"
  })) : /* @__PURE__ */ react.createElement(LinkButton.LinkButton, {
    startIcon: /* @__PURE__ */ react.createElement((Plus_default()), null),
    variant: "secondary",
    to: `/plugins/content-type-builder/content-types/${item.uid}`
  }, formatMessage({
    id: (0,utils/* getTrad */.O)("SEOPage.info.add"),
    defaultMessage: "Add component"
  })))))) : /* @__PURE__ */ react.createElement(Box.Box, {
    padding: 8,
    background: "neutral0"
  }, /* @__PURE__ */ react.createElement(EmptyStateLayout.EmptyStateLayout, {
    icon: /* @__PURE__ */ react.createElement(illo/* Illo */.w, null),
    content: formatMessage({
      id: (0,utils/* getTrad */.O)("SEOPage.info.no-single-types"),
      defaultMessage: "You don't have any single-types yet..."
    }),
    action: /* @__PURE__ */ react.createElement(LinkButton.LinkButton, {
      to: "/plugins/content-type-builder",
      variant: "secondary",
      startIcon: /* @__PURE__ */ react.createElement((Plus_default()), null)
    }, formatMessage({
      id: (0,utils/* getTrad */.O)("SEOPage.info.create-single-type"),
      defaultMessage: "Create your first single-type"
    }))
  })))))))));
};
/* harmony default export */ const SeoPage_Info = (Info);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Layout.js
var Layout = __webpack_require__(78862);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/Pencil.js
var Pencil = __webpack_require__(19352);
var Pencil_default = /*#__PURE__*/__webpack_require__.n(Pencil);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-seo/admin/src/components/SeoPage/Header/index.js







const Header = (seoComponent) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(Box.Box, {
    background: "neutral100"
  }, /* @__PURE__ */ react.createElement(Layout.BaseHeaderLayout, {
    secondaryAction: seoComponent ? null : /* @__PURE__ */ react.createElement(LinkButton.LinkButton, {
      variant: "tertiary",
      to: "/plugins/content-type-builder/component-categories/shared/shared.seo",
      startIcon: /* @__PURE__ */ react.createElement((Pencil_default()), null)
    }, formatMessage({
      id: (0,utils/* getTrad */.O)("SEOPage.header.button.edit-component"),
      defaultMessage: "Edit SEO component"
    })),
    title: formatMessage({
      id: (0,utils/* getTrad */.O)("SEOPage.header.title"),
      defaultMessage: "SEO"
    }),
    subtitle: formatMessage({
      id: (0,utils/* getTrad */.O)("SEOPage.header.subtitle"),
      defaultMessage: "Optimize your content to be SEO friendly"
    }),
    as: "h2"
  }));
};
/* harmony default export */ const SeoPage_Header = (Header);

// EXTERNAL MODULE: ./node_modules/@strapi/icons/InformationSquare.js
var InformationSquare = __webpack_require__(26163);
var InformationSquare_default = /*#__PURE__*/__webpack_require__.n(InformationSquare);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-seo/admin/src/pages/HomePage/index.js
/* provided dependency */ var console = __webpack_require__(25108);
var HomePage_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};










const HomePage = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { lockAppWithAutoreload, unlockAppWithAutoreload } = (0,build.useAutoReloadOverlayBlocker)();
  const [isLoading, setIsLoading] = (0,react.useState)(true);
  const [shouldEffect, setShouldEffect] = (0,react.useState)(false);
  const seoComponent = (0,react.useRef)({});
  const contentTypes = (0,react.useRef)({});
  (0,react.useEffect)(() => HomePage_async(void 0, null, function* () {
    seoComponent.current = yield fetchSeoComponent();
    contentTypes.current = yield fetchContentTypes();
    if (!seoComponent.current) {
      try {
        lockAppWithAutoreload();
        yield createSeoComponent();
      } catch (error) {
        console.log(error);
      } finally {
        unlockAppWithAutoreload();
        setShouldEffect(true);
      }
    }
    setIsLoading(false);
  }), [shouldEffect]);
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null);
  }
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(SeoPage_Header, {
    seoComponent: seoComponent.current
  }), /* @__PURE__ */ react.createElement(Box.Box, {
    paddingLeft: 8,
    paddingRigth: 8
  }, /* @__PURE__ */ react.createElement(build.ContentBox, {
    title: formatMessage({
      id: "Information",
      defaultMessage: "Information"
    }),
    subtitle: formatMessage({
      id: (0,utils/* getTrad */.O)("SEOPage.info.information"),
      defaultMessage: "When adding your SEO component, make sure to name it 'seo' and to include it in the root of your Content-Type."
    }),
    icon: /* @__PURE__ */ react.createElement((InformationSquare_default()), null),
    iconBackground: "primary100"
  })), /* @__PURE__ */ react.createElement(SeoPage_Info, {
    contentTypes: contentTypes.current
  }));
};
/* harmony default export */ const pages_HomePage = ((0,react.memo)(HomePage));

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-seo/admin/src/pages/App/index.js





const App = () => {
  return /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(react_router_dom_min.Switch, null, /* @__PURE__ */ react.createElement(react_router_dom_min.Route, {
    path: `/plugins/${(pluginId_default())}`,
    component: pages_HomePage,
    exact: true
  }), /* @__PURE__ */ react.createElement(react_router_dom_min.Route, {
    component: build.NotFound
  })));
};
/* harmony default export */ const pages_App = (App);


/***/ })

}]);