(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{0:function(t,e){},"45iq":function(t,e,n){var r;!function(o,i,s){var a,l=256,u=6,c="random",h=s.pow(l,u),v=s.pow(2,52),f=2*v,p=l-1;function d(t,e,n){var r=[],p=x(function t(e,n){var r,o=[],i=typeof e;if(n&&"object"==i)for(r in e)try{o.push(t(e[r],n-1))}catch(s){}return o.length?o:"string"==i?e:e+"\0"}((e=1==e?{entropy:!0}:e||{}).entropy?[t,H(i)]:null==t?function(){try{var t;return a&&(t=a.randomBytes)?t=t(l):(t=new Uint8Array(l),(o.crypto||o.msCrypto).getRandomValues(t)),H(t)}catch(r){var e=o.navigator,n=e&&e.plugins;return[+new Date,o,n,o.screen,H(i)]}}():t,3),r),d=new m(r),y=function(){for(var t=d.g(u),e=h,n=0;t<v;)t=(t+n)*l,e*=l,n=d.g(1);for(;t>=f;)t/=2,e/=2,n>>>=1;return(t+n)/e};return y.int32=function(){return 0|d.g(4)},y.quick=function(){return d.g(4)/4294967296},y.double=y,x(H(d.S),i),(e.pass||n||function(t,e,n,r){return r&&(r.S&&g(r,d),t.state=function(){return g(d,{})}),n?(s[c]=t,e):t})(y,p,"global"in e?e.global:this==s,e.state)}function m(t){var e,n=t.length,r=this,o=0,i=r.i=r.j=0,s=r.S=[];for(n||(t=[n++]);o<l;)s[o]=o++;for(o=0;o<l;o++)s[o]=s[i=p&i+t[o%n]+(e=s[o])],s[i]=e;(r.g=function(t){for(var e,n=0,o=r.i,i=r.j,s=r.S;t--;)e=s[o=p&o+1],n=n*l+s[p&(s[o]=s[i=p&i+e])+(s[i]=e)];return r.i=o,r.j=i,n})(l)}function g(t,e){return e.i=t.i,e.j=t.j,e.S=t.S.slice(),e}function x(t,e){for(var n,r=t+"",o=0;o<r.length;)e[p&o]=p&(n^=19*e[p&o])+r.charCodeAt(o++);return H(e)}function H(t){return String.fromCharCode.apply(0,t)}if(x(s.random(),i),t.exports){t.exports=d;try{a=n(0)}catch(y){}}else void 0===(r=function(){return d}.call(e,n,e,t))||(t.exports=r)}("undefined"!=typeof self?self:this,[],Math)},"7tas":function(t,e,n){(function(t){var r;!function(t,o,i){function s(t){var e=this,n="";e.next=function(){var t=e.b,n=e.c,r=e.d,o=e.a;return t=t<<25^t>>>7^n,n=n-r|0,r=r<<24^r>>>8^o,o=o-t|0,e.b=t=t<<20^t>>>12^n,e.c=n=n-r|0,e.d=r<<16^n>>>16^o,e.a=o-t|0},e.a=0,e.b=0,e.c=-1640531527,e.d=1367130551,t===Math.floor(t)?(e.a=t/4294967296|0,e.b=0|t):n+=t;for(var r=0;r<n.length+20;r++)e.b^=0|n.charCodeAt(r),e.next()}function a(t,e){return e.a=t.a,e.b=t.b,e.c=t.c,e.d=t.d,e}function l(t,e){var n=new s(t),r=e&&e.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},o.int32=n.next,o.quick=o,r&&("object"==typeof r&&a(r,n),o.state=function(){return a(n,{})}),o}o&&o.exports?o.exports=l:n("B9Yq")&&n("PDX0")?void 0===(r=function(){return l}.call(e,n,e,o))||(o.exports=r):this.tychei=l}(0,t,n("B9Yq"))}).call(this,n("YuTi")(t))},B9Yq:function(t,e){t.exports=function(){throw new Error("define cannot be used indirect")}},BJI7:function(t,e,n){(function(t){var r;!function(t,o,i){function s(t){var e=this,n="";e.x=0,e.y=0,e.z=0,e.w=0,e.next=function(){var t=e.x^e.x<<11;return e.x=e.y,e.y=e.z,e.z=e.w,e.w^=e.w>>>19^t^t>>>8},t===(0|t)?e.x=t:n+=t;for(var r=0;r<n.length+64;r++)e.x^=0|n.charCodeAt(r),e.next()}function a(t,e){return e.x=t.x,e.y=t.y,e.z=t.z,e.w=t.w,e}function l(t,e){var n=new s(t),r=e&&e.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},o.int32=n.next,o.quick=o,r&&("object"==typeof r&&a(r,n),o.state=function(){return a(n,{})}),o}o&&o.exports?o.exports=l:n("B9Yq")&&n("PDX0")?void 0===(r=function(){return l}.call(e,n,e,o))||(o.exports=r):this.xor128=l}(0,t,n("B9Yq"))}).call(this,n("YuTi")(t))},Dtc0:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),i=n("Wbzz");n("rGqo");const s="#262A33";var a=t=>{let{icon:e,tint:n=s}=t,r=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["icon","tint"]);const i="https://www.ft.com/__origami/service/image/v2/images/raw/fticon-v1:"+e+"?tint="+encodeURIComponent(n)+"&source=x-dash";return o.a.createElement("img",Object.assign({src:i,alt:e},r))},l=n("TJpk"),u=n.n(l),c=n("eNIv"),h=n("V3dS"),v=({title:t,children:e})=>o.a.createElement("div",{className:"splash-layout"},o.a.createElement(u.a,{title:t+" / x-dash"}),o.a.createElement("div",{className:"splash-layout__header"},o.a.createElement(c.a,null)),o.a.createElement("main",{className:"splash-layout__hero",role:"main"},e),o.a.createElement("div",{className:"splash-layout__footer"},o.a.createElement(h.a,null))),f=n("mXGw"),p=n.n(f),d=n("S1+6"),m=n.n(d),g=n("NaLo"),x=n("q2Od"),H=n.n(x),y=n("UpbE"),b=n.n(y),w=({x:t,y:e,width:n,height:r,thickness:o})=>{const i=t+n/2,s=e+r/2;return[[t,e+o],[i-o,s],[t,e+r-o],[t+o,e+r],[i,s+o],[t+n-o,e+r],[t+n,e+r-o],[i+o,s],[t+n,e+o],[t+n-o,e],[i,s-o],[t+o,e]]};const T=Math.pow(2,-52);class _{static from(t,e,n){e||(e=q),n||(n=S);const r=t.length,o=new Float64Array(2*r);for(let i=0;i<r;i++){const r=t[i];o[2*i]=e(r),o[2*i+1]=n(r)}return new _(o)}constructor(t){let e=1/0,n=1/0,r=-1/0,o=-1/0;const i=t.length>>1,s=this.ids=new Uint32Array(i);if(i>0&&"number"!=typeof t[0])throw new Error("Expected coords to contain numbers.");this.coords=t;for(let T=0;T<i;T++){const i=t[2*T],a=t[2*T+1];i<e&&(e=i),a<n&&(n=a),i>r&&(r=i),a>o&&(o=a),s[T]=T}const a=(e+r)/2,l=(n+o)/2;let u,c,h,v=1/0;for(let T=0;T<i;T++){const e=M(a,l,t[2*T],t[2*T+1]);e<v&&(u=T,v=e)}const f=t[2*u],p=t[2*u+1];v=1/0;for(let T=0;T<i;T++){if(T===u)continue;const e=M(f,p,t[2*T],t[2*T+1]);e<v&&e>0&&(c=T,v=e)}let d=t[2*c],m=t[2*c+1],g=1/0;for(let T=0;T<i;T++){if(T===u||T===c)continue;const e=E(f,p,d,m,t[2*T],t[2*T+1]);e<g&&(h=T,g=e)}let x=t[2*h],H=t[2*h+1];if(g===1/0)throw new Error("No Delaunay triangulation exists for this input.");if(L(f,p,d,m,x,H)){const t=c,e=d,n=m;c=h,d=x,m=H,h=t,x=e,H=n}const y=function(t,e,n,r,o,i){const s=n-t,a=r-e,l=o-t,u=i-e,c=s*s+a*a,h=l*l+u*u,v=s*u-a*l;return{x:t+.5*(u*c-a*h)/v,y:e+.5*(s*h-l*c)/v}}(f,p,d,m,x,H);this._cx=y.x,this._cy=y.y,function t(e,n,r,o,i,s){let a,l,u;if(o-r<=20)for(a=r+1;a<=o;a++){for(u=e[a],l=a-1;l>=r&&z(n,e[l],u,i,s)>0;)e[l+1]=e[l--];e[l+1]=u}else{for(l=o,N(e,r+o>>1,a=r+1),z(n,e[r],e[o],i,s)>0&&N(e,r,o),z(n,e[a],e[o],i,s)>0&&N(e,a,o),z(n,e[r],e[a],i,s)>0&&N(e,r,a),u=e[a];;){do{a++}while(z(n,e[a],u,i,s)<0);do{l--}while(z(n,e[l],u,i,s)>0);if(l<a)break;N(e,a,l)}e[r+1]=e[l],e[l]=u,o-a+1>=l-r?(t(e,n,a,o,i,s),t(e,n,r,l-1,i,s)):(t(e,n,r,l-1,i,s),t(e,n,a,o,i,s))}}(s,t,0,s.length-1,y.x,y.y),this._hashSize=Math.ceil(Math.sqrt(i)),this._hash=new Array(this._hashSize);let b=this.hull=P(t,u);this._hashEdge(b),b.t=0,b=P(t,c,b),this._hashEdge(b),b.t=1,b=P(t,h,b),this._hashEdge(b),b.t=2;const w=2*i-5,_=this.triangles=new Uint32Array(3*w),q=this.halfedges=new Int32Array(3*w);this.trianglesLen=0,this._addTriangle(u,c,h,-1,-1,-1);for(let M,E,z=0;z<s.length;z++){const e=s[z],n=t[2*e],r=t[2*e+1];if(z>0&&Math.abs(n-M)<=T&&Math.abs(r-E)<=T)continue;if(M=n,E=r,e===u||e===c||e===h)continue;const o=this._hashKey(n,r);let i,a=o;do{i=this._hash[a],a=(a+1)%this._hashSize}while((!i||i.removed)&&a!==o);for(b=i=i.prev;!L(n,r,b.x,b.y,b.next.x,b.next.y);)if((b=b.next)===i){b=null;break}if(!b)continue;const l=b===i;let v=this._addTriangle(b.i,e,b.next.i,-1,-1,b.t);b.t=v,(b=P(t,e,b)).t=this._legalize(v+2);let f=b.next;for(;L(n,r,f.x,f.y,f.next.x,f.next.y);)v=this._addTriangle(f.i,e,f.next.i,f.prev.t,-1,f.t),f.prev.t=this._legalize(v+2),this.hull=k(f),f=f.next;if(l)for(f=b.prev;L(n,r,f.prev.x,f.prev.y,f.x,f.y);)v=this._addTriangle(f.prev.i,e,f.i,-1,f.t,f.prev.t),this._legalize(v+2),f.prev.t=v,this.hull=k(f),f=f.prev;this._hashEdge(b),this._hashEdge(b.prev)}this.triangles=_.subarray(0,this.trianglesLen),this.halfedges=q.subarray(0,this.trianglesLen)}_hashEdge(t){this._hash[this._hashKey(t.x,t.y)]=t}_hashKey(t,e){return Math.floor(function(t,e){const n=t/(Math.abs(t)+Math.abs(e));return(e>0?3-n:1+n)/4}(t-this._cx,e-this._cy)*this._hashSize)%this._hashSize}_legalize(t){const{triangles:e,coords:n,halfedges:r}=this,o=r[t],i=t-t%3,s=o-o%3,a=i+(t+1)%3,l=i+(t+2)%3,u=s+(o+2)%3;if(-1===o)return l;const c=e[l],h=e[t],v=e[a],f=e[u];if(function(t,e,n,r,o,i,s,a){const l=t-s,u=e-a,c=n-s,h=r-a,v=o-s,f=i-a,p=c*c+h*h,d=v*v+f*f;return l*(h*d-p*f)-u*(c*d-p*v)+(l*l+u*u)*(c*f-h*v)<0}(n[2*c],n[2*c+1],n[2*h],n[2*h+1],n[2*v],n[2*v+1],n[2*f],n[2*f+1])){e[t]=f,e[o]=c;const n=r[u];if(-1===n){let e=this.hull;do{if(e.t===u){e.t=t;break}e=e.next}while(e!==this.hull)}this._link(t,n),this._link(o,r[l]),this._link(l,u);const i=s+(o+1)%3;return this._legalize(t),this._legalize(i)}return l}_link(t,e){this.halfedges[t]=e,-1!==e&&(this.halfedges[e]=t)}_addTriangle(t,e,n,r,o,i){const s=this.trianglesLen;return this.triangles[s]=t,this.triangles[s+1]=e,this.triangles[s+2]=n,this._link(s,r),this._link(s+1,o),this._link(s+2,i),this.trianglesLen+=3,s}}function M(t,e,n,r){const o=t-n,i=e-r;return o*o+i*i}function L(t,e,n,r,o,i){return(r-e)*(o-n)-(n-t)*(i-r)<0}function E(t,e,n,r,o,i){const s=n-t,a=r-e,l=o-t,u=i-e,c=s*s+a*a,h=l*l+u*u,v=s*u-a*l,f=.5*(u*c-a*h)/v,p=.5*(s*h-l*c)/v;return c&&h&&v&&f*f+p*p||1/0}function P(t,e,n){const r={i:e,x:t[2*e],y:t[2*e+1],t:0,prev:null,next:null,removed:!1};return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function k(t){return t.prev.next=t.next,t.next.prev=t.prev,t.removed=!0,t.prev}function z(t,e,n,r,o){return M(t[2*e],t[2*e+1],r,o)-M(t[2*n],t[2*n+1],r,o)||t[2*e]-t[2*n]||t[2*e+1]-t[2*n+1]}function N(t,e,n){const r=t[e];t[e]=t[n],t[n]=r}function q(t){return t[0]}function S(t){return t[1]}const j=t=>t.map(t=>t.map(t=>Math.round(t)).join()).join(),O={seed:Math.random(),density:15,thickness:16,hueShift:45},A=m()(O.seed),R=w({x:0,y:0,width:100,height:100,thickness:O.thickness}),C=w({x:-25,y:-25,width:150,height:150,thickness:1.25*O.thickness}),Y=(X=O.density,D=C,B=A,new H.a([150,150],100/X,100,30,B).fill().map(([t,e])=>[t-25,e-25]).filter(t=>b()(t,D)));var X,D,B;const I=(t=>{const{triangles:e}=_.from(t);return e})(Y),F=((t,e)=>{const n=360*e(),r=[n,n+t,n-t,n+2*t];return([t,n])=>{const[o,i,s,a]=r,l=o+t/100*(i-o),u=l+n/100*(s+t/100*(a-s)-l);return Object(g.hsluvToHex)([u,85+10*e(),45+10*e()])}})(O.hueShift,A),U=Array.from(Array(I.length/3).keys());var G=()=>p.a.createElement(p.a.Fragment,null,p.a.createElement("style",null,"\n\t@keyframes logoHueRotate {\n\t\t0%   { filter: hue-rotate(0); }\n\t\t100% { filter: hue-rotate(359.9deg); }\n\t}\n\n\t@keyframes logoShimmer {\n\t\t0%   { opacity: 1;   }\n\t\t50%  { opacity: 0.8; }\n\t\t100% { opacity: 1;   }\n\t}\n"),p.a.createElement("svg",{viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",style:{animation:"logoHueRotate 30s linear infinite"}},p.a.createElement("clipPath",{id:"logo-clip-path"},p.a.createElement("polygon",{points:j(R)})),p.a.createElement("g",{clipPath:"url(#logo-clip-path)"},U.map(t=>{const e=[Y[I[3*t]],Y[I[3*t+1]],Y[I[3*t+2]]],n=F(Y[I[3*t]]);return p.a.createElement("polygon",{key:"triangle-"+t,fill:n,stroke:n,strokeWidth:"0.1%",strokeLinejoin:"round",points:j(e),style:{animation:"logoShimmer "+(10*A()+5).toFixed(2)+"s linear infinite"}})}))));e.default=()=>o.a.createElement(v,{title:"Welcome"},o.a.createElement("div",{className:"hero"},o.a.createElement("div",{className:"content-container"},o.a.createElement("div",{className:"hero__container"},o.a.createElement("div",{className:"hero__logo"},o.a.createElement(G,null)),o.a.createElement("div",{className:"hero__content"},o.a.createElement("h1",{className:"hero__heading"},"x-dash"),o.a.createElement("p",{className:"hero__description"},"Shared front-end for FT.com and The App."),o.a.createElement(i.a,{to:"/docs",className:"button button--inverse"},"Get started"))))),o.a.createElement("div",{className:"content-container"},o.a.createElement("div",{className:"intro"},o.a.createElement("div",{className:"intro__section"},o.a.createElement("h2",{className:"intro__heading"},"For FT.com developers"),o.a.createElement("ul",{className:"intro__list"},o.a.createElement("li",{className:"intro__item"},o.a.createElement(a,{className:"intro__icon",icon:"newspaper"}),"No more copy-and-pasting templates. Import components with well-defined, explorable use-cases."),o.a.createElement("li",{className:"intro__item"},o.a.createElement(a,{className:"intro__icon",icon:"link"}),"Works with the renderer and build tooling you're already using, no need for glue code."),o.a.createElement("li",{className:"intro__item"},o.a.createElement(a,{className:"intro__icon",icon:"list"}),"Components are logic-less, with denormalised data stored in Elasticsearch, so apps are faster and simpler."))),o.a.createElement("div",{className:"intro__section"},o.a.createElement("h2",{className:"intro__heading"},"For component authors"),o.a.createElement("ul",{className:"intro__list"},o.a.createElement("li",{className:"intro__item"},o.a.createElement(a,{className:"intro__icon",icon:"video"}),"Live-editable preview of every component without the headache of setting up a development server."),o.a.createElement("li",{className:"intro__item"},o.a.createElement(a,{className:"intro__icon",icon:"users"}),"Write a component once, and it works across every app already using x-dash."),o.a.createElement("li",{className:"intro__item"},o.a.createElement(a,{className:"intro__icon",icon:"download"}),"Get set up for development quickly. Components and build tools live in a unified monorepo."))))))},IL7q:function(t,e,n){"use strict";n("rGqo"),n("KKXr"),n("ioFf");var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function s(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(t){r[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(t,e){for(var n,a,l=s(t),u=1;u<arguments.length;u++){for(var c in n=Object(arguments[u]))o.call(n,c)&&(l[c]=n[c]);if(r){a=r(n);for(var h=0;h<a.length;h++)i.call(n,a[h])&&(l[a[h]]=n[a[h]])}}return l}},LlMa:function(t,e,n){(function(t){var r;!function(t,o,i){function s(t){var e,n=this,r=(e=4022871197,function(t){t=String(t);for(var n=0;n<t.length;n++){var r=.02519603282416938*(e+=t.charCodeAt(n));r-=e=r>>>0,e=(r*=e)>>>0,e+=4294967296*(r-=e)}return 2.3283064365386963e-10*(e>>>0)});n.next=function(){var t=2091639*n.s0+2.3283064365386963e-10*n.c;return n.s0=n.s1,n.s1=n.s2,n.s2=t-(n.c=0|t)},n.c=1,n.s0=r(" "),n.s1=r(" "),n.s2=r(" "),n.s0-=r(t),n.s0<0&&(n.s0+=1),n.s1-=r(t),n.s1<0&&(n.s1+=1),n.s2-=r(t),n.s2<0&&(n.s2+=1),r=null}function a(t,e){return e.c=t.c,e.s0=t.s0,e.s1=t.s1,e.s2=t.s2,e}function l(t,e){var n=new s(t),r=e&&e.state,o=n.next;return o.int32=function(){return 4294967296*n.next()|0},o.double=function(){return o()+11102230246251565e-32*(2097152*o()|0)},o.quick=o,r&&("object"==typeof r&&a(r,n),o.state=function(){return a(n,{})}),o}o&&o.exports?o.exports=l:n("B9Yq")&&n("PDX0")?void 0===(r=function(){return l}.call(e,n,e,o))||(o.exports=r):this.alea=l}(0,t,n("B9Yq"))}).call(this,n("YuTi")(t))},MnLI:function(t,e,n){(function(t){var r;!function(t,o,i){function s(t){var e=this;e.next=function(){var t,n,r=e.x,o=e.i;return t=r[o],n=(t^=t>>>7)^t<<24,n^=(t=r[o+1&7])^t>>>10,n^=(t=r[o+3&7])^t>>>3,n^=(t=r[o+4&7])^t<<7,t=r[o+7&7],n^=(t^=t<<13)^t<<9,r[o]=n,e.i=o+1&7,n},function(t,e){var n,r=[];if(e===(0|e))r[0]=e;else for(e=""+e,n=0;n<e.length;++n)r[7&n]=r[7&n]<<15^e.charCodeAt(n)+r[n+1&7]<<13;for(;r.length<8;)r.push(0);for(n=0;n<8&&0===r[n];++n);for(8==n?r[7]=-1:r[n],t.x=r,t.i=0,n=256;n>0;--n)t.next()}(e,t)}function a(t,e){return e.x=t.x.slice(),e.i=t.i,e}function l(t,e){null==t&&(t=+new Date);var n=new s(t),r=e&&e.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},o.int32=n.next,o.quick=o,r&&(r.x&&a(r,n),o.state=function(){return a(n,{})}),o}o&&o.exports?o.exports=l:n("B9Yq")&&n("PDX0")?void 0===(r=function(){return l}.call(e,n,e,o))||(o.exports=r):this.xorshift7=l}(0,t,n("B9Yq"))}).call(this,n("YuTi")(t))},NaLo:function(t,e){var n=n||{};n.Geometry=function(){},n.Geometry.intersectLineLine=function(t,e){var n=(t.intercept-e.intercept)/(e.slope-t.slope);return{x:n,y:t.slope*n+t.intercept}},n.Geometry.distanceFromOrigin=function(t){return Math.sqrt(Math.pow(t.x,2)+Math.pow(t.y,2))},n.Geometry.distanceLineFromOrigin=function(t){return Math.abs(t.intercept)/Math.sqrt(Math.pow(t.slope,2)+1)},n.Geometry.perpendicularThroughPoint=function(t,e){var n=-1/t.slope;return{slope:n,intercept:e.y-n*e.x}},n.Geometry.angleFromOrigin=function(t){return Math.atan2(t.y,t.x)},n.Geometry.normalizeAngle=function(t){var e=2*Math.PI;return(t%e+e)%e},n.Geometry.lengthOfRayUntilIntersect=function(t,e){return e.intercept/(Math.sin(t)-e.slope*Math.cos(t))},n.Hsluv=function(){},n.Hsluv.getBounds=function(t){for(var e=[],r=Math.pow(t+16,3)/1560896,o=r>n.Hsluv.epsilon?r:t/n.Hsluv.kappa,i=0;i<3;)for(var s=i++,a=n.Hsluv.m[s][0],l=n.Hsluv.m[s][1],u=n.Hsluv.m[s][2],c=0;c<2;){var h=c++,v=(284517*a-94839*u)*o,f=(838422*u+769860*l+731718*a)*t*o-769860*h*t,p=(632260*u-126452*l)*o+126452*h;e.push({slope:v/p,intercept:f/p})}return e},n.Hsluv.maxSafeChromaForL=function(t){for(var e=n.Hsluv.getBounds(t),r=1/0,o=0;o<e.length;){var i=e[o];++o;var s=n.Geometry.distanceLineFromOrigin(i);r=Math.min(r,s)}return r},n.Hsluv.maxChromaForLH=function(t,e){for(var r=e/360*Math.PI*2,o=n.Hsluv.getBounds(t),i=1/0,s=0;s<o.length;){var a=o[s];++s;var l=n.Geometry.lengthOfRayUntilIntersect(r,a);l>=0&&(i=Math.min(i,l))}return i},n.Hsluv.dotProduct=function(t,e){for(var n=0,r=0,o=t.length;r<o;){var i=r++;n+=t[i]*e[i]}return n},n.Hsluv.fromLinear=function(t){return t<=.0031308?12.92*t:1.055*Math.pow(t,.4166666666666667)-.055},n.Hsluv.toLinear=function(t){return t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92},n.Hsluv.xyzToRgb=function(t){return[n.Hsluv.fromLinear(n.Hsluv.dotProduct(n.Hsluv.m[0],t)),n.Hsluv.fromLinear(n.Hsluv.dotProduct(n.Hsluv.m[1],t)),n.Hsluv.fromLinear(n.Hsluv.dotProduct(n.Hsluv.m[2],t))]},n.Hsluv.rgbToXyz=function(t){var e=[n.Hsluv.toLinear(t[0]),n.Hsluv.toLinear(t[1]),n.Hsluv.toLinear(t[2])];return[n.Hsluv.dotProduct(n.Hsluv.minv[0],e),n.Hsluv.dotProduct(n.Hsluv.minv[1],e),n.Hsluv.dotProduct(n.Hsluv.minv[2],e)]},n.Hsluv.yToL=function(t){return t<=n.Hsluv.epsilon?t/n.Hsluv.refY*n.Hsluv.kappa:116*Math.pow(t/n.Hsluv.refY,.3333333333333333)-16},n.Hsluv.lToY=function(t){return t<=8?n.Hsluv.refY*t/n.Hsluv.kappa:n.Hsluv.refY*Math.pow((t+16)/116,3)},n.Hsluv.xyzToLuv=function(t){var e=t[0],r=t[1],o=e+15*r+3*t[2],i=4*e,s=9*r;0!=o?(i/=o,s/=o):(i=NaN,s=NaN);var a=n.Hsluv.yToL(r);return 0==a?[0,0,0]:[a,13*a*(i-n.Hsluv.refU),13*a*(s-n.Hsluv.refV)]},n.Hsluv.luvToXyz=function(t){var e=t[0],r=t[1],o=t[2];if(0==e)return[0,0,0];var i=r/(13*e)+n.Hsluv.refU,s=o/(13*e)+n.Hsluv.refV,a=n.Hsluv.lToY(e),l=0-9*a*i/((i-4)*s-i*s);return[l,a,(9*a-15*s*a-s*l)/(3*s)]},n.Hsluv.luvToLch=function(t){var e,n=t[0],r=t[1],o=t[2],i=Math.sqrt(r*r+o*o);i<1e-8?e=0:(e=180*Math.atan2(o,r)/Math.PI)<0&&(e=360+e);return[n,i,e]},n.Hsluv.lchToLuv=function(t){var e=t[0],n=t[1],r=t[2]/360*2*Math.PI;return[e,Math.cos(r)*n,Math.sin(r)*n]},n.Hsluv.hsluvToLch=function(t){var e=t[0],r=t[1],o=t[2];return o>99.9999999?[100,0,e]:o<1e-8?[0,0,e]:[o,n.Hsluv.maxChromaForLH(o,e)/100*r,e]},n.Hsluv.lchToHsluv=function(t){var e=t[0],r=t[1],o=t[2];return e>99.9999999?[o,0,100]:e<1e-8?[o,0,0]:[o,r/n.Hsluv.maxChromaForLH(e,o)*100,e]},n.Hsluv.hpluvToLch=function(t){var e=t[0],r=t[1],o=t[2];return o>99.9999999?[100,0,e]:o<1e-8?[0,0,e]:[o,n.Hsluv.maxSafeChromaForL(o)/100*r,e]},n.Hsluv.lchToHpluv=function(t){var e=t[0],r=t[1],o=t[2];return e>99.9999999?[o,0,100]:e<1e-8?[o,0,0]:[o,r/n.Hsluv.maxSafeChromaForL(e)*100,e]},n.Hsluv.rgbToHex=function(t){for(var e="#",r=0;r<3;){var o=t[r++],i=Math.round(255*o),s=i%16,a=(i-s)/16|0;e+=n.Hsluv.hexChars.charAt(a)+n.Hsluv.hexChars.charAt(s)}return e},n.Hsluv.hexToRgb=function(t){t=t.toLowerCase();for(var e=[],r=0;r<3;){var o=r++,i=16*n.Hsluv.hexChars.indexOf(t.charAt(2*o+1))+n.Hsluv.hexChars.indexOf(t.charAt(2*o+2));e.push(i/255)}return e},n.Hsluv.lchToRgb=function(t){return n.Hsluv.xyzToRgb(n.Hsluv.luvToXyz(n.Hsluv.lchToLuv(t)))},n.Hsluv.rgbToLch=function(t){return n.Hsluv.luvToLch(n.Hsluv.xyzToLuv(n.Hsluv.rgbToXyz(t)))},n.Hsluv.hsluvToRgb=function(t){return n.Hsluv.lchToRgb(n.Hsluv.hsluvToLch(t))},n.Hsluv.rgbToHsluv=function(t){return n.Hsluv.lchToHsluv(n.Hsluv.rgbToLch(t))},n.Hsluv.hpluvToRgb=function(t){return n.Hsluv.lchToRgb(n.Hsluv.hpluvToLch(t))},n.Hsluv.rgbToHpluv=function(t){return n.Hsluv.lchToHpluv(n.Hsluv.rgbToLch(t))},n.Hsluv.hsluvToHex=function(t){return n.Hsluv.rgbToHex(n.Hsluv.hsluvToRgb(t))},n.Hsluv.hpluvToHex=function(t){return n.Hsluv.rgbToHex(n.Hsluv.hpluvToRgb(t))},n.Hsluv.hexToHsluv=function(t){return n.Hsluv.rgbToHsluv(n.Hsluv.hexToRgb(t))},n.Hsluv.hexToHpluv=function(t){return n.Hsluv.rgbToHpluv(n.Hsluv.hexToRgb(t))},n.Hsluv.m=[[3.240969941904521,-1.537383177570093,-.498610760293],[-.96924363628087,1.87596750150772,.041555057407175],[.055630079696993,-.20397695888897,1.056971514242878]],n.Hsluv.minv=[[.41239079926595,.35758433938387,.18048078840183],[.21263900587151,.71516867876775,.072192315360733],[.019330818715591,.11919477979462,.95053215224966]],n.Hsluv.refY=1,n.Hsluv.refU=.19783000664283,n.Hsluv.refV=.46831999493879,n.Hsluv.kappa=903.2962962,n.Hsluv.epsilon=.0088564516,n.Hsluv.hexChars="0123456789abcdef";var r={hsluvToRgb:n.Hsluv.hsluvToRgb,rgbToHsluv:n.Hsluv.rgbToHsluv,hpluvToRgb:n.Hsluv.hpluvToRgb,rgbToHpluv:n.Hsluv.rgbToHpluv,hsluvToHex:n.Hsluv.hsluvToHex,hexToHsluv:n.Hsluv.hexToHsluv,hpluvToHex:n.Hsluv.hpluvToHex,hexToHpluv:n.Hsluv.hexToHpluv,lchToHpluv:n.Hsluv.lchToHpluv,hpluvToLch:n.Hsluv.hpluvToLch,lchToHsluv:n.Hsluv.lchToHsluv,hsluvToLch:n.Hsluv.hsluvToLch,lchToLuv:n.Hsluv.lchToLuv,luvToLch:n.Hsluv.luvToLch,xyzToLuv:n.Hsluv.xyzToLuv,luvToXyz:n.Hsluv.luvToXyz,xyzToRgb:n.Hsluv.xyzToRgb,rgbToXyz:n.Hsluv.rgbToXyz,lchToRgb:n.Hsluv.lchToRgb,rgbToLch:n.Hsluv.rgbToLch};t.exports=r},PDX0:function(t,e){(function(e){t.exports=e}).call(this,{})},"S1+6":function(t,e,n){var r=n("LlMa"),o=n("BJI7"),i=n("SUTr"),s=n("MnLI"),a=n("nESi"),l=n("7tas"),u=n("45iq");u.alea=r,u.xor128=o,u.xorwow=i,u.xorshift7=s,u.xor4096=a,u.tychei=l,t.exports=u},SUTr:function(t,e,n){(function(t){var r;!function(t,o,i){function s(t){var e=this,n="";e.next=function(){var t=e.x^e.x>>>2;return e.x=e.y,e.y=e.z,e.z=e.w,e.w=e.v,(e.d=e.d+362437|0)+(e.v=e.v^e.v<<4^t^t<<1)|0},e.x=0,e.y=0,e.z=0,e.w=0,e.v=0,t===(0|t)?e.x=t:n+=t;for(var r=0;r<n.length+64;r++)e.x^=0|n.charCodeAt(r),r==n.length&&(e.d=e.x<<10^e.x>>>4),e.next()}function a(t,e){return e.x=t.x,e.y=t.y,e.z=t.z,e.w=t.w,e.v=t.v,e.d=t.d,e}function l(t,e){var n=new s(t),r=e&&e.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},o.int32=n.next,o.quick=o,r&&("object"==typeof r&&a(r,n),o.state=function(){return a(n,{})}),o}o&&o.exports?o.exports=l:n("B9Yq")&&n("PDX0")?void 0===(r=function(){return l}.call(e,n,e,o))||(o.exports=r):this.xorwow=l}(0,t,n("B9Yq"))}).call(this,n("YuTi")(t))},UpbE:function(t,e){t.exports=function(t,e){for(var n=t[0],r=t[1],o=!1,i=0,s=e.length-1;i<e.length;s=i++){var a=e[i][0],l=e[i][1],u=e[s][0],c=e[s][1];l>r!=c>r&&n<(u-a)*(r-l)/(c-l)+a&&(o=!o)}return o}},YuTi:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},fZnx:function(t,e,n){"use strict";t.exports=function(t){var e,n=t.length,r=1,o=new Array(n);for(e=n;e>0;e--)o[e-1]=r,r*=t[e-1];return{stride:o,data:new Uint32Array(r)}}},nESi:function(t,e,n){(function(t){var r;!function(t,o,i){function s(t){var e=this;e.next=function(){var t,n,r=e.w,o=e.X,i=e.i;return e.w=r=r+1640531527|0,n=o[i+34&127],t=o[i=i+1&127],n^=n<<13,t^=t<<17,n^=n>>>15,t^=t>>>12,n=o[i]=n^t,e.i=i,n+(r^r>>>16)|0},function(t,e){var n,r,o,i,s,a=[],l=128;for(e===(0|e)?(r=e,e=null):(e+="\0",r=0,l=Math.max(l,e.length)),o=0,i=-32;i<l;++i)e&&(r^=e.charCodeAt((i+32)%e.length)),0===i&&(s=r),r^=r<<10,r^=r>>>15,r^=r<<4,r^=r>>>13,i>=0&&(s=s+1640531527|0,o=0==(n=a[127&i]^=r+s)?o+1:0);for(o>=128&&(a[127&(e&&e.length||0)]=-1),o=127,i=512;i>0;--i)r=a[o+34&127],n=a[o=o+1&127],r^=r<<13,n^=n<<17,r^=r>>>15,n^=n>>>12,a[o]=r^n;t.w=s,t.X=a,t.i=o}(e,t)}function a(t,e){return e.i=t.i,e.w=t.w,e.X=t.X.slice(),e}function l(t,e){null==t&&(t=+new Date);var n=new s(t),r=e&&e.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},o.int32=n.next,o.quick=o,r&&(r.X&&a(r,n),o.state=function(){return a(n,{})}),o}o&&o.exports?o.exports=l:n("B9Yq")&&n("PDX0")?void 0===(r=function(){return l}.call(e,n,e,o))||(o.exports=r):this.xor4096=l}(0,t,n("B9Yq"))}).call(this,n("YuTi")(t))},q2Od:function(t,e,n){"use strict";var r=n("fZnx"),o=n("wPoH"),i=n("rO/U"),s=function(t,e){for(var n=0,r=0;r<t.length;r++)n+=Math.pow(t[r]-e[r],2);return n},a=function(t,e,n,i,s){n=n||2*e,this.shape=t,this.dimension=this.shape.length,this.minDistance=e,this.squaredMinDistance=e*e,this.deltaDistance=n-e,this.cellSize=e/Math.sqrt(this.dimension),this.maxTries=i||30,this.rng=s||Math.random,this.neighbourhood=function(t){var e,n=o(2,t),r=[];for(e=0;e<t;e++)r.push(0);return n.push(r),n.sort((function(e,n){for(var r=0,o=0,i=0;i<t;i++)r+=Math.pow(e[i],2),o+=Math.pow(n[i],2);return r<o?-1:r>o?1:0})),n}(this.dimension),this.currentPoint=null,this.processList=[],this.samplePoints=[],this.gridShape=[];for(var a=0;a<this.dimension;a++)this.gridShape.push(Math.ceil(t[a]/this.cellSize));this.grid=r(this.gridShape)};a.prototype.shape=null,a.prototype.dimension=null,a.prototype.minDistance=null,a.prototype.squaredMinDistance=null,a.prototype.deltaDistance=null,a.prototype.cellSize=null,a.prototype.maxTries=null,a.prototype.rng=null,a.prototype.neighbourhood=null,a.prototype.currentPoint=null,a.prototype.processList=null,a.prototype.samplePoints=null,a.prototype.gridShape=null,a.prototype.grid=null,a.prototype.addRandomPoint=function(){for(var t=new Array(this.dimension),e=0;e<this.dimension;e++)t[e]=this.rng()*this.shape[e];return this.directAddPoint(t)},a.prototype.addPoint=function(t){var e,n=!0;if(t.length===this.dimension)for(e=0;e<this.dimension&&n;e++)n=t[e]>=0&&t[e]<=this.shape[e];else n=!1;return n?this.directAddPoint(t):null},a.prototype.directAddPoint=function(t){var e,n=0,r=this.grid.stride;for(this.processList.push(t),this.samplePoints.push(t),e=0;e<this.dimension;e++)n+=(t[e]/this.cellSize|0)*r[e];return this.grid.data[n]=this.samplePoints.length,t},a.prototype.inNeighbourhood=function(t){var e,n,r,o,i,a=this.dimension,l=this.grid.stride;for(e=0;e<this.neighbourhood.length;e++){for(n=0,r=0;r<a;r++)(o=(t[r]/this.cellSize|0)+this.neighbourhood[e][r])>=0&&o<this.gridShape[r]&&(n+=o*l[r]);if(0!==this.grid.data[n]&&(i=this.samplePoints[this.grid.data[n]-1],s(t,i)<this.squaredMinDistance))return!0}return!1},a.prototype.next=function(){for(var t,e,n,r,o,s,a;this.processList.length>0;){for(null===this.currentPoint&&(this.currentPoint=this.processList.shift()),r=this.currentPoint,t=0;t<this.maxTries;t++){for(s=!0,n=this.minDistance+this.deltaDistance*this.rng(),2===this.dimension?(e=this.rng()*Math.PI*2,o=[Math.cos(e),Math.sin(e)]):o=i(this.dimension,this.rng),a=0;s&&a<this.dimension;a++)o[a]=r[a]+o[a]*n,s=o[a]>=0&&o[a]<=this.shape[a]-1;if(s&&!this.inNeighbourhood(o))return this.directAddPoint(o)}t===this.maxTries&&(this.currentPoint=null)}return null},a.prototype.fill=function(){for(0===this.samplePoints.length&&this.addRandomPoint();this.next(););return this.samplePoints},a.prototype.getAllPoints=function(){return this.samplePoints},a.prototype.reset=function(){var t=this.grid.data,e=0;for(e=0;e<t.length;e++)t[e]=0;this.samplePoints=[],this.currentPoint=null,this.processList.length=0},t.exports=a},"rO/U":function(t,e,n){"use strict";t.exports=function(t,e){var n,r,o,i,s,a=new Array(t),l=Math.floor(t/2)<<1,u=0;for(s=0;s<l;s+=2)n=-2*Math.log(e()),r=Math.sqrt(n),o=2*Math.PI*e(),u+=n,a[s]=r*Math.cos(o),a[s+1]=r*Math.sin(o);if(t%2){var c=Math.sqrt(-2*Math.log(e()))*Math.cos(2*Math.PI*e());a[t-1]=c,u+=Math.pow(c,2)}for(i=1/Math.sqrt(u),s=0;s<t;++s)a[s]*=i;return a}},wPoH:function(t,e){t.exports=function(t,e){e=e||2;for(var n=2*(t=t||1)+1,r=Math.pow(n,e)-1,o=new Array(r),i=0;i<r;i++)for(var s=o[i]=new Array(e),a=i<r/2?i:i+1,l=1;l<=e;l++){var u=a%Math.pow(n,l);s[l-1]=u/Math.pow(n,l-1)-t,a-=u}return o}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-2f5a698c1fd9b5641786.js.map