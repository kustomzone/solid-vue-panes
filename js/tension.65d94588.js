(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tension"],{"0d4f":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"simple-gouv-view container"},[s("b-card-group",{attrs:{deck:""}},[s("GroupsView"),s("DomainsView"),s("TensionsView")],1),t._v(" storage "+t._s(t.storage)+" workspace "+t._s(t.workspace)+" ")],1)},o=[],i=(s("d3b7"),{name:"SimpleGouvView",components:{GroupsView:function(){return s.e("chunk-f4a2d868").then(s.bind(null,"c410"))},DomainsView:function(){return s.e("chunk-2d228c78").then(s.bind(null,"db48"))},TensionsView:function(){return s.e("chunk-2d2380b4").then(s.bind(null,"fe65"))}},created:function(){this.storage=this.$store.state.solid.storage,this.setWorkspace()},data:function(){return{path:"public/gouvernance/"}},watch:{storage:function(t){console.log(t),this.setWorkspace()}},methods:{setWorkspace:function(){this.workspace=this.storage+this.path,this.$store.commit("gouvernance/setWorkspace",this.workspace)}},computed:{storage:{get:function(){return this.$store.state.solid.storage},set:function(){}}}}),a=i,r=(s("33b8"),s("2877")),c=Object(r["a"])(a,n,o,!1,null,null,null);e["default"]=c.exports},"33b8":function(t,e,s){"use strict";var n=s("aa44"),o=s.n(n);o.a},"7f37":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tension-view"},[s("p",[t._v("A tension is a difference between what is and what should be")]),s("b-container",[s("b-row",{staticClass:"my-1"},[s("b-col",{attrs:{sm:"3"}},[s("label",{attrs:{for:"input-none"}},[t._v("Name:")])]),s("b-col",{attrs:{sm:"9"}},[s("b-form-input",{attrs:{state:!0,placeholder:"Name"},model:{value:t.tension.label,callback:function(e){t.$set(t.tension,"label",e)},expression:"tension.label"}})],1)],1),s("b-row",{staticClass:"my-1"},[s("b-col",{attrs:{sm:"3"}},[s("label",{attrs:{for:"input-none"}},[t._v("What is:")])]),s("b-col",{attrs:{sm:"9"}},[s("b-form-input",{attrs:{placeholder:"What is"},model:{value:t.tension.wi,callback:function(e){t.$set(t.tension,"wi",e)},expression:"tension.wi"}})],1)],1),s("b-row",{staticClass:"my-1"},[s("b-col",{attrs:{sm:"3"}},[s("label",{attrs:{for:"input-none"}},[t._v("What should be:")])]),s("b-col",{attrs:{sm:"9"}},[s("b-form-input",{attrs:{placeholder:"What should be"},model:{value:t.tension.wsb,callback:function(e){t.$set(t.tension,"wsb",e)},expression:"tension.wsb"}})],1)],1),s("b-row",{staticClass:"my-1"},[s("b-button",{on:{click:t.createTension}},[t._v("Save")])],1)],1),t._v(" TensionView ")],1)},o=[],i=s("86bb"),a={mixins:[i["a"]],data:function(){return{tension:{}}},methods:{createTension:function(){var t=new Date,e=t.toISOString();this.tension.created=e,this.tension.types=["http://purl.org/vocab/lifecycle/schema#Task","http://www.w3.org/ns/ldp#Resource"],console.log(this.tension),this.makeToast("Tension created",this.tension.label,"success"),this.tension={}}}},r={name:"TensionView",mixins:[a],methods:{}},c=r,l=s("2877"),u=Object(l["a"])(c,n,o,!1,null,null,null);e["default"]=u.exports},"86bb":function(t,e,s){"use strict";e["a"]={methods:{makeToast:function(t,e){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(e,{title:t,variant:s,solid:!0})}}}},aa44:function(t,e,s){}}]);
//# sourceMappingURL=tension.65d94588.js.map