/*!
 * q-theme-mixin v1.0.0-alpha.1
 * (c) 2019 Jeff Galbraith <jeff@quasar.dev>
 * Released under the MIT License.
 */
var version="1.0.0-alpha.1",QThemeMixin={name:"QThemeMixin",props:{theme:{type:Object,default:function(){}},enableTheme:Boolean},methods:{useDefaultTheme:function(e,n,i){return void 0===i&&(i={}),i},getThemeColors:function(e){var n=this;void 0===e&&(e=[]);var i=new Map;return!0===this.enableTheme&&void 0!==this.theme&&e.forEach(function(e){i.set(e,n.theme[e])}),i}}};QThemeMixin.version=version;var index={QThemeMixin:QThemeMixin,version:version,install:function(e){e.component(QThemeMixin.name,QThemeMixin)}};export default index;export{QThemeMixin};