(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56270ebc"],{1404:function(t,e,a){"use strict";a("a15b"),a("fb6a"),a("b0c0"),a("ac1f"),a("1276"),a("2ca0"),a("96cf");var i=a("1da1"),r=a("4d8d"),n=a("6dc1"),o=a("ae85");e["a"]={mixins:[o["a"]],created:function(){this.webId=this.$store.state.solid.webId,this.config(this.webId);var t=new Date;this.date=this.formatDate(t)},methods:{sendActivity:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,i,o,s,c,l,d,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t.activity),a=new Date,i="Activity_"+a.getTime(),o=a.toISOString(),s=t.formatDate(a),console.log(t.activity.actor.name,t.activity.type,t.activity.summary,s),c=t.pubPod+s+".ttl",l={},e.prev=8,e.next=11,Object(r["b"])(c);case 11:l=e.sent,e.next=19;break;case 14:return e.prev=14,e.t0=e["catch"](8),e.next=18,Object(r["a"])(c);case 18:l=e.sent;case 19:return t.activity.summary.length<1&&(t.activity.summary=[t.activity.actor.name.split("/").slice(2,3)[0],t.localname(t.activity.type),"a",t.activity.object.type,"with name",t.activity.object.name].join(" ")),d=t.activity.object.type.startsWith("http")?t.activity.object.type:"https://www.w3.org/ns/activitystreams#"+t.activity.object.type,u=l.addSubject({identifier:i}),u.addLiteral(n["e"].label,t.activity.object.name),u.addLiteral(n["a"].created,o),u.addRef(n["b"].maker,t.webId),u.addRef("https://www.w3.org/ns/activitystreams#actor",t.webId),u.addRef(n["d"].type,d),u.addLiteral("https://www.w3.org/ns/activitystreams#summary",t.activity.summary),u.addRef("https://www.w3.org/ns/activitystreams#object",t.activity.object.url),void 0!=t.activity.object.inReplyTo&&u.addRef("https://www.w3.org/ns/activitystreams#inReplyTo",t.activity.object.inReplyTo),"https://www.w3.org/ns/activitystreams#Article"!=d?void 0!=t.currentWorkspace?u.addRef(n["d"].type,t.currentWorkspace.path+t.activity.object.type):u.addRef(n["d"].type,t.activity.object.url+"#"+t.activity.object.type):u.addRef(n["d"].type,t.activity.type),e.next=33,l.save();case 33:case"end":return e.stop()}}),e,null,[[8,14]])})))()},send:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,i,o,s,c,l,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t.activity),a=t.pubPod+t.date+".ttl",i=new Date,o="Activity_"+i.getTime(),s=i.toISOString(),c={},e.prev=6,e.next=9,Object(r["b"])(a);case 9:c=e.sent,e.next=17;break;case 12:return e.prev=12,e.t0=e["catch"](6),e.next=16,Object(r["a"])(a);case 16:c=e.sent;case 17:return l=[t.activity.actor.name,t.activity.type,"a",t.activity.object.type,"with name",t.activity.object.name].join(" "),d=c.addSubject({identifier:o}),d.addLiteral(n["e"].label,l),d.addLiteral(n["a"].created,s),d.addRef(n["b"].maker,t.webId),d.addRef("https://www.w3.org/ns/activitystreams#actor",t.webId),d.addRef(n["d"].type,"https://www.w3.org/ns/activitystreams#"+t.activity.type),d.addLiteral("https://www.w3.org/ns/activitystreams#summary",t.activity.summary),d.addRef("https://www.w3.org/ns/activitystreams#object",t.activity.object.url),e.next=28,c.save();case 28:console.log("todo toast when activity saved");case 29:case"end":return e.stop()}}),e,null,[[6,12]])})))()},formatDate:function(t){return[t.getFullYear(),("0"+(t.getMonth()+1)).slice(-2),("0"+t.getDate()).slice(-2)].join("-")},config:function(t){this.config={},this.config.webId=t}},webId:{webId:function(t){this.config(t)}},computed:{webId:{get:function(){return this.$store.state.solid.webId},set:function(){}},activities:{get:function(){return this.$store.state.agora.activities},set:function(){}}},data:function(){return{as:{core:["Object","Link","Activity","IntransitiveActivity","Collection","OrderedCollection","CollectionPage","OrderedCollectionPage"],activity:["Accept","Add","Announce","Arrive","Block","Create","Delete","Dislike","Flag","Follow","Ignore","Invite","Join","Leave","Like","Listen","Move","Offer","Question","Reject","Read","Remove","TentativeReject","TentativeAccept","Travel","Undo","Update","View"],actor:["Application","Group","Organization","Person","Service"],object:["Article","Audio","Document","Event","Image","Note","Page","Place","Profile","Relationship","Tombstone","Video","Mention"]},pubPod:"https://agora.solidcommunity.net/public/popock/inbox/"}}}},"2ca0":function(t,e,a){"use strict";var i=a("23e7"),r=a("06cf").f,n=a("50c4"),o=a("5a34"),s=a("1d80"),c=a("ab13"),l=a("c430"),d="".startsWith,u=Math.min,p=c("startsWith"),v=!l&&!p&&!!function(){var t=r(String.prototype,"startsWith");return t&&!t.writable}();i({target:"String",proto:!0,forced:!v&&!p},{startsWith:function(t){var e=String(s(this));o(t);var a=n(u(arguments.length>1?arguments[1]:void 0,e.length)),i=String(t);return d?d.call(e,i,a):e.slice(a,a+i.length)===i}})},ae85:function(t,e,a){"use strict";a("baa5"),a("fb6a"),a("bf19");e["a"]={methods:{localname:function(t){var e=t;return void 0!=t&&(e=-1!=t.lastIndexOf("#")?t.substr(t.lastIndexOf("#")).substr(1):t.substr(t.lastIndexOf("/")).substr(1),e=0==e.length?t:e),e},today:function(){var t=new Date;return t.setMinutes(this.getMinutes()-this.getTimezoneOffset()),t.toJSON().slice(0,10)},streamActivity:function(t,e){var a={"@context":"https://www.w3.org/ns/activitystreams",summary:"User fill a form with shighl-vuejs",type:"Add",published:(new Date).toISOString(),actor:{type:"Person",id:t,name:"UserName",url:"same as webid ?",image:{type:"Link",href:"http://example.org/martin/image.jpg",mediaType:"image/jpeg"}},object:{id:"http://www.test.example/blog/abc123/xyz",type:"Document",url:"http://example.org/blog/2011/02/entry",name:"Why I love Activity Streams",content:e},target:{id:"http://example.org/blog/",type:"OrderedCollection",name:"Martin's Blog"}};return a}}}},b280:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"post-send container"},[a("h5",[t._v("PostSend")]),void 0!=t.url?a("div",[a("b-input-group",{staticClass:"mt-3",attrs:{prepend:"Linked to"}},[a("b-form-input",{model:{value:t.url,callback:function(e){t.url=e},expression:"url"}})],1)],1):t._e(),"post"==t.selected||"dokieli"==t.selected?a("div",[a("b-input-group",{staticClass:"mt-3",attrs:{prepend:"Title"}},[a("b-form-input",{model:{value:t.post.title,callback:function(e){t.$set(t.post,"title",e)},expression:"post.title"}})],1),a("b-form-textarea",{attrs:{id:"textarea",placeholder:"Enter something...",rows:"3","max-rows":"6"},model:{value:t.post.text,callback:function(e){t.$set(t.post,"text",e)},expression:"post.text"}}),a("b-button",{staticClass:"mt-3",attrs:{variant:"outline-info"},on:{click:t.send}},[t._v("Send")])],1):a("div",[t._v(" Todo ")]),a("hr"),a("b-form-group",{attrs:{label:"Expert test"}},[a("b-form-radio-group",{attrs:{id:"radio-group-2",name:"radio-sub-component"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[a("b-form-radio",{attrs:{value:"post"}},[t._v("Post")]),a("b-form-radio",{attrs:{value:"dokieli"}},[t._v("Dokieli")]),a("b-form-radio",{attrs:{value:"text"}},[t._v("Text")]),a("b-form-radio",{attrs:{value:"ttl"}},[t._v("Triple Turtle")]),a("b-form-radio",{attrs:{value:"network"}},[t._v("Network")]),a("b-form-radio",{attrs:{value:"html",disabled:""}},[t._v("Html")])],1)],1),a("div",{staticClass:"mt-3"},[t._v("Selected: "),a("strong",[t._v(t._s(t.selected))])]),a("div",[t._v("Folder : "+t._s(t.folder.url))]),a("Explorer")],1)},r=[],n=(a("a15b"),a("fb6a"),a("b0c0"),a("d3b7"),a("96cf"),a("1da1")),o=a("1404"),s=a("4d8d"),c=a("6dc1"),l={name:"PostSend",mixins:[o["a"]],components:{Explorer:function(){return a.e("chunk-80346e08").then(a.bind(null,"c717"))}},props:["value"],data:function(){return{post:{},selected:"post",url:""}},created:function(){this.storage=this.$store.state.solid.storage,this.webId=this.$store.state.solid.webId,this.url=this.$route.params.url,void 0==this.url&&(this.url=this.$route.query.url+this.$route.hash)},watch:{storage:function(t){this.folder=t+"public/blog/",console.log("folder",this.folder)},selected:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:e.t0=t.selected,e.next="text"===e.t0||"ttl"===e.t0||"network"===e.t0?3:"dokieli"===e.t0?5:7;break;case 3:return t.$router.push({path:"/editor"}),e.abrupt("break",7);case 5:return window.open("https://scenaristeur.github.io/solid-vue-panes/dokieli/dokieli.html","_blank"),e.abrupt("break",7);case 7:case"end":return e.stop()}}),e)})))()},$route:function(t){this.url=t.params.url||t.query.url,console.log(this.url)}},methods:{send:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,i,r,n,o,l,d,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new Date,i=a.toISOString(),r=[a.getFullYear(),("0"+(a.getMonth()+1)).slice(-2),("0"+a.getDate()).slice(-2)].join("-"),n=t.folder.url!=t.storage?t.folder.url:t.storage+"public/blog/",o=n+r+".ttl",console.log(t.post),console.log(t.path),console.log(t.fileUrl),l={},e.prev=9,e.next=12,Object(s["b"])(o);case 12:l=e.sent,e.next=20;break;case 15:return e.prev=15,e.t0=e["catch"](9),e.next=19,Object(s["a"])(o);case 19:l=e.sent;case 20:return d="Article_"+a.getTime(),u=l.addSubject({identifier:d}),u.addLiteral(c["e"].label,t.post.title),u.addLiteral(c["a"].created,i),u.addRef(c["b"].maker,t.webId),u.addRef(c["d"].type,"https://www.w3.org/ns/activitystreams#Article"),u.addLiteral(c["g"].content,t.post.text),void 0!=t.url&&"undefined"!=t.url&&u.addRef("https://www.w3.org/ns/activitystreams#inReplyTo",t.url),e.prev=28,e.next=31,l.save();case 31:t.activity={actor:{},object:{},summary:""},t.activity.actor.name=t.webId,t.activity.type="https://www.w3.org/ns/activitystreams#Create",t.activity.object.name=t.post.title,t.activity.object.type="Article",t.activity.object.url=o+"#"+d,t.activity.object.inReplyTo=t.url,t.sendActivity(),e.next=44;break;case 41:e.prev=41,e.t1=e["catch"](28),alert(e.t1);case 44:t.post={};case 45:case"end":return e.stop()}}),e,null,[[9,15],[28,41]])})))()}},computed:{storage:{get:function(){return this.$store.state.solid.storage},set:function(){}},webId:{get:function(){return this.$store.state.solid.webId},set:function(){}},folder:{get:function(){return this.$store.state.solid.folder},set:function(){}}}},d=l,u=a("2877"),p=Object(u["a"])(d,i,r,!1,null,null,null);e["default"]=p.exports},baa5:function(t,e,a){var i=a("23e7"),r=a("e58c");i({target:"Array",proto:!0,forced:r!==[].lastIndexOf},{lastIndexOf:r})},bf19:function(t,e,a){"use strict";var i=a("23e7");i({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},e58c:function(t,e,a){"use strict";var i=a("fc6a"),r=a("a691"),n=a("50c4"),o=a("a640"),s=a("ae40"),c=Math.min,l=[].lastIndexOf,d=!!l&&1/[1].lastIndexOf(1,-0)<0,u=o("lastIndexOf"),p=s("indexOf",{ACCESSORS:!0,1:0}),v=d||!u||!p;t.exports=v?function(t){if(d)return l.apply(this,arguments)||0;var e=i(this),a=n(e.length),o=a-1;for(arguments.length>1&&(o=c(o,r(arguments[1]))),o<0&&(o=a+o);o>=0;o--)if(o in e&&e[o]===t)return o||0;return-1}:l}}]);
//# sourceMappingURL=chunk-56270ebc.0b6fb07d.js.map