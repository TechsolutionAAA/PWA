(()=>{"use strict";var e={56:(e,t,n)=>{n.r(t),n.d(t,{default:()=>J});var o=n(9526),r=n(4333),a=n(1133),i=n(5648),l=n(6337),d=n(83),s=n(885),c=n(5861),u=n(8385),f=n(7098),p=n(3026),h=n(1451),g=n(9233),v=n(3497),y=n(9899),b=n(5372),m=n(2482),w=n(6317),x=n(4578),j=n(1185),T=n(1252),O=n(7132),S=n(8615),C="https://upload63f6f713447ec.cloud.bunnyroute.com/api",k=n(7557),P=r.default.create({container:{flex:1,backgroundColor:"#000"},loadingView:{position:"absolute",top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.6)",width:"100%",height:"100%",justifyContent:"center",alignItems:"center",zIndex:1e4},backArrow:{flexDirection:"row",alignItems:"center"},Title:{color:"#fff",textAlign:"center",fontSize:30,fontWeight:"bold",marginVertical:10},MetadataTitle:{color:"#fff",textAlign:"center",fontSize:24,fontWeight:"bold",marginTop:40},videoPreviewer:{height:400,width:"100%"},loginbtn:{width:70,height:50,paddingHorizontal:20,paddingVertical:10,borderRadius:10},btnGroup:{flex:1,flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginHorizontal:100,marginTop:30},TextInput:{paddingVertical:10,paddingHorizontal:10,fontSize:16,borderBottomColor:"#3b8ad0",borderBottomWidth:2,width:"100%",color:"#fff",marginVertical:10},btnUpload:{marginTop:30,marginBottom:100,flexDirection:"row",gap:30},upload:{width:150,height:50,flex:1,gap:10,flexDirection:"row",alignItems:"center",justifyContent:"center",borderRadius:10},uploadTitle:{color:"#fff",fontSize:20}});const A=(0,d.connect)((function(e){return{auth:e.auth}}),{})((function(e){var t=(0,o.useState)(null),r=(0,s.default)(t,2),i=r[0],l=r[1],d=(0,o.useRef)(null),A=(0,o.useState)({}),U=(0,s.default)(A,2),z=(U[0],U[1]),D=b.useCameraPermissions(),I=(0,s.default)(D,2),E=I[0],R=I[1],W=(0,o.useState)(""),M=(0,s.default)(W,2),V=M[0],F=M[1],H=(0,o.useState)(""),N=(0,s.default)(H,2),_=N[0],L=N[1],B=(0,o.useState)(""),G=(0,s.default)(B,2),$=G[0],q=G[1],J=(0,o.useState)(""),K=(0,s.default)(J,2),Q=K[0],X=K[1],Y=(0,o.useState)(""),Z=(0,s.default)(Y,2),ee=Z[0],te=Z[1],ne=(0,o.useState)(""),oe=(0,s.default)(ne,2),re=oe[0],ae=oe[1],ie=(0,o.useState)(""),le=(0,s.default)(ie,2),de=le[0],se=le[1],ce=(0,o.useState)(""),ue=(0,s.default)(ce,2),fe=(ue[0],ue[1],(0,o.useState)(!1)),pe=(0,s.default)(fe,2),he=pe[0],ge=pe[1],ve=function(){var e=(0,c.default)((function*(e){e.preventDefault(),ge(!0);var t={Accept:"application/json","Content-Type":"multipart/form-data"},n=new FormData;n.append("video",{uri:ee,name:re,type:de});var o="";yield S.default.post(C+"/generate-ipfs",n,{headers:t}).then((function(e){console.log(e.data.data.ipfsUrl),o=e.data.data.ipfsUrl})).catch((function(e){console.log(e),ge(!1)}));var r=(yield w.getThumbnailAsync(o,{time:15e3})).uri,a=new FormData,i="";a.append("video",{uri:r,name:"Thumbnail",type:"image/*"}),yield S.default.post(C+"/generate-ipfs",a,{headers:t}).then((function(e){console.log(e.data.data.ipfsUrl),i=e.data.data.ipfsUrl})).catch((function(e){console.log(e)}));var l={title:V,description:_,keyword:$,category:Q,userEmail:"kogutstt2@gmail.com",ipfsUrl:o,thumbnail:i};console.log(l),S.default.post("http://192.168.112.92:5000/api/Upsocial/users/content/uploadContent",l).then((function(e){ge(!1),"android"===O.default.OS&&T.default.show(e.data.msg,T.default.SHORT)})).catch((function(e){console.error(e),ge(!1)}))}));return function(t){return e.apply(this,arguments)}}(),ye=(function(){var e=(0,c.default)((function*(e){try{var t=(yield w.getThumbnailAsync(e,{time:15e3})).uri;console.log(t);var n=new FormData;n.append("video",{uri:t,name:"Thumbnail",type:"image/*"});yield S.default.post(C+"/generate-ipfs",n,{headers:{Accept:"application/json","Content-Type":"multipart/form-data"}}).then((function(e){return console.log(e.data.data.ipfsUrl),e.data.data.ipfsUrl})).catch((function(e){console.log(e)}))}catch(o){console.warn(o)}}))}(),function(){var e=(0,c.default)((function*(){var e=yield b.launchImageLibraryAsync({mediaTypes:m.MediaTypeOptions.All,allowsEditing:!0,aspect:[4,4]});if(!e.canceled){var t=e.assets[0].uri,n=t.split("/").pop(),o=/\.(\w+)$/.exec(n),r=o?"video/"+o[1]:"video";l(t),te(t),ae(n),se(r)}}));return function(){return e.apply(this,arguments)}}()),be=function(){var e=(0,c.default)((function*(){E&&!E.granted&&(yield R());var e=yield b.launchCameraAsync({mediaTypes:m.MediaTypeOptions.Videos,allowsEditing:!0,aspect:[4,4],quality:.5});if(!e.canceled){var t=e.assets[0].uri,n=t.split("/").pop(),o=/\.(\w+)$/.exec(n),r=o?"video/"+o[1]:"video";l(t),te(t),ae(n),se(r)}}));return function(){return e.apply(this,arguments)}}();return(0,k.jsxs)(p.default,{style:P.container,children:[he&&(0,k.jsx)(a.default,{style:P.loadingView,children:(0,k.jsx)(y.default,{source:n(9910),style:{width:140,height:140}})}),(0,k.jsx)(a.default,{style:P.backArrow,children:(0,k.jsx)(h.default,{onPress:function(){return e.setName("explore")},children:(0,k.jsx)(u.default,{name:"arrow-back-sharp",color:"#fff",size:30})})}),(0,k.jsx)(a.default,{children:(0,k.jsx)(g.default,{style:P.Title,children:"Upload your content"})}),(0,k.jsx)(a.default,{children:i?(0,k.jsx)(x.default,{ref:d,style:P.videoPreviewer,source:{uri:i},isLooping:!0,useNativeControls:!0,resizeMode:j.ResizeMode.STRETCH,onPlaybackStatusUpdate:function(e){return z((function(){return e}))}}):(0,k.jsx)(y.default,{source:n(1372),style:P.videoPreviewer})}),(0,k.jsxs)(a.default,{style:P.btnGroup,children:[(0,k.jsx)(h.default,{style:[{backgroundColor:"#4468b0"},P.loginbtn],onPress:ye,children:(0,k.jsx)(u.default,{name:"md-folder-outline",color:"#fff",size:30})}),(0,k.jsx)(h.default,{style:[{backgroundColor:"#4468b0"},P.loginbtn],onPress:be,children:(0,k.jsx)(u.default,{name:"camera-sharp",color:"#fff",size:30})})]}),i&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(a.default,{children:(0,k.jsx)(g.default,{style:P.MetadataTitle,children:"Complete metadata"})}),(0,k.jsx)(a.default,{children:(0,k.jsx)(v.default,{value:V,onChangeText:function(e){return F(e)},placeholder:"Content Title",placeholderTextColor:"#adb2b6",style:P.TextInput})}),(0,k.jsx)(a.default,{children:(0,k.jsx)(v.default,{value:_,onChangeText:function(e){return L(e)},placeholder:"Content Description",placeholderTextColor:"#adb2b6",style:P.TextInput})}),(0,k.jsx)(a.default,{children:(0,k.jsx)(v.default,{value:$,onChangeText:function(e){return q(e)},placeholder:"keyword",placeholderTextColor:"#adb2b6",style:P.TextInput})}),(0,k.jsx)(a.default,{children:(0,k.jsx)(v.default,{value:Q,onChangeText:function(e){return X(e)},placeholder:"Category",placeholderTextColor:"#adb2b6",style:P.TextInput})}),(0,k.jsxs)(a.default,{style:P.btnUpload,children:[(0,k.jsxs)(h.default,{style:[{backgroundColor:"#4468b0"},P.upload],onPress:ve,children:[(0,k.jsx)(f.default,{name:"upload",color:"#fff",size:30}),(0,k.jsx)(g.default,{style:P.uploadTitle,children:"Upload"})]}),(0,k.jsxs)(h.default,{style:[{backgroundColor:"#4468b0"},P.upload],onPress:function(){F(""),L(""),q(""),X(""),l(""),te(""),ae(""),se(""),"android"===O.default.OS&&T.default.show("All values are cleared! Try again!",T.default.SHORT)},children:[(0,k.jsx)(u.default,{name:"refresh",color:"#fff",size:30}),(0,k.jsx)(g.default,{style:P.uploadTitle,children:"Reset"})]})]})]})]})}));const U=function(e){var t=(0,o.useState)("explore"),n=(0,s.default)(t,2),r=(n[0],n[1]);return(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(A,{setName:function(e){r(e)}})})};var z=r.default.create({container:{flex:1,position:"relative"},loadingView:{position:"absolute",top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.6)",width:l.default.get("window").width,height:l.default.get("window").height,justifyContent:"center",alignItems:"center",zIndex:1e4}});const D=(0,d.connect)((function(e){return{auth:e.auth,loading:e.loading}}),{})((function(e){return(0,k.jsxs)(a.default,{style:z.container,children:[(0,k.jsx)(i.default,{}),(0,k.jsx)(U,{})]})}));var I=n(7670),E=n(6441);const R=function(e){return void 0===e||null===e||"object"===typeof e&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length};var W={isAuthenticated:!1,user:{}};var M=n(4942);function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){(0,M.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var H={loading:!1};var N={},_=[E.default],L=(0,I.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;return"SET_USERS"===t.type?{isAuthenticated:!R(t.payload),user:t.payload}:e},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;return"LOADING_DATA"===t.type?F(F({},e),{},{loading:t.payload}):e}});const B=function(){return(0,I.createStore)(L,N,(0,I.compose)(I.applyMiddleware.apply(void 0,_)))};var G=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var q=B();function J(){return(0,k.jsx)(d.Provider,{store:q,children:(0,k.jsx)(D,{})})}!function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="/service-worker.js";G?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):$(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):$(t,e)}))}}()},9910:(e,t,n)=>{e.exports=n.p+"static/media/loading.4ace5f172a45b15a8274.gif"},1372:(e,t,n)=>{e.exports=n.p+"static/media/videoPreviewer.463bd97258a35199a8fb.png"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,(()=>{var e=[];n.O=(t,o,r,a)=>{if(!o){var i=1/0;for(c=0;c<e.length;c++){for(var[o,r,a]=e[c],l=!0,d=0;d<o.length;d++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](o[d])))?o.splice(d--,1):(l=!1,a<i&&(i=a));if(l){e.splice(c--,1);var s=r();void 0!==s&&(t=s)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,r,a]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var r,a,[i,l,d]=o,s=0;if(i.some((t=>0!==e[t]))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(d)var c=d(n)}for(t&&t(o);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},o=self.webpackChunkweb=self.webpackChunkweb||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=n.O(void 0,[653],(()=>n(9484)));o=n.O(o)})();
//# sourceMappingURL=main.8fb5ee5c.js.map