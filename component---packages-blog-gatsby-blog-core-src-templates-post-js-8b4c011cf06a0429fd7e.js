(self.webpackChunk_elegantstack_gatsby_starter_flexiblog_news=self.webpackChunk_elegantstack_gatsby_starter_flexiblog_news||[]).push([[621],{9090:function(t,e,r){var n=r(5365);t.exports=function(t){if(Array.isArray(t))return n(t)},t.exports.__esModule=!0,t.exports.default=t.exports},639:function(t,e,r){var n=r(7276),i=r(7321);function o(e,r,a){return i()?(t.exports=o=Reflect.construct.bind(),t.exports.__esModule=!0,t.exports.default=t.exports):(t.exports=o=function(t,e,r){var i=[null];i.push.apply(i,e);var o=new(Function.bind.apply(t,i));return r&&n(o,r.prototype),o},t.exports.__esModule=!0,t.exports.default=t.exports),o.apply(null,arguments)}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},7321:function(t){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}},t.exports.__esModule=!0,t.exports.default=t.exports},5929:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},6292:function(t,e,r){var n=r(9090),i=r(8850),o=r(4595),a=r(5929);t.exports=function(t){return n(t)||i(t)||o(t)||a()},t.exports.__esModule=!0,t.exports.default=t.exports},8676:function(t){"use strict";t.exports=function(t,e){e=e||JSON.stringify;for(var r=[],n={},i=0;i<t.length;i++){var o=t[i],a=e(o);n[a]||(r.push(o),n[a]=!0)}return r}},6319:function(t,e,r){var n=r(6377);t.exports={MDXRenderer:n}},6377:function(t,e,r){var n=r(639),i=r(6292),o=r(5526),a=r(5600),l=["scope","children"];function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var u=r(7378),p=r(1368).mdx,f=r(2663).useMDXScope;t.exports=function(t){var e=t.scope,r=t.children,o=a(t,l),s=f(e),d=u.useMemo((function(){if(!r)return null;var t=c({React:u,mdx:p},s),e=Object.keys(t),o=e.map((function(e){return t[e]}));return n(Function,["_fn"].concat(i(e),[""+r])).apply(void 0,[{}].concat(i(o)))}),[r,e]);return u.createElement(d,c({},o))}},2183:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return dt}});var n=r(5773),i=r(126),o=r(808),a=r(7378),l=r(8945),s=r(3785),c=r(5446),u=r(9835),p=r(559),f=function(t){var e=t.children;return(0,p.tZ)(l.W2,{variant:"sticky"},e)},d=r(8692),b=r(7296),g=r(9642),m=r(7375),v=r(3359),Z=r(2551),h=["author","omitSocial"],x={wrapper:{textAlign:"center"},avatarWrapper:{mb:4},title:{color:"omegaDark"}},y=function(t){var e=t.author,r=t.omitSocial,i=(0,o.Z)(t,h);return e?(0,p.tZ)(m.Z,(0,n.Z)({aside:!0,title:"The Author"},i),(0,p.tZ)(l.Zb,{variant:"paper"},(0,p.tZ)(l.xu,{sx:x.wrapper},e.thumbnail&&(0,p.tZ)(l.xu,{sx:x.avatarWrapper},(0,p.tZ)(l.rU,{as:b.Link,to:e.slug,"aria-label":e.name},(0,p.tZ)(v.Z,{avatar:e.thumbnail,alt:e.name,withPattern:!0}))),(0,p.tZ)(l.rU,{as:b.Link,to:e.slug},(0,p.tZ)(l.X6,{variant:"h3"},e.name)),(0,p.tZ)(l.X6,{variant:"h4",sx:x.title},e.title),!r&&e.social&&(0,p.tZ)(g.Z,{variant:"horizontal",items:(0,Z.Z)(e.social),iconOnly:!0})))):""},O={item:{display:"block","& + &":{mt:3}},number:{color:"alpha",display:"flex",alignItems:"center",justifyContent:"center",bg:"omegaLighter",borderRadius:"full",size:25,mr:2,mb:0},text:{flex:"1",lineHeight:"heading",mb:0}},w=function(t){var e=t.tableOfContents.items,r=void 0===e?[]:e;return r.length>1?(0,p.tZ)(m.Z,{aside:!0,title:"Table Of Contents"},(0,p.tZ)(l.Zb,{variant:"paper"},r.map((function(t,e){return(0,p.tZ)(l.rU,{key:"item-"+e,as:b.Link,to:t.url,variant:"vertical",sx:O.item},(0,p.tZ)(l.kC,{sx:{alignItems:"baseline"}},(0,p.tZ)(l.X6,{variant:"h5",as:"div",sx:O.number},e+1),(0,p.tZ)(l.xv,{sx:O.text},t.title)))})))):null},P=r(72),j=(0,P.ZP)((function(){return r.e(334).then(r.bind(r,4334))})),k=(0,P.ZP)((function(){return r.e(104).then(r.bind(r,6104))})),D=(0,P.ZP)((function(){return r.e(639).then(r.bind(r,5639))})),S=(0,P.ZP)((function(){return r.e(716).then(r.bind(r,716))})),C=r(4649),_=r(3084),R=r(3095);function E(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function A(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?E(Object(r),!0).forEach((function(e){(0,C.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var M={item:{display:"inline-block"}},T=function(t){var e=t.title,r=t.author,n=t.date,i=t.timeToRead,o=t.category,a=(0,p.tZ)(_.Z,null,r&&r.slug&&(0,p.tZ)(l.xv,{sx:M.item},"By ",(0,p.tZ)(l.rU,{variant:"mute",as:b.Link,to:r.slug},(0,p.tZ)("strong",null,r.name))),o&&o.slug&&(0,p.tZ)(l.xv,{sx:M.item},"Published in ",(0,p.tZ)(l.rU,{variant:"mute",as:b.Link,to:o.slug},(0,p.tZ)("strong",null,o.name))),n&&(0,p.tZ)(l.xv,{sx:M.item},n),i&&(0,p.tZ)(l.xv,{sx:A(A({},M.item),{},{color:"error"})},(0,p.tZ)("strong",null,i," min read")));return(0,p.tZ)(R.Z,{header:e,running:a})},L=r(7192),z=r(1025),I=r(7314);function U(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function W(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?U(Object(r),!0).forEach((function(e){(0,C.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var B={regular:{minHeight:"23rem",img:{borderRadius:"lg"}},wide:{img:{borderRadius:"lg"}},inCard:{mt:-4,mx:-4,img:{borderRadius:function(t){return t.radii.lg+" "+t.radii.lg+" 0 0"}}},inCardLarge:{mt:[-4,-5],mx:[-4,-5],img:{borderRadius:function(t){return t.radii.lg+" "+t.radii.lg+" 0 0"}}}},X=function(t){var e=t.title,r=t.thumbnail,n=t.wide,i=t.full,o=t.inCard,l=t.inCardLarge;if(!r)return null;var s=(n?"wide":i&&"full")||"regular",c=(0,I.Z)(r,"hero");return(0,p.tZ)(a.Fragment,null,(0,p.tZ)(L.G,{image:c,alt:e,css:(0,z.i)(W(W(W({},B[s]),o&&B.inCard),l&&B.inCardLarge)),imgStyle:"wide"===s||"full"===s?B.full:void 0}),(0,p.tZ)(u.Z,{space:3}))},F=r(6319),N=r(5013),q=r(7566),G={heading:{svg:{visibility:"hidden",size:"icon.xs",position:"absolute",top:"50%",transform:"translate(0,-50%)",pl:2},":hover svg":{visibility:"visible"},pointerEvents:"painted"},link:{position:"relative"}},K=function(t){return function(e){return(0,p.tZ)(t,(0,n.Z)({},e,{css:(0,z.i)(G.heading)}),(0,p.tZ)(l.rU,{href:"#"+e.id,variant:"text."+t,sx:G.link},e.children,(0,p.tZ)(q.gjK,null)))}},H={h1:K("h1"),h2:K("h2"),h3:K("h3")},J=function(t){return(0,p.tZ)("figure",(0,n.Z)({},t,{css:(0,z.i)((function(t){return t.styles.figure}))}),t.children)},Q=function(t){return(0,p.tZ)("figcaption",(0,n.Z)({},t,{css:(0,z.i)((function(t){return t.styles.figcaption}))}),t.children)},Y=(0,P.ZP)((function(){return r.e(482).then(r.bind(r,482))}));function $(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var V=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?$(Object(r),!0).forEach((function(e){(0,C.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({figure:J,figcaption:Q,pre:function(t){return t.children},code:function(t){return(0,p.tZ)(Y,(0,n.Z)({},t,{fallback:(0,p.tZ)(N.RQ.pre,null,t.children)}))}},H),tt=function(t){var e=t.body;return(0,p.tZ)(N.Zo,{components:V},(0,p.tZ)(F.MDXRenderer,null,e))},et={wrapper:{alignItems:"center"},heading:{color:"omegaDark",mr:3,mb:0}},rt=function(t){var e=t.tags;return e&&e.length>0?(0,p.tZ)(l.kC,{sx:et.wrapper},(0,p.tZ)(l.X6,{variant:"h5",sx:et.heading},"Tags"),(0,p.tZ)(l.xu,{variant:"lists.badges"},e.map((function(t){var e=t.id,r=t.name,n=t.slug;return(0,p.tZ)(l.Ct,{variant:"tag",key:e,as:b.Link,to:n},r)})))):null},nt={flex:{alignItems:["flex-start","center"],justifyContent:"space-between",flexDirection:["column","row"],"& > div + div":{mt:[3,0],flexBasis:"1/2",justifyContent:"flex-end"}}},it=function(t){return(0,p.tZ)(l.xu,null,(0,p.tZ)(l.iz,null),(0,p.tZ)(l.kC,{sx:nt.flex},(0,p.tZ)(rt,t),(0,p.tZ)(S,t)))},ot=r(9365);function at(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function lt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?at(Object(r),!0).forEach((function(e){(0,C.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):at(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var st={wrapper:{bg:"omegaLight",borderRadius:"bottom",color:"omegaDark",borderStyle:"solid",borderWidth:"md",borderColor:"contentBg",mx:-4,mb:-4,mt:4},flex:{flexWrap:"wrap",justifyContent:"space-between",p:4},item:{flexBasis:"50%"},next:{textAlign:"right"},guide:{mb:2}},ct=function(t){var e=t.title,r=t.post;return(0,p.tZ)(a.Fragment,null,(0,p.tZ)(l.xv,{sx:st.guide},e),(0,p.tZ)(l.X6,{variant:"h4",as:b.Link,to:r.slug},r.title))},ut=function(t){var e=t.previous,r=t.next;if(!r&&!e)return null;var n=(0,ot.$)().t;return(0,p.tZ)(l.xu,{sx:st.wrapper},(0,p.tZ)(l.kC,{sx:st.flex},(0,p.tZ)(l.xu,{sx:st.item},e&&(0,p.tZ)(ct,{post:e,title:n("Previous Article")})),(0,p.tZ)(l.xu,{sx:lt(lt({},st.item),st.next)},r&&(0,p.tZ)(ct,{post:r,title:n("Next Article")}))))},pt=["data"],ft=function(t){var e,r=t.data,b=r.post,g=r.tagCategoryPosts,m=r.tagPosts,v=r.categoryPosts,Z=r.previous,h=r.next,x=(0,o.Z)(t,pt),O=[].concat((0,i.Z)(g?g.nodes:[]),(0,i.Z)(m?m.nodes:[]),(0,i.Z)(v?v.nodes:[])),P=x.pageContext,S=(P=void 0===P?{}:P).services,C=void 0===S?{}:S,_=P.siteUrl;return(0,p.tZ)(s.Ar,x,(0,p.tZ)(d.Z,(0,n.Z)({},b,{siteUrl:_})),(0,p.tZ)(u.Z,null),(0,p.tZ)(s.Kq,{effectProps:{effect:"fadeInDown"}},(0,p.tZ)(T,b)),(0,p.tZ)(u.Z,null),(0,p.tZ)(s.Kq,{effectProps:{fraction:0}},(0,p.tZ)(s.or,null,(0,p.tZ)(l.Zb,{variant:"paper"},(0,p.tZ)(X,(0,n.Z)({},b,{inCard:!0})),(0,p.tZ)(tt,b),(0,p.tZ)(it,(0,n.Z)({},b,{location:x.location})),C.disqus&&(0,p.tZ)(j,b),C.graphComment&&(0,p.tZ)(D,b),C.facebookComment&&(0,p.tZ)(k,(0,n.Z)({},b,{siteUrl:_})),(0,p.tZ)(ut,{previous:Z,next:h}))),(0,p.tZ)(s.YE,null,(0,p.tZ)(y,{author:b.author,omitTitle:!0}),(0,p.tZ)(u.Z,null),(0,p.tZ)(f,null,(null===(e=b.tableOfContents)||void 0===e?void 0:e.items)&&(0,p.tZ)(a.Fragment,null,(0,p.tZ)(w,b),(0,p.tZ)(u.Z,null)),b.category&&(0,p.tZ)(c.Z,{title:"Related Posts",nodes:O,variant:"horizontal-aside",limit:6,omitMedia:!0,omitCategory:!0,distinct:!0,aside:!0})))))},dt=ft},3359:function(t,e,r){"use strict";r.d(e,{Z:function(){return g}});var n=r(4649),i=(r(7378),r(7192)),o=r(8945),a=r(1025),l=r(1115),s=r(7314),c=r(559);function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f=function(t){return.35*t+"rem"},d={wrapper:{position:"relative",zIndex:2,textAlign:"center",mb:f(3)},pattern:{backgroundSize:"8rem",opacity:.15},circle:function(t){var e=t.width;return{width:[f(30),"full"],height:"full",maxWidth:e,borderRadius:"full",position:"absolute",transform:"translate(-50%)  scale(0.98)",left:"50%",top:f(3),bg:"alpha"}},arc:function(t){var e=t.width;return{width:[f(30),"full"],height:"full",maxWidth:e,borderRadius:"full",position:"absolute",zIndex:2,left:"50%",transform:"translate(-50%)",mt:f(-1),ml:f(-2),boxShadow:function(t){return"\n\t\t\t"+f(2)+"\n\t\t\t"+f(4)+"\n\t\t\t"+t.colors.omegaLight+"\n\t\t"}}},imageWrapper:{mx:"auto",img:{borderRadius:"0 0 9999px 9999px"}}},b=function(t){var e=t.avatar,r=t.withPattern,n=t.patternStyles,u=void 0===n?{}:n,f=t.size,b=t.width,g=t.loading,m=t.alt,v=e&&(0,s.Z)(e,f);return v?(b=b||v.width,(0,c.tZ)(o.xu,{sx:d.wrapper},(0,c.tZ)(o.xu,null,r&&(0,c.tZ)(l.Z,{sx:p(p({},d.pattern),u)}),(0,c.tZ)(o.xu,{sx:d.circle({width:b})}),(0,c.tZ)(o.xu,{sx:d.arc({width:b})}),(0,c.tZ)(i.G,{image:v,alt:m,loading:g,css:(0,a.i)(d.imageWrapper)})))):null},g=b;b.defaultProps={size:"regular",withPattern:!1}},5446:function(t,e,r){"use strict";r.d(e,{Z:function(){return D}});var n=r(5773),i=r(808),o=r(7378),a=r(8945),l=r(2923),s=r(5302),c=r(8676),u=r.n(c),p=r(7375),f=r(4649),d=r(5987),b=r(1025),g=r(7566),m={slide:{width:"full",".slick-slide":{transition:"all 600ms ease",opacity:1,transform:[null,"scale(1)"],transformOrigin:"left"},".slick-slide.slick-active + :not(.slick-active)":{opacity:[null,0],transform:[null,"scale(0.7)"]},".slick-track":{left:"0 !important"}},fade:{width:"full",".slick-slide:not(.slick-active)":{left:"-9999px !important"},".slick-track":{display:"flex",alignItems:"center",left:"0 !important"}},controlBottom:{".slick-prev, .slick-next":{top:"auto",bottom:3,left:"50%",transform:"translate(-125%, 0)"},".slick-next":{ml:5},".slick-dots":{textAlign:"center",width:["full","auto"],top:["100%","auto"],bottom:0},".slick-dots li":{verticalAlign:"middle"}},controlCenter:{".slick-prev, .slick-next":{top:"50%",left:"50%",transform:"translate(-125%, -50%)"},".slick-next":{ml:5},".slick-dots":{textAlign:"center",width:["full","auto"],top:["100%","auto"],bottom:4,right:4}},controlOver:{width:"full",".slick-prev, .slick-next":{top:"auto",bottom:[-2,3],left:[4,6]},".slick-next":{ml:5},".slick-dots":{textAlign:"center",width:"auto",top:["auto",5],bottom:[3,"auto"],left:[2,4],p:0,ml:3},".slick-dots li":{display:["inline-block","block"]},".slick-dots li.slick-active button":{bg:"alpha"}}},v=r(72),Z=r(559);function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function x(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){(0,f.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var y=(0,v.ZP)((function(){return r.e(636).then(r.bind(r,2324))})),O=o.forwardRef((function(t,e){var r=t.columns,i=t.slidesToScroll,o=t.smoothAutoScroll,l=t.autoPlay,s=t.autoplaySpeed,c=t.fade,u=t.dots,p=t.arrows,f=t.centerMode,v=t.centerPadding,h=t.controlPosition,O=t.beforeChange,w=t.children,P=(0,d.B7)(),j={slidesToScroll:1,autoplay:!0,cssEase:"linear"},k={centerMode:!c,centerPadding:"40px",swipeToSlide:!0,arrows:!1,dots:!(!u||!c)},D=P.theme.breakpoints.map((function(t,e){var n=r[e>=r.length?r.length-1:e],o=i[e>=i.length?i.length-1:e];return{breakpoint:parseInt(t),settings:x({slidesToShow:n,slidesToScroll:o},0===e?k:{})}})),S={ref:e,beforeChange:O,slidesToShow:r[r.length-1],slidesToScroll:i[i.length-1],speed:800,dots:u,arrows:p,centerMode:f,centerPadding:v,infinite:!0,cssEase:c?"ease-out":"cubic-bezier(0.23, 1, 0.32, 1)",fade:c,responsive:D,css:(0,b.i)(x(x(x(x({},c?m.fade:m.slide),"bottom"===h&&m.controlBottom),"center"===h&&m.controlCenter),"over"===h&&m.controlOver)),prevArrow:(0,Z.tZ)(a.hU,{sx:m.arrowPrev},(0,Z.tZ)(g.bUI,null)),nextArrow:(0,Z.tZ)(a.hU,{sx:m.arrowNext},(0,Z.tZ)(g.Dli,null))};o&&(S=x(x(x({},S),j),{},{speed:1e4,autoplaySpeed:0,arrows:!1,dots:!1})),!o&&l&&(S=x(x(x({},S),j),{},{speed:300,autoplaySpeed:s}));var C=w.slice(0,r[r.length-1]);return(0,Z.tZ)(y,(0,n.Z)({},S,{fallback:C}),w)})),w=O;O.defaultProps={fade:!1,dots:!0,arrows:!0,centerMode:!1,centerPadding:"50px",autoPlay:!1,autoplaySpeed:3e3,smoothAutoScroll:!1,slidesToScroll:[1],rows:1,controlPosition:"sides"};var P=r(9817),j=["nodes","variant","title","withTitleLink","limit","skip","distinct","slider","aside","asNavFor","loading"],k=o.forwardRef((function(t,e){var r=t.nodes,o=t.variant,c=t.title,f=t.withTitleLink,d=t.limit,b=t.skip,g=t.distinct,m=t.slider,v=t.aside,h=t.asNavFor,x=t.loading,y=(0,i.Z)(t,j),O=function(t,e){var r=e.limit,n=e.skip,i=e.distinct;if(!t)return null;if(!r&&!n&&!i)return t;var o=t;return i&&(o=u()(o,(function(t){return t.id}))),n&&(o=o.slice(n)),r&&(o=o.slice(0,r)),o}(r,{distinct:g,limit:d,skip:b});if(!O||!O.length)return null;var k=f?O[0].category&&O[0].category.slug:"",D=c&&""+(0,s.Z)(O.map((function(t){return t.id})).join()),S=(0,l.Z)(m?"lists.cards.slider":"lists.cards.fixed",o),C=function(t){h&&h.current&&(h.current.slickPause(),h.current.slickGoTo(t))},_=O.map((function(e,r){return(0,Z.tZ)(P.Z,(0,n.Z)({key:e.id,variant:o,onMouseOver:function(){return C(r)},onFocus:function(){return C(r)},loading:t.fade?0===r?x:void 0:x},e,y))})),R=function(){return(0,Z.tZ)(a.xu,{sx:{variant:S}},m?(0,Z.tZ)(w,(0,n.Z)({ref:e},y),_):_)};return c?(0,Z.tZ)(p.Z,{title:c,titleLink:k,key:D,aside:v},(0,Z.tZ)(R,null)):(0,Z.tZ)(R,null)})),D=k;k.defaultProps={variant:"vertical",columns:[1],aside:!1}},3095:function(t,e,r){"use strict";r.d(e,{Z:function(){return a}});r(7378);var n=r(8945),i=r(559),o={count:{fontSize:4},subheader:{fontWeight:"body",color:"omegaDark"},runninghead:{fontWeight:"body",color:"omegaDark",mb:0}},a=function(t){var e=t.header,r=t.subheader,a=t.running,l=t.totalCount;return(0,i.tZ)("div",null,(0,i.tZ)(n.X6,{variant:"h1",as:"h1"},e," ",l&&(0,i.tZ)(n.Ct,{variant:"tag-white",sx:o.count}," ",l)),r&&(0,i.tZ)(n.xv,{variant:"h3",sx:o.subheader},r),a&&(0,i.tZ)(n.xv,{variant:"h4",sx:o.runninghead},a))}}}]);
//# sourceMappingURL=component---packages-blog-gatsby-blog-core-src-templates-post-js-8b4c011cf06a0429fd7e.js.map