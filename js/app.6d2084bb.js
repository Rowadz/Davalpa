(function(t){function e(e){for(var a,s,c=e[0],i=e[1],l=e[2],f=0,p=[];f<c.length;f++)s=c[f],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/Davalpa/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=i;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"1a32":function(t,e,n){"use strict";var a=n("5cb6"),r=n.n(a);r.a},"312d":function(t,e,n){"use strict";var a=n("c91b"),r=n.n(a);r.a},4678:function(t,e,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=o,t.exports=r,r.id="4678"},"5cb6":function(t,e,n){},c91b:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"min-vh-100",attrs:{id:"app"}},[n("router-view")],1)},o=[],s=n("2877"),c={},i=Object(s["a"])(c,r,o,!1,null,null,null),l=i.exports,u=n("9483");Object(u["a"])("".concat("/Davalpa/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var f=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-row",{staticClass:"min-vh-100",attrs:{type:"flex",justify:"space-around",align:"middle"}},[n("section",{attrs:{hidden:""}},[n("form",[n("input",{ref:"fileInput",attrs:{type:"file"},on:{change:t.previewFiles}})])]),n("a-button",{staticClass:"height-100 magictime vanishIn",class:{"magictime swashOut":t.navigate},attrs:{type:"primary",shape:"circle",icon:"download",size:"large",loading:t.loading},on:{click:t.openFileUpload}})],1)},d=[],b=(n("a4d3"),n("4de4"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("3835")),g=n("ade3"),h=n("2f62");function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){Object(g["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var O={name:"Home",data:function(){return{loading:!1,navigate:!1}},methods:y({},Object(h["b"])(["storeData"]),{openFileUpload:function(){this.$refs.fileInput.click()},previewFiles:function(){var t=this,e=this.$createElement;try{this.loading=!0;var n=Object(b["a"])(this.$refs.fileInput.files,1),a=n[0],r=new FileReader;r.onload=function(n){try{console.log(n.type),t.storeData(JSON.parse(n.target.result)),t.navigate=!0,t.not("Read your file successfully","Now Davalpa will do some calculation, this might take some time plz wait",e("a-icon",{attrs:{type:"smile"},style:"color: #108ee9"})),setTimeout((function(){ue.push({path:"wizard"})}),1e3)}catch(a){t.err()}},r.readAsText(a,"UTF-8")}catch(o){this.err()}},err:function(){var t=this.$createElement;this.loading=!1,this.not("Oops!","Davalpa is not powerful or smart enough to process that",t("a-icon",{attrs:{type:"frown"},style:"color: #108ee9"}))},not:function(t,e,n){this.$notification.open({message:t,description:e,icon:n})}})},m=O,v=Object(s["a"])(m,p,d,!1,null,null,null),w=v.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container mt-5"},[n("a-row",{attrs:{type:"flex",justify:"space-around"}},[n("h1",[t._v("🧙‍♂️ Welcome to Davalpa's wizard 🧙")]),n("a-button",{attrs:{type:"danger",shape:"circle",icon:"close"},on:{click:t.clearAll}})],1),n("a-row",{staticClass:"mb-2 min-vh-100",attrs:{type:"flex",justify:"space-around"}},[n("a-tabs",{staticClass:"w-100",attrs:{defaultActiveKey:"1"}},[n("a-tab-pane",{key:"1",attrs:{tab:"Insights"}},[n("wizard-info")],1),t.getXYAxis.y&&t.getXYAxis.x&&t.getAggCol&&t.getAggFun?n("a-tab-pane",{key:"2",attrs:{tab:"Charts",forceRender:""}},[n("wizard-chart")],1):t._e(),t.getXYAxis.y&&t.getXYAxis.x&&t.getAggCol&&t.getAggFun?n("a-tab-pane",{key:"3",attrs:{tab:"Download your data",forceRender:""}},[n("wizard-download")],1):t._e()],1)],1)],1)},D=[],P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("keys"),n("selectors")],1)},_=[],A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-row",{attrs:{gutter:16}},t._l(t.info,(function(e,a){return n("a-col",{key:a,attrs:{span:8}},[n("a-statistic",{attrs:{title:e.title,value:e.value},scopedSlots:t._u([{key:"suffix",fn:function(){return[n("a-popover",{attrs:{title:"Data Insight"}},[n("template",{slot:"content"},[t._v(" Found "),n("b",[t._v(t._s(e.title))]),t._v(" in the data "),n("b",[t._v(t._s(e.value))]),t._v(" times ")]),n("a-icon",{attrs:{type:"question-circle"}})],2)]},proxy:!0}],null,!0)})],1)})),1)},k=[];n("4e82");function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function S(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(Object(n),!0).forEach((function(e){Object(g["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var E={computed:S({},Object(h["c"])(["getData"]),{info:function(){var t=Object.create(null),e=[];return this.getData.forEach((function(e){return Object.keys(e).forEach((function(e){return t[e]=(t[e]||0)+1}))})),Object.keys(t).forEach((function(n,a){return e.push({value:t[n],orignal:n,title:n.toUpperCase()})})),this.storeOptions(e),e.sort((function(t,e){return e.value-t.value}))}}),methods:S({},Object(h["b"])(["storeOptions"]))},z=E,M=Object(s["a"])(z,A,k,!1,null,null,null),F=M.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-row",{attrs:{gutter:16}},[n("a-col",{attrs:{span:24}},[n("a-divider",{attrs:{orientation:"left"}},[t._v("Select Options please")])],1),n("a-col",{attrs:{span:8}},[n("b",[t._v("Group by")]),n("a-select",{staticClass:"w-100",attrs:{id:"xAxis",placeholder:"choose an option"},on:{change:t.onXAxisChange}},t._l(t.getOptions,(function(e,a){return n("a-select-option",{key:a,attrs:{value:e.orignal}},[t._v(t._s(e.title))])})),1)],1),t.getXYAxis.x?n("a-col",{attrs:{span:8}},[n("b",{staticClass:"magictime swashIn"},[t._v("Then Group by..")]),n("a-select",{staticClass:"w-100",attrs:{id:"yAxis",placeholder:"choose an option"},on:{change:t.onYAxisChange}},[t._l(t.getOptions,(function(e,a){return[e.orignal!==t.getXYAxis.x?n("a-select-option",{key:a,attrs:{value:e.orignal}},[t._v(t._s(e.title))]):t._e()]}))],2)],1):t._e(),t.getXYAxis.x&&t.getXYAxis.y?n("a-col",{attrs:{span:8}},[n("b",{staticClass:"magictime swashIn"},[t._v("Choose an aggrigation function")]),n("a-select",{staticClass:"w-100",attrs:{id:"yAxis",placeholder:"choose an option"},on:{change:t.onAggFuncChange}},[n("a-select-option",{attrs:{value:"sumBy"}},[t._v("SUM")]),n("a-select-option",{attrs:{value:"meanBy"}},[t._v("AVG")])],1)],1):t._e(),t.getXYAxis.x&&t.getXYAxis.y&&t.getAggFun?n("a-col",{attrs:{span:8}},[n("b",{staticClass:"magictime swashIn"},[t._v("Choose an aggrigation column")]),n("a-select",{staticClass:"w-100",attrs:{id:"yAxis",placeholder:"choose an option"},on:{change:t.onAggColumnChange}},[t._l(t.getOptions,(function(e,a){return[e.orignal!==t.getXYAxis.x&&e.orignal!==t.getXYAxis.y?n("a-select-option",{key:a,attrs:{value:e.orignal}},[t._v(t._s(e.title))]):t._e()]}))],2)],1):t._e()],1)},X=[];function Y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function $(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Y(Object(n),!0).forEach((function(e){Object(g["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var I={computed:$({},Object(h["c"])(["getOptions","getXYAxis","getAggFun"])),created:function(){console.log(this.getOptions)},methods:$({},Object(h["b"])(["storeSelectedOptions"]),{onYAxisChange:function(t){var e=this;this.storeSelectedOptions({yAxis:null,aggFun:null,aggCol:null}),setTimeout((function(){return e.storeSelectedOptions({yAxis:t})}),0)},onXAxisChange:function(t){var e=this;this.storeSelectedOptions({xAxis:null}),setTimeout((function(){return e.storeSelectedOptions({xAxis:t,yAxis:null,aggFun:null,aggCol:null})}),0)},onAggFuncChange:function(t){var e=this;this.storeSelectedOptions({aggFun:null,aggCol:null}),setTimeout((function(){return e.storeSelectedOptions({aggFun:t})}),0)},onAggColumnChange:function(t){var e=this;this.storeSelectedOptions({aggCol:null}),setTimeout((function(){return e.storeSelectedOptions({aggCol:t})}),0)}})},N=I,B=Object(s["a"])(N,T,X,!1,null,null,null),R=B.exports,U={name:"wizard-info",components:{keys:F,selectors:R}},q=U,G=Object(s["a"])(q,P,_,!1,null,null,null),J=G.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-row",{attrs:{type:"flex",justify:"space-around",align:"middle"}},[n("a-popover",{attrs:{title:"Adding Chart section"}},[n("template",{slot:"content"},[t._v("Clicking this icon will add a chart section, so you can have as many charts as you like")]),n("a-button",{attrs:{type:"dashed",icon:"pie-chart",size:"large",shape:"circle"},on:{click:t.addChart}})],2),t._l(t.chartNum,(function(e,a){return n("a-col",{key:a,attrs:{span:24}},[t.del.includes(e)?t._e():n("section",{staticClass:"m-2",staticStyle:{"min-height":"200px"}},[n("a-divider",{attrs:{orientation:"right"}},[n("a-button",{attrs:{type:"danger",icon:"close"},on:{click:function(n){return t.deleteChart(e)}}})],1),n("chart-type")],1)])}))],2)},L=[],H=(n("d81d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-row",{attrs:{type:"flex",justify:"space-around",align:"middle"}},[n("a-select",{staticClass:"w-25 m-4",attrs:{tokenSeparators:[","],disabled:!!t.chart,placeholder:"select chart type"},on:{change:t.handleChange}},t._l(t.charts,(function(e,a){return n("a-select-option",{key:a,attrs:{value:e}},[t._v(t._s(e))])})),1),n("a-col",{attrs:{span:24}},[n("chart-container",{attrs:{chartType:t.chart}})],1)],1)}),K=[],W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-row",{attrs:{type:"flex",justify:"space-around",align:"middle"}},["pie"===t.chartType?n("section",{staticClass:"w-100"},[n("pie")],1):t._e(),"bar"===t.chartType?n("section",{staticClass:"w-100"},[n("bar")],1):t._e(),"bubble"===t.chartType?n("section",{staticClass:"w-100"},[n("bubble")],1):t._e()])},Q=[],Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-row",{attrs:{type:"flex",justify:"space-around",align:"middle"}},[n("section",{staticClass:"w-100"},[n("a-popover",{attrs:{title:"Information about the Pie Chart"}},[n("template",{slot:"content"},[n("p",[n("strong",[t._v("This pie chart shows only 2 dimensional data")]),t._v(", so even if you have 2 lvls of group, you will see only data with x/y axis only ")]),n("p",[t._v(" for example if you have a music data set and you grouped data by genre and artist name the summed the data by length, the chart will only show you genere by length (summed) ")])]),n("a-button",{attrs:{shape:"circle",icon:"exclamation-circle"}})],2),n("a-select",{staticClass:"ml-2",staticStyle:{width:"220px"},attrs:{defaultValue:"normal"},on:{change:t.handleChange}},[n("a-select-option",{attrs:{value:"normal"}},[t._v(" Rose Type "),n("b",[t._v("Normal")])]),n("a-select-option",{attrs:{value:"radius"}},[t._v(" Rose Type "),n("b",[t._v("Radius")])])],1),n("v-chart",{attrs:{options:t.chart}})],1)])},tt=[],et=(n("99af"),n("b0c0"),n("acd8"),function(t){return{title:{},tooltip:{trigger:"item",formatter:"Insights <br/>{b} (".concat(t.tooltip||"",") : {c} ({d}%)")},toolbox:{feature:{saveAsImage:{title:" "}}},legend:{type:"scroll",orient:"vertical",right:10,top:20,bottom:20,data:t.legendData,selected:t.selected},series:[{name:"Pie Chart",type:"pie",radius:"55%",center:["40%","50%"],data:t.seriesData,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:10,shadowColor:"rgba(0, 0, 0, 0.5)"}},roseType:t.roseType,animationType:"scale",animationEasing:"elasticOut",animationDelay:function(){return 200*Math.random()}}]}}),nt=et,at=n("9ca8");n("c037"),n("0b4b"),n("d28f"),n("007d"),n("b11c");function rt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function ot(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?rt(Object(n),!0).forEach((function(e){Object(g["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):rt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var st={computed:ot({},Object(h["c"])(["getModifiedData","getXYAxis","getAggFun","getAggCol"])),created:function(){this.initChart()},components:{"v-chart":at["a"]},methods:{handleChange:function(t){"radius"===t?this.initChart(t):this.initChart()},initChart:function(t){var e=this,n=(this.getXYAxis.x,this.getAggFun),a=this.getAggCol,r=Object.keys(this.getModifiedData),o=[];r.forEach((function(t){var n={name:t,value:Object.keys(e.getModifiedData[t]).reduce((function(n,a){return n+parseFloat(e.getModifiedData[t][a]||0)}),0)};o.push(n)})),o=o.sort((function(t,e){return e.value-t.value}));var s=o.map((function(t,e){var n=t.name;return e<9?{name:n,show:!0}:{name:n,show:!1}})).reduce((function(t,e){var n=e.name,a=e.show;return ot({},t,Object(g["a"])({},n,a))}),{});this.chart=nt({legendData:r,seriesData:o,selected:s,tooltip:"".concat(n,"(").concat(a,")"),roseType:t})}},data:function(){return{chart:null}}},ct=st,it=(n("312d"),Object(s["a"])(ct,Z,tt,!1,null,null,null)),lt=it.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-row",{attrs:{type:"flex",justify:"space-around",align:"middle"}},[n("section",{staticClass:"w-100"},[n("a-popover",{attrs:{title:"Information about the bar Chart"}},[n("template",{slot:"content"},[n("p",[n("strong",[t._v("This bar chart shows only 3 dimensional data")]),t._v(", ")]),n("p",[t._v(" but keep in mind that you need to understand your data, so you can create a chart that make sense ")])]),n("a-button",{attrs:{shape:"circle",icon:"exclamation-circle"}})],2),n("v-chart",{attrs:{options:t.chart}})],1)])},ft=[],pt=(n("cb29"),n("7db0"),n("a630"),n("caad"),n("4ec9"),n("d3b7"),n("2532"),n("3ca3"),n("841c"),n("ddb0"),function(t){var e=t.legends,n=t.xAxis,a=t.series,r=t.selected;return{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{type:"scroll",data:e,selected:r},toolbox:{show:!0,orient:"vertical",left:"right",top:"center",feature:{saveAsImage:{show:!0,title:" "}}},calculable:!0,xAxis:[{type:"category",axisTick:{show:!1},data:n}],yAxis:[{type:"value"}],series:a}}),dt=pt;n("17b8"),n("94b1");function bt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function gt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?bt(Object(n),!0).forEach((function(e){Object(g["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):bt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var ht={computed:gt({},Object(h["c"])(["getModifiedData","getXYAxis","getAggCol"])),created:function(){var t=this,e=this.getXYAxis,n=(e.x,e.y,this.getAggCol,Object.keys(this.getModifiedData)),a=new Map;n.forEach((function(e,n){a.set(e,{search:Object.keys(t.getModifiedData[e]),i:n})}));var r=[],o=[];n.forEach((function(e){Object.keys(t.getModifiedData[e]).forEach((function(s){r.includes(s)||r.push(s);var c=0;if(a.has(e)){var i=a.get(e),l=i.search,u=i.i;c=l.includes(s)?u:0}var f=Array.from({length:n.length}).fill(0);f[c]=t.getModifiedData[e][s];var p=o.find((function(t){return t.name===s}));p?(o=o.filter((function(t){return t.name!==s})),p.data=p.data.map((function(t,e){return 0!==f[e]?f[e]:t})),o.push(p)):o.push({name:s,type:"bar",data:f,animationType:"scale",animationEasing:"elasticOut",animationDelay:function(){return 200*Math.random()}})}))})),console.log(o),this.chart=dt({legends:r,xAxis:n,series:o,selected:r.reduce((function(t,e){return gt({},t,Object(g["a"])({},e,Math.random()>.5))}),{})})},data:function(){return{chart:null}},components:{"v-chart":at["a"]}},jt=ht,yt=(n("1a32"),Object(s["a"])(jt,ut,ft,!1,null,null,null)),Ot=yt.exports,mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-row",{attrs:{type:"flex",justify:"space-around",align:"middle"}},[n("section",{staticClass:"w-100"},[n("a-popover",{attrs:{title:"Information about the bubble Chart"}},[n("template",{slot:"content"},[n("p",[n("strong",[t._v("This bubble chart shows only 2 dimensional data")]),t._v(", ")])]),n("a-button",{attrs:{shape:"circle",icon:"exclamation-circle"}})],2),n("v-chart",{attrs:{options:t.chart}})],1)])},vt=[];function wt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function xt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?wt(Object(n),!0).forEach((function(e){Object(g["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):wt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Dt=function(t){var e=t.legends,n=t.series;return{legend:{type:"scroll",right:10,top:20,bottom:20,selected:e.reduce((function(t,e){return xt({},t,Object(g["a"])({},e,!1))}),{}),data:e},xAxis:{splitLine:{lineStyle:{type:"dashed"}}},yAxis:{splitLine:{lineStyle:{type:"dashed"}},scale:!0},series:n}},Pt=Dt;n("313e");function _t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function At(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_t(Object(n),!0).forEach((function(e){Object(g["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_t(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var kt={computed:At({},Object(h["c"])(["getModifiedData","getXYAxis","getAggCol"])),created:function(){this.initChart()},methods:{initChart:function(){var t=this,e=Object.keys(this.getModifiedData).map((function(e){return Object.keys(t.getModifiedData[e]).reduce((function(n,a){return At({},n,{name:e,type:"scatter",animationType:"scale",animationEasing:"elasticOut",animationDelay:function(t){return 5*t},data:[t.getModifiedData[e][a],a,e],label:{emphasis:{show:!0,formatter:function(t){return"".concat(t.seriesName,": ").concat(t.data)},position:"top"}},symbolSize:function(t){return isNaN(t)?10:Math.sqrt(t)}})}),{})}));this.chart=Pt({legends:Object.keys(this.getModifiedData),series:e}),console.log(this.chart)}},data:function(){return{chart:null}},components:{"v-chart":at["a"]}},Ct=kt,St=Object(s["a"])(Ct,mt,vt,!1,null,null,null),Et=St.exports,zt={props:{chartType:String},components:{pie:lt,bar:Ot,bubble:Et}},Mt=zt,Ft=Object(s["a"])(Mt,W,Q,!1,null,null,null),Tt=Ft.exports,Xt={data:function(){return{charts:["pie","bar","bubble"],chart:null}},components:{"chart-container":Tt},methods:{handleChange:function(t){this.chart=t}}},Yt=Xt,$t=Object(s["a"])(Yt,H,K,!1,null,null,null),It=$t.exports,Nt=n("2ef0");function Bt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function Rt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Bt(Object(n),!0).forEach((function(e){Object(g["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Bt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Ut={name:"wizard-chart",computed:Rt({},Object(h["c"])(["getSelectedOptions","getData","getXYAxis","getAggFun","getAggCol"])),methods:Rt({},Object(h["b"])(["storeModifiedData"]),{addChart:function(){this.chartNum.push(Date.now())},deleteChart:function(t){this.del.push(t)}}),created:function(){},mounted:function(){var t=this,e=this.getXYAxis,n=e.x,a=e.y,r=this.getAggFun,o=Object(Nt["mapValues"])(Object(Nt["groupBy"])(this.getData,n),(function(t){return t.map((function(t){return Object(Nt["omit"])(t,n)}))}));Object.keys(o).forEach((function(e){o[e]=Object(Nt["mapValues"])(Object(Nt["groupBy"])(o[e],a),(function(t){return t.map((function(t){return Object(Nt["omit"])(t,a)}))})),Object.keys(o[e]).forEach((function(n){o[e][n]="sumBy"===r?Object(Nt["sumBy"])(o[e][n],(function(e){return e[t.getAggCol]})):Object(Nt["meanBy"])(o[e][n],(function(e){return e[t.getAggCol]}))}))})),this.storeModifiedData(o)},components:{"chart-type":It},data:function(){return{chartNum:[],del:[]}}},qt=Ut,Gt=Object(s["a"])(qt,V,L,!1,null,null,null),Jt=Gt.exports,Vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-row",{staticClass:"mt-5",attrs:{type:"flex",justify:"space-around",align:"middle"}},[n("a-button",{attrs:{type:"primary",icon:"download",size:"large",loading:t.loading},on:{click:t.download}},[t._v("Download yor data")])],1)},Lt=[],Ht=n("21a6");function Kt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function Wt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Kt(Object(n),!0).forEach((function(e){Object(g["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Kt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Qt={computed:Wt({},Object(h["c"])(["getModifiedData"])),data:function(){return{loading:!1}},methods:{download:function(){var t=this;console.log(this.getModifiedData),this.loading=!0;try{var e=new Blob([JSON.stringify(this.getModifiedData,null,2)],{type:"application/json"});Object(Ht["saveAs"])(e,Date.now()),setTimeout((function(){t.loading=!1}),1e3)}catch(n){this.loading=!1,console.error("ERR..",n)}}}},Zt=Qt,te=Object(s["a"])(Zt,Vt,Lt,!1,null,null,null),ee=te.exports;function ne(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function ae(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ne(Object(n),!0).forEach((function(e){Object(g["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var re={name:"wizard",computed:ae({},Object(h["c"])(["getXYAxis","getAggFun","getAggCol"])),methods:ae({},Object(h["b"])(["clearData","clearModifiedData","clearOptions"]),{clearAll:function(){this.clearData(),this.clearModifiedData(),this.clearOptions(),ue.push({path:"/"})}}),components:{"wizard-info":J,"wizard-chart":Jt,"wizard-download":ee}},oe=re,se=Object(s["a"])(oe,x,D,!1,null,null,null),ce=se.exports;a["a"].use(f["a"]);var ie=[{path:"/",name:"home",component:w},{path:"/wizard",name:"wizard",component:ce}],le=new f["a"]({mode:"history",base:"/Davalpa/",routes:ie}),ue=le,fe={data:[]},pe={storeData:function(t,e){t.commit("setData",e)},clearData:function(t){t.commit("clear")}},de={getData:function(t){return t.data}},be={setData:function(t,e){t.data=e},clear:function(t){Object.assign(t,{data:[]})}},ge={state:fe,getters:de,actions:pe,mutations:be};function he(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function je(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?he(Object(n),!0).forEach((function(e){Object(g["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):he(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var ye={options:[],selectedOptions:{xAxis:null,yAxis:null,aggFun:null,aggCol:null}},Oe={storeOptions:function(t,e){t.commit("setOptions",e)},storeSelectedOptions:function(t,e){t.commit("setSelectedOptions",e)},clearOptions:function(t){t.commit("clearOptions")}},me={getOptions:function(t){return t.options},getSelectedOptions:function(t){return t.selectedOptions},getXYAxis:function(t){var e=t.selectedOptions,n=e.xAxis,a=e.yAxis;return{x:n,y:a}},getAggFun:function(t){var e=t.selectedOptions.aggFun;return e},getAggCol:function(t){var e=t.selectedOptions.aggCol;return e}},ve={setOptions:function(t,e){t.options=e},setSelectedOptions:function(t,e){t.selectedOptions=je({},t.selectedOptions,{},e)},clearOptions:function(t){Object.assign(t,{options:[],selectedOptions:{xAxis:null,yAxis:null,aggFun:null,aggCol:null}})}},we={state:ye,getters:me,actions:Oe,mutations:ve},xe={modifiedData:null},De={storeModifiedData:function(t,e){t.commit("setModifiedData",e)},clearModifiedData:function(t){t.commit("clear")}},Pe={getModifiedData:function(t){return t.modifiedData}},_e={setModifiedData:function(t,e){t.modifiedData=e},clear:function(t){Object.assign(t,{modifiedData:null})}},Ae={state:xe,getters:Pe,actions:De,mutations:_e};a["a"].use(h["a"]);var ke=new h["a"].Store({state:{},mutations:{},actions:{},modules:{Data:ge,Options:we,ModifiedData:Ae}}),Ce=(n("2fbf"),n("5c0b"),n("5efb")),Se=n("e32c"),Ee=n("9a63"),ze=n("0c63"),Me=n("ccb9"),Fe=n("59a5"),Te=n("dfae"),Xe=n("a8ba"),Ye=n("681b"),$e=n("9839"),Ie=n("a79d8"),Ne=n("56cd");a["a"].config.productionTip=!1,a["a"].use(Ce["a"]).use(Se["a"]).use(Ee["a"]).use(ze["a"]).use(Me["a"]).use(Fe["a"]).use(Te["a"]).use(Xe["a"]).use(Ye["a"]).use($e["a"]).use(Ie["a"]),a["a"].prototype.$notification=Ne["a"],new a["a"]({router:ue,store:ke,render:function(t){return t(l)}}).$mount("#app")}});
//# sourceMappingURL=app.6d2084bb.js.map