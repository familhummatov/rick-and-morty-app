(this["webpackJsonprick-and-morty-app"]=this["webpackJsonprick-and-morty-app"]||[]).push([[0],{174:function(e,t,n){},175:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(57),i=n.n(c),s=n(55),r=n(194),l=n(11),j=n(34),o=Object(a.createContext)(null),d=n(14),u=function(){var e=Object(a.useState)({activePage:1}),t=Object(d.a)(e,2),n=t[0],c=t[1];return{contextData:{state:n,changeActivePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;c((function(t){return Object(j.a)(Object(j.a)({},t),{},{activePage:e})}))}}}},b=n(2),O=function(e){var t=e.children,n=u().contextData;return Object(b.jsx)(o.Provider,{value:Object(j.a)({},n),children:t})},x=n(193),h=n(203),m=n(145),p="/rick-and-morty-app",v="/rick-and-morty-app/episodes",f="/rick-and-morty-app/locations",g="/rick-and-morty-app/my-watch-list",C={border:"none",borderRadius:0,boxShadow:"none",marginBottom:"1em",marginTop:"1em",transition:"box-shadow 0.5s ease, padding 0.5s ease"},y={backgroundColor:"#fff",border:"1px solid #ddd",boxShadow:"0px 3px 5px rgba(0, 0, 0, 0.2)"},S=function(){var e=Object(a.useState)({menuFixed:!1,overlayFixed:!1}),t=Object(d.a)(e,2),n=t[0],c=t[1];return Object(b.jsx)(x.a,{onBottomPassed:function(){return c({menuFixed:!0})},onBottomVisible:function(){return c({menuFixed:!1})},once:!1,children:Object(b.jsx)(h.a,{borderless:!0,fixed:n.menuFixed?"top":void 0,style:n.menuFixed?y:C,children:Object(b.jsxs)(r.a,{text:!0,children:[Object(b.jsx)(h.a.Item,{as:s.b,to:p,children:Object(b.jsx)(m.a,{size:"mini",src:"https://react.semantic-ui.com/logo.png"})}),Object(b.jsx)(h.a.Item,{as:s.b,to:p,exact:!0,children:"Characters"}),Object(b.jsx)(h.a.Item,{as:s.c,to:v,exact:!0,children:"Episodes"}),Object(b.jsx)(h.a.Item,{as:s.c,to:f,exact:!0,children:"Locations"}),Object(b.jsx)(h.a.Item,{as:s.c,to:g,exact:!0,children:"My Watch List"})]})})})},E=n(196),k={GET_CHARACTERS:"https://rickandmortyapi.com/api/character",GET_LOCATIONS:"https://rickandmortyapi.com/api/location",GET_EPISODES:"https://rickandmortyapi.com/api/episode"},D=n(204),T=n(197),A=n(201),N=function(e){var t=e.item;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{children:["Name:",t.name]}),Object(b.jsxs)("div",{children:["Gender:",t.gender]}),Object(b.jsxs)("div",{children:["Species:",t.species]}),Object(b.jsxs)("div",{children:["Status:",t.status]}),Object(b.jsxs)("div",{children:["Origin:",t.origin.name]}),Object(b.jsxs)("div",{children:["Location:",t.location.name]})]})},w=function(e){var t=e.item;return Object(b.jsx)(D.a.Column,{children:Object(b.jsx)(T.a,{content:Object(b.jsx)(N,{item:t}),on:"click",pinned:!0,trigger:Object(b.jsx)(A.a,{className:"carditem",image:t.image,header:t.name,meta:t.gender,description:t.species})})})},L=function(e){var t=e.characters;return Object(b.jsx)(D.a,{stackable:!0,columns:4,children:t.map((function(e){return Object(b.jsx)(w,{item:e},e.name)}))})},R=function(){var e=Object(a.useState)({info:{count:null,next:null,pages:null,prev:null},results:[]}),t=Object(d.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(!1),s=Object(d.a)(i,2),r=s[0],l=s[1],j=Object(a.useState)(!1),o=Object(d.a)(j,2),u=o[0],b=o[1];return{getData:function(e){c({info:{count:null,next:null,pages:null,prev:null},results:[]}),l(!0),fetch(e).then((function(e){return e.json()})).then((function(e){l(!1),c(e)})).catch((function(e){l(!1),b(!0)}))},data:n,isLoading:r,isError:u}},I=n(65),G=n(195),P=n(176),_=function(e){var t=e.onApplyClick,n=e.isApplyDisabled,c=e.onResetClick,i=e.children,s=Object(a.useContext)(o).changeActivePage;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{children:"Filter"}),Object(b.jsxs)("div",{className:"mb-3 d-flex justify-content-between align-items-center",children:[Object(b.jsx)("div",{children:i}),Object(b.jsxs)("div",{children:[Object(b.jsx)(P.a,{disabled:n,onClick:function(){s(1),t()},className:"mt-3",primary:!0,children:"Apply"}),Object(b.jsx)(P.a,{onClick:function(){s(1),c()},secondary:!0,children:"Reset"})]})]})]})},H=n(202),F=n(198),B=function(e){var t=e.options,n=void 0===t?[]:t,a=e.filterState,c=e.handleChange;return Object(b.jsx)(F.a,{children:Object(b.jsx)(F.a.Group,{grouped:!0,children:n.map((function(e){return Object(b.jsx)(F.a.Radio,{checked:a[e.type]===e.value,label:e.label,name:e.type,type:"radio",value:e.value,onChange:c},e.value)}))})})},W=[{type:"status",label:"Alive",value:"alive"},{type:"status",label:"Dead",value:"dead"},{type:"status",label:"Unknown",value:"unknown"}],z=[{type:"gender",label:"Male",value:"male"},{type:"gender",label:"Female",value:"female"},{type:"gender",label:"Genderless",value:"genderless"},{type:"gender",label:"Unknown",value:"unknown"}],J=function(e){var t=e.filterState,n=e.handleChange,c=Object(a.useState)(0),i=Object(d.a)(c,2),s=i[0],r=i[1],l=function(e,t){var n=t.index;r(s===n?-1:n)};return Object(b.jsxs)(H.a,{as:h.a,vertical:!0,children:[Object(b.jsxs)(h.a.Item,{children:[Object(b.jsx)(H.a.Title,{active:0===s,content:"Status",index:0,onClick:l}),Object(b.jsx)(H.a.Content,{active:0===s,content:Object(b.jsx)(B,{options:W,filterState:t,handleChange:n})})]}),Object(b.jsxs)(h.a.Item,{children:[Object(b.jsx)(H.a.Title,{active:1===s,content:"Gender",index:1,onClick:l}),Object(b.jsx)(H.a.Content,{active:1===s,content:Object(b.jsx)(B,{options:z,filterState:t,handleChange:n})})]})]})},M=function(e){var t=e.getData,n=Object(a.useState)({status:"",gender:"",species:""}),c=Object(d.a)(n,2),i=c[0],s=c[1],r=function(e,t){var n=t.name,a=t.value;s((function(e){return Object(j.a)(Object(j.a)({},i),{},Object(I.a)({},n,a))}))},l=!Object.keys(i).some((function(e){return!!i[e]}));return Object(b.jsxs)(_,{onApplyClick:function(){t("".concat(k.GET_CHARACTERS,"/?status=").concat(i.status,"&gender=").concat(i.gender,"&species=").concat(i.species))},onResetClick:function(){t(k.GET_CHARACTERS),s({status:"",gender:"",species:""})},isApplyDisabled:l,children:[Object(b.jsx)(J,{filterState:i,handleChange:r}),Object(b.jsx)(G.a,{name:"species",placeholder:"Species",value:i.species,onChange:r})]})},U=n(207),V=function(e){var t=e.route,n=e.getData,c=e.data,i=Object(a.useContext)(o),s=i.state.activePage,r=i.changeActivePage;Object(a.useEffect)((function(){return function(){return r(1)}}),[]);var l=function(e){var a=e>s?c.info.next.split("&"):c.info.prev.split("&"),i=Object(d.a)(a,4),l=(i[0],i[1]),j=void 0===l?"":l,o=i[2],u=void 0===o?"":o,b=i[3],O=void 0===b?"":b;r(e),n("".concat(t,"?page=").concat(e,"&").concat(j,"&").concat(u,"&").concat(O))};return Object(b.jsx)("div",{className:"mt-3 d-flex justify-content-center",children:c.info.pages>1&&Object(b.jsx)(U.a,{activePage:s,totalPages:c.info.pages,onPageChange:function(e,t){var n=t.activePage;return l(n)}})})},q=function(){var e=R(),t=e.getData,n=e.data,c=e.isLoading,i=e.isError;return Object(a.useEffect)((function(){t(k.GET_CHARACTERS)}),[]),Object(b.jsxs)("div",{children:[!!n.results.length&&Object(b.jsx)(M,{getData:t}),c?Object(b.jsx)("div",{className:"mt-3",children:Object(b.jsx)(E.a,{active:!0,inline:"centered",size:"massive"})}):n.results.length?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(L,{characters:n.results,isLoading:c,isError:i})}):"No Data",Object(b.jsx)(V,{route:k.GET_CHARACTERS,getData:t,data:n})]})},K=n(200),Q=function(e){var t=e.data;return Object(b.jsxs)(K.a,{celled:!0,children:[Object(b.jsx)(K.a.Header,{children:Object(b.jsxs)(K.a.Row,{children:[Object(b.jsx)(K.a.HeaderCell,{children:"Episode"}),Object(b.jsx)(K.a.HeaderCell,{children:"Name"}),Object(b.jsx)(K.a.HeaderCell,{children:"Date"})]})}),Object(b.jsx)(K.a.Body,{children:t.results.map((function(e){return Object(b.jsxs)(K.a.Row,{children:[Object(b.jsx)(K.a.Cell,{children:e.episode}),Object(b.jsx)(K.a.Cell,{children:e.name}),Object(b.jsx)(K.a.Cell,{children:e.air_date})]},e.name)}))})]})},X=function(e){var t=e.getData,n=Object(a.useState)(""),c=Object(d.a)(n,2),i=c[0],s=c[1];return Object(b.jsx)(_,{onApplyClick:function(){t("".concat(k.GET_EPISODES,"/?name=").concat(i))},onResetClick:function(){t(k.GET_EPISODES),s("")},isApplyDisabled:!i.trim(),children:Object(b.jsx)(G.a,{name:"name",placeholder:"Episod name",value:i,onChange:function(e,t){return s(t.value)}})})},Y=function(){var e=R(),t=e.getData,n=e.isLoading,c=e.data;return Object(a.useEffect)((function(){t(k.GET_EPISODES)}),[]),Object(b.jsxs)("div",{children:[!!c.results.length&&Object(b.jsx)(X,{getData:t}),n?Object(b.jsx)("div",{className:"mt-3",children:Object(b.jsx)(E.a,{active:!0,inline:"centered",size:"massive"})}):c.results.length?Object(b.jsx)(Q,{data:c}):"no data",Object(b.jsx)(V,{route:k.GET_EPISODES,getData:t,data:c})]})},Z=function(e){var t=e.data;return Object(b.jsxs)(K.a,{celled:!0,children:[Object(b.jsx)(K.a.Header,{children:Object(b.jsxs)(K.a.Row,{children:[Object(b.jsx)(K.a.HeaderCell,{children:"\u2116"}),Object(b.jsx)(K.a.HeaderCell,{children:"Name"}),Object(b.jsx)(K.a.HeaderCell,{children:"Type"}),Object(b.jsx)(K.a.HeaderCell,{children:"Dimension"})]})}),Object(b.jsx)(K.a.Body,{children:t.results.map((function(e,t){return Object(b.jsxs)(K.a.Row,{children:[Object(b.jsx)(K.a.Cell,{children:t+1}),Object(b.jsx)(K.a.Cell,{children:e.name}),Object(b.jsx)(K.a.Cell,{children:e.type}),Object(b.jsx)(K.a.Cell,{children:e.dimension})]},e.name)}))})]})},$=function(e){var t=e.getData,n=Object(a.useState)({name:"",type:"",dimension:""}),c=Object(d.a)(n,2),i=c[0],s=c[1],r=function(e,t){var n=t.name,a=t.value;s((function(e){return Object(j.a)(Object(j.a)({},i),{},Object(I.a)({},n,a))}))},l=!Object.keys(i).some((function(e){return!!i[e]}));return Object(b.jsxs)(_,{onApplyClick:function(){t("".concat(k.GET_LOCATIONS,"/?name=").concat(i.name,"&type=").concat(i.type,"&dimension=").concat(i.dimension))},onResetClick:function(){t(k.GET_LOCATIONS),s({name:"",type:"",dimension:""})},isApplyDisabled:l,children:[Object(b.jsx)(G.a,{name:"name",placeholder:"Name",value:i.name,onChange:r}),Object(b.jsx)(G.a,{name:"type",placeholder:"Type",value:i.type,onChange:r,className:"mx-3"}),Object(b.jsx)(G.a,{name:"dimension",placeholder:"Dimension",value:i.dimension,onChange:r})]})},ee=function(){var e=R(),t=e.getData,n=e.isLoading,c=e.data;return Object(a.useEffect)((function(){t(k.GET_LOCATIONS)}),[]),Object(b.jsxs)("div",{children:[!!c.results.length&&Object(b.jsx)($,{getData:t}),n?Object(b.jsx)("div",{className:"mt-3",children:Object(b.jsx)(E.a,{active:!0,inline:"centered",size:"massive"})}):c.results.length?Object(b.jsx)(Z,{data:c}):"no data",Object(b.jsx)(V,{route:k.GET_LOCATIONS,data:c,getData:t})]})},te=n(76),ne=n(144),ae=n.n(ne),ce=function(e){var t=e.watchList,n=e.setWatchList,c=Object(a.useState)(""),i=Object(d.a)(c,2),s=i[0],r=i[1];return Object(b.jsxs)("div",{className:"d-flex align-items-center",children:[Object(b.jsx)(G.a,{className:"w-75",label:"Episode name",onChange:function(e,t){return r(t.value)},value:s}),Object(b.jsx)(P.a,{onClick:function(){var e=Object(te.a)(t);e.push({id:ae()(),episodeName:s,isComplete:!1}),n(e),r("")},disabled:!s.trim(),className:"mx-3",primary:!0,children:"Add"})]})},ie=n(206),se=function(e){var t=e.watchList,n=void 0===t?[]:t,a=e.setWatchList;return Object(b.jsx)("div",{className:"mt-4",children:n.map((function(e,t){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(b.jsxs)("div",{children:[t+1,Object(b.jsx)(ie.a,{checked:e.isComplete,onChange:function(){return function(e){var t=Object(te.a)(n),c=t.find((function(t){return t.id===e})),i=t.indexOf(c);t[i].isComplete=!t[i].isComplete,a(t)}(e.id)},className:"mx-3",label:e.episodeName})]}),Object(b.jsx)(P.a,{onClick:function(){return function(e){var t=n.filter((function(t){return t.id!==e}));a(t)}(e.id)},color:"red",children:"Delete"})]}),Object(b.jsx)("hr",{})]},e.id)}))})},re=function(){var e=localStorage.getItem("my-watch-list"),t=Object(a.useState)(e?Object(te.a)(JSON.parse(e)):[]),n=Object(d.a)(t,2),c=n[0],i=n[1];return Object(a.useEffect)((function(){localStorage.setItem("my-watch-list",JSON.stringify(c))}),[c]),Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"My Watch List"}),Object(b.jsx)(ce,{watchList:c,setWatchList:i}),!!c.length&&Object(b.jsx)(se,{watchList:c,setWatchList:i})]})},le=function(){return Object(b.jsx)(O,{children:Object(b.jsxs)("div",{children:[Object(b.jsx)(S,{}),Object(b.jsxs)(r.a,{children:[Object(b.jsx)("hr",{}),Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{path:p,component:q,exact:!0}),Object(b.jsx)(l.a,{path:v,component:Y}),Object(b.jsx)(l.a,{path:f,component:ee}),Object(b.jsx)(l.a,{path:g,component:re})]})]})]})})};n(171),n(172),n(173),n(174);i.a.render(Object(b.jsx)(s.a,{children:Object(b.jsx)(le,{})}),document.getElementById("root"))}},[[175,1,2]]]);
//# sourceMappingURL=main.ecac5477.chunk.js.map