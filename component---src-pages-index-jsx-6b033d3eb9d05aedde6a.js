(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{138:function(e,t,a){"use strict";a.r(t);var n,r,i,o,s=a(0),c=a.n(s),l=a(142),m=(a(33),a(158)),u=a.n(m),d=function(e){var t=e.icon,a=e.tint,n=void 0===a?"#262A33":a,r=u()(e,["icon","tint"]),i="https://www.ft.com/__origami/service/image/v2/images/raw/fticon-v1:"+t+"?tint="+encodeURIComponent(n)+"&source=x-dash";return c.a.createElement("img",Object.assign({src:i,alt:t},r))},h=a(151),p=a.n(h),f=a(145),g=a(147),v=function(e){var t=e.title,a=e.children;return c.a.createElement("div",{className:"splash-layout"},c.a.createElement(p.a,{title:t+" / x-dash"}),c.a.createElement("div",{className:"splash-layout__header"},c.a.createElement(f.a,null)),c.a.createElement("main",{className:"splash-layout__hero",role:"main"},a),c.a.createElement("div",{className:"splash-layout__footer"},c.a.createElement(g.a,null)))},E=(a(48),a(84),a(51),a(83),a(173),a(175)),_=a.n(E),y=a(184),N=(a(185),a(76),a(187)),w=a.n(N),k=a(194),b=a.n(k),x=function(e){var t=e.x,a=e.y,n=e.width,r=e.height,i=e.thickness,o=t+n/2,s=a+r/2;return[[t,a+i],[o-i,s],[t,a+r-i],[t+i,a+r],[o,s+i],[t+n-i,a+r],[t+n,a+r-i],[o+i,s],[t+n,a+i],[t+n-i,a],[o,s-i],[t+i,a]]},T=a(195),j=function(e){return e.map(function(e){return e.map(function(e){return Math.round(e)}).join()}).join()},C={seed:Math.random(),density:15,thickness:16,hueShift:45},L=_()(C.seed),q=x({x:0,y:0,width:100,height:100,thickness:C.thickness}),F=x({x:-25,y:-25,width:150,height:150,thickness:1.25*C.thickness}),S=(n=C.density,r=F,i=L,new w.a([150,150],100/n,100,30,i).fill().map(function(e){return[e[0]-25,e[1]-25]}).filter(function(e){return b()(e,r)})),O=(o=S,T.a.from(o).triangles),P=function(e,t){var a=360*t(),n=[a,a+e,a-e,a+2*e];return function(e){var a=e[0],r=e[1],i=n[0],o=n[2],s=i+a/100*(n[1]-i),c=s+r/100*(o+a/100*(n[3]-o)-s);return Object(y.hsluvToHex)([c,85+10*t(),45+10*t()])}}(C.hueShift,L),R=Array.from(Array(O.length/3).keys()),G=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("style",null,"\n\t@keyframes logoHueRotate {\n\t\t0%   { filter: hue-rotate(0); }\n\t\t100% { filter: hue-rotate(359.9deg); }\n\t}\n\n\t@keyframes logoShimmer {\n\t\t0%   { opacity: 1;   }\n\t\t50%  { opacity: 0.8; }\n\t\t100% { opacity: 1;   }\n\t}\n"),c.a.createElement("svg",{viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",style:{animation:"logoHueRotate 30s linear infinite"}},c.a.createElement("clipPath",{id:"logo-clip-path"},c.a.createElement("polygon",{points:j(q)})),c.a.createElement("g",{clipPath:"url(#logo-clip-path)"},R.map(function(e){var t=[S[O[3*e]],S[O[3*e+1]],S[O[3*e+2]]],a=P(S[O[3*e]]);return c.a.createElement("polygon",{key:"triangle-"+e,fill:a,stroke:a,strokeWidth:"0.1%",strokeLinejoin:"round",points:j(t),style:{animation:"logoShimmer "+(10*L()+5).toFixed(2)+"s linear infinite"}})}))))};t.default=function(){return c.a.createElement(v,{title:"Welcome"},c.a.createElement("div",{className:"hero"},c.a.createElement("div",{className:"content-container"},c.a.createElement("div",{className:"hero__container"},c.a.createElement("div",{className:"hero__logo"},c.a.createElement(G,null)),c.a.createElement("div",{className:"hero__content"},c.a.createElement("h1",{className:"hero__heading"},"x-dash"),c.a.createElement("p",{className:"hero__description"},"Shared front-end for FT.com and The App."),c.a.createElement(l.Link,{to:"/docs",className:"button button--inverse"},"Get started"))))),c.a.createElement("div",{className:"content-container"},c.a.createElement("div",{className:"intro"},c.a.createElement("div",{className:"intro__section"},c.a.createElement("h2",{className:"intro__heading"},"For FT.com developers"),c.a.createElement("ul",{className:"intro__list"},c.a.createElement("li",{className:"intro__item"},c.a.createElement(d,{className:"intro__icon",icon:"newspaper"}),"No more copy-and-pasting templates. Import components with well-defined, explorable use-cases."),c.a.createElement("li",{className:"intro__item"},c.a.createElement(d,{className:"intro__icon",icon:"link"}),"Works with the renderer and build tooling you're already using, no need for glue code."),c.a.createElement("li",{className:"intro__item"},c.a.createElement(d,{className:"intro__icon",icon:"list"}),"Components are logic-less, with denormalised data stored in Elasticsearch, so apps are faster and simpler."))),c.a.createElement("div",{className:"intro__section"},c.a.createElement("h2",{className:"intro__heading"},"For component authors"),c.a.createElement("ul",{className:"intro__list"},c.a.createElement("li",{className:"intro__item"},c.a.createElement(d,{className:"intro__icon",icon:"video"}),"Live-editable preview of every component without the headache of setting up a development server."),c.a.createElement("li",{className:"intro__item"},c.a.createElement(d,{className:"intro__icon",icon:"users"}),"Write a component once, and it works across every app already using x-dash."),c.a.createElement("li",{className:"intro__item"},c.a.createElement(d,{className:"intro__icon",icon:"download"}),"Get set up for development quickly. Components and build tools live in a unified monorepo."))))))}},142:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return h});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(141),c=a.n(s);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var l=a(143),m=a.n(l);a.d(t,"PageRenderer",function(){return m.a});var u=a(34);a.d(t,"parsePath",function(){return u.a});var d=r.a.createContext({}),h=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},143:function(e,t,a){var n;e.exports=(n=a(146))&&n.default||n},145:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(142);t.a=function(e){var t=e.showLogo;return r.a.createElement("header",{className:"site-header"},r.a.createElement("div",{className:"site-header__masthead"},r.a.createElement(i.Link,{to:"/"},"x-dash")),t?r.a.createElement("img",{className:"site-header__logo",src:Object(i.withPrefix)("/logo.png"),alt:""}):null,r.a.createElement("nav",{role:"navigation",className:"site-header__menu"},r.a.createElement(i.Link,{to:"/docs",activeClassName:"is-active"},"Docs"),r.a.createElement(i.Link,{to:"/components",activeClassName:"is-active"},"Components"),r.a.createElement(i.Link,{to:"/packages",activeClassName:"is-active"},"Packages")))}},146:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(49),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},147:function(e,t,a){"use strict";a(33);var n=a(0),r=a.n(n),i={rel:"noopener noreferrer",target:"_blank"};t.a=function(){return r.a.createElement("footer",{className:"site-footer",role:"contentinfo"},r.a.createElement("div",{className:"site-footer__legal-links"},r.a.createElement("a",Object.assign({href:"http://help.ft.com/help/legal-privacy/cookies/"},i),"Cookies"),r.a.createElement("a",Object.assign({href:"http://help.ft.com/help/legal-privacy/copyright/copyright-policy/"},i),"Copyright"),r.a.createElement("a",Object.assign({href:"http://help.ft.com/help/legal-privacy/privacy/"},i),"Privacy"),r.a.createElement("a",Object.assign({href:"http://help.ft.com/help/legal-privacy/terms-conditions"},i),"Terms & Conditions")),r.a.createElement("div",{className:"site-footer__related-links"},r.a.createElement("a",Object.assign({href:"https://github.com/financial-times/x-dash"},i),"x-dash on GitHub"),r.a.createElement("a",Object.assign({href:"https://slack.com/messages/x/"},i),"x-dash on Slack")),r.a.createElement("p",{className:"site-footer__small-print"},r.a.createElement("small",null,"© THE FINANCIAL TIMES LTD 2018. FT and 'Financial Times' are trademarks of The Financial Times Ltd")))}},183:function(e,t){}}]);
//# sourceMappingURL=component---src-pages-index-jsx-6b033d3eb9d05aedde6a.js.map