(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["storage"],{1038:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"storage"},[null!=t.webId?n("div",{staticClass:"row"},[n("Browser",{staticClass:"col-md-6"}),n("Editor",{staticClass:"col-md-6"})],1):n("div",[n("SolidLoginButton")],1)])},r=[],s=(n("d3b7"),n("cb85")),i={name:"Storage",components:{Browser:function(){return n.e("browser").then(n.bind(null,"a36b"))},Editor:function(){return n.e("editor").then(n.bind(null,"527c"))},SolidLoginButton:function(){return n.e("chunk-1d6ce668").then(n.bind(null,"e9a1"))}},mixins:[s["a"]],data:function(){return{}},created:function(){null==this.webId&&this.popupLogin()},methods:{},computed:{webId:function(){return this.$store.state.solid.webId},storage:function(){return this.$store.state.solid.storage},folder:function(){return this.$store.state.solid.folder}},watch:{}},a=i,u=n("2877"),c=Object(u["a"])(a,o,r,!1,null,null,null);e["default"]=c.exports},cb85:function(t,e,n){"use strict";n("96cf");var o=n("1da1"),r=n("00e8"),s=n.n(r);e["a"]={methods:{popupLogin:function(){return Object(o["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.a.currentSession();case 2:if(e=t.sent,n="./dist-popup/popup.html",e){t.next=8;break}return t.next=7,s.a.popupLogin({popupUri:n});case 7:e=t.sent;case 8:case"end":return t.stop()}}),t)})))()},makeToast:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(e,{title:t,variant:n,solid:!0})}}}}}]);
//# sourceMappingURL=storage.06cbc3f9.js.map