(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tensions-list"],{1404:function(e,t,a){"use strict";a("a15b"),a("fb6a"),a("b0c0"),a("96cf");var r=a("1da1"),n=a("4d8d"),i=a("6dc1");t["a"]={created:function(){this.webId=this.$store.state.solid.webId,this.config(this.webId);var e=new Date;this.date=this.formatDate(e)},methods:{sendActivity:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,r,o,s,c,u,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e.activity),a=new Date,r="Activity_"+a.getTime(),o=a.toISOString(),s=e.formatDate(a),console.log(e.activity.actor.name,e.activity.type,e.activity.summary,s),c=e.pubPod+s+".ttl",u={},t.prev=8,t.next=11,Object(n["b"])(c);case 11:u=t.sent,t.next=19;break;case 14:return t.prev=14,t.t0=t["catch"](8),t.next=18,Object(n["a"])(c);case 18:u=t.sent;case 19:return console.log("webId",e.webId),e.activity.summary.length<1&&(e.activity.summary=[e.activity.actor.name,e.activity.type,"a",e.activity.object.type,"with name",e.activity.object.name].join(" ")),l=u.addSubject({identifier:r}),l.addLiteral(i["e"].label,e.activity.object.name),l.addLiteral(i["a"].created,o),l.addRef(i["b"].maker,e.webId),l.addRef("https://www.w3.org/ns/activitystreams#actor",e.webId),l.addRef(i["d"].type,"https://www.w3.org/ns/activitystreams#"+e.activity.type),l.addLiteral("https://www.w3.org/ns/activitystreams#summary",e.activity.summary),l.addRef("https://www.w3.org/ns/activitystreams#object",e.activity.object.url),void 0!=e.currentWorkspace?l.addRef(i["d"].type,e.currentWorkspace.path+e.activity.object.type):l.addRef(i["d"].type,e.activity.object.url+"#"+e.activity.object.type),t.next=32,u.save();case 32:case"end":return t.stop()}}),t,null,[[8,14]])})))()},send:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,r,o,s,c,u,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e.activity),a=e.pubPod+e.date+".ttl",r=new Date,o="Activity_"+r.getTime(),s=r.toISOString(),c={},t.prev=6,t.next=9,Object(n["b"])(a);case 9:c=t.sent,t.next=17;break;case 12:return t.prev=12,t.t0=t["catch"](6),t.next=16,Object(n["a"])(a);case 16:c=t.sent;case 17:return u=[e.activity.actor.name,e.activity.type,"a",e.activity.object.type,"with name",e.activity.object.name].join(" "),l=c.addSubject({identifier:o}),l.addLiteral(i["e"].label,u),l.addLiteral(i["a"].created,s),l.addRef(i["b"].maker,e.webId),l.addRef("https://www.w3.org/ns/activitystreams#actor",e.webId),l.addRef(i["d"].type,"https://www.w3.org/ns/activitystreams#"+e.activity.type),l.addLiteral("https://www.w3.org/ns/activitystreams#summary",e.activity.summary),l.addRef("https://www.w3.org/ns/activitystreams#object",e.activity.object.url),t.next=28,c.save();case 28:case"end":return t.stop()}}),t,null,[[6,12]])})))()},formatDate:function(e){return[e.getFullYear(),("0"+(e.getMonth()+1)).slice(-2),("0"+e.getDate()).slice(-2)].join("-")},postActivity:function(){},config:function(e){this.config={},this.config.webId=e}},webId:{webId:function(e){this.config(e)}},computed:{webId:{get:function(){return this.$store.state.solid.webId},set:function(){}},activities:{get:function(){return this.$store.state.agora.activities},set:function(){}}},data:function(){return{as:{core:["Object","Link","Activity","IntransitiveActivity","Collection","OrderedCollection","CollectionPage","OrderedCollectionPage"],activity:["Accept","Add","Announce","Arrive","Block","Create","Delete","Dislike","Flag","Follow","Ignore","Invite","Join","Leave","Like","Listen","Move","Offer","Question","Reject","Read","Remove","TentativeReject","TentativeAccept","Travel","Undo","Update","View"],actor:["Application","Group","Organization","Person","Service"],object:["Article","Audio","Document","Event","Image","Note","Page","Place","Profile","Relationship","Tombstone","Video","Mention"]},pubPod:"https://agora.solidcommunity.net/public/popock/inbox/"}}}},"18cc":function(e,t,a){"use strict";a("96cf");var r=a("1da1"),n=a("fd2a"),i=(a("4160"),a("ac1f"),a("5319"),a("1276"),a("498a"),a("159b"),a("1404")),o=a("4d8d"),s=a("6dc1"),c=a("00e8"),u=a.n(c),l=a("7fed"),d=a.n(l),p=new d.a(u.a),m={mixins:[n["a"],i["a"]],data:function(){return{}},methods:{createFile:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var r,n,i,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.label=e.label.trim(),e.ttl_name=e.label.replace(/\s/g,"_"),t.activity={actor:{name:t.$store.state.solid.webId},type:"Create",summary:"",object:{name:e.label,url:"",type:"Tension"}},a.prev=3,r={},void 0!=e.url){a.next=13;break}return e.url=e.path+e.ttl_name+".ttl",a.next=9,Object(o["a"])(e.url);case 9:r=a.sent,t.activity.type="Create",a.next=17;break;case 13:return a.next=15,Object(o["b"])(e.url);case 15:r=a.sent,t.activity.type="Update";case 17:return n=r.addSubject({identifier:"this"}),i=new Date,c=i.toISOString(),void 0!=e.created?(e.modified=c,n.addLiteral(s["a"].modified,c),n.removeAll(s["e"].label),n.removeAll(s["c"].inbox),n.removeAll("https://holacratie.solidcommunity.net/public/holacratie#whatis",e.wi),n.removeAll("https://holacratie.solidcommunity.net/public/holacratie#whatshouldbe",e.wsb),n.removeAll(s["d"].type),n.removeAll("http://www.w3.org/ns/org#memberOf"),n.removeAll("http://www.w3.org/ns/org#purpose")):(e.created=c,n.addLiteral(s["a"].created,c)),n.addLiteral(s["e"].label,e.label),n.addRef(s["c"].inbox,"./"+e.ttl_name+"/inbox/"),n.addLiteral("https://holacratie.solidcommunity.net/public/holacratie#whatis",e.wi),n.addLiteral("https://holacratie.solidcommunity.net/public/holacratie#whatshouldbe",e.wsb),n.addRef(s["b"].maker,t.$store.state.solid.webId),e.types.forEach((function(e){n.addRef(s["d"].type,e)})),void 0!=e.roles&&(e.roles.split(",").forEach((function(e){n.addLiteral("http://www.w3.org/ns/org#memberOf",e.trim())})),console.log("TODO: must look at existing groups & existing frineds groups & activity published groups")),void 0!=e.domains&&(e.domains.split(",").forEach((function(e){n.addLiteral("http://www.w3.org/ns/org#purpose",e.trim())})),console.log("TODO: must look at https://www.wikidata.org/w/api.php?action=wbsearchentities&language=fr&format=json&search=Ecology")),a.next=31,r.save();case 31:t.makeToast("Created "+e.label,"ok","success"),a.next=38;break;case 34:a.prev=34,a.t0=a["catch"](3),t.makeToast("Error creating "+e.label,a.t0,"danger"),console.log(a.t0);case 38:return"public"==e.privacy&&(t.activity.object.url=e.url,t.sendActivity(),t.makeToast("TODO : must Activity publish",e.label,"success")),a.abrupt("return",e);case 40:case"end":return a.stop()}}),a,null,[[3,34]])})))()},getFolder:function(e){return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p.readFolder(e);case 2:return a=t.sent,t.abrupt("return",a);case 4:case"end":return t.stop()}}),t)})))()}}};t["a"]={mixins:[n["a"],m],data:function(){return{}},methods:{createTension:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.tension.displayType="Tension",console.log("TODO use http://purl.org/vocab/lifecycle/schema#Task"),e.tension.types=["http://purl.org/vocab/lifecycle/schema#Task","http://www.w3.org/ns/ldp#Resource"],e.tension.path=e.path,console.log(e.tension,e.path),t.prev=5,t.next=8,e.createFile(e.tension);case 8:a=t.sent,console.log("Result",a),e.tension={privacy:"public"},e.makeToast("success !",e.tension.label+" created !","success"),e.$router.push({name:"Tensions",params:{url:a.url}}),t.next=18;break;case 15:t.prev=15,t.t0=t["catch"](5),e.makeToast("Error !",t.t0,"danger");case 18:case"end":return t.stop()}}),t,null,[[5,15]])})))()},getTensions:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("GET TENSIONS",e.path),t.next=3,e.getFolder(e.path);case 3:return a=t.sent,console.log(a),t.abrupt("return",a.files);case 6:case"end":return t.stop()}}),t)})))()},getTensionDetail:function(e){return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(o["b"])(e.url);case 2:return a=t.sent,r=a.getSubject(e.url+"#this"),n=e,n.created=r.getLiteral(s["a"].created),n.label=r.getLiteral(s["e"].label),n.inbox=r.getRef(s["c"].inbox),n.wi=r.getLiteral("https://holacratie.solidcommunity.net/public/holacratie#whatis"),n.wsb=r.getLiteral("https://holacratie.solidcommunity.net/public/holacratie#whatshouldbe"),n.maker=r.getRef(s["b"].maker),n.types=r.getAllRefs(s["d"].type),n.roles=r.getAllLiterals("http://www.w3.org/ns/org#memberOf"),n.domains=r.getAllLiterals("http://www.w3.org/ns/org#purpose"),n.actors=r.getAllRefs("https://www.w3.org/ns/activitystreams#actor"),t.abrupt("return",n);case 16:case"end":return t.stop()}}),t)})))()}}}},c6e4:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modele-view container"},["gouvernance"==e.currentWorkspace.name?a("div",[a("b-list-group",e._l(e.tensions,(function(e){return a("b-list-group-item",{key:e.url},[a("TensionItem",{attrs:{tension:e}})],1)})),1),e._v(" path : "+e._s(e.path)+" ")],1):a("div",[e._v(' To use this part of Popock, you need to choose a workspace with name "gouvernance".'),a("br"),a("b-button",{attrs:{size:"sm",to:"/workspaces",variant:"outline-warning"}},[void 0!=e.currentWorkspace.name?a("span",[e._v(e._s(e.currentWorkspace.name))]):a("span",[e._v("Workspaces ")])])],1)])},n=[],i=(a("b0c0"),a("d3b7"),a("96cf"),a("1da1")),o=a("18cc"),s={name:"TensionsList",mixins:[o["a"]],components:{TensionItem:function(){return a.e("chunk-2d0ab878").then(a.bind(null,"1652"))}},data:function(){return{path:"",tensions:[]}},created:function(){this.currentWorkspace=this.$store.state.workspaces.currentWorkspace,this.update()},methods:{update:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(void 0==e.currentWorkspace.path||"gouvernance"!=e.currentWorkspace.name){t.next=7;break}return console.log(e.currentWorkspace),e.path=e.currentWorkspace.path+"tensions/",t.next=5,e.getTensions();case 5:e.tensions=t.sent,console.log(e.tensions);case 7:case"end":return t.stop()}}),t)})))()}},watch:{currentWorkspace:function(){this.update()}},computed:{currentWorkspace:{get:function(){return this.$store.state.workspaces.currentWorkspace},set:function(){}}}},c=s,u=a("2877"),l=Object(u["a"])(c,r,n,!1,null,null,null);t["default"]=l.exports},fd2a:function(e,t,a){"use strict";t["a"]={methods:{makeToast:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(t,{title:e,variant:a,solid:!0})}}}}}]);
//# sourceMappingURL=tensions-list.b4f5f658.js.map