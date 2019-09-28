/*!
 * q-theme-mixin v1.0.0-alpha.1
 * (c) 2019 Jeff Galbraith <jeff@quasar.dev>
 * Released under the MIT License.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = global || self, factory(global.QThemeMixin = {}, global.Vue));
}(this, function (exports, Vue) { 'use strict';

  if (Vue === void 0) {
    console.error('[ Quasar ] Vue is required to run. Please add a script tag for it before loading Quasar.')
    return
  }
  Vue = Vue && Vue.hasOwnProperty('default') ? Vue['default'] : Vue;

  var version = "1.0.0-alpha.1";

  var QThemeMixin = {
    name: 'QThemeMixin',

    props: {
      theme: {
        type: Object,
        default: function () {}
      },
      enableTheme: Boolean
    },

    methods: {
      // this function exists for performance reasons. If you do not
      // desire the performance hit of theming, be sure to set
      // the property 'enable-themes' to false (default).
      useDefaultTheme: function useDefaultTheme (color, bgColor, data) {
        if ( data === void 0 ) data = {};

        return data
      },

      getThemeColors: function getThemeColors (keys) {
        var this$1 = this;
        if ( keys === void 0 ) keys = [];

        var colors = new Map();
        if (this.enableTheme === true && this.theme !== void 0) {
          keys.forEach(function (key) {
            colors.set(key, this$1.theme[key]);
          });
        }
        return colors
      }
    }
  };

  QThemeMixin.version = version;

  Vue.use(QThemeMixin);

  exports.QThemeMixin = QThemeMixin;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
