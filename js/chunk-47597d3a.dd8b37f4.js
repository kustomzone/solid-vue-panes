(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47597d3a"],{"057f":function(t,e,r){var n=r("fc6a"),o=r("241c").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?c(t):o(n(t))}},"06c5":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("a630"),r("fb6a"),r("b0c0"),r("d3b7"),r("25f0"),r("3ca3");function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},"25f0":function(t,e,r){"use strict";var n=r("6eeb"),o=r("825a"),i=r("d039"),a=r("ad6d"),c="toString",u=RegExp.prototype,f=u[c],s=i((function(){return"/a/b"!=f.call({source:"a",flags:"b"})})),l=f.name!=c;(s||l)&&n(RegExp.prototype,c,(function(){var t=o(this),e=String(t.source),r=t.flags,n=String(void 0===r&&t instanceof RegExp&&!("flags"in u)?a.call(t):r);return"/"+e+"/"+n}),{unsafe:!0})},"3ca3":function(t,e,r){"use strict";var n=r("6547").charAt,o=r("69f3"),i=r("7dd0"),a="String Iterator",c=o.set,u=o.getterFor(a);i(String,"String",(function(t){c(this,{type:a,string:String(t),index:0})}),(function(){var t,e=u(this),r=e.string,o=e.index;return o>=r.length?{value:void 0,done:!0}:(t=n(r,o),e.index+=t.length,{value:t,done:!1})}))},"4de4":function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").filter,i=r("1dde"),a=r("ae40"),c=i("filter"),u=a("filter");n({target:"Array",proto:!0,forced:!c||!u},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(t,e,r){"use strict";var n=r("0366"),o=r("7b0b"),i=r("9bdd"),a=r("e95a"),c=r("50c4"),u=r("8418"),f=r("35a1");t.exports=function(t){var e,r,s,l,d,b,p=o(t),v="function"==typeof this?this:Array,g=arguments.length,h=g>1?arguments[1]:void 0,m=void 0!==h,y=f(p),S=0;if(m&&(h=n(h,g>2?arguments[2]:void 0,2)),void 0==y||v==Array&&a(y))for(e=c(p.length),r=new v(e);e>S;S++)b=m?h(p[S],S):p[S],u(r,S,b);else for(l=y.call(p),d=l.next,r=new v;!(s=d.call(l)).done;S++)b=m?i(l,h,[s.value,S],!0):s.value,u(r,S,b);return r.length=S,r}},"65f0":function(t,e,r){var n=r("861d"),o=r("e8b5"),i=r("b622"),a=i("species");t.exports=function(t,e){var r;return o(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?n(r)&&(r=r[a],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"746f":function(t,e,r){var n=r("428f"),o=r("5135"),i=r("e538"),a=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||a(e,t,{value:i.f(t)})}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),i=r("d066"),a=r("c430"),c=r("83ab"),u=r("4930"),f=r("fdbf"),s=r("d039"),l=r("5135"),d=r("e8b5"),b=r("861d"),p=r("825a"),v=r("7b0b"),g=r("fc6a"),h=r("c04e"),m=r("5c6c"),y=r("7c73"),S=r("df75"),w=r("241c"),k=r("057f"),O=r("7418"),x=r("06cf"),L=r("9bf2"),j=r("d1e7"),A=r("9112"),T=r("6eeb"),_=r("5692"),C=r("f772"),P=r("d012"),E=r("90e3"),R=r("b622"),M=r("e538"),N=r("746f"),B=r("d44e"),I=r("69f3"),F=r("b727").forEach,V=C("hidden"),D="Symbol",G="prototype",$=R("toPrimitive"),H=I.set,J=I.getterFor(D),q=Object[G],U=o.Symbol,Q=i("JSON","stringify"),W=x.f,z=L.f,K=k.f,X=j.f,Y=_("symbols"),Z=_("op-symbols"),tt=_("string-to-symbol-registry"),et=_("symbol-to-string-registry"),rt=_("wks"),nt=o.QObject,ot=!nt||!nt[G]||!nt[G].findChild,it=c&&s((function(){return 7!=y(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=W(q,e);n&&delete q[e],z(t,e,r),n&&t!==q&&z(q,e,n)}:z,at=function(t,e){var r=Y[t]=y(U[G]);return H(r,{type:D,tag:t,description:e}),c||(r.description=e),r},ct=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof U},ut=function(t,e,r){t===q&&ut(Z,e,r),p(t);var n=h(e,!0);return p(r),l(Y,n)?(r.enumerable?(l(t,V)&&t[V][n]&&(t[V][n]=!1),r=y(r,{enumerable:m(0,!1)})):(l(t,V)||z(t,V,m(1,{})),t[V][n]=!0),it(t,n,r)):z(t,n,r)},ft=function(t,e){p(t);var r=g(e),n=S(r).concat(pt(r));return F(n,(function(e){c&&!lt.call(r,e)||ut(t,e,r[e])})),t},st=function(t,e){return void 0===e?y(t):ft(y(t),e)},lt=function(t){var e=h(t,!0),r=X.call(this,e);return!(this===q&&l(Y,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(Y,e)||l(this,V)&&this[V][e])||r)},dt=function(t,e){var r=g(t),n=h(e,!0);if(r!==q||!l(Y,n)||l(Z,n)){var o=W(r,n);return!o||!l(Y,n)||l(r,V)&&r[V][n]||(o.enumerable=!0),o}},bt=function(t){var e=K(g(t)),r=[];return F(e,(function(t){l(Y,t)||l(P,t)||r.push(t)})),r},pt=function(t){var e=t===q,r=K(e?Z:g(t)),n=[];return F(r,(function(t){!l(Y,t)||e&&!l(q,t)||n.push(Y[t])})),n};if(u||(U=function(){if(this instanceof U)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=E(t),r=function(t){this===q&&r.call(Z,t),l(this,V)&&l(this[V],e)&&(this[V][e]=!1),it(this,e,m(1,t))};return c&&ot&&it(q,e,{configurable:!0,set:r}),at(e,t)},T(U[G],"toString",(function(){return J(this).tag})),T(U,"withoutSetter",(function(t){return at(E(t),t)})),j.f=lt,L.f=ut,x.f=dt,w.f=k.f=bt,O.f=pt,M.f=function(t){return at(R(t),t)},c&&(z(U[G],"description",{configurable:!0,get:function(){return J(this).description}}),a||T(q,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:U}),F(S(rt),(function(t){N(t)})),n({target:D,stat:!0,forced:!u},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=U(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!u,sham:!c},{create:st,defineProperty:ut,defineProperties:ft,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:bt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:s((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(v(t))}}),Q){var vt=!u||s((function(){var t=U();return"[null]"!=Q([t])||"{}"!=Q({a:t})||"{}"!=Q(Object(t))}));n({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,r){var n,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(n=e,(b(e)||void 0!==t)&&!ct(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ct(e))return e}),o[1]=e,Q.apply(null,o)}})}U[G][$]||A(U[G],$,U[G].valueOf),B(U,D),P[V]=!0},a630:function(t,e,r){var n=r("23e7"),o=r("4df4"),i=r("1c7e"),a=!i((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:a},{from:o})},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},b727:function(t,e,r){var n=r("0366"),o=r("44ad"),i=r("7b0b"),a=r("50c4"),c=r("65f0"),u=[].push,f=function(t){var e=1==t,r=2==t,f=3==t,s=4==t,l=6==t,d=5==t||l;return function(b,p,v,g){for(var h,m,y=i(b),S=o(y),w=n(p,v,3),k=a(S.length),O=0,x=g||c,L=e?x(b,k):r?x(b,0):void 0;k>O;O++)if((d||O in S)&&(h=S[O],m=w(h,O,y),t))if(e)L[O]=m;else if(m)switch(t){case 3:return!0;case 5:return h;case 6:return O;case 2:u.call(L,h)}else if(s)return!1;return l?-1:f||s?s:L}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},b85c:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("a4d3"),r("e01a"),r("d28b"),r("d3b7"),r("3ca3"),r("ddb0");var n=r("06c5");function o(t,e){var r;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=Object(n["a"])(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return c=t.done,t},e:function(t){u=!0,a=t},f:function(){try{c||null==r["return"]||r["return"]()}finally{if(u)throw a}}}}},c975:function(t,e,r){"use strict";var n=r("23e7"),o=r("4d64").indexOf,i=r("a640"),a=r("ae40"),c=[].indexOf,u=!!c&&1/[1].indexOf(1,-0)<0,f=i("indexOf"),s=a("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:u||!f||!s},{indexOf:function(t){return u?c.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})},d28b:function(t,e,r){var n=r("746f");n("iterator")},ddb0:function(t,e,r){var n=r("da84"),o=r("fdbc"),i=r("e260"),a=r("9112"),c=r("b622"),u=c("iterator"),f=c("toStringTag"),s=i.values;for(var l in o){var d=n[l],b=d&&d.prototype;if(b){if(b[u]!==s)try{a(b,u,s)}catch(v){b[u]=s}if(b[f]||a(b,f,l),o[l])for(var p in i)if(b[p]!==i[p])try{a(b,p,i[p])}catch(v){b[p]=i[p]}}}},dfa2:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bookmarks-list container"},[r("b-button",{attrs:{variant:"outline-info"},on:{click:function(e){return t.updateBm()}}},[t._v("Back to "+t._s(t.mode)+"/bookmarks/")]),r("br"),r("h5",[t._v("Bookmarks :")]),r("div",[r("b-card-group",{attrs:{columns:""}},t._l(t.bookmarks,(function(e){return r("b-card",{key:e.id,attrs:{"img-src":e.img,"img-alt":"Image","img-top":""}},[r("b-card-title",[t._v(t._s(e.label))]),r("b-card-text",[t._v(" "+t._s(e.content)+" ")]),r("b-card-text",{staticClass:"small text-muted"},[r("a",{attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.url))])])],1)})),1)],1),r("h5",[t._v("Categories :")]),t._l(t.bm.folders,(function(e){return r("b-button",{key:e.url,staticClass:"m-1",attrs:{variant:"info"},on:{click:function(r){return t.updateBm(e.url)}}},[t._v(t._s(e.name))])}))],2)},o=[],i=(r("4de4"),r("c975"),r("b85c")),a=(r("96cf"),r("1da1")),c=r("00e8"),u=r.n(c),f=r("4d8d"),s=r("6dc1"),l=window.SolidFileClient,d=new l(u.a),b={name:"BookmarksList",components:{},props:["mode"],data:function(){return{bm:{files:[],folders:[]},bookmarks:[]}},mounted:function(){this.path=this.$store.state.solid.storage+this.mode+"/bookmarks/",this.updateBm()},watch:{path:function(t){console.log("path",t),this.updateBm()},storage:function(t){this.path=t+this.mode+"/bookmarks/"}},methods:{updateBm:function(){var t=arguments,e=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var n,o,a,c,u,l,b,p,v;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t.length>0&&void 0!==t[0]?t[0]:e.path,console.log("path updated",n),o={files:[],folders:[]},a=[],console.log(o.files.length),r.prev=5,r.next=8,d.readFolder(n);case 8:if(o=r.sent,!(o.files.length>0)){r.next=17;break}return r.next=12,Object(f["b"])(o.files[0].url);case 12:c=r.sent,u=c.findSubjects(),u=u.filter(e.onlyUnique),l=Object(i["a"])(u);try{for(l.s();!(b=l.n()).done;)p=b.value,v={id:p.asRef(),content:p.getLiteral(s["g"].content),label:p.getLiteral(s["e"].label),url:p.getNodeRef("http://www.w3.org/2002/01/bookmark#recalls")},v.img="//image.thum.io/get/width/355/crop/600/"+v.url,console.log(v),a.unshift(v)}catch(g){l.e(g)}finally{l.f()}case 17:r.next=21;break;case 19:r.prev=19,r.t0=r["catch"](5);case 21:e.bm=o,e.bookmarks=a;case 23:case"end":return r.stop()}}),r,null,[[5,19]])})))()},onlyUnique:function(t,e,r){return r.indexOf(t)===e}},computed:{storage:function(){return this.$store.state.solid.storage}}},p=b,v=r("2877"),g=Object(v["a"])(p,n,o,!1,null,null,null);e["default"]=g.exports},e01a:function(t,e,r){"use strict";var n=r("23e7"),o=r("83ab"),i=r("da84"),a=r("5135"),c=r("861d"),u=r("9bf2").f,f=r("e893"),s=i.Symbol;if(o&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new s(t):void 0===t?s():s(t);return""===t&&(l[e]=!0),e};f(d,s);var b=d.prototype=s.prototype;b.constructor=d;var p=b.toString,v="Symbol(test)"==String(s("test")),g=/^Symbol\((.*)\)[^)]+$/;u(b,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=p.call(t);if(a(l,t))return"";var r=v?e.slice(7,-1):e.replace(g,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,r){var n=r("b622");e.f=n},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-47597d3a.dd8b37f4.js.map