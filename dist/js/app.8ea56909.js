(function(e){function n(n){for(var t,r,i=n[0],u=n[1],s=n[2],d=0,f=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&f.push(c[r][0]),c[r]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(e[t]=u[t]);l&&l(n);while(f.length)f.shift()();return a.push.apply(a,s||[]),o()}function o(){for(var e,n=0;n<a.length;n++){for(var o=a[n],t=!0,r=1;r<o.length;r++){var i=o[r];0!==c[i]&&(t=!1)}t&&(a.splice(n--,1),e=u(u.s=o[0]))}return e}var t={},r={app:0},c={app:0},a=[];function i(e){return u.p+"js/"+({about:"about",agora:"agora",bookmarks:"bookmarks",browser:"browser",chat:"chat",holon:"holon",communication:"communication","crud-create":"crud-create","crud-read":"crud-read",editor:"editor",file:"file",forms:"forms",friends:"friends",friends_follower:"friends_follower",general:"general",gouvernance:"gouvernance",groups:"groups",inbox:"inbox",indexes:"indexes",misc:"misc",network:"network",offers:"offers",parle:"parle",pod:"pod",post:"post",profile:"profile",salut:"salut",storage:"storage",tension:"tension"}[e]||e)+"."+{about:"9c01bb28",agora:"f89df434",bookmarks:"c31580f3",browser:"e144b81d",chat:"42c7ad00","chunk-2d21d458":"13a1ee3f",holon:"e9ad6d48","chunk-648bb194":"b51c4afc","chunk-6afbfee0":"cdcab7db","chunk-8cf96fa6":"6755d7ea","chunk-dc391914":"05f7ffc8",communication:"8e3c9bd1","crud-create":"73b50c0f","crud-read":"d6b1d1ef",editor:"f49fc67c",file:"9fa16395",forms:"e3704df6",friends:"155a79c7",friends_follower:"49da6a32",general:"9209013f",gouvernance:"ca3463d3",groups:"082710fa",inbox:"7a6241d7",indexes:"6286c638",misc:"fe7338f0",network:"5a524abd",offers:"d4eefab0",parle:"f35899fb",pod:"6e3829f6",post:"39c790b1",profile:"f5945c1a",salut:"9e98da3b",storage:"8a783cf2",tension:"65d94588","chunk-2d229b3e":"f111e8fe","chunk-6c9b6f6a":"c7078324","chunk-08041bdc":"e6fa86e5","chunk-2d22a0e9":"a8dbb73e","chunk-034e0f2f":"a67e4c0f","chunk-87b07880":"cd4fab05","chunk-118c5354":"cad638a0","chunk-2409291a":"d3bb8a48","chunk-2d0ac418":"e5c2cc1e","chunk-2d0cc7d8":"6e880be5","chunk-2d20e8ae":"cb51f044","chunk-40c9c397":"5bca9f1f","chunk-629f7e72":"2af7fb9d","chunk-8d9a5e66":"ecd4bc2b","chunk-ee59b226":"7234c37f","chunk-4791cc9e":"e61f2532","chunk-2d0e24f1":"b705970c","chunk-4d15e509":"4031b373","chunk-7a5376f0":"809d3c93","chunk-365cdf99":"6d29ed24","chunk-6d405a33":"ca4abe39","chunk-94f9418a":"821dd92d","chunk-0c8e6b9a":"6dd187b5","chunk-2d0e17a2":"dc105129","chunk-03c7c79c":"f1604d68","chunk-5251d806":"f139de06","chunk-14f554dc":"b4768d7b","chunk-46478f8a":"c7fa6ad0","chunk-2d0c9199":"18936134","chunk-1abdeb5a":"16f83518","chunk-2d0abc2d":"96dd816a","chunk-2d0c8a53":"97edbd6d","chunk-2d0ba68d":"416b6a5c","chunk-2d0e62e8":"d54a42b8","chunk-2d225453":"9c37f242","chunk-0210a364":"c8a0708f","chunk-2d20effe":"4f7027ac","chunk-2d20fb4a":"4a79883d","chunk-29a66ea5":"3e58b59c","chunk-2d0af10c":"ec6dd811","chunk-01a213fe":"45aa3b01","chunk-2d228c78":"6bc009ad","chunk-2d2380b4":"14d7438e","chunk-f4a2d868":"b6ba9948","chunk-2d0ac3ce":"c151321f","chunk-3e760e92":"e5c48aac","chunk-47dd9cd0":"695dc8da","chunk-f30559a2":"b75c760a","chunk-2d0b219b":"e5ef483a","chunk-457eee6c":"c2d1f684","chunk-dacaf2b4":"de4a1261","chunk-2d0baa87":"feeb7fbe","chunk-2d21d4c0":"342cbeb5","chunk-71846a2a":"868f27b6","chunk-2495f49d":"bad8c972","chunk-cce9efdc":"e6e91a7e","chunk-2d238090":"a996ce0f","chunk-2d0ab8da":"ba42d486","chunk-3254c05f":"3523239b","chunk-865904d6":"d07c0d3f","chunk-2d217aa6":"ca0eb15c","chunk-2d0c8847":"75de49c1","chunk-2d0db70f":"345bb086","chunk-2d21789e":"a82bd7d9","chunk-29b22e80":"3cec7f0f","chunk-2d0b9b47":"486e3f11","chunk-5ee22fdc":"1c73eb64","chunk-2d0b66df":"6c239856","chunk-3d5abdaa":"a8488428","chunk-2d2176ea":"98c75c4c","chunk-361c6a3e":"ccda0857","chunk-2d225fa9":"94193868","chunk-2d22d96a":"2a7b954c","chunk-2d0de2b4":"34d26355","chunk-418c5a61":"ffd04629","chunk-2d0abfad":"bf6c7643","chunk-2d0e24f7":"a6be4233","chunk-2d21447c":"ced3860f","chunk-2d21d13a":"56f4aca4","chunk-2d0d4019":"462f89e2","chunk-2d0dd6ad":"314de549","chunk-2d0aa270":"7b00ebb5","chunk-2d0af3ec":"da194224","chunk-7c300b46":"5c50f4a3","chunk-2d0b618a":"7936dc44"}[e]+".js"}function u(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,u),o.l=!0,o.exports}u.e=function(e){var n=[],o={about:1,browser:1,chat:1,holon:1,"chunk-648bb194":1,"chunk-6afbfee0":1,"chunk-dc391914":1,communication:1,editor:1,file:1,friends_follower:1,gouvernance:1,network:1,parle:1,pod:1,post:1,profile:1,tension:1,"chunk-87b07880":1,"chunk-118c5354":1,"chunk-2409291a":1,"chunk-40c9c397":1,"chunk-8d9a5e66":1,"chunk-ee59b226":1,"chunk-4d15e509":1,"chunk-7a5376f0":1,"chunk-365cdf99":1,"chunk-0c8e6b9a":1,"chunk-03c7c79c":1,"chunk-5251d806":1,"chunk-14f554dc":1,"chunk-0210a364":1,"chunk-3e760e92":1,"chunk-47dd9cd0":1,"chunk-f30559a2":1,"chunk-dacaf2b4":1,"chunk-2495f49d":1,"chunk-cce9efdc":1,"chunk-865904d6":1,"chunk-29b22e80":1,"chunk-5ee22fdc":1,"chunk-3d5abdaa":1};r[e]?n.push(r[e]):0!==r[e]&&o[e]&&n.push(r[e]=new Promise((function(n,o){for(var t="css/"+({about:"about",agora:"agora",bookmarks:"bookmarks",browser:"browser",chat:"chat",holon:"holon",communication:"communication","crud-create":"crud-create","crud-read":"crud-read",editor:"editor",file:"file",forms:"forms",friends:"friends",friends_follower:"friends_follower",general:"general",gouvernance:"gouvernance",groups:"groups",inbox:"inbox",indexes:"indexes",misc:"misc",network:"network",offers:"offers",parle:"parle",pod:"pod",post:"post",profile:"profile",salut:"salut",storage:"storage",tension:"tension"}[e]||e)+"."+{about:"fed0c4df",agora:"31d6cfe0",bookmarks:"31d6cfe0",browser:"802ff776",chat:"3eeccf93","chunk-2d21d458":"31d6cfe0",holon:"a41db8b6","chunk-648bb194":"6a071d0d","chunk-6afbfee0":"866f32b3","chunk-8cf96fa6":"31d6cfe0","chunk-dc391914":"e8cbb295",communication:"750bde80","crud-create":"31d6cfe0","crud-read":"31d6cfe0",editor:"1c8a9ee5",file:"802ff776",forms:"31d6cfe0",friends:"31d6cfe0",friends_follower:"f229789b",general:"31d6cfe0",gouvernance:"d611d9d1",groups:"31d6cfe0",inbox:"31d6cfe0",indexes:"31d6cfe0",misc:"31d6cfe0",network:"1906ea12",offers:"31d6cfe0",parle:"5a33e525",pod:"802ff776",post:"2ab8eddb",profile:"90678834",salut:"31d6cfe0",storage:"31d6cfe0",tension:"09c1fb62","chunk-2d229b3e":"31d6cfe0","chunk-6c9b6f6a":"31d6cfe0","chunk-08041bdc":"31d6cfe0","chunk-2d22a0e9":"31d6cfe0","chunk-034e0f2f":"31d6cfe0","chunk-87b07880":"736d1035","chunk-118c5354":"959c9105","chunk-2409291a":"1f893535","chunk-2d0ac418":"31d6cfe0","chunk-2d0cc7d8":"31d6cfe0","chunk-2d20e8ae":"31d6cfe0","chunk-40c9c397":"1f893535","chunk-629f7e72":"31d6cfe0","chunk-8d9a5e66":"72189c22","chunk-ee59b226":"1f893535","chunk-4791cc9e":"31d6cfe0","chunk-2d0e24f1":"31d6cfe0","chunk-4d15e509":"71b7e800","chunk-7a5376f0":"71b7e800","chunk-365cdf99":"7b4e635c","chunk-6d405a33":"31d6cfe0","chunk-94f9418a":"31d6cfe0","chunk-0c8e6b9a":"14b9d5b5","chunk-2d0e17a2":"31d6cfe0","chunk-03c7c79c":"290f9717","chunk-5251d806":"1c8a9ee5","chunk-14f554dc":"99148d9a","chunk-46478f8a":"31d6cfe0","chunk-2d0c9199":"31d6cfe0","chunk-1abdeb5a":"31d6cfe0","chunk-2d0abc2d":"31d6cfe0","chunk-2d0c8a53":"31d6cfe0","chunk-2d0ba68d":"31d6cfe0","chunk-2d0e62e8":"31d6cfe0","chunk-2d225453":"31d6cfe0","chunk-0210a364":"6581ba98","chunk-2d20effe":"31d6cfe0","chunk-2d20fb4a":"31d6cfe0","chunk-29a66ea5":"31d6cfe0","chunk-2d0af10c":"31d6cfe0","chunk-01a213fe":"31d6cfe0","chunk-2d228c78":"31d6cfe0","chunk-2d2380b4":"31d6cfe0","chunk-f4a2d868":"31d6cfe0","chunk-2d0ac3ce":"31d6cfe0","chunk-3e760e92":"f3aa67c0","chunk-47dd9cd0":"1f893535","chunk-f30559a2":"1f893535","chunk-2d0b219b":"31d6cfe0","chunk-457eee6c":"31d6cfe0","chunk-dacaf2b4":"e0f36783","chunk-2d0baa87":"31d6cfe0","chunk-2d21d4c0":"31d6cfe0","chunk-71846a2a":"31d6cfe0","chunk-2495f49d":"e951a5ae","chunk-cce9efdc":"beda3c07","chunk-2d238090":"31d6cfe0","chunk-2d0ab8da":"31d6cfe0","chunk-3254c05f":"31d6cfe0","chunk-865904d6":"3fdff82e","chunk-2d217aa6":"31d6cfe0","chunk-2d0c8847":"31d6cfe0","chunk-2d0db70f":"31d6cfe0","chunk-2d21789e":"31d6cfe0","chunk-29b22e80":"bbb657f2","chunk-2d0b9b47":"31d6cfe0","chunk-5ee22fdc":"39a44f4a","chunk-2d0b66df":"31d6cfe0","chunk-3d5abdaa":"e9e52b68","chunk-2d2176ea":"31d6cfe0","chunk-361c6a3e":"31d6cfe0","chunk-2d225fa9":"31d6cfe0","chunk-2d22d96a":"31d6cfe0","chunk-2d0de2b4":"31d6cfe0","chunk-418c5a61":"31d6cfe0","chunk-2d0abfad":"31d6cfe0","chunk-2d0e24f7":"31d6cfe0","chunk-2d21447c":"31d6cfe0","chunk-2d21d13a":"31d6cfe0","chunk-2d0d4019":"31d6cfe0","chunk-2d0dd6ad":"31d6cfe0","chunk-2d0aa270":"31d6cfe0","chunk-2d0af3ec":"31d6cfe0","chunk-7c300b46":"31d6cfe0","chunk-2d0b618a":"31d6cfe0"}[e]+".css",c=u.p+t,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var s=a[i],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===t||d===c))return n()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],d=s.getAttribute("data-href");if(d===t||d===c)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var t=n&&n.target&&n.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=t,delete r[e],l.parentNode.removeChild(l),o(a)},l.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(l)})).then((function(){r[e]=0})));var t=c[e];if(0!==t)if(t)n.push(t[2]);else{var a=new Promise((function(n,o){t=c[e]=[n,o]}));n.push(t[2]=a);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=i(e);var f=new Error;s=function(n){d.onerror=d.onload=null,clearTimeout(l);var o=c[e];if(0!==o){if(o){var t=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+t+": "+r+")",f.name="ChunkLoadError",f.type=t,f.request=r,o[1](f)}c[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(n)},u.m=e,u.c=t,u.d=function(e,n,o){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(u.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)u.d(o,t,function(n){return e[n]}.bind(null,t));return o},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/solid-vue-panes/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=n,s=s.slice();for(var f=0;f<s.length;f++)n(s[f]);var l=d;a.push([0,"chunk-vendors"]),o()})({0:function(e,n,o){e.exports=o("56d7")},"034f":function(e,n,o){"use strict";var t=o("85ec"),r=o.n(t);r.a},1:function(e,n){},2:function(e,n){},4360:function(e,n,o){"use strict";var t,r,c,a,i=o("2b0e"),u=o("2f62"),s=(o("b0c0"),o("96cf"),o("1da1")),d=o("00e8"),f=o.n(d),l=window.SolidFileClient,h=new l(f.a),b=function(){return{webId:null,storage:"",folder:{},file:{},content:"",profile:{},friends:[],indexes:{puti:{instances:{},classes:{}},prti:{instances:{},classes:{}}},progressMax:14,progressValue:0}},p={},m={setWebId:function(e,n){return Object(s["a"])(regeneratorRuntime.mark((function o(){var t,r;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(e.commit("setWebId",n),null==n){o.next=20;break}return e.commit("setWebId",n),e.commit("setProgress",1),o.next=6,solid.data[n].storage;case 6:return t=o.sent,e.commit("setStorage","".concat(t)),e.commit("setProgress",2),o.t0=e,o.next=12,h.readFolder("".concat(t));case 12:o.t1=o.sent,o.t0.commit.call(o.t0,"setFolder",o.t1),e.commit("setProgress",3),e.commit("setProgress",14),r={webId:n,storage:"".concat(t)},e.dispatch("inbox/setUser",r,{root:!0}),o.next=23;break;case 20:e.commit("setStorage",null),e.commit("setFolder",null),e.dispatch("inbox/setUser",null,{root:!0});case 23:case"end":return o.stop()}}),o)})))()},updateFolder:function(e,n){return Object(s["a"])(regeneratorRuntime.mark((function o(){var t;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,h.readFolder(n);case 2:t=o.sent,e.commit("setFolder",t);case 4:case"end":return o.stop()}}),o)})))()},updateFile:function(e,n){return Object(s["a"])(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return e.commit("setFile",n),o.t0=e,o.next=4,h.readFile(n.url);case 4:o.t1=o.sent,o.t0.commit.call(o.t0,"setContent",o.t1);case 6:case"end":return o.stop()}}),o)})))()},writeFile:function(e,n){var o=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h.createFile(n.path+n.name,n.content,n.contentType).then((function(e){console.log(e.status)})).catch((function(e){return console.error("Error: ".concat(e))}));case 2:e.commit("setStorage",o.path);case 3:case"end":return t.stop()}}),t)})))()}},k={setWebId:function(e,n){e.webId=n},setProfile:function(e,n){e.profile=n},setIndexes:function(e,n){e.indexes=n},setStorage:function(e,n){e.storage=n},setFolder:function(e,n){e.folder=n},setFile:function(e,n){e.file=n},setContent:function(e,n){e.content=n},setProgress:function(e,n){e.progressValue=n},setFriends:function(e,n){e.friends=n}},g={namespaced:!0,state:b,getters:p,actions:m,mutations:k},w=function(){return{users:{"https://spoggy-test3.solid.community/profile/card#me":{pic:"boo"}},root:"",fileUrl:"",messages:[]}},x={},v={},P={setUser:function(e,n){console.log("User",n);var o=n.webId,t=n.pic;e.users[o]=t},setFileUrl:function(e,n){e.fileUrl=n},setRoot:function(e,n){console.log(n),e.root=n},setMessages:function(e,n){e.messages=n}},O={namespaced:!0,state:w,getters:x,actions:v,mutations:P},S=function(){return{channel:null,users:{"https://spoggy-test3.solid.community/profile/card#me":{pic:"boo"}},root:"",fileUrl:"",messages:[]}},C={},F={},_={setChannel:function(e,n){console.log(n),e.channel=n},setUser:function(e,n){console.log("User",n);var o=n.webId,t=n.pic;e.users[o]=t},setFileUrl:function(e,n){e.fileUrl=n},setRoot:function(e,n){console.log(n),e.root=n},setMessages:function(e,n){e.messages=n}},I={namespaced:!0,state:S,getters:C,actions:F,mutations:_},y=function(){return{socket:null,subscriptions:[]}},E={},T={},U={setSocket:function(e,n){e.socket=n}},$={namespaced:!0,state:y,getters:E,actions:T,mutations:U},j=function(){return{count:0,webId:null,storage:"",shape_url:"",schema:null,currentShape:"",shapes:[],footprint_shapes:[],translate_shapes:[],formData:{},all:[],workspace:"",shape:{}}},B={},D={},R={fillForm:function(e,n){void 0==e.formData[n.shape]&&(e.formData[n.shape]={}),n.value.length>0?e.formData[n.shape][n.predicate]=n.value:delete e.formData[n.shape][n.predicate],console.log("data",e.formData)},increment:function(e){e.count++},setWebId:function(e,n){e.webId=n},setStorage:function(e,n){e.storage=n},setShapeUrl:function(e,n){e.shape_url=n},setSchema:function(e,n){e.schema=n},setShapes:function(e,n){e.shapes=n},setFShapes:function(e,n){e.footprint_shapes=n},setTShapes:function(e,n){e.translate_shapes=n},setCurrentShape:function(e,n){e.currentShape=n},setWorkspace:function(e,n){e.workspace=n},setShape:function(e,n){e.shape=n}},A={namespaced:!0,state:j,getters:B,actions:D,mutations:R},M=(o("fb6a"),o("ac1f"),o("1276"),o("4d8d")),K=o("6dc1"),N=window.SolidFileClient,W=new N(f.a),G=function(){return{config:null,reply:{},toTrash:{},inbox:{files:[]}}},H={},L={setUser:function(e,n){return Object(s["a"])(regeneratorRuntime.mark((function o(){var c,a,i,u;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(null==n){o.next=23;break}return c={},c.webId=n.webId,c.storage=n.storage,c.inbox_log_file=n.storage+"popock/inbox_log.ttl",o.next=7,Object(M["b"])(n.webId);case 7:return a=o.sent,i=a.getSubject(n.webId),o.next=11,i.getAllRefs(K["c"].inbox);case 11:return c.inbox_urls=o.sent,e.commit("setInboxConfig",c),o.next=15,W.readFolder(c.inbox_urls[0]);case 15:u=o.sent,e.commit("setInbox",u),t="wss://"+c.inbox_log_file.split("/")[2],r=new WebSocket(t,["solid.0.1.0"]),r.onopen=function(){this.send("sub "+c.inbox_log_file),console.log("--------- STORE SUBSCRIBE TO INBOX",t,c.inbox_log_file)},r.onmessage=function(){var n=Object(s["a"])(regeneratorRuntime.mark((function n(o){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!o.data||"pub"!==o.data.slice(0,3)){n.next=6;break}return console.log(o.data),n.next=4,W.readFolder(c.inbox_urls[0]);case 4:t=n.sent,e.commit("setInbox",t);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),o.next=25;break;case 23:e.commit("setInboxConfig",null),e.commit("setInbox",{files:[]});case 25:case"end":return o.stop()}}),o)})))()}},V={setInboxConfig:function(e,n){console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Inbox Config mutation IN INBOX STORE",n),e.config=n},setReply:function(e,n){e.reply=n},setToTrash:function(e,n){e.toTrash=n},setInbox:function(e,n){e.inbox=n}},q={namespaced:!0,state:G,getters:H,actions:L,mutations:V},J=function(){return{count:0}},X={},Y={},z={increment:function(e){e.count++}},Q={namespaced:!0,state:J,getters:X,actions:Y,mutations:z},Z=(o("a15b"),o("93ef")),ee=function(){return{config:null,pubPod:"",activities:[]}},ne={},oe={setPubPod:function(e,n){return Object(s["a"])(regeneratorRuntime.mark((function o(){var t,r,i,u,d;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return console.log("pubPod",n),e.commit("setPubPod",n),t=new Date,r=[t.getFullYear(),("0"+(t.getMonth()+1)).slice(-2),("0"+t.getDate()).slice(-2)].join("-"),i=n+r+".ttl",c="wss://"+n.split("/")[2],a=new WebSocket(c,["solid.0.1.0"]),a.onopen=function(){this.send("sub "+i),console.log("--------- STORE SUBSCRIBE TO Agora",c,i)},a.onmessage=function(){var n=Object(s["a"])(regeneratorRuntime.mark((function n(o){var t,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!o.data||"pub"!==o.data.slice(0,3)){n.next=8;break}return console.log(o.data),n.next=4,Object(Z["f"])(i);case 4:t=n.sent,r=Object(Z["j"])(t),console.log(r),e.commit("setActivities",r);case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),o.next=11,Object(Z["f"])(i);case 11:u=o.sent,d=Object(Z["j"])(u),console.log(d),e.commit("setActivities",d);case 15:case"end":return o.stop()}}),o)})))()}},te={setActivities:function(e,n){console.log(n),e.activities=n},setPubPod:function(e,n){console.log(n),e.pubPod=n}},re={namespaced:!0,state:ee,getters:ne,actions:oe,mutations:te},ce=function(){return{groups:[],currentGroup:{},config:{}}},ae={},ie={},ue={setGroups:function(e,n){e.groups=n},setCurrentGroup:function(e,n){e.currentGroup=n},setWorkspace:function(e,n){e.config.workspace=n}},se={namespaced:!0,state:ce,getters:ae,actions:ie,mutations:ue};i["default"].use(u["a"]);n["a"]=new u["a"].Store({state:{},mutations:{},actions:{},modules:{solid:g,websocket:$,parle:O,chat:I,crud:A,inbox:q,groups:Q,agora:re,gouvernance:se}})},"4be8":function(e,n,o){e.exports=o.p+"img/popock.b43b963f.png"},"56d7":function(e,n,o){"use strict";o.r(n);o("ac1f"),o("1276"),o("e260"),o("e6cf"),o("cca6"),o("a79d");var t=o("2b0e"),r=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{attrs:{id:"app"}},[o("NavBar"),e.progressValue<e.progressMax?o("b-progress",{attrs:{value:e.progressValue,max:e.progressMax,"show-progress":"",animated:""}}):e._e(),o("transition",{attrs:{name:"fade"}},[o("router-view")],1),o("SolidTrackSession"),e._v(" 0.1.68 - /tension ")],1)},c=[],a=(o("d3b7"),{name:"App",components:{NavBar:function(){return o.e("chunk-dc391914").then(o.bind(null,"f464"))},SolidTrackSession:function(){return o.e("chunk-8cf96fa6").then(o.bind(null,"c1a7"))}},computed:{progressValue:function(){return this.$store.state.solid.progressValue},progressMax:function(){return this.$store.state.solid.progressMax}}}),i=a,u=(o("034f"),o("2877")),s=o("e233"),d=Object(u["a"])(i,r,c,!1,null,null,null);"function"===typeof s["default"]&&Object(s["default"])(d);var f=d.exports,l=o("9483");Object(l["a"])("".concat("/solid-vue-panes/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var h=o("8c4f"),b=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"home"},[t("img",{attrs:{width:"100px",alt:"Vue logo",src:o("4be8")}}),t("h1",[e._v("PoPock")]),t("h4",[e._v(e._s(e.$t("POds in the POCKet")))]),t("ShareTarget"),t("HelloWorld")],1)},p=[],m={name:"Home",components:{HelloWorld:function(){return o.e("chunk-6afbfee0").then(o.bind(null,"5170"))},ShareTarget:function(){return o.e("chunk-648bb194").then(o.bind(null,"d2d9"))}}},k=m,g=o("f83f"),w=Object(u["a"])(k,b,p,!1,null,null,null);"function"===typeof g["default"]&&Object(g["default"])(w);var x=w.exports,v="/solid-vue-panes";t["default"].use(h["a"]);var P=[{path:"/",name:"Home",component:x},{path:"/pod/:path?",name:"Pod",component:function(){return o.e("pod").then(o.bind(null,"6115"))}},{path:"/file/:file?",name:"File",component:function(){return o.e("file").then(o.bind(null,"9c88"))}},{path:"/fofri/:webId?",name:"FoFri",component:function(){return o.e("friends_follower").then(o.bind(null,"b3b2"))}},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}},{path:"/profile",name:"Profile",component:function(){return o.e("profile").then(o.bind(null,"5c5b"))}},{path:"/salut",name:"Salut",component:function(){return o.e("salut").then(o.bind(null,"d2d5"))}},{path:"/general",name:"General",component:function(){return o.e("general").then(o.bind(null,"2202"))}},{path:"/indexes",name:"Indexes",component:function(){return o.e("indexes").then(o.bind(null,"8c18"))}},{path:"/friends",name:"FriendsView",component:function(){return o.e("friends").then(o.bind(null,"488c"))}},{path:"/storage",name:"Storage",component:function(){return o.e("storage").then(o.bind(null,"1038"))}},{path:"/communication",name:"Communication",component:function(){return o.e("communication").then(o.bind(null,"20fd"))}},{path:"/parle",name:"Parle",component:function(){return o.e("parle").then(o.bind(null,"1a22"))}},{path:"/chat",name:"Chat",component:function(){return o.e("chat").then(o.bind(null,"293a"))}},{path:"/inbox",name:"Inbox",component:function(){return o.e("inbox").then(o.bind(null,"33d1"))}},{path:"/agora",name:"Agora",component:function(){return o.e("agora").then(o.bind(null,"de5b"))}},{path:"/editor",name:"Editor",component:function(){return o.e("editor").then(o.bind(null,"527c"))}},{path:"/browser",name:"Browser",component:function(){return o.e("browser").then(o.bind(null,"a36b"))}},{path:"/misc",name:"Misc",component:function(){return o.e("misc").then(o.bind(null,"bff0"))}},{path:"/offers",name:"Offers",component:function(){return o.e("offers").then(o.bind(null,"d7e1"))}},{path:"/forms",name:"Forms",component:function(){return o.e("forms").then(o.bind(null,"0894"))}},{path:"/groups/:url?",name:"Groups",component:function(){return o.e("groups").then(o.bind(null,"696f"))}},{path:"/bookmarks",name:"Bookmarks",component:function(){return o.e("bookmarks").then(o.bind(null,"b51b"))}},{path:"/translation",name:"Translation",component:function(){return o.e("bookmarks").then(o.bind(null,"085c"))}},{path:"/post",name:"Post",component:function(){return o.e("post").then(o.bind(null,"afbc"))}},{path:"/network",name:"Network",component:function(){return o.e("network").then(o.bind(null,"8475"))}},{path:"/holon",name:"Holon",component:function(){return Promise.all([o.e("chunk-2d21d458"),o.e("holon")]).then(o.bind(null,"8190"))}},{path:"/group",name:"Group",component:function(){return Promise.all([o.e("chunk-2d21d458"),o.e("holon")]).then(o.bind(null,"52cc"))}},{path:"/gouvernance1",name:"Gouvernance1",component:function(){return o.e("gouvernance").then(o.bind(null,"a795"))}},{path:"/read",name:"CrudRead",component:function(){return o.e("crud-read").then(o.bind(null,"d37b"))}},{path:"/create",name:"CrudCreate",component:function(){return o.e("crud-create").then(o.bind(null,"d64a"))}},{path:"/gouvernance",name:"Gouvernance",component:function(){return o.e("gouvernance").then(o.bind(null,"56d7d"))}},{path:"/tension",name:"Tension",component:function(){return o.e("tension").then(o.bind(null,"7f37"))}},{path:"/simplegouv",name:"SimpleGouv",component:function(){return o.e("tension").then(o.bind(null,"0d4f"))}}],O=new h["a"]({routes:P,mode:"history",base:v,linkActiveClass:"active"}),S=O,C=o("4360"),F=o("a925"),_=o("5f5b"),I=o("b1e0"),y=o("e54b"),E=o.n(y),T=(o("f9e3"),o("2dd8"),o("fc7b")),U=o("b329");t["default"].config.productionTip=!1,t["default"].use(F["a"]),t["default"].use(_["a"]),t["default"].use(I["a"]);var $=window.solid;console.log("SOLID",$),t["default"].use(E.a),t["default"].use(T["a"],{requestOnNotify:!0});var j=new F["a"]({locale:navigator.language.split("-")[0]||"en",messages:{en:{}}});t["default"].component("network",U["Network"]),new t["default"]({router:S,store:C["a"],solid:$,i18n:j,render:function(e){return e(f)},created:function(){if(sessionStorage.redirect){var e=sessionStorage.redirect;delete sessionStorage.redirect,this.$router.push(e)}}}).$mount("#app")},"85ec":function(e,n,o){},b9e2:function(e,n){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"hello":"hello world!","login":"Login","logout":"Logout","chat":"Chat","inbox":"Inbox","talk":"Talk","databrowser":"DataBrowser","bookmarks":"Bookmarks","profile":"Profile","fofri":"Follow Friends","friends":"Friends","communication":"Communication","storage":"Storage","User":"User","explorer":"Explorer","editor":"Editor","POds in the POCKet":"POds in the POCKet!"},"fr":{"hello":"Salut tout le monde!","login":"S\'identifier","logout":"Se déconnecter","chat":"Chat","inbox":"Boîte Mails","talk":"Parle","databrowser":"Stockage","bookmarks":"Signets","profile":"Profil","fofri":"Suivi d\'amis","friends":"Amis","communication":"Communication","storage":"Stockage","User":"Utilisateur","explorer":"Explorateur","editor":"Editeur","POds in the POCKet":"Ton POd dans ta POChe!"},"de":{"hello":"Hallo Welt!","login":"Anmeldung","logout":"Ausloggen","chat":"Chat","inbox":"Inbox","talk":"Talk","databrowser":"DataBrowser","bookmarks":"Bookmarks","profile":"Profile","fofri":"Follow Friends","friends":"Friends","communication":"Communication","storage":"Storage","User":"User","explorer":"Explorer","editor":"Editor","POds in the POCKet":"Dein POD in deiner Tasche!"},"es":{"hello":"Hola Mundo !","login":"Iniciar sesión","logout":"Cerrar sesión","chat":"Chat","inbox":"Inbox","talk":"Talk","databrowser":"DataBrowser","bookmarks":"Bookmarks","profile":"Profile","fofri":"Follow Friends","friends":"Friends","communication":"Communication","storage":"Storage","User":"User","explorer":"Explorer","editor":"Editor","POds in the POCKet":"¡Tu POD en tu bolsillo!"},"ja":{"hello":"こんにちは、世界！","login":"ログインする","logout":"ログアウト","chat":"Chat","inbox":"Inbox","talk":"Talk","databrowser":"DataBrowser","bookmarks":"Bookmarks","profile":"Profile","fofri":"Follow Friends","friends":"Friends","communication":"Communication","storage":"Storage","User":"User","explorer":"Explorer","editor":"Editor","POds in the POCKet":"あなたのポケットにあなたのPOD！"},"ru":{"hello":"Привет мир！","login":"авторизоваться","logout":"выйти!","chat":"Chat","inbox":"Inbox","talk":"Talk","databrowser":"DataBrowser","bookmarks":"Bookmarks","profile":"Profile","fofri":"Follow Friends","friends":"Friends","communication":"Communication","storage":"Storage","User":"User","explorer":"Explorer","editor":"Editor","POds in the POCKet":"Ваш POD в кармане!"}}'),delete e.options._Ctor}},e233:function(e,n,o){"use strict";var t=o("f3f8"),r=o.n(t);n["default"]=r.a},f3f8:function(e,n){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"hello":"hello world!","login":"Login","logout":"Logout","chat":"Chat","inbox":"Inbox","talk":"Talk","databrowser":"DataBrowser","bookmarks":"Bookmarks","profile":"Profile","fofri":"Follow Friends","friends":"Friends","communication":"Communication","storage":"Storage","User":"User","explorer":"Explorer","editor":"Editor","POds in the POCKet":"POds in the POCKet!"},"fr":{"hello":"Salut tout le monde!","login":"S\'identifier","logout":"Se déconnecter","chat":"Chat","inbox":"Boîte Mails","talk":"Parle","databrowser":"Stockage","bookmarks":"Signets","profile":"Profil","fofri":"Suivi d\'amis","friends":"Amis","communication":"Communication","storage":"Stockage","User":"Utilisateur","explorer":"Explorateur","editor":"Editeur","POds in the POCKet":"Ton POd dans ta POChe!"},"de":{"hello":"Hallo Welt!","login":"Anmeldung","logout":"Ausloggen","chat":"Chat","inbox":"Inbox","talk":"Talk","databrowser":"DataBrowser","bookmarks":"Bookmarks","profile":"Profile","fofri":"Follow Friends","friends":"Friends","communication":"Communication","storage":"Storage","User":"User","explorer":"Explorer","editor":"Editor","POds in the POCKet":"Dein POD in deiner Tasche!"},"es":{"hello":"Hola Mundo !","login":"Iniciar sesión","logout":"Cerrar sesión","chat":"Chat","inbox":"Inbox","talk":"Talk","databrowser":"DataBrowser","bookmarks":"Bookmarks","profile":"Profile","fofri":"Follow Friends","friends":"Friends","communication":"Communication","storage":"Storage","User":"User","explorer":"Explorer","editor":"Editor","POds in the POCKet":"¡Tu POD en tu bolsillo!"},"ja":{"hello":"こんにちは、世界！","login":"ログインする","logout":"ログアウト","chat":"Chat","inbox":"Inbox","talk":"Talk","databrowser":"DataBrowser","bookmarks":"Bookmarks","profile":"Profile","fofri":"Follow Friends","friends":"Friends","communication":"Communication","storage":"Storage","User":"User","explorer":"Explorer","editor":"Editor","POds in the POCKet":"あなたのポケットにあなたのPOD！"},"ru":{"hello":"Привет мир！","login":"авторизоваться","logout":"выйти!","chat":"Chat","inbox":"Inbox","talk":"Talk","databrowser":"DataBrowser","bookmarks":"Bookmarks","profile":"Profile","fofri":"Follow Friends","friends":"Friends","communication":"Communication","storage":"Storage","User":"User","explorer":"Explorer","editor":"Editor","POds in the POCKet":"Ваш POD в кармане!"}}'),delete e.options._Ctor}},f83f:function(e,n,o){"use strict";var t=o("b9e2"),r=o.n(t);n["default"]=r.a}});
//# sourceMappingURL=app.8ea56909.js.map