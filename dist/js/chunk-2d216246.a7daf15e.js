(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d216246"],{c0cf:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modele-view"},[n("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"}},[n("b-card-title",[t._v("Tensions")]),n("b-card-header",[t._v(' A tension is a difference between "What is" and "What should be". I\'m sure there are a lot of thing that you want to change... ')]),n("b-card-text",[n("b-button-toolbar",{attrs:{"key-nav":"","aria-label":"Toolbar with button groups"}},[n("b-button-group",{staticClass:"mx-1",attrs:{size:"sm"}},[n("b-button",{attrs:{variant:"outline",to:"/tension/edit"}},[n("b-icon",{attrs:{icon:"plus-square","aria-hidden":"true",variant:"info"}})],1),n("b-button",{attrs:{variant:"outline",to:"/tensions"}},[n("b-icon",{attrs:{icon:"list",variant:"info"}})],1)],1)],1)],1),n("b-card-footer"),t._v(" "+t._s(t.config.workspace)),n("br"),t._v(" gf : "+t._s(t.path)+" ")],1)],1)},o=[],r=(n("96cf"),n("1da1")),i=n("00e8"),s=n.n(i),c=n("7fed"),u=n.n(c),d=new u.a(s.a),h={name:"TensionsCard",data:function(){return{path:""}},created:function(){this.config=this.$store.state.gouvernance.config,this.updatePath()},watch:{config:function(t){console.log(t),this.updatePath()}},methods:{updatePath:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.path=t.config.workspace+"tensions/",e.next=3,d.readFolder(t.path);case 3:t.folder=e.sent;case 4:case"end":return e.stop()}}),e)})))()}},computed:{config:{get:function(){return this.$store.state.gouvernance.config},set:function(){}}}},f=h,l=n("2877"),b=Object(l["a"])(f,a,o,!1,null,null,null);e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-2d216246.a7daf15e.js.map