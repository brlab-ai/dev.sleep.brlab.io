!function(){"use strict";var e,t,n,r,o,a,c,f,i={},s={};function u(e){var t=s[e];if(void 0!==t)return t.exports;var n=s[e]={id:e,loaded:!1,exports:{}};return i[e].call(n.exports,n,n.exports,u),n.loaded=!0,n.exports}u.m=i,e=[],u.O=function(t,n,r,o){if(!n){var a=1/0;for(s=0;s<e.length;s++){n=e[s][0],r=e[s][1],o=e[s][2];for(var c=!0,f=0;f<n.length;f++)(!1&o||a>=o)&&Object.keys(u.O).every((function(e){return u.O[e](n[f])}))?n.splice(f--,1):(c=!1,o<a&&(a=o));if(c){e.splice(s--,1);var i=r();void 0!==i&&(t=i)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[n,r,o]},u.F={},u.E=function(e){Object.keys(u.F).map((function(t){u.F[t](e)}))},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},u.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);u.r(o);var a={};t=t||[null,n({}),n([]),n(n)];for(var c=2&r&&e;"object"==typeof c&&!~t.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach((function(t){a[t]=function(){return e[t]}}));return a.default=function(){return e},u.d(o,a),o},u.d=function(e,t){for(var n in t)u.o(t,n)&&!u.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},u.f={},u.e=function(e){return Promise.all(Object.keys(u.f).reduce((function(t,n){return u.f[n](e,t),t}),[]))},u.u=function(e){return({6:"cc2f59a5f263c94545e8de3e7f6b898ee39d87ab",7:"component---packages-blog-gatsby-blog-core-src-templates-collection-author-js",142:"component---packages-blog-gatsby-blog-core-src-templates-posts-js",146:"component---packages-blog-gatsby-blog-pages-src-pages-contact-jsx",351:"commons",360:"component---packages-blog-gatsby-blog-pages-src-pages-404-jsx",532:"styles",575:"component---packages-blog-gatsby-blog-core-src-templates-collection-category-js",621:"component---packages-blog-gatsby-blog-core-src-templates-post-js",636:"react-slick",774:"framework",834:"component---packages-blog-gatsby-blog-pages-src-pages-authors-jsx",969:"fa5f8105"}[e]||e)+"-"+{6:"8d254bc297e05f117632",7:"bba2adfe4b748a37ff18",104:"e62ee0404a958b98ddf6",142:"a052488865450f4a661d",146:"2d58b98bf91f56f866dc",334:"d9d493a3a4e24a9d6188",351:"238f5ebb1e6c88ec4d52",360:"0343e746b869fdc93f4b",455:"30d449bf9a176a7bbc6f",482:"4cafcfa45a144c8608c4",532:"d79e29505d3986999784",564:"9a2d4977ff8618e9f543",575:"6f96ab029e8eeb0bb30a",621:"8b4c011cf06a0429fd7e",636:"5e4420dd1eb931cd4db8",639:"723bc3e48f42bbae22a3",712:"56a962be117a2d1a8f57",716:"29813b0190c5e32135d2",774:"8b6bbbdfbb5a30239589",834:"e76de4a906a1ac3261dd",969:"ec36d588d85a65f3b930"}[e]+".js"},u.miniCssF=function(e){return"styles.8ded5273f9e359b6d53b.css"},u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.hmd=function(e){return(e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},o="@elegantstack/gatsby-starter-flexiblog-news:",u.l=function(e,t,n,a){if(r[e])r[e].push(t);else{var c,f;if(void 0!==n)for(var i=document.getElementsByTagName("script"),s=0;s<i.length;s++){var l=i[s];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==o+n){c=l;break}}c||(f=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.setAttribute("data-webpack",o+n),c.src=e),r[e]=[t];var d=function(t,n){c.onerror=c.onload=null,clearTimeout(p);var o=r[e];if(delete r[e],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),f&&document.head.appendChild(c)}},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.p="/",a=function(e){return new Promise((function(t,n){var r=u.miniCssF(e),o=u.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(c=n[r]).getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(o===e||o===t))return c}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){var c;if((o=(c=a[r]).getAttribute("data-href"))===e||o===t)return c}}(r,o))return t();!function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var c=a&&("load"===a.type?"missing":a.type),f=a&&a.target&&a.target.href||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+f+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=c,i.request=f,o.parentNode.removeChild(o),r(i)}},o.href=t,document.head.appendChild(o)}(e,o,t,n)}))},c={658:0},u.f.miniCss=function(e,t){c[e]?t.push(c[e]):0!==c[e]&&{532:1}[e]&&t.push(c[e]=a(e).then((function(){c[e]=0}),(function(t){throw delete c[e],t})))},function(){var e={658:0};u.f.j=function(t,n){var r=u.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(532|658)$/.test(t))e[t]=0;else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var a=u.p+u.u(t),c=new Error;u.l(a,(function(n){if(u.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,r[1](c)}}),"chunk-"+t,t)}},u.F.j=function(t){if(!(u.o(e,t)&&void 0!==e[t]||/^(532|658)$/.test(t))){e[t]=null;var n=document.createElement("link");u.nc&&n.setAttribute("nonce",u.nc),n.rel="prefetch",n.as="script",n.href=u.p+u.u(t),document.head.appendChild(n)}},u.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,a=n[0],c=n[1],f=n[2],i=0;if(a.some((function(t){return 0!==e[t]}))){for(r in c)u.o(c,r)&&(u.m[r]=c[r]);if(f)var s=f(u)}for(t&&t(n);i<a.length;i++)o=a[i],u.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return u.O(s)},n=self.webpackChunk_elegantstack_gatsby_starter_flexiblog_news=self.webpackChunk_elegantstack_gatsby_starter_flexiblog_news||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),f={7:[636],142:[636],575:[636],621:[636,334,104,639,716]},u.f.prefetch=function(e,t){Promise.all(t).then((function(){var t=f[e];Array.isArray(t)&&t.map(u.E)}))}}();
//# sourceMappingURL=webpack-runtime-702f76a2179e8a8cd806.js.map