(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d225270"],{e2d1:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"group-member"},[null!=e.webId?n("div",[n("div",{staticClass:"container flush"},[n("b-form-group",{staticClass:"row"},[n("FriendsSelection",{on:{selected:e.onSelected}}),n("label",{attrs:{for:"name"}},[e._v("or Member WebId")]),n("b-form-input",{attrs:{id:"member",placeholder:"ex https://spoggy-test.solid.community/profile/card#me"},model:{value:e.member,callback:function(t){e.member=t},expression:"member"}}),n("b-button",{on:{click:e.add}},[e._v("Add")])],1)],1)]):e._e()])},o=[],c=(n("4160"),n("d3b7"),n("159b"),n("96cf"),n("1da1")),s=n("4d8d"),d=n("6dc1"),a={name:"GroupAddMember",props:["url"],components:{FriendsSelection:function(){return n.e("chunk-2d0b219b").then(n.bind(null,"2359"))}},data:function(){return{member:"",selected:[]}},computed:{webId:function(){return this.$store.state.solid.webId}},methods:{onSelected:function(e){console.log("YEAH SELECTED !",e),this.selected=e},add:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e.url),t.next=3,Object(s["b"])(e.url);case 3:return n=t.sent,r=n.findSubject(),e.member.length>0&&r.addRef(d["f"].hasMember,e.member),e.selected.forEach((function(e){console.log(e),r.addRef(d["f"].hasMember,e)})),t.next=9,n.save();case 9:e.$emit("added");case 10:case"end":return t.stop()}}),t)})))()}}},l=a,u=n("2877"),i=Object(u["a"])(l,r,o,!1,null,null,null);t["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d225270.34b97cc4.js.map