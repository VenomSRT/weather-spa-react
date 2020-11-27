(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{26:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),i=c.n(a),r=c(19),s=c.n(r),o=c(8),l=c(12),d=c(13),j=c(2),u=(c(26),function(e){var t=e.cityData,c=e.deleteCity,a=e.setCurrentCity,i=e.renewData;return Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("div",{className:"card__delete",onClick:function(){return c(t.id)}}),Object(n.jsx)(o.b,{to:"/".concat(t.name),onClick:function(){console.log(t.name,t.coord),a({name:t.name,coord:t.coord})},children:Object(n.jsx)("h3",{className:"card__title",children:t.name})}),Object(n.jsx)("p",{className:"card__image-container",children:t.weather.map((function(e){return Object(n.jsxs)("figure",{children:[Object(n.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(e.icon,"@2x.png"),alt:e.description}),Object(n.jsx)("figcaption",{children:e.main})]})}))}),Object(n.jsxs)("p",{className:"card__data-row",children:[Object(n.jsx)("span",{children:"Temperature:"})," ",t.main.temp.toFixed(1)," \u2103"]}),Object(n.jsxs)("p",{className:"card__data-row",children:[Object(n.jsx)("span",{children:"Temperature (feels like):"})," ",t.main.feels_like.toFixed(1)," \u2103"]}),Object(n.jsxs)("p",{className:"card__data-row",children:[Object(n.jsx)("span",{children:"Humidity:"})," ",t.main.humidity,"%"]}),Object(n.jsxs)("p",{className:"card__data-row",children:[Object(n.jsx)("span",{children:"Pressure:"})," ",t.main.pressure," hPa"]}),Object(n.jsxs)("p",{className:"card__data-row",children:[Object(n.jsx)("span",{children:"Wind:"}),Object(n.jsxs)("div",{className:"card__wind-data",children:[Object(n.jsxs)("div",{children:[t.wind.speed," m/s"]}),Object(n.jsx)("div",{className:"card__arrow",style:{transform:"rotate(".concat(t.wind.deg,"deg)")}})]})]}),Object(n.jsxs)("p",{className:"card__data-row",children:["Date of last data update: ",new Date(1e3*t.dt).toString().split("GMT")[0]]}),Object(n.jsx)("button",{className:"card__button",onClick:function(){return i(t.id)},children:"Refresh"})]})}),h=(c(32),function(e){var t=e.cities,c=e.setCurrentCity,a=e.deleteCity,i=e.renewData;return Object(n.jsx)("div",{className:"cards",children:t.length>0&&t.map((function(e){return console.log(t),Object(n.jsx)("div",{children:Object(n.jsx)(u,{cityData:e,deleteCity:a,setCurrentCity:c,renewData:i})},e.id)}))})}),m=(c(33),function(e){var t=e.currentCityForecast;return console.log(t),t&&Object(n.jsxs)("div",{className:"city",children:[Object(n.jsx)("h2",{className:"city__title",children:t.name}),Object(n.jsx)("div",{className:"city__weather-container",children:t.hourly.filter((function(e,t){return t<25&&t>0&&!(t%2)})).map((function(e){return Object(n.jsxs)("div",{className:"city__hour-block",children:[Object(n.jsx)("div",{className:"city__temp-outer-container",children:Object(n.jsx)("div",{className:"city__temp-inner-container",children:Object(n.jsx)("div",{className:"city__temp",style:{bottom:"".concat(+e.temp.toFixed(0)+0,"%"),backgroundColor:"hsl(".concat(180+-3*+e.temp.toFixed(0),", 100%, 80%)")},children:Math.round(e.temp)})})}),Object(n.jsxs)("div",{className:"city__hour-title",children:[new Date(1e3*e.dt).getHours(),":00"]})]},"".concat(e.dt))}))})]})}),b="d34e25f9138fc266e1b0343493f27b54",p="metric",O="en",f=function(e){return fetch("".concat("http://api.openweathermap.org/data/2.5/group","?id=").concat(e,"&units=").concat(p,"&lang=").concat(O,"&appid=").concat(b)).then((function(e){return e.json()}))};c(34);var x=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),c=t[0],i=t[1],r=Object(a.useState)(null),s=Object(d.a)(r,2),u=s[0],x=s[1],_=Object(a.useState)([]),g=Object(d.a)(_,2),y=g[0],N=g[1];function v(e){localStorage.setItem("cities",JSON.stringify(e))}return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("cities"));e&&e.length&&f(e.map((function(e){return e.id})).join(",")).then((function(e){N(e.list),v(e.list)}))}),[]),Object(a.useEffect)((function(){var e,t;console.log(c),c&&(e=c.coord.lon,t=c.coord.lat,fetch("".concat("https://api.openweathermap.org/data/2.5/onecall","?lat=").concat(t,"&lon=").concat(e,"&exclude=current,minutely,daily&units=").concat(p,"&lang=").concat(O,"&appid=").concat(b)).then((function(e){return e.json()}))).then((function(e){e.name=c.name,x(e)})).catch((function(e){console.log(e)}))}),[c]),Object(n.jsxs)("div",{className:"main-container",children:[Object(n.jsxs)("header",{className:"header",children:[Object(n.jsx)(o.b,{to:"/",children:Object(n.jsx)("div",{className:"header__link",children:"Home"})}),Object(n.jsxs)("div",{className:"header__search-container",children:[Object(n.jsx)("input",{type:"text",id:"search",className:"header__search-input"}),Object(n.jsx)("button",{className:"header__button",onClick:function(){var e,t=document.querySelector("#search"),c=t.value.trim();y.every((function(e){return e.name!==c}))&&((e=c,fetch("".concat("http://api.openweathermap.org/data/2.5/weather","?q=").concat(e,"&units=").concat(p,"&lang=").concat(O,"&appid=").concat(b)).then((function(e){return e.json()}))).then((function(e){200!==e.cod||y.length&&!y.every((function(t){return t.id!==e.id}))?(console.log(y),alert("Wrong input")):(N([].concat(Object(l.a)(y),[e])),v([].concat(Object(l.a)(y),[e])))})),t.value="")},children:"Add"}),Object(n.jsx)("button",{className:"header__button",onClick:function(){localStorage.clear(),N([])},children:"Clear All"})]})]}),Object(n.jsx)("main",{className:"main",children:Object(n.jsxs)(j.c,{children:[Object(n.jsx)(j.a,{exact:!0,path:"/",children:Object(n.jsx)(h,{cities:y,setCurrentCity:i,deleteCity:function(e){N(y.filter((function(t){return t.id!==e}))),v(y.filter((function(t){return t.id!==e})))},renewData:function(e){console.log("renew"),f(e).then((function(e){console.log(e.list),y.forEach((function(t,c){if(console.log(t.id,e.list[0].id),t.id===e.list[0].id){var n=Object(l.a)(y);n.splice(c,1,e.list[0]),console.log(n),N(n),v(n)}}))})).catch((function(e){return console.log(e)}))}})}),Object(n.jsx)(j.a,{path:"/:cityName",children:Object(n.jsx)(m,{currentCityForecast:u})})]})})]})};s.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(o.a,{children:Object(n.jsx)(x,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.b6d2ce4a.chunk.js.map