(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d178c4b"],{"0ef9":function(t,e,a){"use strict";var i=a("5ea0"),n=a.n(i);n.a},1404:function(t,e,a){"use strict";a("a15b"),a("fb6a"),a("b0c0"),a("96cf");var i=a("1da1"),n=a("4d8d"),s=a("6dc1");e["a"]={created:function(){this.webId=this.$store.state.solid.webId,console.log("ActivityMixin WEBID CREATED",this.webId),this.config(this.webId);var t=new Date;this.date=this.formatDate(t),console.log(this.as),console.log(this.date)},methods:{sendActivity:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,i,r,o,c,l,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t.activity),a=new Date,i="Activity_"+a.getTime(),r=a.toISOString(),o=t.formatDate(a),console.log(t.activity.actor.name,t.activity.type,t.activity.summary,o),c=t.pubPod+o+".ttl",l={},e.prev=8,e.next=11,Object(n["b"])(c);case 11:l=e.sent,e.next=19;break;case 14:return e.prev=14,e.t0=e["catch"](8),e.next=18,Object(n["a"])(c);case 18:l=e.sent;case 19:return console.log("webId",t.webId),t.activity.summary.length<1&&(t.activity.summary=[t.activity.actor.name,t.activity.type,"a",t.activity.object.type,"with name",t.activity.object.name].join(" ")),d=l.addSubject({identifier:i}),d.addLiteral(s["e"].label,t.activity.object.name),d.addLiteral(s["a"].created,r),d.addRef(s["b"].maker,t.webId),d.addRef("https://www.w3.org/ns/activitystreams#actor",t.webId),d.addRef(s["d"].type,"https://www.w3.org/ns/activitystreams#"+t.activity.type),d.addLiteral("https://www.w3.org/ns/activitystreams#summary",t.activity.summary),d.addRef("https://www.w3.org/ns/activitystreams#object",t.activity.object.url),e.next=31,l.save();case 31:case"end":return e.stop()}}),e,null,[[8,14]])})))()},send:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,i,r,o,c,l,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t.activity),console.log(t.activity.actor.name,t.activity.type,t.activity.summary,t.date),a=t.pubPod+t.date+".ttl",i=new Date,r="Activity_"+i.getTime(),o=i.toISOString(),c={},e.prev=7,e.next=10,Object(n["b"])(a);case 10:c=e.sent,e.next=18;break;case 13:return e.prev=13,e.t0=e["catch"](7),e.next=17,Object(n["a"])(a);case 17:c=e.sent;case 18:return console.log("webId",t.webId),l=[t.activity.actor.name,t.activity.type,"a",t.activity.object.type,"with name",t.activity.object.name].join(" "),console.log("Musr create outbox object first, then activity !",c,r,o),d=c.addSubject({identifier:r}),d.addLiteral(s["e"].label,l),d.addLiteral(s["a"].created,o),d.addRef(s["b"].maker,t.webId),d.addRef("https://www.w3.org/ns/activitystreams#actor",t.webId),d.addRef(s["d"].type,"https://www.w3.org/ns/activitystreams#"+t.activity.type),d.addLiteral("https://www.w3.org/ns/activitystreams#summary",t.activity.summary),d.addRef("https://www.w3.org/ns/activitystreams#object",t.activity.object.url),e.next=31,c.save();case 31:case"end":return e.stop()}}),e,null,[[7,13]])})))()},formatDate:function(t){return[t.getFullYear(),("0"+(t.getMonth()+1)).slice(-2),("0"+t.getDate()).slice(-2)].join("-")},postActivity:function(){},config:function(t){this.config={},this.config.webId=t,console.log("ActivityMixin config",this.config)}},webId:{webId:function(t){this.config(t)}},computed:{webId:{get:function(){return this.$store.state.solid.webId},set:function(){}},activities:{get:function(){return this.$store.state.agora.activities},set:function(){}}},data:function(){return{as:{core:["Object","Link","Activity","IntransitiveActivity","Collection","OrderedCollection","CollectionPage","OrderedCollectionPage"],activity:["Accept","Add","Announce","Arrive","Block","Create","Delete","Dislike","Flag","Follow","Ignore","Invite","Join","Leave","Like","Listen","Move","Offer","Question","Reject","Read","Remove","TentativeReject","TentativeAccept","Travel","Undo","Update","View"],actor:["Application","Group","Organization","Person","Service"],object:["Article","Audio","Document","Event","Image","Note","Page","Place","Profile","Relationship","Tombstone","Video","Mention"]},pubPod:"https://agora.solid.community/public/popock/inbox/"}}}},"5ea0":function(t,e,a){},baa5:function(t,e,a){var i=a("23e7"),n=a("e58c");i({target:"Array",proto:!0,forced:n!==[].lastIndexOf},{lastIndexOf:n})},e58c:function(t,e,a){"use strict";var i=a("fc6a"),n=a("a691"),s=a("50c4"),r=a("a640"),o=a("ae40"),c=Math.min,l=[].lastIndexOf,d=!!l&&1/[1].lastIndexOf(1,-0)<0,u=r("lastIndexOf"),f=o("indexOf",{ACCESSORS:!0,1:0}),v=d||!u||!f;t.exports=v?function(t){if(d)return l.apply(this,arguments)||0;var e=i(this),a=s(e.length),r=a-1;for(arguments.length>1&&(r=c(r,n(arguments[1]))),r<0&&(r=a+r);r>=0;r--)if(r in e&&e[r]===t)return r||0;return-1}:l},eeb9:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"solid-chat-send"},[null!=t.webId?a("b-input-group",{staticClass:"mt-3 input"},[a("b-form-input",{on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.send(e)}},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),a("b-input-group-append",[a("b-button",{attrs:{variant:"warning"},on:{click:t.send}},[t._v("Send")])],1)],1):a("SolidLoginButton",{staticClass:"mt-3 input"})],1)},n=[],s=(a("baa5"),a("d3b7"),a("96cf"),a("1da1")),r=a("4d8d"),o=a("6dc1"),c=a("fd2a"),l=a("1404"),d={name:"ParleSend",components:{SolidLoginButton:function(){return a.e("chunk-034e0f2f").then(a.bind(null,"e9a1"))}},mixins:[c["a"],l["a"]],data:function(){return{message:""}},created:function(){if(this.fileUrl=this.$store.state.parle.fileUrl,this.root=this.$store.state.parle.root,this.url=this.$store.state.parle.url,void 0!=this.url&&this.url.length>0){var t=this.url.substring(this.url.lastIndexOf("/")+1);console.log(t),this.message="New chat started from "+this.url+" at "+this.root+t,this.send()}},methods:{createActivity:function(){this.activity={actor:{name:this.$store.state.solid.webId},type:"Create",summary:"",object:{name:this.message,url:this.fileUrl,type:"Parle"}},this.sendActivity()},send:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,i,n,s,c,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.$store.state.solid.webId,console.log(t.fileUrl),!(t.message.length>0&&null!=a)){e.next=29;break}return console.log(t.message),i=new Date,n="Msg"+i.getTime(),s=i.toISOString(),console.log("WEBID",t.$store.state.solid.webId,t.$store.state.count),c={},e.prev=9,e.next=12,Object(r["b"])(t.fileUrl);case 12:c=e.sent,e.next=20;break;case 15:return e.prev=15,e.t0=e["catch"](9),e.next=19,Object(r["a"])(t.fileUrl);case 19:c=e.sent;case 20:return l=c.addSubject({identifier:n}),l.addLiteral(o["g"].content,t.message),l.addLiteral(o["a"].created,s),l.addNodeRef(o["b"].maker,a),e.next=26,c.save();case 26:t.message="",e.next=30;break;case 29:alert("You must login before posting ;-)");case 30:t.createActivity();case 31:case"end":return e.stop()}}),e,null,[[9,15]])})))()}},watch:{url:function(t){console.log("url changed",t);var e=t.substring(t.lastIndexOf("/")+1);console.log(e),this.$store.commit("parle/setFileUrl",this.path+e),this.bascule(this.path+e)}},computed:{webId:function(){return this.$store.state.solid.webId},url:{get:function(){return this.$store.state.parle.url},set:function(){}}}},u=d,f=(a("0ef9"),a("2877")),v=Object(f["a"])(u,i,n,!1,null,"4cf276bb",null);e["default"]=v.exports},fd2a:function(t,e,a){"use strict";e["a"]={methods:{makeToast:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(e,{title:t,variant:a,solid:!0})}}}}}]);
//# sourceMappingURL=chunk-3d178c4b.78b50116.js.map