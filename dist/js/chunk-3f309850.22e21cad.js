(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f309850"],{"03eb":function(t,e,a){},1404:function(t,e,a){"use strict";a("a15b"),a("fb6a"),a("b0c0"),a("ac1f"),a("1276"),a("2ca0"),a("96cf");var r=a("1da1"),i=a("4d8d"),n=a("6dc1"),s=a("ae85");e["a"]={mixins:[s["a"]],created:function(){this.webId=this.$store.state.solid.webId,this.config(this.webId);var t=new Date;this.date=this.formatDate(t)},methods:{sendOfferActivity:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,r,s,o,c,l,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t.activity),a=new Date,r="Activity_"+a.getTime(),s=a.toISOString(),o=t.formatDate(a),c=t.pubPod+o+".ttl",l={},e.prev=7,e.next=10,Object(i["b"])(c);case 10:l=e.sent,e.next=18;break;case 13:return e.prev=13,e.t0=e["catch"](7),e.next=17,Object(i["a"])(c);case 17:l=e.sent;case 18:return u=l.addSubject({identifier:r}),u.addLiteral(n["e"].label,t.activity["gr:name"]),u.addLiteral(n["a"].created,s),u.addRef(n["d"].type,t.activity["gr:hasBusinessFunction"]),u.addRef(n["d"].type,"http://purl.org/goodrelations/v1#Offering"),u.addRef(n["b"].maker,t.webId),u.addRef("https://www.w3.org/ns/activitystreams#actor",t.webId),u.addLiteral("http://purl.org/goodrelations/v1#name",t.activity["gr:name"]),u.addLiteral("http://purl.org/goodrelations/v1#businessEntity",t.activity["gr:businessEntity"]),u.addLiteral("http://purl.org/goodrelations/v1#description",t.activity["gr:description"]),u.addLiteral("https://www.w3.org/ns/activitystreams#summary",t.activity["gr:name"]),u.addRef("https://www.w3.org/ns/activitystreams#object",t.activity.object.url),e.next=32,l.save();case 32:case"end":return e.stop()}}),e,null,[[7,13]])})))()},sendActivity:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,r,s,o,c,l,u,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t.activity),a=new Date,r="Activity_"+a.getTime(),s=a.toISOString(),o=t.formatDate(a),console.log(t.activity.actor.name,t.activity.type,t.activity.summary,o),c=t.pubPod+o+".ttl",l={},e.prev=8,e.next=11,Object(i["b"])(c);case 11:l=e.sent,e.next=19;break;case 14:return e.prev=14,e.t0=e["catch"](8),e.next=18,Object(i["a"])(c);case 18:l=e.sent;case 19:return t.activity.summary.length<1&&(t.activity.summary=[t.activity.actor.name.split("/").slice(2,3)[0],t.localname(t.activity.type),"a",t.activity.object.type,"with name",t.activity.object.name].join(" ")),u=t.activity.object.type.startsWith("http")?t.activity.object.type:"https://www.w3.org/ns/activitystreams#"+t.activity.object.type,d=l.addSubject({identifier:r}),d.addLiteral(n["e"].label,t.activity.object.name),d.addLiteral(n["a"].created,s),d.addRef(n["b"].maker,t.webId),d.addRef("https://www.w3.org/ns/activitystreams#actor",t.webId),d.addRef(n["d"].type,u),d.addLiteral("https://www.w3.org/ns/activitystreams#summary",t.activity.summary),d.addRef("https://www.w3.org/ns/activitystreams#object",t.activity.object.url),void 0!=t.activity.object.inReplyTo&&d.addRef("https://www.w3.org/ns/activitystreams#inReplyTo",t.activity.object.inReplyTo),"https://www.w3.org/ns/activitystreams#Article"!=u?void 0!=t.currentWorkspace?d.addRef(n["d"].type,t.currentWorkspace.path+t.activity.object.type):d.addRef(n["d"].type,t.activity.object.url+"#"+t.activity.object.type):d.addRef(n["d"].type,t.activity.type),e.next=33,l.save();case 33:case"end":return e.stop()}}),e,null,[[8,14]])})))()},send:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,r,s,o,c,l,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t.activity),a=t.pubPod+t.date+".ttl",r=new Date,s="Activity_"+r.getTime(),o=r.toISOString(),c={},e.prev=6,e.next=9,Object(i["b"])(a);case 9:c=e.sent,e.next=17;break;case 12:return e.prev=12,e.t0=e["catch"](6),e.next=16,Object(i["a"])(a);case 16:c=e.sent;case 17:return l=[t.activity.actor.name,t.activity.type,"a",t.activity.object.type,"with name",t.activity.object.name].join(" "),u=c.addSubject({identifier:s}),u.addLiteral(n["e"].label,l),u.addLiteral(n["a"].created,o),u.addRef(n["b"].maker,t.webId),u.addRef("https://www.w3.org/ns/activitystreams#actor",t.webId),u.addRef(n["d"].type,"https://www.w3.org/ns/activitystreams#"+t.activity.type),u.addLiteral("https://www.w3.org/ns/activitystreams#summary",t.activity.summary),u.addRef("https://www.w3.org/ns/activitystreams#object",t.activity.object.url),e.next=28,c.save();case 28:console.log("todo toast when activity saved");case 29:case"end":return e.stop()}}),e,null,[[6,12]])})))()},formatDate:function(t){return[t.getFullYear(),("0"+(t.getMonth()+1)).slice(-2),("0"+t.getDate()).slice(-2)].join("-")},config:function(t){this.config={},this.config.webId=t}},webId:{webId:function(t){this.config(t)}},computed:{webId:{get:function(){return this.$store.state.solid.webId},set:function(){}},activities:{get:function(){return this.$store.state.agora.activities},set:function(){}}},data:function(){return{as:{core:["Object","Link","Activity","IntransitiveActivity","Collection","OrderedCollection","CollectionPage","OrderedCollectionPage"],activity:["Accept","Add","Announce","Arrive","Block","Create","Delete","Dislike","Flag","Follow","Ignore","Invite","Join","Leave","Like","Listen","Move","Offer","Question","Reject","Read","Remove","TentativeReject","TentativeAccept","Travel","Undo","Update","View"],actor:["Application","Group","Organization","Person","Service"],object:["Article","Audio","Document","Event","Image","Note","Page","Place","Profile","Relationship","Tombstone","Video","Mention"]},pubPod:"https://agora.solidcommunity.net/public/popock/inbox/"}}}},"2ca0":function(t,e,a){"use strict";var r=a("23e7"),i=a("06cf").f,n=a("50c4"),s=a("5a34"),o=a("1d80"),c=a("ab13"),l=a("c430"),u="".startsWith,d=Math.min,f=c("startsWith"),p=!l&&!f&&!!function(){var t=i(String.prototype,"startsWith");return t&&!t.writable}();r({target:"String",proto:!0,forced:!p&&!f},{startsWith:function(t){var e=String(o(this));s(t);var a=n(d(arguments.length>1?arguments[1]:void 0,e.length)),r=String(t);return u?u.call(e,r,a):e.slice(a,a+r.length)===r}})},"4de4":function(t,e,a){"use strict";var r=a("23e7"),i=a("b727").filter,n=a("1dde"),s=a("ae40"),o=n("filter"),c=s("filter");r({target:"Array",proto:!0,forced:!o||!c},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"8a7a":function(t,e,a){"use strict";a("4de4"),a("4160"),a("c975"),a("a15b"),a("baa5"),a("fb6a"),a("159b"),a("96cf");var r=a("1da1"),i=a("00e8"),n=a.n(i),s=a("7fed"),o=a.n(s),c=a("4d8d"),l=a("6dc1"),u=new o.a(n.a);e["a"]={methods:{prepareToday:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new Date,t.$store.commit("parle/setDataDate",a),r=[a.getFullYear(),("0"+(a.getMonth()+1)).slice(-2),("0"+a.getDate()).slice(-2)].join("-")+".ttl",i=t.$store.state.parle.root+r,e.next=6,t.create(i);case 6:t.$store.commit("parle/setFileUrl",i);case 7:case"end":return e.stop()}}),e)})))()},create:function(t){return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.itemExists(t);case 2:if(e.sent){e.next=7;break}return e.next=5,u.postFile(t,"","text/turtle").then((function(t){console.log("File Created",t)})).catch((function(t){return console.error("Error: ".concat(t))}));case 5:e.next=8;break;case 7:console.log("File exist",t);case 8:case"end":return e.stop()}}),e)})))()},bascule:function(t){console.log("BASCULE",t),this.$store.commit("parle/setFileUrl",t),this.path=t.substr(0,t.lastIndexOf("/")+1),void 0!=this.$store.state.websocket.socket&&console.log("TODO : subscribe"),this.makeToast("We have switched to",t,"info"),this.getMessages(t)},getMessages:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var r,i,n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return console.log("URI",t),r=[],a.next=4,u.itemExists(t);case 4:if(a.sent){a.next=9;break}return a.next=7,u.postFile(t,"","text/turtle").then((function(t){console.log("File Created",t)})).catch((function(t){return console.error("Error: ".concat(t))}));case 7:a.next=10;break;case 9:console.log("File exist",t);case 10:return void 0!=e.$store.state.websocket.socket&&e.$store.state.websocket.socket.send("sub "+t),a.next=13,Object(c["b"])(t);case 13:i=a.sent,n=i.findSubjects(),n=n.filter(e.onlyUnique),s=[],n.forEach((function(t){var e=t.getString(l["a"].created),a=t.getLiteral(l["g"].content),r=t.getNodeRef(l["b"].maker),i=t.getAllNodeRefs(l["f"].hasPart),n=t.getNodeRef(l["f"].isPartOf),o={id:t.asRef(),created:new Date(e).toLocaleTimeString(),content:a,maker:r,parts:i,parent:n};s.push(o)})),r=s.reverse(),console.log("Messages",r),e.$store.commit("parle/setMessages",r);case 21:case"end":return a.stop()}}),a)})))()},onlyUnique:function(t,e,a){return a.indexOf(t)===e}}}},ae85:function(t,e,a){"use strict";a("baa5"),a("fb6a"),a("bf19");e["a"]={methods:{localname:function(t){var e=t;return void 0!=t&&(e=-1!=t.lastIndexOf("#")?t.substr(t.lastIndexOf("#")).substr(1):t.substr(t.lastIndexOf("/")).substr(1),e=0==e.length?t:e),e},today:function(){var t=new Date;return t.setMinutes(this.getMinutes()-this.getTimezoneOffset()),t.toJSON().slice(0,10)},streamActivity:function(t,e){var a={"@context":"https://www.w3.org/ns/activitystreams",summary:"User fill a form with shighl-vuejs",type:"Add",published:(new Date).toISOString(),actor:{type:"Person",id:t,name:"UserName",url:"same as webid ?",image:{type:"Link",href:"http://example.org/martin/image.jpg",mediaType:"image/jpeg"}},object:{id:"http://www.test.example/blog/abc123/xyz",type:"Document",url:"http://example.org/blog/2011/02/entry",name:"Why I love Activity Streams",content:e},target:{id:"http://example.org/blog/",type:"OrderedCollection",name:"Martin's Blog"}};return a}}}},baa5:function(t,e,a){var r=a("23e7"),i=a("e58c");r({target:"Array",proto:!0,forced:i!==[].lastIndexOf},{lastIndexOf:i})},bf19:function(t,e,a){"use strict";var r=a("23e7");r({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},c975:function(t,e,a){"use strict";var r=a("23e7"),i=a("4d64").indexOf,n=a("a640"),s=a("ae40"),o=[].indexOf,c=!!o&&1/[1].indexOf(1,-0)<0,l=n("indexOf"),u=s("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:c||!l||!u},{indexOf:function(t){return c?o.apply(this,arguments)||0:i(this,t,arguments.length>1?arguments[1]:void 0)}})},e58c:function(t,e,a){"use strict";var r=a("fc6a"),i=a("a691"),n=a("50c4"),s=a("a640"),o=a("ae40"),c=Math.min,l=[].lastIndexOf,u=!!l&&1/[1].lastIndexOf(1,-0)<0,d=s("lastIndexOf"),f=o("indexOf",{ACCESSORS:!0,1:0}),p=u||!d||!f;t.exports=p?function(t){if(u)return l.apply(this,arguments)||0;var e=r(this),a=n(e.length),s=a-1;for(arguments.length>1&&(s=c(s,i(arguments[1]))),s<0&&(s=a+s);s>=0;s--)if(s in e&&e[s]===t)return s||0;return-1}:l},eeb9:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"solid-chat-send"},[null!=t.webId?a("b-input-group",{staticClass:"mt-3 input"},[a("b-form-input",{on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.send(e)}},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),a("b-input-group-append",[a("b-button",{attrs:{variant:"warning"},on:{click:t.send}},[t._v("Send")])],1)],1):a("SolidLoginButton",{staticClass:"mt-3 input"})],1)},i=[],n=(a("baa5"),a("d3b7"),a("96cf"),a("1da1")),s=a("4d8d"),o=a("6dc1"),c=a("fd2a"),l=a("1404"),u=a("8a7a"),d={name:"ParleSend",components:{SolidLoginButton:function(){return a.e("chunk-034e0f2f").then(a.bind(null,"e9a1"))}},mixins:[c["a"],l["a"],u["a"]],data:function(){return{message:""}},created:function(){if(this.fileUrl=this.$store.state.parle.fileUrl,this.root=this.$store.state.parle.root,this.url=this.$store.state.parle.url,void 0!=this.url&&this.url.length>0){var t=this.url.substring(this.url.lastIndexOf("/")+1);console.log(t),this.message="New chat started from "+this.url+" at "+this.root+t,this.$store.commit("parle/setFileUrl",this.root+t),console.log("FILEURL : ",this.root+t),this.bascule(this.root+t)}},methods:{createActivity:function(){this.activity={actor:{name:this.$store.state.solid.webId},type:"Create",summary:"",object:{name:this.message,url:this.fileUrl,type:"Parle"}},this.sendActivity()},send:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,r,i,n,c,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.$store.state.solid.webId,console.log(t.fileUrl),!(t.message.length>0&&null!=a)){e.next=29;break}return console.log(t.message),r=new Date,i="Msg"+r.getTime(),n=r.toISOString(),console.log("WEBID",t.$store.state.solid.webId),c={},e.prev=9,e.next=12,Object(s["b"])(t.fileUrl);case 12:c=e.sent,e.next=20;break;case 15:return e.prev=15,e.t0=e["catch"](9),e.next=19,Object(s["a"])(t.fileUrl);case 19:c=e.sent;case 20:return l=c.addSubject({identifier:i}),l.addLiteral(o["g"].content,t.message),l.addLiteral(o["a"].created,n),l.addNodeRef(o["b"].maker,a),e.next=26,c.save();case 26:t.message="",e.next=30;break;case 29:alert("You must login before posting ;-)");case 30:t.createActivity();case 31:case"end":return e.stop()}}),e,null,[[9,15]])})))()}},watch:{url:function(t){console.log("url changed",t);var e=t.substring(t.lastIndexOf("/")+1);console.log(e),this.$store.commit("parle/setFileUrl",this.path+e),this.bascule(this.path+e)}},computed:{webId:{get:function(){return this.$store.state.solid.webId},set:function(){}},url:{get:function(){return this.$store.state.parle.url},set:function(){}}}},f=d,p=(a("f548"),a("2877")),g=Object(p["a"])(f,r,i,!1,null,"1e4fcb0d",null);e["default"]=g.exports},f548:function(t,e,a){"use strict";a("03eb")},fd2a:function(t,e,a){"use strict";e["a"]={methods:{makeToast:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(e,{title:t,variant:a,solid:!0})}}}}}]);
//# sourceMappingURL=chunk-3f309850.22e21cad.js.map