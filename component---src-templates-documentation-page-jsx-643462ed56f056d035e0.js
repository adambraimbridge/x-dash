(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{140:function(D,u,e){"use strict";e.r(u);var t=e(0),a=e.n(t),F=e(148),n=(e(171),e(48),e(142)),C=function(D){var u=D.heading,e=D.items;return a.a.createElement(a.a.Fragment,null,a.a.createElement("li",{className:"site-sidebar__item site-sidebar__item--heading"},u),e.map(function(D,u){return a.a.createElement("li",{key:"link-"+u,className:"site-sidebar__item"},a.a.createElement(n.Link,{to:D.link,exact:!0,activeClassName:"is-active"},D.title))}))},r=function(D){var u=D.data;return a.a.createElement("div",{className:"site-sidebar"},a.a.createElement("ul",{className:"site-sidebar__list"},u.map(function(D,u){var e=D.node;return a.a.createElement(C,{key:"section-"+u,heading:e.title,items:e.items})})))},E=e(153);e.d(u,"pageQuery",function(){return i});u.default=function(D){var u=D.pageContext,e=D.data;return a.a.createElement(F.a,{title:u.title,sidebar:a.a.createElement(r,{data:e.menu.edges})},a.a.createElement("div",{className:"content-layout"},a.a.createElement("main",{className:"content-layout__main",role:"main"},a.a.createElement("div",{className:"content-layout__main-inner"},a.a.createElement("div",{className:"markdown",dangerouslySetInnerHTML:{__html:e.markdown.html}}))),a.a.createElement("div",{className:"content-layout__tertiary"},a.a.createElement("div",{className:"content-layout__tertiary-inner"},a.a.createElement(E.a,{items:e.markdown.headings})))))};var i="2846790397"},142:function(D,u,e){"use strict";e.r(u),e.d(u,"graphql",function(){return o}),e.d(u,"StaticQueryContext",function(){return s}),e.d(u,"StaticQuery",function(){return l});var t=e(0),a=e.n(t),F=e(4),n=e.n(F),C=e(141),r=e.n(C);e.d(u,"Link",function(){return r.a}),e.d(u,"withPrefix",function(){return C.withPrefix}),e.d(u,"navigate",function(){return C.navigate}),e.d(u,"push",function(){return C.push}),e.d(u,"replace",function(){return C.replace}),e.d(u,"navigateTo",function(){return C.navigateTo});var E=e(143),i=e.n(E);e.d(u,"PageRenderer",function(){return i.a});var c=e(34);e.d(u,"parsePath",function(){return c.a});var s=a.a.createContext({}),l=function(D){return a.a.createElement(s.Consumer,null,function(u){return D.data||u[D.query]&&u[D.query].data?(D.render||D.children)(D.data?D.data.data:u[D.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function o(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}l.propTypes={data:n.a.object,query:n.a.string.isRequired,render:n.a.func,children:n.a.func}},143:function(D,u,e){var t;D.exports=(t=e(146))&&t.default||t},145:function(D,u,e){"use strict";var t=e(0),a=e.n(t),F=e(142);u.a=function(D){var u=D.showLogo;return a.a.createElement("header",{className:"site-header"},a.a.createElement("div",{className:"site-header__masthead"},a.a.createElement(F.Link,{to:"/"},"x-dash")),u?a.a.createElement("img",{className:"site-header__logo",src:Object(F.withPrefix)("/logo.png"),alt:""}):null,a.a.createElement("nav",{role:"navigation",className:"site-header__menu"},a.a.createElement(F.Link,{to:"/docs",activeClassName:"is-active"},"Docs"),a.a.createElement(F.Link,{to:"/components",activeClassName:"is-active"},"Components"),a.a.createElement(F.Link,{to:"/packages",activeClassName:"is-active"},"Packages")))}},146:function(D,u,e){"use strict";e.r(u);e(33);var t=e(0),a=e.n(t),F=e(4),n=e.n(F),C=e(49),r=e(2),E=function(D){var u=D.location,e=r.default.getResourcesForPathnameSync(u.pathname);return a.a.createElement(C.a,Object.assign({location:u,pageResources:e},e.json))};E.propTypes={location:n.a.shape({pathname:n.a.string.isRequired}).isRequired},u.default=E},147:function(D,u,e){"use strict";e(33);var t=e(0),a=e.n(t),F={rel:"noopener noreferrer",target:"_blank"};u.a=function(){return a.a.createElement("footer",{className:"site-footer",role:"contentinfo"},a.a.createElement("div",{className:"site-footer__legal-links"},a.a.createElement("a",Object.assign({href:"http://help.ft.com/help/legal-privacy/cookies/"},F),"Cookies"),a.a.createElement("a",Object.assign({href:"http://help.ft.com/help/legal-privacy/copyright/copyright-policy/"},F),"Copyright"),a.a.createElement("a",Object.assign({href:"http://help.ft.com/help/legal-privacy/privacy/"},F),"Privacy"),a.a.createElement("a",Object.assign({href:"http://help.ft.com/help/legal-privacy/terms-conditions"},F),"Terms & Conditions")),a.a.createElement("div",{className:"site-footer__related-links"},a.a.createElement("a",Object.assign({href:"https://github.com/financial-times/x-dash"},F),"x-dash on GitHub"),a.a.createElement("a",Object.assign({href:"https://slack.com/messages/x/"},F),"x-dash on Slack")),a.a.createElement("p",{className:"site-footer__small-print"},a.a.createElement("small",null,"© THE FINANCIAL TIMES LTD 2018. FT and 'Financial Times' are trademarks of The Financial Times Ltd")))}},148:function(D,u,e){"use strict";var t=e(0),a=e.n(t),F=e(151),n=e.n(F),C=e(145),r=e(147);u.a=function(D){var u=D.title,e=D.children,t=D.sidebar;return a.a.createElement("div",{className:"basic-layout"},a.a.createElement(n.a,{title:u+" / x-dash"}),a.a.createElement("div",{className:"basic-layout__header"},a.a.createElement(C.a,{showLogo:!0})),a.a.createElement("div",{className:"basic-layout__content"},e),a.a.createElement("div",{className:"basic-layout__sidebar"},t),a.a.createElement("div",{className:"basic-layout__footer"},a.a.createElement(r.a,null)))}},153:function(D,u,e){"use strict";e(48),e(76);var t=e(0),a=e.n(t),F=e(154),n=e.n(F),C=function(D){D.preventDefault();var u=document.querySelector(D.currentTarget.hash);u&&u.scrollIntoView({behavior:"smooth"})};u.a=function(D){var u=D.items,e=D.demos,t=void 0!==e&&e,F=D.minDepth,r=void 0===F?2:F,E=D.maxDepth,i=void 0===E?3:E,c=u.filter(function(D){return D.depth>=r&&D.depth<=i});return 0===c.length?null:a.a.createElement("div",{className:"tertiary-menu"},a.a.createElement("p",{className:"tertiary-menu__heading"},"On this page:"),a.a.createElement("ul",{className:"tertiary-menu__list"},c.map(function(D,u){return a.a.createElement("li",{key:"headings-"+u,className:"tertiary-menu__item",style:{paddingLeft:D.depth-r+"em"}},a.a.createElement("a",{href:(e=D.value,"#"+(new n.a).slug(e)),onClick:C},D.value));var e}),t?a.a.createElement("li",{className:"tertiary-menu__item"},a.a.createElement("a",{href:"#component-demos",onClick:C},"Component demos")):null))}},154:function(D,u,e){var t=e(155);function a(){if(!(this instanceof a))return new a;this.reset()}D.exports=a,a.prototype.slug=function(D,u){var e=function(D,u){if("string"!=typeof D)return"";u||(D=D.replace(/[A-Z]+/g,n));return D.trim().replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,.\/:;<=>?@[\]^`{|}~]/g,"").replace(t(),"").replace(F,"-")}(D,u=!0===u),a=this.occurrences[e];return this.occurrences.hasOwnProperty(e)?a++:a=0,this.occurrences[e]=a,a&&(e=e+"-"+a),e},a.prototype.reset=function(){this.occurrences={}};var F=/\s/g;function n(D){return D.toLowerCase()}},155:function(D,u,e){"use strict";D.exports=function(){return/\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74)\uDB40\uDC7F|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]\uFE0F|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83D\uDC69\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83D\uDC69\u200D[\u2695\u2696\u2708])\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC68(?:\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F/g}},171:function(D,u,e){"use strict";e(172)("link",function(D){return function(u){return D(this,"a","href",u)}})},172:function(D,u,e){var t=e(6),a=e(17),F=e(28),n=/"/g,C=function(D,u,e,t){var a=String(F(D)),C="<"+u;return""!==e&&(C+=" "+e+'="'+String(t).replace(n,"&quot;")+'"'),C+">"+a+"</"+u+">"};D.exports=function(D,u){var e={};e[D]=u(C),t(t.P+t.F*a(function(){var u=""[D]('"');return u!==u.toLowerCase()||u.split('"').length>3}),"String",e)}}}]);
//# sourceMappingURL=component---src-templates-documentation-page-jsx-643462ed56f056d035e0.js.map