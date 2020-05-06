(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,t,a){e.exports=a(128)},128:function(e,t,a){"use strict";a.r(t);var n,r,c=a(0),i=a.n(c),l=a(10),o=a.n(l),s=a(9),u=a(27),m={year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1},p={hour:"numeric",minute:"2-digit",hour12:!1},d=function(e){var t=new Date,a=t.getTime()+6e4*t.getTimezoneOffset(),n=new Date(a+1e3*e);return new Intl.DateTimeFormat(void 0,m).format(n)},f=function(e){return new Intl.DateTimeFormat(void 0,p).format(1e3*e)},h=function(e){return"".concat(Math.round(e-273.15),"\xb0C")},E=function(e){return"".concat(Math.round(9*(e-273.15)/5+32),"\xb0F")},g=a(49),b=Object(g.a)({prefersDarkMode:!1,prefersCelcius:!0,previousCities:[]},function(){try{var e=localStorage.getItem("state");if(!e)return;return JSON.parse(e)}catch(t){return}}(),{inputValue:""}),x=Object(u.c)({name:"ui",initialState:b,reducers:{toggleDarkMode:function(e){e.prefersDarkMode=!e.prefersDarkMode},toggleCelcius:function(e){e.prefersCelcius=!e.prefersCelcius},setInputValue:function(e,t){e.inputValue=t.payload},addPreviousCities:function(e,t){var a=t.payload;-1!==e.previousCities.findIndex((function(e){return e.id===a.id}))||(e.previousCities.unshift(t.payload),e.previousCities.length>5&&e.previousCities.pop())},delPreviousCity:function(e,t){var a=t.payload;e.previousCities.splice(a,1)}}}),y=x.actions,v=x.reducer,C=y.toggleDarkMode,w=y.toggleCelcius,S=y.setInputValue,O=y.addPreviousCities,j=y.delPreviousCity,N=v,z=a(33),k=a(50),V=a.n(k),T=V.a.create({baseURL:"/cities"}),I={fetchState:null,response:null,cityNameToSearch:null},W=Object(u.b)("cities/fetchCities",(function(e){return T.get("/",{params:{q:e}}).then((function(e){return e.data})).catch((function(e){return e}))})),M=Object(u.c)({name:"cities",initialState:I,reducers:{citiesReset:function(){return I},setCityNameToSearch:function(e,t){e.cityNameToSearch=t.payload}},extraReducers:(n={},Object(z.a)(n,W.fulfilled,(function(e,t){e.response=t.payload,e.fetchState="fulfilled"})),Object(z.a)(n,W.pending,(function(e){e.fetchState="pending"})),n)}),D=M.actions,R=M.reducer,B=D.citiesReset,H=D.setCityNameToSearch,A=R,G=V.a.create({baseURL:"/forecast"}),L={fetchState:null,response:null,cityIdToSearch:null},P=Object(u.b)("forecast/fetchForecast",(function(e){return G.get("/",{params:{id:e}}).then((function(e){return e.data})).catch((function(e){return e}))})),F=Object(u.c)({name:"forecast",initialState:L,reducers:{forecastReset:function(){return L},setCityIdToSearch:function(e,t){e.cityIdToSearch=t.payload}},extraReducers:(r={},Object(z.a)(r,P.fulfilled,(function(e,t){e.response=t.payload,e.fetchState="fulfilled"})),Object(z.a)(r,P.pending,(function(e){e.fetchState="pending"})),r)}),J=F.actions,U=F.reducer,_=(J.forecastReset,J.setCityIdToSearch),q=U,Q=Object(u.a)({reducer:{ui:N,cities:A,forecast:q}});Q.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){throw new Error("can't access localStorage")}}(Q.getState().ui)}));var X=a(82),K=a(183),Y=a(184),Z=a(163),$=a(185),ee=a(187),te=a(162),ae=(a(127),a(29)),ne=a(186),re=a(159),ce=a(153),ie=a(160);var le=function(){var e=Object(s.b)(),t=Object(c.useRef)(),a=Object(s.c)((function(e){return e.ui.inputValue})),n=Object(s.c)((function(e){return e.cities.fetchState})),r=Object(ce.a)((function(t){a.length>1&&e(H(t))}),1e3),l=Object(ae.a)(r,1)[0];return i.a.createElement(ne.a,{inputRef:t,label:"Enter city name",id:"outlined-margin-normal",variant:"outlined",fullWidth:!0,onChange:function(t){var a=t.target.value;e(S(a)),l(a)},value:a,disabled:"pending"===n,autoComplete:"off",InputProps:{endAdornment:a&&i.a.createElement(re.a,{edge:"end",onClick:function(){e(S("")),t.current.focus()}},i.a.createElement(ie.a,null))}})},oe=a(188),se=a(156),ue=a(170),me=a(161),pe=a(164),de=a(165),fe=a(189),he=a(166),Ee=a(167),ge=a(168),be=a(169),xe=a(59),ye=Object(me.a)({container:{display:"flex",flexWrap:"wrap",fontSize:"12px"},cluster:{display:"flex",flexGrow:"1",flexBasis:"256px"},group:{display:"flex",flexDirection:"column",flexGrow:"1",flexBasis:"128px"},pair:{display:"flex",flexDirection:"row"},key:{padding:"2px",display:"flex",fontWeight:"bold",flexGrow:"1",flexBasis:"64px",justifyContent:"flex-end",whiteSpace:"nowrap"},value:{padding:"2px",display:"flex",flexGrow:"1",flexBasis:"64px",whiteSpace:"nowrap"},specialGroup:{display:"flex",flexGrow:"1",flexBasis:"128px",justifyContent:"center"},temp:{display:"flex",fontSize:"38px",fontWeight:"bold",alignItems:"center",lineHeight:"32px"},icon:{display:"flex",height:"unset",width:"32px"}});var ve=function(e){var t=e.data,a=ye(),n=t.temp,r=t.temp_min,c=t.temp_max,l=t.sunrise,o=t.sunset,u=t.pressure,m=t.humidity,p=Object(s.c)((function(e){return e.ui.prefersCelcius})),d=p?h(n):E(n),g=p?h(r):E(r),b=p?h(c):E(c),x=f(l),y=f(o),v=function(e){var t=Math.round(e-273.15);return t<0?{id:1,name:"Freezing",color:"primary.light",path:"m 16,30 c 2.209139,0 4,-1.790861 4,-4 0,-1.480566 -0.804398,-2.773254 -2,-3.464871 V 4.0049466 C 18,2.8976452 17.11227,2 16,2 14.895431,2 14,2.8970262 14,4.0049466 V 22.535129 C 12.804398,23.226746 12,24.519434 12,26 c 0,2.209139 1.790861,4 4,4 z m 0,2 c -3.313709,0 -6,-2.686291 -6,-6 0,-1.777005 0.772506,-3.373582 2,-4.472213 V 4.0055202 C 12,1.7870853 13.790861,0 16,0 c 2.204644,0 4,1.7933325 4,4.0055202 V 21.527787 c 1.227494,1.098631 2,2.695208 2,4.472213 0,3.313709 -2.686291,6 -6,6 z m 0,0"}:t>=0&&t<10?{id:2,name:"Cold",color:"primary.light",path:"m 16,32 c -3.313709,0 -6,-2.686291 -6,-6 0,-1.777005 0.772506,-3.373582 2,-4.472213 V 4.0055202 C 12,1.7870853 13.790861,0 16,0 c 2.204644,0 4,1.7933325 4,4.0055202 V 21.527787 c 1.227494,1.098631 2,2.695208 2,4.472213 0,3.313709 -2.686291,6 -6,6 z m 0,-2 c 2.209139,0 4,-1.790861 4,-4 0,-1.480566 -0.804398,-2.773254 -2,-3.464871 V 4.0049466 C 18,2.8976452 17.11227,2 16,2 14.895431,2 14,2.8970262 14,4.0049466 V 22.535129 C 12.804398,23.226746 12,24.519434 12,26 c 0,2.209139 1.790861,4 4,4 z m 0,-1 c -1.656854,0 -3,-1.343146 -3,-3 0,-1.656854 1.343146,-3 3,-3 1.656854,0 3,1.343146 3,3 0,1.656854 -1.343146,3 -3,3 z m 0,0"}:t>=10&&t<20?{id:3,name:"Cool",color:"warning.light",path:"m 16,30 c 2.209139,0 4,-1.790861 4,-4 0,-1.480566 -0.804398,-2.773254 -2,-3.464871 V 4.0049466 C 18,2.8976452 17.11227,2 16,2 14.895431,2 14,2.8970262 14,4.0049466 V 22.535129 C 12.804398,23.226746 12,24.519434 12,26 c 0,2.209139 1.790861,4 4,4 z m 0,-1 c -1.656854,0 -3,-1.343146 -3,-3 0,-1.31085 0.840738,-2.425335 2.012406,-2.833649 C 15.004239,23.115176 15,23.062694 15,23.009222 V 18.990778 C 15,18.450975 15.447715,18 16,18 c 0.556135,0 1,0.443586 1,0.990778 v 4.018444 c 0,0.05332 -0.0044,0.105767 -0.01277,0.157002 C 18.159087,23.574432 19,24.689013 19,26 c 0,1.656854 -1.343146,3 -3,3 z m 0,3 c -3.313709,0 -6,-2.686291 -6,-6 0,-1.777005 0.772506,-3.373582 2,-4.472213 V 4.0055202 C 12,1.7870853 13.790861,0 16,0 c 2.204644,0 4,1.7933325 4,4.0055202 V 21.527787 c 1.227494,1.098631 2,2.695208 2,4.472213 0,3.313709 -2.686291,6 -6,6 z m 0,0"}:t>=20&&t<30?{id:4,name:"Warm",color:"warning.light",path:"m 16,30 c 2.209139,0 4,-1.790861 4,-4 0,-1.480566 -0.804398,-2.773254 -2,-3.464871 V 4.0049466 C 18,2.8976452 17.11227,2 16,2 14.895431,2 14,2.8970262 14,4.0049466 V 22.535129 C 12.804398,23.226746 12,24.519434 12,26 c 0,2.209139 1.790861,4 4,4 z m 0,-1 c -1.656854,0 -3,-1.343146 -3,-3 0,-1.311415 0.841462,-2.426295 2.01392,-2.834176 C 15.004763,23.111105 15,23.054878 15,22.997527 V 13.002473 C 15,12.455761 15.447715,12 16,12 c 0.556135,0 1,0.448823 1,1.002473 v 9.995054 c 0,0.05719 -0.0049,0.113383 -0.0143,0.168164 C 18.158354,23.573461 19,24.688442 19,26 c 0,1.656854 -1.343146,3 -3,3 z m 0,3 c -3.313709,0 -6,-2.686291 -6,-6 0,-1.777005 0.772506,-3.373582 2,-4.472213 V 4.0055202 C 12,1.7870853 13.790861,0 16,0 c 2.204644,0 4,1.7933325 4,4.0055202 V 21.527787 c 1.227494,1.098631 2,2.695208 2,4.472213 0,3.313709 -2.686291,6 -6,6 z m 0,0"}:t>=30&&t<40?{id:5,name:"Hot",color:"secondary.light",path:"m 16,30 c 2.209139,0 4,-1.790861 4,-4 0,-1.480566 -0.804398,-2.773254 -2,-3.464871 V 4.0049466 C 18,2.8976452 17.11227,2 16,2 14.895431,2 14,2.8970262 14,4.0049466 V 22.535129 C 12.804398,23.226746 12,24.519434 12,26 c 0,2.209139 1.790861,4 4,4 z m 0,-1 c -1.656854,0 -3,-1.343146 -3,-3 0,-1.306218 0.834806,-2.417456 2,-2.829294 V 7.9933977 C 15,7.4449463 15.447715,7 16,7 c 0.556135,0 1,0.4447593 1,0.9933977 V 23.170706 c 1.165194,0.411838 2,1.523076 2,2.829294 0,1.656854 -1.343146,3 -3,3 z m 0,3 c -3.313709,0 -6,-2.686291 -6,-6 0,-1.777005 0.772506,-3.373582 2,-4.472213 V 4.0055202 C 12,1.7870853 13.790861,0 16,0 c 2.204644,0 4,1.7933325 4,4.0055202 V 21.527787 c 1.227494,1.098631 2,2.695208 2,4.472213 0,3.313709 -2.686291,6 -6,6 z m 0,0"}:t>=40?{id:6,name:"Blazing",color:"secondary.light",path:"m 16,30 c 2.209139,0 4,-1.790861 4,-4 0,-1.480566 -0.804398,-2.773254 -2,-3.464871 V 4.0049466 C 18,2.8976452 17.11227,2 16,2 14.895431,2 14,2.8970262 14,4.0049466 V 22.535129 C 12.804398,23.226746 12,24.519434 12,26 c 0,2.209139 1.790861,4 4,4 z m 0,-1 c -1.656854,0 -3,-1.343146 -3,-3 0,-1.306218 0.834806,-2.417456 2,-2.829294 V 4.0024617 C 15,3.4394583 15.447715,3 16,3 c 0.556135,0 1,0.4488174 1,1.0024617 V 23.170706 c 1.165194,0.411838 2,1.523076 2,2.829294 0,1.656854 -1.343146,3 -3,3 z m 0,3 c -3.313709,0 -6,-2.686291 -6,-6 0,-1.777005 0.772506,-3.373582 2,-4.472213 V 4.0055202 C 12,1.7870853 13.790861,0 16,0 c 2.204644,0 4,1.7933325 4,4.0055202 V 21.527787 c 1.227494,1.098631 2,2.695208 2,4.472213 0,3.313709 -2.686291,6 -6,6 z m 0,0"}:{id:0,name:"error",color:"warning",path:""}}(n),C=v.color,w=v.path;return i.a.createElement(te.a,{className:a.container},i.a.createElement(te.a,{className:a.cluster},i.a.createElement(te.a,{className:a.specialGroup},i.a.createElement(xe.a,{className:a.icon,viewBox:"0 0 32 32"},i.a.createElement("path",{d:w})),i.a.createElement(ee.a,{classes:{root:a.temp},component:"span",color:C},d)),i.a.createElement(te.a,{className:a.group},i.a.createElement(te.a,{className:a.pair},i.a.createElement(te.a,{className:a.key},"Maximum: "),i.a.createElement(te.a,{className:a.value},b)),i.a.createElement(te.a,{className:a.pair},i.a.createElement(te.a,{className:a.key},"Minimum: "),i.a.createElement(te.a,{className:a.value},g)))),i.a.createElement(te.a,{className:a.cluster},i.a.createElement(te.a,{className:a.group},i.a.createElement(te.a,{className:a.pair},i.a.createElement(te.a,{className:a.key},"Pressure: "),i.a.createElement(te.a,{className:a.value},"".concat(u," hPa"))),i.a.createElement(te.a,{className:a.pair},i.a.createElement(te.a,{className:a.key},"Humidity: "),i.a.createElement(te.a,{className:a.value},"".concat(m," %")))),i.a.createElement(te.a,{className:a.group},i.a.createElement(te.a,{className:a.pair},i.a.createElement(te.a,{className:a.key},"Sunrise: "),i.a.createElement(te.a,{className:a.value},x)),i.a.createElement(te.a,{className:a.pair},i.a.createElement(te.a,{className:a.key},"Sunset: "),i.a.createElement(te.a,{className:a.value},y)))))},Ce=Object(me.a)({cardHeaderContent:{minWidth:"0"},cardHeaderTitle:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",minWidth:"0",fontSize:"15px;"},cardHeaderSubheader:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",minWidth:"0",fontSize:"12px;"},weatherAvatar:{backgroundColor:"rgba(127,127,127,1)",width:"40px",height:"40px"},flagAvatar:{width:"40px",height:"40px"},worldMapAvatar:{margin:"8px",width:"100px",height:"100px",position:"absolute",boxShadow:"0px 0px 4px rgba(127,127,127,0.5)"},title:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},withBoxShadow:{boxShadow:"0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"}});var we=function(e){var t=Ce(),a=e.forecast,n=a.main,r=a.name,l=a.weather,o=a.coord,s=a.sys,u=a.timezone,m=a.extraData,p=m.name,f=m.flag,h=m.region,E=m.subregion,b=m.timezones[0],x=s.sunrise,y=s.sunset,v=Object(g.a)({},n,{sunrise:x,sunset:y,flag:f,region:h,subregion:E}),C=l[0],w=C.main,S=C.description,O=C.icon,j=o.lon,N=o.lat,z=Object(c.useState)(!1),k=Object(ae.a)(z,2),V=k[0],T=k[1],I=Object(c.useState)(!1),W=Object(ae.a)(I,2),M=W[0],D=W[1],R=Object(c.useState)(!1),B=Object(ae.a)(R,2),H=B[0],A=B[1],G=Object(c.useState)(!1),L=Object(ae.a)(G,2),P=L[0],F=L[1],J="AIzaSyATSrlXeexQILWJpBpOehRMdeVeRowLq70",U="".concat("https://maps.googleapis.com/maps/api/staticmap","?zoom=10&scale=1&size=568x568&maptype=hybrid&markers=size:mid%7Ccolor:red%7C").concat(N,",").concat(j,"&key=").concat(J),_="".concat("https://maps.googleapis.com/maps/api/staticmap","?zoom=1&scale=1&size=100x100&maptype=terrain&markers=size:tiny%7Ccolor:red%7C").concat(N,",").concat(j,"&key=").concat(J);return i.a.createElement(Z.a,{in:!0,timeout:1e3},i.a.createElement(pe.a,null,i.a.createElement(te.a,{container:!0,spacing:0},i.a.createElement(te.a,{item:!0,xs:12,sm:6},i.a.createElement(de.a,{classes:{content:t.cardHeaderContent,title:t.cardHeaderTitle,subheader:t.cardHeaderSubheader},avatar:i.a.createElement(Z.a,{in:H,timeout:1e3},i.a.createElement(fe.a,{alt:"country flag of ".concat(r),src:f,classes:{root:t.flagAvatar},onLoad:function(){return A(!0)},className:t.withBoxShadow})),title:"Weather in ".concat(r),subheader:p})),i.a.createElement(te.a,{item:!0,xs:12,sm:6},i.a.createElement(de.a,{classes:{content:t.cardHeaderContent,title:t.cardHeaderTitle,subheader:t.cardHeaderSubheader},avatar:i.a.createElement(Z.a,{in:P,timeout:1e3},i.a.createElement(fe.a,{alt:S,src:"http://openweathermap.org/img/wn/".concat(O,"@2x.png"),classes:{root:t.weatherAvatar},onLoad:function(){return F(!0)},className:t.withBoxShadow})),title:"".concat(w," (").concat(S,")"),subheader:"".concat(d(u)," ").concat(b)}))),i.a.createElement(he.a,{light:!0,variant:"middle"}),i.a.createElement(Ee.a,null,i.a.createElement(ve,{data:v})),i.a.createElement(ge.a,{in:V,timeout:1e3,onEntered:function(){return D(!0)}},i.a.createElement(Z.a,{in:M,timeout:1e3},i.a.createElement(fe.a,{alt:"world map",src:_,classes:{root:t.worldMapAvatar},className:t.withBoxShadow})),i.a.createElement(be.a,{component:"img",src:U,onLoad:function(){return T(!0)}}))))};var Se=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.forecast.response})),a=Object(s.c)((function(e){return e.forecast.cityIdToSearch})),n=Object(s.c)((function(e){return e.forecast.fetchState})),r=Object(s.c)((function(e){return e.cities.cityNameToSearch}));return Object(c.useEffect)((function(){a&&e(P(a))}),[a,e]),function(){if("idle"!==n&&!r){if("fulfilled"===n)return 200===t.cod?t.coord?i.a.createElement(we,{forecast:t}):i.a.createElement(Z.a,{in:!0,timeout:1e4},i.a.createElement(oe.a,{severity:"info"},'No forecast found for City with id "',a,'".')):i.a.createElement(Z.a,{in:!0,timeout:1e3},i.a.createElement(oe.a,{severity:"error"},t.message));if("pending"===n)return i.a.createElement(se.a,{in:!0,timeout:1e3},i.a.createElement(te.a,{container:!0,justify:"center"},i.a.createElement(ue.a,null)))}return null}()},Oe=a(84),je=a(171),Ne=a(172),ze=a(173);var ke=function(e){var t=e.city,a=e.onCityClick,n=t.id,r=t.name,c=t.state,l=t.flag,o=Object(me.a)({avatar:{minWidth:"40px"},small:{height:"24px",width:"24px"},ListItemText:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}})();return i.a.createElement(je.a,{minwidth:"0px",button:!0,onClick:function(){return a(n,r)}},i.a.createElement(Ne.a,{classes:{root:o.avatar}},i.a.createElement(fe.a,{className:o.small,variant:"circle",alt:"country flag of ".concat(r),src:l})),i.a.createElement(ze.a,{disableTypography:!0,classes:{root:o.ListItemText}},c&&"".concat(c," - "),r))};function Ve(e){var t=e.index,a=e.style,n=e.data,r=n.cities,c=n.onCityClick,l=r[t];return i.a.createElement("div",{style:a,key:t},i.a.createElement(ke,{city:l,onCityClick:c}))}var Te=function(e){var t=e.cities,a=e.onCityClick;return i.a.createElement(Z.a,{in:!0,timeout:1e3},i.a.createElement(Oe.a,{className:"List",scrollToItem:!0,height:300,itemCount:t.length,itemSize:36,itemData:{cities:t,onCityClick:a},overscanCount:4},Ve))};var Ie=function(){var e=Object(s.b)(),t=function(t,a){e(S(a)),e(O({id:t,name:a})),e(B()),e(_(t))},a=Object(s.c)((function(e){return e.cities.response})),n=Object(s.c)((function(e){return e.cities.cityNameToSearch})),r=Object(s.c)((function(e){return e.cities.fetchState}));return Object(c.useEffect)((function(){n&&e(W(n))}),[n,e]),function(){if("idle"!==r){if("fulfilled"===r)return a.name?i.a.createElement(Z.a,{in:!0,timeout:1e3},i.a.createElement(oe.a,{severity:"error"},a.message)):a.length?i.a.createElement(Te,{cities:a,onCityClick:t}):i.a.createElement(Z.a,{in:!0,timeout:1e3},i.a.createElement(oe.a,{severity:"info"},'No cities found using "',n,'".'));if("pending"===r)return i.a.createElement(se.a,{in:!0,timeout:1e3},i.a.createElement(te.a,{container:!0,justify:"center"},i.a.createElement(ue.a,null)))}return null}()},We=a(130),Me=a(174),De=a(191),Re=a(83),Be=a(158),He=a(178),Ae=a(181),Ge=a(175),Le=a(176),Pe=a(177),Fe=a(179),Je=a(180),Ue=a(182),_e=a(190);var qe=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.ui.prefersDarkMode}));return i.a.createElement(_e.a,{checked:t,onChange:function(){e(C())},color:"default"})};var Qe=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.ui.prefersCelcius}));return i.a.createElement(_e.a,{checked:t,onChange:function(){e(w())},color:"default"})},Xe=Object(me.a)((function(e){return{small:{width:e.spacing(4),height:e.spacing(4)},dot:{margin:"4px",fontSize:"8px"},list:{minWidth:"288px"},root:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"224px"},pushToRight:{marginLeft:"auto"}}}));var Ke=function(){var e=Xe(),t=Object(s.b)(),a=i.a.useState(null),n=Object(ae.a)(a,2),r=n[0],c=n[1],l=Boolean(r),o=Object(s.c)((function(e){return e.ui.previousCities})),u=function(){c(null)};return i.a.createElement(We.a,{position:"static",color:"primary"},i.a.createElement(Me.a,{disableGutters:!0,variant:"dense"},i.a.createElement(re.a,{"aria-label":"menu1","aria-controls":"menu1","aria-haspopup":"true",onClick:function(e){c(e.currentTarget)}},i.a.createElement(Ge.a,null)),i.a.createElement(Le.a,{className:e.dot,color:"secondary"}),i.a.createElement(ee.a,{fontWeight:"bold",fontStyle:"italic",fontSize:"18px",component:"span"},"WEATHER"),i.a.createElement(Le.a,{className:e.dot,color:"disabled"}),i.a.createElement(ee.a,{fontWeight:"bold",fontStyle:"italic",fontSize:"18px",component:"span"},"APP"),i.a.createElement(Le.a,{className:e.dot,color:"primary"}),i.a.createElement(De.a,{title:"Go to repository",placement:"left",arrow:!0},i.a.createElement(re.a,{"aria-label":"github",href:"https://github.com/aserantes/forecast",className:e.pushToRight,target:"_blank",rel:"noopener"},i.a.createElement(Pe.a,null)))),i.a.createElement(Re.a,{id:"menu1",anchorEl:r,keepMounted:!0,open:l,onClose:u},i.a.createElement(Be.a,{className:e.list,subheader:i.a.createElement(He.a,null,"SETTINGS")},i.a.createElement(je.a,null,i.a.createElement(ze.a,null,"Dark Mode"),i.a.createElement(fe.a,{className:e.small},i.a.createElement(Fe.a,null)),i.a.createElement(qe,null),i.a.createElement(fe.a,{className:e.small},i.a.createElement(Je.a,null))),i.a.createElement(je.a,null,i.a.createElement(ze.a,null,"Temp. Unit"),i.a.createElement(fe.a,{className:e.small,size:"small"},i.a.createElement(ee.a,{fontWeight:"bold",fontSize:"1.2em"},"F")),i.a.createElement(Qe,null),i.a.createElement(fe.a,{className:e.small,size:"small"},i.a.createElement(ee.a,{fontWeight:"bold",fontSize:"1.2em"},"C")))),o.length>0&&i.a.createElement(he.a,null)&&i.a.createElement(Be.a,{dense:!0,subheader:i.a.createElement(He.a,null,"PREVIOUS CITIES")},o.map((function(a,n){return i.a.createElement(je.a,{button:!0,key:a.id,onClick:function(){return e=a.name,n=a.id,t(S(e)),t(_(n)),void u();var e,n}},i.a.createElement(ze.a,{disableTypography:!0,classes:{root:e.root}},a.name),i.a.createElement(Ae.a,null,i.a.createElement(re.a,{edge:"end","aria-label":"delete",onClick:function(){return function(e){t(j(e))}(n)}},i.a.createElement(Ue.a,null))))})))))};var Ye=function(){var e=Object(s.c)((function(e){return e.ui.prefersDarkMode})),t=i.a.useMemo((function(){return Object(X.a)({palette:{type:e?"dark":"light"}})}),[e]);return i.a.createElement(K.a,{theme:t},i.a.createElement(Y.a,null,i.a.createElement(Z.a,{in:!0,timeout:1e3},i.a.createElement($.a,{maxWidth:"sm",disableGutters:!0},i.a.createElement(ee.a,{m:2},i.a.createElement(te.a,{container:!0,spacing:2},i.a.createElement(te.a,{item:!0,xs:12},i.a.createElement(Ke,null)),i.a.createElement(te.a,{item:!0,xs:12},i.a.createElement(le,null)),i.a.createElement(te.a,{item:!0,xs:12},i.a.createElement(Ie,null),i.a.createElement(Se,null))))))))};o.a.render(i.a.createElement(s.a,{store:Q},i.a.createElement(Ye,null)),document.getElementById("root"))}},[[101,1,2]]]);
//# sourceMappingURL=main.1865a39b.chunk.js.map