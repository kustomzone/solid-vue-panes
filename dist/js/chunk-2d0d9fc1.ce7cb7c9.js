(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d9fc1"],{"6a55":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"share"},[o("header",{staticClass:"font-bold text-xl py-3 flex"},[t.shareFeature?o("button",{staticClass:"ml-auto opacity-50 hover:opacity-75",on:{click:function(e){return t.openShareDialog()}}},[o("svg",{style:{width:"1em",height:"1em"},attrs:{viewBox:"0 0 24 24"}},[o("path",{attrs:{fill:"currentColor",d:"M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z"}})])]):t._e()])])},a=[],r={name:"ShareButton",data:function(){return{titleS:"Popock",shareFeature:"share"in window.navigator,query:"",route:""}},methods:{openShareDialog:function(){window.navigator.share({title:this.titleS,text:"Share PoPock",url:window.location}).then((function(){return console.log("Successful share")})).catch((function(t){return console.log("Error sharing",t)}))}}},i=r,s=o("2877"),l=Object(s["a"])(i,n,a,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0d9fc1.ce7cb7c9.js.map