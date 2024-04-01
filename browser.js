// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function o(e,r,t){var n=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(o):i(o)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function c(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=o(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=o(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===u.call(e.specifier)?u.call(t):a.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,y=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!n(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":f(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=p.call(t,w,"$1e"),t=p.call(t,v,"e"),t=p.call(t,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=p.call(t,g,"e+0$1"),t=p.call(t,d,"e-0$1"),e.alternate&&(t=p.call(t,h,"$1."),t=p.call(t,y,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===s.call(e.specifier)?s.call(t):l.call(t)}function j(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var S=String.fromCharCode,E=isNaN,O=Array.isArray;function _(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,t,n,i,a,u,f,l,s,p,g,d,h;if(!O(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",f=1,l=0;l<e.length;l++)if("string"==typeof(n=e[l]))u+=n;else{if(r=void 0!==n.precision,!(n=_(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,E(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):S(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,h=void 0,(h=g-p.length)<0?p:p=d?p+j(h):j(h)+p)),u+=n.arg||"",f+=1}return u}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function I(e){var r,t,n,i;for(t=[],i=0,n=k.exec(e);n;)(r=e.slice(i,k.lastIndex-n[0].length)).length&&t.push(r),t.push(x(n)),i=k.lastIndex,n=k.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function V(e){var r,t;if("string"!=typeof e)throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[I(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return T.apply(null,r)}var A,P=Object.prototype,F=P.toString,N=P.__defineGetter__,C=P.__defineSetter__,$=P.__lookupGetter__,B=P.__lookupSetter__;A=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===F.call(e))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&($.call(e,r)||B.call(e,r)?(n=e.__proto__,e.__proto__=P,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&N&&N.call(e,r,t.get),a&&C&&C.call(e,r,t.set),e};var L=A;function R(e,r,t){L(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function G(e){return"boolean"==typeof e}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return W&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString,M=Object.prototype.hasOwnProperty;function U(e,r){return null!=e&&M.call(e,r)}var Y="function"==typeof Symbol?Symbol:void 0,z="function"==typeof Y?Y.toStringTag:"",D=X()?function(e){var r,t,n;if(null==e)return Z.call(e);t=e[z],r=U(e,z);try{e[z]=void 0}catch(r){return Z.call(e)}return n=Z.call(e),r?e[z]=t:delete e[z],n}:function(e){return Z.call(e)},H=Boolean,q=Boolean.prototype.toString,J=X();function K(e){return"object"==typeof e&&(e instanceof H||(J?function(e){try{return q.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===D(e)))}function Q(e){return G(e)||K(e)}R(Q,"isPrimitive",G),R(Q,"isObject",K);var ee="object"==typeof self?self:null,re="object"==typeof window?window:null,te="object"==typeof globalThis?globalThis:null,ne=function(e){if(arguments.length){if(!G(e))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(te)return te;if(ee)return ee;if(re)return re;throw new Error("unexpected error. Unable to resolve global object.")}(),ie=ne.document&&ne.document.childNodes,oe=Int8Array;function ae(){return/^\s*function\s*([^(]*)/i}var ue,ce=/^\s*function\s*([^(]*)/i;R(ae,"REGEXP",ce),ue=Array.isArray?Array.isArray:function(e){return"[object Array]"===D(e)};var fe=ue;function le(e){return null!==e&&"object"==typeof e}var se=function(e){if("function"!=typeof e)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!fe(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(le);function pe(e){var r,t,n,i;if(("Object"===(t=D(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ce.exec(n.toString()))return r[1]}return le(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}R(le,"isObjectLikeArray",se);var ge,de="function"==typeof e||"object"==typeof oe||"function"==typeof ie?function(e){return pe(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?pe(e).toLowerCase():r},he=(ge=Object.assign,"function"===de(ge)),ye=Object.assign;function be(e){return Object.keys(Object(e))}var ve,we=void 0!==Object.keys;function me(e){return"[object Arguments]"===D(e)}ve=function(){return me(arguments)}();var je=ve;function Se(e){return"string"==typeof e}var Ee=String.prototype.valueOf,Oe=X();function _e(e){return"object"==typeof e&&(e instanceof String||(Oe?function(e){try{return Ee.call(e),!0}catch(e){return!1}}(e):"[object String]"===D(e)))}function Te(e){return Se(e)||_e(e)}function ke(e){return"number"==typeof e}R(Te,"isPrimitive",Se),R(Te,"isObject",_e);var xe=Number,Ie=xe.prototype.toString,Ve=X();function Ae(e){return"object"==typeof e&&(e instanceof xe||(Ve?function(e){try{return Ie.call(e),!0}catch(e){return!1}}(e):"[object Number]"===D(e)))}function Pe(e){return ke(e)||Ae(e)}function Fe(e){return e!=e}function Ne(e){return ke(e)&&Fe(e)}function Ce(e){return Ae(e)&&Fe(e.valueOf())}function $e(e){return Ne(e)||Ce(e)}R(Pe,"isPrimitive",ke),R(Pe,"isObject",Ae),R($e,"isPrimitive",Ne),R($e,"isObject",Ce);var Be=Number.POSITIVE_INFINITY,Le=xe.NEGATIVE_INFINITY,Re=Math.floor;function Ge(e){return Re(e)===e}function We(e){return e<Be&&e>Le&&Ge(e)}function Xe(e){return ke(e)&&We(e)}function Ze(e){return Ae(e)&&We(e.valueOf())}function Me(e){return Xe(e)||Ze(e)}R(Me,"isPrimitive",Xe),R(Me,"isObject",Ze);var Ue,Ye=Object.prototype.propertyIsEnumerable,ze=!Ye.call("beep","0");function De(e,r){var t;return null!=e&&(!(t=Ye.call(e,r))&&ze&&Te(e)?!Ne(r=+r)&&Xe(r)&&r>=0&&r<e.length:t)}Ue=je?me:function(e){return null!==e&&"object"==typeof e&&!fe(e)&&"number"==typeof e.length&&Ge(e.length)&&e.length>=0&&e.length<=4294967295&&U(e,"callee")&&!De(e,"callee")};var He=Ue,qe=Array.prototype.slice,Je=De((function(){}),"prototype"),Ke=!De({toString:null},"toString"),Qe=9007199254740991;function er(e,r,t){var n,i;if(!function(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Ge(e.length)&&e.length>=0&&e.length<=Qe}(e)&&!Se(e))throw new TypeError(V("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!Xe(t))throw new TypeError(V("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if($e(r)){for(;i<n;i++)if($e(e[i]))return i}else for(;i<n;i++)if(e[i]===r)return i;return-1}function rr(e){return e.constructor&&e.constructor.prototype===e}var tr,nr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],ir="undefined"==typeof window?void 0:window,or=function(){var e;if("undefined"===de(ir))return!1;for(e in ir)try{-1===er(nr,e)&&U(ir,e)&&null!==ir[e]&&"object"===de(ir[e])&&rr(ir[e])}catch(e){return!0}return!1}(),ar="undefined"!=typeof window,ur=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];tr=we?function(){return 2!==(be(arguments)||"").length}(1,2)?function(e){return He(e)?be(qe.call(e)):be(e)}:be:function(e){var r,t,n,i,o,a,u;if(i=[],He(e)){for(u=0;u<e.length;u++)i.push(u.toString());return i}if("string"==typeof e){if(e.length>0&&!U(e,"0"))for(u=0;u<e.length;u++)i.push(u.toString())}else{if(0==(n="function"==typeof e)&&!le(e))return i;t=Je&&n}for(o in e)t&&"prototype"===o||!U(e,o)||i.push(String(o));if(Ke)for(r=function(e){if(!1===ar&&!or)return rr(e);try{return rr(e)}catch(e){return!1}}(e),u=0;u<ur.length;u++)a=ur[u],r&&"constructor"===a||!U(e,a)||i.push(String(a));return i};var cr,fr=tr,lr=void 0!==Object.getOwnPropertySymbols,sr=Object,pr=sr.getOwnPropertySymbols;cr=lr?function(e){return pr(sr(e))}:function(){return[]};var gr,dr=cr;function hr(e){var r,t,n;for(r=fr(e),t=dr(e),n=0;n<t.length;n++)De(e,t[n])&&r.push(t[n]);return r}gr=he?ye:function(e){var r,t,n,i,o,a,u;if(null==e)throw new TypeError(V("invalid argument. First argument must be a non-null object. Value: `%s`.",e));for(o=sr(e),a=1;a<arguments.length;a++)if(null!=(r=arguments[a]))for(i=(t=hr(sr(r))).length,u=0;u<i;u++)o[n=t[u]]=r[n];return o};var yr=gr;return function(e){if("object"!=typeof e||null===e)throw new TypeError(function(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}("1nzDv",e));return function(e,r){var t=e.flags;return"object"!=typeof t||null===t?{}:r?yr({},t):t}(e,!0)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).flags=r();
//# sourceMappingURL=browser.js.map
