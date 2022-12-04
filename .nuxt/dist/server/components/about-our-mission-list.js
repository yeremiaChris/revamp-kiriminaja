exports.ids = [5,16];
exports.modules = {

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/misc/CheckList.vue?vue&type=template&id=1496e31c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "bg-secondary rounded-full w-6 h-6 p-[4px]"
  }, [_vm._ssrNode("<img src=\"/icon/check.svg\" alt=\"check\" class=\"w-7\">")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/misc/CheckList.vue?vue&type=template&id=1496e31c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/misc/CheckList.vue?vue&type=script&lang=js&
/* harmony default export */ var CheckListvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/misc/CheckList.vue?vue&type=script&lang=js&
 /* harmony default export */ var misc_CheckListvue_type_script_lang_js_ = (CheckListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/misc/CheckList.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  misc_CheckListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "8f57c57a"
  
)

/* harmony default export */ var CheckList = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/about/our-mission/List.vue?vue&type=template&id=98355bac&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<h2 class=\"text-4xl font-bold mb-6\">Our Mission</h2> "), _vm._ssrNode("<ul class=\"font-medium grid gap-3\">", "</ul>", _vm._l(_vm.missions, function (mission) {
    return _vm._ssrNode("<li class=\"flex items-center gap-3 border-2 border-primary bg-primary-opacity rounded-lg py-4 pl-4 pr-10\">", "</li>", [_c('MiscCheckList'), _vm._ssrNode(" <span>" + _vm._ssrEscape("\n        " + _vm._s(mission) + "\n      ") + "</span>")], 2);
  }), 0)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/about/our-mission/List.vue?vue&type=template&id=98355bac&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/about/our-mission/List.vue?vue&type=script&lang=js&
/* harmony default export */ var Listvue_type_script_lang_js_ = ({
  data() {
    return {
      missions: ["Meningkatkan penjualan produk UMKM secara online.", "Memberikan inovasi-inovasi terbaru dan terbaik.", "Memberikan pelayanan yang maksimal dan optimal untuk pelanggan.", "Mengenalkan KiriminAja seluas-luasnya ke seluruh Indonesia."]
    };
  }
});
// CONCATENATED MODULE: ./components/about/our-mission/List.vue?vue&type=script&lang=js&
 /* harmony default export */ var our_mission_Listvue_type_script_lang_js_ = (Listvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/about/our-mission/List.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  our_mission_Listvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1e4049f8"
  
)

/* harmony default export */ var List = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MiscCheckList: __webpack_require__(40).default})


/***/ })

};;
//# sourceMappingURL=about-our-mission-list.js.map