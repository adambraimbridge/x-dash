webpackJsonp([0xd2a57dc1d883],{86:function(n,e,o){"use strict";function t(n,e,o){var t=u.map(function(o){if(o.plugin[n]){var t=o.plugin[n](e,o.options);return t}});return t=t.filter(function(n){return"undefined"!=typeof n}),t.length>0?t:o?[o]:[]}function r(n,e,o){return u.reduce(function(o,t){return t.plugin[n]?o.then(function(){return t.plugin[n](e,t.options)}):o},Promise.resolve())}e.__esModule=!0,e.apiRunner=t,e.apiRunnerAsync=r;var u=[{plugin:o(333),options:{plugins:[]}}]},185:function(n,e,o){"use strict";e.components={"component---src-templates-blog-js":o(306),"component---src-pages-components-index-js":o(303),"component---src-pages-index-js":o(304),"component---src-pages-packages-index-js":o(305)},e.json={"layout-index.json":o(307),"components-x-interaction.json":o(310),"components-x-styling-demo.json":o(311),"packages-x-engine.json":o(327),"packages-x-handlebars.json":o(328),"components-x-teaser.json":o(312),"components-x-teaser-features.json":o(313),"components-x-teaser-migration-guide.json":o(314),"guides-documentation.json":o(324),"guides.json":o(315),"guides-apps-getting-started.json":o(316),"guides-apps-setup.json":o(317),"guides-components-conventions.json":o(318),"guides-components-creating-a-component.json":o(321),"guides-components-getting-started.json":o(322),"guides-components-setup.json":o(323),"guides-components-cookbook-composing-components.json":o(319),"guides-components-cookbook-styling.json":o(320),"components.json":o(309),"layout-splash.json":o(308),"index.json":o(325),"packages.json":o(326)},e.layouts={"layout---index":o(301),"layout---splash":o(302)}},186:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function u(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function a(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},i=o(1),c=t(i),l=o(5),p=t(l),f=o(136),d=t(f),m=o(70),g=t(m),h=o(86),y=o(398),x=t(y),v=function(n){var e=n.children;return c.default.createElement("div",null,e())},j=function(n){function e(o){r(this,e);var t=u(this,n.call(this)),a=o.location;return d.default.getPage(a.pathname)||(a=s({},a,{pathname:"/404.html"})),t.state={location:a,pageResources:d.default.getResourcesForPathname(a.pathname)},t}return a(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var o=d.default.getResourcesForPathname(n.location.pathname);if(o)this.setState({location:n.location,pageResources:o});else{var t=n.location;d.default.getPage(t.pathname)||(t=s({},t,{pathname:"/404.html"})),d.default.getResourcesForPathname(t.pathname,function(n){e.setState({location:t,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;g.default.on("onPostLoadPageResources",function(e){d.default.getPage(n.state.location.pathname)&&e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||(!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path)||(0,x.default)(this,n,e)))))},e.prototype.render=function(){var n=(0,h.apiRunner)("replaceComponentRenderer",{props:s({},this.props,{pageResources:this.state.pageResources}),loader:f.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,i.createElement)(this.state.pageResources.component,s({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:v,s({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(c.default.Component);j.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},e.default=j,n.exports=e.default},70:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=o(362),u=t(r),a=(0,u.default)();n.exports=a},187:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=o(84),u=o(137),a=t(u),s={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(o){var t=decodeURIComponent(o),u=(0,a.default)(t,e);if(u.split("#").length>1&&(u=u.split("#").slice(0,-1).join("")),u.split("?").length>1&&(u=u.split("?").slice(0,-1).join("")),s[u])return s[u];var i=void 0;return n.some(function(n){if(n.matchPath){if((0,r.matchPath)(u,{path:n.path})||(0,r.matchPath)(u,{path:n.matchPath}))return i=n,s[u]=n,!0}else{if((0,r.matchPath)(u,{path:n.path,exact:!0}))return i=n,s[u]=n,!0;if((0,r.matchPath)(u,{path:n.path+"index.html"}))return i=n,s[u]=n,!0}return!1}),i}}},188:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=o(166),u=t(r),a=o(86),s=(0,a.apiRunner)("replaceHistory"),i=s[0],c=i||(0,u.default)();n.exports=c},310:function(n,e,o){o(3),n.exports=function(n){return o.e(0xc256c55b57d1,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(339)})})}},311:function(n,e,o){o(3),n.exports=function(n){return o.e(0xea95040ff99b,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(340)})})}},313:function(n,e,o){o(3),n.exports=function(n){return o.e(0xb38554b746c9,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(341)})})}},314:function(n,e,o){o(3),n.exports=function(n){return o.e(84267847509819,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(342)})})}},312:function(n,e,o){o(3),n.exports=function(n){return o.e(41353584452994,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(343)})})}},309:function(n,e,o){o(3),n.exports=function(n){return o.e(67716065813132,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(344)})})}},316:function(n,e,o){o(3),n.exports=function(n){return o.e(0xf6b22ea4213d,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(345)})})}},317:function(n,e,o){o(3),n.exports=function(n){return o.e(8982168515961,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(346)})})}},318:function(n,e,o){o(3),n.exports=function(n){return o.e(0xd2b9c36a3636,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(347)})})}},319:function(n,e,o){o(3),n.exports=function(n){return o.e(0xd02298d728e7,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(348)})})}},320:function(n,e,o){o(3),n.exports=function(n){return o.e(80605728717417,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(349)})})}},321:function(n,e,o){o(3),n.exports=function(n){return o.e(0xe09ce7960a7f,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(350)})})}},322:function(n,e,o){o(3),n.exports=function(n){return o.e(0x84b6aac202b6,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(351)})})}},323:function(n,e,o){o(3),n.exports=function(n){return o.e(0xb9871ebeb822,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(352)})})}},324:function(n,e,o){o(3),n.exports=function(n){return o.e(0xdcc9f82b7a23,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(353)})})}},315:function(n,e,o){o(3),n.exports=function(n){return o.e(0x730e479d2ac6,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(354)})})}},325:function(n,e,o){o(3),n.exports=function(n){return o.e(0x81b8806e4260,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(355)})})}},307:function(n,e,o){o(3),n.exports=function(n){return o.e(60335399758886,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(127)})})}},308:function(n,e,o){o(3),n.exports=function(n){return o.e(60335399758886,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(128)})})}},327:function(n,e,o){o(3),n.exports=function(n){return o.e(0xbab1ec7c25ab,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(356)})})}},328:function(n,e,o){o(3),n.exports=function(n){return o.e(0xecb85b6cd5eb,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(357)})})}},326:function(n,e,o){o(3),n.exports=function(n){return o.e(646043723490,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(358)})})}},301:function(n,e,o){o(3),n.exports=function(n){return o.e(0x67ef26645b2a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(189)})})}},302:function(n,e,o){o(3),n.exports=function(n){return o.e(0x9d59f21c54ca,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(190)})})}},136:function(n,e,o){(function(n){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var r=o(1),u=(t(r),o(187)),a=t(u),s=o(70),i=t(s),c=o(137),l=t(c),p=void 0,f={},d={},m={},g={},h={},y=[],x=[],v={},j="",b=[],R={},k=function(n){return n&&n.default||n},C=void 0,N=!0,w=[],_={},P={},E=5;C=o(191)({getNextQueuedResources:function(){return b.slice(-1)[0]},createResourceDownload:function(n){L(n,function(){b=b.filter(function(e){return e!==n}),C.onResourcedFinished(n)})}}),i.default.on("onPreLoadPageResources",function(n){C.onPreLoadPageResources(n)}),i.default.on("onPostLoadPageResources",function(n){C.onPostLoadPageResources(n)});var O=function(n,e){return R[n]>R[e]?1:R[n]<R[e]?-1:0},T=function(n,e){return v[n]>v[e]?1:v[n]<v[e]?-1:0},L=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(g[e])n.nextTick(function(){o(null,g[e])});else{var t=void 0;t="component---"===e.slice(0,12)?d.components[e]:"layout---"===e.slice(0,9)?d.layouts[e]:d.json[e],t(function(n,t){g[e]=t,w.push({resource:e,succeeded:!n}),P[e]||(P[e]=n),w=w.slice(-E),o(n,t)})}},S=function(e,o){h[e]?n.nextTick(function(){o(null,h[e])}):P[e]?n.nextTick(function(){o(P[e])}):L(e,function(n,t){if(n)o(n);else{var r=k(t());h[e]=r,o(n,r)}})},A=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=w.find(function(n){return n.succeeded});return!!e},D=function(n,e){console.log(e),_[n]||(_[n]=e),A()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},U=1,M={empty:function(){x=[],v={},R={},b=[],y=[],j=""},addPagesArray:function(n){y=n,j="/x-dash",p=(0,a.default)(n,j)},addDevRequires:function(n){f=n},addProdRequires:function(n){d=n},dequeue:function(){return x.pop()},enqueue:function(n){var e=(0,l.default)(n,j);if(!y.some(function(n){return n.path===e}))return!1;var o=1/U;U+=1,v[e]?v[e]+=1:v[e]=1,M.has(e)||x.unshift(e),x.sort(T);var t=p(e);return t.jsonName&&(R[t.jsonName]?R[t.jsonName]+=1+o:R[t.jsonName]=1+o,b.indexOf(t.jsonName)!==-1||g[t.jsonName]||b.unshift(t.jsonName)),t.componentChunkName&&(R[t.componentChunkName]?R[t.componentChunkName]+=1+o:R[t.componentChunkName]=1+o,b.indexOf(t.componentChunkName)!==-1||g[t.jsonName]||b.unshift(t.componentChunkName)),b.sort(O),C.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:b,resourcesCount:R}},getPages:function(){return{pathArray:x,pathCount:v}},getPage:function(n){return p(n)},has:function(n){return x.some(function(e){return e===n})},getResourcesForPathname:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};N&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(p(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,o=Array.isArray(e),t=0,e=o?e:e[Symbol.iterator]();;){var r;if(o){if(t>=e.length)break;r=e[t++]}else{if(t=e.next(),t.done)break;r=t.value}var u=r;u.unregister()}window.location.reload()}})),N=!1;if(_[e])return D(e,'Previously detected load failure for "'+e+'"'),o();var t=p(e);if(!t)return D(e,"A page wasn't found for \""+e+'"'),o();if(e=t.path,m[e])return n.nextTick(function(){o(m[e]),i.default.emit("onPostLoadPageResources",{page:t,pageResources:m[e]})}),m[e];i.default.emit("onPreLoadPageResources",{path:e});var r=void 0,u=void 0,a=void 0,s=function(){if(r&&u&&(!t.layoutComponentChunkName||a)){m[e]={component:r,json:u,layout:a,page:t};var n={component:r,json:u,layout:a,page:t};o(n),i.default.emit("onPostLoadPageResources",{page:t,pageResources:n})}};return S(t.componentChunkName,function(n,e){n&&D(t.path,"Loading the component for "+t.path+" failed"),r=e,s()}),S(t.jsonName,function(n,e){n&&D(t.path,"Loading the JSON for "+t.path+" failed"),u=e,s()}),void(t.layoutComponentChunkName&&S(t.layout,function(n,e){n&&D(t.path,"Loading the Layout for "+t.path+" failed"),a=e,s()}))},peek:function(n){return x.slice(-1)[0]},length:function(){return x.length},indexOf:function(n){return x.length-x.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:M.getResourcesForPathname};e.default=M}).call(e,o(64))},359:function(n,e){n.exports=[{componentChunkName:"component---src-templates-blog-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"components-x-interaction.json",path:"/components/x-interaction/"},{componentChunkName:"component---src-templates-blog-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"components-x-styling-demo.json",path:"/components/x-styling-demo/"},{componentChunkName:"component---src-templates-blog-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"packages-x-engine.json",path:"/packages/x-engine/"},{componentChunkName:"component---src-templates-blog-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"packages-x-handlebars.json",path:"/packages/x-handlebars/"},{componentChunkName:"component---src-templates-blog-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"components-x-teaser.json",path:"/components/x-teaser/"},{componentChunkName:"component---src-templates-blog-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"components-x-teaser-features.json",path:"/components/x-teaser/features"},{componentChunkName:"component---src-templates-blog-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"components-x-teaser-migration-guide.json",path:"/components/x-teaser/migration-guide"},{componentChunkName:"component---src-templates-blog-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"guides-documentation.json",path:"/guides/documentation"},{componentChunkName:"component---src-templates-blog-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"guides.json",path:"/guides/"},{componentChunkName:"component---src-templates-blog-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"guides-apps-getting-started.json",path:"/guides/apps/getting-started"},{componentChunkName:"component---src-templates-blog-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"guides-apps-setup.json",path:"/guides/apps/setup"},{componentChunkName:"component---src-templates-blog-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"guides-components-conventions.json",path:"/guides/components/conventions"},{componentChunkName:"component---src-templates-blog-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"guides-components-creating-a-component.json",path:"/guides/components/creating-a-component"},{componentChunkName:"component---src-templates-blog-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"guides-components-getting-started.json",path:"/guides/components/getting-started"},{componentChunkName:"component---src-templates-blog-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"guides-components-setup.json",path:"/guides/components/setup"},{componentChunkName:"component---src-templates-blog-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"guides-components-cookbook-composing-components.json",path:"/guides/components/cookbook/composing-components"},{componentChunkName:"component---src-templates-blog-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"guides-components-cookbook-styling.json",path:"/guides/components/cookbook/styling"},{componentChunkName:"component---src-pages-components-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"components.json",path:"/components/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---splash",layoutComponentChunkName:"component---src-layouts-splash-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-packages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"packages.json",path:"/packages/"}]},191:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,o=n.createResourceDownload,t=[],r=[],u=function(){var n=e();n&&(r.push(n),o(n))},a=function(n){switch(n.type){case"RESOURCE_FINISHED":r=r.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===t.length&&u()},0)};return{onResourcedFinished:function(n){a({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){a({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){a({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){a({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:r}},empty:function(){t=[],r=[]}}}},0:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},u=o(86),a=o(1),s=t(a),i=o(167),c=t(i),l=o(84),p=o(332),f=o(287),d=t(f),m=o(14),g=o(188),h=t(g),y=o(70),x=t(y),v=o(359),j=t(v),b=o(360),R=t(b),k=o(186),C=t(k),N=o(185),w=t(N),_=o(136),P=t(_);o(212),window.___history=h.default,window.___emitter=x.default,P.default.addPagesArray(j.default),P.default.addProdRequires(w.default),window.asyncRequires=w.default,window.___loader=P.default,window.matchPath=l.matchPath;var E=R.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),O=function(n){var e=E[n];return null!=e&&(h.default.replace(e.toPath),!0)};O(window.location.pathname),(0,u.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&i!==!1||(window.___history=n,i=!0,n.listen(function(n,e){O(n.pathname)||setTimeout(function(){(0,u.apiRunner)("onRouteUpdate",{location:n,action:e})},0)}))}function e(n,e){var o=e.location.pathname,t=(0,u.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:o});if(t.length>0)return t[0];if(n){var r=n.location.pathname;if(r===o)return!1}return!0}(0,u.apiRunner)("registerServiceWorker").length>0&&o(192);var t=function(n,e){function o(n){n.page.path===P.default.getPage(r).path&&(x.default.off("onPostLoadPageResources",o),clearTimeout(i),s(t))}var t=(0,m.createLocation)(n,null,null,h.default.location),r=t.pathname,u=E[r];u&&(r=u.toPath);var a=window.location;if(a.pathname!==t.pathname||a.search!==t.search||a.hash!==t.hash){var s=e?window.___history.replace:window.___history.push,i=setTimeout(function(){x.default.off("onPostLoadPageResources",o),x.default.emit("onDelayedLoadPageResources",{pathname:r}),s(t)},1e3);P.default.getResourcesForPathname(r)?(clearTimeout(i),s(t)):x.default.on("onPostLoadPageResources",o)}};window.___push=function(n){return t(n,!1)},window.___replace=function(n){return t(n,!0)},window.___navigateTo=window.___push,(0,u.apiRunner)("onRouteUpdate",{location:h.default.location,action:h.default.action});var i=!1,f=(0,u.apiRunner)("replaceRouterComponent",{history:h.default})[0],g=function(n){var e=n.children;return s.default.createElement(l.Router,{history:h.default},e)},y=(0,l.withRouter)(C.default);P.default.getResourcesForPathname(window.location.pathname,function(){var o=function(){return(0,a.createElement)(f?f:g,null,(0,a.createElement)(p.ScrollContext,{shouldUpdateScroll:e},(0,a.createElement)(y,{layout:!0,children:function(e){return(0,a.createElement)(l.Route,{render:function(o){n(o.history);var t=e?e:o;return P.default.getPage(t.location.pathname)?(0,a.createElement)(C.default,r({page:!0},t)):(0,a.createElement)(C.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},t=(0,u.apiRunner)("wrapRootComponent",{Root:o},o)[0],i=(0,u.apiRunner)("replaceHydrateFunction",void 0,c.default.render)[0];(0,d.default)(function(){return i(s.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,u.apiRunner)("onInitialClientRender")})})})})},360:function(n,e){n.exports=[]},192:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=o(70),u=t(r),a="/";a="/x-dash/","serviceWorker"in navigator&&navigator.serviceWorker.register(a+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),u.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},137:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n},n.exports=e.default},287:function(n,e,o){!function(e,o){n.exports=o()}("domready",function(){var n,e=[],o=document,t=o.documentElement.doScroll,r="DOMContentLoaded",u=(t?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState);return u||o.addEventListener(r,n=function(){for(o.removeEventListener(r,n),u=1;n=e.shift();)n()}),function(n){u?setTimeout(n,0):e.push(n)}})},3:function(n,e,o){"use strict";function t(){function n(n){var e=t.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,t=document.querySelector("head"),r=o.e,u=o.s;o.e=function(t,a){var s=!1,i=!0,c=function(n){a&&(a(o,n),a=null)};return!u&&e&&e[t]?void c(!0):(r(t,function(){s||(s=!0,i?setTimeout(function(){c()}):c())}),void(s||(i=!1,n(function(){s||(s=!0,u?u[t]=void 0:(e||(e={}),e[t]=!0),c(!0))}))))}}t()},333:function(n,e,o){"use strict";var t=function(n){setTimeout(function(){var e=window.decodeURI(window.location.hash.replace("#",""));if(""!==e){var o=document.getElementById(e);if(o){var t=o.offsetTop;window.scrollTo(0,t-n)}}},10)};e.onClientEntry=function(n,e){var o=0;e.offsetY&&(o=e.offsetY)},e.onRouteUpdate=function(n,e){var o=0;e.offsetY&&(o=e.offsetY),t(o)}},362:function(n,e){function o(n){return n=n||Object.create(null),{on:function(e,o){(n[e]||(n[e]=[])).push(o)},off:function(e,o){n[e]&&n[e].splice(n[e].indexOf(o)>>>0,1)},emit:function(e,o){(n[e]||[]).slice().map(function(n){n(o)}),(n["*"]||[]).slice().map(function(n){n(e,o)})}}}n.exports=o},64:function(n,e){function o(){throw new Error("setTimeout has not been defined")}function t(){throw new Error("clearTimeout has not been defined")}function r(n){if(l===setTimeout)return setTimeout(n,0);if((l===o||!l)&&setTimeout)return l=setTimeout,setTimeout(n,0);try{return l(n,0)}catch(e){try{return l.call(null,n,0)}catch(e){return l.call(this,n,0)}}}function u(n){if(p===clearTimeout)return clearTimeout(n);if((p===t||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(n);try{return p(n)}catch(e){try{return p.call(null,n)}catch(e){return p.call(this,n)}}}function a(){g&&d&&(g=!1,d.length?m=d.concat(m):h=-1,m.length&&s())}function s(){if(!g){var n=r(a);g=!0;for(var e=m.length;e;){for(d=m,m=[];++h<e;)d&&d[h].run();h=-1,e=m.length}d=null,g=!1,u(n)}}function i(n,e){this.fun=n,this.array=e}function c(){}var l,p,f=n.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:o}catch(n){l=o}try{p="function"==typeof clearTimeout?clearTimeout:t}catch(n){p=t}}();var d,m=[],g=!1,h=-1;f.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)e[o-1]=arguments[o];m.push(new i(n,e)),1!==m.length||g||r(s)},i.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(n){return[]},f.binding=function(n){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(n){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},398:function(n,e){"use strict";function o(n,e){for(var o in n)if(!(o in e))return!0;for(var t in e)if(n[t]!==e[t])return!0;return!1}e.__esModule=!0,e.default=function(n,e,t){return o(n.props,e)||o(n.state,t)},n.exports=e.default},303:function(n,e,o){o(3),n.exports=function(n){return o.e(89306987359362,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(198)})})}},304:function(n,e,o){o(3),n.exports=function(n){return o.e(35783957827783,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(199)})})}},305:function(n,e,o){o(3),n.exports=function(n){return o.e(68577343226235,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(200)})})}},306:function(n,e,o){o(3),n.exports=function(n){return o.e(36733297554888,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(201)})})}}});
//# sourceMappingURL=app-bbd8bdcb657aa630e013.js.map