(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3eafbc51"],{"36a5":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"groups-list"},[n("GroupCreate",{on:{created:t.initGroups}}),n("b-list-group",{attrs:{flush:""}},t._l(t.sorted(t.folder.files),(function(e){return n("b-list-group-item",{key:e.url},[n("div",{staticClass:"item"},[n("div",{staticClass:"avatar"}),n("div",{staticClass:"name text-info"},[t._v(" "+t._s(e.name)+" ")]),n("div",{staticClass:"content"},[t._v(" "+t._s(e.url)+" "),n("GroupMembers",{attrs:{url:e.url}})],1),n("div",{staticClass:"created"},[t._v(" "+t._s(e.modified)+" ")])])])})),1)],1)},o=[],i=(n("d3b7"),n("96cf"),n("1da1")),s=n("00e8"),u=n.n(s),a=window.SolidFileClient;console.log("SFC",a);var c=new a(u.a),l={name:"GroupsList",components:{GroupCreate:function(){return n.e("chunk-2d0b2e88").then(n.bind(null,"25b1"))},GroupMembers:function(){return n.e("chunk-2d2176ea").then(n.bind(null,"c766"))}},data:function(){return{folder:{}}},created:function(){this.initGroups()},computed:{webId:function(){return this.$store.state.solid.webId},storage:function(){return this.$store.state.solid.storage},url:function(){return this.storage+"public/groups/"}},methods:{initGroups:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.storage.length>0)){e.next=6;break}return console.log("init groups : ",t.url),e.next=4,c.readFolder(t.url);case 4:t.folder=e.sent,console.log("Folder : ",t.folder);case 6:case"end":return e.stop()}}),e)})))()},sorted:function(t){if(void 0!=t)return t.sort((function(t,e){return t.modified<e.modified}))}},watch:{url:function(t){null!=t&&(console.log(t),this.initGroups())}}},d=l,f=(n("bcb1"),n("2877")),p=Object(f["a"])(d,r,o,!1,null,null,null);e["default"]=p.exports},b24c:function(t,e,n){},bcb1:function(t,e,n){"use strict";var r=n("b24c"),o=n.n(r);o.a}}]);
//# sourceMappingURL=chunk-3eafbc51.4fa71b88.js.map