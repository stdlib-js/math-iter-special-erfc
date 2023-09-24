// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterErfc=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function o(r,t,n){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=n?r+e(i):e(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function a(r){var t,e,a;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,a=parseInt(e,10),!isFinite(a)){if(!n(e))throw new Error("invalid integer. Value: "+e);a=0}return a<0&&("u"===r.specifier||10!==t)&&(a=4294967295+a+1),a<0?(e=(-a).toString(t),r.precision&&(e=o(e,r.precision,r.padRight)),e="-"+e):(e=a.toString(t),a||r.precision?r.precision&&(e=o(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===u.call(r.specifier)?u.call(e):i.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,b=/e-(\d)$/,v=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,w=/\.0*e/,h=/(\..*[^0])0*e/;function m(r){var t,e,o=parseFloat(r.arg);if(!isFinite(o)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);o=r.arg}switch(r.specifier){case"e":case"E":e=o.toExponential(r.precision);break;case"f":case"F":e=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((t=r.precision)>0&&(t-=1),e=o.toExponential(t)):e=o.toPrecision(r.precision),r.alternate||(e=p.call(e,h,"$1e"),e=p.call(e,w,"e"),e=p.call(e,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,y,"e+0$1"),e=p.call(e,b,"e-0$1"),r.alternate&&(e=p.call(e,v,"$1."),e=p.call(e,g,"$1.e")),o>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):l.call(e)}function j(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function E(r,t,n){var e=t-r.length;return e<0?r:r=n?r+j(e):j(e)+r}var A=String.fromCharCode,_=isNaN,O=Array.isArray;function T(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function S(r){var t,n,e,i,u,f,l,s,p;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(e=r[s]))f+=e;else{if(t=void 0!==e.precision,!(e=T(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),n=e.flags,p=0;p<n.length;p++)switch(i=n.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,_(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,_(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=a(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!_(e.arg)){if((u=parseInt(e.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=_(u)?String(e.arg):A(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=o(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=E(e.arg,e.width,e.padRight)),f+=e.arg||"",l+=1}return f}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function B(r){var t,n,e,o;for(n=[],o=0,e=x.exec(r);e;)(t=r.slice(o,x.lastIndex-e[0].length)).length&&n.push(t),n.push(U(e)),o=x.lastIndex,e=x.exec(r);return(t=r.slice(o)).length&&n.push(t),n}function F(r){return"string"==typeof r}function I(r){var t,n,e;if(!F(r))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=B(r),(n=new Array(arguments.length))[0]=t,e=1;e<n.length;e++)n[e]=arguments[e];return S.apply(null,n)}var V,k=Object.prototype,N=k.toString,P=k.__defineGetter__,L=k.__defineSetter__,C=k.__lookupGetter__,G=k.__lookupSetter__;V=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===N.call(n))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((o="value"in n)&&(C.call(r,t)||G.call(r,t)?(e=r.__proto__,r.__proto__=k,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,u="set"in n,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&P&&P.call(r,t,n.get),u&&L&&L.call(r,t,n.set),r};var M=V;function R(r,t,n){M(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var $=/./;function H(r){return"boolean"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return W&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;function z(r,t){return null!=r&&Y.call(r,t)}var q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"";var J=X()?function(r){var t,n,e;if(null==r)return Z.call(r);n=r[D],t=z(r,D);try{r[D]=void 0}catch(t){return Z.call(r)}return e=Z.call(r),t?r[D]=n:delete r[D],e}:function(r){return Z.call(r)},K=Boolean,Q=Boolean.prototype.toString;var rr=X();function tr(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function nr(r){return H(r)||tr(r)}function er(){return new Function("return this;")()}R(nr,"isPrimitive",H),R(nr,"isObject",tr);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ur="object"==typeof global?global:null,ar="object"==typeof globalThis?globalThis:null;var cr=function(r){if(arguments.length){if(!H(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return er()}if(ar)return ar;if(or)return or;if(ir)return ir;if(ur)return ur;throw new Error("unexpected error. Unable to resolve global object.")}(),fr=cr.document&&cr.document.childNodes,lr=Int8Array;function sr(){return/^\s*function\s*([^(]*)/i}var pr,yr=/^\s*function\s*([^(]*)/i;R(sr,"REGEXP",yr),pr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};var br=pr;function vr(r){return null!==r&&"object"==typeof r}var gr=function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!br(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(vr);function dr(r){var t,n,e,o;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=yr.exec(e.toString()))return t[1]}return vr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}R(vr,"isObjectLikeArray",gr);var wr="function"==typeof $||"object"==typeof lr||"function"==typeof fr?function(r){return dr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?dr(r).toLowerCase():t};function hr(r){return"function"===wr(r)}var mr=/./;function jr(r,t,n){M(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Er(r){return"boolean"==typeof r}var Ar=Boolean.prototype.toString;var _r=X();function Or(r){return"object"==typeof r&&(r instanceof K||(_r?function(r){try{return Ar.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function Tr(r){return Er(r)||Or(r)}function Sr(){return new Function("return this;")()}jr(Tr,"isPrimitive",Er),jr(Tr,"isObject",Or);var xr="object"==typeof self?self:null,Ur="object"==typeof window?window:null,Br="object"==typeof global?global:null,Fr="object"==typeof globalThis?globalThis:null;var Ir=function(r){if(arguments.length){if(!Er(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Sr()}if(Fr)return Fr;if(xr)return xr;if(Ur)return Ur;if(Br)return Br;throw new Error("unexpected error. Unable to resolve global object.")}(),Vr=Ir.document&&Ir.document.childNodes,kr=Int8Array;function Nr(){return/^\s*function\s*([^(]*)/i}var Pr=/^\s*function\s*([^(]*)/i;function Lr(r){return null!==r&&"object"==typeof r}jr(Nr,"REGEXP",Pr);var Cr=function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!br(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(Lr);function Gr(r){var t,n,e,o;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=Pr.exec(e.toString()))return t[1]}return Lr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}jr(Lr,"isObjectLikeArray",Cr);var Mr="function"==typeof mr||"object"==typeof kr||"function"==typeof Vr?function(r){return Gr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Gr(r).toLowerCase():t};function Rr(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&function(r){return"function"===Mr(r)}(r.next)}function $r(r,t,n){M(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Hr(r){return"number"==typeof r}var Wr=Number,Xr=Wr.prototype.toString;var Zr=X();function Yr(r){return"object"==typeof r&&(r instanceof Wr||(Zr?function(r){try{return Xr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function zr(r){return Hr(r)||Yr(r)}$r(zr,"isPrimitive",Hr),$r(zr,"isObject",Yr);var qr="function"==typeof q&&"symbol"==typeof q("foo")&&z(q,"iterator")&&"symbol"==typeof q.iterator?Symbol.iterator:null;var Dr=/./;function Jr(r,t,n){M(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Kr(r){return"boolean"==typeof r}var Qr=Boolean.prototype.toString;var rt=X();function tt(r){return"object"==typeof r&&(r instanceof K||(rt?function(r){try{return Qr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function nt(r){return Kr(r)||tt(r)}function et(){return new Function("return this;")()}Jr(nt,"isPrimitive",Kr),Jr(nt,"isObject",tt);var ot="object"==typeof self?self:null,it="object"==typeof window?window:null,ut="object"==typeof global?global:null,at="object"==typeof globalThis?globalThis:null;var ct=function(r){if(arguments.length){if(!Kr(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return et()}if(at)return at;if(ot)return ot;if(it)return it;if(ut)return ut;throw new Error("unexpected error. Unable to resolve global object.")}(),ft=ct.document&&ct.document.childNodes,lt=Int8Array;function st(){return/^\s*function\s*([^(]*)/i}var pt=/^\s*function\s*([^(]*)/i;function yt(r){return null!==r&&"object"==typeof r}Jr(st,"REGEXP",pt);var bt=function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!br(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(yt);function vt(r){var t,n,e,o;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=pt.exec(e.toString()))return t[1]}return yt(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}Jr(yt,"isObjectLikeArray",bt);var gt="function"==typeof Dr||"object"==typeof lt||"function"==typeof ft?function(r){return vt(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?vt(r).toLowerCase():t};function dt(r){return"function"===gt(r)}var wt=Object,ht=/./;function mt(r,t,n){M(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function jt(r){return"boolean"==typeof r}var Et=Boolean.prototype.toString;var At=X();function _t(r){return"object"==typeof r&&(r instanceof K||(At?function(r){try{return Et.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function Ot(r){return jt(r)||_t(r)}function Tt(){return new Function("return this;")()}mt(Ot,"isPrimitive",jt),mt(Ot,"isObject",_t);var St="object"==typeof self?self:null,xt="object"==typeof window?window:null,Ut="object"==typeof global?global:null,Bt="object"==typeof globalThis?globalThis:null;var Ft=function(r){if(arguments.length){if(!jt(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Tt()}if(Bt)return Bt;if(St)return St;if(xt)return xt;if(Ut)return Ut;throw new Error("unexpected error. Unable to resolve global object.")}(),It=Ft.document&&Ft.document.childNodes,Vt=Int8Array;function kt(){return/^\s*function\s*([^(]*)/i}var Nt=/^\s*function\s*([^(]*)/i;function Pt(r){return null!==r&&"object"==typeof r}mt(kt,"REGEXP",Nt);var Lt=function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!br(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(Pt);function Ct(r){var t,n,e,o;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=Nt.exec(e.toString()))return t[1]}return Pt(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}mt(Pt,"isObjectLikeArray",Lt);var Gt="function"==typeof ht||"object"==typeof Vt||"function"==typeof It?function(r){return Ct(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Ct(r).toLowerCase():t};var Mt,Rt,$t=Object.getPrototypeOf;Rt=Object.getPrototypeOf,Mt="function"===Gt(Rt)?$t:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Ht=Mt;var Wt=Object.prototype;function Xt(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!br(r)}(r)&&(t=function(r){return null==r?null:(r=wt(r),Ht(r))}(r),!t||!z(r,"constructor")&&z(t,"constructor")&&dt(t.constructor)&&"[object Function]"===J(t.constructor)&&z(t,"isPrototypeOf")&&dt(t.isPrototypeOf)&&(t===Wt||function(r){var t;for(t in r)if(!z(r,t))return!1;return!0}(r)))}function Zt(r,t){return Xt(t)?(z(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(I("invalid argument. Options argument must be an object. Value: `%s`.",t))}function Yt(r,t,n){var e,o,i,u;if(!Rr(r))throw new TypeError(I("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!hr(t))throw new TypeError(I("invalid argument. Second argument must be a function. Value: `%s`.",t));if(e={invalid:NaN},arguments.length>2&&(i=Zt(e,n)))throw i;return R(o={},"next",a),R(o,"return",c),qr&&hr(r[qr])&&R(o,qr,f),o;function a(){var n;return u?{done:!0}:(n=r.next()).done?(u=!0,n):{value:Hr(n.value)?t(n.value):e.invalid,done:!1}}function c(r){return u=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return Yt(r[qr](),t,e)}}function zt(r){return r!=r}var qt=Math.floor,Dt=Math.ceil;function Jt(r){return r<0?Dt(r):qt(r)}var Kt=Wr.NEGATIVE_INFINITY,Qt=Number.POSITIVE_INFINITY;function rn(r){return r===Qt||r===Kt}var tn="function"==typeof Uint32Array;var nn="function"==typeof Uint32Array?Uint32Array:null;var en,on="function"==typeof Uint32Array?Uint32Array:void 0;en=function(){var r,t;if("function"!=typeof nn)return!1;try{r=function(r){return tn&&r instanceof Uint32Array||"[object Uint32Array]"===J(r)}(t=new nn(t=[1,3.14,-3.14,4294967296,4294967297]))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?on:function(){throw new Error("not implemented")};var un=en,an="function"==typeof Float64Array;var cn="function"==typeof Float64Array?Float64Array:null;var fn,ln="function"==typeof Float64Array?Float64Array:void 0;fn=function(){var r,t;if("function"!=typeof cn)return!1;try{r=function(r){return an&&r instanceof Float64Array||"[object Float64Array]"===J(r)}(t=new cn([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?ln:function(){throw new Error("not implemented")};var sn=fn,pn="function"==typeof Uint8Array;var yn="function"==typeof Uint8Array?Uint8Array:null;var bn,vn="function"==typeof Uint8Array?Uint8Array:void 0;bn=function(){var r,t;if("function"!=typeof yn)return!1;try{r=function(r){return pn&&r instanceof Uint8Array||"[object Uint8Array]"===J(r)}(t=new yn(t=[1,3.14,-3.14,256,257]))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?vn:function(){throw new Error("not implemented")};var gn=bn,dn="function"==typeof Uint16Array;var wn="function"==typeof Uint16Array?Uint16Array:null;var hn,mn="function"==typeof Uint16Array?Uint16Array:void 0;hn=function(){var r,t;if("function"!=typeof wn)return!1;try{r=function(r){return dn&&r instanceof Uint16Array||"[object Uint16Array]"===J(r)}(t=new wn(t=[1,3.14,-3.14,65536,65537]))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?mn:function(){throw new Error("not implemented")};var jn,En={uint16:hn,uint8:gn};(jn=new En.uint16(1))[0]=4660;var An,_n,On=52===new En.uint8(jn.buffer)[0];!0===On?(An=1,_n=0):(An=0,_n=1);var Tn={HIGH:An,LOW:_n},Sn=new sn(1),xn=new un(Sn.buffer),Un=Tn.HIGH,Bn=Tn.LOW;function Fn(r,t,n,e){return Sn[0]=r,t[e]=xn[Un],t[e+n]=xn[Bn],t}function In(r){return Fn(r,[0,0],1,0)}!function(r,t,n){M(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}(In,"assign",Fn);var Vn,kn,Nn=!0===On?1:0,Pn=new sn(1),Ln=new un(Pn.buffer);function Cn(r){return Pn[0]=r,Ln[Nn]}!0===On?(Vn=1,kn=0):(Vn=0,kn=1);var Gn={HIGH:Vn,LOW:kn},Mn=new sn(1),Rn=new un(Mn.buffer),$n=Gn.HIGH,Hn=Gn.LOW;function Wn(r,t){return Rn[$n]=r,Rn[Hn]=t,Mn[0]}var Xn=[0,0];function Zn(r,t,n,e){return zt(r)||rn(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}!function(r,t,n){M(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}((function(r){return Zn(r,[0,0],1,0)}),"assign",Zn);var Yn=[0,0],zn=[0,0];function qn(r,t){var n,e,o,i,u,a;return 0===t||0===r||zt(r)||rn(r)?r:(Zn(r,Yn,1,0),t+=Yn[1],t+=function(r){var t=Cn(r);return(t=(2146435072&t)>>>20)-1023|0}(r=Yn[0]),t<-1074?(o=0,i=r,In.assign(o,Xn,1,0),u=Xn[0],u&=2147483647,a=Cn(i),Wn(u|=a&=2147483648,Xn[1])):t>1023?r<0?Kt:Qt:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,In.assign(r,zn,1,0),n=zn[0],n&=2148532223,e*Wn(n|=t+1023<<20,zn[1])))}var Dn=1.4426950408889634,Jn=1/(1<<28);function Kn(r){var t;return zt(r)||r===Qt?r:r===Kt?0:r>709.782712893384?Qt:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Jn?1+r:function(r,t,n){var e,o,i,u;return qn(1-(t-(e=r-t)*(i=e-(o=e*e)*(0===(u=o)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),n)}(r-.6931471803691238*(t=Jt(r<0?Dn*r-.5:Dn*r+.5)),1.9082149292705877e-10*t,t)}var Qn=!0===On?0:1,re=new sn(1),te=new un(re.buffer);var ne=.8450629115104675;function ee(r){var t,n,e,o,i,u,a,c;if(zt(r))return NaN;if(r===Qt)return 0;if(r===Kt)return 2;if(0===r)return 1;if(r<0?(t=!0,n=-r):(t=!1,n=r),n<.84375)return n<13877787807814457e-33?1-r:(o=.12837916709551256+(e=r*r)*function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015}(e),i=1+e*function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))}(e),u=o/i,r<.25?1-(r+r*u):(o=r*u,.5-(o+=r-.5)));if(n<1.25)return a=(i=n-1)*function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)}(i)-.0023621185607526594,c=1+i*function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))}(i),t?1+ne+a/c:1-ne-a/c;if(n<28){if(i=1/(n*n),n<2.857142857142857)o=i*function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(i)-.009864944034847148,i=1+i*function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))}(i);else{if(r<-6)return 2;o=i*function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(i)-.0098649429247001,i=1+i*function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))}(i)}return e=function(r,t){return re[0]=r,te[Qn]=t>>>0,re[0]}(n,0),o=Kn(-e*e-.5625)*Kn((e-n)*(e+n)+o/i),t?2-o/n:o/n}return t?2:0}return function(r){return Yt(r,ee)}}));
//# sourceMappingURL=index.js.map
