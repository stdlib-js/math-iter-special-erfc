// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function o(r,t,n){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=n?r+e(i):e(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,e,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!n(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(e=(-u).toString(t),r.precision&&(e=o(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(t),u||r.precision?r.precision&&(e=o(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):i.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,d=/e-(\d)$/,g=/^(\d+)$/,v=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var t,e,o=parseFloat(r.arg);if(!isFinite(o)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);o=r.arg}switch(r.specifier){case"e":case"E":e=o.toExponential(r.precision);break;case"f":case"F":e=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((t=r.precision)>0&&(t-=1),e=o.toExponential(t)):e=o.toPrecision(r.precision),r.alternate||(e=p.call(e,w,"$1e"),e=p.call(e,h,"e"),e=p.call(e,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,y,"e+0$1"),e=p.call(e,d,"e-0$1"),r.alternate&&(e=p.call(e,g,"$1."),e=p.call(e,v,"$1.e")),o>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):l.call(e)}function j(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function A(r,t,n){var e=t-r.length;return e<0?r:r=n?r+j(e):j(e)+r}var E=String.fromCharCode,_=isNaN,O=Array.isArray;function S(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function x(r){var t,n,e,i,a,f,l,s,p;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(e=r[s]))f+=e;else{if(t=void 0!==e.precision,!(e=S(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),n=e.flags,p=0;p<n.length;p++)switch(i=n.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,_(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,_(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!_(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=_(a)?String(e.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=o(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=A(e.arg,e.width,e.padRight)),f+=e.arg||"",l+=1}return f}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function F(r){var t,n,e,o;for(n=[],o=0,e=U.exec(r);e;)(t=r.slice(o,U.lastIndex-e[0].length)).length&&n.push(t),n.push(T(e)),o=U.lastIndex,e=U.exec(r);return(t=r.slice(o)).length&&n.push(t),n}function I(r){return"string"==typeof r}function k(r){var t,n,e;if(!I(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=F(r),(n=new Array(arguments.length))[0]=t,e=1;e<n.length;e++)n[e]=arguments[e];return x.apply(null,n)}var V,N=Object.prototype,P=N.toString,G=N.__defineGetter__,L=N.__defineSetter__,$=N.__lookupGetter__,C=N.__lookupSetter__;V=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===P.call(n))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((o="value"in n)&&($.call(r,t)||C.call(r,t)?(e=r.__proto__,r.__proto__=N,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,a="set"in n,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&G&&G.call(r,t,n.get),a&&L&&L.call(r,t,n.set),r};var H=V;function W(r,t,n){H(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var B=/./;function R(r){return"boolean"==typeof r}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return M&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString,Y=Object.prototype.hasOwnProperty;function z(r,t){return null!=r&&Y.call(r,t)}var q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"",J=Z()?function(r){var t,n,e;if(null==r)return X.call(r);n=r[D],t=z(r,D);try{r[D]=void 0}catch(t){return X.call(r)}return e=X.call(r),t?r[D]=n:delete r[D],e}:function(r){return X.call(r)},K=Boolean,Q=Boolean.prototype.toString,rr=Z();function tr(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function nr(r){return R(r)||tr(r)}function er(){return new Function("return this;")()}W(nr,"isPrimitive",R),W(nr,"isObject",tr);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ar="object"==typeof globalThis?globalThis:null,ur=function(r){if(arguments.length){if(!R(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return er()}if(ar)return ar;if(or)return or;if(ir)return ir;throw new Error("unexpected error. Unable to resolve global object.")}(),cr=ur.document&&ur.document.childNodes,fr=Int8Array;function lr(){return/^\s*function\s*([^(]*)/i}var sr=/^\s*function\s*([^(]*)/i;W(lr,"REGEXP",sr);var pr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};function yr(r){return null!==r&&"object"==typeof r}function dr(r){var t,n,e,o;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=sr.exec(e.toString()))return t[1]}return yr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}W(yr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!pr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(yr));var gr="function"==typeof B||"object"==typeof fr||"function"==typeof cr?function(r){return dr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?dr(r).toLowerCase():t};function vr(r){return"function"===gr(r)}function br(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&vr(r.next)}function hr(r){return"number"==typeof r}var wr=Number,mr=wr.prototype.toString,jr=Z();function Ar(r){return"object"==typeof r&&(r instanceof wr||(jr?function(r){try{return mr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function Er(r){return hr(r)||Ar(r)}W(Er,"isPrimitive",hr),W(Er,"isObject",Ar);var _r,Or="function"==typeof q&&"symbol"==typeof q("foo")&&z(q,"iterator")&&"symbol"==typeof q.iterator?Symbol.iterator:null,Sr=Object,xr=Object.getPrototypeOf;_r=vr(Object.getPrototypeOf)?xr:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Ur=_r,Tr=Object.prototype;function Fr(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!pr(r)}(r)&&(t=function(r){return null==r?null:(r=Sr(r),Ur(r))}(r),!t||!z(r,"constructor")&&z(t,"constructor")&&vr(t.constructor)&&"[object Function]"===J(t.constructor)&&z(t,"isPrototypeOf")&&vr(t.isPrototypeOf)&&(t===Tr||function(r){var t;for(t in r)if(!z(r,t))return!1;return!0}(r)))}function Ir(r,t){return Fr(t)?(z(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(k("invalid argument. Options argument must be an object. Value: `%s`.",t))}function kr(r,t,n){var e,o,i,a;if(!br(r))throw new TypeError(k("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!vr(t))throw new TypeError(k("invalid argument. Second argument must be a function. Value: `%s`.",t));if(e={invalid:NaN},arguments.length>2&&(i=Ir(e,n)))throw i;return W(o={},"next",u),W(o,"return",c),Or&&vr(r[Or])&&W(o,Or,f),o;function u(){var n;return a?{done:!0}:(n=r.next()).done?(a=!0,n):{value:hr(n.value)?t(n.value):e.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return kr(r[Or](),t,e)}}function Vr(r){return r!=r}var Nr=Math.floor,Pr=Math.ceil;function Gr(r){return r<0?Pr(r):Nr(r)}var Lr=wr.NEGATIVE_INFINITY,$r=Number.POSITIVE_INFINITY;function Cr(r){return r===$r||r===Lr}var Hr,Wr="function"==typeof Uint32Array,Br="function"==typeof Uint32Array?Uint32Array:null,Rr="function"==typeof Uint32Array?Uint32Array:void 0;Hr=function(){var r,t,n;if("function"!=typeof Br)return!1;try{t=new Br(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(Wr&&n instanceof Uint32Array||"[object Uint32Array]"===J(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Rr:function(){throw new Error("not implemented")};var Mr,Zr=Hr,Xr="function"==typeof Float64Array,Yr="function"==typeof Float64Array?Float64Array:null,zr="function"==typeof Float64Array?Float64Array:void 0;Mr=function(){var r,t,n;if("function"!=typeof Yr)return!1;try{t=new Yr([1,3.14,-3.14,NaN]),n=t,r=(Xr&&n instanceof Float64Array||"[object Float64Array]"===J(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?zr:function(){throw new Error("not implemented")};var qr,Dr=Mr,Jr="function"==typeof Uint8Array,Kr="function"==typeof Uint8Array?Uint8Array:null,Qr="function"==typeof Uint8Array?Uint8Array:void 0;qr=function(){var r,t,n;if("function"!=typeof Kr)return!1;try{t=new Kr(t=[1,3.14,-3.14,256,257]),n=t,r=(Jr&&n instanceof Uint8Array||"[object Uint8Array]"===J(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Qr:function(){throw new Error("not implemented")};var rt,tt=qr,nt="function"==typeof Uint16Array,et="function"==typeof Uint16Array?Uint16Array:null,ot="function"==typeof Uint16Array?Uint16Array:void 0;rt=function(){var r,t,n;if("function"!=typeof et)return!1;try{t=new et(t=[1,3.14,-3.14,65536,65537]),n=t,r=(nt&&n instanceof Uint16Array||"[object Uint16Array]"===J(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?ot:function(){throw new Error("not implemented")};var it,at={uint16:rt,uint8:tt};(it=new at.uint16(1))[0]=4660;var ut,ct,ft=52===new at.uint8(it.buffer)[0];!0===ft?(ut=1,ct=0):(ut=0,ct=1);var lt={HIGH:ut,LOW:ct},st=new Dr(1),pt=new Zr(st.buffer),yt=lt.HIGH,dt=lt.LOW;function gt(r,t,n,e){return st[0]=r,t[e]=pt[yt],t[e+n]=pt[dt],t}function vt(r){return gt(r,[0,0],1,0)}W(vt,"assign",gt);var bt,ht,wt=!0===ft?1:0,mt=new Dr(1),jt=new Zr(mt.buffer);function At(r){return mt[0]=r,jt[wt]}!0===ft?(bt=1,ht=0):(bt=0,ht=1);var Et={HIGH:bt,LOW:ht},_t=new Dr(1),Ot=new Zr(_t.buffer),St=Et.HIGH,xt=Et.LOW;function Ut(r,t){return Ot[St]=r,Ot[xt]=t,_t[0]}var Tt=[0,0];function Ft(r,t,n,e){return Vr(r)||Cr(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}W((function(r){return Ft(r,[0,0],1,0)}),"assign",Ft);var It=[0,0],kt=[0,0];function Vt(r,t){var n,e,o,i,a,u;return 0===t||0===r||Vr(r)||Cr(r)?r:(Ft(r,It,1,0),t+=It[1],t+=function(r){var t=At(r);return(t=(2146435072&t)>>>20)-1023|0}(r=It[0]),t<-1074?(o=0,i=r,vt.assign(o,Tt,1,0),a=Tt[0],a&=2147483647,u=At(i),Ut(a|=u&=2147483648,Tt[1])):t>1023?r<0?Lr:$r:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,vt.assign(r,kt,1,0),n=kt[0],n&=2148532223,e*Ut(n|=t+1023<<20,kt[1])))}var Nt=1.4426950408889634,Pt=1/(1<<28);function Gt(r){var t;return Vr(r)||r===$r?r:r===Lr?0:r>709.782712893384?$r:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Pt?1+r:function(r,t,n){var e,o,i,a;return Vt(1-(t-(e=r-t)*(i=e-(o=e*e)*(0===(a=o)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),n)}(r-.6931471803691238*(t=Gr(r<0?Nt*r-.5:Nt*r+.5)),1.9082149292705877e-10*t,t)}var Lt=!0===ft?0:1,$t=new Dr(1),Ct=new Zr($t.buffer),Ht=.8450629115104675;function Wt(r){var t,n,e,o,i,a,u,c;if(Vr(r))return NaN;if(r===$r)return 0;if(r===Lr)return 2;if(0===r)return 1;if(r<0?(t=!0,n=-r):(t=!1,n=r),n<.84375)return n<13877787807814457e-33?1-r:(o=.12837916709551256+(e=r*r)*function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015}(e),i=1+e*function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))}(e),a=o/i,r<.25?1-(r+r*a):(o=r*a,.5-(o+=r-.5)));if(n<1.25)return u=(i=n-1)*function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)}(i)-.0023621185607526594,c=1+i*function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))}(i),t?1+Ht+u/c:1-Ht-u/c;if(n<28){if(i=1/(n*n),n<2.857142857142857)o=i*function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(i)-.009864944034847148,i=1+i*function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))}(i);else{if(r<-6)return 2;o=i*function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(i)-.0098649429247001,i=1+i*function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))}(i)}return e=function(r,t){return $t[0]=r,Ct[Lt]=t>>>0,$t[0]}(n,0),o=Gt(-e*e-.5625)*Gt((e-n)*(e+n)+o/i),t?2-o/n:o/n}return t?2:0}return function(r){return kr(r,Wt)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterErfc=t();
//# sourceMappingURL=browser.js.map
