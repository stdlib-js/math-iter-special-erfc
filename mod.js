// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||a.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,t,n.get),p&&i&&i.call(r,t,n.set),r};var c=t;function l(r,t,n){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y=/./;function p(r){return"boolean"==typeof r}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return v&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function w(r,t){return null!=r&&d.call(r,t)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(r){var t,n,e;if(null==r)return s.call(r);n=r[m],t=w(r,m);try{r[m]=void 0}catch(t){return s.call(r)}return e=s.call(r),t?r[m]=n:delete r[m],e}:function(r){return s.call(r)},g=Boolean.prototype.toString;var A=b();function _(r){return"object"==typeof r&&(r instanceof Boolean||(A?function(r){try{return g.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===j(r)))}function h(r){return p(r)||_(r)}function O(){return new Function("return this;")()}l(h,"isPrimitive",p),l(h,"isObject",_);var U="object"==typeof self?self:null,S="object"==typeof window?window:null,E="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},N="object"==typeof E?E:null;var F=function(r){if(arguments.length){if(!p(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return O()}if(U)return U;if(S)return S;if(N)return N;throw new Error("unexpected error. Unable to resolve global object.")}(),I=F.document&&F.document.childNodes,P=Int8Array;function T(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;l(T,"REGEXP",V);var G=Array.isArray?Array.isArray:function(r){return"[object Array]"===j(r)};function H(r){return null!==r&&"object"==typeof r}function x(r){var t,n,e,o;if(("Object"===(n=j(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=V.exec(e.toString()))return t[1]}return H(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(H,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!G(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(H));var B="function"==typeof y||"object"==typeof P||"function"==typeof I?function(r){return x(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?x(r).toLowerCase():t};function L(r){return"function"===B(r)}function M(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&L(r.next)}function W(r){return"number"==typeof r}var k=Number,C=k.prototype.toString;var Y=b();function R(r){return"object"==typeof r&&(r instanceof k||(Y?function(r){try{return C.call(r),!0}catch(r){return!1}}(r):"[object Number]"===j(r)))}function X(r){return W(r)||R(r)}l(X,"isPrimitive",W),l(X,"isObject",R);var q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&w(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var z,D=Object.getPrototypeOf;z=L(Object.getPrototypeOf)?D:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===j(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var J=z;var K=Object.prototype;function Q(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!G(r)}(r)&&(t=function(r){return null==r?null:(r=Object(r),J(r))}(r),!t||!w(r,"constructor")&&w(t,"constructor")&&L(t.constructor)&&"[object Function]"===j(t.constructor)&&w(t,"isPrototypeOf")&&L(t.isPrototypeOf)&&(t===K||function(r){var t;for(t in r)if(!w(r,t))return!1;return!0}(r)))}function Z(r,t){return Q(t)?(w(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")}function $(r,t,n){var e,o,u,i;if(!M(r))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+r+"`.");if(!L(t))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+t+"`.");if(e={invalid:NaN},arguments.length>2&&(u=Z(e,n)))throw u;return l(o={},"next",f),l(o,"return",a),q&&L(r[q])&&l(o,q,c),o;function f(){var n;return i?{done:!0}:(n=r.next()).done?(i=!0,n):{value:W(n.value)?t(n.value):e.invalid,done:!1}}function a(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}}function c(){return $(r[q](),t,e)}}function rr(r){return r!=r}var tr=Math.floor,nr=Math.ceil;function er(r){return r<0?nr(r):tr(r)}var or=k.NEGATIVE_INFINITY,ur=Number.POSITIVE_INFINITY;function ir(r){return r===ur||r===or}var fr="function"==typeof Uint32Array;var ar="function"==typeof Uint32Array?Uint32Array:null;var cr,lr="function"==typeof Uint32Array?Uint32Array:void 0;cr=function(){var r,t,n;if("function"!=typeof ar)return!1;try{t=new ar(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(fr&&n instanceof Uint32Array||"[object Uint32Array]"===j(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var yr=cr,pr="function"==typeof Float64Array;var vr="function"==typeof Float64Array?Float64Array:null;var br,sr="function"==typeof Float64Array?Float64Array:void 0;br=function(){var r,t,n;if("function"!=typeof vr)return!1;try{t=new vr([1,3.14,-3.14,NaN]),n=t,r=(pr&&n instanceof Float64Array||"[object Float64Array]"===j(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var dr=br,wr="function"==typeof Uint8Array;var mr="function"==typeof Uint8Array?Uint8Array:null;var jr,gr="function"==typeof Uint8Array?Uint8Array:void 0;jr=function(){var r,t,n;if("function"!=typeof mr)return!1;try{t=new mr(t=[1,3.14,-3.14,256,257]),n=t,r=(wr&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var Ar=jr,_r="function"==typeof Uint16Array;var hr="function"==typeof Uint16Array?Uint16Array:null;var Or,Ur="function"==typeof Uint16Array?Uint16Array:void 0;Or=function(){var r,t,n;if("function"!=typeof hr)return!1;try{t=new hr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(_r&&n instanceof Uint16Array||"[object Uint16Array]"===j(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Ur:function(){throw new Error("not implemented")};var Sr,Er={uint16:Or,uint8:Ar};(Sr=new Er.uint16(1))[0]=4660;var Nr,Fr,Ir=52===new Er.uint8(Sr.buffer)[0];!0===Ir?(Nr=1,Fr=0):(Nr=0,Fr=1);var Pr={HIGH:Nr,LOW:Fr},Tr=new dr(1),Vr=new yr(Tr.buffer),Gr=Pr.HIGH,Hr=Pr.LOW;function xr(r,t,n,e){return Tr[0]=r,t[e]=Vr[Gr],t[e+n]=Vr[Hr],t}function Br(r){return xr(r,[0,0],1,0)}l(Br,"assign",xr);var Lr,Mr,Wr=!0===Ir?1:0,kr=new dr(1),Cr=new yr(kr.buffer);function Yr(r){return kr[0]=r,Cr[Wr]}!0===Ir?(Lr=1,Mr=0):(Lr=0,Mr=1);var Rr={HIGH:Lr,LOW:Mr},Xr=new dr(1),qr=new yr(Xr.buffer),zr=Rr.HIGH,Dr=Rr.LOW;function Jr(r,t){return qr[zr]=r,qr[Dr]=t,Xr[0]}var Kr=[0,0];function Qr(r,t,n,e){return rr(r)||ir(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}l((function(r){return Qr(r,[0,0],1,0)}),"assign",Qr);var Zr=[0,0],$r=[0,0];function rt(r,t){var n,e,o,u,i,f;return 0===t||0===r||rr(r)||ir(r)?r:(Qr(r,Zr,1,0),t+=Zr[1],t+=function(r){var t=Yr(r);return(t=(2146435072&t)>>>20)-1023|0}(r=Zr[0]),t<-1074?(o=0,u=r,Br.assign(o,Kr,1,0),i=Kr[0],i&=2147483647,f=Yr(u),Jr(i|=f&=2147483648,Kr[1])):t>1023?r<0?or:ur:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Br.assign(r,$r,1,0),n=$r[0],n&=2148532223,e*Jr(n|=t+1023<<20,$r[1])))}function tt(r){var t;return rr(r)||r===ur?r:r===or?0:r>709.782712893384?ur:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,t,n){var e,o,u,i;return rt(1-(t-(e=r-t)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),n)}(r-.6931471803691238*(t=er(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*t,t)}var nt=!0===Ir?0:1,et=new dr(1),ot=new yr(et.buffer);var ut=.8450629115104675;function it(r){var t,n,e,o,u,i,f,a;if(rr(r))return NaN;if(r===ur)return 0;if(r===or)return 2;if(0===r)return 1;if(r<0?(t=!0,n=-r):(t=!1,n=r),n<.84375)return n<13877787807814457e-33?1-r:(o=.12837916709551256+(e=r*r)*function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015}(e),u=1+e*function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))}(e),i=o/u,r<.25?1-(r+r*i):(o=r*i,.5-(o+=r-.5)));if(n<1.25)return f=(u=n-1)*function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)}(u)-.0023621185607526594,a=1+u*function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))}(u),t?1+ut+f/a:1-ut-f/a;if(n<28){if(u=1/(n*n),n<2.857142857142857)o=u*function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(u)-.009864944034847148,u=1+u*function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))}(u);else{if(r<-6)return 2;o=u*function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(u)-.0098649429247001,u=1+u*function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))}(u)}return e=function(r,t){return et[0]=r,ot[nt]=t>>>0,et[0]}(n,0),o=tt(-e*e-.5625)*tt((e-n)*(e+n)+o/u),t?2-o/n:o/n}return t?2:0}function ft(r){return $(r,it)}export{ft as default};
//# sourceMappingURL=mod.js.map
