(function(e){function n(n){for(var o,r,u=n[0],c=n[1],d=n[2],l=0,s=[];l<u.length;l++)r=u[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&s.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);f&&f(n);while(s.length)s.shift()();return i.push.apply(i,d||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],o=!0,u=1;u<t.length;u++){var c=t[u];0!==a[c]&&(o=!1)}o&&(i.splice(n--,1),e=r(r.s=t[0]))}return e}var o={},a={index:0},i=[];function r(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.e=function(e){var n=[],t=a[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise((function(n,o){t=a[e]=[n,o]}));n.push(t[2]=o);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.src=function(e){return r.p+"static/js/"+({"pages-index-index":"pages-index-index","pages-ttt-ttt":"pages-ttt-ttt"}[e]||e)+"."+{"pages-index-index":"1e4cbbc8","pages-ttt-ttt":"d7c70301"}[e]+".js"}(e);var c=new Error;i=function(n){u.onerror=u.onload=null,clearTimeout(d);var t=a[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,t[1](c)}a[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(n)},r.m=e,r.c=o,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="/",r.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=n,u=u.slice();for(var d=0;d<u.length;d++)n(u[d]);var f=c;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("6252")},"199c":function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){}));var o=function(){var e=this.$createElement,n=this._self._c||e;return n("App",{attrs:{keepAliveInclude:this.keepAliveInclude}})},a=[]},"27f9":function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){}));var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-uni-view",{staticClass:"top-window-header"},[t("v-uni-view",{staticClass:"left-header logo"},[t("v-uni-navigator",{staticClass:"logo",attrs:{"open-type":"reLaunch",url:"/pages/component/view/view"}},[t("v-uni-text",[e._v("飞行模拟")])],1)],1),t("custom-tab-bar",{staticClass:"tab-bar-flex",attrs:{direction:"horizontal","show-icon":!1,selected:e.current},on:{onTabItemTap:function(n){arguments[0]=n=e.$handleEvent(n),e.toSecondMenu.apply(void 0,arguments)}}})],1)},a=[]},"5cda":function(e,n,t){"use strict";t.r(n);var o=t("199c"),a=t("6d08");for(var i in a)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(i);t("c3ff");var r=t("f0c5"),u=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);n["default"]=u.exports},6252:function(e,n,t){"use strict";var o=t("4ea4").default;t("d3b7");var a=o(t("5530")),i=o(t("53ca"));t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("b875"),t("1c31");var r=o(t("5cda")),u=o(t("e143"));u.default.config.productionTip=!1,r.default.mpType="app";try{uni.addInterceptor({returnValue:function(e){return function(e){return!!e&&("object"===(0,i.default)(e)||"function"===typeof e)&&"function"===typeof e.then}(e)?new Promise((function(n,t){e.then((function(e){e[0]?t(e[0]):n(e[1])}))})):e}})}catch(d){}var c=new u.default((0,a.default)({},r.default));c.$mount()},"62a9":function(e,n,t){var o=t("9b9c");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var a=t("4f06").default;a("ae3aa712",o,!0,{sourceMap:!1,shadowMode:!1})},"6d08":function(e,n,t){"use strict";t.r(n);var o=t("7142"),a=t.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(i);n["default"]=a.a},7142:function(e,n,t){"use strict";t("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};n.default=o},"7d51":function(e,n,t){"use strict";t.r(n);var o=t("27f9"),a=t("c305");for(var i in a)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(i);t("fad8");var r=t("f0c5"),u=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"5ff27d82",null,!1,o["a"],void 0);n["default"]=u.exports},"9b9c":function(e,n,t){var o=t("24fb");n=o(!1),n.push([e.i,"uni-page-body,html,body{height:100%}h1{margin:10px}h2{margin:5px}h3{margin:3px}",""]),e.exports=n},b2f6:function(e,n,t){var o=t("ca80");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var a=t("4f06").default;a("751ee77f",o,!0,{sourceMap:!1,shadowMode:!1})},b875:function(e,n,t){"use strict";(function(e){var n=t("4ea4").default;t("13d5"),t("d3b7"),t("ddb0"),t("ac1f"),t("5319");var o=n(t("e143")),a=n(t("7d51"));a.default.style={height:"60px"},o.default.component("VUniTopWindow",a.default);var i={keys:function(){return[]}};e["____B52E18B____"]=!0,delete e["____B52E18B____"],e.__uniConfig={topWindow:{path:"windows/top-window.vue",style:{height:"60px"}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"模拟器演示",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"},uniIdRouter:{}},e.__uniConfig.compilerVersion="3.8.12",e.__uniConfig.darkmode=!1,e.__uniConfig.themeConfig={},e.__uniConfig.uniPlatform="h5",e.__uniConfig.appId="__UNI__B52E18B",e.__uniConfig.appName="FlyVie_web",e.__uniConfig.appVersion="1.0.0",e.__uniConfig.appVersionCode="100",e.__uniConfig.router={mode:"hash",base:"/"},e.__uniConfig.publicPath="/",e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey=void 0,e.__uniConfig.googleMapKey=void 0,e.__uniConfig.aMapKey=void 0,e.__uniConfig.aMapSecurityJsCode=void 0,e.__uniConfig.aMapServiceHost=void 0,e.__uniConfig.locale="",e.__uniConfig.fallbackLocale=void 0,e.__uniConfig.locales=i.keys().reduce((function(e,n){var t=n.replace(/\.\/(uni-app.)?(.*).json/,"$2"),o=i(n);return Object.assign(e[t]||(e[t]={}),o.common||o),e}),{}),e.__uniConfig.nvue={"flex-direction":"column"},e.__uniConfig.__webpack_chunk_load__=t.e,o.default.component("pages-index-index",(function(e){var n={component:t.e("pages-index-index").then(function(){return e(t("bee5"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-ttt-ttt",(function(e){var n={component:t.e("pages-ttt-ttt").then(function(){return e(t("393a"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),e.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{navigationBarTitleText:"",titleNView:!1})},[e("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,windowTop:0}},{path:"/pages/ttt/ttt",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"",enablePullDownRefresh:!1})},[e("pages-ttt-ttt",{slot:"page"})])}},meta:{name:"pages-ttt-ttt",isNVue:!1,maxWidth:0,pagePath:"pages/ttt/ttt",windowTop:44}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],e.UniApp&&new e.UniApp}).call(this,t("c8ba"))},c305:function(e,n,t){"use strict";t.r(n);var o=t("e3a3"),a=t.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(i);n["default"]=a.a},c3ff:function(e,n,t){"use strict";var o=t("62a9"),a=t.n(o);a.a},ca80:function(e,n,t){var o=t("24fb");n=o(!1),n.push([e.i,".top-window-header[data-v-5ff27d82]{height:50px;padding:0 15px;display:flex;flex-direction:row;justify-content:space-between;align-items:center;box-sizing:border-box;border-bottom:1px solid #e1e1e1;background-color:#002455;color:#fff}.logo[data-v-5ff27d82]{display:flex;flex-direction:row;align-items:center;flex:1}.logo uni-image[data-v-5ff27d82]{height:30px;width:30px}.logo uni-text[data-v-5ff27d82]{margin-left:8px}.right-header[data-v-5ff27d82]{display:flex;flex-direction:row;color:#333}.right-header-item[data-v-5ff27d82]{line-height:25px;margin-left:40px;cursor:pointer;font-size:16px}.active[data-v-5ff27d82]{color:#4cd964;border-bottom:2px solid}.tab-bar-flex[data-v-5ff27d82]{width:360px}.phone-link[data-v-5ff27d82]{padding-left:20px;cursor:pointer}.new-icon[data-v-5ff27d82]{margin-left:-3px;\n\t/* margin-right: 5px; */margin-top:-20px}",""]),e.exports=n},e3a3:function(e,n,t){"use strict";t("7a82");var o=t("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(t("b85c")),i={data:function(){return{selected:{component:0,API:1,extUI:2,template:3},current:0,indexPage:[{tabBar:"/pages/tabBar/component/component",index:"/pages/component/view/view"},{tabBar:"/pages/tabBar/API/API",index:"/pages/API/set-navigation-bar-title/set-navigation-bar-title"},{tabBar:"/pages/tabBar/extUI/extUI",index:"/pages/extUI/badge/badge"},{tabBar:"/pages/tabBar/template/template",index:"/pages/template/nav-button/nav-button"}]}},watch:{$route:{immediate:!0,handler:function(e){var n=uni.getSystemInfoSync().screenWidth;if(n>=768){var t,o=e.path;"/"===o?(t="component",o="/pages/tabBar/component/component"):t=o.split("/")[2],this.current=this.selected[t];var i,r=(0,a.default)(this.indexPage);try{for(r.s();!(i=r.n()).done;){var u=i.value;o===u.tabBar&&uni.redirectTo({url:u.index})}}catch(c){r.e(c)}finally{r.f()}}}}},mounted:function(){},methods:{toSecondMenu:function(e){var n,t="/"+e.pagePath,o=(0,a.default)(this.indexPage);try{for(o.s();!(n=o.n()).done;){var i=n.value;t===i.tabBar&&uni.redirectTo({url:i.index})}}catch(r){o.e(r)}finally{o.f()}}}};n.default=i},fad8:function(e,n,t){"use strict";var o=t("b2f6"),a=t.n(o);a.a}});