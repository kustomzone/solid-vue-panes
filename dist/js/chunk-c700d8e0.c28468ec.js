(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c700d8e0"],{"60b0":function(e,t,n){"use strict";var r=n("c976"),o=n.n(r);o.a},a434:function(e,t,n){"use strict";var r=n("23e7"),o=n("23cb"),i=n("a691"),a=n("50c4"),s=n("7b0b"),l=n("65f0"),c=n("8418"),d=n("1dde"),u=n("ae40"),f=d("splice"),p=u("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,g=Math.min,b=9007199254740991,m="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!f||!p},{splice:function(e,t){var n,r,d,u,f,p,v=s(this),w=a(v.length),k=o(e,w),x=arguments.length;if(0===x?n=r=0:1===x?(n=0,r=w-k):(n=x-2,r=g(h(i(t),0),w-k)),w+n-r>b)throw TypeError(m);for(d=l(v,r),u=0;u<r;u++)f=k+u,f in v&&c(d,u,v[f]);if(d.length=r,n<r){for(u=k;u<w-r;u++)f=u+r,p=u+n,f in v?v[p]=v[f]:delete v[p];for(u=w;u>w-r+n;u--)delete v[u-1]}else if(n>r)for(u=w-r;u>k;u--)f=u+r-1,p=u+n-1,f in v?v[p]=v[f]:delete v[p];for(u=0;u<n;u++)v[u+k]=arguments[u+2];return v.length=w-r+n,d}})},b803:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modele-view"},[n("small",[e._v(" File: "),n("a",{attrs:{href:e.file.url,target:"_blank"}},[e._v(e._s(e.file.url))]),n("br"),e._v(" Node: "+e._s(e.node.label)),n("br")]),n("b-input",{attrs:{placeholder:"filename without spaces or any exotic char"},model:{value:e.filename,callback:function(t){e.filename=t},expression:"filename"}}),n("b-button",{on:{click:e.create}},[e._v("New")]),n("b-form-checkbox",{staticClass:"m-2",attrs:{id:"checkbox-1",name:"checkbox-1",value:"public_write","unchecked-value":"private_write",checked:""},model:{value:e.privacy,callback:function(t){e.privacy=t},expression:"privacy"}},[e._v(" Anyone can amend this file ")]),n("b-button",{attrs:{size:"sm",variant:"warning"},on:{click:e.clear}},[e._v("Clear")]),n("b-button",{attrs:{size:"sm",variant:"success"},on:{click:e.copy}},[e._v("Copy")]),n("network",{ref:"network",staticClass:"wrapper",attrs:{nodes:e.nodes,edges:e.edges,options:e.options},on:{select:function(t){return e.networkEvent("select")},"select-node":function(t){return e.networkEvent("selectNode")},"select-edge":function(t){return e.networkEvent("selectEdge")}}}),n("NodeModal",{on:{ok:e.saveNode},model:{value:e.node,callback:function(t){e.node=t},expression:"node"}}),n("EdgeModal",{on:{ok:e.saveEdge},model:{value:e.edge,callback:function(t){e.edge=t},expression:"edge"}})],1)},o=[],i=(n("4de4"),n("4160"),n("c975"),n("a15b"),n("d81d"),n("a434"),n("b0c0"),n("d3b7"),n("ac1f"),n("8a79"),n("1276"),n("159b"),n("53ca")),a=(n("96cf"),n("1da1")),s=n("4d8d"),l=n("6dc1"),c=(n("38b4"),n("93ef")),d=n("234f"),u=n("1404"),f=n("fd2a"),p={name:"EditorNetwork",mixins:[d["a"],u["a"],f["a"]],components:{NodeModal:function(){return n.e("chunk-fad8e306").then(n.bind(null,"b7ab"))},EdgeModal:function(){return n.e("chunk-4e25104e").then(n.bind(null,"4e1d"))}},data:function(){var e=this;return{filename:"",tmp_file:null,triples:[],node:{},edge:{},net:{},privacy:"public_write",clipDispo:!1,nodes:[{id:1,label:"circle",shape:"circle"},{id:2,label:"ellipse",shape:"ellipse"},{id:3,label:"database",shape:"database"},{id:4,label:"box",shape:"box"},{id:5,label:"diamond",shape:"diamond"},{id:6,label:"dot",shape:"dot"},{id:7,label:"square",shape:"square"},{id:8,label:"triangle",shape:"triangle"}],edges:[{from:1,to:2},{from:2,to:3},{from:2,to:4},{from:2,to:5},{from:5,to:6},{from:5,to:7},{from:6,to:8}],options1:{nodes:{borderWidth:4},edges:{color:"lightgray"},manipulation:{addNode:!0,addEdge:!0,editNode:!0,editEdge:!0,deleteNode:!0,deleteEdge:!0}},options:{locale:navigator.language,nodes:{borderWidth:1},edges:{arrows:"to",color:"red",scaling:{label:!0},smooth:!0},interaction:{navigationButtons:!0,keyboard:!0},manipulation:{enabled:!0,initiallyActive:!0,addNode:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(n,r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r(),null!=e.tmp_file&&(e.file=e.tmp_file),n.id=e.file.url+"#"+n.id,e.editNode(n,r);case 4:case"end":return t.stop()}}),t)})));function n(e,n){return t.apply(this,arguments)}return n}(),editNode:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(n,r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r(),e.editNode(n,r);case 2:case"end":return t.stop()}}),t)})));function n(e,n){return t.apply(this,arguments)}return n}(),addEdge:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(n,r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r(),e.addEdge(n,r);case 2:case"end":return t.stop()}}),t)})));function n(e,n){return t.apply(this,arguments)}return n}(),editEdge:{editWithoutDrag:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(n,r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.editWithoutDrag(n,r);case 1:case"end":return t.stop()}}),t)})));function n(e,n){return t.apply(this,arguments)}return n}()}}}}},created:function(){return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},mounted:function(){this.network=this.$refs.network,console.log(this.network),this.network.setOptions({locale:navigator.language,nodes:{borderWidth:1},edges:{arrows:"to",color:"red",scaling:{label:!0},smooth:!0},interaction:{navigationButtons:!0}}),this.file=this.$store.state.solid.file},methods:{editWithoutDrag:function(e,t){t(),this.editEdge(e,t)},copy:function(){var e="https://scenaristeur.github.io/solid-vue-panes/?url="+this.file.url,t=this;console.log(e),navigator.clipboard.writeText(e).then((function(){t.makeToast("The url is in your clipboard ;-)",e+".               Use Ctrl+V to share it","success")}),(function(){console.log("clipERROR",e),t.makeToast("Houston, we've got a problem with the clipboard ;-(",e,"warning")}))},saveNode:function(e){var t=this.nodes.map((function(e){return e.id})).indexOf(e.id);t>-1?(this.nodes.splice(t,1),this.nodes[t].label=e.label):this.nodes.push(e)},writeEdgeToFile:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var r,o,i,a,c,d,u,f,p;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return null!=t.tmp_file&&(t.file=t.tmp_file),r=t.nodes.filter((function(t){return t.id==e.from})),o=t.nodes.filter((function(t){return t.id==e.to})),i=r[0].id.split("#")[1],a=o[0].id.split("#")[1],c=new Date,d=c.toISOString(),n.next=9,Object(s["b"])(t.file.url);case 9:u=n.sent,f=u.addSubject({identifier:i}),f.addString(l["e"].label,r[0].label),f.addString(l["a"].modified,d),f.addRef(l["b"].maker,t.webId),f.addRef(t.file.url+"#"+e.label,o[0].id),p=u.addSubject({identifier:a}),p.addString(l["e"].label,o[0].label),u.save();case 18:case"end":return n.stop()}}),n)})))()},saveEdge:function(e){var t=this.edges.map((function(e){return e.id})).indexOf(e.id);t>-1?this.edges[t].label=e.label:(this.edges.push(e),this.writeEdgeToFile(e))},create:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,r,o,i,a,d,u,f,p,h,g,b,m;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.clear(),console.log(e.privacy),e.tmp_file={},e.filename=e.filename.split(" ").join("_"),e.tmp_file.name=e.filename.endsWith(".ttl")?e.filename:e.filename+".ttl",e.tmp_file.url=e.folder.url+e.tmp_file.name,e.thisNode={id:e.tmp_file.url+"#this",label:e.filename},e.nodes.push(e.thisNode),n={},r=!1,t.prev=10,t.next=13,Object(s["b"])(e.tmp_file.url);case 13:n=t.sent,r=!0,t.next=23;break;case 17:return t.prev=17,t.t0=t["catch"](10),t.next=21,Object(s["a"])(e.tmp_file.url);case 21:n=t.sent,r=!1;case 23:return o=new Date,i=o.toISOString(),a=n.addSubject({identifier:"this"}),0==r?(d=e.thisNode.label,a.addString(l["e"].label,d),a.addString(l["a"].created,i),a.addRef(l["d"].type,e.tmp_file.url+"#Network"),console.log("file created",e.tmp_file.url)):(a.addString(l["a"].modified,i),console.log("file modified",e.tmp_file.url)),a.addRef(l["b"].maker,e.webId),console.log("one"),t.next=31,n.save();case 31:if(u=t.sent,console.log("two",u),"public_write"!=e.privacy){t.next=60;break}return console.log(e.tmp_file.url),t.next=37,Object(c["g"])(e.tmp_file.url);case 37:if(f=t.sent,console.log(f),Object(c["o"])(f)){t.next=48;break}if(Object(c["m"])(f)){t.next=42;break}throw new Error("The current user does not have permission to change access rights to this Resource.");case 42:if(Object(c["n"])(f)){t.next=44;break}throw new Error("The current user does not have permission to see who currently has access to this Resource.");case 44:p=Object(c["a"])(f),console.log("create"),t.next=50;break;case 48:p=Object(c["e"])(f),console.log("get");case 50:return console.log("acl",p),h=Object(c["r"])(p,e.webId,{read:!0,append:!0,write:!0,control:!0}),t.next=54,Object(c["p"])(f,h);case 54:return g=t.sent,b=Object(c["t"])(p,{read:!0,append:!0,write:!1,control:!1}),t.next=58,Object(c["p"])(f,b);case 58:m=t.sent,console.log(g,m);case 60:e.createActivity();case 61:case"end":return t.stop()}}),t,null,[[10,17]])})))()},createActivity:function(){console.log("createActivity"),this.net.displayType="Network",this.net.types=["Task","http://www.w3.org/ns/ldp#Resource"],this.net.path=this.tmp_file.url,console.log(this.net),this.activity={actor:{name:this.$store.state.solid.webId},type:"Create",summary:"",object:{name:this.thisNode.label,url:this.tmp_file.url,type:"Network"}},this.sendActivity()},clear:function(){this.nodes=[],this.edges=[]},update:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.triples=[],console.log(e.file.url),void 0==e.file.url||!e.file.url.endsWith(".ttl")&&!e.file.url.endsWith("card")){t.next=11;break}return t.next=5,Object(s["b"])(e.file.url);case 5:n=t.sent,console.log("fileDoc",n),e.triples=n.getTriples(),console.log(e.triples),t.next=12;break;case 11:console.log("TODO",e.file.url);case 12:case"end":return t.stop()}}),t)})))()},networkEvent:function(e,t){console.log(e,t)},addInterests:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var r,o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,solid.data[e].storage;case 2:return r=n.sent,o=r+"public/popock/profile.ttl",n.prev=4,n.next=7,Object(s["b"])(o);case 7:return t.profileDoc=n.sent,n.next=10,t.profileDoc.getSubject(o+"#me");case 10:return i=n.sent,n.next=13,i.getAllLiterals(l["b"].topic_interest);case 13:t.interests=n.sent,t.interests.forEach((function(n){t.$refs.network.nodes.push({id:n,label:n,shape:"triangle",color:"green"}),t.$refs.network.edges.push({from:e,to:n,label:"foaf:topic_interest"})})),n.next=19;break;case 17:n.prev=17,n.t0=n["catch"](4);case 19:case"end":return n.stop()}}),n,null,[[4,17]])})))()},addTriplet:function(e){var t=this.colorize(e.subject.id),n=this.lastPart(e.subject.id),r={id:e.subject.id,label:n,shape:"star",color:"rgba("+t.red+", "+t.green+", "+t.blue+",0.5)"};this.addOrNothingNode(r);var o=this.colorize(e.object.id),i=this.lastPart(e.object.id),a={id:e.object.id,label:i,shape:"box",color:"rgba("+o.red+", "+o.green+", "+o.blue+",0.5)"};this.addOrNothingNode(a);var s=this.lastPart(e.predicate.id),l={from:r.id,to:a.id,label:s};this.edges.push(l)},editNode:function(e){this.node=e,this.$bvModal.show("node-popup")},addEdge:function(e,t){if(this.edge=e,e.from==e.to){var n=confirm("Do you want to connect the node to itself?");if(1!=n)return void t(null)}this.editEdgeWithoutDrag(e,t)},editEdge:function(e,t){this.editEdgeWithoutDrag(e,t)},editEdgeWithoutDrag:function(e,t){this.edge=e,this.$bvModal.show("edge-popup"),t()},clearNodePopUp:function(){document.getElementById("node-saveButton").onclick=null,document.getElementById("node-cancelButton").onclick=null,document.getElementById("node-popUp").style.display="none"},cancelNodeEdit:function(e){this.clearNodePopUp(),e(null)},saveNodeData:function(e,t){e.label=document.getElementById("node-label").value,this.clearNodePopUp(),t(e)},clearEdgePopUp:function(){document.getElementById("edge-saveButton").onclick=null,document.getElementById("edge-cancelButton").onclick=null,document.getElementById("edge-popUp").style.display="none"},cancelEdgeEdit:function(e){this.clearEdgePopUp(),e(null)},saveEdgeData:function(e,t){"object"===Object(i["a"])(e.to)&&(e.to=e.to.id),"object"===Object(i["a"])(e.from)&&(e.from=e.from.id),e.label=document.getElementById("edge-label").value,this.clearEdgePopUp(),t(e)}},watch:{node:function(){},file:function(){this.update()},friends:function(e){var t=this;e.forEach((function(e){t.$refs.network.nodes.push({id:e,label:e,shape:"dot",color:"yellow"}),t.$refs.network.edges.push({from:t.webId,to:e,label:"foaf:friend"}),t.addInterests(e)}))},webId:function(e){this.$refs.network.nodes.push({id:e,label:e}),this.addInterests(e)},triples:function(){var e=this;this.triples.length>0&&this.triples.forEach((function(t){e.addTriplet(t)}))}},computed:{folder:function(){return this.$store.state.solid.folder},profile_url:{get:function(){return this.$store.state.solid.storage+"public/popock/profile.ttl"},set:function(){}},storage:{get:function(){return this.$store.state.solid.storage},set:function(){}},webId:{get:function(){return this.$store.state.solid.webId},set:function(){}},friends:{get:function(){return this.$store.state.solid.friends},set:function(){}},file:{get:function(){return this.$store.state.solid.file},set:function(e){return this.$store.commit("solid/setFile",e)}}}},h=p,g=(n("60b0"),n("2877")),b=Object(g["a"])(h,r,o,!1,null,null,null);t["default"]=b.exports},c976:function(e,t,n){},d81d:function(e,t,n){"use strict";var r=n("23e7"),o=n("b727").map,i=n("1dde"),a=n("ae40"),s=i("map"),l=a("map");r({target:"Array",proto:!0,forced:!s||!l},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-c700d8e0.c28468ec.js.map