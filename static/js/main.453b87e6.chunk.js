(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,,,,,,function(e,n,t){e.exports=t(17)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(2),c=t.n(a),i=(t(12),t(3)),s=t(4),l=t(5),u=t(6),h=(t(13),t(14),t(15),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{className:"monsterImage",alt:"monster",src:"https://robohash.org/".concat(Math.random(10),"?set=set2&size=180x250")}),r.a.createElement("h3",null,e.monster.name),r.a.createElement("p",null,e.monster.email))}),d=function(e){return r.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return r.a.createElement(h,{key:e.id,monster:e})})))},f=(t(16),function(e){var n=e.placeholder,t=e.handleChange;return r.a.createElement("input",{className:"search",type:"search",placeholder:n,onChange:t})}),m=function(e){Object(u.a)(t,e);var n=Object(l.a)(t);function t(){var e;return Object(i.a)(this,t),(e=n.call(this)).state={search:"",monsters:[]},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e.setState({monsters:n})}))}},{key:"render",value:function(){var e=this,n=this.state,t=n.monsters,o=n.search,a=t.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}));return console.log(a),r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monsters Roblox"),r.a.createElement(f,{placeholder:"Search Monster",handleChange:function(n){return e.setState({search:n.target.value})}}),r.a.createElement(d,{monsters:a}))}}]),t}(o.Component),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/monsteroo_ReactJS",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/monsteroo_ReactJS","/service-worker.js");p?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):v(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):v(n,e)}))}}()}],[[7,1,2]]]);
//# sourceMappingURL=main.453b87e6.chunk.js.map