(this["webpackJsonpvc-3d-react"]=this["webpackJsonpvc-3d-react"]||[]).push([[0],{61:function(e,t,a){},62:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(0),r=a.n(n),s=a(25),o=a.n(s),l=(a(61),a(62),a(20)),i=a(12),d=a(22),j="SET_ACTIVE",m="SET_MENU",h="SET_SCROLLING_UP",p="SET_SCROLLING_DOWN",b="SET_HEADER_COLORED",O="SET_TITLE";function u(e){return function(t){t(w(e))}}var w=function(e){return{type:m,payload:e}};var v=function(e){return{type:h,payload:e}};var f=function(e){return{type:p,payload:e}};function x(e){return function(t){t(g(e))}}var g=function(e){return{type:b,payload:e}},E=function(e){var t=Object(n.useRef)(null),a=Object(d.b)();return Object(n.useEffect)((function(){a(x(!1));var e=function(e){var c=e.target.documentElement.scrollTop;a(x(c+100>=t.current.scrollHeight))};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}})),Object(c.jsx)("div",{ref:t,className:"row fullscreen-stage",children:Object(c.jsx)("div",{className:"fullscreen-stage__container",children:Object(c.jsxs)("div",{className:"fullscreen-stage__wrapper",children:[Object(c.jsx)("div",{className:"bg-gradient-gray"}),e.children]})})})},y=a(18),N=a(10),S=a(2),M=a(41),A=function(){var e=Object(n.useState)(!1),t=Object(N.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(0),o=Object(N.a)(s,2),l=o[0],i=o[1];return Object(n.useEffect)((function(){S.DefaultLoadingManager.onLoad=function(){return r(!0)},S.DefaultLoadingManager.onProgress=function(e,t,a){return i(t/a*200)}}),[]),Object(M.b)(a,null,{from:{opacity:1,width:0},leave:{opacity:0},update:{width:l}}).map((function(e){var t=e.item,a=e.key,n=e.props,r=n.opacity,s=n.width;return!t&&Object(c.jsx)(M.a.div,{className:"loading",style:{opacity:r},children:Object(c.jsx)("div",{className:"loading-bar-container",children:Object(c.jsx)(M.a.div,{className:"loading-bar",style:{width:s}})})},a)}))},L=a(51);Object(y.b)({OrbitControls:L.a});var _=function(){var e=Object(n.useRef)(),t=Object(y.e)(),a=t.camera,r=t.gl;return Object(y.c)((function(){return e.current.update()})),Object(c.jsx)("orbitControls",{ref:e,args:[a,r.domElement],enableZoom:!1,enablePan:!1,enableDamping:!0,zoomSpeed:.3,dampingFactor:.1,rotateSpeed:.5,minDistance:4.7,maxDistance:8,maxPolarAngle:Math.PI/2.3})},C=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("directionalLight",{intensity:.5,castShadow:!0,"shadow-mapSize-height":512,"shadow-mapSize-width":512})})},D=a(71),I=function(e){var t=e.title,a=void 0===t?"":t,n=e.description,r=void 0===n?"":n;e.containerRef;return Object(c.jsx)(D.a,{children:Object(c.jsxs)("div",{className:"car-description__wrapper",children:[Object(c.jsx)("h1",{className:"car-description__title",children:a}),Object(c.jsx)("h2",{className:"car-description__description",children:r})]})})};function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var a,c,n=function(e,t){if(null==e)return{};var a,c,n={},r=Object.keys(e);for(c=0;c<r.length;c++)a=r[c],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)a=r[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var T=n.createElement("path",{id:"Trazado_100","data-name":"Trazado 100",d:"M8.519-5.533,10-2.524C7.849-1.468,4.246.8,4.246,4.118c0,5.788,10.6,10.153,24.648,10.153.875,0,1.7-.071,2.559-.1-.8-.918-1.839-2.1-3.257-3.672h0l2.492-2.245c5.3,5.885,5.877,6.724,5.939,7.374l.007.117c0,.039,0,.078,0,.119v.06h0l-.007.176c-.062.649-.635,1.487-5.939,7.376h0L28.2,21.226c1.436-1.594,2.487-2.785,3.285-3.707-.866.032-1.7.105-2.587.105-16.486,0-28-5.554-28-13.506C.893.309,3.6-3.118,8.519-5.533Zm40.636.03C54.291-3.147,56.893.09,56.893,4.118c0,5.5-5.382,9.919-14.764,12.11h0l-.763-3.264C48.875,11.211,53.54,7.821,53.54,4.118c0-2.637-1.891-4.788-5.783-6.573h0ZM31.132-13.569v.194L28.093-8.923l.019.039a3.839,3.839,0,0,1,1.452-.252A4.142,4.142,0,0,1,32.6-7.808a4.142,4.142,0,0,1,1.091,3.125,4.557,4.557,0,0,1-1.494,3.411A4.557,4.557,0,0,1,28.654-.115a4.54,4.54,0,0,1-3.572-1.135,4.539,4.539,0,0,1-1.5-3.434,5.784,5.784,0,0,1,.93-3.2l3.64-5.691Zm-14.044-.29c3.254,0,4.9,1.394,4.9,3.736a2.973,2.973,0,0,1-1.975,2.845v.039a3.334,3.334,0,0,1,2.324,3.292c0,2.322-1.821,3.832-5.248,3.832A8.222,8.222,0,0,1,12.83-1.1l.716-2.13a7.2,7.2,0,0,0,3.542.813c1.4,0,2.44-.62,2.44-1.723,0-1.2-.638-1.781-2.44-1.781H14.843V-8.168h2.245c1.531,0,2.092-.716,2.092-1.723s-.638-1.665-2.092-1.665a8.879,8.879,0,0,0-3.175.659l-.774-2.092A9.921,9.921,0,0,1,17.088-13.859Zm23.136,0c3.64,0,5.073,2.652,5.073,6.872S43.864-.115,40.224-.115s-5.111-2.651-5.111-6.873S36.584-13.859,40.224-13.859ZM27-6.309a1.983,1.983,0,0,0-.609,1.626,2.069,2.069,0,0,0,.6,1.67,2.069,2.069,0,0,0,1.67.6,2.048,2.048,0,0,0,1.651-.6,2.048,2.048,0,0,0,.575-1.661A1.962,1.962,0,0,0,30.292-6.3a1.962,1.962,0,0,0-1.637-.531A1.983,1.983,0,0,0,27-6.309Zm13.226-5.247c-1.723,0-2.3,1.491-2.3,4.568s.582,4.57,2.3,4.57c1.7,0,2.265-1.491,2.265-4.57S41.928-11.556,40.224-11.556Zm11.947-3.239a3.107,3.107,0,0,1,.966,2.394,3.141,3.141,0,0,1-.955,2.421,3.141,3.141,0,0,1-2.453.87,3.157,3.157,0,0,1-2.46-.868A3.157,3.157,0,0,1,46.3-12.4a3.134,3.134,0,0,1,.982-2.392,3.134,3.134,0,0,1,2.445-.84A3.107,3.107,0,0,1,52.171-14.795Zm-2.2.9-.245,0a1.444,1.444,0,0,0-1.12.392,1.444,1.444,0,0,0-.449,1.1,1.42,1.42,0,0,0,.432,1.121,1.42,1.42,0,0,0,1.137.389,1.4,1.4,0,0,0,1.133-.387,1.4,1.4,0,0,0,.416-1.123,1.419,1.419,0,0,0-.433-1.1A1.419,1.419,0,0,0,49.975-13.892Z",transform:"translate(-0.893 15.647)",fill:"#fff"});function R(e,t){var a=e.title,c=e.titleId,r=k(e,["title","titleId"]);return n.createElement("svg",P({xmlns:"http://www.w3.org/2000/svg",width:56,height:39.118,viewBox:"0 0 56 39.118",ref:t,"aria-labelledby":c},r),a?n.createElement("title",{id:c},a):null,T)}var V=n.forwardRef(R),Z=(a.p,function(){return Object(c.jsx)(D.a,{children:Object(c.jsx)("div",{className:"car-360__wrapper",children:Object(c.jsx)(V,{})})})}),U=a(73),H=a(72),z=r.a.lazy((function(){return Promise.all([a.e(4),a.e(3)]).then(a.bind(null,75))})),F=function(){var e=Object(U.a)(),t=e&&e.tier>1;return Object(c.jsxs)("div",{className:"car-canvas",children:[Object(c.jsx)(A,{}),Object(c.jsxs)(y.a,{pixelRatio:window.devicePixelRatio,gl:{antialias:!1},camera:{fov:36,position:[-10,10,20]},onCreated:function(e){var t=e.gl;console.log(t),t.toneMapping=S.ACESFilmicToneMapping,t.toneMappingExposure=1,t.outputEncoding=S.sRGBEncoding,t.shadowMap.enabled=!0,t.shadowMapSoft=!0,t.shadowMap.type=S.PCFShadowMap,t.shadowMapBias=.0039,t.shadowMapDarkness=.5,t.shadowMapWidth=1024,t.shadowMapHeight=1024},children:[Object(c.jsx)(_,{}),Object(c.jsx)(C,{}),Object(c.jsxs)(n.Suspense,{fallback:null,children:[Object(c.jsx)(I,{title:"Nuevo Transporter",description:"T6.1 Chasis"}),Object(c.jsx)(z,{position:[0,-.5,0]}),t&&Object(c.jsx)(H.a,{preset:"sunset"}),Object(c.jsx)(Z,{})]})]})]})},q=function(e){var t=e.name,a=e.image,n=e.href,r=void 0===n?"":n;return Object(c.jsxs)(l.b,{to:r,className:"card-grid-item",children:[Object(c.jsx)("img",{src:a,alt:""}),Object(c.jsxs)("div",{className:"card-grid-item-description",children:[Object(c.jsx)("p",{children:t}),Object(c.jsx)("span",{children:"360\xb0"})]})]})},B={HOME:"/",MODEL:"/model/"},G=function(){var e=[{name:"Amarok Highline",image:"/models/amarok-highline.png",href:B.MODEL+"amarok"},{name:"Caddy Cargo Van",image:"/models/caddy-cargo-van.png",href:B.MODEL+"caddy-cargo"},{name:"Caddy Pasajeros",image:"/models/caddy-pasajeros.png",href:B.MODEL+"caddy-pasajeros"},{name:"Crafter Cargo Van",image:"/models/crafter-cargo-van.png",href:B.MODEL+"crafter-cargo-van"},{name:"Crafter Pasajeros",image:"/models/crafter-pasajeros.png",href:B.MODEL+"carfter-pasajeros"},{name:"Transporter Pasajeros",image:"/models/transporter-pasajeros.png",href:B.MODEL+"amarok"}];return Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row justify-content-center",children:Object(c.jsx)("div",{className:"col-20 car-grid",children:e.map((function(e,t){var a=e.name,n=e.image,r=e.href;return Object(c.jsx)(q,{name:a,image:n,href:r},t)}))})})})},X=function(){return Object(n.useEffect)((function(){document.title="Home"}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(E,{children:Object(c.jsx)(F,{})}),Object(c.jsx)(G,{})]})},J=function(){var e=Object(i.f)().model;return Object(n.useEffect)((function(){document.title=e}),[e]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(E,{children:Object(c.jsx)(F,{})}),Object(c.jsx)(G,{})]})},W=function(){return Object(c.jsx)("div",{className:"container m-5",children:Object(c.jsx)("div",{className:"row justify-content-center",children:Object(c.jsx)("div",{className:"col-20",children:Object(c.jsxs)("div",{className:"error-template",children:[Object(c.jsx)("h1",{children:"Oops!"}),Object(c.jsx)("h2",{children:"404 No encontramos la p\xe1gina que buscas."}),Object(c.jsx)("div",{className:"error-details",children:"Puedes ir al inicio a buscar m\xe1s opciones."}),Object(c.jsx)("div",{className:"error-actions mt-5",children:Object(c.jsx)(l.b,{className:"align-middle buttonvc primary",to:B.HOME,children:"Ir al inicio"})})]})})})})},Y=a(29),K=a.n(Y);function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e}).apply(this,arguments)}function $(e,t){if(null==e)return{};var a,c,n=function(e,t){if(null==e)return{};var a,c,n={},r=Object.keys(e);for(c=0;c<r.length;c++)a=r[c],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)a=r[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var ee=n.createElement("path",{d:"M0,20V18H20v2Zm0-7V11H14v2ZM0,6V4H24V6Z",fill:"currentColor"});function te(e,t){var a=e.title,c=e.titleId,r=$(e,["title","titleId"]);return n.createElement("svg",Q({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",shapeRendering:"crispEdges",ref:t,"aria-labelledby":c},r),a?n.createElement("title",{id:c},a):null,ee)}var ae=n.forwardRef(te);a.p;function ce(){return(ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e}).apply(this,arguments)}function ne(e,t){if(null==e)return{};var a,c,n=function(e,t){if(null==e)return{};var a,c,n={},r=Object.keys(e);for(c=0;c<r.length;c++)a=r[c],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)a=r[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var re=n.createElement("path",{d:"M405.49,93.32l-16.8,46.9H376.86l-16.81-46.9v-.7h10.57L382.73,130h.21l12-37.38h10.57v.7Z",transform:"translate(-8.87 -9.73)"}),se=n.createElement("path",{d:"M417.45,126.08c.35,4.76,3.43,7.63,8.48,7.63a31.42,31.42,0,0,0,10.78-2.1l2.17,6.79a32.66,32.66,0,0,1-13.65,2.87c-11.69,0-17.37-8.05-17.37-18,0-9.59,5.89-17.85,16.88-17.85s15.75,6.65,15.75,14.56a42.67,42.67,0,0,1-.49,6.09Zm14.36-5.88a5.3,5.3,0,0,0,.07-1c0-3.78-1.75-6.86-7.07-6.86-4.76,0-7.14,3.85-7.36,7.91Z",transform:"translate(-8.87 -9.73)"}),oe=n.createElement("path",{d:"M469.54,140.22v-20.3c0-4.27-1.89-6.72-6-6.72a10.31,10.31,0,0,0-7.29,3.22v23.8h-9.45v-49h9.45v18.06h.15a15.59,15.59,0,0,1,10.08-3.85c8.05,0,12.53,5.46,12.53,13.58v21.21Z",transform:"translate(-8.87 -9.73)"}),le=n.createElement("path",{d:"M486.82,140.22V106.48h9.45v33.74Zm15.76-49.28-7.22,9.59H487.1v-.7l5.53-9.52h9.94v.63Z",transform:"translate(-8.87 -9.73)"}),ie=n.createElement("path",{d:"M520.64,105.43a32,32,0,0,1,10.5,2l-1.89,7.21a23.71,23.71,0,0,0-7.5-1.47c-5.11,0-9.38,2.8-9.38,10.15s4.13,10.15,9.38,10.15a23.71,23.71,0,0,0,7.5-1.47l1.89,7.21a32,32,0,0,1-10.5,2c-11.49,0-17.93-7-17.93-17.92S509.15,105.43,520.64,105.43Z",transform:"translate(-8.87 -9.73)"}),de=n.createElement("path",{d:"M546.46,106.48v20.3c0,4.41,1.61,6.72,5.74,6.72a12,12,0,0,0,7.14-2.87V106.48h9.45v33.74h-7.63l-1.26-3.29h-.14a15.33,15.33,0,0,1-10.5,4.34c-8,0-12.25-5.39-12.25-13.51V106.48Z",transform:"translate(-8.87 -9.73)"}),je=n.createElement("path",{d:"M586.29,91.22v41.44c0,1.05.07,1.26,1.12,1.26h3.71v6.45a33,33,0,0,1-5.6.49c-6.44,0-8.68-3.15-8.68-9.88V91.22Z",transform:"translate(-8.87 -9.73)"}),me=n.createElement("path",{d:"M612.61,141.27c-11.55,0-17.78-8.12-17.78-17.92s6.23-17.92,17.78-17.92c11.77,0,17.85,8.12,17.85,17.92S624.38,141.27,612.61,141.27Zm0-7.77c5,0,8.19-3.36,8.19-10.15s-3.22-10.15-8.19-10.15-8.12,3.36-8.12,10.15S607.78,133.5,612.61,133.5Z",transform:"translate(-8.87 -9.73)"}),he=n.createElement("path",{d:"M637.46,131.26a24.58,24.58,0,0,0,10.85,2.88c3.71,0,5.32-1.13,5.32-3.3S652,128,649,127.27l-4.41-1c-4.69-1.12-9.17-3.78-9.17-9.94,0-6.65,5.25-10.85,14-10.85a30.65,30.65,0,0,1,12.6,2.45l-2.59,6.72a28.76,28.76,0,0,0-9.73-2c-3.57,0-5.11,1.05-5.11,3.08s1.54,2.66,4.34,3.43l4.28,1c5.39,1.34,9.59,4.13,9.59,10.09,0,7-5.6,11.06-14.21,11.06a28.87,28.87,0,0,1-13.94-3.22Z",transform:"translate(-8.87 -9.73)"}),pe=n.createElement("path",{d:"M386,161.57a32.69,32.69,0,0,1,13.51,3.08l-2.59,7.7A25,25,0,0,0,386,169.9c-8.48,0-13,6.65-13,16.52s4.54,16.52,13,16.52A25,25,0,0,0,397,200.49l2.59,7.7A32.69,32.69,0,0,1,386,211.27c-15,0-23.18-10-23.18-24.85S371.05,161.57,386,161.57Z",transform:"translate(-8.87 -9.73)"}),be=n.createElement("path",{d:"M419.62,211.27c-11.55,0-17.78-8.12-17.78-17.92s6.23-17.92,17.78-17.92c11.77,0,17.86,8.12,17.86,17.92S431.39,211.27,419.62,211.27Zm0-7.77c5,0,8.2-3.36,8.2-10.15s-3.22-10.15-8.2-10.15c-4.82,0-8.12,3.36-8.12,10.15S414.8,203.5,419.62,203.5Z",transform:"translate(-8.87 -9.73)"}),Oe=n.createElement("path",{d:"M449.23,176.48l1.19,3.29h.21a15.87,15.87,0,0,1,10.86-4.34c5,0,8.26,1.89,10.29,5.18h.14c2.1-1.75,5.39-5.18,12.32-5.18,8.19,0,12.39,5.39,12.39,13.51v21.28h-9.45v-20.3c0-4.41-1.4-6.72-5.88-6.72-3.36,0-5.95,1.89-7.63,3.22a9.94,9.94,0,0,1,.28,2.52v21.28H464.5v-20.3c0-4.27-1.47-6.72-5.95-6.72a12.13,12.13,0,0,0-7.36,2.87v24.15h-9.45V176.48Z",transform:"translate(-8.87 -9.73)"}),ue=n.createElement("path",{d:"M510.13,196.08c.35,4.76,3.43,7.63,8.47,7.63a31.53,31.53,0,0,0,10.79-2.1l2.17,6.79a32.71,32.71,0,0,1-13.66,2.87c-11.69,0-17.36-8.05-17.36-18,0-9.59,5.88-17.85,16.87-17.85s15.76,6.65,15.76,14.56a42.67,42.67,0,0,1-.49,6.09Zm14.35-5.88a5.3,5.3,0,0,0,.07-1c0-3.78-1.75-6.86-7.07-6.86-4.76,0-7.14,3.85-7.35,7.91Z",transform:"translate(-8.87 -9.73)"}),we=n.createElement("path",{d:"M545,176.48l1.33,4.06h.14a9.93,9.93,0,0,1,8.55-5.11,15.05,15.05,0,0,1,3.35.42l-.84,7.91a19.74,19.74,0,0,0-3.36-.28,9,9,0,0,0-7.35,3.29v23.45h-9.45V176.48Z",transform:"translate(-8.87 -9.73)"}),ve=n.createElement("path",{d:"M577.26,175.43a32,32,0,0,1,10.5,2l-1.89,7.21a23.64,23.64,0,0,0-7.49-1.47c-5.11,0-9.38,2.8-9.38,10.15s4.13,10.15,9.38,10.15a23.64,23.64,0,0,0,7.49-1.47l1.89,7.21a32,32,0,0,1-10.5,2c-11.48,0-17.92-7-17.92-17.92S565.78,175.43,577.26,175.43Z",transform:"translate(-8.87 -9.73)"}),fe=n.createElement("path",{d:"M596.65,160.24c3.36,0,5.53,2.17,5.53,5.18s-2.17,5.18-5.53,5.18-5.46-2.17-5.46-5.18S593.36,160.24,596.65,160.24Zm-4.76,50V176.48h9.45v33.74Z",transform:"translate(-8.87 -9.73)"}),xe=n.createElement("path",{d:"M635.71,202.88c0,1,.07,1.26,1.12,1.26h2.45v6.43a23.39,23.39,0,0,1-4.9.49c-3.64,0-5.53-1.4-6.72-4h-.14c-2.24,1.89-6.72,4.2-10.85,4.2-7.56,0-11.41-4.48-11.41-10.64,0-7.49,4.76-11.06,16.66-11.06h4.55V188c0-4.2-3.71-4.83-5.74-4.83a29,29,0,0,0-11.2,2.45l-2.24-7.21a35.31,35.31,0,0,1,13.93-3c9.73,0,14.49,5,14.49,13.65Zm-12.81-7.22c-6.23,0-8.61,1.61-8.61,4.14,0,2.79,1.61,4,4.48,4a14.9,14.9,0,0,0,7.7-2.3v-5.89Z",transform:"translate(-8.87 -9.73)"}),ge=n.createElement("path",{d:"M652,161.22v41.44c0,1.05.07,1.26,1.12,1.26h3.71v6.44a32,32,0,0,1-5.6.49c-6.44,0-8.68-3.15-8.68-9.87V161.22Z",transform:"translate(-8.87 -9.73)"}),Ee=n.createElement("path",{d:"M668.05,196.08c.35,4.76,3.43,7.63,8.47,7.63a31.42,31.42,0,0,0,10.78-2.1l2.17,6.79a32.66,32.66,0,0,1-13.65,2.87c-11.69,0-17.36-8.05-17.36-18,0-9.59,5.88-17.85,16.87-17.85s15.75,6.65,15.75,14.56a42.67,42.67,0,0,1-.49,6.09Zm14.35-5.88a5.3,5.3,0,0,0,.07-1c0-3.78-1.75-6.86-7.07-6.86-4.76,0-7.14,3.85-7.35,7.91Z",transform:"translate(-8.87 -9.73)"}),ye=n.createElement("path",{d:"M695.91,201.26a24.57,24.57,0,0,0,10.85,2.87c3.71,0,5.32-1.12,5.32-3.29s-1.61-2.8-4.62-3.57l-4.41-1.05c-4.69-1.12-9.17-3.78-9.17-9.94,0-6.65,5.25-10.85,14-10.85a30.65,30.65,0,0,1,12.6,2.45l-2.59,6.72a28.76,28.76,0,0,0-9.73-2c-3.57,0-5.11,1.05-5.11,3.08s1.54,2.66,4.34,3.43l4.27,1c5.39,1.33,9.59,4.13,9.59,10.09,0,7-5.6,11.06-14.21,11.06a28.85,28.85,0,0,1-13.93-3.22Z",transform:"translate(-8.87 -9.73)"}),Ne=n.createElement("path",{d:"M150.6,280.13c-70.47,0-128.27-58.2-128.27-128.67a125.74,125.74,0,0,1,8.11-44.93l75,151c1,2,2.17,3.56,4.55,3.56s3.68-1.61,4.55-3.56L149,180.17c.4-.79.8-1.59,1.59-1.59s1.19.8,1.58,1.59l34.44,77.4c.87,1.95,2.18,3.56,4.56,3.56s3.56-1.58,4.55-3.56l75-151a125.53,125.53,0,0,1,8.12,44.93c0,70.47-57.8,128.67-128.27,128.67m0-157.76c-.79,0-1.19-.8-1.59-1.59L108.63,30.12a124,124,0,0,1,83.94,0l-40.39,90.66c-.39.79-.79,1.59-1.58,1.59m-41,93c-.79,0-1.19-.79-1.58-1.58L42.72,82.18A132.62,132.62,0,0,1,88.84,38.83l46.91,104.52a3.31,3.31,0,0,0,3.57,2.38h22.56a3.33,3.33,0,0,0,3.57-2.38L212.36,38.83a132.71,132.71,0,0,1,46.12,43.35L193.16,213.82c-.4.79-.79,1.58-1.59,1.58s-1.18-.79-1.58-1.58L165.45,157.6a3.32,3.32,0,0,0-3.57-2.37H139.32a3.31,3.31,0,0,0-3.57,2.37l-24.54,56.22c-.4.79-.8,1.58-1.59,1.58m41,77.8A141.74,141.74,0,1,0,8.87,151.46,141.59,141.59,0,0,0,150.6,293.2",transform:"translate(-8.87 -9.73)"});function Se(e,t){var a=e.title,c=e.titleId,r=ne(e,["title","titleId"]);return n.createElement("svg",ce({id:"Layer_2","data-name":"Layer 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 712.39 283.46",ref:t,"aria-labelledby":c},r),a?n.createElement("title",{id:c},a):null,re,se,oe,le,ie,de,je,me,he,pe,be,Oe,ue,we,ve,fe,xe,ge,Ee,ye,Ne)}var Me=n.forwardRef(Se),Ae=(a.p,function(){var e=Object(d.b)(),t=Object(n.useState)(0),a=Object(N.a)(t,2),r=a[0],s=a[1],o=Object(d.c)((function(e){return e.template})),i=o.isColored,j=o.isScrollingDown;return Object(n.useEffect)((function(){var t=function(t){var a,c=t.target.documentElement.scrollTop;e((a=c<r,function(e){e(v(a))})),e(function(e){return function(t){t(f(e))}}(c>r)),s(c)};return window.addEventListener("scroll",t),function(){return window.removeEventListener("scroll",t)}}),[r,e]),Object(c.jsxs)("header",{className:K()({colored:i}),children:[Object(c.jsx)("div",{className:K()("container",{colored:i}),children:Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"menu__button",children:Object(c.jsx)("button",{onClick:function(){return e(u(!0))},children:Object(c.jsx)(ae,{})})})})}),Object(c.jsxs)("div",{className:K()("container__logo",{active:j,colored:i}),children:[Object(c.jsx)("div",{className:"divider"}),Object(c.jsx)("div",{className:"logo",children:Object(c.jsx)(l.b,{to:B.HOME,children:Object(c.jsx)(Me,{})})}),Object(c.jsx)("div",{className:"divider"})]})]})});function Le(){return(Le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e}).apply(this,arguments)}function _e(e,t){if(null==e)return{};var a,c,n=function(e,t){if(null==e)return{};var a,c,n={},r=Object.keys(e);for(c=0;c<r.length;c++)a=r[c],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)a=r[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var Ce=n.createElement("path",{d:"M20.956 3.985l-.942-.941L12 11.059 3.985 3.044l-.941.941L11.059 12l-8.015 8.015.941.941L12 12.941l8.014 8.015.942-.941L12.941 12z"});function De(e,t){var a=e.title,c=e.titleId,r=_e(e,["title","titleId"]);return n.createElement("svg",Le({viewBox:"0 0 24 24",fill:"currentColor",role:"img",ref:t,"aria-labelledby":c},r),a?n.createElement("title",{id:c},a):null,Ce)}var Ie=n.forwardRef(De),Pe=(a.p,function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.template})).menu,a=function(t){return e(u(t))},n=K()({active:t});return Object(c.jsx)("aside",{className:n,children:Object(c.jsx)("div",{className:"content",children:Object(c.jsx)("div",{className:"content__wrapper",children:Object(c.jsx)("div",{className:"content__overlay",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"content__height",children:Object(c.jsxs)("div",{className:"row justify-content-center",children:[Object(c.jsx)("div",{className:"col-22 pt-4",children:Object(c.jsx)("div",{className:"content__close",children:Object(c.jsx)("div",{className:"content__close__wrapper",children:Object(c.jsxs)("button",{onClick:function(){return a(!1)},children:[Object(c.jsx)("span",{children:Object(c.jsx)(Ie,{})}),Object(c.jsx)("span",{children:"Cerrar Men\xfa"})]})})})}),Object(c.jsx)("div",{className:"col-20 offset-2",children:Object(c.jsx)("ul",{className:"menu",children:Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:B.HOME,onClick:function(){return a(!1)},children:"Home"})})})})]})})})})})})})}),ke=function(e){var t=!1===e.paddingBottom?"footer__copyright pb-0":"footer__copyright";return Object(c.jsx)("footer",{children:Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row justify-content-center",children:Object(c.jsxs)("div",{className:"col-20",children:[Object(c.jsxs)("div",{className:"footer__content",children:[Object(c.jsxs)("div",{className:"row justify-content-between",children:[Object(c.jsxs)("div",{className:"col-24 col-md-6",children:[Object(c.jsx)("h4",{className:"mb-3 menu_header",children:"Gama de vehiculos"}),Object(c.jsx)("a",{href:"https://www.vwcomerciales.com.mx/es/modelos.html",children:Object(c.jsx)("span",{children:"Todos los modelos"})}),Object(c.jsx)("a",{href:"https://www.vwcomerciales.com.mx/es/modelos/amarok-highline.html",children:Object(c.jsx)("span",{children:"Amarok"})}),Object(c.jsx)("a",{href:"https://www.vwcomerciales.com.mx/es/modelos/caddy-pasajeros.html",children:Object(c.jsx)("span",{children:"Caddy"})}),Object(c.jsx)("a",{href:"https://www.vwcomerciales.com.mx/es/modelos/crafter-pasajeros.html",children:Object(c.jsx)("span",{children:"Crafter"})}),Object(c.jsx)("a",{href:"https://www.vwcomerciales.com.mx/es/modelos/transporter-6-1-chasis.html",children:Object(c.jsx)("span",{children:"Transporter"})})]}),Object(c.jsxs)("div",{className:"col-24 col-md-6",children:[Object(c.jsx)("h4",{className:"mb-3 menu_header",children:"Postventa"}),Object(c.jsx)("a",{href:"https://www.vwcomerciales.com.mx/es/postventa/beneficios-postventa.html",children:Object(c.jsx)("span",{children:"Beneficios Postventa"})}),Object(c.jsx)("a",{href:"https://www.vwcomerciales.com.mx/es/postventa/servicios-en-linea.html",children:Object(c.jsx)("span",{children:"Servicios en linea"})}),Object(c.jsx)("a",{href:"https://www.vwcomerciales.com.mx/es/postventa/mantenimiento.html",children:Object(c.jsx)("span",{children:"Servicios de Mantenimiento"})}),Object(c.jsx)("a",{href:"https://www.vwcomerciales.com.mx/es/postventa/promociones-postventa.html",children:Object(c.jsx)("span",{children:"Promociones en Postventa"})}),Object(c.jsx)("a",{href:"https://www.vwcomerciales.com.mx/es/postventa/garantia-extendida.html",children:Object(c.jsx)("span",{children:"Garant\xeda Extendida"})}),Object(c.jsx)("a",{href:"https://www.vwcomerciales.com.mx/es/postventa/nave-de-conversiones.html",children:Object(c.jsx)("span",{children:"Nave de Conversiones"})}),Object(c.jsx)("a",{href:"https://www.vwcomerciales.com.mx/es/postventa/unidades-moviles-de-servicio.html",children:Object(c.jsx)("span",{children:"Unidades M\xf3viles de Servicio"})}),Object(c.jsx)("a",{href:"https://www.vwcomerciales.com.mx/es/postventa/service-plus.html",children:Object(c.jsx)("span",{children:"Service Plus"})}),Object(c.jsx)("a",{href:"https://www.vwcomerciales.com.mx/es/postventa/dr-fantasma.html",children:Object(c.jsx)("span",{children:"Dr. Fantasma"})})]}),Object(c.jsxs)("div",{className:"col-24 col-md-6",children:[Object(c.jsx)("h4",{className:"mb-3 menu_header",children:"Otros"}),Object(c.jsx)("a",{href:"https://www.vwcomerciales.com.mx/es/flotillas.html",children:Object(c.jsx)("span",{children:"Flotillas"})}),Object(c.jsx)("a",{href:"https://www.vwcomerciales.com.mx/es/refacciones-y-economy-parts.html",children:Object(c.jsx)("span",{children:"Refacciones y Economy Parts"})}),Object(c.jsx)("a",{href:"https://www.appsvolkswagen.com.mx/vwnfz/web360/form360.aspx?iM=NzU=",children:Object(c.jsx)("span",{children:"Vistas 360\xb0"})}),Object(c.jsx)("a",{href:"https://www.vwcomerciales.com.mx/es/mundo-volkswagen-vehiculos-comerciales.html",children:Object(c.jsx)("span",{children:"Mundo Volkswagen"})}),Object(c.jsx)("a",{href:"https://www.appsvolkswagen.com.mx/VWNFZ/formularios/contactovwnfz.aspx?i=Mg0K",children:Object(c.jsx)("span",{children:"Contacto"})})]}),Object(c.jsxs)("div",{className:"col-24 col-md-6",children:[Object(c.jsx)("h4",{className:"mb-3 menu_header",children:"Social Media"}),Object(c.jsx)("a",{href:"https://www.youtube.com/playlist?list=PLxwCqMlkT28qrJjVN3-LDrSVJyZ5Cb56F",children:Object(c.jsx)("span",{children:"Youtube"})}),Object(c.jsx)("a",{href:"https://www.instagram.com/volkswagenvc.outdoor/",children:Object(c.jsx)("span",{children:"Instagram"})}),Object(c.jsx)("a",{href:"https://www.linkedin.com/company/volkswagen-vehiculos-comerciales-mexico/?viewAsMember=true",children:Object(c.jsx)("span",{children:"LinkedIn"})})]})]}),Object(c.jsx)("div",{className:"row d-flex justify-content-end my-4",children:Object(c.jsx)("span",{className:"t t100 fwn",children:"\xa9 Volkswagen 2020"})}),Object(c.jsx)("div",{className:"row d-flex justify-content-begin",children:Object(c.jsxs)("ul",{className:"nav_legal",children:[Object(c.jsx)("li",{children:Object(c.jsx)("span",{children:Object(c.jsx)("a",{href:"https://www.vwcomerciales.com.mx/es/legales/aviso-de-privacidad.html",children:"Aviso de Privacidad"})})}),Object(c.jsx)("li",{children:Object(c.jsx)("span",{children:Object(c.jsx)("a",{href:"https://www.vwcomerciales.com.mx/es/legales/aspectos-legales.html",children:"Aspectos Legales"})})}),Object(c.jsx)("li",{children:Object(c.jsx)("span",{children:Object(c.jsx)("a",{href:"https://www.vwcomerciales.com.mx/es/legales/politica-de-cookies.html",children:"Pol\xedtica de Cookies"})})})]})})]}),Object(c.jsx)("div",{className:t,children:Object(c.jsxs)("div",{className:"row no-gutters",children:[Object(c.jsx)("b",{children:"T\xe9rminos y condiciones por Volkswagen de M\xe9xico"}),Object(c.jsx)("p",{children:"Las im\xe1genes son de car\xe1cter ilustrativo. El color y algunas caracter\xedsticas pueden corresponder o no con los veh\xedculos disponibles en M\xe9xico. Paquetes sujetos a cambio sin previo aviso. El equipamiento que se muestra en las fotos puede no estar disponible en M\xe9xico. Para conocer las opciones de equipamiento disponibles, as\xed como la gama completa de colores de carrocer\xeda, se debe acudir a la concesionar\xeda Volkswagen autorizada m\xe1s cercana."}),Object(c.jsx)("p",{children:"La informaci\xf3n y/o im\xe1genes aqu\xed contenidas pueden no corresponder con total precisi\xf3n (incluyendo precios de contado y, equipamiento, disponibilidad y dem\xe1s aplicables) a la de los veh\xedculos ofertados por los distribuidores Volkswagen, por lo que le recomendamos visitar su distribuidor Volkswagen m\xe1s cercano. Los valores obtenidos sobre rendimientos en ciudad, carretera y combinado son valores obtenidos en pruebas de laboratorio bajo condiciones controladas. a) El precio aqu\xed indicado es una estimaci\xf3n para operaciones de contado en Moneda Nacional de los Estados Unidos Mexicanos, que incluye el 16% de Impuesto al Valor Agregado (IVA) y el Impuesto Sobre Autos Nuevos (ISAN cuando aplique). Los impuestos pueden cambiar conforme a la normativa aplicable vigente. b) Precios de contado vigentes al 31 de enero de 2021 para la Rep\xfablica Mexicana. Consulte a su distribuidor Volkswagen m\xe1s cercano para precios en zonas fronterizas de acuerdo al DECRETO de est\xedmulos fiscales regi\xf3n fronteriza norte publicado en el Diario Oficial de la Federaci\xf3n el 31 de diciembre de 2018. Todas las im\xe1genes son de car\xe1cter ilustrativo."}),Object(c.jsx)("p",{children:"** VOLKSWAGEN DE M\xc9XICO S.A. DE C.V. Y SUS FILIALES ALERTAN POR ESTE MEDIO A LOS CONSUMIDORES PARA QUE EVITEN SER V\xcdCTIMAS DE FRAUDES COMETIDOS POR PERSONAS AJENAS A LA EMPRESA CON LA SUPUESTA VENTA DE VEH\xcdCULOS EN REMATE Y/O LIQUIDACI\xd3N A TRAV\xc9S DE LAS P\xc1GINAS:"}),Object(c.jsx)("p",{children:"www.autosvolkswagen.com, www.certificados-plantavw.com, www.plantapuebla.com, www.planta-volksvagen.com, www.planta-volkswagen.com, www.plantavolkswagen.com.mx, www.planta-vw.com, www.plantavwmexico.com, www.volkswagenautodemo.com, www.volkswagenmexico.com.mx, www.volkswagenmx.com, www.volkswagenplanta.com, www.volkswagen-planta.org, www.volkswagen-oficial.com, www.volkswagen-planta.com.mx, www.vw-autos.com, www.vw-planta.mx/contacto, www.vw-planta.mx/promociones, www.vwplantadepuebla.com, www.vwplantapuebla.mx, www.vw-promocion.com, www.vwpuebla.com, www.vw-puebla.com"}),Object(c.jsx)("p",{className:"mt-5",children:"VOLKSWAGEN DE M\xc9XICO S.A. DE C.V. NO ASUME RESPONSABILIDAD ALGUNA POR LA COMPRAVENTA QUE SE REALICE DE VEH\xcdCULOS U OTROS PRODUCTOS SIN SU DEBIDA REPRESENTACI\xd3N Y AUTORIZACI\xd3N. LA EMPRESA HA DENUNCIADO LA VENTA FRAUDULENTA ANTE LAS AUTORIDADES CORRESPONDIENTES."})]})})]})})})})},Te=a(24),Re=a(56),Ve=a(8),Ze={active:!1,menu:!1,title:"",isScrollingDown:!1,isScrollingUp:!1,isColored:!1},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(Ve.a)(Object(Ve.a)({},e),{},{active:t.payload});case m:return Object(Ve.a)(Object(Ve.a)({},e),{},{menu:t.payload});case O:return Object(Ve.a)(Object(Ve.a)({},e),{},{title:t.payload});case h:return Object(Ve.a)(Object(Ve.a)({},e),{},{isScrollingUp:t.payload,isScrollingDown:!t.payload});case p:return Object(Ve.a)(Object(Ve.a)({},e),{},{isScrollingDown:t.payload,isScrollingUp:!t.payload});case b:return Object(Ve.a)(Object(Ve.a)({},e),{},{isColored:t.payload});default:return e}},He=Object(Te.c)({template:Ue}),ze=Object(Te.e)(He,Object(Te.d)(Object(Te.a)(Re.a),"object"===typeof window&&"undefined"!==typeof window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e})),Fe=function(){return Object(c.jsx)(l.a,{children:Object(c.jsxs)(d.a,{store:ze,children:[Object(c.jsx)(Ae,{}),Object(c.jsx)(Pe,{}),Object(c.jsx)("main",{children:Object(c.jsxs)(i.c,{children:[Object(c.jsx)(i.a,{exact:!0,path:B.HOME,component:X}),Object(c.jsx)(i.a,{exact:!0,path:B.MODEL+":model",component:J}),Object(c.jsx)(i.a,{component:W})]})}),Object(c.jsx)(ke,{})]})})};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(Fe,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.04f67808.chunk.js.map