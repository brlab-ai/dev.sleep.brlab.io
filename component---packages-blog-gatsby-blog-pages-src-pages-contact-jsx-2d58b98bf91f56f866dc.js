(self.webpackChunk_elegantstack_gatsby_starter_flexiblog_news=self.webpackChunk_elegantstack_gatsby_starter_flexiblog_news||[]).push([[146],{5089:function(t,n,r){var e=r(2086),o=r(930),i=r(9268),u=e.TypeError;t.exports=function(t){if(o(t))return t;throw u(i(t)+" is not a function")}},1449:function(t,n,r){var e=r(2086),o=r(4613),i=r(9268),u=e.TypeError;t.exports=function(t){if(o(t))return t;throw u(i(t)+" is not a constructor")}},6112:function(t,n,r){var e=r(2086),o=r(8759),i=e.String,u=e.TypeError;t.exports=function(t){if(o(t))return t;throw u(i(t)+" is not an object")}},6198:function(t,n,r){var e=r(4088),o=r(7740),i=r(2871),u=function(t){return function(n,r,u){var c,a=e(n),f=i(a),s=o(u,f);if(t&&r!=r){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},2306:function(t,n,r){var e=r(8240),o=e({}.toString),i=e("".slice);t.exports=function(t){return i(o(t),8,-1)}},375:function(t,n,r){var e=r(2086),o=r(2371),i=r(930),u=r(2306),c=r(211)("toStringTag"),a=e.Object,f="Arguments"==u(function(){return arguments}());t.exports=o?u:function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(r){}}(n=a(t),c))?r:f?u(n):"Object"==(e=u(n))&&i(n.callee)?"Arguments":e}},8474:function(t,n,r){var e=r(9606),o=r(6095),i=r(4399),u=r(7826);t.exports=function(t,n,r){for(var c=o(n),a=u.f,f=i.f,s=0;s<c.length;s++){var l=c[s];e(t,l)||r&&e(r,l)||a(t,l,f(n,l))}}},2585:function(t,n,r){var e=r(5283),o=r(7826),i=r(5736);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},5736:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},9720:function(t,n,r){"use strict";var e=r(2258),o=r(7826),i=r(5736);t.exports=function(t,n,r){var u=e(n);u in t?o.f(t,u,i(0,r)):t[u]=r}},1343:function(t,n,r){var e=r(930),o=r(2585),i=r(3712),u=r(9444);t.exports=function(t,n,r,c){c||(c={});var a=c.enumerable,f=void 0!==c.name?c.name:n;return e(r)&&i(r,f,c),c.global?a?t[n]=r:u(n,r):(c.unsafe?t[n]&&(a=!0):delete t[n],a?t[n]=r:o(t,n,r)),t}},9444:function(t,n,r){var e=r(2086),o=Object.defineProperty;t.exports=function(t,n){try{o(e,t,{value:n,configurable:!0,writable:!0})}catch(r){e[t]=n}return n}},5283:function(t,n,r){var e=r(3677);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},821:function(t,n,r){var e=r(2086),o=r(8759),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},4999:function(t,n,r){var e=r(563);t.exports=e("navigator","userAgent")||""},1448:function(t,n,r){var e,o,i=r(2086),u=r(4999),c=i.process,a=i.Deno,f=c&&c.versions||a&&a.version,s=f&&f.v8;s&&(o=(e=s.split("."))[0]>0&&e[0]<4?1:+(e[0]+e[1])),!o&&u&&(!(e=u.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=u.match(/Chrome\/(\d+)/))&&(o=+e[1]),t.exports=o},8684:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1695:function(t,n,r){var e=r(2086),o=r(4399).f,i=r(2585),u=r(1343),c=r(9444),a=r(8474),f=r(7189);t.exports=function(t,n){var r,s,l,p,v,m=t.target,h=t.global,b=t.stat;if(r=h?e:b?e[m]||c(m,{}):(e[m]||{}).prototype)for(s in n){if(p=n[s],l=t.dontCallGetSet?(v=o(r,s))&&v.value:r[s],!f(h?s:m+(b?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(r,s,p,t)}}},3677:function(t){t.exports=function(t){try{return!!t()}catch(n){return!0}}},8516:function(t,n,r){var e=r(8240),o=r(5089),i=r(6059),u=e(e.bind);t.exports=function(t,n){return o(t),void 0===n?t:i?u(t,n):function(){return t.apply(n,arguments)}}},6059:function(t,n,r){var e=r(3677);t.exports=!e((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},9413:function(t,n,r){var e=r(6059),o=Function.prototype.call;t.exports=e?o.bind(o):function(){return o.apply(o,arguments)}},4398:function(t,n,r){var e=r(5283),o=r(9606),i=Function.prototype,u=e&&Object.getOwnPropertyDescriptor,c=o(i,"name"),a=c&&"something"===function(){}.name,f=c&&(!e||e&&u(i,"name").configurable);t.exports={EXISTS:c,PROPER:a,CONFIGURABLE:f}},8240:function(t,n,r){var e=r(6059),o=Function.prototype,i=o.bind,u=o.call,c=e&&i.bind(u,u);t.exports=e?function(t){return t&&c(t)}:function(t){return t&&function(){return u.apply(t,arguments)}}},563:function(t,n,r){var e=r(2086),o=r(930),i=function(t){return o(t)?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t]):e[t]&&e[t][n]}},1667:function(t,n,r){var e=r(375),o=r(2964),i=r(7719),u=r(211)("iterator");t.exports=function(t){if(null!=t)return o(t,u)||o(t,"@@iterator")||i[e(t)]}},3546:function(t,n,r){var e=r(2086),o=r(9413),i=r(5089),u=r(6112),c=r(9268),a=r(1667),f=e.TypeError;t.exports=function(t,n){var r=arguments.length<2?a(t):n;if(i(r))return u(o(r,t));throw f(c(t)+" is not iterable")}},2964:function(t,n,r){var e=r(5089);t.exports=function(t,n){var r=t[n];return null==r?void 0:e(r)}},2086:function(t,n,r){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},9606:function(t,n,r){var e=r(8240),o=r(3060),i=e({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,n){return i(o(t),n)}},7153:function(t){t.exports={}},6761:function(t,n,r){var e=r(5283),o=r(3677),i=r(821);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},5974:function(t,n,r){var e=r(2086),o=r(8240),i=r(3677),u=r(2306),c=e.Object,a=o("".split);t.exports=i((function(){return!c("z").propertyIsEnumerable(0)}))?function(t){return"String"==u(t)?a(t,""):c(t)}:c},9277:function(t,n,r){var e=r(8240),o=r(930),i=r(4489),u=e(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return u(t)}),t.exports=i.inspectSource},3278:function(t,n,r){var e,o,i,u=r(9316),c=r(2086),a=r(8240),f=r(8759),s=r(2585),l=r(9606),p=r(4489),v=r(8944),m=r(7153),h="Object already initialized",b=c.TypeError,y=c.WeakMap;if(u||p.state){var g=p.state||(p.state=new y),x=a(g.get),d=a(g.has),w=a(g.set);e=function(t,n){if(d(g,t))throw new b(h);return n.facade=t,w(g,t,n),n},o=function(t){return x(g,t)||{}},i=function(t){return d(g,t)}}else{var S=v("state");m[S]=!0,e=function(t,n){if(l(t,S))throw new b(h);return n.facade=t,s(t,S,n),n},o=function(t){return l(t,S)?t[S]:{}},i=function(t){return l(t,S)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!f(n)||(r=o(n)).type!==t)throw b("Incompatible receiver, "+t+" required");return r}}}},2814:function(t,n,r){var e=r(211),o=r(7719),i=e("iterator"),u=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||u[i]===t)}},930:function(t){t.exports=function(t){return"function"==typeof t}},4613:function(t,n,r){var e=r(8240),o=r(3677),i=r(930),u=r(375),c=r(563),a=r(9277),f=function(){},s=[],l=c("Reflect","construct"),p=/^\s*(?:class|function)\b/,v=e(p.exec),m=!p.exec(f),h=function(t){if(!i(t))return!1;try{return l(f,s,t),!0}catch(n){return!1}},b=function(t){if(!i(t))return!1;switch(u(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return m||!!v(p,a(t))}catch(n){return!0}};b.sham=!0,t.exports=!l||o((function(){var t;return h(h.call)||!h(Object)||!h((function(){t=!0}))||t}))?b:h},7189:function(t,n,r){var e=r(3677),o=r(930),i=/#|\.prototype\./,u=function(t,n){var r=a[c(t)];return r==s||r!=f&&(o(n)?e(n):!!n)},c=u.normalize=function(t){return String(t).replace(i,".").toLowerCase()},a=u.data={},f=u.NATIVE="N",s=u.POLYFILL="P";t.exports=u},8759:function(t,n,r){var e=r(930);t.exports=function(t){return"object"==typeof t?null!==t:e(t)}},3296:function(t){t.exports=!1},2071:function(t,n,r){var e=r(2086),o=r(563),i=r(930),u=r(5516),c=r(1876),a=e.Object;t.exports=c?function(t){return"symbol"==typeof t}:function(t){var n=o("Symbol");return i(n)&&u(n.prototype,a(t))}},5259:function(t,n,r){var e=r(2086),o=r(8516),i=r(9413),u=r(6112),c=r(9268),a=r(2814),f=r(2871),s=r(5516),l=r(3546),p=r(1667),v=r(6737),m=e.TypeError,h=function(t,n){this.stopped=t,this.result=n},b=h.prototype;t.exports=function(t,n,r){var e,y,g,x,d,w,S,O=r&&r.that,j=!(!r||!r.AS_ENTRIES),Z=!(!r||!r.IS_ITERATOR),P=!(!r||!r.INTERRUPTED),E=o(n,O),_=function(t){return e&&v(e,"normal",t),new h(!0,t)},T=function(t){return j?(u(t),P?E(t[0],t[1],_):E(t[0],t[1])):P?E(t,_):E(t)};if(Z)e=t;else{if(!(y=p(t)))throw m(c(t)+" is not iterable");if(a(y)){for(g=0,x=f(t);x>g;g++)if((d=T(t[g]))&&s(b,d))return d;return new h(!1)}e=l(t,y)}for(w=e.next;!(S=i(w,e)).done;){try{d=T(S.value)}catch(I){v(e,"throw",I)}if("object"==typeof d&&d&&s(b,d))return d}return new h(!1)}},6737:function(t,n,r){var e=r(9413),o=r(6112),i=r(2964);t.exports=function(t,n,r){var u,c;o(t);try{if(!(u=i(t,"return"))){if("throw"===n)throw r;return r}u=e(u,t)}catch(a){c=!0,u=a}if("throw"===n)throw r;if(c)throw u;return o(u),r}},7719:function(t){t.exports={}},2871:function(t,n,r){var e=r(4005);t.exports=function(t){return e(t.length)}},3712:function(t,n,r){var e=r(3677),o=r(930),i=r(9606),u=r(5283),c=r(4398).CONFIGURABLE,a=r(9277),f=r(3278),s=f.enforce,l=f.get,p=Object.defineProperty,v=u&&!e((function(){return 8!==p((function(){}),"length",{value:8}).length})),m=String(String).split("String"),h=t.exports=function(t,n,r){"Symbol("===String(n).slice(0,7)&&(n="["+String(n).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(n="get "+n),r&&r.setter&&(n="set "+n),(!i(t,"name")||c&&t.name!==n)&&p(t,"name",{value:n,configurable:!0}),v&&r&&i(r,"arity")&&t.length!==r.arity&&p(t,"length",{value:r.arity});try{r&&i(r,"constructor")&&r.constructor?u&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(o){}var e=s(t);return i(e,"source")||(e.source=m.join("string"==typeof n?n:"")),t};Function.prototype.toString=h((function(){return o(this)&&l(this).source||a(this)}),"toString")},5681:function(t){var n=Math.ceil,r=Math.floor;t.exports=Math.trunc||function(t){var e=+t;return(e>0?r:n)(e)}},3193:function(t,n,r){var e=r(1448),o=r(3677);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&e&&e<41}))},9316:function(t,n,r){var e=r(2086),o=r(930),i=r(9277),u=e.WeakMap;t.exports=o(u)&&/native code/.test(i(u))},8722:function(t,n,r){"use strict";var e=r(5089),o=function(t){var n,r;this.promise=new t((function(t,e){if(void 0!==n||void 0!==r)throw TypeError("Bad Promise constructor");n=t,r=e})),this.resolve=e(n),this.reject=e(r)};t.exports.f=function(t){return new o(t)}},7826:function(t,n,r){var e=r(2086),o=r(5283),i=r(6761),u=r(8202),c=r(6112),a=r(2258),f=e.TypeError,s=Object.defineProperty,l=Object.getOwnPropertyDescriptor,p="enumerable",v="configurable",m="writable";n.f=o?u?function(t,n,r){if(c(t),n=a(n),c(r),"function"==typeof t&&"prototype"===n&&"value"in r&&m in r&&!r.writable){var e=l(t,n);e&&e.writable&&(t[n]=r.value,r={configurable:v in r?r.configurable:e.configurable,enumerable:p in r?r.enumerable:e.enumerable,writable:!1})}return s(t,n,r)}:s:function(t,n,r){if(c(t),n=a(n),c(r),i)try{return s(t,n,r)}catch(e){}if("get"in r||"set"in r)throw f("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},4399:function(t,n,r){var e=r(5283),o=r(9413),i=r(7446),u=r(5736),c=r(4088),a=r(2258),f=r(9606),s=r(6761),l=Object.getOwnPropertyDescriptor;n.f=e?l:function(t,n){if(t=c(t),n=a(n),s)try{return l(t,n)}catch(r){}if(f(t,n))return u(!o(i.f,t,n),t[n])}},62:function(t,n,r){var e=r(1352),o=r(8684).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},6952:function(t,n){n.f=Object.getOwnPropertySymbols},5516:function(t,n,r){var e=r(8240);t.exports=e({}.isPrototypeOf)},1352:function(t,n,r){var e=r(8240),o=r(9606),i=r(4088),u=r(6198).indexOf,c=r(7153),a=e([].push);t.exports=function(t,n){var r,e=i(t),f=0,s=[];for(r in e)!o(c,r)&&o(e,r)&&a(s,r);for(;n.length>f;)o(e,r=n[f++])&&(~u(s,r)||a(s,r));return s}},7446:function(t,n){"use strict";var r={}.propertyIsEnumerable,e=Object.getOwnPropertyDescriptor,o=e&&!r.call({1:2},1);n.f=o?function(t){var n=e(this,t);return!!n&&n.enumerable}:r},7999:function(t,n,r){var e=r(2086),o=r(9413),i=r(930),u=r(8759),c=e.TypeError;t.exports=function(t,n){var r,e;if("string"===n&&i(r=t.toString)&&!u(e=o(r,t)))return e;if(i(r=t.valueOf)&&!u(e=o(r,t)))return e;if("string"!==n&&i(r=t.toString)&&!u(e=o(r,t)))return e;throw c("Can't convert object to primitive value")}},6095:function(t,n,r){var e=r(563),o=r(8240),i=r(62),u=r(6952),c=r(6112),a=o([].concat);t.exports=e("Reflect","ownKeys")||function(t){var n=i.f(c(t)),r=u.f;return r?a(n,r(t)):n}},1237:function(t,n,r){var e=r(2086);t.exports=e.Promise},880:function(t,n,r){var e=r(6112),o=r(8759),i=r(8722);t.exports=function(t,n){if(e(t),o(n)&&n.constructor===t)return n;var r=i.f(t);return(0,r.resolve)(n),r.promise}},9586:function(t,n,r){var e=r(2086).TypeError;t.exports=function(t){if(null==t)throw e("Can't call method on "+t);return t}},8944:function(t,n,r){var e=r(9197),o=r(5422),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},4489:function(t,n,r){var e=r(2086),o=r(9444),i="__core-js_shared__",u=e[i]||o(i,{});t.exports=u},9197:function(t,n,r){var e=r(3296),o=r(4489);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.22.7",mode:e?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.7/LICENSE",source:"https://github.com/zloirock/core-js"})},8515:function(t,n,r){var e=r(6112),o=r(1449),i=r(211)("species");t.exports=function(t,n){var r,u=e(t).constructor;return void 0===u||null==(r=e(u)[i])?n:o(r)}},7740:function(t,n,r){var e=r(9502),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},4088:function(t,n,r){var e=r(5974),o=r(9586);t.exports=function(t){return e(o(t))}},9502:function(t,n,r){var e=r(5681);t.exports=function(t){var n=+t;return n!=n||0===n?0:e(n)}},4005:function(t,n,r){var e=r(9502),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},3060:function(t,n,r){var e=r(2086),o=r(9586),i=e.Object;t.exports=function(t){return i(o(t))}},1288:function(t,n,r){var e=r(2086),o=r(9413),i=r(8759),u=r(2071),c=r(2964),a=r(7999),f=r(211),s=e.TypeError,l=f("toPrimitive");t.exports=function(t,n){if(!i(t)||u(t))return t;var r,e=c(t,l);if(e){if(void 0===n&&(n="default"),r=o(e,t,n),!i(r)||u(r))return r;throw s("Can't convert object to primitive value")}return void 0===n&&(n="number"),a(t,n)}},2258:function(t,n,r){var e=r(1288),o=r(2071);t.exports=function(t){var n=e(t,"string");return o(n)?n:n+""}},2371:function(t,n,r){var e={};e[r(211)("toStringTag")]="z",t.exports="[object z]"===String(e)},9268:function(t,n,r){var e=r(2086).String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},5422:function(t,n,r){var e=r(8240),o=0,i=Math.random(),u=e(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+u(++o+i,36)}},1876:function(t,n,r){var e=r(3193);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8202:function(t,n,r){var e=r(5283),o=r(3677);t.exports=e&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},211:function(t,n,r){var e=r(2086),o=r(9197),i=r(9606),u=r(5422),c=r(3193),a=r(1876),f=o("wks"),s=e.Symbol,l=s&&s.for,p=a?s:s&&s.withoutSetter||u;t.exports=function(t){if(!i(f,t)||!c&&"string"!=typeof f[t]){var n="Symbol."+t;c&&i(s,t)?f[t]=s[t]:f[t]=a&&l?l(n):p(n)}return f[t]}},1940:function(t,n,r){var e=r(1695),o=r(5259),i=r(9720);e({target:"Object",stat:!0},{fromEntries:function(t){var n={};return o(t,(function(t,r){i(n,t,r)}),{AS_ENTRIES:!0}),n}})},1370:function(t,n,r){"use strict";var e=r(1695),o=r(3296),i=r(1237),u=r(3677),c=r(563),a=r(930),f=r(8515),s=r(880),l=r(1343),p=i&&i.prototype;if(e({target:"Promise",proto:!0,real:!0,forced:!!i&&u((function(){p.finally.call({then:function(){}},(function(){}))}))},{finally:function(t){var n=f(this,c("Promise")),r=a(t);return this.then(r?function(r){return s(n,t()).then((function(){return r}))}:t,r?function(r){return s(n,t()).then((function(){throw r}))}:t)}}),!o&&a(i)){var v=c("Promise").prototype.finally;p.finally!==v&&l(p,"finally",v,{unsafe:!0})}},752:function(t,n,r){"use strict";r.r(n),r.d(n,{default:function(){return m}});var e=r(7378),o=r(3785),i=r(3095),u=r(9835),c=r(8692),a=r(8945),f=r(9365),s=r(559),l=function(t){var n=t.handleSubmit,r=t.submitting,e=t.success,o=(0,f.$)().t;return(0,s.tZ)("form",{onSubmit:n,method:"POST",action:{}.STRAPI_API_URL+"/api/contacts"},!0===e&&(0,s.tZ)(a.v0,{variant:"success"},o("Thank you for contacting us. We'll get back to you soon!")),!1===e&&(0,s.tZ)(a.v0,{variant:"error"},o("Something went wrong. Please try again later!")),(0,s.tZ)(a.xu,{variant:"forms.row"},(0,s.tZ)(a.xu,{variant:"forms.column"},(0,s.tZ)(a.__,{htmlFor:"contact-form-name"},o("Name")),(0,s.tZ)(a.II,{type:"text",id:"contact-form-name",name:"name",required:!0}))),(0,s.tZ)(a.xu,{variant:"forms.row"},(0,s.tZ)(a.xu,{variant:"forms.column"},(0,s.tZ)(a.__,{htmlFor:"contact-form-email"},o("Email")),(0,s.tZ)(a.II,{type:"email",placeholder:"email@example.com",id:"contact-form-email",name:"email",required:!0})),(0,s.tZ)(a.xu,{variant:"forms.column"},(0,s.tZ)(a.__,{htmlFor:"contact-form-phone"},o("Phone Number")),(0,s.tZ)(a.II,{type:"tel",placeholder:"(xxx) xxx-xxxx",id:"contact-form-phone",name:"phone_number"}))),(0,s.tZ)(a.xu,{variant:"forms.row"},(0,s.tZ)(a.__,{htmlFor:"contact-form-subject"},o("Subject")),(0,s.tZ)(a.II,{type:"text",id:"contact-form-subject",name:"title",required:!0})),(0,s.tZ)(a.xu,{variant:"forms.row"},(0,s.tZ)(a.__,{htmlFor:"contact-form-message"},o("Your Message")),(0,s.tZ)(a.gx,{name:"message",id:"contact-form-message"})),(0,s.tZ)(a.zx,{variant:e||r?"disabled":"primary",disabled:e||r,type:"submit",required:!0},o("Submit")," ",r&&(0,s.tZ)(a.$j,{size:"20"})))},p=(r(1940),r(1370),function(){var t=(0,e.useState)(!1),n=t[0],r=t[1],o=(0,e.useState)({}),i=o[0],u=o[1],c=(0,e.useState)(),a=c[0],f=c[1],s=(0,e.useState)(),l=s[0],p=s[1],v=(0,e.useState)(),m=v[0],h=v[1],b=(0,e.useCallback)((function(){var t=new FormData(i),n=new URLSearchParams(l||t).toString();if(i.getAttribute("demo"))setTimeout((function(){f(!0),r(!1)}),1500);else{var e=Object.fromEntries(new URLSearchParams(n));fetch(m||i.action,{method:i.method||"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:e})}).then((function(){i.reset(),f(!0)})).catch((function(t){f(!1)})).finally((function(){r(!1)}))}}),[i]);(0,e.useEffect)((function(){n&&b()}),[n,b]);var y=(0,e.useCallback)((function(){r(!1),f(void 0),p(void 0),h(void 0)}),[]);return{handleSubmit:function(t,n){var e=void 0===n?{}:n,o=e.values,i=e.action;t.preventDefault(),o&&p(o),i&&h(i),u(t.target),r(!0)},submitting:n,success:a,reset:y}}),v=function(){var t=p(),n=t.handleSubmit,r=t.submitting,e=t.success;return(0,s.tZ)(a.Zb,{variant:"paper"},(0,s.tZ)(l,{handleSubmit:n,submitting:r,success:e}))},m=function(t){var n=(0,f.$)().t;return(0,s.tZ)(o.Ar,t,(0,s.tZ)(c.Z,{title:"Contact"}),(0,s.tZ)(u.Z,null),(0,s.tZ)(o.Kq,null,(0,s.tZ)(o.or,null,(0,s.tZ)(i.Z,{header:n("Let's Connect")}),(0,s.tZ)(u.Z,null),(0,s.tZ)(v,null))))}},3095:function(t,n,r){"use strict";r.d(n,{Z:function(){return u}});r(7378);var e=r(8945),o=r(559),i={count:{fontSize:4},subheader:{fontWeight:"body",color:"omegaDark"},runninghead:{fontWeight:"body",color:"omegaDark",mb:0}},u=function(t){var n=t.header,r=t.subheader,u=t.running,c=t.totalCount;return(0,o.tZ)("div",null,(0,o.tZ)(e.X6,{variant:"h1",as:"h1"},n," ",c&&(0,o.tZ)(e.Ct,{variant:"tag-white",sx:i.count}," ",c)),r&&(0,o.tZ)(e.xv,{variant:"h3",sx:i.subheader},r),u&&(0,o.tZ)(e.xv,{variant:"h4",sx:i.runninghead},u))}}}]);
//# sourceMappingURL=component---packages-blog-gatsby-blog-pages-src-pages-contact-jsx-2d58b98bf91f56f866dc.js.map