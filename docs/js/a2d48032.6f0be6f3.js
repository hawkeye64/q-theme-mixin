(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["a2d48032"],{"384e":function(e,t,n){"use strict";n("7f7f");var o=n("ab0b"),r=(n("ac6a"),n("cadf"),n("06db"),n("5df3"),n("f400"),{name:"QThemeMixin",props:{theme:{type:Object,default:function(){}},enableTheme:Boolean},methods:{useDefaultTheme:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n},getThemeColors:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=new Map;return!0===this.enableTheme&&void 0!==this.theme&&t.forEach((function(t){n.set(t,e.theme[t])})),n}}});n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o["a"]})),r.version=o["a"];o["a"]},6372:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-pa-md"},[n("div",{staticClass:"q-pb-md q-gutter-md row justify-around"},[n("q-toggle",{staticClass:"col-12",attrs:{label:"Enable themes"},model:{value:e.enableTheme,callback:function(t){e.enableTheme=t},expression:"enableTheme"}}),n("q-select",{staticClass:"col-12",attrs:{outlined:"",dense:"","emit-value":"","map-options":"",label:"Change theme",options:e.themesList,disable:!0!==e.enableTheme},model:{value:e.theme,callback:function(t){e.theme=t},expression:"theme"}})],1),n("q-separator"),n("div",{staticClass:"q-pa-md row justify-around"},[n("my-component",{staticClass:"text-center",attrs:{"enable-theme":e.enableTheme,theme:e.theme}},[n("div",{staticClass:"text-h4"},[e._v("Some Text")])])],1)],1)},r=[],a=(n("8e6e"),n("8a81"),n("456d"),n("c47a")),l=n.n(a),s=(n("7f7f"),n("ac6a"),n("cadf"),n("06db"),n("5df3"),n("f400"),n("2b0e")),i=n("09d7"),c=n("384e");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(n,!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=s["a"].extend({name:"my-component",mixins:[i["a"],c["a"]],render:function(e){var t,n,o=new Map,r=this.useDefaultTheme;return!0===this.enableTheme&&(t="color",n="bgColor",o=this.getThemeColors([t,n]),r=this.setBothColors),e("div",r(o.get(t),o.get(n),{style:{width:"200px",height:"200px"}}),[this.$slots.default])}}),b={components:{MyComponent:h},data:function(){return{enableTheme:!0,theme:void 0,themes:[{name:"Default"},{name:"Dark",color:"blue-grey-2",bgColor:"blue-grey-8"},{name:"Teal",color:"teal-2",bgColor:"teal-8"},{name:"Brown",color:"brown-2",bgColor:"brown-8"},{name:"Deep Purple",color:"deep-purple-2",bgColor:"deep-purple-8"},{name:"Indigo",color:"grey-2",bgColor:"indigo-8"},{name:"Blue",color:"blue-2",bgColor:"blue-8"}]}},computed:{themesList:function(){var e=[];return this.themes.forEach((function(t){e.push({label:t.name,value:m({},t)})})),e}}},p=b,f=n("2877"),d=Object(f["a"])(p,o,r,!1,null,null,null);t["default"]=d.exports},ab0b:function(e){e.exports=JSON.parse('{"a":"1.0.1"}')}}]);