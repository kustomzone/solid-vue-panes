(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-86edf296"],{"77a0":function(t,e,i){"use strict";var n=i("f73e"),a=i.n(n);a.a},df28:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"agora-list container"},[i("h5",[t._v(" "+t._s(t.activities.length)+" Activities")]),i("b-card-group",{attrs:{deck:""}},t._l(t.activities,(function(t){return i("ActivityItem",{key:t.id,attrs:{activity:t}})})),1)],1)},a=[],r=(i("a15b"),i("fb6a"),i("d3b7"),i("96cf"),i("1da1")),s={name:"AgoraList",components:{ActivityItem:function(){return Promise.all([i.e("chunk-2d21d458"),i.e("chunk-2d0ac3ce")]).then(i.bind(null,"194d"))}},props:["value"],data:function(){return{}},created:function(){var t=new Date;this.date=this.formatDate(t),this.max=this.date,this.activities=this.$store.state.agora.activities},watch:{activities:function(t){return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("ACTIVITIES",t.length,t);case 1:case"end":return e.stop()}}),e)})))()}},methods:{sort:function(){this.activities.reverse()},formatDate:function(t){return[t.getFullYear(),("0"+(t.getMonth()+1)).slice(-2),("0"+t.getDate()).slice(-2)].join("-")}},computed:{storage:function(){return this.$store.state.solid.storage},activities:{get:function(){return this.$store.state.agora.activities},set:function(){}}}},c=s,o=(i("77a0"),i("2877")),u=Object(o["a"])(c,n,a,!1,null,null,null);e["default"]=u.exports},f73e:function(t,e,i){}}]);
//# sourceMappingURL=chunk-86edf296.28f1e704.js.map