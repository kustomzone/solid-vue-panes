(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-003eab00"],{"02b0":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modele-view"},[0==t.active?r("b-button",{on:{click:t.newOffer}},[t._v("New Offer")]):r("div",[r("hr"),r("h4",[t._v("Offering")]),t._v(" "),r("a",{attrs:{href:"http://purl.org/goodrelations/v1#Offering",target:"_blank"}},[t._v("? "),r("small",[t._v("Good Relations")])]),r("b-input-group",{attrs:{prepend:"Business Entity"}},[r("b-form-input",{model:{value:t.offer["gr:businessEntity"],callback:function(e){t.$set(t.offer,"gr:businessEntity",e)},expression:"offer['gr:businessEntity']"}})],1),r("b-input-group",{attrs:{prepend:"Business Function"}},[r("b-form-select",{attrs:{options:t.businessFunctionOptions},model:{value:t.offer["gr:hasBusinessFunction"],callback:function(e){t.$set(t.offer,"gr:hasBusinessFunction",e)},expression:"offer['gr:hasBusinessFunction']"}})],1),r("b-input-group",{attrs:{prepend:"Name"}},[r("b-form-input",{attrs:{placeholder:"Name of the Offering"},model:{value:t.offer["gr:name"],callback:function(e){t.$set(t.offer,"gr:name",e)},expression:"offer['gr:name']"}})],1),r("b-input-group",{attrs:{prepend:"Description"}},[r("b-form-textarea",{attrs:{id:"desc_textarea",placeholder:"Description of the Offering...",rows:"3","max-rows":"6"},model:{value:t.offer["gr:description"],callback:function(e){t.$set(t.offer,"gr:description",e)},expression:"offer['gr:description']"}})],1),r("h4",[t._v("Price")]),r("b-input-group",{attrs:{prepend:"Price"}},[r("b-form-input",{attrs:{placeholder:"Value"},model:{value:t.offer["gr:hasPriceSpecification"]["gr:hasCurrencyValue"],callback:function(e){t.$set(t.offer["gr:hasPriceSpecification"],"gr:hasCurrencyValue",e)},expression:"offer['gr:hasPriceSpecification']['gr:hasCurrencyValue']"}}),r("b-form-input",{attrs:{placeholder:"€, $ (Currency)"},model:{value:t.offer["gr:hasPriceSpecification"]["gr:hasCurrency"],callback:function(e){t.$set(t.offer["gr:hasPriceSpecification"],"gr:hasCurrency",e)},expression:"offer['gr:hasPriceSpecification']['gr:hasCurrency']"}})],1),r("h4",[t._v("Product or Service")]),r("b-input-group",{attrs:{prepend:"Name"}},[r("b-form-input",{attrs:{placeholder:"What is the product or Service ?"},model:{value:t.offer.object["gr:name"],callback:function(e){t.$set(t.offer.object,"gr:name",e)},expression:"offer.object['gr:name']"}})],1),r("b-input-group",{attrs:{prepend:"Add an Product / Service Property"}},[r("b-form-select",{attrs:{options:t.object_properties},model:{value:t.newProp,callback:function(e){t.newProp=e},expression:"newProp"}})],1),t.newProp.length>0?r("b-input-group",{attrs:{prepend:t.newProp}},[r("b-form-input",{attrs:{placeholder:t.newProp},model:{value:t.propValue,callback:function(e){t.propValue=e},expression:"propValue"}}),r("b-button",{on:{click:t.addProperty}},[t._v("Add")])],1):t._e(),Object.entries(t.offer.object).length>0?r("div",[t._v(" Résumé "),r("b-list-group",t._l(Object.entries(t.offer.object),(function(e,a){return r("b-list-group-item",{key:a},[r("h5",[t._v(t._s(e[0])+" :")]),"string"==typeof e[1]?r("div",[t._v(" "+t._s(e[1])+" ")]):t._l(e[1],(function(e,a){return r("div",{key:a},[t._v(" "+t._s(e)+" ")])}))],2)})),1)],1):t._e(),r("b-button",{attrs:{variant:"success"},on:{click:t.create}},[t._v("Submit")]),r("hr"),t._v(" "),r("hr"),t._v(" "),r("hr")],1)],1)},i=[],n=(r("4160"),r("a15b"),r("fb6a"),r("4fad"),r("ac1f"),r("1276"),r("2ca0"),r("159b"),r("53ca")),o=(r("96cf"),r("1da1")),s=r("4d8d"),c=r("6dc1"),u=r("1404"),l=r("fd2a"),d={name:"SolidMixin",mixins:[u["a"],l["a"]],methods:{putOnPod:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var a,i,n,o,u,l,d,f;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return console.log(t),a=new Date,i=a.toISOString(),n=[a.getFullYear(),("0"+(a.getMonth()+1)).slice(-2),("0"+a.getDate()).slice(-2)].join("-"),o=void 0!=t["folder"].length&&t["folder"].length>0?e.storage+t["folder"]:e.storage+"public/",u=o+n+".ttl",console.log(u),l={},r.prev=8,r.next=11,Object(s["b"])(u);case 11:l=r.sent,r.next=19;break;case 14:return r.prev=14,r.t0=r["catch"](8),r.next=18,Object(s["a"])(u);case 18:l=r.sent;case 19:return d=t["rdf:type"].split(":")[1]+"_"+a.getTime(),console.log(d),t["@id"]=d,f=l.addSubject({identifier:d}),f.addLiteral(c["e"].label,t["gr:name"]),f.addLiteral(c["a"].created,i),f.addRef(c["b"].maker,e.webId),f.addRef("https://www.w3.org/ns/activitystreams#actor",e.webId),r.next=29,e.addOtherProperties(f,t,l,a);case 29:return r.prev=29,r.next=32,l.save();case 32:console.log("DOC saved "),e.makeToast("Saved",t["gr:name"]+" at "+u,"success"),1==t["@publish"]&&(e.activity=t,e.activity.object.url=u+"#"+d,console.log("ACTIVITY",e.activity),e.sendOfferActivity()),r.next=41;break;case 37:r.prev=37,r.t1=r["catch"](29),alert(r.t1),e.makeToast("Error",r.t1,"danger");case 41:case"end":return r.stop()}}),r,null,[[8,14],[29,37]])})))()},addOtherProperties:function(t,e,r,a){var i=this;return Object(o["a"])(regeneratorRuntime.mark((function o(){var s,c;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:s=e["@context"],c={},s.forEach((function(t){"object"==Object(n["a"])(t)&&Object.entries(t).forEach((function(t){t[0].startsWith("@")||(c[t[0]]=t[1])}))})),Object.entries(e).forEach((function(e){if(!e[0].startsWith("@")){var o=i.shortToLong(e[0],c),s="";switch(Object(n["a"])(e[1])){case"string":e[1].length>0&&(s=i.shortToLong(e[1],c),s.startsWith("http")?t.addRef(o,s):t.addLiteral(o,s));break;case"object":console.log(Object(n["a"])(e[1]),e[0],"->",e[1]),"object"==e[0]?i.addObject(t,e[1],r,a,c):"gr:hasPriceSpecification"==e[0]&&i.addPrice(t,e[1]);break;default:}}}));case 4:case"end":return o.stop()}}),o)})))()},addPrice:function(t,e){t.addLiteral("http://purl.org/goodrelations/v1#hasCurrency",e["gr:hasCurrency"]),t.addLiteral("http://purl.org/goodrelations/v1#hasCurrencyValue",e["gr:hasCurrencyValue"])},addObject:function(t,e,r,a,i){var n=this,o=e["rdf:type"].split(":")[1]+"_"+a.getTime(),s=r.addSubject({identifier:o});t.addRef("http://purl.org/goodrelations/v1#includes",s.asRef()),s.addLiteral(c["e"].label,e["gr:name"]),s.addRef(c["d"].type,this.shortToLong(e["rdf:type"],i)),Object.entries(e).forEach((function(t){var e=n.shortToLong(t[0],i);if("string"==typeof t[1]){var r=n.shortToLong(t[1],i);r.startsWith("http")?s.addRef(e,r):s.addLiteral(e,r)}else{console.log("TODO",t);var a=n.shortToLong(t[0],i);t[1].forEach((function(t){var e=n.shortToLong(t,i);e.startsWith("http")?s.addRef(a,e):s.addLiteral(a,e)}))}}))},shortToLong:function(t,e){var r=t.split(":"),a=r[0],i=e[a];return void 0!=i?i+"#"+r[1]:t}},computed:{storage:{get:function(){return this.$store.state.solid.storage},set:function(){}},webId:{get:function(){return this.$store.state.solid.webId},set:function(){}}}},f={name:"OfferPost",mixins:[d],props:["value"],data:function(){return{active:!0,offer:{"@context":["https://www.w3.org/ns/activitystreams",{"@language":"en"},{gr:"http://purl.org/goodrelations/v1"},{rdf:"http://www.w3.org/1999/02/22-rdf-syntax-ns"}],"@id":"","rdf:type":"gr:Offering","gr:hasBusinessFunction":null,"gr:name":"","gr:description":"","gr:hasPriceSpecification":{"gr:hasCurrencyValue":"","gr:hasCurrency":""},published:"",object:{"rdf:type":"gr:ProductOrService"}},businessFunctionOptions:[{value:null,text:"Please select an Business Function (Selectionnez un type de transaction)"},{value:"gr:Sell",text:"Sell (Vente)"},{value:"gr:Buy",text:"Buy (Achat)"},{value:"gr:ProvideService",text:"Provide Service (Fourniture de Service)"},{value:"gr:Repair",text:"Repair (Reparation)"},{value:"gr:ConstructionInstallation",text:"Construction Installation"},{value:"gr:Dispose",text:"Dispose (Don)"},{value:"gr:LeaseOut",text:"Lease Out (Location)"},{value:"gr:Maintain",text:"Maintain (Maintenance)"}],object_properties:[{value:"gr:category",text:"category"},{value:"gr:color",text:"color"},{value:"gr:condition",text:"condition"},{value:"gr:datatypeProductOrServiceProperty",text:"datatypeProductOrServiceProperty"},{value:"gr:depth",text:"depth"},{value:"gr:description",text:"description"},{value:"gr:hasBrand",text:"hasBrand"},{value:"gr:hasEAN_UCC-13",text:"hasEAN_UCC"},{value:"gr:hasGTIN-14",text:"hasGTIN"},{value:"gr:hasGTIN-8",text:"hasGTIN"},{value:"gr:hasMPN",text:"hasMPN"},{value:"gr:hasManufacturer",text:"hasManufacturer"},{value:"gr:hasStockKeepingUnit",text:"hasStockKeepingUnit"},{value:"gr:height",text:"height"},{value:"gr:isAccessoryOrSparePartFor",text:"isAccessoryOrSparePartFor"},{value:"gr:isConsumableFor",text:"isConsumableFor"},{value:"gr:isSimilarTo",text:"isSimilarTo"},{value:"gr:name",text:"name"},{value:"gr:qualitativeProductOrServiceProperty",text:"qualitativeProductOrServiceProperty"},{value:"gr:quantitativeProductOrServiceProperty",text:"quantitativeProductOrServiceProperty"},{value:"gr:weight",text:"weight"},{value:"gr:width",text:"width"}],newProp:"",propValue:""}},created:function(){this.webId=this.$store.state.solid.webId,this.init()},methods:{newOffer:function(){this.active=!this.active},addProperty:function(){void 0==this.offer.object[this.newProp]&&(this.offer.object[this.newProp]=[]),this.propValue.length>0&&this.offer.object[this.newProp].push(this.propValue),this.propValue=""},init:function(){this.offer["gr:businessEntity"]=this.webId},create:function(){this.offer.actor=this.webId,this.offer["folder"]="public/Offering/",null==this.offer["gr:hasBusinessFunction"]?alert("you must select business Function"):(this.offer["@publish"]=!0,this.putOnPod(this.offer),this.active=!1)}},watch:{webId:function(){console.log(this.webId),this.init()}}},p=f,g=(r("43a9"),r("2877")),v=Object(g["a"])(p,a,i,!1,null,null,null);e["default"]=v.exports},1404:function(t,e,r){"use strict";r("a15b"),r("fb6a"),r("b0c0"),r("ac1f"),r("1276"),r("2ca0"),r("96cf");var a=r("1da1"),i=r("4d8d"),n=r("6dc1"),o=r("ae85");e["a"]={mixins:[o["a"]],created:function(){this.webId=this.$store.state.solid.webId,this.config(this.webId);var t=new Date;this.date=this.formatDate(t)},methods:{sendOfferActivity:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r,a,o,s,c,u,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t.activity),r=new Date,a="Activity_"+r.getTime(),o=r.toISOString(),s=t.formatDate(r),c=t.pubPod+s+".ttl",u={},e.prev=7,e.next=10,Object(i["b"])(c);case 10:u=e.sent,e.next=18;break;case 13:return e.prev=13,e.t0=e["catch"](7),e.next=17,Object(i["a"])(c);case 17:u=e.sent;case 18:return l=u.addSubject({identifier:a}),l.addLiteral(n["e"].label,t.activity["gr:name"]),l.addLiteral(n["a"].created,o),l.addRef(n["d"].type,t.activity["gr:hasBusinessFunction"]),l.addRef(n["d"].type,"http://purl.org/goodrelations/v1#Offering"),l.addRef(n["b"].maker,t.webId),l.addRef("https://www.w3.org/ns/activitystreams#actor",t.webId),l.addLiteral("http://purl.org/goodrelations/v1#name",t.activity["gr:name"]),l.addLiteral("http://purl.org/goodrelations/v1#businessEntity",t.activity["gr:businessEntity"]),l.addLiteral("http://purl.org/goodrelations/v1#description",t.activity["gr:description"]),l.addLiteral("https://www.w3.org/ns/activitystreams#summary",t.activity["gr:name"]),l.addRef("https://www.w3.org/ns/activitystreams#object",t.activity.object.url),l.addLiteral("http://purl.org/goodrelations/v1#hasCurrency",t.activity["gr:hasPriceSpecification"]["gr:hasCurrency"]),l.addLiteral("http://purl.org/goodrelations/v1#hasCurrencyValue",t.activity["gr:hasPriceSpecification"]["gr:hasCurrencyValue"]),e.next=34,u.save();case 34:case"end":return e.stop()}}),e,null,[[7,13]])})))()},sendActivity:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r,a,o,s,c,u,l,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t.activity),r=new Date,a="Activity_"+r.getTime(),o=r.toISOString(),s=t.formatDate(r),console.log(t.activity.actor.name,t.activity.type,t.activity.summary,s),c=t.pubPod+s+".ttl",u={},e.prev=8,e.next=11,Object(i["b"])(c);case 11:u=e.sent,e.next=19;break;case 14:return e.prev=14,e.t0=e["catch"](8),e.next=18,Object(i["a"])(c);case 18:u=e.sent;case 19:return t.activity.summary.length<1&&(t.activity.summary=[t.activity.actor.name.split("/").slice(2,3)[0],t.localname(t.activity.type),"a",t.activity.object.type,"with name",t.activity.object.name].join(" ")),l=t.activity.object.type.startsWith("http")?t.activity.object.type:"https://www.w3.org/ns/activitystreams#"+t.activity.object.type,d=u.addSubject({identifier:a}),d.addLiteral(n["e"].label,t.activity.object.name),d.addLiteral(n["a"].created,o),d.addRef(n["b"].maker,t.webId),d.addRef("https://www.w3.org/ns/activitystreams#actor",t.webId),d.addRef(n["d"].type,l),d.addLiteral("https://www.w3.org/ns/activitystreams#summary",t.activity.summary),d.addRef("https://www.w3.org/ns/activitystreams#object",t.activity.object.url),void 0!=t.activity.object.inReplyTo&&d.addRef("https://www.w3.org/ns/activitystreams#inReplyTo",t.activity.object.inReplyTo),"https://www.w3.org/ns/activitystreams#Article"!=l?void 0!=t.currentWorkspace?d.addRef(n["d"].type,t.currentWorkspace.path+t.activity.object.type):d.addRef(n["d"].type,t.activity.object.url+"#"+t.activity.object.type):d.addRef(n["d"].type,t.activity.type),e.next=33,u.save();case 33:case"end":return e.stop()}}),e,null,[[8,14]])})))()},send:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r,a,o,s,c,u,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t.activity),r=t.pubPod+t.date+".ttl",a=new Date,o="Activity_"+a.getTime(),s=a.toISOString(),c={},e.prev=6,e.next=9,Object(i["b"])(r);case 9:c=e.sent,e.next=17;break;case 12:return e.prev=12,e.t0=e["catch"](6),e.next=16,Object(i["a"])(r);case 16:c=e.sent;case 17:return u=[t.activity.actor.name,t.activity.type,"a",t.activity.object.type,"with name",t.activity.object.name].join(" "),l=c.addSubject({identifier:o}),l.addLiteral(n["e"].label,u),l.addLiteral(n["a"].created,s),l.addRef(n["b"].maker,t.webId),l.addRef("https://www.w3.org/ns/activitystreams#actor",t.webId),l.addRef(n["d"].type,"https://www.w3.org/ns/activitystreams#"+t.activity.type),l.addLiteral("https://www.w3.org/ns/activitystreams#summary",t.activity.summary),l.addRef("https://www.w3.org/ns/activitystreams#object",t.activity.object.url),e.next=28,c.save();case 28:console.log("todo toast when activity saved");case 29:case"end":return e.stop()}}),e,null,[[6,12]])})))()},formatDate:function(t){return[t.getFullYear(),("0"+(t.getMonth()+1)).slice(-2),("0"+t.getDate()).slice(-2)].join("-")},config:function(t){this.config={},this.config.webId=t}},webId:{webId:function(t){this.config(t)}},computed:{webId:{get:function(){return this.$store.state.solid.webId},set:function(){}},activities:{get:function(){return this.$store.state.agora.activities},set:function(){}}},data:function(){return{as:{core:["Object","Link","Activity","IntransitiveActivity","Collection","OrderedCollection","CollectionPage","OrderedCollectionPage"],activity:["Accept","Add","Announce","Arrive","Block","Create","Delete","Dislike","Flag","Follow","Ignore","Invite","Join","Leave","Like","Listen","Move","Offer","Question","Reject","Read","Remove","TentativeReject","TentativeAccept","Travel","Undo","Update","View"],actor:["Application","Group","Organization","Person","Service"],object:["Article","Audio","Document","Event","Image","Note","Page","Place","Profile","Relationship","Tombstone","Video","Mention"]},pubPod:"https://agora.solidcommunity.net/public/popock/inbox/"}}}},"2ca0":function(t,e,r){"use strict";var a=r("23e7"),i=r("06cf").f,n=r("50c4"),o=r("5a34"),s=r("1d80"),c=r("ab13"),u=r("c430"),l="".startsWith,d=Math.min,f=c("startsWith"),p=!u&&!f&&!!function(){var t=i(String.prototype,"startsWith");return t&&!t.writable}();a({target:"String",proto:!0,forced:!p&&!f},{startsWith:function(t){var e=String(s(this));o(t);var r=n(d(arguments.length>1?arguments[1]:void 0,e.length)),a=String(t);return l?l.call(e,a,r):e.slice(r,r+a.length)===a}})},"43a9":function(t,e,r){"use strict";r("f4d4")},"4fad":function(t,e,r){var a=r("23e7"),i=r("6f53").entries;a({target:"Object",stat:!0},{entries:function(t){return i(t)}})},"53ca":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("a4d3"),r("e01a"),r("d28b"),r("d3b7"),r("3ca3"),r("ddb0");function a(t){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}},"6f53":function(t,e,r){var a=r("83ab"),i=r("df75"),n=r("fc6a"),o=r("d1e7").f,s=function(t){return function(e){var r,s=n(e),c=i(s),u=c.length,l=0,d=[];while(u>l)r=c[l++],a&&!o.call(s,r)||d.push(t?[r,s[r]]:s[r]);return d}};t.exports={entries:s(!0),values:s(!1)}},ae85:function(t,e,r){"use strict";r("baa5"),r("fb6a"),r("bf19");e["a"]={methods:{localname:function(t){var e=t;return void 0!=t&&(e=-1!=t.lastIndexOf("#")?t.substr(t.lastIndexOf("#")).substr(1):t.substr(t.lastIndexOf("/")).substr(1),e=0==e.length?t:e),e},today:function(){var t=new Date;return t.setMinutes(this.getMinutes()-this.getTimezoneOffset()),t.toJSON().slice(0,10)},streamActivity:function(t,e){var r={"@context":"https://www.w3.org/ns/activitystreams",summary:"User fill a form with shighl-vuejs",type:"Add",published:(new Date).toISOString(),actor:{type:"Person",id:t,name:"UserName",url:"same as webid ?",image:{type:"Link",href:"http://example.org/martin/image.jpg",mediaType:"image/jpeg"}},object:{id:"http://www.test.example/blog/abc123/xyz",type:"Document",url:"http://example.org/blog/2011/02/entry",name:"Why I love Activity Streams",content:e},target:{id:"http://example.org/blog/",type:"OrderedCollection",name:"Martin's Blog"}};return r}}}},baa5:function(t,e,r){var a=r("23e7"),i=r("e58c");a({target:"Array",proto:!0,forced:i!==[].lastIndexOf},{lastIndexOf:i})},bf19:function(t,e,r){"use strict";var a=r("23e7");a({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},e58c:function(t,e,r){"use strict";var a=r("fc6a"),i=r("a691"),n=r("50c4"),o=r("a640"),s=r("ae40"),c=Math.min,u=[].lastIndexOf,l=!!u&&1/[1].lastIndexOf(1,-0)<0,d=o("lastIndexOf"),f=s("indexOf",{ACCESSORS:!0,1:0}),p=l||!d||!f;t.exports=p?function(t){if(l)return u.apply(this,arguments)||0;var e=a(this),r=n(e.length),o=r-1;for(arguments.length>1&&(o=c(o,i(arguments[1]))),o<0&&(o=r+o);o>=0;o--)if(o in e&&e[o]===t)return o||0;return-1}:u},f4d4:function(t,e,r){},fd2a:function(t,e,r){"use strict";e["a"]={methods:{makeToast:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(e,{title:t,variant:r,solid:!0})}}}}}]);
//# sourceMappingURL=chunk-003eab00.c3f5b8c4.js.map