(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chat"],{"14c3c":function(t,e,i){"use strict";var n=i("c8f0"),a=i.n(n);a.a},"159b":function(t,e,i){var n=i("da84"),a=i("fdbc"),r=i("17c2"),c=i("9112");for(var o in a){var s=n[o],l=s&&s.prototype;if(l&&l.forEach!==r)try{c(l,"forEach",r)}catch(u){l.forEach=r}}},"17c2":function(t,e,i){"use strict";var n=i("b727").forEach,a=i("a640"),r=i("ae40"),c=a("forEach"),o=r("forEach");t.exports=c&&o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"293a":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"chat"},[i("div",{staticClass:"container"},[i("router-link",{attrs:{to:"/indexes"}},[t._v("Add an instance to your publicTypeIndex")]),i("b-form-select",{attrs:{options:t.options},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),i("SolidChatList",{attrs:{channel:t.selected}})],1)},a=[],r=(i("99af"),i("4160"),i("d3b7"),i("159b"),{name:"Chat",components:{SolidChatList:function(){return i.e("chunk-0b204f5e").then(i.bind(null,"3083"))}},data:function(){return{selected:{}}},computed:{options:function(){var t=[{value:{instance:"https://solidarity.inrupt.net/public/Solidarity/",created:"01/01/2020",label:"Solidarity"},text:"Solidarity (main) "},{value:{instance:"https://parle.inrupt.net/public/chat/solid/welcome/",created:"08/01/2020",label:"Welcome"},text:"Welcome to Solid"},{value:{instance:"https://solidos.solid.community/Team/SolidOs%20team%20chat/",created:"01/01/2020",label:"Solidos"},text:"Solidos"},{value:{instance:"https://w3c-cg.solid.community/public/w3c-cg-chat/",created:"01/01/2020",label:"Solid W3C CG"},text:"Solid W3C CG"},{value:{instance:"https://parle.inrupt.net/public/chat/solid/applications/",created:"08/01/2020",label:"Applications"},text:"Solid Applications"},{value:{instance:"https://parle.inrupt.net/public/solid/francais/",created:"08/01/2020",label:"Français"},text:"Français"},{value:{instance:"https://solidarity.inrupt.net/public/Shighl/Shighl/",created:"01/01/2020",label:"Shighl / Solid-vue-panes"},text:"Shighl / Solid-vue-panes"},{value:null,text:"----"},{value:{instance:"https://solidarity.inrupt.net/public/ChatTest/",created:"01/01/2020",label:"ChatTest"},text:"ChatTest"}],e=void 0!=this.$store.state.solid.indexes.puti?this.$store.state.solid.indexes.puti.instances:[],i=[];e.length>0&&e.forEach((function(t){"http://www.w3.org/ns/pim/meeting#LongChat"==t.classe&&i.push({value:t,text:t.label||t.instance})}));var n=i.concat(t);return console.log("OPTIONS",n),n}}}),c=r,o=(i("14c3c"),i("2877")),s=Object(o["a"])(c,n,a,!1,null,null,null);e["default"]=s.exports},4160:function(t,e,i){"use strict";var n=i("23e7"),a=i("17c2");n({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"65f0":function(t,e,i){var n=i("861d"),a=i("e8b5"),r=i("b622"),c=r("species");t.exports=function(t,e){var i;return a(t)&&(i=t.constructor,"function"!=typeof i||i!==Array&&!a(i.prototype)?n(i)&&(i=i[c],null===i&&(i=void 0)):i=void 0),new(void 0===i?Array:i)(0===e?0:e)}},"99af":function(t,e,i){"use strict";var n=i("23e7"),a=i("d039"),r=i("e8b5"),c=i("861d"),o=i("7b0b"),s=i("50c4"),l=i("8418"),u=i("65f0"),d=i("1dde"),f=i("b622"),p=i("2d00"),h=f("isConcatSpreadable"),v=9007199254740991,b="Maximum allowed index exceeded",S=p>=51||!a((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),m=d("concat"),L=function(t){if(!c(t))return!1;var e=t[h];return void 0!==e?!!e:r(t)},x=!S||!m;n({target:"Array",proto:!0,forced:x},{concat:function(t){var e,i,n,a,r,c=o(this),d=u(c,0),f=0;for(e=-1,n=arguments.length;e<n;e++)if(r=-1===e?c:arguments[e],L(r)){if(a=s(r.length),f+a>v)throw TypeError(b);for(i=0;i<a;i++,f++)i in r&&l(d,f,r[i])}else{if(f>=v)throw TypeError(b);l(d,f++,r)}return d.length=f,d}})},a640:function(t,e,i){"use strict";var n=i("d039");t.exports=function(t,e){var i=[][t];return!!i&&n((function(){i.call(null,e||function(){throw 1},1)}))}},b727:function(t,e,i){var n=i("0366"),a=i("44ad"),r=i("7b0b"),c=i("50c4"),o=i("65f0"),s=[].push,l=function(t){var e=1==t,i=2==t,l=3==t,u=4==t,d=6==t,f=5==t||d;return function(p,h,v,b){for(var S,m,L=r(p),x=a(L),y=n(h,v,3),g=c(x.length),C=0,T=b||o,w=e?T(p,g):i?T(p,0):void 0;g>C;C++)if((f||C in x)&&(S=x[C],m=y(S,C,L),t))if(e)w[C]=m;else if(m)switch(t){case 3:return!0;case 5:return S;case 6:return C;case 2:s.call(w,S)}else if(u)return!1;return d?-1:l||u?u:w}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},c8f0:function(t,e,i){},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chat.570f5e44.js.map