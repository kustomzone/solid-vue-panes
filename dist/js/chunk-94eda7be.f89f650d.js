(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-94eda7be"],{1276:function(e,t,n){"use strict";var r=n("d784"),i=n("44e7"),o=n("825a"),c=n("1d80"),a=n("4840"),l=n("8aa5"),u=n("50c4"),s=n("14c3"),d=n("9263"),f=n("d039"),p=[].push,h=Math.min,x=4294967295,g=!f((function(){return!RegExp(x,"y")}));r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(c(this)),o=void 0===n?x:n>>>0;if(0===o)return[];if(void 0===e)return[r];if(!i(e))return t.call(r,e,o);var a,l,u,s=[],f=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),h=0,g=new RegExp(e.source,f+"g");while(a=d.call(g,r)){if(l=g.lastIndex,l>h&&(s.push(r.slice(h,a.index)),a.length>1&&a.index<r.length&&p.apply(s,a.slice(1)),u=a[0].length,h=l,s.length>=o))break;g.lastIndex===a.index&&g.lastIndex++}return h===r.length?!u&&g.test("")||s.push(""):s.push(r.slice(h)),s.length>o?s.slice(0,o):s}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var i=c(this),o=void 0==t?void 0:t[e];return void 0!==o?o.call(t,i,n):r.call(String(i),t,n)},function(e,i){var c=n(r,e,this,i,r!==t);if(c.done)return c.value;var d=o(e),f=String(this),p=a(d,RegExp),v=d.unicode,b=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),m=new p(g?d:"^(?:"+d.source+")",b),w=void 0===i?x:i>>>0;if(0===w)return[];if(0===f.length)return null===s(m,f)?[f]:[];var E=0,y=0,R=[];while(y<f.length){m.lastIndex=g?y:0;var I,S=s(m,g?f:f.slice(y));if(null===S||(I=h(u(m.lastIndex+(g?0:y)),f.length))===E)y=l(f,y,v);else{if(R.push(f.slice(E,y)),R.length===w)return R;for(var C=1;C<=S.length-1;C++)if(R.push(S[C]),R.length===w)return R;y=E=I}}return R.push(f.slice(E)),R}]}),!g)},"14c3":function(e,t,n){var r=n("c6b6"),i=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var o=n.call(e,t);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},"1dde":function(e,t,n){var r=n("d039"),i=n("b622"),o=n("2d00"),c=i("species");e.exports=function(e){return o>=51||!r((function(){var t=[],n=t.constructor={};return n[c]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"44e7":function(e,t,n){var r=n("861d"),i=n("c6b6"),o=n("b622"),c=o("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[c])?!!t:"RegExp"==i(e))}},6547:function(e,t,n){var r=n("a691"),i=n("1d80"),o=function(e){return function(t,n){var o,c,a=String(i(t)),l=r(n),u=a.length;return l<0||l>=u?e?"":void 0:(o=a.charCodeAt(l),o<55296||o>56319||l+1===u||(c=a.charCodeAt(l+1))<56320||c>57343?e?a.charAt(l):o:e?a.slice(l,l+2):c-56320+(o-55296<<10)+65536)}};e.exports={codeAt:o(!1),charAt:o(!0)}},8418:function(e,t,n){"use strict";var r=n("c04e"),i=n("9bf2"),o=n("5c6c");e.exports=function(e,t,n){var c=r(t);c in e?i.f(e,c,o(0,n)):e[c]=n}},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9263:function(e,t,n){"use strict";var r=n("ad6d"),i=n("9f7f"),o=RegExp.prototype.exec,c=String.prototype.replace,a=o,l=function(){var e=/a/,t=/b*/g;return o.call(e,"a"),o.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),u=i.UNSUPPORTED_Y||i.BROKEN_CARET,s=void 0!==/()??/.exec("")[1],d=l||s||u;d&&(a=function(e){var t,n,i,a,d=this,f=u&&d.sticky,p=r.call(d),h=d.source,x=0,g=e;return f&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),g=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(h="(?: "+h+")",g=" "+g,x++),n=new RegExp("^(?:"+h+")",p)),s&&(n=new RegExp("^"+h+"$(?!\\s)",p)),l&&(t=d.lastIndex),i=o.call(f?n:d,g),f?i?(i.input=i.input.slice(x),i[0]=i[0].slice(x),i.index=d.lastIndex,d.lastIndex+=i[0].length):d.lastIndex=0:l&&i&&(d.lastIndex=d.global?i.index+i[0].length:t),s&&i&&i.length>1&&c.call(i[0],n,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(i[a]=void 0)})),i}),e.exports=a},"99af":function(e,t,n){"use strict";var r=n("23e7"),i=n("d039"),o=n("e8b5"),c=n("861d"),a=n("7b0b"),l=n("50c4"),u=n("8418"),s=n("65f0"),d=n("1dde"),f=n("b622"),p=n("2d00"),h=f("isConcatSpreadable"),x=9007199254740991,g="Maximum allowed index exceeded",v=p>=51||!i((function(){var e=[];return e[h]=!1,e.concat()[0]!==e})),b=d("concat"),m=function(e){if(!c(e))return!1;var t=e[h];return void 0!==t?!!t:o(e)},w=!v||!b;r({target:"Array",proto:!0,forced:w},{concat:function(e){var t,n,r,i,o,c=a(this),d=s(c,0),f=0;for(t=-1,r=arguments.length;t<r;t++)if(o=-1===t?c:arguments[t],m(o)){if(i=l(o.length),f+i>x)throw TypeError(g);for(n=0;n<i;n++,f++)n in o&&u(d,f,o[n])}else{if(f>=x)throw TypeError(g);u(d,f++,o)}return d.length=f,d}})},"9f7f":function(e,t,n){"use strict";var r=n("d039");function i(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("d039"),o=n("b622"),c=n("9263"),a=n("9112"),l=o("species"),u=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),s=function(){return"$0"==="a".replace(/./,"$0")}(),d=o("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),p=!i((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,d){var h=o(e),x=!i((function(){var t={};return t[h]=function(){return 7},7!=""[e](t)})),g=x&&!i((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return t=!0,null},n[h](""),!t}));if(!x||!g||"replace"===e&&(!u||!s||f)||"split"===e&&!p){var v=/./[h],b=n(h,""[e],(function(e,t,n,r,i){return t.exec===c?x&&!i?{done:!0,value:v.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),m=b[0],w=b[1];r(String.prototype,e,m),r(RegExp.prototype,h,2==t?function(e,t){return w.call(e,this,t)}:function(e){return w.call(e,this)})}d&&a(RegExp.prototype[h],"sham",!0)}},da0b:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"inbox-send"},[e._v(" Modal, "+e._s(e.recipient)+" "),n("b-modal",{attrs:{id:"reply",title:e.title},on:{ok:e.send}},[n("b-list-group",[n("b-input-group",{attrs:{prepend:"Label"}},[n("b-form-input",{model:{value:e.label,callback:function(t){e.label=t},expression:"label"}})],1),n("b-form-textarea",{attrs:{id:"textarea-rows",placeholder:"",rows:"8"},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1)],1)],1)},i=[],o=(n("99af"),n("fb6a"),n("ac1f"),n("1276"),n("96cf"),n("1da1")),c=n("4380"),a=n("00e8"),l=n.n(a),u=window.SolidFileClient;console.log("SFC",u);var s=new u(l.a),d={name:"InboxSend",mixins:[c["a"]],components:{},data:function(){return{title:"",content:""}},methods:{send:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e.webId,e.r_inbox[0],e.label,e.content),n={},n.recipient=e.r_inbox[0],n.date=new Date(Date.now()),n.id=n.date.getTime(),n.sender=e.webId,n.url=n.recipient+n.id+".ttl",n.content=e.content,n.label=e.label,r='\n      @prefix : <#>.\n      @prefix schem: <http://schema.org/>.\n      @prefix sch: <https://schema.org/>.\n      @prefix rd: <http://www.w3.org/2000/01/rdf-schema#>.\n\n      <>\n      a sch:Message;\n      schem:dateSent "'.concat(n.date.toISOString(),'";\n      schem:sender <').concat(n.sender,'>;\n      schem:text "').concat(n.content,'";\n      rd:label "').concat(n.label,'";\n      schem:abstract "this message can be opened with inbox of Popock https://scenaristeur.github.io/solid-vue-panes/".\n      '),console.log(r),t.next=13,s.createFile(n.url,r,"text/turtle");case 13:case"end":return t.stop()}}),t)})))()}},watch:{recipient:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.title="Reply to "+e.split("/").slice(2,3)[0],n.next=3,t.getInbox(e);case 3:t.r_inbox=n.sent;case 4:case"end":return n.stop()}}),n)})))()},oldContent:function(e){console.log(e),this.content=""}},computed:{webId:function(){return this.$store.state.solid.webId},recipient:function(){return this.$store.state.inbox.recipient},label:function(){return this.$store.state.inbox.label},oldContent:function(){return this.$store.state.inbox.oldContent}}},f=d,p=n("2877"),h=Object(p["a"])(f,r,i,!1,null,null,null);t["default"]=h.exports},fb6a:function(e,t,n){"use strict";var r=n("23e7"),i=n("861d"),o=n("e8b5"),c=n("23cb"),a=n("50c4"),l=n("fc6a"),u=n("8418"),s=n("b622"),d=n("1dde"),f=n("ae40"),p=d("slice"),h=f("slice",{ACCESSORS:!0,0:0,1:2}),x=s("species"),g=[].slice,v=Math.max;r({target:"Array",proto:!0,forced:!p||!h},{slice:function(e,t){var n,r,s,d=l(this),f=a(d.length),p=c(e,f),h=c(void 0===t?f:t,f);if(o(d)&&(n=d.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?i(n)&&(n=n[x],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return g.call(d,p,h);for(r=new(void 0===n?Array:n)(v(h-p,0)),s=0;p<h;p++,s++)p in d&&u(r,s,d[p]);return r.length=s,r}})}}]);
//# sourceMappingURL=chunk-94eda7be.f89f650d.js.map