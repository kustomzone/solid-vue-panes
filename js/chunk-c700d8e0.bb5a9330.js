(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c700d8e0"],{"60b0":function(e,t,n){"use strict";var i=n("c976"),r=n.n(i);r.a},a434:function(e,t,n){"use strict";var i=n("23e7"),r=n("23cb"),o=n("a691"),a=n("50c4"),s=n("7b0b"),l=n("65f0"),c=n("8418"),d=n("1dde"),u=n("ae40"),f=d("splice"),p=u("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,b=Math.min,m=9007199254740991,g="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!f||!p},{splice:function(e,t){var n,i,d,u,f,p,v=s(this),w=a(v.length),k=r(e,w),_=arguments.length;if(0===_?n=i=0:1===_?(n=0,i=w-k):(n=_-2,i=b(h(o(t),0),w-k)),w+n-i>m)throw TypeError(g);for(d=l(v,i),u=0;u<i;u++)f=k+u,f in v&&c(d,u,v[f]);if(d.length=i,n<i){for(u=k;u<w-i;u++)f=u+i,p=u+n,f in v?v[p]=v[f]:delete v[p];for(u=w;u>w-i+n;u--)delete v[u-1]}else if(n>i)for(u=w-i;u>k;u--)f=u+i-1,p=u+n-1,f in v?v[p]=v[f]:delete v[p];for(u=0;u<n;u++)v[u+k]=arguments[u+2];return v.length=w-i+n,d}})},b803:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modele-view"},[e._v(" Reprendre network3 "),n("small",[e._v(" File: "),n("a",{attrs:{href:e.file.url,target:"_blank"}},[e._v(e._s(e.file.url))]),n("br"),e._v(" Node: "+e._s(e.node.label)),n("br")]),n("b-input",{attrs:{placeholder:"filename without spaces or any exotic char"},model:{value:e.filename,callback:function(t){e.filename=t},expression:"filename"}}),n("b-button",{on:{click:e.create}},[e._v("New")]),n("b-form-checkbox",{staticClass:"m-2",attrs:{id:"checkbox-1",name:"checkbox-1",value:"public_write","unchecked-value":"private_write",checked:""},model:{value:e.privacy,callback:function(t){e.privacy=t},expression:"privacy"}},[e._v(" Anyone can amend this file ")]),n("b-button",{attrs:{size:"sm",variant:"warning"},on:{click:e.clear}},[e._v("Clear")]),n("b-button",{attrs:{size:"sm",variant:"success"},on:{click:e.copy}},[e._v("Copy")]),n("network",{ref:"network",staticClass:"wrapper",attrs:{nodes:e.nodes,edges:e.edges,options:e.options},on:{select:function(t){return e.networkEvent("select")},"select-node":function(t){return e.networkEvent("selectNode")},"select-edge":function(t){return e.networkEvent("selectEdge")}}}),n("NodeModal",{on:{ok:e.saveNode},model:{value:e.node,callback:function(t){e.node=t},expression:"node"}}),n("EdgeModal",{on:{ok:e.saveEdge},model:{value:e.edge,callback:function(t){e.edge=t},expression:"edge"}})],1)},r=[],o=(n("4de4"),n("c975"),n("a15b"),n("d81d"),n("a434"),n("b0c0"),n("d3b7"),n("ac1f"),n("8a79"),n("1276"),n("96cf"),n("1da1")),a=(n("38b4"),n("4d8d")),s=n("6dc1"),l=n("93ef"),c=n("234f"),d=n("1404"),u=n("fd2a"),f={name:"EditorNetwork",components:{NodeModal:function(){return n.e("chunk-fad8e306").then(n.bind(null,"b7ab"))},EdgeModal:function(){return n.e("chunk-4e25104e").then(n.bind(null,"4e1d"))}},mixins:[c["a"],d["a"],u["a"]],data:function(){var e=this;return{self:this,node:{label:"node_label"},edge:{},filename:"new_graph.ttl",privacy:"public_write",net:{},nodes:[{id:1,label:"circle",shape:"circle"},{id:2,label:"ellipse",shape:"ellipse"},{id:3,label:"database",shape:"database"},{id:4,label:"box",shape:"box"},{id:5,label:"diamond",shape:"diamond"},{id:6,label:"dot",shape:"dot"},{id:7,label:"square",shape:"square"},{id:8,label:"triangle",shape:"triangle"}],edges:[{from:1,to:2},{from:2,to:3},{from:2,to:4},{from:2,to:5},{from:5,to:6},{from:5,to:7},{from:6,to:8}],options:{manipulation:{enabled:!0,initiallyActive:!0,addNode:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(n,i){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.addNode(n,i);case 1:case"end":return t.stop()}}),t)})));function n(e,n){return t.apply(this,arguments)}return n}(),editNode:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(n,i){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.editNode(n,i);case 1:case"end":return t.stop()}}),t)})));function n(e,n){return t.apply(this,arguments)}return n}(),addEdge:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(n,i){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.addEdge(n,i);case 1:case"end":return t.stop()}}),t)})));function n(e,n){return t.apply(this,arguments)}return n}(),editEdge:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(n,i){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.editEdge(n,i);case 1:case"end":return t.stop()}}),t)})));function n(e,n){return t.apply(this,arguments)}return n}()}}}},created:function(){this.folder=this.$store.state.solid.folder},methods:{addNode:function(e,t){null!=this.tmp_file&&(this.file=this.tmp_file),e.id=this.file.url+"#"+e.id,e.label="",this.editNode(e,t)},editNode:function(e,t){console.log("EDIT NODE",e,t),this.node=e,this.$bvModal.show("node-popup")},addEdge:function(e,t){if(console.log("add edge",e,t),this.edge=e,e.from==e.to){var n=confirm("Do you want to connect the node to itself?");if(1!=n)return void t(null)}this.editEdgeWithoutDrag(e,t)},editEdge:function(e,t){console.log("EDIT edge",e,t),this.editEdgeWithoutDrag(e,t)},editEdgeWithoutDrag:function(e,t){this.edge=e,this.$bvModal.show("edge-popup"),t()},saveNode:function(e){console.log("saveNode",e);var t=this.nodes.map((function(e){return e.id})).indexOf(e.id);t>-1?(this.nodes.splice(t,1),this.nodes[t].label=e.label):this.nodes.push(e)},saveEdge:function(e){var t=this.edges.map((function(e){return e.id})).indexOf(e.id);t>-1?this.edges[t].label=e.label:(this.edges.push(e),this.writeEdgeToFile(e))},writeEdgeToFile:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var i,r,o,l,c,d,u,f,p;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return null!=t.tmp_file&&(t.file=t.tmp_file),i=t.nodes.filter((function(t){return t.id==e.from})),r=t.nodes.filter((function(t){return t.id==e.to})),o=i[0].id.split("#")[1],l=r[0].id.split("#")[1],c=new Date,d=c.toISOString(),n.next=9,Object(a["b"])(t.file.url);case 9:u=n.sent,f=u.addSubject({identifier:o}),f.addString(s["e"].label,i[0].label),f.addString(s["a"].modified,d),f.addRef(s["b"].maker,t.webId),f.addRef(t.file.url+"#"+e.label,r[0].id),p=u.addSubject({identifier:l}),p.addString(s["e"].label,r[0].label),u.save();case 18:case"end":return n.stop()}}),n)})))()},networkEvent:function(e,t){console.log(e,t)},copy:function(){console.log("copy")},create:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,i,r,o,c,d,u,f,p,h,b,m,g;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.clear(),console.log(e.privacy),e.tmp_file={},e.filename=e.filename.split(" ").join("_"),e.tmp_file.name=e.filename.endsWith(".ttl")?e.filename:e.filename+".ttl",e.tmp_file.url=e.folder.url+e.tmp_file.name,e.thisNode={id:e.tmp_file.url+"#this",label:e.filename},e.nodes.push(e.thisNode),n={},i=!1,t.prev=10,t.next=13,Object(a["b"])(e.tmp_file.url);case 13:n=t.sent,i=!0,t.next=23;break;case 17:return t.prev=17,t.t0=t["catch"](10),t.next=21,Object(a["a"])(e.tmp_file.url);case 21:n=t.sent,i=!1;case 23:return r=new Date,o=r.toISOString(),c=n.addSubject({identifier:"this"}),0==i?(d=e.thisNode.label,c.addString(s["e"].label,d),c.addString(s["a"].created,o),c.addRef(s["d"].type,e.tmp_file.url+"#Network"),console.log("file created",e.tmp_file.url)):(c.addString(s["a"].modified,o),console.log("file modified",e.tmp_file.url)),c.addRef(s["b"].maker,e.webId),console.log("one"),t.next=31,n.save();case 31:if(u=t.sent,console.log("two",u),"public_write"!=e.privacy){t.next=60;break}return console.log(e.tmp_file.url),t.next=37,Object(l["g"])(e.tmp_file.url);case 37:if(f=t.sent,console.log(f),Object(l["o"])(f)){t.next=48;break}if(Object(l["m"])(f)){t.next=42;break}throw new Error("The current user does not have permission to change access rights to this Resource.");case 42:if(Object(l["n"])(f)){t.next=44;break}throw new Error("The current user does not have permission to see who currently has access to this Resource.");case 44:p=Object(l["a"])(f),console.log("create"),t.next=50;break;case 48:p=Object(l["e"])(f),console.log("get");case 50:return console.log("acl",p),h=Object(l["r"])(p,e.webId,{read:!0,append:!0,write:!0,control:!0}),t.next=54,Object(l["p"])(f,h);case 54:return b=t.sent,m=Object(l["t"])(p,{read:!0,append:!0,write:!1,control:!1}),t.next=58,Object(l["p"])(f,m);case 58:g=t.sent,console.log(b,g);case 60:e.createActivity();case 61:case"end":return t.stop()}}),t,null,[[10,17]])})))()},createActivity:function(){console.log("createActivity"),this.net.displayType="Network",this.net.types=["Task","http://www.w3.org/ns/ldp#Resource"],this.net.path=this.tmp_file.url,console.log(this.net),this.activity={actor:{name:this.$store.state.solid.webId},type:"Create",summary:"",object:{name:this.thisNode.label,url:this.tmp_file.url,type:"Network"}},this.sendActivity()},clear:function(){this.nodes=[],this.edges=[]}},watch:{},computed:{folder:{get:function(){return this.$store.state.solid.folder},set:function(){}},profile_url:{get:function(){return this.$store.state.solid.storage+"public/popock/profile.ttl"},set:function(){}},storage:{get:function(){return this.$store.state.solid.storage},set:function(){}},webId:{get:function(){return this.$store.state.solid.webId},set:function(){}},friends:{get:function(){return this.$store.state.solid.friends},set:function(){}},file:{get:function(){return this.$store.state.solid.file},set:function(e){return this.$store.commit("solid/setFile",e)}}}},p=f,h=(n("60b0"),n("2877")),b=Object(h["a"])(p,i,r,!1,null,null,null);t["default"]=b.exports},c976:function(e,t,n){},d81d:function(e,t,n){"use strict";var i=n("23e7"),r=n("b727").map,o=n("1dde"),a=n("ae40"),s=o("map"),l=a("map");i({target:"Array",proto:!0,forced:!s||!l},{map:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-c700d8e0.bb5a9330.js.map