(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports={peopleList:"ISSPeople_peopleList__29Mdh"}},24:function(e,t,n){e.exports={container:"ISSPosition_container__2LU6P"}},28:function(e,t,n){e.exports=n(37)},37:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(13),c=n.n(r),i=n(10),u=n(22),s=n.n(u),l=n(23),p=n.n(l),f=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)(function(){s()("http://api.open-notify.org/astros.json").then(function(e){return e.json()}).then(function(e){r(e.people)})},[]),o.a.createElement("ul",{className:p.a.peopleList},n.map(function(e,t){return o.a.createElement("li",{key:t},o.a.createElement("a",{href:"https://en.wikipedia.org/wiki/".concat(e.name.replace(/\s+/g,"_"))},e.name))}))},m=n(27),b=n(5),h=n(41),j=n(44),E=n(45),O=n(48),g=n(42),v=n(49),d=n(46),w=n(40),S=n(43),_=n(47);var F=function(e,t){var n=Object(a.useRef)();Object(a.useEffect)(function(){n.current=e},[e]),Object(a.useEffect)(function(){if(null!==t){var e=setInterval(function(){n.current()},t);return function(){return clearInterval(e)}}},[t])},y=n(24),C=n.n(y),D=["#001f3f","#0074D9","#7FDBFF","#39CCCC","#3D9970","#2ECC40","#01FF70","#FFDC00","#FF851B","#FF4136","#85144b","#F012BE","#B10DC9","#111111","#AAAAAA","#DDDDDD"],I=function(e){var t=e.position,n=e.setCenter,r=Object(a.useState)([[]]),c=Object(i.a)(r,2),u=c[0],s=c[1],l=Object(a.useRef)(null);return Object(a.useEffect)(function(){"number"===typeof l.current&&l.current>150&&t[1]<-150?(s(Object(d.a)([t])),n(t)):s(function(e){return[].concat(Object(m.a)(Object(w.a)(e)),[Object(S.a)(Object(d.a)(t),_.a)(e)])}),l.current=t[1]},[t]),o.a.createElement(h.a,null,u.map(function(e,t){return o.a.createElement(j.a,{color:(n=t,D[n>=16?n%16:n]),positions:e,key:t});var n}))},k=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(3),u=Object(i.a)(c,2),s=u[0],l=u[1],p=Object(a.useState)([0,0]),f=Object(i.a)(p,2),m=f[0],h=f[1],j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return!0};fetch("http://api.open-notify.org/iss-now.json").then(function(e){return e.json()}).then(function(e){return[parseFloat(e.iss_position.latitude,10),parseFloat(e.iss_position.longitude,10)]}).then(function(e){return r(e),e}).then(e)};Object(a.useEffect)(function(){return j(h)},[]),F(j,500);return null===n?null:o.a.createElement(E.a,{onZoomEnd:function(e){return l(e.target.getZoom())},onMoveEnd:function(e){return h(e.target.getCenter())},animate:!0,className:C.a.container,center:m,zoom:s},o.a.createElement(O.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),o.a.createElement(I,{position:n,setCenter:h}),o.a.createElement(g.a,{position:n,icon:new b.Icon({iconUrl:"https://static.wixstatic.com/media/5bc9ff_a6d47cc01cd549cbbca14c16a764affa~mv2.png/v1/fill/w_1075,h_428,al_c,lg_1,q_85/international-space-station-png-2.webp",iconSize:[75,30],iconAnchor:[25,15]})},o.a.createElement(v.a,null,"A pretty CSS3 popup.",o.a.createElement("br",null),"Easily customizable.")))},A=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2);t[0],t[1];return o.a.createElement("div",null,o.a.createElement("h1",{className:"ta-center"},"ISS Information"),o.a.createElement(k,null),o.a.createElement("h2",{className:"ta-center"},"Who's Currently on the ISS?"),o.a.createElement("div",{className:"wrapper-small"},o.a.createElement(f,{url:"http://api.open-notify.org/astros.json"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.a248f51d.chunk.js.map