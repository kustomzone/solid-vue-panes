(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["groups"],{"089f":function(t,e,n){"use strict";var u=n("7343"),s=n.n(u);s.a},"0dfe":function(t,e,n){"use strict";n.r(e);var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"view container"},[t.types.includes("http://purl.org/vocab/lifecycle/schema#Task")?n("TaskView",{attrs:{subject:t.subject,url:t.url}}):t._e(),t.types.includes("http://www.w3.org/ns/ldp#Resource")?n("ResourceView",{attrs:{subject:t.subject,url:t.url}}):t._e(),t._v(" view : "+t._s(t.url)+" ")],1)},s=[],r=(n("d3b7"),n("96cf"),n("1da1")),o=n("4d8d"),c=n("6dc1"),i={name:"View",components:{ResourceView:function(){return n.e("chunk-3b1de027").then(n.bind(null,"ad8f"))},TaskView:function(){return n.e("chunk-72520506").then(n.bind(null,"4d05"))}},data:function(){return{types:[]}},created:function(){console.log("route",this.$route),this.url=this.$route.params.url,this.getData()},computed:{storage:{get:function(){return this.$store.state.solid.storage},set:function(){}}},methods:{getData:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["b"])(t.url);case 2:n=e.sent,t.subject=n.getSubject(t.url+"#this"),console.log(t.subject),t.types=t.subject.getAllRefs(c["d"].type),console.log(t.types);case 7:case"end":return e.stop()}}),e)})))()}},watch:{$route:function(t){console.log(t),this.url=t.params.url,this.getData()},url:function(t){console.log("URL CHANGED",t)}}},l=i,a=(n("089f"),n("2877")),d=Object(a["a"])(l,u,s,!1,null,null,null);e["default"]=d.exports},"696f":function(t,e,n){"use strict";n.r(e);var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"groups"},[null!=t.webId?n("div",[n("GroupsList")],1):n("div",[n("SolidLoginButton")],1)])},s=[],r=(n("d3b7"),{name:"Groups",components:{GroupsList:function(){return n.e("chunk-2d0ba68d").then(n.bind(null,"36a5"))},SolidLoginButton:function(){return n.e("chunk-4791cc9e").then(n.bind(null,"e9a1"))}},computed:{webId:function(){return this.$store.state.solid.webId}}}),o=r,c=n("2877"),i=Object(c["a"])(o,u,s,!1,null,null,null);e["default"]=i.exports},7343:function(t,e,n){}}]);
//# sourceMappingURL=groups.c924a807.js.map