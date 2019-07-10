(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{132:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(135);a(19);const i="#262A33";var l=e=>{let{icon:t,tint:a=i}=e,n=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,["icon","tint"]);const r="https://www.ft.com/__origami/service/image/v2/images/raw/fticon-v1:"+t+"?tint="+encodeURIComponent(a)+"&source=x-dash";return s.a.createElement("img",Object.assign({src:r,alt:t},n))},o=a(144),c=a.n(o),m=a(138),h=a(140),d=e=>{let{title:t,children:a}=e;return s.a.createElement("div",{className:"splash-layout"},s.a.createElement(c.a,{title:t+" / x-dash"}),s.a.createElement("div",{className:"splash-layout__header"},s.a.createElement(m.a,null)),s.a.createElement("main",{className:"splash-layout__hero",role:"main"},a),s.a.createElement("div",{className:"splash-layout__footer"},s.a.createElement(h.a,null)))},p=a(160),u=a.n(p),E=a(163),g=a.n(E),_=a(172),f=a(173),v=a.n(f),N=a(177),y=a.n(N),k=e=>{let{x:t,y:a,width:n,height:s,thickness:r}=e;const i=t+n/2,l=a+s/2;return[[t,a+r],[i-r,l],[t,a+s-r],[t+r,a+s],[i,l+r],[t+n-r,a+s],[t+n,a+s-r],[i+r,l],[t+n,a+r],[t+n-r,a],[i,l-r],[t+r,a]]},w=a(178);const b=e=>e.map(e=>e.map(e=>Math.round(e)).join()).join(),x={seed:Math.random(),density:15,thickness:16,hueShift:45},j=g()(x.seed),T=k({x:0,y:0,width:100,height:100,thickness:x.thickness}),C=k({x:-25,y:-25,width:150,height:150,thickness:1.25*x.thickness}),O=(F=x.density,R=C,S=j,new v.a([150,150],100/F,100,30,S).fill().map(e=>{let[t,a]=e;return[t-25,a-25]}).filter(e=>y()(e,R)));var F,R,S;const A=(e=>{const{triangles:t}=w.a.from(e);return t})(O),L=((e,t)=>{const a=360*t(),n=[a,a+e,a-e,a+2*e];return e=>{let[a,s]=e;const[r,i,l,o]=n,c=r+a/100*(i-r),m=c+s/100*(l+a/100*(o-l)-c);return Object(_.hsluvToHex)([m,85+10*t(),45+10*t()])}})(x.hueShift,j),H=Array.from(Array(A.length/3).keys());var I=()=>u.a.createElement(u.a.Fragment,null,u.a.createElement("style",null,"\n\t@keyframes logoHueRotate {\n\t\t0%   { filter: hue-rotate(0); }\n\t\t100% { filter: hue-rotate(359.9deg); }\n\t}\n\n\t@keyframes logoShimmer {\n\t\t0%   { opacity: 1;   }\n\t\t50%  { opacity: 0.8; }\n\t\t100% { opacity: 1;   }\n\t}\n"),u.a.createElement("svg",{viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",style:{animation:"logoHueRotate 30s linear infinite"}},u.a.createElement("clipPath",{id:"logo-clip-path"},u.a.createElement("polygon",{points:b(T)})),u.a.createElement("g",{clipPath:"url(#logo-clip-path)"},H.map(e=>{const t=[O[A[3*e]],O[A[3*e+1]],O[A[3*e+2]]],a=L(O[A[3*e]]);return u.a.createElement("polygon",{key:"triangle-"+e,fill:a,stroke:a,strokeWidth:"0.1%",strokeLinejoin:"round",points:b(t),style:{animation:"logoShimmer "+(10*j()+5).toFixed(2)+"s linear infinite"}})}))));t.default=(()=>s.a.createElement(d,{title:"Welcome"},s.a.createElement("div",{className:"hero"},s.a.createElement("div",{className:"content-container"},s.a.createElement("div",{className:"hero__container"},s.a.createElement("div",{className:"hero__logo"},s.a.createElement(I,null)),s.a.createElement("div",{className:"hero__content"},s.a.createElement("h1",{className:"hero__heading"},"x-dash"),s.a.createElement("p",{className:"hero__description"},"Shared front-end for FT.com and The App."),s.a.createElement(r.a,{to:"/docs",className:"button button--inverse"},"Get started"))))),s.a.createElement("div",{className:"content-container"},s.a.createElement("div",{className:"intro"},s.a.createElement("div",{className:"intro__section"},s.a.createElement("h2",{className:"intro__heading"},"For FT.com developers"),s.a.createElement("ul",{className:"intro__list"},s.a.createElement("li",{className:"intro__item"},s.a.createElement(l,{className:"intro__icon",icon:"newspaper"}),"No more copy-and-pasting templates. Import components with well-defined, explorable use-cases."),s.a.createElement("li",{className:"intro__item"},s.a.createElement(l,{className:"intro__icon",icon:"link"}),"Works with the renderer and build tooling you're already using, no need for glue code."),s.a.createElement("li",{className:"intro__item"},s.a.createElement(l,{className:"intro__icon",icon:"list"}),"Components are logic-less, with denormalised data stored in Elasticsearch, so apps are faster and simpler."))),s.a.createElement("div",{className:"intro__section"},s.a.createElement("h2",{className:"intro__heading"},"For component authors"),s.a.createElement("ul",{className:"intro__list"},s.a.createElement("li",{className:"intro__item"},s.a.createElement(l,{className:"intro__icon",icon:"video"}),"Live-editable preview of every component without the headache of setting up a development server."),s.a.createElement("li",{className:"intro__item"},s.a.createElement(l,{className:"intro__icon",icon:"users"}),"Write a component once, and it works across every app already using x-dash."),s.a.createElement("li",{className:"intro__item"},s.a.createElement(l,{className:"intro__icon",icon:"download"}),"Get set up for development quickly. Components and build tools live in a unified monorepo.")))))))},135:function(e,t,a){"use strict";var n=a(0),s=a.n(n),r=a(5),i=a.n(r),l=a(38),o=a.n(l);a.d(t,"a",function(){return o.a}),a.d(t,"b",function(){return l.withPrefix});a(136);s.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},136:function(e,t,a){e.exports=(e=>e&&e.default||e)(a(139))},138:function(e,t,a){"use strict";var n=a(0),s=a.n(n),r=a(135);t.a=(e=>{let{showLogo:t}=e;return s.a.createElement("header",{className:"site-header"},s.a.createElement("div",{className:"site-header__masthead"},s.a.createElement(r.a,{to:"/"},"x-dash")),t?s.a.createElement("img",{className:"site-header__logo",src:Object(r.b)("/logo.png"),alt:""}):null,s.a.createElement("nav",{role:"navigation",className:"site-header__menu"},s.a.createElement(r.a,{to:"/docs",activeClassName:"is-active"},"Docs"),s.a.createElement(r.a,{to:"/components",activeClassName:"is-active"},"Components"),s.a.createElement(r.a,{to:"/packages",activeClassName:"is-active"},"Packages")))})},139:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(5),i=a.n(r),l=a(57);const o=e=>{let{location:t,pageResources:a}=e;return a?s.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=o},140:function(e,t,a){"use strict";var n=a(0),s=a.n(n);const r={rel:"noopener noreferrer",target:"_blank"};t.a=(()=>s.a.createElement("footer",{className:"site-footer",role:"contentinfo"},s.a.createElement("div",{className:"site-footer__legal-links"},s.a.createElement("a",Object.assign({href:"http://help.ft.com/help/legal-privacy/cookies/"},r),"Cookies"),s.a.createElement("a",Object.assign({href:"http://help.ft.com/help/legal-privacy/copyright/copyright-policy/"},r),"Copyright"),s.a.createElement("a",Object.assign({href:"http://help.ft.com/help/legal-privacy/privacy/"},r),"Privacy"),s.a.createElement("a",Object.assign({href:"http://help.ft.com/help/legal-privacy/terms-conditions"},r),"Terms & Conditions")),s.a.createElement("div",{className:"site-footer__related-links"},s.a.createElement("a",Object.assign({href:"https://github.com/financial-times/x-dash"},r),"x-dash on GitHub"),s.a.createElement("a",Object.assign({href:"https://slack.com/messages/x/"},r),"x-dash on Slack")),s.a.createElement("p",{className:"site-footer__small-print"},s.a.createElement("small",null,"© THE FINANCIAL TIMES LTD 2018. FT and 'Financial Times' are trademarks of The Financial Times Ltd"))))},171:function(e,t){}}]);
//# sourceMappingURL=component---src-pages-index-jsx-15aa6c4da057a6d13289.js.map