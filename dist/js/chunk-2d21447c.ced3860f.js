(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21447c"],{afef:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"shape-node-constraint"},[e.valueExpr.values?a("div",{staticClass:"not-found"},[a("FormSelect",{attrs:{values:e.valueExpr.values,predicate:e.predicate,datatype:e.valueExpr.datatype}})],1):e.valueExpr.nodeKind?a("div",{staticClass:"found"},["literal"==e.valueExpr.nodeKind?a("div",{staticClass:"not-found"},[a("FormTextarea",{attrs:{nodeKind:e.valueExpr.nodeKind,predicate:e.predicate}})],1):"iri"==e.valueExpr.nodeKind?a("div",{staticClass:"not-found"},[e._v(" URI TODO: "),a("FormInput",{attrs:{valueExpr:e.valueExpr,predicate:e.predicate,datatype:e.valueExpr.datatype}})],1):e._e()]):e.valueExpr.datatype.startsWith("http://www.w3.org/ns/pim/space#storage:")?a("div",[a("small",[e._v(e._s(e.workspace+e.valueExpr.datatype.split(":")[2]))]),a("FormSelect",{attrs:{source:e.workspace+e.valueExpr.datatype.split(":")[2],values:e.valueExpr.values,predicate:e.predicate,datatype:e.valueExpr.datatype}})],1):a("div",{staticClass:"not-found"},[e._v(" "+e._s(e.valueExpr.datatype)+" "),a("FormInput",{attrs:{valueExpr:e.valueExpr,predicate:e.predicate,datatype:e.valueExpr.datatype}})],1),a("div",{staticClass:"brute-hide"},[a("h5",[e._v(e._s(e.$options.name))]),e._v(" TODO : values, nodeKind, datatype "+e._s(e.valueExpr)),a("br"),a("DebugProperties",{attrs:{object:e.valueExpr}})],1)])},n=[],u=(a("d3b7"),{name:"ShapeNodeConstraint",components:{DebugProperties:function(){return a.e("chunk-3d5abdaa").then(a.bind(null,"a972"))},FormInput:function(){return a.e("chunk-2d0af3ec").then(a.bind(null,"0e01"))},FormTextarea:function(){return a.e("chunk-2d0aa270").then(a.bind(null,"1094"))},FormSelect:function(){return a.e("chunk-7c300b46").then(a.bind(null,"1e66"))}},props:{valueExpr:Object,predicate:String},data:function(){return{}},computed:{currentShape:function(){return this.$store.state.crud.currentShape},workspace:{get:function(){return this.$store.state.crud.workspace},set:function(){}}}}),p=u,s=a("2877"),d=Object(s["a"])(p,r,n,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d21447c.ced3860f.js.map