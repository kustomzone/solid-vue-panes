(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-acc8c602"],{"0a49":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"group-display"},[r("div",[r("b-card",{staticClass:"mb-1",attrs:{"no-body":""}},[r("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"accordion-"+e.ttlName,expression:"'accordion-'+ttlName"}],attrs:{block:"",variant:"info"}},[e._v(e._s(e.group.name||e.file.name))])],1),r("b-collapse",{attrs:{id:"accordion-"+e.ttlName,accordion:"my-accordion",role:"tabpanel"}},[r("b-card-body",[r("b-card-text",[r("cite",{attrs:{title:"Purpose"}},[e._v(e._s(e.group.purpose))]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-6"},[r("GroupChat",{attrs:{instance:e.group.chat_instance}})],1),r("div",{staticClass:"col-sm-6"},[r("GroupTensions")],1)]),r("div",{staticClass:"row"},[r("GroupParle")],1),r("hr"),r("GroupMembers",{attrs:{url:e.file.url,members:e.group.members}}),r("b-button",{attrs:{variant:"outline-info"},on:{click:function(t){return e.open("modal-members-"+e.file.url)}}},[e._v(e._s(e.group.members.length)+" Members")]),r("b-button",{attrs:{to:{name:"Groups",params:{url:e.file.parent+e.ttlName}},disabled:0==e.group.subgroups.length,variant:"outline-info"}},[e._v(e._s(e.group.subgroups.length)+" subgroups")]),r("div",[r("b-button-group",[r("b-dropdown",{attrs:{variant:"outline-info",right:"",split:"",text:"menu"}},[r("b-dropdown-item",{on:{click:function(t){return e.open("modal-subgroups-"+e.file.url)}}},[e._v("New subgroup")])],1),r("b-button",{on:{click:e.join}},[e._v("Join/Invite")])],1)],1),r("b-card-footer",[r("small",[r("a",{attrs:{href:e.file.url,target:"_blank"}},[e._v(e._s(e.file.url))])])])],1)],1)],1)],1),r("b-modal",{attrs:{id:"modal-subgroups-"+e.file.url,title:"SubGroups"},on:{ok:e.add}},[r("b-form-group",[r("label",{attrs:{for:"name"}},[e._v("Group Name")]),r("b-form-input",{attrs:{id:"name",placeholder:"ex: "+e.name},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),r("label",{attrs:{for:"purpose"}},[e._v("Group Purpose")]),r("b-form-input",{attrs:{id:"purpose",placeholder:"ex: Build Solid Cool apps..."},model:{value:e.purpose,callback:function(t){e.purpose=t},expression:"purpose"}}),r("label",{attrs:{for:"parent"}},[e._v("Parent / Supercircle")]),r("b-form-input",{attrs:{id:"parent",placeholder:"ex: Supercircle"},model:{value:e.parent,callback:function(t){e.parent=t},expression:"parent"}}),r("label",{attrs:{for:"url"}},[e._v("Group location")]),r("b-form-input",{attrs:{id:"url",placeholder:"ex: "+e.url},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}})],1)],1)],1)])},a=[],o=(r("b0c0"),r("d3b7"),r("ac1f"),r("5319"),r("498a"),r("96cf"),r("1da1")),s=r("b335"),i=r("fd2a"),u=r("4d8d"),l=r("6dc1"),c={name:"GroupDisplay",mixins:[s["a"],i["a"]],components:{GroupMembers:function(){return r.e("chunk-2d2176ea").then(r.bind(null,"c766"))},GroupChat:function(){return r.e("chunk-6285736c").then(r.bind(null,"3b85"))},GroupTensions:function(){return r.e("chunk-8bc3edfa").then(r.bind(null,"c5d0"))},GroupParle:function(){return r.e("chunk-4b2d921b").then(r.bind(null,"fb2e"))}},props:["file"],data:function(){return{group:{members:[],subgroups:[]},name:"",purpose:"",ttlName:""}},created:function(){this.init()},watch:{storage:function(e){console.log(e)}},methods:{join:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("join"),e.open("modal-members-"+e.file.url);case 2:case"end":return t.stop()}}),t)})))()},add:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o,s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.name=e.name.trim().replace(/\s/g,"_"),console.log(e.name,e.url),r=new Date,n=r.toISOString(),e.path=e.url+e.name+".ttl",t.next=7,Object(u["a"])(e.path);case 7:return a=t.sent,o=a.addSubject({identifier:"this"}),o.addLiteral(l["i"].fn,e.name),o.addRef(l["c"].inbox,"./"+e.name+"/inbox/"),o.addLiteral(l["a"].created,n),o.addRef(l["b"].maker,e.webId),o.addRef(l["i"].hasMember,e.webId),o.addRef(l["i"].hasMember,"https://spoggy-test4.solid.community/profile/card#me"),o.addRef(l["i"].hasMember,"https://spoggy-test5.solid.community/profile/card#me"),o.addRef(l["i"].hasMember,"https://spoggy.solid.community/profile/card#me"),o.addLiteral("http://www.w3.org/ns/org#purpose",e.purpose),o.addRef("http://www.w3.org/ns/org#subOrganizationOf",e.parent),t.next=21,Object(u["b"])(e.parent);case 21:return s=t.sent,i=s.getSubject(e.parent+"#this"),i.addNodeRef("http://www.w3.org/ns/org#hasSubOrganization",e.path),t.prev=24,t.next=27,a.save();case 27:return t.next=29,s.save();case 29:e.makeToast("Group created",e.path,"success"),e.makeToast("Parent updated",e.parent,"success"),e.$emit("created"),e.init(),t.next=38;break;case 35:t.prev=35,t.t0=t["catch"](24),alert(t.t0);case 38:case"end":return t.stop()}}),t,null,[[24,35]])})))()},init:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getGroup(e.file.url);case 2:e.group=t.sent,void 0!=e.group.name&&(e.ttlName=e.group.name.replace(/\s/g,"_"));case 4:case"end":return t.stop()}}),t)})))()},open:function(e){this.$bvModal.show(e)}},computed:{webId:function(){return this.$store.state.solid.webId},storage:function(){return this.$store.state.solid.storage},url:function(){return void 0!=this.group.name?this.file.parent+this.group.name.replace(/\s/g,"_")+"/":""},parent:function(){return this.file.url}}},p=c,d=(r("fe3f"),r("2877")),m=Object(d["a"])(p,n,a,!1,null,null,null);t["default"]=m.exports},b335:function(e,t,r){"use strict";r("b0c0"),r("96cf");var n=r("1da1"),a=r("4d8d"),o=r("6dc1");t["a"]={methods:{getGroup:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,n,s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={members:[],subgroups:[]},t.next=3,Object(a["b"])(e);case 3:return n=t.sent,s=n.findSubject(),r.name=s.getLiteral(o["i"].fn),r.members=s.getAllRefs(o["i"].hasMember),r.purpose=s.getLiteral("http://www.w3.org/ns/org#purpose"),r.parent=s.getRef("http://www.w3.org/ns/org#subOrganizationOf"),r.subgroups=s.getAllRefs("http://www.w3.org/ns/org#hasSubOrganization"),i=n.findSubject("http://www.w3.org/ns/solid/terms#forClass","http://www.w3.org/ns/pim/meeting#LongChat"),null!=i&&(r.chat_instance=i.getRef("http://www.w3.org/ns/solid/terms#instance"),console.log("chat instance",r.chat_instance)),t.abrupt("return",r);case 13:case"end":return t.stop()}}),t)})))()},makeToast:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(t,{title:e,variant:r,solid:!0})}}}},f8a3:function(e,t,r){},fd2a:function(e,t,r){"use strict";t["a"]={methods:{makeToast:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(t,{title:e,variant:r,solid:!0})}}}},fe3f:function(e,t,r){"use strict";var n=r("f8a3"),a=r.n(n);a.a}}]);
//# sourceMappingURL=chunk-acc8c602.e9533ad8.js.map