webpackJsonp([3],{"+v9j":function(e,t,a){"use strict";var n=a("MYsB"),r=a("089L");t.a={created:function(){var e=this;this.axios.get("getFormData").then(function(t){0===t.errno?(e.formData=t.data,console.log(e.formData)):console.log(t.msg)}).catch(function(e){console.log(e)})},data:function(){return{formData:{},form:{}}},methods:{onSubmit:function(){},show:function(e){console.log(1),console.log(e)}},watch:{formData:{handler:function(e,t){console.log(e)},deep:!0}},components:{tableRadio:n.a,selfAdd:r.a}}},"089L":function(e,t,a){"use strict";function n(e){a("r8hk")}var r=a("oC6e"),l=a("YPbk"),o=a("VU/8"),i=n,d=o(r.a,l.a,!1,i,"data-v-39f61942",null);t.a=d.exports},"2SgK":function(e,t,a){"use strict";function n(e){a("JzCI")}Object.defineProperty(t,"__esModule",{value:!0});var r=a("+v9j"),l=a("c+Qv"),o=a("VU/8"),i=n,d=o(r.a,l.a,!1,i,"data-v-338e9ad0",null);t.default=d.exports},"2tiW":function(e,t,a){t=e.exports=a("FZ+f")(!0),t.push([e.i,"\n.table-border[data-v-39f61942]{border:1px solid #e6ebf5\n}\n.table-border th[data-v-39f61942],.table-border td[data-v-39f61942]{border-right:1px solid #e6ebf5\n}\n.is-left[data-v-39f61942]{text-align:left\n}\n.is-center[data-v-39f61942]{text-align:center\n}\n.is-right[data-v-39f61942]{text-align:right\n}\ntable[data-v-39f61942]{width:100%;vertical-align:middle;border-collapse:collapse;background-color:#ffffff;font-size:14px\n}\ntable thead[data-v-39f61942]{background-color:#f5f7fa\n}\ntable tr[data-v-39f61942]{border-bottom:1px solid #e6ebf5\n}\ntable th[data-v-39f61942]{padding:8px 0\n}\ntable td[data-v-39f61942]{padding:12px 0\n}\ntbody tr .el-button[data-v-39f61942]{margin:0 10px\n}\ntbody tr:last-child .delete-row[data-v-39f61942]{display:none\n}\ntbody tr:not(:last-child) .add-row[data-v-39f61942]{display:none\n}\ntd[data-v-39f61942]{padding:12px 16px !important\n}\n","",{version:3,sources:["C:/Users/14296/Desktop/qiantu_web/src/components/SelfAdd/index.vue"],names:[],mappings:";AACA,+BAA+B,wBAAwB;CACtD;AACD,oEAAoE,8BAA8B;CACjG;AACD,0BAA0B,eAAe;CACxC;AACD,4BAA4B,iBAAiB;CAC5C;AACD,2BAA2B,gBAAgB;CAC1C;AACD,uBAAuB,WAAW,sBAAsB,yBAAyB,yBAAyB,cAAc;CACvH;AACD,6BAA6B,wBAAwB;CACpD;AACD,0BAA0B,+BAA+B;CACxD;AACD,0BAA0B,aAAa;CACtC;AACD,0BAA0B,cAAc;CACvC;AACD,qCAAqC,aAAa;CACjD;AACD,iDAAiD,YAAY;CAC5D;AACD,oDAAoD,YAAY;CAC/D;AACD,oBAAoB,4BAA4B;CAC/C",file:"index.vue",sourcesContent:["\n.table-border[data-v-39f61942]{border:1px solid #e6ebf5\n}\n.table-border th[data-v-39f61942],.table-border td[data-v-39f61942]{border-right:1px solid #e6ebf5\n}\n.is-left[data-v-39f61942]{text-align:left\n}\n.is-center[data-v-39f61942]{text-align:center\n}\n.is-right[data-v-39f61942]{text-align:right\n}\ntable[data-v-39f61942]{width:100%;vertical-align:middle;border-collapse:collapse;background-color:#ffffff;font-size:14px\n}\ntable thead[data-v-39f61942]{background-color:#f5f7fa\n}\ntable tr[data-v-39f61942]{border-bottom:1px solid #e6ebf5\n}\ntable th[data-v-39f61942]{padding:8px 0\n}\ntable td[data-v-39f61942]{padding:12px 0\n}\ntbody tr .el-button[data-v-39f61942]{margin:0 10px\n}\ntbody tr:last-child .delete-row[data-v-39f61942]{display:none\n}\ntbody tr:not(:last-child) .add-row[data-v-39f61942]{display:none\n}\ntd[data-v-39f61942]{padding:12px 16px !important\n}\n"],sourceRoot:""}])},"91Vg":function(e,t,a){t=e.exports=a("FZ+f")(!0),t.push([e.i,"\n.render[data-v-338e9ad0]{padding:16px;margin-bottom:16px;background-color:#ffffff\n}\n","",{version:3,sources:["C:/Users/14296/Desktop/qiantu_web/src/pages/form/render/render.vue"],names:[],mappings:";AACA,yBAAyB,aAAa,mBAAmB,wBAAwB;CAChF",file:"render.vue",sourcesContent:["\n.render[data-v-338e9ad0]{padding:16px;margin-bottom:16px;background-color:#ffffff\n}\n"],sourceRoot:""}])},GNwQ:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table-radio"},[a("table",{class:e.tableClsArr},[a("thead",[a("tr",[a("th",{attrs:{width:"200"}}),e._v(" "),e._l(e.data.values,function(t,n){return a("th",{key:n,attrs:{width:"100"}},[e._v(e._s(t))])})],2)]),e._v(" "),a("tbody",e._l(e.data.sub_fields,function(t,n){return a("tr",{key:n},[a("td",[e._v(e._s(t.title))]),e._v(" "),e._l(t.values,function(n,r){return a("td",{key:r},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"row.value"}],attrs:{type:"radio",name:t.id},domProps:{value:r,checked:e._q(t.value,r)},on:{change:function(a){return e.$set(t,"value",r)}}})])})],2)}),0)])])},r=[],l={render:n,staticRenderFns:r};t.a=l},JzCI:function(e,t,a){var n=a("91Vg");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("7a02ef68",n,!0,{})},MYsB:function(e,t,a){"use strict";function n(e){a("WWqi")}var r=a("ZCFx"),l=a("GNwQ"),o=a("VU/8"),i=n,d=o(r.a,l.a,!1,i,"data-v-eec9bbd4",null);t.a=d.exports},UL8N:function(e,t,a){t=e.exports=a("FZ+f")(!0),t.push([e.i,"\n.table-border[data-v-eec9bbd4]{border:1px solid #e6ebf5\n}\n.table-border th[data-v-eec9bbd4],.table-border td[data-v-eec9bbd4]{border-right:1px solid #e6ebf5\n}\n.is-left[data-v-eec9bbd4]{text-align:left\n}\n.is-center[data-v-eec9bbd4]{text-align:center\n}\n.is-right[data-v-eec9bbd4]{text-align:right\n}\ntable[data-v-eec9bbd4]{width:100%;vertical-align:middle;border-collapse:collapse;background-color:#ffffff;font-size:14px\n}\ntable thead[data-v-eec9bbd4]{background-color:#f5f7fa\n}\ntable tr[data-v-eec9bbd4]{border-bottom:1px solid #e6ebf5\n}\ntable th[data-v-eec9bbd4]{padding:8px 0\n}\ntable td[data-v-eec9bbd4]{padding:12px 0\n}\n","",{version:3,sources:["C:/Users/14296/Desktop/qiantu_web/src/components/TableRadio/index.vue"],names:[],mappings:";AACA,+BAA+B,wBAAwB;CACtD;AACD,oEAAoE,8BAA8B;CACjG;AACD,0BAA0B,eAAe;CACxC;AACD,4BAA4B,iBAAiB;CAC5C;AACD,2BAA2B,gBAAgB;CAC1C;AACD,uBAAuB,WAAW,sBAAsB,yBAAyB,yBAAyB,cAAc;CACvH;AACD,6BAA6B,wBAAwB;CACpD;AACD,0BAA0B,+BAA+B;CACxD;AACD,0BAA0B,aAAa;CACtC;AACD,0BAA0B,cAAc;CACvC",file:"index.vue",sourcesContent:["\n.table-border[data-v-eec9bbd4]{border:1px solid #e6ebf5\n}\n.table-border th[data-v-eec9bbd4],.table-border td[data-v-eec9bbd4]{border-right:1px solid #e6ebf5\n}\n.is-left[data-v-eec9bbd4]{text-align:left\n}\n.is-center[data-v-eec9bbd4]{text-align:center\n}\n.is-right[data-v-eec9bbd4]{text-align:right\n}\ntable[data-v-eec9bbd4]{width:100%;vertical-align:middle;border-collapse:collapse;background-color:#ffffff;font-size:14px\n}\ntable thead[data-v-eec9bbd4]{background-color:#f5f7fa\n}\ntable tr[data-v-eec9bbd4]{border-bottom:1px solid #e6ebf5\n}\ntable th[data-v-eec9bbd4]{padding:8px 0\n}\ntable td[data-v-eec9bbd4]{padding:12px 0\n}\n"],sourceRoot:""}])},WWqi:function(e,t,a){var n=a("UL8N");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("11132c18",n,!0,{})},YPbk:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"self-add"},[a("table",{class:e.tableClsArr},[a("thead",[a("tr",[e._l(e.data.sub_fields,function(t,n){return a("th",[e._v("\n        "+e._s(t.title)+"\n        "),t.unit?a("span",{staticClass:"unit"},[e._v("（单位："+e._s(t.unit)+"）")]):e._e()])}),e._v(" "),a("th",[e._v("操作")])],2)]),e._v(" "),a("tbody",e._l(e.data.value,function(t,n){return a("tr",{key:t.id},[e._l(t.value,function(t,n){return a("td",{key:t.id},["text"===t.type?a("el-input",{attrs:{size:"small"},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"column.value"}}):e._e(),e._v(" "),"number"===t.type?a("el-input",{attrs:{type:"number",size:"small"},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"column.value"}}):e._e()],1)}),e._v(" "),a("td",{staticClass:"operater"},[a("el-button",{staticClass:"add-row",attrs:{size:"small",type:"primary"},on:{click:e.addRow}},[e._v("添加")]),e._v(" "),a("el-button",{staticClass:"delete-row",attrs:{size:"small",type:"danger"},on:{click:function(a){return e.deleteRow(t)}}},[e._v("删除")])],1)],2)}),0)])])},r=[],l={render:n,staticRenderFns:r};t.a=l},ZCFx:function(e,t,a){"use strict";t.a={props:{data:{type:Object},border:{type:Boolean,default:!1},align:{type:String,default:"center"}},computed:{tableClsArr:function(){var e=[];switch(this.border&&e.push("table-border"),this.align){case"left":e.push("is-left");break;case"center":e.push("is-center");break;case"right":e.push("is-right");break;default:return new Error("align的值必须为left/center/right")}return e}},watch:{tableRadioData:{handler:function(e,t){this.$emit("update:data",e)},deep:!0}}}},"c+Qv":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"render"},[a("el-form",{ref:"form",attrs:{model:e.form,size:"small",inline:!1,"label-position":"top"}},[e._l(e.formData.fields,function(t,n){return["text"===t.type?a("el-form-item",{attrs:{label:t.title}},[a("el-col",{attrs:{span:12}},[a("el-input")],1)],1):e._e(),e._v(" "),"time"===t.type?a("el-form-item",{attrs:{label:t.title}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"item.value"}})],1):e._e(),e._v(" "),"select"===t.type?a("el-form-item",{attrs:{label:t.title}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},e._l(t.values,function(e,t){return a("el-option",{key:t,attrs:{label:e,value:e}})}),1)],1):e._e(),e._v(" "),"number"===t.type?a("el-form-item",{attrs:{label:t.title+"("+t.unit+")"}},[a("el-col",{attrs:{span:4}},[a("el-input",{attrs:{type:"number"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",e._n(t))},expression:"form.name"}},[a("template",{slot:"append"},[e._v(e._s(t.unit))])],2)],1)],1):e._e(),e._v(" "),"radio"===t.type?a("el-form-item",{attrs:{label:t.title}},[a("el-radio-group",{model:{value:e.form.resource,callback:function(t){e.$set(e.form,"resource",t)},expression:"form.resource"}},e._l(t.values,function(e,t){return a("el-radio",{key:t,attrs:{label:e,value:e.index}})}),1),e._v(" "),t.sub_fields?e._l(t.sub_fields,function(e,t){return a("el-form-item",{key:t})}):e._e()],2):e._e(),e._v(" "),"null"===t.type?a("el-form-item",{attrs:{label:t.title}},e._l(t.sub_fields,function(t,n){return a("el-row",{key:n,staticStyle:{"margin-bottom":"8px"}},[a("el-col",{attrs:{span:12}},[a("el-input",[a("template",{slot:"prepend"},[e._v(e._s(t.title))])],2)],1)],1)}),1):e._e(),e._v(" "),"tableRadio"===t.type?a("el-form-item",{attrs:{label:t.title}},[a("el-col",{attrs:{span:24}},[a("table-radio",{attrs:{data:t}})],1)],1):e._e(),e._v(" "),"table"===t.type?a("el-form-item",{attrs:{label:t.title}},[a("el-col",{attrs:{span:24}},[a("self-add",{model:{value:e.formData.fields[n],callback:function(t){e.$set(e.formData.fields,n,t)},expression:"formData.fields[index]"}})],1)],1):e._e()]})],2)],1)},r=[],l={render:n,staticRenderFns:r};t.a=l},oC6e:function(e,t,a){"use strict";var n=a("woOf"),r=a.n(n);t.a={mounted:function(){this.data.value.push(this.getValueItem())},model:{prop:"data",event:"change"},props:{data:{type:Object},border:{type:Boolean,default:!1},align:{type:String,default:"center"}},data:function(){return{}},computed:{tableClsArr:function(){var e=[];switch(this.border&&e.push("table-border"),this.align){case"left":e.push("is-left");break;case"center":e.push("is-center");break;case"right":e.push("is-right");break;default:return new Error("align的值必须为left/center/right")}return e}},methods:{getValueItem:function(){var e={id:"",value:[]},t=Date.now();return e.id=t,this.data.sub_fields.forEach(function(a,n){var l=r()({},a);l.id=l.id+"|"+t,e.value.push(l)}),e},addRow:function(){console.log(this.value),this.data.value.push(this.getValueItem())},deleteRow:function(e){this.data.value=this.data.value.filter(function(t){return t.id!==e.id}),console.log(this.data)}},watch:{data:{handler:function(e,t){this.$emit("change",e)},deep:!0}}}},r8hk:function(e,t,a){var n=a("2tiW");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("d9c7ef00",n,!0,{})}});
//# sourceMappingURL=3.6a45fd4ef1e5c1173804.js.map