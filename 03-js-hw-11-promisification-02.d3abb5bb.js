!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){r[e]=n},n.parcelRequired7c6=o),o.register("hKHmD",(function(e,n){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}}));var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){i.default(e,n,t[n])}))}return e};var a,i=(a=o("hKHmD"))&&a.__esModule?a:{default:a};var c=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!0},{name:"Lux",active:!1}],l=function(n,t,r){r(n.map((function(n){return n.name===t?e(u)({},n,{active:!n.active}):n})))},f=function(n,t){return new Promise((function(r){r(n.map((function(n){return n.name===t?e(u)({},n,{active:!n.active}):n})))}))},d=function(e){return console.table(e)};l(c,"Mango",d),l(c,"Lux",d),f(c,"Mango").then(d),f(c,"Lux").then(d)}();
//# sourceMappingURL=03-js-hw-11-promisification-02.d3abb5bb.js.map
