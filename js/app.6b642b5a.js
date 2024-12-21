(()=>{var e={9608:(e,t,r)=>{"use strict";var n=r(9104),o=r(6501),a=r(8734),i=r(1758);function l(e,t,r,n,o,a){const l=(0,i.g2)("router-view");return(0,i.uX)(),(0,i.Wv)(l)}const c=(0,i.pM)({name:"App"});var s=r(2807);const u=(0,s.A)(c,[["render",l]]),d=u;var p=r(1573),f=r(455);const h=[{path:"/",component:()=>Promise.all([r.e(121),r.e(379)]).then(r.bind(r,8379)),children:[{path:"",component:()=>Promise.all([r.e(121),r.e(749)]).then(r.bind(r,4749))},{path:"/participant",component:()=>Promise.all([r.e(121),r.e(120)]).then(r.bind(r,9739))},{path:"/match",component:()=>Promise.all([r.e(121),r.e(440)]).then(r.bind(r,5440))},{path:"/whereismycard",component:()=>Promise.all([r.e(121),r.e(424)]).then(r.bind(r,9424))},{path:"/member",component:()=>Promise.all([r.e(121),r.e(173)]).then(r.bind(r,7173))},{path:"/order",component:()=>Promise.all([r.e(121),r.e(880)]).then(r.bind(r,5880))},{path:"/setting",component:()=>Promise.all([r.e(121),r.e(291)]).then(r.bind(r,2291))},{path:"/link",component:()=>Promise.all([r.e(121),r.e(364)]).then(r.bind(r,3364))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(121),r.e(727)]).then(r.bind(r,5727))}],b=h,m=(0,p.wE)((function(){const e=f.Bt,t=(0,f.aE)({scrollBehavior:()=>({left:0,top:0}),routes:b,history:e("")});return t}));async function v(e,t){const r=e(d);r.use(o.A,t);const n=(0,a.IG)("function"===typeof m?await m({}):m);return{app:r,router:n}}var g=r(989);const y={config:{notify:{}},plugins:{Notify:g.A}},w="";async function P({app:e,router:t},r){let n=!1;const o=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},a=e=>{if(n=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=o(e);null!==t&&(window.location.href=t,window.location.reload())},i=window.location.href.replace(window.location.origin,"");for(let c=0;!1===n&&c<r.length;c++)try{await r[c]({app:e,router:t,ssrContext:null,redirect:a,urlPath:i,publicPath:w})}catch(l){return l&&l.url?void a(l.url):void console.error("[Quasar] boot error:",l)}!0!==n&&(e.use(t),e.mount("#q-app"))}v(n.Ef,y).then((e=>{const[t,n]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(r.bind(r,7854)),Promise.resolve().then(r.t.bind(r,8721,23))]).then((t=>{const r=n(t).filter((e=>"function"===typeof e));P(e,r)}))}))},8721:()=>{},7854:(e,t,r)=>{"use strict";r.r(t),r.d(t,{api:()=>i,default:()=>l});var n=r(1573),o=r(6306),a=r.n(o);const i=a().create({baseURL:"https://api.example.com"}),l=(0,n.zj)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(u=0;u<e.length;u++){for(var[n,o,a]=e[u],l=!0,c=0;c<n.length;c++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(l=!1,a<i&&(i=a));if(l){e.splice(u--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,o,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"===typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"===typeof n.then)return n}var a=Object.create(null);r.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&o&&n;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>i[e]=()=>n[e]));return i["default"]=()=>n,r.d(a,i),a}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{120:"ba6eb8b1",173:"b41714bc",291:"c13c3e32",364:"cb4f24bb",379:"4c255c96",424:"01e5a4fd",440:"059d8629",727:"592a9fbf",749:"18f6c591",880:"ba36ceba"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+e+"."+{120:"9cb2eb8d",173:"d641c41f",291:"9ff08940",364:"9ff08940",379:"9ff08940",424:"9ff08940",440:"d641c41f",749:"9b8e45e8",880:"9ff08940"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="quasar-bgb-matchmanagement:";r.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var l,c;if(void 0!==a)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var d=s[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+a){l=d;break}}l||(c=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+a),l.src=n),e[n]=[o];var p=(t,r)=>{l.onerror=l.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),c&&document.head.appendChild(l)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{if("undefined"!==typeof document){var e=(e,t,n,o,a)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",r.nc&&(i.nonce=r.nc);var l=r=>{if(i.onerror=i.onload=null,"load"===r.type)o();else{var n=r&&r.type,l=r&&r.target&&r.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+": "+l+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=n,c.request=l,i.parentNode&&i.parentNode.removeChild(i),a(c)}};return i.onerror=i.onload=l,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){o=i[n],a=o.getAttribute("data-href");if(a===e||a===t)return o}},n=n=>new Promise(((o,a)=>{var i=r.miniCssF(n),l=r.p+i;if(t(i,l))return o();e(n,l,null,o,a)})),o={524:0};r.f.miniCss=(e,t)=>{var r={120:1,173:1,291:1,364:1,379:1,424:1,440:1,749:1,880:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=n(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}}})(),(()=>{var e={524:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=a);var i=r.p+r.u(t),l=new Error,c=n=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,o[1](l)}};r.l(i,c,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,l,c]=n,s=0;if(i.some((t=>0!==e[t]))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(c)var u=c(r)}for(t&&t(n);s<i.length;s++)a=i[s],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},n=globalThis["webpackChunkquasar_bgb_matchmanagement"]=globalThis["webpackChunkquasar_bgb_matchmanagement"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[121],(()=>r(9608)));n=r.O(n)})();