(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cc7d8"],{"4dc5":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"crud-config"},[s("b-card",{staticClass:"text-center",attrs:{"bg-variant":"secondary","text-variant":"white",header:"Config"}},[s("b-input-group",{staticClass:"mt-3",attrs:{prepend:"Workspace"}},[s("b-form-input",{model:{value:t.workspace,callback:function(e){t.workspace=e},expression:"workspace"}}),s("b-input-group-append",[s("b-button",{attrs:{variant:"info",disabled:""}},[t._v("Update")])],1)],1)],1)],1)},o=[],r={name:"ConfigView",components:{},props:["path"],data:function(){return{workspace:""}},created:function(){this.storage=this.$store.state.solid.storage,this.setWorkspace()},watch:{storage:function(t){console.log(t),this.setWorkspace()}},methods:{setWorkspace:function(){this.workspace=this.storage+this.path,this.$store.commit("crud/setWorkspace",this.workspace)}},computed:{storage:{get:function(){return this.$store.state.solid.storage},set:function(){}}}},n=r,c=s("2877"),i=Object(c["a"])(n,a,o,!1,null,null,null);e["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d0cc7d8.6e880be5.js.map