(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-96cf5244"],{"4de4":function(t,e,n){"use strict";var r=n("23e7"),o=n("b727").filter,a=n("1dde"),i=n("ae40"),s=a("filter"),l=i("filter");r({target:"Array",proto:!0,forced:!s||!l},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},c975:function(t,e,n){"use strict";var r=n("23e7"),o=n("4d64").indexOf,a=n("a640"),i=n("ae40"),s=[].indexOf,l=!!s&&1/[1].indexOf(1,-0)<0,c=a("indexOf"),u=i("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:l||!c||!u},{indexOf:function(t){return l?s.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})},dfa2:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bookmarks-list container"},[n("b-button",{attrs:{variant:"outline-info"},on:{click:function(e){return t.updateBm()}}},[t._v("Back to "+t._s(t.mode)+"/bookmarks/")]),n("br"),n("h5",[t._v("Bookmarks :")]),n("div",[n("b-card-group",{attrs:{columns:""}},t._l(t.bookmarks,(function(e){return n("b-card",{key:e.id,attrs:{"img-src":e.img,"img-alt":"Image","img-top":""}},[n("b-card-title",[t._v(t._s(e.label))]),n("b-card-text",[t._v(" "+t._s(e.content)+" ")]),n("b-card-text",{staticClass:"small text-muted"},[n("a",{attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.url))])])],1)})),1)],1),n("h5",[t._v("Categories :")]),t._l(t.bm.folders,(function(e){return n("b-button",{key:e.url,staticClass:"m-1",attrs:{variant:"info"},on:{click:function(n){return t.updateBm(e.url)}}},[t._v(t._s(e.name))])}))],2)},o=[],a=(n("4de4"),n("c975"),n("b85c")),i=(n("96cf"),n("1da1")),s=n("00e8"),l=n.n(s),c=n("4d8d"),u=n("6dc1"),d=window.SolidFileClient,f=new d(l.a),m={name:"BookmarksList",components:{},props:["mode"],data:function(){return{bm:{files:[],folders:[]},bookmarks:[]}},mounted:function(){this.path=this.$store.state.solid.storage+this.mode+"/bookmarks/",this.updateBm()},watch:{path:function(t){console.log("path",t),this.updateBm()},storage:function(t){this.path=t+this.mode+"/bookmarks/"}},methods:{updateBm:function(){var t=arguments,e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var r,o,i,s,l,d,m,h,b;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.length>0&&void 0!==t[0]?t[0]:e.path,console.log("path updated",r),o={files:[],folders:[]},i=[],console.log(o.files.length),n.prev=5,n.next=8,f.readFolder(r);case 8:if(o=n.sent,!(o.files.length>0)){n.next=17;break}return n.next=12,Object(c["b"])(o.files[0].url);case 12:s=n.sent,l=s.findSubjects(),l=l.filter(e.onlyUnique),d=Object(a["a"])(l);try{for(d.s();!(m=d.n()).done;)h=m.value,b={id:h.asRef(),content:h.getLiteral(u["g"].content),label:h.getLiteral(u["e"].label),url:h.getNodeRef("http://www.w3.org/2002/01/bookmark#recalls")},b.img="//image.thum.io/get/width/355/crop/600/"+b.url,console.log(b),i.unshift(b)}catch(p){d.e(p)}finally{d.f()}case 17:n.next=21;break;case 19:n.prev=19,n.t0=n["catch"](5);case 21:e.bm=o,e.bookmarks=i;case 23:case"end":return n.stop()}}),n,null,[[5,19]])})))()},onlyUnique:function(t,e,n){return n.indexOf(t)===e}},computed:{storage:function(){return this.$store.state.solid.storage}}},h=m,b=n("2877"),p=Object(b["a"])(h,r,o,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-96cf5244.683632f4.js.map