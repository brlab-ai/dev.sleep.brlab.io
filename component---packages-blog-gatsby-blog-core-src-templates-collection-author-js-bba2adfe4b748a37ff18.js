"use strict";(self.webpackChunk_elegantstack_gatsby_starter_flexiblog_news=self.webpackChunk_elegantstack_gatsby_starter_flexiblog_news||[]).push([[7],{8676:function(t){t.exports=function(t,e){e=e||JSON.stringify;for(var r=[],n={},i=0;i<t.length;i++){var o=t[i],a=e(o);n[a]||(r.push(o),n[a]=!0)}return r}},7002:function(t,e,r){r.r(e),r.d(e,{default:function(){return Z}});var n=r(5773),i=r(808),o=(r(7378),r(3785)),a=r(3095),l=r(5119),s=r(5446),u=r(9835),c=r(8692),d=r(6138),f=r(9365),p=r(559),g=["data"],Z=function(t){var e=t.data,r=e.posts,Z=e.collectionInfo,b=(0,i.Z)(t,g),x=(0,f.$)().t;return(0,p.tZ)(o.Ar,b,(0,p.tZ)(c.Z,{title:Z.name,description:Z.description}),(0,p.tZ)(u.Z,null),(0,p.tZ)(o.Kq,{effectProps:{effect:"fadeInDown"}},(0,p.tZ)(a.Z,{header:x("Published by Author"),totalCount:r.totalCount})),(0,p.tZ)(u.Z,null),(0,p.tZ)(o.Kq,null,(0,p.tZ)(o.or,null,(0,p.tZ)(d.Z,{author:Z}),(0,p.tZ)(u.Z,null),r.nodes&&(0,p.tZ)(s.Z,{nodes:r.nodes,variant:["horizontal-md","vertical"],columns:[1,2,3,3]}))),(0,p.tZ)(u.Z,null),(0,p.tZ)(o.jS,null,(0,p.tZ)(l.Z,(0,n.Z)({},r.pageInfo,Z))))}},3359:function(t,e,r){r.d(e,{Z:function(){return Z}});var n=r(4649),i=(r(7378),r(7192)),o=r(8945),a=r(1025),l=r(1115),s=r(7314),u=r(559);function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f=function(t){return.35*t+"rem"},p={wrapper:{position:"relative",zIndex:2,textAlign:"center",mb:f(3)},pattern:{backgroundSize:"8rem",opacity:.15},circle:function(t){var e=t.width;return{width:[f(30),"full"],height:"full",maxWidth:e,borderRadius:"full",position:"absolute",transform:"translate(-50%)  scale(0.98)",left:"50%",top:f(3),bg:"alpha"}},arc:function(t){var e=t.width;return{width:[f(30),"full"],height:"full",maxWidth:e,borderRadius:"full",position:"absolute",zIndex:2,left:"50%",transform:"translate(-50%)",mt:f(-1),ml:f(-2),boxShadow:function(t){return"\n\t\t\t"+f(2)+"\n\t\t\t"+f(4)+"\n\t\t\t"+t.colors.omegaLight+"\n\t\t"}}},imageWrapper:{mx:"auto",img:{borderRadius:"0 0 9999px 9999px"}}},g=function(t){var e=t.avatar,r=t.withPattern,n=t.patternStyles,c=void 0===n?{}:n,f=t.size,g=t.width,Z=t.loading,b=t.alt,x=e&&(0,s.Z)(e,f);return x?(g=g||x.width,(0,u.tZ)(o.xu,{sx:p.wrapper},(0,u.tZ)(o.xu,null,r&&(0,u.tZ)(l.Z,{sx:d(d({},p.pattern),c)}),(0,u.tZ)(o.xu,{sx:p.circle({width:g})}),(0,u.tZ)(o.xu,{sx:p.arc({width:g})}),(0,u.tZ)(i.G,{image:x,alt:b,loading:Z,css:(0,a.i)(p.imageWrapper)})))):null},Z=g;g.defaultProps={size:"regular",withPattern:!1}},5446:function(t,e,r){r.d(e,{Z:function(){return S}});var n=r(5773),i=r(808),o=r(7378),a=r(8945),l=r(2923),s=r(5302),u=r(8676),c=r.n(u),d=r(7375),f=r(4649),p=r(5987),g=r(1025),Z=r(7566),b={slide:{width:"full",".slick-slide":{transition:"all 600ms ease",opacity:1,transform:[null,"scale(1)"],transformOrigin:"left"},".slick-slide.slick-active + :not(.slick-active)":{opacity:[null,0],transform:[null,"scale(0.7)"]},".slick-track":{left:"0 !important"}},fade:{width:"full",".slick-slide:not(.slick-active)":{left:"-9999px !important"},".slick-track":{display:"flex",alignItems:"center",left:"0 !important"}},controlBottom:{".slick-prev, .slick-next":{top:"auto",bottom:3,left:"50%",transform:"translate(-125%, 0)"},".slick-next":{ml:5},".slick-dots":{textAlign:"center",width:["full","auto"],top:["100%","auto"],bottom:0},".slick-dots li":{verticalAlign:"middle"}},controlCenter:{".slick-prev, .slick-next":{top:"50%",left:"50%",transform:"translate(-125%, -50%)"},".slick-next":{ml:5},".slick-dots":{textAlign:"center",width:["full","auto"],top:["100%","auto"],bottom:4,right:4}},controlOver:{width:"full",".slick-prev, .slick-next":{top:"auto",bottom:[-2,3],left:[4,6]},".slick-next":{ml:5},".slick-dots":{textAlign:"center",width:"auto",top:["auto",5],bottom:[3,"auto"],left:[2,4],p:0,ml:3},".slick-dots li":{display:["inline-block","block"]},".slick-dots li.slick-active button":{bg:"alpha"}}},x=r(72),v=r(559);function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){(0,f.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var k=(0,x.ZP)((function(){return r.e(636).then(r.bind(r,2324))})),w=o.forwardRef((function(t,e){var r=t.columns,i=t.slidesToScroll,o=t.smoothAutoScroll,l=t.autoPlay,s=t.autoplaySpeed,u=t.fade,c=t.dots,d=t.arrows,f=t.centerMode,x=t.centerPadding,h=t.controlPosition,w=t.beforeChange,y=t.children,O=(0,p.B7)(),P={slidesToScroll:1,autoplay:!0,cssEase:"linear"},j={centerMode:!u,centerPadding:"40px",swipeToSlide:!0,arrows:!1,dots:!(!c||!u)},S=O.theme.breakpoints.map((function(t,e){var n=r[e>=r.length?r.length-1:e],o=i[e>=i.length?i.length-1:e];return{breakpoint:parseInt(t),settings:m({slidesToShow:n,slidesToScroll:o},0===e?j:{})}})),C={ref:e,beforeChange:w,slidesToShow:r[r.length-1],slidesToScroll:i[i.length-1],speed:800,dots:c,arrows:d,centerMode:f,centerPadding:x,infinite:!0,cssEase:u?"ease-out":"cubic-bezier(0.23, 1, 0.32, 1)",fade:u,responsive:S,css:(0,g.i)(m(m(m(m({},u?b.fade:b.slide),"bottom"===h&&b.controlBottom),"center"===h&&b.controlCenter),"over"===h&&b.controlOver)),prevArrow:(0,v.tZ)(a.hU,{sx:b.arrowPrev},(0,v.tZ)(Z.bUI,null)),nextArrow:(0,v.tZ)(a.hU,{sx:b.arrowNext},(0,v.tZ)(Z.Dli,null))};o&&(C=m(m(m({},C),P),{},{speed:1e4,autoplaySpeed:0,arrows:!1,dots:!1})),!o&&l&&(C=m(m(m({},C),P),{},{speed:300,autoplaySpeed:s}));var D=y.slice(0,r[r.length-1]);return(0,v.tZ)(k,(0,n.Z)({},C,{fallback:D}),y)})),y=w;w.defaultProps={fade:!1,dots:!0,arrows:!0,centerMode:!1,centerPadding:"50px",autoPlay:!1,autoplaySpeed:3e3,smoothAutoScroll:!1,slidesToScroll:[1],rows:1,controlPosition:"sides"};var O=r(9817),P=["nodes","variant","title","withTitleLink","limit","skip","distinct","slider","aside","asNavFor","loading"],j=o.forwardRef((function(t,e){var r=t.nodes,o=t.variant,u=t.title,f=t.withTitleLink,p=t.limit,g=t.skip,Z=t.distinct,b=t.slider,x=t.aside,h=t.asNavFor,m=t.loading,k=(0,i.Z)(t,P),w=function(t,e){var r=e.limit,n=e.skip,i=e.distinct;if(!t)return null;if(!r&&!n&&!i)return t;var o=t;return i&&(o=c()(o,(function(t){return t.id}))),n&&(o=o.slice(n)),r&&(o=o.slice(0,r)),o}(r,{distinct:Z,limit:p,skip:g});if(!w||!w.length)return null;var j=f?w[0].category&&w[0].category.slug:"",S=u&&""+(0,s.Z)(w.map((function(t){return t.id})).join()),C=(0,l.Z)(b?"lists.cards.slider":"lists.cards.fixed",o),D=function(t){h&&h.current&&(h.current.slickPause(),h.current.slickGoTo(t))},z=w.map((function(e,r){return(0,v.tZ)(O.Z,(0,n.Z)({key:e.id,variant:o,onMouseOver:function(){return D(r)},onFocus:function(){return D(r)},loading:t.fade?0===r?m:void 0:m},e,k))})),A=function(){return(0,v.tZ)(a.xu,{sx:{variant:C}},b?(0,v.tZ)(y,(0,n.Z)({ref:e},k),z):z)};return u?(0,v.tZ)(d.Z,{title:u,titleLink:j,key:S,aside:x},(0,v.tZ)(A,null)):(0,v.tZ)(A,null)})),S=j;j.defaultProps={variant:"vertical",columns:[1],aside:!1}},3095:function(t,e,r){r.d(e,{Z:function(){return a}});r(7378);var n=r(8945),i=r(559),o={count:{fontSize:4},subheader:{fontWeight:"body",color:"omegaDark"},runninghead:{fontWeight:"body",color:"omegaDark",mb:0}},a=function(t){var e=t.header,r=t.subheader,a=t.running,l=t.totalCount;return(0,i.tZ)("div",null,(0,i.tZ)(n.X6,{variant:"h1",as:"h1"},e," ",l&&(0,i.tZ)(n.Ct,{variant:"tag-white",sx:o.count}," ",l)),r&&(0,i.tZ)(n.xv,{variant:"h3",sx:o.subheader},r),a&&(0,i.tZ)(n.xv,{variant:"h4",sx:o.runninghead},a))}},5119:function(t,e,r){r.d(e,{Z:function(){return f}});var n=r(4649),i=(r(7378),r(7296)),o=r(8945),a=r(7566),l=function(t){return t.replace(/\/*$/,"/")},s=r(559);function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var d={wrapper:{justifyContent:"space-between",alignItems:"center",textAlign:"center",borderRadius:"full",bg:"contentBg",maxWidth:["none",500],mx:"auto",p:1},item:{width:"1/3"},number:{py:2},button:{minWidth:"full"}},f=function(t){var e=t.currentPage,r=t.pageCount,n=t.hasPreviousPage,u=t.hasNextPage,f=t.basePath,p=void 0===f?"":f,g=t.slug;if(!u&&!n)return"";var Z=l(p+(void 0===g?"":g)),b=l(Z+"page"),x=e>=3?""+b+(e-1):Z,v=""+b+(e+1);return(0,s.tZ)(o.kC,{sx:d.wrapper},(0,s.tZ)(o.xu,{sx:d.item},n&&(0,s.tZ)(o.zx,{variant:"mute",as:i.Link,to:x,sx:d.button},(0,s.tZ)(a.bUI,null),"Previous")),(0,s.tZ)(o.xu,{sx:c(c({},d.item),d.number)},"Page ",(0,s.tZ)("strong",null,e)," of ",(0,s.tZ)("strong",null,r)),(0,s.tZ)(o.xu,{sx:d.item},u&&(0,s.tZ)(o.zx,{variant:"dark",as:i.Link,to:v,sx:d.button},"Next",(0,s.tZ)(a.Dli,null))))}},6138:function(t,e,r){r(7378);var n=r(7296),i=r(8945),o=r(1115),a=r(3359),l=r(9642),s=r(2551),u=r(9365),c=r(559),d=r(7268).localizedUrl,f={card:{position:"relative"},wrapper:{flexDirection:["column","row"],position:"relative",zIndex:3},avatarColumn:{flexBasis:"1/3"},infoColumn:{flexBasis:"2/3"},innerBox:{flexBasis:"1/2",flexGrow:1,px:[0,3],mt:[3,0]},subheader:{color:"omegaDark"},name:{textAlign:["center","left"],mt:[3,0],px:3},bio:{textAlign:["center","left"]},socialList:{a:{m:0}},link:{position:"absolute",top:10,right:10,zIndex:3},pattern:{borderRadius:"lg"},gradient:{size:"full",borderRadius:"lg",position:"absolute",left:0,top:0,zIndex:2,background:[function(t){return"linear-gradient(0deg, "+t.colors.contentBg+" 20%, rgba(255, 255, 255, 0) 80%)"},function(t){return"linear-gradient(270deg, "+t.colors.contentBg+" 20%, rgba(255, 255, 255, 0) 100%)"}]}},p=function(t){var e=t.children;return(0,c.tZ)(i.X6,{variant:"h4",sx:f.subheader},e)},g=function(t){var e=t.name,r=t.thumbnail,o=t.slug,l=(0,u.$)().i18n;return r?(0,c.tZ)(i.xu,null,(0,c.tZ)(i.rU,{as:n.Link,to:d({url:o,locale:l.language}),"aria-label":e},(0,c.tZ)(a.Z,{avatar:r,alt:e}))):null},Z=function(t){var e=t.name,r=t.slug,o=(0,u.$)().i18n;return(0,c.tZ)(i.xu,{sx:f.name},(0,c.tZ)(i.X6,{variant:"h3"},(0,c.tZ)(i.rU,{as:n.Link,to:d({url:r,locale:o.language})},e)))},b=function(t){var e=t.title,r=t.description;return(0,c.tZ)(i.xu,{sx:f.bio},(0,c.tZ)(p,null,e),(0,c.tZ)(i.xv,null,r))},x=function(t){var e=t.skills;return e?(0,c.tZ)(i.xu,{sx:f.innerBox},(0,c.tZ)(p,null,"Expertise"),e.map((function(t){return(0,c.tZ)(i.xv,{key:"skill-"+t},t)}))):null},v=function(t){var e=t.social;return e?(0,c.tZ)(i.xu,{sx:f.innerBox},(0,c.tZ)(p,null,"Social Media"),(0,c.tZ)(l.Z,{variant:"vertical",items:(0,s.Z)(e),wrapperStyle:f.socialList})):null};e.Z=function(t){var e=t.author,r=t.withLink;if(!e)return null;var a=e.skills,l=e.social,s=(0,u.$)(),p=s.t,h=s.i18n;return(0,c.tZ)(i.Zb,{variant:"paper",sx:f.card},(0,c.tZ)(i.kC,{sx:f.wrapper},(0,c.tZ)(i.xu,{sx:f.avatarColumn},(0,c.tZ)(g,e)),(0,c.tZ)(i.xu,{sx:f.infoColumn},(0,c.tZ)(Z,e),(0,c.tZ)(i.kC,{sx:f.wrapper},(0,c.tZ)(i.xu,{sx:f.innerBox},(0,c.tZ)(b,e)),(l||a)&&(0,c.tZ)(i.xu,{sx:f.innerBox},(0,c.tZ)(i.kC,null,(0,c.tZ)(x,e),(0,c.tZ)(v,e)))))),r&&(0,c.tZ)(i.Ct,{variant:"tag",as:n.Link,to:d({url:e.slug,locale:h.language}),sx:f.link},p("View Posts")),(0,c.tZ)(i.xu,{sx:f.gradient}),(0,c.tZ)(o.Z,{sx:f.pattern}))}}}]);
//# sourceMappingURL=component---packages-blog-gatsby-blog-core-src-templates-collection-author-js-bba2adfe4b748a37ff18.js.map