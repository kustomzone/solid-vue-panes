(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["parle"],{"1a22":function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"parle"},[t._v(" PARLE "),r("BreadCrumb"),r("ParleList"),r("ParleSend")],1)},n=[],a=(r("d3b7"),r("8a79"),r("96cf"),r("1da1")),l=r("4360"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"breadcrumb"},[r("b-breadcrumb",{attrs:{items:t.items}})],1)},i=[],u=(r("4160"),r("ac1f"),r("1276"),r("159b"),{name:"BreadCrumb",data:function(){return{}},computed:{root:function(){return this.$store.state.parle.root},path:function(){return this.$store.state.parle.path},fileUrl:function(){return this.$store.state.parle.fileUrl},items:function(){var t=[],e="";t.push({text:"all",href:"/parle"});var r=this.$store.state.parle.fileUrl.split(this.root)[1];if(void 0!=r&&r.length>1){var o=r.split("/");console.log(o),o.forEach((function(r){e+=r+"/",t.push({text:r,href:"?channel="+e,active:!1})}))}return t}}}),c=u,p=(r("9ca1"),r("2877")),f=Object(p["a"])(c,s,i,!1,null,"2c56baca",null),h=f.exports,d={store:l["a"],name:"Parle",components:{ParleList:function(){return r.e("chunk-32bff29d").then(r.bind(null,"c3f8"))},ParleSend:function(){return r.e("chunk-23f7aaa6").then(r.bind(null,"eeb9"))},BreadCrumb:h},created:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.url=t.$route.params.url,void 0==t.root&&(t.root="https://parle.solidcommunity.net/public/"),console.log("root",t.root),!t.root.endsWith("/")&&(t.root=t.root+"/"),!t.root.endsWith("/parle/")&&(t.root=t.root+"parle/"),console.log("Root root",t.root),t.$store.commit("parle/setRoot",t.root),console.log("ROOT FROM STORE",t.$store.state.parle.root),t.$store.commit("parle/setUrl",t.url);case 9:case"end":return e.stop()}}),e)})))()},watch:{$route:function(t){this.url=t.params.url,this.$store.commit("parle/setUrl",this.url)}}},m=d,b=Object(p["a"])(m,o,n,!1,null,null,null);e["default"]=b.exports},"279d":function(t,e,r){},"9ca1":function(t,e,r){"use strict";r("279d")}}]);
//# sourceMappingURL=parle.09d89bb7.js.map