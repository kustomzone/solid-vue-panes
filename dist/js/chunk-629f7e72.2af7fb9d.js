(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-629f7e72"],{baa5:function(t,r,n){var e=n("23e7"),a=n("e58c");e({target:"Array",proto:!0,forced:a!==[].lastIndexOf},{lastIndexOf:a})},e58c:function(t,r,n){"use strict";var e=n("fc6a"),a=n("a691"),o=n("50c4"),u=n("a640"),s=n("ae40"),i=Math.min,c=[].lastIndexOf,l=!!c&&1/[1].lastIndexOf(1,-0)<0,p=u("lastIndexOf"),f=s("indexOf",{ACCESSORS:!0,1:0}),b=l||!p||!f;t.exports=b?function(t){if(l)return c.apply(this,arguments)||0;var r=e(this),n=o(r.length),u=n-1;for(arguments.length>1&&(u=i(u,a(arguments[1]))),u<0&&(u=n+u);u>=0;u--)if(u in r&&r[u]===t)return u||0;return-1}:c},ea9a:function(t,r,n){"use strict";n.r(r);var e=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"groups-view"},[t._v(" current : "+t._s(t.currentGroup)+" "),n("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{title:"Filiation",tag:"article"}},[t.parent?n("div",[t._v(" Parent : "+t._s(t.parent)+" "),n("b-button",{on:{click:t.openParent}},[t._v("Open Parent")]),n("br")],1):t._e(),t._v(" Subgroups: "),n("b-card-text",[n("b-list-group",t._l(t.subgroups,(function(r){return n("b-list-group-item",{key:r,on:{click:function(n){return t.updateCurrentGroup(r)}}},[t._v(" "+t._s(r)+" ")])})),1)],1),n("b-button",{attrs:{variant:"info"}},[t._v("Create SubGroup")]),n("b-button",{attrs:{variant:"info"}},[t._v("Change Parent")])],1)],1)},a=[],o=(n("baa5"),{name:"GroupFiliation",components:{},created:function(){this.currentGroup=this.$store.state.gouvernance.currentGroup,console.log(this.currentGroup)},props:["parent","subgroups"],data:function(){return{}},methods:{updateCurrentGroup:function(t){console.log(t);var r=t.substring(0,t.lastIndexOf("/"))+"/";console.log(r),this.$store.commit("gouvernance/setCurrentGroup",{url:r})},openParent:function(){this.$store.commit("gouvernance/setCurrentGroup",{url:this.parent})}}}),u=o,s=n("2877"),i=Object(s["a"])(u,e,a,!1,null,null,null);r["default"]=i.exports}}]);
//# sourceMappingURL=chunk-629f7e72.2af7fb9d.js.map