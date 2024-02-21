"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[815],{622:function(e,t,n){n.d(t,{B:function(){return c}});var r=n(439),a=n(791),c=function(){var e=(0,a.useState)(!1),t=(0,r.Z)(e,2),n=t[0],c=t[1];return{isLoading:n,open:function(){return c(!0)},close:function(){return c(!1)}}}},240:function(e,t,n){n.d(t,{Jh:function(){return p},Mc:function(){return f},_r:function(){return d},qF:function(){return l},wr:function(){return s}});var r=n(861),a=n(757),c=n.n(a),i=n(340),u=n(694);i.Z.defaults.baseURL="https://api.themoviedb.org/3",i.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNThmZmE0NDE4MGExNjIzNTI4M2I4YzYyZGFkYTBjYiIsInN1YiI6IjY1ZDEyN2Q1YWE2NTllMDE4NjQyODM1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5B6314cItycUPZ96dF8XKEGzB2Kk_hOIaTyDuVlAhvc";var o="e58ffa44180a16235283b8c62dada0cb",s=function(){var e=(0,r.Z)(c().mark((function e(){var t,n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/trending/movie/day?language=en-US&api_key=".concat(o));case 3:return t=e.sent,n=t.data,r=n.results,e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),u.Notify.failure("Failed fetch data"),console.log("Failed fetch data: ",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/search/movie?query=".concat(t,"&api_key=").concat(o,"&language=en-EU&page=1&include_adult=false"));case 3:return n=e.sent,r=n.data,a=r.results,e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(0),u.Notify.failure("Failed fetch data"),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/movie/".concat(t,"?api_key=").concat(o));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),u.Notify.failure("Failed fetch data"),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/movie/".concat(t,"/reviews?language=en-EU&page=1&api_key=").concat(o));case 3:return n=e.sent,r=n.data,a=r.results,e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(0),u.Notify.failure("Failed fetch data"),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/movie/".concat(t,"/credits?language=en-EU&api_key=").concat(o));case 3:return n=e.sent,r=n.data,a=r.cast,e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(0),u.Notify.failure("Failed fetch data"),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},815:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=n(433),a=n(861),c=n(439),i=n(757),u=n.n(i),o="TrendingToday_trending_list__pd1Bq",s="TrendingToday_head_title__I-Hgx",l="TrendingToday_movie__E1dAU",f="TrendingToday_movie_image__5SiOn",d="TrendingToday_movie_title__KjGzX",p="TrendingToday_link__L6FvT",h=n(639),v=n(240),g=n(791),_=n(622),m=n(87),y=n(694),x=n(184),Z=function(){var e=(0,_.B)(!1),t=e.open,n=e.close,i=e.isLoading,Z=(0,g.useState)([]),w=(0,c.Z)(Z,2),N=w[0],T=w[1],k=(0,g.useCallback)((0,a.Z)(u().mark((function e(){var a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(),e.prev=1,e.next=4,(0,v.wr)();case 4:a=e.sent,T((0,r.Z)(a)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),y.Notify.failure("Something went wrong, please try again"),console.log("Error here: ",e.t0);case 12:return e.prev=12,setTimeout((function(){n()}),2e3),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,8,12,15]])}))),[]);return(0,g.useEffect)((function(){k()}),[k]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("h1",{className:s,children:"Trending Today"}),i?(0,x.jsx)(h.Z,{isLoading:i}):(0,x.jsx)("ul",{className:o,children:N.map((function(e){return(0,x.jsx)(m.rU,{to:"/movies/".concat(e.id),className:p,children:(0,x.jsxs)("li",{className:l,children:[(0,x.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),className:f,alt:e.title}),(0,x.jsx)("h2",{className:d,children:e.original_title})]},e.id)},e.id)}))})]})},w=function(){return(0,x.jsx)(Z,{})}}}]);
//# sourceMappingURL=815.9fb35bbd.chunk.js.map