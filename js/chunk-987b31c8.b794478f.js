(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-987b31c8"],{1048:function(e,t,r){"use strict";var n=r("54f2"),i=r.n(n);i.a},"4de4":function(e,t,r){"use strict";var n=r("23e7"),i=r("b727").filter,s=r("1dde"),a=r("ae40"),o=s("filter"),c=a("filter");n({target:"Array",proto:!0,forced:!o||!c},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},"54f2":function(e,t,r){},dc26:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"modele-view"},[r("a",{attrs:{href:e.profile_url,target:"_blank"}},[e._v(e._s(e.profile_url))]),r("hr",{staticStyle:{margin:"8px auto"}}),r("b-button",{attrs:{variant:"info"},on:{click:function(t){e.editTopic=!e.editTopic}}},[r("b-icon-pen"),e._v(" Interest Topics")],1),r("b-button",{attrs:{variant:"info"},on:{click:function(t){e.editSkill=!e.editSkill}}},[r("b-icon-pen"),e._v(" Skills")],1),r("b-button",{attrs:{variant:"info"},on:{click:function(t){e.editService=!e.editService}}},[r("b-icon-pen"),e._v(" Services")],1),r("hr",{staticStyle:{margin:"8px auto"}}),e._v(" Interests : "),1==e.editTopic?r("div",[r("div",{staticClass:"input-group mb-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.interest,expression:"interest"}],staticClass:"form-control",attrs:{id:"interest",type:"text",placeholder:"I'm intersted in...","aria-label":"Interest","aria-describedby":"interest-label"},domProps:{value:e.interest},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addInterest(t)},input:function(t){t.target.composing||(e.interest=t.target.value)}}}),r("div",{staticClass:"input-group-append"},[r("button",{staticClass:"btn btn-primary",attrs:{id:"submit_btn",type:"button"},on:{click:e.addInterest}},[e._v("Add "),r("span",{staticClass:"spinner-border spinner-border-sm",attrs:{id:"submit_spinner",hidden:"",role:"status","aria-hidden":"true"}})])])])]):e._e(),e._l(e.interests,(function(t){return r("button",{key:t,staticClass:"btn btn-outline-info btn-sm",attrs:{type:"button"}},[e._v(" "+e._s(t)+" "),1==e.editTopic?r("b-icon-trash-fill",{on:{click:function(r){return r.stopPropagation(),e.delInterest(t)}}}):e._e()],1)})),r("hr"),e._v(" Skills : "),1==e.editSkill?r("div",[r("div",{staticClass:"input-group mb-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.skill,expression:"skill"}],staticClass:"form-control",attrs:{id:"skills",type:"text",placeholder:"I have some skills that could interest others...","aria-label":"Skill","aria-describedby":"skill-label"},domProps:{value:e.skill},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addSkill(t)},input:function(t){t.target.composing||(e.skill=t.target.value)}}}),r("div",{staticClass:"input-group-append"},[r("button",{staticClass:"btn btn-primary",attrs:{id:"submit_btn",type:"button"},on:{click:e.addSkill}},[e._v("Add "),r("span",{staticClass:"spinner-border spinner-border-sm",attrs:{id:"submit_spinner",hidden:"",role:"status","aria-hidden":"true"}})])])])]):e._e(),e._l(e.skills,(function(t){return r("button",{key:t,staticClass:"btn btn-outline-info btn-sm",attrs:{type:"button"}},[e._v(" "+e._s(t)+" "),1==e.editSkill?r("b-icon-trash-fill",{on:{click:function(r){return r.stopPropagation(),e.delSkill(t)}}}):e._e()],1)})),r("hr"),e._v(" Services : "),1==e.editService?r("div",[r("div",{staticClass:"input-group mb-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.service,expression:"service"}],staticClass:"form-control",attrs:{id:"service",type:"text",placeholder:"I propose a service...","aria-label":"Service","aria-describedby":"service-label"},domProps:{value:e.service},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addService(t)},input:function(t){t.target.composing||(e.service=t.target.value)}}}),r("div",{staticClass:"input-group-append"},[r("button",{staticClass:"btn btn-primary",attrs:{id:"submit_btn",type:"button"},on:{click:e.addService}},[e._v("Add "),r("span",{staticClass:"spinner-border spinner-border-sm",attrs:{id:"submit_spinner",hidden:"",role:"status","aria-hidden":"true"}})])])])]):e._e(),e._l(e.services,(function(t){return r("button",{key:t,staticClass:"btn btn-outline-info btn-sm",attrs:{type:"button"}},[e._v(" "+e._s(t)+" "),1==e.editService?r("b-icon-trash-fill",{on:{click:function(r){return r.stopPropagation(),e.delService(t)}}}):e._e()],1)}))],2)},i=[],s=(r("4de4"),r("96cf"),r("1da1")),a=r("fd2a"),o=r("4d8d"),c=r("6dc1"),l={name:"ExtendedProfile",mixins:[a["a"]],data:function(){return{interests:[],skills:[],services:[],interest:"",skill:"",service:"",editTopic:!1,editSkill:!1,editService:!1}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.state.solid.storage;case 2:t.t0=t.sent,e.profile_url=t.t0+"popock/profile.ttl",e.getOrCreate(e.profile_url),void 0!=e.$route.params.interest&&(e.interest=e.$route.params.interest);case 6:case"end":return t.stop()}}),t)})))()},watch:{profile_url:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.getOrCreate(e);case 1:case"end":return r.stop()}}),r)})))()}},methods:{getOrCreate:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.makeToast("Get",e),r.next=4,Object(o["b"])(e);case 4:return t.profileDoc=r.sent,r.next=7,t.profileDoc.getSubject(t.profile_url+"#me");case 7:return n=r.sent,r.next=10,n.getAllLiterals(c["b"].topic_interest);case 10:return t.interests=r.sent,r.next=13,n.getAllLiterals("http://rdfs.org/resume-rdf/cv.rdfs#hasSkill");case 13:return t.skills=r.sent,r.next=16,n.getAllLiterals("https://schema.org/providesService");case 16:t.services=r.sent,r.next=31;break;case 19:return r.prev=19,r.t0=r["catch"](0),t.makeToast("Create",e),r.prev=22,r.next=25,Object(o["a"])(e);case 25:t.profileDoc=r.sent,r.next=31;break;case 28:r.prev=28,r.t1=r["catch"](22),t.makeToast("Unable to create your extended profile",e+"are you sure that this app is granted in your POD preferences ?","danger");case 31:console.log(t.interests.length,t.skills.length,t.services.length),t.editTopic=0==t.interests.length,t.editSkill=0==t.skills.length,t.editService=0==t.services.length;case 35:case"end":return r.stop()}}),r,null,[[0,19],[22,28]])})))()},addInterest:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.interests.push(e.interest),e.profileDoc={},r={},t.prev=3,t.next=6,Object(o["b"])(e.profile_url);case 6:return e.profileDoc=t.sent,t.next=9,e.profileDoc.getSubject(e.profile_url+"#me");case 9:r=t.sent,t.next=20;break;case 12:return t.prev=12,t.t0=t["catch"](3),t.next=16,Object(o["a"])(e.profile_url);case 16:return e.profileDoc=t.sent,t.next=19,e.profileDoc.addSubject(e.profile_url+"#me");case 19:r=t.sent;case 20:return r.addLiteral(c["b"].topic_interest,e.interest),t.next=23,e.profileDoc.save();case 23:e.interest="",console.log("TODO add activity & match semapps");case 25:case"end":return t.stop()}}),t,null,[[3,12]])})))()},delInterest:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(o["b"])(t.profile_url);case 2:return t.profileDoc=r.sent,t.interests=t.interests.filter((function(t){return t!=e})),r.next=6,t.profileDoc.getSubject(t.profile_url+"#me");case 6:return n=r.sent,n.removeLiteral(c["b"].topic_interest,e),r.next=10,t.profileDoc.save();case 10:case"end":return r.stop()}}),r)})))()},addSkill:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.skills.push(e.skill),e.profileDoc={},r={},t.prev=3,t.next=6,Object(o["b"])(e.profile_url);case 6:return e.profileDoc=t.sent,t.next=9,e.profileDoc.getSubject(e.profile_url+"#me");case 9:r=t.sent,t.next=20;break;case 12:return t.prev=12,t.t0=t["catch"](3),t.next=16,Object(o["a"])(e.profile_url);case 16:return e.profileDoc=t.sent,t.next=19,e.profileDoc.addSubject(e.profile_url+"#me");case 19:r=t.sent;case 20:return r.addLiteral("http://rdfs.org/resume-rdf/cv.rdfs#hasSkill",e.skill),t.next=23,e.profileDoc.save();case 23:e.skill="",console.log("TODO add activity & match semapps");case 25:case"end":return t.stop()}}),t,null,[[3,12]])})))()},delSkill:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(o["b"])(t.profile_url);case 2:return t.profileDoc=r.sent,t.skills=t.skills.filter((function(t){return t!=e})),r.next=6,t.profileDoc.getSubject(t.profile_url+"#me");case 6:return n=r.sent,n.removeLiteral("http://rdfs.org/resume-rdf/cv.rdfs#hasSkill",e),r.next=10,t.profileDoc.save();case 10:case"end":return r.stop()}}),r)})))()},addService:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.services.push(e.service),e.profileDoc={},r={},t.prev=3,t.next=6,Object(o["b"])(e.profile_url);case 6:return e.profileDoc=t.sent,t.next=9,e.profileDoc.getSubject(e.profile_url+"#me");case 9:r=t.sent,t.next=20;break;case 12:return t.prev=12,t.t0=t["catch"](3),t.next=16,Object(o["a"])(e.profile_url);case 16:return e.profileDoc=t.sent,t.next=19,e.profileDoc.addSubject(e.profile_url+"#me");case 19:r=t.sent;case 20:return r.addLiteral("https://schema.org/providesService",e.service),t.next=23,e.profileDoc.save();case 23:e.service="",console.log("TODO add activity & match semapps");case 25:case"end":return t.stop()}}),t,null,[[3,12]])})))()},delService:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(o["b"])(t.profile_url);case 2:return t.profileDoc=r.sent,t.services=t.services.filter((function(t){return t!=e})),r.next=6,t.profileDoc.getSubject(t.profile_url+"#me");case 6:return n=r.sent,n.removeLiteral("https://schema.org/providesService",e),r.next=10,t.profileDoc.save();case 10:case"end":return r.stop()}}),r)})))()}},computed:{webId:function(){return this.$store.state.solid.webId},profile:function(){return this.$store.state.solid.profile},profile_url:{get:function(){return this.$store.state.solid.storage+"public/popock/profile.ttl"},set:function(){}}}},u=l,p=(r("1048"),r("2877")),d=Object(p["a"])(u,n,i,!1,null,null,null);t["default"]=d.exports},fd2a:function(e,t,r){"use strict";t["a"]={methods:{makeToast:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(t,{title:e,variant:r,solid:!0})}}}}}]);
//# sourceMappingURL=chunk-987b31c8.b794478f.js.map