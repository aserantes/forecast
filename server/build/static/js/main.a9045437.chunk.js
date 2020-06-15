(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,t,a){e.exports=a(128)},128:function(e,t,a){"use strict";a.r(t);var n,r,c,i=a(0),l=a.n(i),o=a(10),s=a.n(o),u=a(6),m=a(18),f=function(e,t){var a={hour:"2-digit",minute:"2-digit",hour12:!1,timeZone:t},n=new Date(1e3*e);return new Intl.DateTimeFormat("en-GB",a).format(n)},p=function(e){return"".concat(Math.round(e-273.15),"\xb0C")},d=function(e){return"".concat(Math.round(9*(e-273.15)/5+32),"\xb0F")},h=a(43),E=Object(h.a)({prefersDarkMode:!1,prefersCelcius:!0,previousCities:[]},function(){try{var e=localStorage.getItem("state");if(!e)return;return JSON.parse(e)}catch(t){return}}(),{inputValue:""}),g=Object(m.c)({name:"ui",initialState:E,reducers:{toggleDarkMode:function(e){e.prefersDarkMode=!e.prefersDarkMode},toggleCelcius:function(e){e.prefersCelcius=!e.prefersCelcius},setInputValue:function(e,t){e.inputValue=t.payload},addPreviousCities:function(e,t){var a=t.payload;-1!==e.previousCities.findIndex((function(e){return e.id===a.id}))||(e.previousCities.unshift(t.payload),e.previousCities.length>5&&e.previousCities.pop())},delPreviousCity:function(e,t){var a=t.payload;e.previousCities.splice(a,1)}}}),b=g.actions,x=g.reducer,y=b.toggleDarkMode,v=b.toggleCelcius,C=b.setInputValue,w=b.addPreviousCities,O=b.delPreviousCity,S=x,j=a(25),N=a(44),z=a.n(N),k=z.a.create({baseURL:"/cities"}),V={fetchState:null,response:null,cityNameToSearch:null},T=Object(m.b)("cities/fetchCities",(function(e){return k.get("/",{params:{q:e}}).then((function(e){return e.data})).catch((function(e){return e}))})),D=Object(m.c)({name:"cities",initialState:V,reducers:{citiesReset:function(){return V},setCityNameToSearch:function(e,t){e.cityNameToSearch=t.payload}},extraReducers:(n={},Object(j.a)(n,T.fulfilled,(function(e,t){e.response=t.payload,e.fetchState="fulfilled"})),Object(j.a)(n,T.pending,(function(e){e.fetchState="pending"})),n)}),I=D.actions,L=D.reducer,R=I.citiesReset,W=I.setCityNameToSearch,M=L,B=z.a.create({baseURL:"/forecast"}),G={fetchState:null,response:null,cityToSearch:{id:null,name:null,lon:null,lat:null,country:null}},H=Object(m.b)("forecast/fetchForecast",(function(e){return B.get("/",{params:Object(h.a)({},e)}).then((function(e){return e.data})).catch((function(e){return e}))})),A=Object(m.c)({name:"forecast",initialState:G,reducers:{forecastReset:function(){return G},setCityToSearch:function(e,t){e.cityToSearch=t.payload}},extraReducers:(r={},Object(j.a)(r,H.fulfilled,(function(e,t){e.response=t.payload,e.fetchState="fulfilled"})),Object(j.a)(r,H.pending,(function(e){e.fetchState="pending"})),r)}),P=A.actions,F=A.reducer,J=(P.forecastReset,P.setCityToSearch),U=F,Z=z.a.create({baseURL:"/ipLocation"}),q={fetchState:null,response:null},Q=Object(m.b)("cities/fetchIpLocation",(function(){return Z.get("/").then((function(e){return e.data})).catch((function(e){return e}))})),X=Object(m.c)({name:"ipLocation",initialState:q,reducers:{ipLocationReset:function(){return q}},extraReducers:(c={},Object(j.a)(c,Q.fulfilled,(function(e,t){e.response=t.payload,e.fetchState="fulfilled"})),Object(j.a)(c,Q.pending,(function(e){e.fetchState="pending"})),c)}),_=X.actions,K=X.reducer,Y=(_.ipLocationReset,K),$=Object(m.a)({reducer:{ui:S,cities:M,forecast:U,ipLocation:Y}});$.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){throw new Error("can't access localStorage")}}($.getState().ui)}));var ee=a(83),te=a(184),ae=a(185),ne=a(166),re=a(186),ce=a(188),ie=a(167),le=(a(127),a(30)),oe=a(187),se=a(160),ue=a(156),me=a(161),fe=a(154);var pe=function(e){var t=e.text,a=Object(u.b)(),n=Object(u.c)((function(e){return e.ipLocation.response})),r=Object(u.c)((function(e){return e.ipLocation.fetchState})),c=Object(u.c)((function(e){return e.forecast.cityToSearch}));return Object(i.useEffect)((function(){"pending"!==r&&a(Q())}),[]),"fulfilled"===r&&n&&!c.id&&l.a.createElement(ce.a,{m:1},l.a.createElement(fe.a,{href:"#",onClick:function(e){var t=n.countryCode,r=n.city,c=n.lon,i=n.lat;e.preventDefault();a(J({id:"ipLocation",name:r,lon:c,lat:i,country:t}))},variant:"body1"},l.a.createElement("em",null,t),l.a.createElement("strong",null,"".concat(n.city,"-").concat(n.countryCode))))};var de=function(){var e=Object(u.b)(),t=Object(i.useRef)(),a=Object(u.c)((function(e){return e.ui.inputValue})),n=Object(u.c)((function(e){return e.cities.fetchState})),r=Object(ue.a)((function(t){a.length>1&&e(W(t))}),1e3),c=Object(le.a)(r,1)[0];return l.a.createElement(l.a.Fragment,null,l.a.createElement(oe.a,{inputRef:t,label:"Enter city name",id:"outlined-margin-normal",variant:"outlined",fullWidth:!0,onChange:function(t){var a=t.target.value;e(C(a)),c(a)},value:a,disabled:"pending"===n,autoComplete:"off",InputProps:{endAdornment:a&&l.a.createElement(se.a,{edge:"end",onClick:function(){e(C("")),t.current.focus()}},l.a.createElement(me.a,null))}}),l.a.createElement("br",null),l.a.createElement(pe,{text:"...Or use device IP location: "}))},he=a(189),Ee=a(157),ge=a(168),be=a(85),xe=a(163),ye=a(164),ve=a(190),Ce=a(165),we=a(162);var Oe=function(e){var t=e.city,a=e.onCityClick,n=t.id,r=t.name,c=t.state,i=t.flag,o=t.coord,s=t.country,u=o.lon,m=o.lat,f=Object(we.a)({avatar:{minWidth:"40px"},small:{height:"24px",width:"24px"},ListItemText:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}})();return l.a.createElement(xe.a,{minwidth:"0px",button:!0,onClick:function(){return a(n,r,u,m,s)}},l.a.createElement(ye.a,{classes:{root:f.avatar}},l.a.createElement(ve.a,{className:f.small,variant:"circle",alt:"country flag of ".concat(r),src:i})),l.a.createElement(Ce.a,{disableTypography:!0,classes:{root:f.ListItemText}},c&&"".concat(c," - "),r))};function Se(e){var t=e.index,a=e.style,n=e.data,r=n.cities,c=n.onCityClick,i=r[t];return l.a.createElement("div",{style:a,key:t},l.a.createElement(Oe,{city:i,onCityClick:c}))}var je=function(e){var t=e.cities,a=e.onCityClick;return l.a.createElement(ne.a,{in:!0,timeout:1e3},l.a.createElement(be.a,{className:"List",scrollToItem:!0,height:300,itemCount:t.length,itemSize:36,itemData:{cities:t,onCityClick:a},overscanCount:4},Se))};var Ne=function(){var e=Object(u.b)(),t=function(t,a,n,r,c){e(C(a)),e(w({id:t,name:a,lon:n,lat:r,country:c})),e(R()),e(J({id:t,name:a,lon:n,lat:r,country:c}))},a=Object(u.c)((function(e){return e.cities.response})),n=Object(u.c)((function(e){return e.cities.cityNameToSearch})),r=Object(u.c)((function(e){return e.cities.fetchState}));return Object(i.useEffect)((function(){n&&e(T(n))}),[n,e]),function(){if("idle"!==r){if("fulfilled"===r)return a.name?l.a.createElement(ne.a,{in:!0,timeout:1e3},l.a.createElement(he.a,{severity:"error"},a.message)):a.length?l.a.createElement(je,{cities:a,onCityClick:t}):l.a.createElement(ne.a,{in:!0,timeout:1e3},l.a.createElement(he.a,{severity:"info"},'No cities found using "',n,'".'));if("pending"===r)return l.a.createElement(Ee.a,{in:!0,timeout:1e3},l.a.createElement(ie.a,{container:!0,justify:"center"},l.a.createElement(ge.a,null)))}return null}()},ze=a(169),ke=a(170),Ve=a(171),Te=a(172),De=a(173),Ie=a(174),Le=a(59),Re=Object(we.a)({container:{display:"flex",flexWrap:"wrap",fontSize:"12px"},cluster:{display:"flex",flexGrow:"1",flexBasis:"256px"},group:{display:"flex",flexDirection:"column",flexGrow:"1",flexBasis:"128px"},pair:{display:"flex",flexDirection:"row"},key:{padding:"2px",display:"flex",fontWeight:"bold",flexGrow:"1",flexBasis:"64px",justifyContent:"flex-end",whiteSpace:"nowrap"},value:{padding:"2px",display:"flex",flexGrow:"1",flexBasis:"64px",whiteSpace:"nowrap"},specialGroup:{display:"flex",flexGrow:"1",flexBasis:"128px",justifyContent:"center"},temp:{display:"flex",fontSize:"38px",fontWeight:"bold",alignItems:"center",lineHeight:"32px"},icon:{display:"flex",height:"unset",width:"32px"}});var We=function(e){var t=e.data,a=Re(),n=t.minTemp,r=t.maxTemp,c=t.sunrise,i=t.sunset,o=t.pressure,s=t.humidity,m=t.tz,h=Object(u.c)((function(e){return e.ui.prefersCelcius})),E=(r+n)/2,g=h?p(E):d(E),b=h?p(n):d(n),x=h?p(r):d(r),y=f(c,m),v=f(i,m),C=function(e){var t=Math.round(e-273.15);return t<0?{id:1,name:"Freezing",color:"primary.light",path:"m 16,30 c 2.209139,0 4,-1.790861 4,-4 0,-1.480566 -0.804398,-2.773254 -2,-3.464871 V 4.0049466 C 18,2.8976452 17.11227,2 16,2 14.895431,2 14,2.8970262 14,4.0049466 V 22.535129 C 12.804398,23.226746 12,24.519434 12,26 c 0,2.209139 1.790861,4 4,4 z m 0,2 c -3.313709,0 -6,-2.686291 -6,-6 0,-1.777005 0.772506,-3.373582 2,-4.472213 V 4.0055202 C 12,1.7870853 13.790861,0 16,0 c 2.204644,0 4,1.7933325 4,4.0055202 V 21.527787 c 1.227494,1.098631 2,2.695208 2,4.472213 0,3.313709 -2.686291,6 -6,6 z m 0,0"}:t>=0&&t<10?{id:2,name:"Cold",color:"primary.light",path:"m 16,32 c -3.313709,0 -6,-2.686291 -6,-6 0,-1.777005 0.772506,-3.373582 2,-4.472213 V 4.0055202 C 12,1.7870853 13.790861,0 16,0 c 2.204644,0 4,1.7933325 4,4.0055202 V 21.527787 c 1.227494,1.098631 2,2.695208 2,4.472213 0,3.313709 -2.686291,6 -6,6 z m 0,-2 c 2.209139,0 4,-1.790861 4,-4 0,-1.480566 -0.804398,-2.773254 -2,-3.464871 V 4.0049466 C 18,2.8976452 17.11227,2 16,2 14.895431,2 14,2.8970262 14,4.0049466 V 22.535129 C 12.804398,23.226746 12,24.519434 12,26 c 0,2.209139 1.790861,4 4,4 z m 0,-1 c -1.656854,0 -3,-1.343146 -3,-3 0,-1.656854 1.343146,-3 3,-3 1.656854,0 3,1.343146 3,3 0,1.656854 -1.343146,3 -3,3 z m 0,0"}:t>=10&&t<20?{id:3,name:"Cool",color:"warning.light",path:"m 16,30 c 2.209139,0 4,-1.790861 4,-4 0,-1.480566 -0.804398,-2.773254 -2,-3.464871 V 4.0049466 C 18,2.8976452 17.11227,2 16,2 14.895431,2 14,2.8970262 14,4.0049466 V 22.535129 C 12.804398,23.226746 12,24.519434 12,26 c 0,2.209139 1.790861,4 4,4 z m 0,-1 c -1.656854,0 -3,-1.343146 -3,-3 0,-1.31085 0.840738,-2.425335 2.012406,-2.833649 C 15.004239,23.115176 15,23.062694 15,23.009222 V 18.990778 C 15,18.450975 15.447715,18 16,18 c 0.556135,0 1,0.443586 1,0.990778 v 4.018444 c 0,0.05332 -0.0044,0.105767 -0.01277,0.157002 C 18.159087,23.574432 19,24.689013 19,26 c 0,1.656854 -1.343146,3 -3,3 z m 0,3 c -3.313709,0 -6,-2.686291 -6,-6 0,-1.777005 0.772506,-3.373582 2,-4.472213 V 4.0055202 C 12,1.7870853 13.790861,0 16,0 c 2.204644,0 4,1.7933325 4,4.0055202 V 21.527787 c 1.227494,1.098631 2,2.695208 2,4.472213 0,3.313709 -2.686291,6 -6,6 z m 0,0"}:t>=20&&t<30?{id:4,name:"Warm",color:"warning.light",path:"m 16,30 c 2.209139,0 4,-1.790861 4,-4 0,-1.480566 -0.804398,-2.773254 -2,-3.464871 V 4.0049466 C 18,2.8976452 17.11227,2 16,2 14.895431,2 14,2.8970262 14,4.0049466 V 22.535129 C 12.804398,23.226746 12,24.519434 12,26 c 0,2.209139 1.790861,4 4,4 z m 0,-1 c -1.656854,0 -3,-1.343146 -3,-3 0,-1.311415 0.841462,-2.426295 2.01392,-2.834176 C 15.004763,23.111105 15,23.054878 15,22.997527 V 13.002473 C 15,12.455761 15.447715,12 16,12 c 0.556135,0 1,0.448823 1,1.002473 v 9.995054 c 0,0.05719 -0.0049,0.113383 -0.0143,0.168164 C 18.158354,23.573461 19,24.688442 19,26 c 0,1.656854 -1.343146,3 -3,3 z m 0,3 c -3.313709,0 -6,-2.686291 -6,-6 0,-1.777005 0.772506,-3.373582 2,-4.472213 V 4.0055202 C 12,1.7870853 13.790861,0 16,0 c 2.204644,0 4,1.7933325 4,4.0055202 V 21.527787 c 1.227494,1.098631 2,2.695208 2,4.472213 0,3.313709 -2.686291,6 -6,6 z m 0,0"}:t>=30&&t<40?{id:5,name:"Hot",color:"secondary.light",path:"m 16,30 c 2.209139,0 4,-1.790861 4,-4 0,-1.480566 -0.804398,-2.773254 -2,-3.464871 V 4.0049466 C 18,2.8976452 17.11227,2 16,2 14.895431,2 14,2.8970262 14,4.0049466 V 22.535129 C 12.804398,23.226746 12,24.519434 12,26 c 0,2.209139 1.790861,4 4,4 z m 0,-1 c -1.656854,0 -3,-1.343146 -3,-3 0,-1.306218 0.834806,-2.417456 2,-2.829294 V 7.9933977 C 15,7.4449463 15.447715,7 16,7 c 0.556135,0 1,0.4447593 1,0.9933977 V 23.170706 c 1.165194,0.411838 2,1.523076 2,2.829294 0,1.656854 -1.343146,3 -3,3 z m 0,3 c -3.313709,0 -6,-2.686291 -6,-6 0,-1.777005 0.772506,-3.373582 2,-4.472213 V 4.0055202 C 12,1.7870853 13.790861,0 16,0 c 2.204644,0 4,1.7933325 4,4.0055202 V 21.527787 c 1.227494,1.098631 2,2.695208 2,4.472213 0,3.313709 -2.686291,6 -6,6 z m 0,0"}:t>=40?{id:6,name:"Blazing",color:"secondary.light",path:"m 16,30 c 2.209139,0 4,-1.790861 4,-4 0,-1.480566 -0.804398,-2.773254 -2,-3.464871 V 4.0049466 C 18,2.8976452 17.11227,2 16,2 14.895431,2 14,2.8970262 14,4.0049466 V 22.535129 C 12.804398,23.226746 12,24.519434 12,26 c 0,2.209139 1.790861,4 4,4 z m 0,-1 c -1.656854,0 -3,-1.343146 -3,-3 0,-1.306218 0.834806,-2.417456 2,-2.829294 V 4.0024617 C 15,3.4394583 15.447715,3 16,3 c 0.556135,0 1,0.4488174 1,1.0024617 V 23.170706 c 1.165194,0.411838 2,1.523076 2,2.829294 0,1.656854 -1.343146,3 -3,3 z m 0,3 c -3.313709,0 -6,-2.686291 -6,-6 0,-1.777005 0.772506,-3.373582 2,-4.472213 V 4.0055202 C 12,1.7870853 13.790861,0 16,0 c 2.204644,0 4,1.7933325 4,4.0055202 V 21.527787 c 1.227494,1.098631 2,2.695208 2,4.472213 0,3.313709 -2.686291,6 -6,6 z m 0,0"}:{id:0,name:"error",color:"warning",path:""}}(E),w=C.color,O=C.path;return l.a.createElement(ie.a,{className:a.container},l.a.createElement(ie.a,{className:a.cluster},l.a.createElement(ie.a,{className:a.specialGroup},l.a.createElement(Le.a,{className:a.icon,viewBox:"0 0 32 32"},l.a.createElement("path",{d:O})),l.a.createElement(ce.a,{classes:{root:a.temp},component:"span",color:w},g)),l.a.createElement(ie.a,{className:a.group},l.a.createElement(ie.a,{className:a.pair},l.a.createElement(ie.a,{className:a.key},"Maximum: "),l.a.createElement(ie.a,{className:a.value},x)),l.a.createElement(ie.a,{className:a.pair},l.a.createElement(ie.a,{className:a.key},"Minimum: "),l.a.createElement(ie.a,{className:a.value},b)))),l.a.createElement(ie.a,{className:a.cluster},l.a.createElement(ie.a,{className:a.group},l.a.createElement(ie.a,{className:a.pair},l.a.createElement(ie.a,{className:a.key},"Pressure: "),l.a.createElement(ie.a,{className:a.value},"".concat(o," hPa"))),l.a.createElement(ie.a,{className:a.pair},l.a.createElement(ie.a,{className:a.key},"Humidity: "),l.a.createElement(ie.a,{className:a.value},"".concat(s," %")))),l.a.createElement(ie.a,{className:a.group},l.a.createElement(ie.a,{className:a.pair},l.a.createElement(ie.a,{className:a.key},"Sunrise: "),l.a.createElement(ie.a,{className:a.value},y)),l.a.createElement(ie.a,{className:a.pair},l.a.createElement(ie.a,{className:a.key},"Sunset: "),l.a.createElement(ie.a,{className:a.value},v)))))},Me=Object(we.a)({container:{display:"flex",flexWrap:"wrap",fontSize:"12px",flexDirection:"row"},item:{display:"flex",flexDirection:"column",flexGrow:"1"},row:{display:"flex",justifyContent:"center"}});var Be=function(e){var t=Me(),a=e.forecast,n=e.tz,r=[1,2,3,4,5],c=Object.values(a).filter((function(e,t){return r.includes(t)})),i=Object(u.c)((function(e){return e.ui.prefersCelcius}));return l.a.createElement(ie.a,{className:t.container},c.map((function(e){var a=e.dt,r=e.sunrise,c=e.temp,o=e.weather,s=c.day,u=function(e,t){var a={weekday:"short",day:"2-digit",timeZone:t},n=new Date(1e3*e);return new Intl.DateTimeFormat("en-GB",a).format(n)}(a,n),m=i?p(s):d(s),f=o[0].icon;return l.a.createElement(ie.a,{item:!0,xs:!0,key:r,className:t.item},l.a.createElement(ie.a,{className:t.row},u),l.a.createElement(ie.a,{className:t.row},l.a.createElement(ve.a,{alt:"sss",src:"http://openweathermap.org/img/wn/".concat(f,"@2x.png")})),l.a.createElement(ie.a,{className:t.row},m))})))},Ge=Object(we.a)({cardHeaderContent:{minWidth:"0"},cardHeaderTitle:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",minWidth:"0",fontSize:"15px;"},cardHeaderSubheader:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",minWidth:"0",fontSize:"12px;"},weatherAvatar:{backgroundColor:"rgba(127,127,127,1)",width:"40px",height:"40px"},flagAvatar:{width:"40px",height:"40px"},worldMapAvatar:{margin:"8px",width:"100px",height:"100px",position:"absolute",boxShadow:"0px 0px 4px rgba(127,127,127,0.5)"},title:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},withBoxShadow:{boxShadow:"0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"}});var He=function(e){var t=Ge(),a=e.response,n=a.extraData,r=a.forecast,c=n.name,o=n.cityName,s=n.flag,u=n.region,m=n.subregion,f=n.lat,p=n.lon,d=n.timezoneOffset,h=n.tz,E=r[0],g=E.sunrise,b=E.weather,x=E.sunset,y=E.pressure,v=E.temp,C=E.humidity,w={minTemp:v.min,maxTemp:v.max,sunrise:g,sunset:x,timezoneOffset:d,tz:h,flag:s,region:u,subregion:m,pressure:y,humidity:C},O=b[0],S=O.main,j=O.description,N=O.icon,z=function(e){var t={day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1,timeZoneName:"short",timeZone:e},a=Date.now();return new Intl.DateTimeFormat("en-GB",t).format(a)}(h),k=Object(i.useState)(!1),V=Object(le.a)(k,2),T=V[0],D=V[1],I=Object(i.useState)(!1),L=Object(le.a)(I,2),R=L[0],W=L[1],M=Object(i.useState)(!1),B=Object(le.a)(M,2),G=B[0],H=B[1],A=Object(i.useState)(!1),P=Object(le.a)(A,2),F=P[0],J=P[1],U="AIzaSyATSrlXeexQILWJpBpOehRMdeVeRowLq70",Z="".concat("https://maps.googleapis.com/maps/api/staticmap","?zoom=10&scale=1&size=568x568&maptype=hybrid&markers=size:mid%7Ccolor:red%7C").concat(f,",").concat(p,"&key=").concat(U),q="".concat("https://maps.googleapis.com/maps/api/staticmap","?zoom=1&scale=1&size=100x100&maptype=terrain&markers=size:tiny%7Ccolor:red%7C").concat(f,",").concat(p,"&key=").concat(U);return l.a.createElement(ne.a,{in:!0,timeout:1e3},l.a.createElement(ze.a,null,l.a.createElement(ie.a,{container:!0,spacing:0},l.a.createElement(ie.a,{item:!0,xs:12,sm:6},l.a.createElement(ke.a,{classes:{content:t.cardHeaderContent,title:t.cardHeaderTitle,subheader:t.cardHeaderSubheader},avatar:l.a.createElement(ne.a,{in:G,timeout:1e3},l.a.createElement(ve.a,{alt:"country flag of ".concat(o),src:s,classes:{root:t.flagAvatar},onLoad:function(){return H(!0)},className:t.withBoxShadow})),title:"".concat(o),subheader:c})),l.a.createElement(ie.a,{item:!0,xs:12,sm:6},l.a.createElement(ke.a,{classes:{content:t.cardHeaderContent,title:t.cardHeaderTitle,subheader:t.cardHeaderSubheader},avatar:l.a.createElement(ne.a,{in:F,timeout:1e3},l.a.createElement(ve.a,{alt:j,src:"http://openweathermap.org/img/wn/".concat(N,"@2x.png"),classes:{root:t.weatherAvatar},onLoad:function(){return J(!0)},className:t.withBoxShadow})),title:"".concat(S," (").concat(j,")"),subheader:z}))),l.a.createElement(Ve.a,{light:!0,variant:"middle"}),l.a.createElement(Te.a,null,l.a.createElement(We,{data:w})),l.a.createElement(Ve.a,{light:!0,variant:"middle"}),l.a.createElement(Te.a,null,l.a.createElement(Be,{forecast:r,tz:h})),l.a.createElement(De.a,{in:T,timeout:1e3,onEntered:function(){return W(!0)}},l.a.createElement(ne.a,{in:R,timeout:1e3},l.a.createElement(ve.a,{alt:"world map",src:q,classes:{root:t.worldMapAvatar},className:t.withBoxShadow})),l.a.createElement(Ie.a,{component:"img",src:Z,onLoad:function(){return D(!0)}}))))};var Ae=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.forecast.response})),a=Object(u.c)((function(e){return e.forecast.cityToSearch})),n=Object(u.c)((function(e){return e.forecast.fetchState})),r=Object(u.c)((function(e){return e.cities.cityNameToSearch}));return Object(i.useEffect)((function(){a.id&&e(H(Object(h.a)({},a)))}),[a,a.id,e]),function(){if("idle"!==n&&!r){if("fulfilled"===n)return t.message?l.a.createElement(ne.a,{in:!0,timeout:1e3},l.a.createElement(he.a,{severity:"error"},t.message)):t.extraData?l.a.createElement(He,{response:t}):l.a.createElement(ne.a,{in:!0,timeout:1e3},l.a.createElement(he.a,{severity:"info"},"No forecast found."));if("pending"===n)return l.a.createElement(Ee.a,{in:!0,timeout:1e3},l.a.createElement(ie.a,{container:!0,justify:"center"},l.a.createElement(ge.a,null)))}return null}()},Pe=a(130),Fe=a(175),Je=a(192),Ue=a(84),Ze=a(159),qe=a(179),Qe=a(182),Xe=a(176),_e=a(177),Ke=a(178),Ye=a(180),$e=a(181),et=a(183),tt=a(191);var at=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.ui.prefersDarkMode}));return l.a.createElement(tt.a,{checked:t,onChange:function(){e(y())},color:"default"})};var nt=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.ui.prefersCelcius}));return l.a.createElement(tt.a,{checked:t,onChange:function(){e(v())},color:"default"})},rt=Object(we.a)((function(e){return{small:{width:e.spacing(4),height:e.spacing(4)},dot:{margin:"4px",fontSize:"8px"},list:{minWidth:"288px",outline:"none"},root:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"224px"},pushToRight:{marginLeft:"auto"}}}));var ct=function(){var e=rt(),t=Object(u.b)(),a=Object(i.useState)(null),n=Object(le.a)(a,2),r=n[0],c=n[1],o=Boolean(r),s=Object(u.c)((function(e){return e.ui.previousCities})),m=function(){c(null)};return l.a.createElement(Pe.a,{position:"static",color:"primary"},l.a.createElement(Fe.a,{disableGutters:!0,variant:"dense"},l.a.createElement(se.a,{"aria-label":"menu1","aria-controls":"menu1","aria-haspopup":"true",onClick:function(e){c(e.currentTarget)}},l.a.createElement(Xe.a,null)),l.a.createElement(_e.a,{className:e.dot,color:"secondary"}),l.a.createElement(ce.a,{fontWeight:"bold",fontStyle:"italic",fontSize:"18px",component:"span"},"WEATHER"),l.a.createElement(_e.a,{className:e.dot,color:"disabled"}),l.a.createElement(ce.a,{fontWeight:"bold",fontStyle:"italic",fontSize:"18px",component:"span"},"APP"),l.a.createElement(_e.a,{className:e.dot,color:"primary"}),l.a.createElement(Je.a,{title:"Go to repository",placement:"left",arrow:!0},l.a.createElement(se.a,{"aria-label":"github",href:"https://github.com/aserantes/forecast",className:e.pushToRight,target:"_blank",rel:"noopener"},l.a.createElement(Ke.a,null)))),l.a.createElement(Ue.a,{id:"menu1",anchorEl:r,keepMounted:!0,open:o,onClose:m},l.a.createElement(Ze.a,{className:e.list,subheader:l.a.createElement(qe.a,null,"SETTINGS")},l.a.createElement(xe.a,null,l.a.createElement(Ce.a,null,"Dark Mode"),l.a.createElement(ve.a,{className:e.small},l.a.createElement(Ye.a,null)),l.a.createElement(at,null),l.a.createElement(ve.a,{className:e.small},l.a.createElement($e.a,null))),l.a.createElement(xe.a,null,l.a.createElement(Ce.a,null,"Temp. Unit"),l.a.createElement(ve.a,{className:e.small,size:"small"},l.a.createElement(ce.a,{fontWeight:"bold",fontSize:"1.2em"},"F")),l.a.createElement(nt,null),l.a.createElement(ve.a,{className:e.small,size:"small"},l.a.createElement(ce.a,{fontWeight:"bold",fontSize:"1.2em"},"C")))),s.length>0&&l.a.createElement(Ve.a,null)&&l.a.createElement(Ze.a,{dense:!0,subheader:l.a.createElement(qe.a,null,"PREVIOUS CITIES")},s.map((function(a,n){return l.a.createElement(xe.a,{button:!0,key:a.id,onClick:function(){return e=a.id,n=a.name,r=a.lon,c=a.lat,i=a.country,t(C(n)),t(J({id:e,name:n,lon:r,lat:c,country:i})),void m();var e,n,r,c,i}},l.a.createElement(Ce.a,{disableTypography:!0,classes:{root:e.root}},a.name),l.a.createElement(Qe.a,null,l.a.createElement(se.a,{edge:"end","aria-label":"delete",onClick:function(){return function(e){t(O(e))}(n)}},l.a.createElement(et.a,null))))})))))};var it=function(){var e=Object(u.c)((function(e){return e.ui.prefersDarkMode})),t=l.a.useMemo((function(){return Object(ee.a)({palette:{type:e?"dark":"light"}})}),[e]);return l.a.createElement(te.a,{theme:t},l.a.createElement(ae.a,null,l.a.createElement(ne.a,{in:!0,timeout:1e3},l.a.createElement(re.a,{maxWidth:"sm",disableGutters:!0},l.a.createElement(ce.a,{m:2},l.a.createElement(ie.a,{container:!0,spacing:2},l.a.createElement(ie.a,{item:!0,xs:12},l.a.createElement(ct,null)),l.a.createElement(ie.a,{item:!0,xs:12},l.a.createElement(de,null)),l.a.createElement(ie.a,{item:!0,xs:12},l.a.createElement(Ne,null),l.a.createElement(Ae,null))))))))};s.a.render(l.a.createElement(u.a,{store:$},l.a.createElement(it,null)),document.getElementById("root"))}},[[101,1,2]]]);
//# sourceMappingURL=main.a9045437.chunk.js.map