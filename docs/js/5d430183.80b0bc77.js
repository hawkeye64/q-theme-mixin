(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["5d430183"],{"0960":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("hero",[o("div",{staticClass:"q-markdown"},[o("q-markdown",[e._v("\nIn the examples below, QThemeMixin is dependent on the [QColorizeMixin](https://github.com/hawkeye64/q-colorize-mixin) to apply the actual colors.\n      ")]),o("example-title",{attrs:{title:"Theme Basic"}}),o("example-card",{attrs:{title:"Simple Theme",name:"ThemeSimple","tag-parts":e.getTagParts(n("7e0b").default)}}),o("example-title",{attrs:{title:"Theme Advanced"}}),o("example-card",{attrs:{title:"Theme Selection",name:"ThemeSelection","tag-parts":e.getTagParts(n("4f87").default)}}),o("example-card",{attrs:{title:"Theme Quasar Components",name:"ThemeQuasarComponents","tag-parts":e.getTagParts(n("3755").default)}})],1)])},a=[],l=n("2514"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{staticClass:"q-markdown--heading-h1 q-markdown--title-heavy example-title",attrs:{id:e.slugifiedTitle},on:{click:function(t){return e.copyHeading(e.slugifiedTitle)}}},[e._v(e._s(e.title))])},s=[];n("a481");function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Anchor has been copied to clipboard.",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"white",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"primary",a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"done",l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"top",r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:2e3,s=window.location.origin+window.location.pathname+"#"+e,i=document.createElement("textarea");i.className="fixed-top",i.value=s,document.body.appendChild(i),i.focus(),i.select(),document.execCommand("copy"),document.body.removeChild(i),this.$q.notify({message:t,color:n,textColor:o,icon:a,position:l,timeout:r})}function c(e){return encodeURIComponent(String(e).trim().replace(/\s+/g,"-"))}var m={name:"ExampleTitle",props:{title:{type:String,required:!0}},computed:{slugifiedTitle:function(){return c(this.title)}},methods:{copyHeading:i}},h=m,d=n("2877"),p=Object(d["a"])(h,r,s,!1,null,null,null),u=p.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"q-pa-md overflow-auto",attrs:{id:e.slugifiedTitle}},[n("q-card",{staticClass:"no-shadow",attrs:{flat:"",bordered:""}},[n("q-toolbar",[n("q-ribbon",{attrs:{position:"left",color:"rgba(0,0,0,.58)","background-color":"#c0c0c0","leaf-color":"#a0a0a0","leaf-position":"bottom",decoration:"rounded-out"}},[n("q-toolbar-title",{staticClass:"example-title",staticStyle:{padding:"5px 20px"},on:{click:function(t){return e.copyHeading(e.slugifiedTitle)}}},[n("span",{staticClass:"ellipsis"},[e._v(e._s(e.title))])])],1)],1),n("q-separator"),n("q-expansion-item",{attrs:{group:"someGroup",caption:"Code"}},[n("q-card",[n("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"left","narrow-indicator":""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[e.parts.template?n("q-tab",{attrs:{name:"template",label:"Template"}}):e._e(),e.parts.script?n("q-tab",{attrs:{name:"script",label:"Script"}}):e._e(),e.parts.style?n("q-tab",{attrs:{name:"style",label:"Style"}}):e._e()],1),n("q-separator"),n("q-tab-panels",{attrs:{animated:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[e.parts.template?n("q-tab-panel",{attrs:{name:"template"}},[n("q-markdown",{attrs:{src:e.parts.template}})],1):e._e(),e.parts.script?n("q-tab-panel",{attrs:{name:"script"}},[n("q-markdown",{attrs:{src:e.parts.script}})],1):e._e(),e.parts.style?n("q-tab-panel",{attrs:{name:"style"}},[n("q-markdown",{attrs:{src:e.parts.style}})],1):e._e()],1)],1)],1),n("q-separator"),n(e.name,{tag:"component",staticStyle:{overflow:"hidden"}})],1)],1)},g=[],C=(n("ac6a"),n("cadf"),n("06db"),n("456d"),{name:"ExampleCard",props:{title:{type:String,required:!0},name:{type:String,required:!0},tagParts:{type:Object,default:function(){}}},data:function(){return{tab:"template",parts:{}}},mounted:function(){this.updateParts()},computed:{slugifiedTitle:function(){return c(this.title)}},methods:{copyHeading:i,updateParts:function(){var e=this;this.parts={},Object.keys(this.tagParts).forEach((function(t){""!==e.tagParts[t]&&(e.parts[t]="```\n"+e.tagParts[t]+"\n```")}))}}}),f=C,v=Object(d["a"])(f,b,g,!1,null,null,null),T=v.exports,x=n("ad53"),y={name:"Examples",components:{Hero:l["a"],ExampleTitle:u,ExampleCard:T},data:function(){return{tempToc:[]}},mounted:function(){this.toc=[],this.tempToc=[],this.addToToc("Theme Basic"),this.addToToc("Simple Theme",2),this.addToToc("Theme Advanced"),this.addToToc("Theme Selection",2),this.addToToc("Theme Quasar Components",2),this.toc=this.tempToc},computed:{toc:{get:function(){return this.$store.state.common.toc},set:function(e){this.$store.commit("common/toc",e)}}},methods:{getTagParts:x["c"],addToToc:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=c(e);this.tempToc.push({children:[],id:n,label:e,level:t})}}},q=y,w=(n("e872"),Object(d["a"])(q,o,a,!1,null,null,null));t["default"]=w.exports},"17bf":function(e,t,n){},2514:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("section",{staticClass:"page-header"},[n("div",{staticClass:"donate"},[n("a",{attrs:{href:e.donateUrl,target:"_blank",title:"Donate"}},[n("i",{staticClass:"fas fa-heart",staticStyle:{color:"red"}})])]),n("div",{staticClass:"text-h1 project-name"},[e._v(e._s(e.title))]),n("div",{staticClass:"text-h2 project-tagline"},[e._v(e._s(e.tagline))]),n("q-btn",{staticClass:"btn",attrs:{type:"a",href:e.locationUrl,target:"_blank",label:"View on GitHub","no-caps":"",flat:""}}),n("q-btn",{staticClass:"btn",attrs:{to:"/docs",label:"Docs","no-caps":"",flat:""}}),n("q-btn",{staticClass:"btn",attrs:{to:"/examples",label:"Examples","no-caps":"",flat:""}}),e.hasInteractiveDemo?n("q-btn",{staticClass:"btn",attrs:{to:"/demo",label:"Interactive Demo","no-caps":"",flat:""}}):e._e(),n("q-btn",{staticClass:"btn",attrs:{type:"a",href:e.donateUrl,target:"_blank",label:"Donate","no-caps":"",flat:""}}),n("div",{staticClass:"row justify-evenly items-center q-ma-sm"},[n("div",{staticClass:"quasar"},[e._v(e._s(e.quasarDesc))]),n("div",{staticClass:"byline"},[e._v(e._s(e.byline)),n("a",{attrs:{href:e.bylineTwitter,target:"_blank",title:"Twitter"}},[n("i",{staticClass:"fab fa-twitter"})])])])],1),n("main",{staticClass:"flex flex-start justify-center inset-shadow"},[n("div",{staticClass:"q-pa-md col-12-sm col-8-md col-6-lg inset-shadow",staticStyle:{width:"100%",height:"3px"}}),n("div",{staticClass:"q-pa-md col-12-sm col-8-md col-6-lg shadow-1",staticStyle:{"max-width":"800px",width:"100%"}},[e._t("default")],2)])])},a=[],l={name:"Hero",data:function(){return{title:"QThemeMixin",tagline:"Mixin library for Vue Render Functions",byline:"Created and maintained by Jeff Galbraith",bylineTwitter:"https://twitter.com/jgalbraith64",quasarDesc:"A Quasar Framework Component and App Extension",locationUrl:"https://github.com/hawkeye64/q-theme-mixin",donateUrl:"https://github.com/sponsors/hawkeye64",hasInteractiveDemo:!1}}},r=l,s=n("2877"),i=Object(s["a"])(r,o,a,!1,null,null,null);t["a"]=i.exports},3755:function(e,t,n){"use strict";n.r(t),t["default"]="<template>\n  <div class=\"q-pa-md\">\n    <div class=\"q-pb-md q-gutter-md row justify-around\">\n      <q-toggle\n        class=\"col-12\"\n        v-model=\"enableTheme\"\n        label=\"Enable themes\"\n      />\n      <q-select\n        outlined\n        dense\n        emit-value\n        map-options\n        label=\"Change theme\"\n        v-model=\"theme\"\n        :options=\"themesList\"\n        :disable=\"enableTheme !== true\"\n        class=\"col-12\"\n      />\n    </div>\n    <q-separator />\n    <div class=\"q-pa-md row justify-around\">\n      <my-component\n        :enable-theme=\"enableTheme\"\n        :theme=\"theme\"\n        class=\"text-center\"\n      >\n        <div class=\"text-h4\">Quasar Components</div>\n      </my-component>\n    </div>\n  </div>\n</template>\n\n<script>\nimport Vue from 'vue'\nimport { QColorizeMixin } from 'q-colorize-mixin'\nimport { QThemeMixin } from 'q-theme-mixin'\n\nconst MyComponent = Vue.extend({\n  name: 'my-component',\n\n  mixins: [QColorizeMixin, QThemeMixin],\n\n  data () {\n    return {\n      radio: 'line',\n      checkbox: true,\n      knob: 70\n    }\n  },\n\n  methods: {\n    __renderRadio (h, type, label) {\n      let colors = new Map(), color, bgColor\n      let updateColors = this.useDefaultTheme\n      if (this.enableTheme === true) {\n        color = 'color'\n        bgColor = 'bgColor'\n        colors = this.getThemeColors([color, bgColor])\n        updateColors = this.setBothColors\n      }\n\n      return h('q-radio', updateColors(colors.get(color), colors.get(bgColor), {\n        props: {\n          value: this.radio,\n          val: type,\n          label: label,\n          dark: (this.enableTheme === true && this.theme && 'color' in this.theme),\n          color: this.enableTheme === true && this.theme && 'color' in this.theme ? this.theme.color : void 0\n        },\n        on: {\n          input: (v) => { this.radio = v }\n        }\n      }))\n    },\n\n    __renderCheckbox (h) {\n      let colors = new Map(), color, bgColor\n      let updateColors = this.useDefaultTheme\n      if (this.enableTheme === true) {\n        color = 'color'\n        bgColor = 'bgColor'\n        colors = this.getThemeColors([color, bgColor])\n        updateColors = this.setBothColors\n      }\n\n      return h('q-checkbox', updateColors(colors.get(color), colors.get(bgColor), {\n        props: {\n          value: this.checkbox,\n          dark: (this.enableTheme === true && this.theme && 'color' in this.theme),\n          color: this.enableTheme === true && this.theme && 'color' in this.theme ? this.theme.color : void 0\n        },\n        on: {\n          input: (v) => { this.checkbox = v }\n        }\n      }))\n    },\n\n    __renderKnob (h) {\n      let colors = new Map(), color, bgColor\n      let updateColors = this.useDefaultTheme\n      if (this.enableTheme === true) {\n        color = 'color'\n        bgColor = 'bgColor'\n        colors = this.getThemeColors([color, bgColor])\n        updateColors = this.setBothColors\n      }\n\n      return h('q-knob', updateColors(colors.get(color), colors.get(bgColor), {\n        props: {\n          value: this.knob\n        },\n        on: {\n          input: (v) => { this.knob = v }\n        }\n      }))\n    }\n  },\n\n  render (h) {\n    const slot = this.$slots.default\n\n    let colors = new Map(), color, bgColor\n    let updateColors = this.useDefaultTheme\n    if (this.enableTheme === true) {\n      color = 'color'\n      bgColor = 'bgColor'\n      colors = this.getThemeColors([color, bgColor])\n      updateColors = this.setBothColors\n    }\n\n    return h('div', updateColors(colors.get(color), colors.get(bgColor), {\n      staticClass: 'q-pa-md',\n      style: {\n        width: '100%'\n      }\n    }), [\n      slot || '',\n      this.__renderRadio(h, 'line', 'Line'),\n      this.__renderRadio(h, 'rect', 'Rect'),\n      this.__renderCheckbox(h),\n      this.__renderKnob(h)\n    ])\n  }\n})\n\nexport default {\n  components: {\n    MyComponent\n  },\n\n  data () {\n    return {\n      enableTheme: true,\n      theme: void 0,\n      themes: [\n        {\n          name: 'Default'\n        },\n        {\n          name: 'Dark',\n          color: 'blue-grey-2',\n          bgColor: 'blue-grey-8'\n        },\n        {\n          name: 'Teal',\n          color: 'teal-2',\n          bgColor: 'teal-8'\n        },\n        {\n          name: 'Brown',\n          color: 'brown-2',\n          bgColor: 'brown-8'\n        },\n        {\n          name: 'Deep Purple',\n          color: 'deep-purple-2',\n          bgColor: 'deep-purple-8'\n        },\n        {\n          name: 'Indigo',\n          color: 'grey-2',\n          bgColor: 'indigo-8'\n        },\n        {\n          name: 'Blue',\n          color: 'blue-2',\n          bgColor: 'blue-8'\n        }\n      ]\n    }\n  },\n\n  computed: {\n    themesList () {\n      const list = []\n      this.themes.forEach((theme) => {\n        list.push({\n          label: theme.name,\n          value: { ...theme }\n        })\n      })\n      return list\n    }\n  }\n}\n<\/script>\n"},"4f87":function(e,t,n){"use strict";n.r(t),t["default"]="<template>\n  <div class=\"q-pa-md\">\n    <div class=\"q-pb-md q-gutter-md row justify-around\">\n      <q-toggle\n        class=\"col-12\"\n        v-model=\"enableTheme\"\n        label=\"Enable themes\"\n      />\n      <q-select\n        outlined\n        dense\n        emit-value\n        map-options\n        label=\"Change theme\"\n        v-model=\"theme\"\n        :options=\"themesList\"\n        :disable=\"enableTheme !== true\"\n        class=\"col-12\"\n      />\n    </div>\n    <q-separator />\n    <div class=\"q-pa-md row justify-around\">\n      <my-component\n        :enable-theme=\"enableTheme\"\n        :theme=\"theme\"\n        class=\"text-center\"\n      >\n        <div class=\"text-h4\">Some Text</div>\n      </my-component>\n    </div>\n  </div>\n</template>\n\n<script>\nimport Vue from 'vue'\nimport { QColorizeMixin } from 'q-colorize-mixin'\nimport { QThemeMixin } from 'q-theme-mixin'\n\nconst MyComponent = Vue.extend({\n  name: 'my-component',\n\n  mixins: [QColorizeMixin, QThemeMixin],\n\n  render (h) {\n    let colors = new Map(), color, bgColor\n    let updateColors = this.useDefaultTheme\n    if (this.enableTheme === true) {\n      color = 'color'\n      bgColor = 'bgColor'\n      colors = this.getThemeColors([color, bgColor])\n      updateColors = this.setBothColors\n    }\n\n    return h('div', updateColors(colors.get(color), colors.get(bgColor), {\n      style: {\n        width: '200px',\n        height: '200px'\n      }\n    }), [\n      this.$slots.default\n    ])\n  }\n})\n\nexport default {\n  components: {\n    MyComponent\n  },\n\n  data () {\n    return {\n      enableTheme: true,\n      theme: void 0,\n      themes: [\n        {\n          name: 'Default'\n        },\n        {\n          name: 'Dark',\n          color: 'blue-grey-2',\n          bgColor: 'blue-grey-8'\n        },\n        {\n          name: 'Teal',\n          color: 'teal-2',\n          bgColor: 'teal-8'\n        },\n        {\n          name: 'Brown',\n          color: 'brown-2',\n          bgColor: 'brown-8'\n        },\n        {\n          name: 'Deep Purple',\n          color: 'deep-purple-2',\n          bgColor: 'deep-purple-8'\n        },\n        {\n          name: 'Indigo',\n          color: 'grey-2',\n          bgColor: 'indigo-8'\n        },\n        {\n          name: 'Blue',\n          color: 'blue-2',\n          bgColor: 'blue-8'\n        }\n      ]\n    }\n  },\n\n  computed: {\n    themesList () {\n      const list = []\n      this.themes.forEach((theme) => {\n        list.push({\n          label: theme.name,\n          value: { ...theme }\n        })\n      })\n      return list\n    }\n  }\n}\n<\/script>\n"},"7e0b":function(e,t,n){"use strict";n.r(t),t["default"]="<template>\n  <div class=\"q-pa-md row justify-around\">\n    <my-component\n      :enable-theme=\"enableTheme\"\n      :theme=\"theme\"\n      class=\"text-center\"\n    >\n      <div class=\"text-h4\">Some Text</div>\n    </my-component>\n  </div>\n</template>\n\n<script>\nimport Vue from 'vue'\nimport { QColorizeMixin } from 'q-colorize-mixin'\nimport { QThemeMixin } from 'q-theme-mixin'\n\nconst MyComponent = Vue.extend({\n  name: 'my-component',\n\n  mixins: [QColorizeMixin, QThemeMixin],\n\n  render (h) {\n    let colors = new Map(), color, bgColor\n    let updateColors = this.useDefaultTheme\n    if (this.enableTheme === true) {\n      color = 'color'\n      bgColor = 'bgColor'\n      colors = this.getThemeColors([color, bgColor])\n      updateColors = this.setBothColors\n    }\n\n    return h('div', updateColors(colors.get(color), colors.get(bgColor), {\n      style: {\n        width: '200px',\n        height: '200px'\n      }\n    }), [\n      this.$slots.default\n    ])\n  }\n})\n\nexport default {\n  components: {\n    MyComponent\n  },\n\n  data () {\n    return {\n      enableTheme: true,\n      theme: {\n        color: 'grey-2',\n        bgColor: 'blue-grey-8'\n      }\n    }\n  }\n}\n<\/script>\n"},e872:function(e,t,n){"use strict";var o=n("17bf"),a=n.n(o);a.a}}]);