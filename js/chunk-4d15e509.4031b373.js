(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d15e509"],{"40ce":function(t,i,s){},ab9e:function(t,i,s){"use strict";var n=s("40ce"),o=s.n(n);o.a},dda2:function(t,i,s){"use strict";s.r(i);var n=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"agora-notif"},[s("div",{staticClass:"text-center"},[s("transition",{attrs:{name:"bounce"}},[t.show?s("b-badge",{staticClass:"btn",attrs:{variant:"light"},on:{click:t.open_agora}},[t._v(t._s(t.activities_cnt)+" activities")]):t._e()],1)],1)])},o=[],a={name:"AgoraNotif",components:{},data:function(){return{pubPod:"https://agora.solid.community/public/popock/inbox/",acitivities_cnt:0,show:!1}},created:function(){this.$store.dispatch("agora/setPubPod",this.pubPod),this.activities=this.$store.state.agora.activities},watch:{config:function(t){console.log(t)},activities:function(t){console.log(t.length),this.activities_cnt!=t.length&&(this.activities_cnt=t.length,this.show=!1,this.show=!0)}},methods:{open_agora:function(){"/agora"!==this.$route.path&&this.$router.push({path:"/agora"}),this.show=!1}},computed:{activities:{get:function(){return this.$store.state.agora.activities},set:function(){}},config:{get:function(){return this.$store.state.agora.config},set:function(){}}}},e=a,c=(s("ab9e"),s("2877")),r=Object(c["a"])(e,n,o,!1,null,null,null);i["default"]=r.exports}}]);
//# sourceMappingURL=chunk-4d15e509.4031b373.js.map