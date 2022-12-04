exports.ids = [11,16];
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

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/carousel/content.vue?vue&type=template&id=50178085&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "flex flex-col gap-3 lg:items-start dark:text-white text-justify lg:text-left"
  }, [_vm._ssrNode("<span" + _vm._ssrClass("px-3 py-2 text-secondary rounded-full bg-secondary-opacity dark:border self-start", {
    'bg-slate-200 text-slate-200': _vm.isLoading
  }) + ">" + _vm._ssrEscape("#" + _vm._s(_vm.number + 1) + " Info") + "</span> <h2" + _vm._ssrClass("text-[2.55rem] font-bold", {
    'bg-slate-200 text-slate-200': _vm.isLoading
  }) + ">" + _vm._ssrEscape("\n    " + _vm._s(_vm.item.title.slice(0, 40) || "-") + "\n  ") + "</h2> <p" + _vm._ssrClass("text-xl", {
    'bg-slate-200 text-slate-200': _vm.isLoading
  }) + ">" + _vm._ssrEscape("\n    " + _vm._s(_vm.item.body || "-") + "\n  ") + "</p> "), _vm._ssrNode("<ul" + _vm._ssrClass("grid gap-4 font-medium", {
    'bg-slate-200 text-slate-200': _vm.isLoading
  }) + ">", "</ul>", _vm._l(3, function (item) {
    return _vm._ssrNode("<li class=\"flex items-center gap-2\">", "</li>", [_c('MiscCheckList', {
      class: {
        'bg-slate-200 text-slate-200': _vm.isLoading
      }
    }), _vm._ssrNode("\n      Tanpa Biaya Pendaftaran\n    ")], 2);
  }), 0), _vm._ssrNode(" <button" + _vm._ssrClass("bg-primary rounded-full mt-6 lg:mt-0 px-8 text-lg py-3 text-white font-medium", {
    'bg-slate-200 text-slate-200': _vm.isLoading
  }) + ">\n    Selengkapnya\n  </button>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/home/carousel/content.vue?vue&type=template&id=50178085&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/carousel/content.vue?vue&type=script&lang=js&

/* harmony default export */ var contentvue_type_script_lang_js_ = ({
  props: {
    number: {
      type: Number,
      required: true
    },
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])({
      isLoading: "home/getIsLoading"
    })
  }
});
// CONCATENATED MODULE: ./components/home/carousel/content.vue?vue&type=script&lang=js&
 /* harmony default export */ var carousel_contentvue_type_script_lang_js_ = (contentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/home/carousel/content.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  carousel_contentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "c60c02ac"
  
)

/* harmony default export */ var content = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MiscCheckList: __webpack_require__(40).default})


/***/ })

};;
//# sourceMappingURL=home-carousel-content.js.map