(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e57ca9d"],{"6d6f":function(t,e,o){},a36b:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"browser"},[null!=t.webId?o("div",[o("b-list-group",["https://"!=t.folder.parent?o("b-list-group-item",{staticClass:"item",on:{click:function(e){return t.goUp()}}},[o("b-icon-arrow-up"),t._v(" "+t._s(t.folder.url)+" "),o("b-icon-upload")],1):o("b-list-group-item",{staticClass:"item"},[t._v(" "+t._s(t.storage)+" "),o("b-icon-upload")],1),t._l(t.folder.folders,(function(e){return o("b-list-group-item",{key:e.name,staticClass:"item",on:{click:function(o){return t.selected(e)}}},[o("b-icon-folder"),t._v(" "+t._s(e.name)+" ")],1)}))],2),o("b-list-group",t._l(t.folder.files,(function(e){return o("b-list-group-item",{key:e.name,staticClass:"item",on:{click:function(o){return t.selected(e)}}},[o("b-icon-file"),t._v(" "+t._s(e.name)+" ")],1)})),1)],1):o("div",[o("SolidLogin")],1)])},s=[],n=(o("d3b7"),{name:"Browser",components:{SolidLogin:function(){return Promise.resolve().then(o.bind(null,"6bae"))}},methods:{selected:function(t){"folder"==t.type?this.$store.dispatch("solid/updateFolder",t.url):this.$store.dispatch("solid/updateFile",t)},goUp:function(){this.$store.dispatch("solid/updateFolder",this.folder.parent)}},computed:{webId:function(){return this.$store.state.solid.webId},storage:function(){return this.$store.state.solid.storage},folder:function(){return this.$store.state.solid.folder}}}),r=n,l=(o("f112"),o("2877")),u=Object(l["a"])(r,i,s,!1,null,null,null);e["default"]=u.exports},f112:function(t,e,o){"use strict";var i=o("6d6f"),s=o.n(i);s.a}}]);
//# sourceMappingURL=chunk-5e57ca9d.64aad32b.js.map