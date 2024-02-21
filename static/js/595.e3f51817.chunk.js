"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[595],{622:function(e,t,n){n.d(t,{B:function(){return i}});var r=n(439),a=n(791),i=function(){var e=(0,a.useState)(!1),t=(0,r.Z)(e,2),n=t[0],i=t[1];return{isLoading:n,open:function(){return i(!0)},close:function(){return i(!1)}}}},240:function(e,t,n){n.d(t,{Jh:function(){return v},Mc:function(){return d},_r:function(){return f},qF:function(){return l},wr:function(){return u}});var r=n(861),a=n(757),i=n.n(a),c=n(340),s=n(694);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNThmZmE0NDE4MGExNjIzNTI4M2I4YzYyZGFkYTBjYiIsInN1YiI6IjY1ZDEyN2Q1YWE2NTllMDE4NjQyODM1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5B6314cItycUPZ96dF8XKEGzB2Kk_hOIaTyDuVlAhvc";var o="e58ffa44180a16235283b8c62dada0cb",u=function(){var e=(0,r.Z)(i().mark((function e(){var t,n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/trending/movie/day?language=en-US&api_key=".concat(o));case 3:return t=e.sent,n=t.data,r=n.results,e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),s.Notify.failure("Failed fetch data"),console.log("Failed fetch data: ",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/search/movie?query=".concat(t,"&api_key=").concat(o,"&language=en-EU&page=1&include_adult=false"));case 3:return n=e.sent,r=n.data,a=r.results,e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(0),s.Notify.failure("Failed fetch data"),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(t,"?api_key=").concat(o));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),s.Notify.failure("Failed fetch data"),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(t,"/reviews?language=en-EU&page=1&api_key=").concat(o));case 3:return n=e.sent,r=n.data,a=r.results,e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(0),s.Notify.failure("Failed fetch data"),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(t,"/credits?language=en-EU&api_key=").concat(o));case 3:return n=e.sent,r=n.data,a=r.cast,e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(0),s.Notify.failure("Failed fetch data"),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},595:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(861),a=n(439),i=n(757),c=n.n(i),s={button:"MoviesDetails_button__mz+Ul",information:"MoviesDetails_information__DAX-c",image:"MoviesDetails_image__q5z+X",info_div:"MoviesDetails_info_div__9aS6x",extra_info:"MoviesDetails_extra_info__yxgXD",outlet_div:"MoviesDetails_outlet_div__-Vye7"},o=n(240),u=n(791),l=n(689),d=n(87),f=n(622),v=n(639),h=n(694),p=n(184),_=function(){var e,t,n=(0,u.useState)({}),i=(0,a.Z)(n,2),_=i[0],x=i[1],m=(0,l.UO)().movieId,g=(0,f.B)(!1),j=g.open,y=g.close,N=g.isLoading,w=(0,l.TH)();return console.log(w),(0,u.useEffect)((function(){j();var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.Mc)(m);case 3:t=e.sent,x(t),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),h.Notify.failure("Failed fetch data"),console.log(e.t0);case 11:return e.prev=11,y(),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,7,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[m]),(0,p.jsx)(p.Fragment,{children:N?(0,p.jsx)(v.Z,{}):(0,p.jsxs)("div",{className:s.details_div,children:[(0,p.jsx)(d.rU,{to:null!==(e=null===(t=w.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",children:(0,p.jsx)("button",{className:s.button,children:"Back"})}),(0,p.jsxs)("div",{className:s.information,children:[(0,p.jsx)("div",{children:(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(_.poster_path),alt:_.title,className:s.image})}),(0,p.jsxs)("div",{className:s.info_div,children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{children:_.title}),_.release_date&&(0,p.jsxs)("h2",{children:["(",_.release_date.slice(0,4),")"]}),(0,p.jsxs)("p",{children:["User score: ",_.vote_average]})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("h3",{children:"Overview"}),(0,p.jsx)("p",{children:_.overview}),(0,p.jsx)("h3",{children:"Genres"}),(0,p.jsx)("p",{children:_.genres&&_.genres.map((function(e){return"".concat(e.name," | ")}))})]}),(0,p.jsxs)("div",{className:s.movie_extra_info,children:[(0,p.jsx)("h3",{children:"Additional information:"}),(0,p.jsxs)("div",{className:s.extra_info,children:[(0,p.jsx)(d.rU,{to:"cast",children:(0,p.jsx)("strong",{children:"Cast"})}),(0,p.jsx)(d.rU,{to:"reviews",children:(0,p.jsx)("strong",{children:"Reviews"})})]})]})]})]}),(0,p.jsx)("div",{className:s.outlet_div,children:(0,p.jsx)(l.j3,{})})]})})}}}]);
//# sourceMappingURL=595.e3f51817.chunk.js.map