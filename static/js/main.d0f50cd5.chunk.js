(this["webpackJsonp2-test"]=this["webpackJsonp2-test"]||[]).push([[0],{33:function(e,t,n){e.exports=n(45)},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),i=n.n(c),s=n(1),l=n.n(s),o=n(5),u=n(11),h=n(8),m=n(29),p=n(6),f="GET",b="POST";function d(e,t,n,a,r){var c="".concat(t).concat(function(e){var t=e?Object.keys(e):[];return t.length?"?"+t.map((function(t){return"".concat(t,"=").concat(e[t])})).join("&"):""}(n)),i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,a=Object(p.a)(Object(p.a)({},t),{},{method:e});return n&&(a.body=JSON.stringify(n)),a}(e,r,a);return fetch(c,i).then((function(e){return e.ok?function(e){var t=e.headers.get("content-type");return t.includes("application/json")?e.json():t.includes("text/html")?e.text().then((function(e){return{text:e}})):Promise.reject(new Error("Can't process this response type: ".concat(t)))}(e):function(e){var t=new Error(JSON.stringify({status:e.status,message:e.statusText}));return Promise.reject(t)}(e)}))}var v={get:function(e,t){return d(f,e,t)},post:function(e,t,n){return d(b,e,n,t)}},g=function(e,t){return{type:"STORE_LINK_DATA",payload:{category:e,data:t}}},E=function(e,t){return function(){var n=Object(o.a)(l.a.mark((function n(a){var r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v.get("".concat("https://swapi.dev/api/").concat(e,"/"),t);case 3:r=n.sent,a({type:"STORE_DATA",payload:{category:e,data:r}}),n.next=10;break;case 7:throw n.prev=7,n.t0=n.catch(0),new Error("Something went wrong");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()},O=function(e,t){return function(){var n=Object(o.a)(l.a.mark((function n(a){var r,c,i,s,o;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=[],c=Object(m.a)(t),n.prev=2,c.s();case 4:if((i=c.n()).done){n.next=12;break}return s=i.value,n.next=8,v.get(s);case 8:o=n.sent,r.push(o);case 10:n.next=4;break;case 12:n.next=17;break;case 14:n.prev=14,n.t0=n.catch(2),c.e(n.t0);case 17:return n.prev=17,c.f(),n.finish(17);case 20:return a(g(e,r)),n.abrupt("return",r);case 22:case"end":return n.stop()}}),n,null,[[2,14,17,20]])})));return function(e){return n.apply(this,arguments)}}()},j=n(13),k=function(e){var t=e.list;return r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarCollapse"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},t.map((function(e){return r.a.createElement("li",{key:e.link,className:"nav-item"},r.a.createElement(j.c,{className:"nav-link",activeClassName:"active",to:e.link},e.title.toUpperCase()))}))))},y=function(e){return{type:"STORE_SEARCH",payload:e}},w=function(e){var t=e.categories,n=Object(a.useState)(""),c=Object(u.a)(n,2),i=c[0],s=c[1],l=Object(h.b)(),o=Object(a.useMemo)((function(){if(t)return Object.keys(t).map((function(e){return{title:e,link:"/".concat(e)}}))}),[t]);return r.a.createElement("header",null,r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark fixed-top bg-dark"},r.a.createElement(j.b,{className:"navbar-brand",to:"/home"},"Star Wars Data"),o&&r.a.createElement(k,{list:o}),r.a.createElement("div",{className:"form-inline my-2 my-lg-0"},r.a.createElement("input",{className:"form-control mr-sm-2",type:"text",placeholder:"Search",value:i,onChange:function(e){var t=e.target;s(t.value),l(y(t.value))}}),r.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"button",onClick:function(){s(""),l(y(""))}},"Clear"))))},_=n(4),x=function(){var e=Object(h.c)((function(e){return e.categories.categories})),t=Object(a.useMemo)((function(){if(e)return Object.keys(e).map((function(e){return{title:e,link:"/".concat(e)}}))}),[e]);return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Welcome to the STAR WARS DATA!"),r.a.createElement("p",null,"I hope you'll be enjoy here :)"),r.a.createElement("p",null,"Please select a CATEGORY:"),r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark"},t&&r.a.createElement(k,{list:t})))},N=n(32),C=n(3),S=function e(t,n,a){Object(C.a)(this,e),this.name=t,this.episode=n,this.release=a},T=function e(t,n,a,r,c){Object(C.a)(this,e),this.characters=t,this.planets=n,this.starships=a,this.vehicles=r,this.species=c},A=function e(t,n,a,r,c,i){Object(C.a)(this,e),this.name=t,this.episode=n,this.release=a,this.producer=r,this.director=c,this.description=i},I=function e(t,n,a){Object(C.a)(this,e),this.name=t,this.gender=n,this.birth_year=a},R=function e(t,n,a,r){Object(C.a)(this,e),this.films=t,this.starships=n,this.vehicles=a,this.species=r},D=function e(t,n,a,r,c,i,s,l,o){Object(C.a)(this,e),this.name=t,this.gender=n,this.birth_year=a,this.homeworld=r,this.height=c,this.mass=i,this.hair_color=s,this.skin_color=l,this.eyes_color=o},L=function e(t,n,a,r){Object(C.a)(this,e),this.name=t,this.population=n,this.terrain=a,this.climate=r},M=function e(t,n,a,r,c,i,s,l,o){Object(C.a)(this,e),this.name=t,this.population=n,this.terrain=a,this.climate=r,this.rotation_period=c,this.orbital_period=i,this.diameter=s,this.surface_water=l,this.gravity=o},G=function e(t,n){Object(C.a)(this,e),this.films=t,this.residents=n},W=function e(t,n,a,r){Object(C.a)(this,e),this.name=t,this.classification=n,this.homeworld=a,this.language=r},B=function e(t,n,a,r,c,i,s,l,o,u){Object(C.a)(this,e),this.name=t,this.classification=n,this.homeworld=a,this.language=r,this.designation=c,this.average_lifespan=i,this.average_height=s,this.skin_colors=l,this.hair_colors=o,this.eye_colors=u},P=function e(t,n){Object(C.a)(this,e),this.people=t,this.films=n},J=function e(t,n,a,r,c){Object(C.a)(this,e),this.name=t,this.model=n,this.manufacturer=a,this.cost_in_credits=r,this.vehicle_class=c},K=function e(t,n,a,r,c,i,s,l,o,u,h){Object(C.a)(this,e),this.name=t,this.model=n,this.manufacturer=c,this.cost_in_credits=a,this.vehicle_class=r,this.length=i,this.max_atmosphering_speed=s,this.crew=l,this.passengers=o,this.cargo_capacity=u,this.consumables=h},H=function e(t,n){Object(C.a)(this,e),this.pilots=t,this.films=n},U=function e(t,n,a,r,c){Object(C.a)(this,e),this.name=t,this.model=n,this.manufacturer=a,this.starship_class=r,this.cost_in_credits=c},V=function e(t,n,a,r,c,i,s,l,o,u,h,m,p){Object(C.a)(this,e),this.name=t,this.model=n,this.manufacturer=a,this.starship_class=r,this.cost_in_credits=c,this.length=i,this.max_atmosphering_speed=s,this.crew=l,this.passengers=o,this.cargo_capacity=u,this.consumables=h,this.hyperdrive_rating=m,this.MGLT=p},Y=function e(t,n){Object(C.a)(this,e),this.pilots=t,this.films=n},$=function(){var e=Object(o.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.get(t);case 3:return(n=e.sent).name&&(a=n.name),n.title&&(a=n.title),e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),q="films",z="people",F="planets",Q="species",X="vehicles",Z="starships",ee=function(){var e=Object(o.a)(l.a.mark((function e(t){var n,a,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=0,a=Object.keys(t);case 1:if(!(n<a.length)){e.next=11;break}if("url"===(r=a[n])||"string"!==typeof t[r]||!t[r].includes("http:")){e.next=8;break}return e.next=6,$(t[r]);case 6:c=e.sent,t[r]=c;case 8:n++,e.next=1;break;case 11:return e.abrupt("return",t);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=function(){var e=Object(o.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee(n);case 2:n=e.sent,e.t0=t,e.next=e.t0===q?6:e.t0===z?7:e.t0===F?8:e.t0===Q?9:e.t0===X?10:e.t0===Z?11:12;break;case 6:return e.abrupt("return",{info:new A(n.title,n.episode_id,n.release_date,n.producer,n.director,n.opening_crawl),links:new T(n.characters,n.planets,n.starships,n.vehicles,n.species)});case 7:return e.abrupt("return",{info:new D(n.name,n.gender,n.birth_year,n.homeworld,n.height,n.mass,n.hair_color,n.skin_color,n.eye_color),links:new R(n.films,n.starships,n.vehicles,n.species)});case 8:return e.abrupt("return",{info:new M(n.name,n.population,n.terrain,n.climate,n.rotation_period,n.orbital_period,n.diameter,n.surface_water,n.gravity),links:new G(n.films,n.residents)});case 9:return e.abrupt("return",{info:new B(n.name,n.classification,n.homeworld,n.language,n.designation,n.average_lifespan,n.average_height,n.skin_colors,n.hair_colors,n.eye_colors),links:new P(n.people,n.films)});case 10:return e.abrupt("return",{info:new K(n.name,n.model,n.cost_in_credits,n.vehicle_class,n.manufacturer,n.length,n.max_atmosphering_speed,n.crew,n.passengers,n.cargo_capacity,n.consumables),links:new H(n.pilots,n.films)});case 11:return e.abrupt("return",{info:new V(n.name,n.model,n.manufacturer,n.starship_class,n.cost_in_credits,n.length,n.max_atmosphering_speed,n.crew,n.passengers,n.cargo_capacity,n.consumables,n.hyperdrive_rating,n.MGLT),links:new Y(n.pilots,n.films)});case 12:return e.abrupt("return");case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ne=function(){var e=Object(o.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee(n);case 2:n=e.sent,e.t0=t,e.next=e.t0===q?6:e.t0===z?7:e.t0===F?8:e.t0===Q?9:e.t0===X?10:e.t0===Z?11:12;break;case 6:return e.abrupt("return",new S(n.title,n.episode_id,n.release_date));case 7:return e.abrupt("return",new I(n.name,n.gender,n.birth_year));case 8:return e.abrupt("return",new L(n.name,n.population,n.terrain,n.climate));case 9:return e.abrupt("return",new W(n.name,n.classification,n.homeworld,n.language));case 10:return e.abrupt("return",new J(n.name,n.model,n.manufacturer,n.cost_in_credits,n.vehicle_class));case 11:return e.abrupt("return",new U(n.name,n.model,n.manufacturer,n.starship_class,n.cost_in_credits));case 12:return e.abrupt("return");case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ae=function(e){var t=e.paginationInfo,n=e.onChangeList,c=Object(a.useMemo)((function(){if(t){var e=[];if(t.previous){var n=+t.previous.split("=")[1];e=e.concat([n,n+1,n+2])}else e=[1,2,3];return e}}),[t]),i=Object(a.useCallback)((function(){t.previous&&n(+t.previous.split("=")[1])}),[n,t]),s=Object(a.useCallback)((function(){t.next&&n(+t.next.split("=")[1])}),[n,t]);return t?r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination"},r.a.createElement("li",{className:"page-item",onClick:i},r.a.createElement("span",{className:"page-link"},r.a.createElement("span",{"aria-hidden":"true"},"\xab"))),c.map((function(e){return r.a.createElement("li",{key:e,className:"page-item",onClick:n.bind(void 0,e)},r.a.createElement("span",{className:"page-link"},e))})),r.a.createElement("li",{className:"page-item",onClick:s},r.a.createElement("span",{className:"page-link"},r.a.createElement("span",{"aria-hidden":"true"},"\xbb"))))):r.a.createElement("div",{style:{height:"25px",marginBottom:"1rem"}})},re=function(e){var t=e.category,n=e.tableData,a=e.onViewDetails,c=e.onChangeList,i=e.paginationInfo,s=e.sortTableByKey;return r.a.createElement("div",{className:"table-component"},r.a.createElement("h2",null,t),r.a.createElement(ae,{paginationInfo:i,onChangeList:c}),r.a.createElement("table",{className:"table table-dark table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,Object.keys(n[0].tableInfo).map((function(e,t){return r.a.createElement("th",{key:t,onClick:s.bind(void 0,e)},e.toUpperCase())})))),r.a.createElement("tbody",null,n.map((function(e){return r.a.createElement("tr",{key:e.id,onClick:a.bind(void 0,e.id)},Object.keys(e.tableInfo).map((function(t){return r.a.createElement("td",{key:t},e.tableInfo[t])})))})))))},ce=function(e){var t=e.detailInfo,n=e.onClickListLinks,a=function(e,t){0!==t.length&&("characters"!==e&&"residents"!==e||(e="people"),n(e,t))};return r.a.createElement("div",{className:"details"},r.a.createElement("h2",null,t.info.name),r.a.createElement("div",{className:"list-container"},r.a.createElement("div",{className:"list-container-details"},r.a.createElement("p",null,"Details:"),r.a.createElement("ul",{className:"list-group list-group-flush details-info"},Object.keys(t.info).map((function(e){return r.a.createElement("li",{key:e,className:"list-group-item list-group-item-dark"},r.a.createElement("h3",null,e),r.a.createElement("p",null,t.info[e]))})))),r.a.createElement("div",{className:"list-container-links"},r.a.createElement("p",null,"Related Links:"),r.a.createElement("ul",{className:"list-group details-links"},Object.keys(t.links).map((function(e){return r.a.createElement("li",{key:e,className:"list-group-item d-flex justify-content-between list-group-item-dark",onClick:a.bind(void 0,e,t.links[e])},r.a.createElement("h3",null,e),r.a.createElement("span",{className:"badge badge-primary badge-pill"},t.links[e].length))}))))))},ie=function(){return r.a.createElement("div",{className:"spinner"},r.a.createElement("div",{className:"lds-ellipsis"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))},se=function(e){var t=e.children,n=e.onClick;return r.a.createElement("button",Object.assign({onClick:n},{type:"button",className:"btn btn btn-outline-light"}),t)},le=function(e){e.url;var t=e.identifier,n=Object(a.useState)(!1),c=Object(u.a)(n,2),i=c[0],s=c[1],m=Object(a.useState)(!1),p=Object(u.a)(m,2),f=p[0],b=p[1],d=Object(h.c)((function(e){return e.categories.data})),v=Object(h.c)((function(e){return e.search.search})),g=Object(a.useState)(t),j=Object(u.a)(g,2),k=j[0],w=j[1],_=Object(a.useState)(null),x=Object(u.a)(_,2),C=x[0],S=x[1],T=Object(a.useState)(null),A=Object(u.a)(T,2),I=A[0],R=A[1],D=Object(a.useState)(null),L=Object(u.a)(D,2),M=L[0],G=L[1],W=Object(a.useState)(null),B=Object(u.a)(W,2),P=B[0],J=B[1],K=Object(h.b)(),H=Object(a.useCallback)(function(){var e=Object(o.a)(l.a.mark((function e(t,n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(null),e.prev=1,e.next=4,K(O(t,n));case 4:return a=e.sent,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(1),b(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),[K]),U=function(){var e=Object(o.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(!0),H(t,n).then((function(e){w(t),S(e),R(null),K(y("")),s(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),V=Object(a.useCallback)(function(){var e=Object(o.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(null),e.prev=1,e.next=4,K(E(t,n));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),b(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t,n){return e.apply(this,arguments)}}(),[K]);return Object(a.useEffect)((function(){d&&d[t]||(s(!0),V(t).then((function(){return s(!1)})))}),[V,d,t]),Object(a.useEffect)((function(){v&&(s(!0),G(null),V(t,{search:v}).then((function(){return s(!1)})))}),[V,t,v]),Object(a.useEffect)((function(){Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!C){e.next=5;break}return e.next=3,Promise.all(C.map(function(){var e=Object(o.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne(k,t);case 2:return n=e.sent,e.abrupt("return",{id:t.url,tableInfo:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:t=e.sent,G(t);case 5:case"end":return e.stop()}}),e)})))()}),[C,k]),Object(a.useEffect)((function(){d&&d[t]&&(S(d[t].results),R({count:d[t].count,next:d[t].next,previous:d[t].previous}))}),[d,t]),f?r.a.createElement("div",null,r.a.createElement("h2",null,"An error occurred!"),r.a.createElement("p",null,f),r.a.createElement(se,{onClick:V.bind(void 0,t)},"Load Data Again")):i?r.a.createElement(ie,null):r.a.createElement("div",{className:"page-view"},M?r.a.createElement(re,{tableData:M,onViewDetails:function(e){var t=C.find((function(t){return t.url===e}));te(k,t).then((function(e){return J(e)}))},onChangeList:function(e){s(!0),V(t,{page:e}).then((function(){return s(!1)}))},category:k,paginationInfo:I,sortTableByKey:function(e){var t=Object(N.a)(M).sort((function(t,n){return t.tableInfo[e]<n.tableInfo[e]?-1:t.tableInfo[e]>n.tableInfo[e]?1:0}));G(t)}}):r.a.createElement(ie,null),P&&r.a.createElement(ce,{detailInfo:P,onClickListLinks:U}))},oe=function(e){return e.split("/").find((function(e){return""!==e}))},ue=function(e){var t=e.match,n=t.path,a=t.url,c=oe(n);return r.a.createElement(le,{url:a,identifier:c})},he=function(e){var t=e.match,n=t.path,a=t.url,c=oe(n);return r.a.createElement(le,{url:a,identifier:c})},me=function(e){var t=e.match,n=t.path,a=t.url,c=oe(n);return r.a.createElement(le,{url:a,identifier:c})},pe=function(e){var t=e.match,n=t.path,a=t.url,c=oe(n);return r.a.createElement(le,{url:a,identifier:c})},fe=function(e){var t=e.match,n=t.path,a=t.url,c=oe(n);return r.a.createElement(le,{url:a,identifier:c})},be=function(e){var t=e.match,n=t.path,a=t.url,c=oe(n);return r.a.createElement(le,{url:a,identifier:c})},de=function(){return r.a.createElement(_.c,null,r.a.createElement(_.a,{exact:!0,path:"/",component:x}),r.a.createElement(_.a,{exact:!0,path:"/home",component:x}),r.a.createElement(_.a,{path:"/films",component:ue}),r.a.createElement(_.a,{path:"/people",component:he}),r.a.createElement(_.a,{path:"/planets",component:me}),r.a.createElement(_.a,{path:"/species",component:pe}),r.a.createElement(_.a,{path:"/starships",component:fe}),r.a.createElement(_.a,{path:"/vehicles",component:be}))};var ve=function(){var e=Object(a.useState)(!0),t=Object(u.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(!1),s=Object(u.a)(i,2),m=s[0],p=s[1],f=Object(h.c)((function(e){return e.categories.categories})),b=Object(h.b)(),d=Object(a.useCallback)(Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(null),e.prev=1,e.next=4,b((function(e){v.get("https://swapi.dev/api/").then((function(t){e({type:"STORE_CATEGORIES",payload:t})})).catch((function(e){throw new Error("Something went wrong")}))}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),p(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[1,6]])}))),[b]);return Object(a.useEffect)((function(){c(!0),d().then((function(){return c(!1)}))}),[d]),m?r.a.createElement("div",null,r.a.createElement("h2",null,"An error occurred!"),r.a.createElement("button",{title:"Load Categories",onClick:d})):n?r.a.createElement("div",null,"Loading..."):r.a.createElement("div",{className:"App"},r.a.createElement(w,{categories:f}),r.a.createElement("div",{className:"container-fluid content"},r.a.createElement(de,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ge=n(14),Ee=n(30),Oe=n(31),je=n(19),ke={categories:null,data:null,linksData:null},ye={search:null},we=Object(ge.combineReducers)({categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"STORE_CATEGORIES":return Object(p.a)(Object(p.a)({},e),{},{categories:a});case"STORE_DATA":return Object(p.a)(Object(p.a)({},e),{},{data:Object(p.a)(Object(p.a)({},e.data),{},Object(je.a)({},a.category,a.data))});case"STORE_LINK_DATA":return Object(p.a)(Object(p.a)({},e),{},{linksData:Object(p.a)(Object(p.a)({},e.linksData),{},Object(je.a)({},a.category,a.data))});default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"STORE_SEARCH":return Object(p.a)(Object(p.a)({},e),{},{search:a});default:return e}}}),_e=Object(ge.createStore)(we,Object(Oe.composeWithDevTools)(Object(ge.applyMiddleware)(Ee.a)));n(44);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j.a,null,r.a.createElement(h.a,{store:_e},r.a.createElement(ve,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.d0f50cd5.chunk.js.map