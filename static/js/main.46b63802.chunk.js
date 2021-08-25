(this.webpackJsonpfootball_manager=this.webpackJsonpfootball_manager||[]).push([[0],{148:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(20),r=a.n(c),s=(a(80),a(6)),l=a(9),i=a(7),o=a(42),d=a.n(o),j=a(2);function u(){return Object(j.jsxs)("div",{className:d.a.tabs,children:[Object(j.jsx)(l.b,{to:"/FootballManager/",className:d.a.tab,children:"Leagues"}),Object(j.jsx)(l.b,{to:"/FootballManager/commands",className:d.a.tab,children:"Commands"})]})}var b=a(8),m=a(68),h=a.n(m).a.create({headers:{"X-Auth-Token":"aa4b54a0f9794e278339d9fd1f7ffc38"},baseURL:"https://api.football-data.org/v2"}),O=function(){return h.get("/competitions")},f=function(e){return h.get("/competitions/".concat(e,"/matches/"))},_={GET_COMMANDS_LIST_RESPONSE:"GET_COMMANDS_LIST_RESPONSE",GET_LEAGUE_LIST_RESPONSE:"GET_LEAGUE_LIST_RESPONSE",ERROR:"ERROR"},g=function(e){return{type:_.ERROR,payload:e}},p=a(19),x=a.n(p),v=function(){var e=Object(s.b)(),t=["BL1","PPL","DED","PD","FL1","ELC","PPL","WC","SA","PL","CL","BSA","CLI"],a=Object(s.c)((function(e){return e.leagues})),c=Object(s.c)((function(e){return e.errors})),r=Object(n.useState)(""),i=Object(b.a)(r,2),o=i[0],d=i[1],u=a.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}));return Object(n.useEffect)((function(){a.length||O().then((function(a){var n=a.data.competitions.filter((function(e){return t.includes(e.code)}));e({type:_.GET_LEAGUE_LIST_RESPONSE,payload:n})})).catch((function(t){return e(g("".concat(t.message,". Try again later.")))}))}),[]),a.length||c.length?c.length?Object(j.jsx)("div",{className:x.a.preloader,children:c}):Object(j.jsxs)("div",{className:x.a.container,children:[Object(j.jsx)("div",{className:x.a.filterByName,children:Object(j.jsx)("input",{type:"text",placeholder:"Search",onChange:function(e){return d(e.target.value)}})}),Object(j.jsx)("div",{className:x.a.containerOfLeagues,children:u.map((function(e){return Object(j.jsxs)(l.b,{to:"/league/".concat(e.id),className:x.a.leagueCard,id:e.id,children:[Object(j.jsx)("div",{className:x.a.leagueCard__name,children:e.name}),Object(j.jsx)("div",{className:x.a.leagueCard__emblem,children:Object(j.jsx)("img",{src:e.emblemUrl?e.emblemUrl:"https://i.gogov.ru/icons/a/disabled-parking.svg",alt:"",className:x.a.leagueCard__emblem})})]},e.id)}))})]}):Object(j.jsx)("div",{className:x.a.preloader,children:"Loading..."})},y=a(69),N=a.n(y),S=function(e){var t=e.info;return Object(j.jsxs)("div",{className:N.a.infoTab,children:[Object(j.jsx)("div",{children:t.name}),Object(j.jsx)("img",{src:t.flag,alt:"#"})]})},E=a(33),D=a.n(E),T=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.errors})),a=Object(s.c)((function(e){return e.commands})),c=Object(n.useState)(""),r=Object(b.a)(c,2),i=r[0],o=r[1],d=a.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())}));return Object(n.useEffect)((function(){a.length||h.get("/teams").then((function(t){var a=t.data.teams;return e({type:_.GET_COMMANDS_LIST_RESPONSE,payload:a})})).catch((function(t){return e(g(t.message))}))}),[]),a.length||t.length?t.length?Object(j.jsx)("div",{children:t}):Object(j.jsxs)("div",{className:D.a.container,children:[Object(j.jsx)("div",{className:D.a.filterByName,children:Object(j.jsx)("input",{type:"text",placeholder:"Search",onChange:function(e){return o(e.target.value)}})}),Object(j.jsx)("div",{className:D.a.containerOfCommands,children:d.map((function(e){return Object(j.jsx)(l.b,{to:"/commands/".concat(e.id),id:e.id,children:Object(j.jsx)(S,{info:{name:e.shortName,flag:e.crestUrl}},e.id)},e.id)}))})]}):Object(j.jsx)("div",{className:D.a.preloader,children:"Loading..."})},C=a(43),L=a.n(C),M=function(e){var t=e.info;return Object(j.jsx)("div",{className:L.a.leagueInfo,children:Object(j.jsxs)("div",{className:L.a.infoText,children:[Object(j.jsx)("strong",{children:"Name of League - ".concat(t.name)}),Object(j.jsx)("span",{children:"Current season:"}),Object(j.jsxs)("span",{children:["Start date:"," ".concat(t.startDate)]}),Object(j.jsxs)("span",{children:["End date:"," ".concat(t.endDate)]}),Object(j.jsxs)("span",{children:["Current matchday:"," ".concat(t.currentMatchday)]}),Object(j.jsxs)("span",{children:["Area:"," ".concat(t.areaName)]}),Object(j.jsx)("br",{}),Object(j.jsx)("img",{src:" ".concat(t.areaFlag),alt:"flag"}),Object(j.jsx)(l.b,{to:"/matchesOfLeague/".concat(t.compititionId),className:L.a.btnAllMatches,children:"Show all matches of ".concat(t.name)})]})})},w=a(70),I=a.n(w),R=function(e){var t=e.teamsInfo,a=new Date(t.date);return Object(j.jsxs)("div",{className:I.a.Match,children:[Object(j.jsx)("span",{children:"".concat(t.awayTeam," vs ").concat(t.homeTeam)}),Object(j.jsx)("span",{children:a.toDateString()})]})},A=a(44),F=a.n(A),k=function(e){var t=e.compititionId,a=Object(s.b)(),c=Object(s.c)((function(e){return e.errors})),r=Object(n.useState)([]),l=Object(b.a)(r,2),i=l[0],o=l[1],d=i.slice(1,10);return Object(n.useEffect)((function(){var e=!1;return f(t).then((function(t){var a=t.data.matches;e||o(a)})).catch((function(e){return a(g("".concat(e.message,". Try again later.")))})),function(){e=!0}}),[]),i.length||c.length?c.length?Object(j.jsx)("div",{className:F.a.preloader,children:c}):Object(j.jsx)("div",{className:F.a.leagueMatches,children:d.map((function(e){return Object(j.jsx)(R,{teamsInfo:{awayTeam:e.awayTeam.name,homeTeam:e.homeTeam.name,date:e.utcDate}},e.id)}))}):Object(j.jsx)("div",{className:F.a.preloader,children:"Loading..."})},P=a(56),G=a.n(P),U=function(){var e=Object(s.b)(),t=Object(n.useState)({}),a=Object(b.a)(t,2),c=a[0],r=a[1],l=Object(i.g)().slug,o=Object(s.c)((function(e){return e.leagues})),d=Object(s.c)((function(e){return e.errors}));return Object(n.useEffect)((function(){o.length?r(o.find((function(e){return e.id.toString()===l}))):O().then((function(e){var t=e.data.competitions;return r(t.find((function(e){return e.id.toString()===l})))})).catch((function(t){return e(g("".concat(t.message,". Try again later.")))}))}),[]),Object.keys(c).length?d.length?Object(j.jsx)("div",{className:G.a.preloader,children:d}):Object(j.jsxs)("div",{className:G.a.containerOfLeagueInfo,children:[Object(j.jsx)(M,{info:{name:c.name,areaName:c.area.name,areaFlag:c.area.ensignUrl,startDate:c.currentSeason.startDate,endDate:c.currentSeason.endDate,currentMatchday:c.currentSeason.currentMatchday,compititionId:l}}),Object(j.jsx)(k,{compititionId:l})]}):null},B=a(45),W=a.n(B),J=function(){var e=Object(s.b)(),t=Object(n.useState)([]),a=Object(b.a)(t,2),c=a[0],r=a[1],o=Object(s.c)((function(e){return e.commands})),d=Object(i.g)().slug;return Object(n.useEffect)((function(){var t;o.length?r(o.find((function(e){return e.id.toString()===d}))):(t=d,h.get("/teams/".concat(t))).then((function(e){var t=e.data;return r(t)})).catch((function(t){return e(g("".concat(t.message,". Try again later.")))}))}),[]),Object(j.jsxs)("div",{className:W.a.infoTab,children:[Object(j.jsx)("div",{className:W.a.info,children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"Name: ".concat(c.shortName)}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"".concat(c.website),children:"Website: ".concat(c.website)})}),Object(j.jsx)("li",{children:"Phone: ".concat(c.phone)}),Object(j.jsx)("li",{children:"Address: ".concat(c.address)}),Object(j.jsx)("li",{children:"Founded: ".concat(c.founded)}),Object(j.jsx)("li",{children:"Venue: ".concat(c.venue)})]})}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:"".concat(c.crestUrl),alt:"flag"})}),Object(j.jsx)(l.b,{className:W.a.btnAllMatches,to:"/matchesOfCommands/".concat(d),children:"Show all mathes of particular team"})]})},Q=a(28),V=a.n(Q),Y=a(23),Z=a.n(Y),z=(a(67),function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.errors})),a=Object(i.g)().slug,c=Object(n.useState)([]),r=Object(b.a)(c,2),l=r[0],o=r[1],d=Object(n.useState)(null),u=Object(b.a)(d,2),m=u[0],h=u[1],O=Object(n.useState)(null),_=Object(b.a)(O,2),p=_[0],x=_[1];if(Object(n.useEffect)((function(){var t=!1;return f(a).then((function(e){var a=e.data.matches;t||o(a)})).catch((function(t){return e(g("".concat(t.message,". Try again later.")))})),function(){t=!0}}),[]),!l.length&&!t.length)return Object(j.jsx)("div",{className:Z.a.preloader,children:"Loading..."});if(t.length)return Object(j.jsx)("div",{className:Z.a.preloader,children:t});return Object(j.jsxs)("div",{className:Z.a.container,children:[Object(j.jsxs)("div",{className:Z.a.calendar,children:[Object(j.jsxs)("div",{className:Z.a.datepicker,children:[Object(j.jsx)("span",{children:"Change start date"}),Object(j.jsx)(V.a,{selected:m,onChange:function(e){h(new Date(e.getFullYear(),e.getMonth(),e.getDate(),0,0,0))},selectsStart:!0,startDate:m,endDate:p})]}),Object(j.jsxs)("div",{className:Z.a.datepicker,children:[Object(j.jsx)("span",{children:"Change end date"}),Object(j.jsx)(V.a,{selected:p,onChange:function(e){x(new Date(e.getFullYear(),e.getMonth(),e.getDate(),23,59,59))},selectsEnd:!0,startDate:m,endDate:p,minDate:m})]})]}),Object(j.jsx)("div",{children:function(){var e=l.filter((function(e){return Date.parse(e.utcDate)>=Date.parse(m)&&Date.parse(e.utcDate)<=Date.parse(p)}));return e.length?e.map((function(e){return Object(j.jsx)(R,{teamsInfo:{awayTeam:e.awayTeam.name,homeTeam:e.homeTeam.name,date:e.utcDate}},e.id)})):Object(j.jsx)("div",{children:"There are no matches in the selected period."})}()})]})}),H=a(29),q=a.n(H),K=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.errors})),a=Object(i.g)().slug,c=Object(n.useState)([]),r=Object(b.a)(c,2),l=r[0],o=r[1],d=Object(n.useState)(null),u=Object(b.a)(d,2),m=u[0],O=u[1],f=Object(n.useState)(null),_=Object(b.a)(f,2),p=_[0],x=_[1];if(Object(n.useEffect)((function(){var t,n=!1;return(t=a,h.get("/teams/".concat(t,"/matches/"))).then((function(e){var t=e.data.matches;n||o(t)})).catch((function(t){return e(g(t.message))})),function(){n=!0}}),[]),!l.length&&!t.length)return Object(j.jsx)("div",{className:q.a.preloader,children:"Loading..."});if(t.length)return Object(j.jsx)("div",{children:t});return Object(j.jsxs)("div",{className:q.a.container,children:[Object(j.jsxs)("div",{className:q.a.calendar,children:[Object(j.jsxs)("div",{className:q.a.datepicker,children:[Object(j.jsx)("span",{children:"Change start date"}),Object(j.jsx)(V.a,{selected:m,onChange:function(e){O(new Date(e.getFullYear(),e.getMonth(),e.getDate(),0,0,0))},selectsStart:!0,startDate:m,endDate:p})]}),Object(j.jsxs)("div",{className:q.a.datepicker,children:[Object(j.jsx)("span",{children:"Change end date"}),Object(j.jsx)(V.a,{selected:p,onChange:function(e){x(new Date(e.getFullYear(),e.getMonth(),e.getDate(),23,59,59))},selectsEnd:!0,startDate:m,endDate:p,minDate:m})]})]}),Object(j.jsx)("div",{children:function(){var e=l.filter((function(e){return Date.parse(e.utcDate)>=Date.parse(m)&&Date.parse(e.utcDate)<=Date.parse(p)}));return e.length?e.map((function(e){return Object(j.jsx)(R,{teamsInfo:{awayTeam:e.awayTeam.name,homeTeam:e.homeTeam.name,date:e.utcDate}},e.id)})):Object(j.jsx)("div",{children:"There are no matches in the selected period."})}()})]})};var X=function(){return Object(j.jsxs)(l.a,{children:[Object(j.jsx)(u,{}),Object(j.jsxs)(i.d,{children:[Object(j.jsx)(i.b,{exact:!0,path:"/FootballManager/",component:v}),Object(j.jsx)(i.b,{exact:!0,path:"/FootballManager/commands",component:T}),Object(j.jsx)(i.b,{path:"/league/:slug",component:U}),Object(j.jsx)(i.b,{path:"/commands/:slug",component:J}),Object(j.jsx)(i.b,{path:"/matchesOfLeague/:slug",component:z}),Object(j.jsx)(i.b,{path:"/matchesOfCommands/:slug",component:K}),Object(j.jsx)(i.a,{to:"/FootballManager/"})]})]})},$=a(57),ee=a(73),te=a(24),ae={leagues:[],commands:[],errors:[]},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_LEAGUE_LIST_RESPONSE":return Object(te.a)(Object(te.a)({},e),{},{leagues:t.payload});case"GET_COMMANDS_LIST_RESPONSE":return Object(te.a)(Object(te.a)({},e),{},{commands:t.payload});case"ERROR":return Object(te.a)(Object(te.a)({},e),{},{errors:t.payload});default:return e}},ce=Object($.b)(ne,Object($.a)(ee.a));r.a.render(Object(j.jsx)(s.a,{store:ce,children:Object(j.jsx)(X,{})}),document.getElementById("root"))},19:function(e,t,a){e.exports={container:"style_container__1kUZy",containerOfLeagues:"style_containerOfLeagues__1tgba",leagueCard:"style_leagueCard__2eBvn",leagueCard__name:"style_leagueCard__name__kPf0v",leagueCard__emblem:"style_leagueCard__emblem__eJnnq",filterByName:"style_filterByName__301Ra",preloader:"style_preloader__Cd7w-"}},23:function(e,t,a){e.exports={container:"style_container__2_Hew",matches:"style_matches__2piFv",calendar:"style_calendar__29zLr",datepicker:"style_datepicker__2VWrt",preloader:"style_preloader__98uSr"}},29:function(e,t,a){e.exports={container:"style_container__ALQyc",matches:"style_matches__7hrla",calendar:"style_calendar__2Dlw6",datepicker:"style_datepicker__3gnFf",preloader:"style_preloader__2Zk5M"}},33:function(e,t,a){e.exports={container:"style_container__3kjyO",containerOfCommands:"style_containerOfCommands__2nz3e",filterByName:"style_filterByName__R_WZM",preloader:"style_preloader__3Pitw"}},42:function(e,t,a){e.exports={tabs:"style_tabs__sKtCN",tab:"style_tab__2nQVS"}},43:function(e,t,a){e.exports={leagueInfo:"style_leagueInfo__1HJJU",infoText:"style_infoText__2yZWQ",btnAllMatches:"style_btnAllMatches__2p8nm"}},44:function(e,t,a){e.exports={leagueMatches:"style_leagueMatches__1Fuwu",preloader:"style_preloader__3TLOr"}},45:function(e,t,a){e.exports={infoTab:"style_infoTab__1wGFc",info:"style_info__3cF7e",btnAllMatches:"style_btnAllMatches__3OWd3"}},56:function(e,t,a){e.exports={containerOfLeagueInfo:"style_containerOfLeagueInfo__2jEDT",preloader:"style_preloader__2Ew4C"}},69:function(e,t,a){e.exports={infoTab:"style_infoTab__2VGhv"}},70:function(e,t,a){e.exports={Match:"style_Match__2ibQ3"}},80:function(e,t,a){}},[[148,1,2]]]);
//# sourceMappingURL=main.46b63802.chunk.js.map