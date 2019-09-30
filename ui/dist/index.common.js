/*!
 * q-theme-mixin v1.0.0-alpha.1
 * (c) 2019 Jeff Galbraith <jeff@quasar.dev>
 * Released under the MIT License.
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var version="1.0.0-alpha.1",QThemeMixin={name:"QThemeMixin",props:{theme:{type:Object,default:function(){}},enableTheme:Boolean},methods:{useDefaultTheme:function(e,i,n){return void 0===n&&(n={}),n},getThemeColors:function(e){var i=this;void 0===e&&(e=[]);var n=new Map;return!0===this.enableTheme&&void 0!==this.theme&&e.forEach(function(e){n.set(e,i.theme[e])}),n}}};QThemeMixin.version=version;var index={QThemeMixin:QThemeMixin,version:version,install:function(e){e.component(QThemeMixin.name,QThemeMixin)}};exports.QThemeMixin=QThemeMixin,exports.default=index;