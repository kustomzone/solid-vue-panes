(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2380b4"],{fe65:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modele-view"},[n("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"}},[n("b-card-title",[e._v("Tensions")]),n("b-card-text",[e._v(" Some quick example text to build on the card and make up the bulk of the card's content. "),n("br"),e._v(" "+e._s(e.config.workspace)),n("br"),e._v(" gf : "+e._s(e.path)+" ")])],1)],1)},c=[],o=(n("96cf"),n("1da1")),i=n("00e8"),r=n.n(i),s=window.SolidFileClient,u=new s(r.a),d={name:"TensionsView",data:function(){return{path:""}},created:function(){this.config=this.$store.state.gouvernance.config,this.updatePath()},watch:{config:function(e){console.log(e),this.updatePath()}},methods:{updatePath:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.path=e.config.workspace+"tensions/",t.next=3,u.readFolder(e.path);case 3:e.folder=t.sent;case 4:case"end":return t.stop()}}),t)})))()}},computed:{config:{get:function(){return this.$store.state.gouvernance.config},set:function(){}}}},l=d,f=n("2877"),h=Object(f["a"])(l,a,c,!1,null,null,null);t["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d2380b4.14d7438e.js.map