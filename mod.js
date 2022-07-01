// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){var t=r.default;if("function"==typeof t){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(r).forEach((function(t){var e=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(n,t,e.get?e:{enumerable:!0,get:function(){return r[t]}})})),n}var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return t({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;var l=function(r,t,n){var e,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||c.call(r,t)?(e=r.__proto__,r.__proto__=o,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),y="get"in n,v="set"in n,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,t,n.get),v&&a&&a.call(r,t,n.set),r},y=e,v=l,p=n()?y:v;var b=function(r,t,n){p(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})},s=b,d=/./;var m=function(r){return"boolean"==typeof r};var w=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var j=function(){return w&&"symbol"==typeof Symbol.toStringTag},_=Object.prototype.toString,g=_;var A=function(r){return g.call(r)},h=Object.prototype.hasOwnProperty;var O=function(r,t){return null!=r&&h.call(r,t)},E="function"==typeof Symbol?Symbol.toStringTag:"",U=O,S=E,P=_;var N=A,F=function(r){var t,n,e;if(null==r)return P.call(r);n=r[S],t=U(r,S);try{r[S]=void 0}catch(t){return P.call(r)}return e=P.call(r),t?r[S]=n:delete r[S],e},I=j()?F:N,T=Boolean.prototype.toString;var G=I,V=function(r){try{return T.call(r),!0}catch(r){return!1}},x=j();var H=function(r){return"object"==typeof r&&(r instanceof Boolean||(x?V(r):"[object Boolean]"===G(r)))},B=m,L=H;var M=s,k=function(r){return B(r)||L(r)},W=H;M(k,"isPrimitive",m),M(k,"isObject",W);var C=k;var R=function(){return new Function("return this;")()},X="object"==typeof self?self:null,Y="object"==typeof window?window:null,z="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},D="object"==typeof z?z:null;module.exports=D;var q=C.isPrimitive,J=R,K=X,Q=Y,Z=r(Object.freeze({__proto__:null}));var $=function(r){if(arguments.length){if(!q(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return J()}if(K)return K;if(Q)return Q;if(Z)return Z;throw new Error("unexpected error. Unable to resolve global object.")},rr=$(),tr=rr.document&&rr.document.childNodes,nr=Int8Array,er=d,or=tr,ur=nr;var ir=function(){return"function"==typeof er||"object"==typeof ur||"function"==typeof or};var ar=function(){return/^\s*function\s*([^(]*)/i},fr=ar;s(fr,"REGEXP",ar());var cr=fr,lr=I;var yr=Array.isArray?Array.isArray:function(r){return"[object Array]"===lr(r)},vr=yr;var pr=function(r){return null!==r&&"object"==typeof r};s(pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!vr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(pr));var br=pr;var sr=I,dr=cr.REGEXP,mr=function(r){return br(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var wr=function(r){var t,n,e;if(("Object"===(n=sr(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=dr.exec(e.toString()))return t[1]}return mr(r)?"Buffer":n},jr=wr;var _r=wr;var gr=function(r){var t;return null===r?"null":"object"===(t=typeof r)?jr(r).toLowerCase():t},Ar=function(r){return _r(r).toLowerCase()},hr=ir()?Ar:gr;var Or=function(r){return"function"===hr(r)},Er=Or;var Ur=function(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&Er(r.next)};var Sr=function(r){return"number"==typeof r},Pr=Number,Nr=Pr.prototype.toString;var Fr=I,Ir=Pr,Tr=function(r){try{return Nr.call(r),!0}catch(r){return!1}},Gr=j();var Vr=function(r){return"object"==typeof r&&(r instanceof Ir||(Gr?Tr(r):"[object Number]"===Fr(r)))},xr=Sr,Hr=Vr;var Br=s,Lr=function(r){return xr(r)||Hr(r)},Mr=Vr;Br(Lr,"isPrimitive",Sr),Br(Lr,"isObject",Mr);var kr=Lr,Wr=O;var Cr=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&Wr(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,Rr=yr;var Xr=function(r){return"object"==typeof r&&null!==r&&!Rr(r)},Yr=Object.getPrototypeOf;var zr=function(r){return r.__proto__},Dr=I,qr=zr;var Jr=function(r){var t=qr(r);return t||null===t?t:"[object Function]"===Dr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},Kr=Yr,Qr=Jr,Zr=Or(Object.getPrototypeOf)?Kr:Qr;var $r=Xr,rt=Or,tt=function(r){return null==r?null:(r=Object(r),Zr(r))},nt=O,et=I,ot=Object.prototype;var ut=function(r){var t;return!!$r(r)&&(!(t=tt(r))||!nt(r,"constructor")&&nt(t,"constructor")&&rt(t.constructor)&&"[object Function]"===et(t.constructor)&&nt(t,"isPrototypeOf")&&rt(t.isPrototypeOf)&&(t===ot||function(r){var t;for(t in r)if(!nt(r,t))return!1;return!0}(r)))},it=ut,at=O;var ft=s,ct=Or,lt=Ur,yt=kr.isPrimitive,vt=Cr,pt=function(r,t){return it(t)?(at(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")};var bt=function r(t,n,e){var o,u,i,a;if(!lt(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!ct(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");if(o={invalid:NaN},arguments.length>2&&(i=pt(o,e)))throw i;return ft(u={},"next",f),ft(u,"return",c),vt&&ct(t[vt])&&ft(u,vt,l),u;function f(){var r;return a?{done:!0}:(r=t.next()).done?(a=!0,r):{value:yt(r.value)?n(r.value):o.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return r(t[vt](),n,o)}},st=bt;var dt=function(r){return r!=r},mt=Math.floor,wt=Math.ceil,jt=mt,_t=wt;var gt=function(r){return r<0?_t(r):jt(r)},At=Pr.NEGATIVE_INFINITY,ht=Number.POSITIVE_INFINITY,Ot=ht,Et=At;var Ut=function(r){return r===Ot||r===Et},St=I,Pt="function"==typeof Uint32Array;var Nt="function"==typeof Uint32Array?Uint32Array:null,Ft=function(r){return Pt&&r instanceof Uint32Array||"[object Uint32Array]"===St(r)},It=Nt;var Tt=function(){var r,t;if("function"!=typeof It)return!1;try{t=new It(t=[1,3.14,-3.14,4294967296,4294967297]),r=Ft(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Gt="function"==typeof Uint32Array?Uint32Array:void 0,Vt=function(){throw new Error("not implemented")},xt=Tt()?Gt:Vt,Ht=I,Bt="function"==typeof Float64Array;var Lt="function"==typeof Float64Array?Float64Array:null,Mt=function(r){return Bt&&r instanceof Float64Array||"[object Float64Array]"===Ht(r)},kt=Lt;var Wt=function(){var r,t;if("function"!=typeof kt)return!1;try{t=new kt([1,3.14,-3.14,NaN]),r=Mt(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r};var Ct="function"==typeof Float64Array?Float64Array:void 0,Rt=function(){throw new Error("not implemented")},Xt=Wt()?Ct:Rt,Yt=I,zt="function"==typeof Uint8Array;var Dt="function"==typeof Uint8Array?Uint8Array:null,qt=function(r){return zt&&r instanceof Uint8Array||"[object Uint8Array]"===Yt(r)},Jt=Dt;var Kt=function(){var r,t;if("function"!=typeof Jt)return!1;try{t=new Jt(t=[1,3.14,-3.14,256,257]),r=qt(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Qt="function"==typeof Uint8Array?Uint8Array:void 0,Zt=function(){throw new Error("not implemented")},$t=Kt()?Qt:Zt,rn=I,tn="function"==typeof Uint16Array;var nn="function"==typeof Uint16Array?Uint16Array:null,en=function(r){return tn&&r instanceof Uint16Array||"[object Uint16Array]"===rn(r)},on=nn;var un=function(){var r,t;if("function"!=typeof on)return!1;try{t=new on(t=[1,3.14,-3.14,65536,65537]),r=en(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var an,fn="function"==typeof Uint16Array?Uint16Array:void 0,cn=function(){throw new Error("not implemented")},ln={uint16:un()?fn:cn,uint8:$t};(an=new ln.uint16(1))[0]=4660;var yn,vn,pn=52===new ln.uint8(an.buffer)[0];!0===pn?(yn=1,vn=0):(yn=0,vn=1);var bn=xt,sn={HIGH:yn,LOW:vn},dn=new Xt(1),mn=new bn(dn.buffer),wn=sn.HIGH,jn=sn.LOW;var _n=function(r,t){return dn[0]=t,r[0]=mn[wn],r[1]=mn[jn],r};var gn=function(r,t){return 1===arguments.length?_n([0,0],r):_n(r,t)},An=xt,hn=!0===pn?1:0,On=new Xt(1),En=new An(On.buffer);var Un,Sn,Pn=function(r){return On[0]=r,En[hn]};!0===pn?(Un=1,Sn=0):(Un=0,Sn=1);var Nn=xt,Fn={HIGH:Un,LOW:Sn},In=new Xt(1),Tn=new Nn(In.buffer),Gn=Fn.HIGH,Vn=Fn.LOW;var xn=function(r,t){return Tn[Gn]=r,Tn[Vn]=t,In[0]},Hn=gn,Bn=Pn,Ln=xn,Mn=[0,0];var kn=Ut,Wn=dt,Cn=function(r){return Math.abs(r)};var Rn=function(r,t){return Wn(t)||kn(t)?(r[0]=t,r[1]=0,r):0!==t&&Cn(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)};var Xn=Pn;var Yn=function(r){var t=Xn(r);return(t=(2146435072&t)>>>20)-1023|0},zn=ht,Dn=At,qn=dt,Jn=Ut,Kn=function(r,t){var n,e;return Hn(Mn,r),n=Mn[0],n&=2147483647,e=Bn(t),Ln(n|=e&=2147483648,Mn[1])},Qn=function(r,t){return 1===arguments.length?Rn([0,0],r):Rn(r,t)},Zn=Yn,$n=gn,re=xn,te=[0,0],ne=[0,0];var ee=function(r,t){var n,e;return 0===t||0===r||qn(r)||Jn(r)?r:(Qn(te,r),t+=te[1],(t+=Zn(r=te[0]))<-1074?Kn(0,r):t>1023?r<0?Dn:zn:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,$n(ne,r),n=ne[0],n&=2148532223,e*re(n|=t+1023<<20,ne[1])))};var oe=ee,ue=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var ie=dt,ae=gt,fe=At,ce=ht,le=function(r,t,n){var e,o,u;return u=(e=r-t)-(o=e*e)*ue(o),oe(1-(t-e*u/(2-u)-r),n)};var ye=function(r){var t;return ie(r)||r===ce?r:r===fe?0:r>709.782712893384?ce:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:(t=ae(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5),le(r-.6931471803691238*t,1.9082149292705877e-10*t,t))},ve=xt,pe=!0===pn?0:1,be=new Xt(1),se=new ve(be.buffer);var de=function(r,t){return be[0]=r,se[pe]=t>>>0,be[0]};var me=dt,we=ye,je=de,_e=ht,ge=At,Ae=function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015},he=function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))},Oe=function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)},Ee=function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))},Ue=function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818},Se=function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))},Pe=function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523},Ne=function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))},Fe=.8450629115104675;var Ie=function(r){var t,n,e,o,u,i,a,f;if(me(r))return NaN;if(r===_e)return 0;if(r===ge)return 2;if(0===r)return 1;if(r<0?(t=!0,n=-r):(t=!1,n=r),n<.84375)return n<13877787807814457e-33?1-r:(i=(o=.12837916709551256+(e=r*r)*Ae(e))/(u=1+e*he(e)),r<.25?1-(r+r*i):(o=r*i,.5-(o+=r-.5)));if(n<1.25)return a=(u=n-1)*Oe(u)-.0023621185607526594,f=1+u*Ee(u),t?1+Fe+a/f:1-Fe-a/f;if(n<28){if(u=1/(n*n),n<2.857142857142857)o=u*Ue(u)-.009864944034847148,u=1+u*Se(u);else{if(r<-6)return 2;o=u*Pe(u)-.0098649429247001,u=1+u*Ne(u)}return e=je(n,0),o=we(-e*e-.5625)*we((e-n)*(e+n)+o/u),t?2-o/n:o/n}return t?2:0};function Te(r){return st(r,Ie)}export{Te as default};
//# sourceMappingURL=mod.js.map
