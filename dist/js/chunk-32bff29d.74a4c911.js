(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32bff29d"],{"4de4":function(e,t,s){"use strict";var r=s("23e7"),a=s("b727").filter,n=s("1dde"),o=s("ae40"),i=n("filter"),c=o("filter");r({target:"Array",proto:!0,forced:!i||!c},{filter:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},"8a7a":function(e,t,s){"use strict";s("4de4"),s("4160"),s("c975"),s("a15b"),s("baa5"),s("fb6a"),s("159b"),s("96cf");var r=s("1da1"),a=s("00e8"),n=s.n(a),o=s("7fed"),i=s.n(o),c=s("4d8d"),l=s("6dc1"),u=new i.a(n.a);t["a"]={methods:{prepareToday:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var s,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=new Date,e.$store.commit("parle/setDataDate",s),r=[s.getFullYear(),("0"+(s.getMonth()+1)).slice(-2),("0"+s.getDate()).slice(-2)].join("-")+".ttl",a=e.$store.state.parle.root+r,t.next=6,e.create(a);case 6:e.$store.commit("parle/setFileUrl",a);case 7:case"end":return t.stop()}}),t)})))()},create:function(e){return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u.itemExists(e);case 2:if(t.sent){t.next=7;break}return t.next=5,u.postFile(e,"","text/turtle").then((function(e){console.log("File Created",e)})).catch((function(e){return console.error("Error: ".concat(e))}));case 5:t.next=8;break;case 7:console.log("File exist",e);case 8:case"end":return t.stop()}}),t)})))()},bascule:function(e){console.log("BASCULE",e),this.$store.commit("parle/setFileUrl",e),this.path=e.substr(0,e.lastIndexOf("/")+1),void 0!=this.$store.state.websocket.socket&&console.log("TODO : subscribe"),this.makeToast("We have switched to",e,"info"),this.getMessages(e)},getMessages:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function s(){var r,a,n,o;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return console.log("URI",e),r=[],s.next=4,u.itemExists(e);case 4:if(s.sent){s.next=9;break}return s.next=7,u.postFile(e,"","text/turtle").then((function(e){console.log("File Created",e)})).catch((function(e){return console.error("Error: ".concat(e))}));case 7:s.next=10;break;case 9:console.log("File exist",e);case 10:return void 0!=t.$store.state.websocket.socket&&t.$store.state.websocket.socket.send("sub "+e),s.next=13,Object(c["b"])(e);case 13:a=s.sent,n=a.findSubjects(),n=n.filter(t.onlyUnique),o=[],n.forEach((function(e){var t=e.getString(l["a"].created),s=e.getLiteral(l["g"].content),r=e.getNodeRef(l["b"].maker),a=e.getAllNodeRefs(l["f"].hasPart),n=e.getNodeRef(l["f"].isPartOf),i={id:e.asRef(),created:new Date(t).toLocaleTimeString(),content:s,maker:r,parts:a,parent:n};o.push(i)})),r=o.reverse(),console.log("Messages",r),t.$store.commit("parle/setMessages",r);case 21:case"end":return s.stop()}}),s)})))()},onlyUnique:function(e,t,s){return s.indexOf(e)===t}}}},baa5:function(e,t,s){var r=s("23e7"),a=s("e58c");r({target:"Array",proto:!0,forced:a!==[].lastIndexOf},{lastIndexOf:a})},c3f8:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"solid-chat-list"},[s("b-input-group",{staticClass:"mb-2"},[s("b-form-datepicker",{attrs:{id:"example-datepicker",min:"2020-08-01",max:e.max},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}}),s("b-input-group-append",[s("b-button",{on:{click:e.sort}},[e._v("Sort")])],1)],1),s("b-list-group",e._l(e.messages,(function(t){return s("b-list-group-item",{key:t.id,staticClass:"flex-column align-items-start"},[s("div",{staticClass:"d-flex w-100 justify-content-between"},[s("div",{staticClass:"mb-1"},[null!=t.maker?s("a",{attrs:{href:t.maker,target:"_blank"}},[s("b-icon",{attrs:{icon:"person-fill"}}),e._v(e._s(t.maker.split("/").slice(2,3)[0])+" ")],1):s("b-icon",{attrs:{icon:"person-fill"}})],1),s("small",{staticClass:"text-muted"},[e._v(" "+e._s(t.created)+" ")])]),s("p",{staticClass:"mb-1"},[e._v(" "+e._s(t.content)+" ")]),s("div",{staticClass:"text-muted"},[t.parent?s("div",[e._v(" This "),s("a",{attrs:{href:t.id.split("#")[0],target:"_blank"}},[e._v(e._s(t.id.split("/").slice(-2,-1)[0]))]),e._v(" channel as been created from "),s("b-button",{staticClass:"m-1 btn-sm",attrs:{pill:!0,variant:"outline-info"},on:{click:function(s){return e.bascule(t.parent)}}},[e._v(" "+e._s(t.parent.split("/").slice(-2,-1)[0])+" ")])],1):e._e(),null!=e.webId?s("b-button",{staticClass:"btn-sm",attrs:{pill:!0,variant:"outline-info"},on:{click:function(s){return e.new_sub(t.id)}}},[e._v("Reply")]):s("span",[e._v("Login to reply")]),e._l(t.parts,(function(t){return s("b-button",{key:t,staticClass:"m-1 btn-sm",attrs:{pill:!0,variant:"info"},on:{click:function(s){return e.bascule(t)}}},[e._v(" "+e._s(t.split("/").slice(-2,-1)[0])+" ")])}))],2)])})),1),s("div",[e.messages.length>5?s("b-input-group",{staticClass:"mb-2"},[s("b-form-datepicker",{attrs:{id:"example-datepicker2",min:"2020-08-01",max:e.max},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}}),s("b-input-group-append",[s("b-button",{on:{click:e.sort}},[e._v("Sort")])],1)],1):e._e()],1),s("br"),s("br"),s("div",{staticClass:"m-3"},[s("a",{attrs:{href:"https://scenaristeur.github.io/spoggy-simple/?source="+e.file,target:"_blank"}},[e._v("Visualization")])]),s("br"),s("br"),s("br")],1)},a=[],n=(s("a15b"),s("baa5"),s("fb6a"),s("ac1f"),s("1276"),s("96cf"),s("1da1")),o=s("8a7a"),i=s("4d8d"),c=s("00e8"),l=s.n(c),u=s("7fed"),d=s.n(u),f=s("6dc1"),b=new d.a(l.a),p={name:"ParleList",props:{msg:String},mixins:[o["a"]],data:function(){return{date:"",part:""}},created:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=new Date,e.date=e.formatDate(s),e.max=e.date,e.path=e.$store.state.parle.root,console.log("ROOT FROM STORE",e.$store.state.parle.root),t.next=7,e.createWebSocket();case 7:e.url=e.$store.state.parle.url,void 0!=e.url&&e.url.length>0&&(r=e.url.substring(e.url.lastIndexOf("/")+1),console.log(r),e.bascule(e.path+r),e.$store.commit("parle/setFileUrl",e.path+r));case 9:case"end":return t.stop()}}),t)})))()},mounted:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:s=e.$store.state.websocket.socket,console.log("SOCKET FROM STORE",s),s.onmessage=function(e){e.data&&"pub"===e.data.slice(0,3)&&(console.log("updated",e.data),this.getMessages(e.data.substring(4)))}.bind(e);case 3:case"end":return t.stop()}}),t)})))()},methods:{createWebSocket:function(){var e=this.$store.state.parle.root,t=e.split("//")[1],s=t.split("/")[0]+"/",r=new WebSocket("wss://"+s,["solid.0.1.0"]);this.$store.commit("websocket/setSocket",r)},addSubscription:function(e){this.$store.state.websocket.socket.send("sub "+e)},sort:function(){this.messages.reverse()},formatDate:function(e){return[e.getFullYear(),("0"+(e.getMonth()+1)).slice(-2),("0"+e.getDate()).slice(-2)].join("-")},new_sub:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var r,a,n,o,c,l,u,d,p,m;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(console.log(e),r=prompt("Create a sub-channel from "+e),!(null!=r&&r.length>0)){s.next=60;break}return console.log(r),r=r.split(" ").join("_"),a=e.substr(0,e.lastIndexOf("/")+1),n=e.split("#").pop(),console.log("Parent",a,n),o=a+r+"/",c=t.date+".ttl",l=o+c,console.log("Child",o,c),t.$store.commit("parle/setFileUrl",l),s.next=15,b.itemExists(l);case 15:if(s.sent){s.next=20;break}return s.next=18,b.postFile(l,"","text/turtle").then((function(e){console.log("File Created",e)})).catch((function(e){return console.error("Error: ".concat(e))}));case 18:s.next=21;break;case 20:console.log("File exist",l);case 21:return u={},s.prev=22,s.next=25,Object(i["b"])(l);case 25:u=s.sent,s.next=33;break;case 28:return s.prev=28,s.t0=s["catch"](22),s.next=32,Object(i["a"])(l);case 32:u=s.sent;case 33:return u.addSubject,d=u.addSubject({identifier:"this"}),d.addLiteral(f["a"].created,t.date),d.addNodeRef(f["f"].isPartOf,e),d.addNodeRef(f["b"].maker,t.$store.state.solid.webId),s.next=40,u.save();case 40:return p={},s.prev=41,s.next=44,Object(i["b"])(e);case 44:p=s.sent,s.next=52;break;case 47:return s.prev=47,s.t1=s["catch"](41),s.next=51,Object(i["a"])(e);case 51:p=s.sent;case 52:return m=p.getSubject(e),m.addRef(f["f"].hasPart,l),s.next=56,p.save();case 56:t.bascule(l),void 0!=t.$store.state.websocket.socket&&t.$store.state.websocket.socket.send("sub "+l),s.next=61;break;case 60:alert("You must provide a name to create a sub Channel");case 61:case"end":return s.stop()}}),s,null,[[22,28],[41,47]])})))()},makeToast:function(e,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(t,{title:e,variant:s,solid:!0})}},watch:{url:function(e){console.log("url changed",e);var t=e.substring(e.lastIndexOf("/")+1);console.log(t),this.$store.commit("parle/setFileUrl",this.path+t),this.bascule(this.path+t)}},computed:{file:function(){var e=this.path+this.date+".ttl";return this.$store.commit("parle/setFileUrl",e),void 0!=this.$store.state.websocket.socket&&1==this.$store.state.websocket.socket.readyState&&this.$store.state.websocket.socket.send("sub "+e),this.getMessages(e),e},webId:function(){return this.$store.state.solid.webId},messages:function(){return this.$store.state.parle.messages},url:{get:function(){return this.$store.state.parle.url},set:function(){}}}},m=p,h=s("2877"),g=Object(h["a"])(m,r,a,!1,null,null,null);t["default"]=g.exports},c975:function(e,t,s){"use strict";var r=s("23e7"),a=s("4d64").indexOf,n=s("a640"),o=s("ae40"),i=[].indexOf,c=!!i&&1/[1].indexOf(1,-0)<0,l=n("indexOf"),u=o("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:c||!l||!u},{indexOf:function(e){return c?i.apply(this,arguments)||0:a(this,e,arguments.length>1?arguments[1]:void 0)}})},e58c:function(e,t,s){"use strict";var r=s("fc6a"),a=s("a691"),n=s("50c4"),o=s("a640"),i=s("ae40"),c=Math.min,l=[].lastIndexOf,u=!!l&&1/[1].lastIndexOf(1,-0)<0,d=o("lastIndexOf"),f=i("indexOf",{ACCESSORS:!0,1:0}),b=u||!d||!f;e.exports=b?function(e){if(u)return l.apply(this,arguments)||0;var t=r(this),s=n(t.length),o=s-1;for(arguments.length>1&&(o=c(o,a(arguments[1]))),o<0&&(o=s+o);o>=0;o--)if(o in t&&t[o]===e)return o||0;return-1}:l}}]);
//# sourceMappingURL=chunk-32bff29d.74a4c911.js.map