(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dd4f194c"],{2532:function(t,e,n){"use strict";var a=n("23e7"),i=n("5a34"),r=n("1d80"),s=n("ab13");a({target:"String",proto:!0,forced:!s("includes")},{includes:function(t){return!!~String(r(this)).indexOf(i(t),arguments.length>1?arguments[1]:void 0)}})},"487a":function(t,e,n){(function(e,n){t.exports=n()})(0,(function(){"use strict";var t="@@InfiniteScroll",e=function(t,e){var n,a,i,r,s,o=function(){t.apply(r,s),a=n};return function(){if(r=this,s=arguments,n=Date.now(),i&&(clearTimeout(i),i=null),a){var t=e-(n-a);t<0?o():i=setTimeout((function(){o()}),t)}else o()}},n=function(t){return t===window?Math.max(window.pageYOffset||0,document.documentElement.scrollTop):t.scrollTop},a=document.defaultView.getComputedStyle,i=function(t){var e=t;while(e&&"HTML"!==e.tagName&&"BODY"!==e.tagName&&1===e.nodeType){var n=a(e).overflowY;if("scroll"===n||"auto"===n)return e;e=e.parentNode}return window},r=function(t){return t===window?document.documentElement.clientHeight:t.clientHeight},s=function(t){return t===window?n(window):t.getBoundingClientRect().top+n(window)},o=function(t){var e=t.parentNode;while(e){if("HTML"===e.tagName)return!0;if(11===e.nodeType)return!1;e=e.parentNode}return!1},c=function(){if(!this.binded){this.binded=!0;var t=this,n=t.el,a=n.getAttribute("infinite-scroll-throttle-delay"),r=200;a&&(r=Number(t.vm[a]||a),(isNaN(r)||r<0)&&(r=200)),t.throttleDelay=r,t.scrollEventTarget=i(n),t.scrollListener=e(l.bind(t),t.throttleDelay),t.scrollEventTarget.addEventListener("scroll",t.scrollListener),this.vm.$on("hook:beforeDestroy",(function(){t.scrollEventTarget.removeEventListener("scroll",t.scrollListener)}));var s=n.getAttribute("infinite-scroll-disabled"),o=!1;s&&(this.vm.$watch(s,(function(e){t.disabled=e,!e&&t.immediateCheck&&l.call(t)})),o=Boolean(t.vm[s])),t.disabled=o;var c=n.getAttribute("infinite-scroll-distance"),d=0;c&&(d=Number(t.vm[c]||c),isNaN(d)&&(d=0)),t.distance=d;var u=n.getAttribute("infinite-scroll-immediate-check"),h=!0;u&&(h=Boolean(t.vm[u])),t.immediateCheck=h,h&&l.call(t);var f=n.getAttribute("infinite-scroll-listen-for-event");f&&t.vm.$on(f,(function(){l.call(t)}))}},l=function(t){var e=this.scrollEventTarget,a=this.el,i=this.distance;if(!0===t||!this.disabled){var o=n(e),c=o+r(e),l=!1;if(e===a)l=e.scrollHeight-c<=i;else{var d=s(a)-s(e)+a.offsetHeight+o;l=c+i>=d}l&&this.expression&&this.expression()}},d={bind:function(e,n,a){e[t]={el:e,vm:a.context,expression:n.value};var i=arguments;e[t].vm.$on("hook:mounted",(function(){e[t].vm.$nextTick((function(){o(e)&&c.call(e[t],i),e[t].bindTryCount=0;var n=function n(){e[t].bindTryCount>10||(e[t].bindTryCount++,o(e)?c.call(e[t],i):setTimeout(n,50))};n()}))}))},unbind:function(e){e&&e[t]&&e[t].scrollEventTarget&&e[t].scrollEventTarget.removeEventListener("scroll",e[t].scrollListener)}},u=function(t){t.directive("InfiniteScroll",d)};return window.Vue&&(window.infiniteScroll=d,Vue.use(u)),d.install=u,d}))},"4b6f":function(t,e,n){"use strict";var a=n("dfa4"),i=n.n(a);i.a},"5a34":function(t,e,n){var a=n("44e7");t.exports=function(t){if(a(t))throw TypeError("The method doesn't accept regular expressions");return t}},"8a79":function(t,e,n){"use strict";var a=n("23e7"),i=n("06cf").f,r=n("50c4"),s=n("5a34"),o=n("1d80"),c=n("ab13"),l=n("c430"),d="".endsWith,u=Math.min,h=c("endsWith"),f=!l&&!h&&!!function(){var t=i(String.prototype,"endsWith");return t&&!t.writable}();a({target:"String",proto:!0,forced:!f&&!h},{endsWith:function(t){var e=String(o(this));s(t);var n=arguments.length>1?arguments[1]:void 0,a=r(e.length),i=void 0===n?a:u(r(n),a),c=String(t);return d?d.call(e,c,i):e.slice(i-c.length,i)===c}})},"99af":function(t,e,n){"use strict";var a=n("23e7"),i=n("d039"),r=n("e8b5"),s=n("861d"),o=n("7b0b"),c=n("50c4"),l=n("8418"),d=n("65f0"),u=n("1dde"),h=n("b622"),f=n("2d00"),g=h("isConcatSpreadable"),m=9007199254740991,v="Maximum allowed index exceeded",p=f>=51||!i((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),b=u("concat"),w=function(t){if(!s(t))return!1;var e=t[g];return void 0!==e?!!e:r(t)},y=!p||!b;a({target:"Array",proto:!0,forced:y},{concat:function(t){var e,n,a,i,r,s=o(this),u=d(s,0),h=0;for(e=-1,a=arguments.length;e<a;e++)if(r=-1===e?s:arguments[e],w(r)){if(i=c(r.length),h+i>m)throw TypeError(v);for(n=0;n<i;n++,h++)n in r&&l(u,h,r[n])}else{if(h>=m)throw TypeError(v);l(u,h++,r)}return u.length=h,u}})},a15b:function(t,e,n){"use strict";var a=n("23e7"),i=n("44ad"),r=n("fc6a"),s=n("a640"),o=[].join,c=i!=Object,l=s("join",",");a({target:"Array",proto:!0,forced:c||!l},{join:function(t){return o.call(r(this),void 0===t?",":t)}})},ab13:function(t,e,n){var a=n("b622"),i=a("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[i]=!1,"/./"[t](e)}catch(a){}}return!1}},baa5:function(t,e,n){var a=n("23e7"),i=n("e58c");a({target:"Array",proto:!0,forced:i!==[].lastIndexOf},{lastIndexOf:i})},caad:function(t,e,n){"use strict";var a=n("23e7"),i=n("4d64").includes,r=n("44d2"),s=n("ae40"),o=s("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:!o},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r("includes")},cbc6:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chat-list"},[n("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"container",attrs:{"infinite-scroll-disabled":"busy","infinite-scroll-distance":"300"}},[0==t.data.length?n("div",[t._v("Please Wait, I'm loading data ;-)")]):n("h3",[n("a",{attrs:{href:t.channel.instance,target:"_blank"}},[t._v(t._s(t.channel.label))])]),n("b-list-group",{attrs:{flush:""}},t._l(t.data,(function(e){return n("b-list-group-item",{key:e.id},[n("div",{staticClass:"item"},[n("div",{staticClass:"avatar"}),n("div",{staticClass:"maker text-info"},[t._v(" "+t._s(e.maker.split("/").slice(2,3)[0])+" ")]),n("div",{staticClass:"content"},[t._v(" "+t._s(e.content)+" ")]),n("div",{staticClass:"created"},[t._v(" "+t._s(e.created)+" ")])])])})),1)],1),n("b-alert",{staticClass:"position-fixed fixed-bottom rounded-0",staticStyle:{"z-index":"2000",bottom:"30px"},attrs:{variant:"info",dismissible:""},model:{value:t.busy,callback:function(e){t.busy=e},expression:"busy"}},[t._v(t._s(t.title)+" ")]),n("SolidChatSend")],1)},i=[],r=(n("99af"),n("4de4"),n("caad"),n("c975"),n("a15b"),n("baa5"),n("d81d"),n("fb6a"),n("d3b7"),n("ac1f"),n("8a79"),n("2532"),n("1276"),n("b85c")),s=(n("96cf"),n("1da1")),o=n("487a"),c=n.n(o),l=n("4d8d"),d=n("6dc1"),u={name:"SolidChatList",directives:{infiniteScroll:c.a},components:{SolidChatSend:function(){return n.e("chunk-72a2feb3").then(n.bind(null,"f345"))}},data:function(){return{data:[],busy:!0,title:"Select a channel"}},created:function(){this.channel=this.$store.state.chat.channel,console.log("###############INSTANCE",this.channel),this.channelChanged(this.channel)},methods:{channelChanged:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.created,e.limite=new Date(a),e.date=new Date,e.url=e.channel.instance.substr(0,e.channel.instance.lastIndexOf("/")+1),e.data=[],n.next=7,e.initChat(e.url);case 7:case"end":return n.stop()}}),n)})))()},loadMore:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.busy=!0,!(this.limite<=this.date)){t.next=9;break}return e=[this.root,this.date.getFullYear(),("0"+(this.date.getMonth()+1)).slice(-2),("0"+this.date.getDate()).slice(-2),"chat.ttl"].join("/"),this.date.setDate(this.date.getDate()-1),this.title="loading "+this.date.toLocaleDateString(),t.next=7,this.loadMessages(e,"bottom");case 7:t.next=11;break;case 9:this.data.push({id:Math.random(),maker:"https://System.solid-vue-panes",content:"This is the end, my friend, there are no message before that date",created:this.limite.toLocaleString()}),this.makeToast("No message before",this.limite.toLocaleString(),"warning");case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),loadMessages:function(t,e){var n=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var i,s,o,c,u,h,f,g,m,v,p;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(l["b"])(t);case 3:i=a.sent,s=i.findSubjects(),s=s.filter(n.onlyUnique),o=[],c=n.data.map((function(t){return t.id})),u=Object(r["a"])(s);try{for(u.s();!(h=u.n()).done;)f=h.value,f.asRef()==n.root+"/index.ttl#this"||c.includes(f.asRef())||(g=f.getString(d["a"].created),m=f.getLiteral(d["g"].content),v=f.getNodeRef(d["b"].maker)||"anonymous",p={id:f.asRef(),created:new Date(g).toLocaleString(),content:m,maker:v},o.unshift(p))}catch(b){u.e(b)}finally{u.f()}"top"==e?(n.today_messages=[],n.today_messages=o):n.old_messages.push.apply(n.old_messages,o),n.data=[],n.data=n.today_messages.concat(n.old_messages),a.next=17;break;case 15:a.prev=15,a.t0=a["catch"](0);case 17:n.busy=!1;case 18:case"end":return a.stop()}}),a,null,[[0,15]])})))()},loadMore1:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.busy=!0,!(this.limite<=this.date)){t.next=10;break}return e=[this.root,this.date.getFullYear(),("0"+(this.date.getMonth()+1)).slice(-2),("0"+this.date.getDate()).slice(-2),"chat.ttl"].join("/"),this.date.setDate(this.date.getDate()-1),this.title="loading "+this.date.toLocaleDateString(),t.next=7,this.updateMessages(e,"bottom");case 7:this.busy=!1,t.next=10;break;case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),initChat:function(t){this.today_messages=[],this.old_messages=[],this.messages=[],this.data=[],this.stopped=!1,this.date=new Date,this.root=t,this.root.endsWith("/")&&(this.root=this.root.slice(0,-1)),this.fileUrl=[this.root,this.date.getFullYear(),("0"+(this.date.getMonth()+1)).slice(-2),("0"+this.date.getDate()).slice(-2),"chat.ttl"].join("/"),this.$store.commit("chat/setFileUrl",this.fileUrl),this.$store.commit("chat/setRoot",this.root);var e=this.root.split("//")[1],n=e.split("/")[0]+"/",a=new WebSocket("wss://"+n,["solid.0.1.0"]);a.onopen=function(){a.send("sub "+this.fileUrl)}.bind(this),a.onmessage=function(t){t.data&&"pub"===t.data.slice(0,3)&&this.updateMessages(t.data.substring(4),"top")}.bind(this),this.loadMore()},updateMessages:function(t,e){var n=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var i,s,o,c,u,h,f,g,m,v,p;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(l["b"])(t);case 3:i=a.sent,s=i.findSubjects(),s=s.filter(n.onlyUnique),o=[],c=n.data.map((function(t){return t.id})),u=Object(r["a"])(s);try{for(u.s();!(h=u.n()).done;)f=h.value,f.asRef()==n.root+"/index.ttl#this"||c.includes(f.asRef())||(g=f.getString(d["a"].created),m=f.getLiteral(d["g"].content),v=f.getNodeRef(d["b"].maker)||"anonymous",p={id:f.asRef(),created:new Date(g).toLocaleString(),content:m,maker:v},o.unshift(p),console.log(o))}catch(b){u.e(b)}finally{u.f()}"top"==e?(n.today_messages=[],n.today_messages=o):n.old_messages.push.apply(n.old_messages,o),n.data=[],n.data=n.today_messages.concat(n.old_messages),n.busy=!1,console.log("DATA",n.data,n.busy),a.next=19;break;case 17:a.prev=17,a.t0=a["catch"](0);case 19:case"end":return a.stop()}}),a,null,[[0,17]])})))()},makeToast:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(e,{title:t,variant:n,solid:!0})},onlyUnique:function(t,e,n){return n.indexOf(t)===e}},watch:{channel:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.channelChanged(e);case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},computed:{channel:{get:function(){return this.$store.state.chat.channel},set:function(){}}}},h=u,f=(n("4b6f"),n("2877")),g=Object(f["a"])(h,a,i,!1,null,null,null);e["default"]=g.exports},d81d:function(t,e,n){"use strict";var a=n("23e7"),i=n("b727").map,r=n("1dde"),s=n("ae40"),o=r("map"),c=s("map");a({target:"Array",proto:!0,forced:!o||!c},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},dfa4:function(t,e,n){},e58c:function(t,e,n){"use strict";var a=n("fc6a"),i=n("a691"),r=n("50c4"),s=n("a640"),o=n("ae40"),c=Math.min,l=[].lastIndexOf,d=!!l&&1/[1].lastIndexOf(1,-0)<0,u=s("lastIndexOf"),h=o("indexOf",{ACCESSORS:!0,1:0}),f=d||!u||!h;t.exports=f?function(t){if(d)return l.apply(this,arguments)||0;var e=a(this),n=r(e.length),s=n-1;for(arguments.length>1&&(s=c(s,i(arguments[1]))),s<0&&(s=n+s);s>=0;s--)if(s in e&&e[s]===t)return s||0;return-1}:l}}]);
//# sourceMappingURL=chunk-dd4f194c.0fcc7baf.js.map