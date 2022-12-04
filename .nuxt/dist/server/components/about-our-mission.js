exports.ids = [3,4,5,16];
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


/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/about/our-mission/Content.vue?vue&type=template&id=3b1abc56&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "text-lg flex flex-col gap-3"
  }, [_vm._ssrNode("<p><span class=\"text-primary\">KiriminAja</span> sebuah platform yang\n    memberikan kemudahan untuk pengiriman paket dan menemukan ekspedisi sesuai\n    kebutuhan masyarakat, dengan metode pengiriman COD dan Non-COD yang\n    dikembangkan oleh PT Selalu Siap Solusi.\n  </p> <p>\n    KiriminAja memberikan solusi untuk UMKM, pebisnis online, serta seluruh\n    masyarakat Indonesia yang ingin melakukan pengiriman paket.\n  </p> <p>KiriminAja menawarkan:</p> <ul class=\"list-disc ml-10\">" + _vm._ssrList(_vm.offers, function (offer) {
    return "<li>" + _vm._ssrEscape(_vm._s(offer)) + "</li>";
  }) + "</ul> <p>\n    Dengan layanan dan inovasi yang ditawarkan, KiriminAja memiliki komitmen\n    untuk berkontribusi pada perekonomian Indonesia, dengan cara memberikan\n    solusi serta kemudahan bagi para pebisnis online supaya bisnisnya terus\n    berkembang.\n  </p>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/about/our-mission/Content.vue?vue&type=template&id=3b1abc56&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/about/our-mission/Content.vue?vue&type=script&lang=js&
/* harmony default export */ var Contentvue_type_script_lang_js_ = ({
  data() {
    return {
      offers: ["Kemudahan pengiriman paket dengan pilihan berbagai ekspedisi.", "Adanya layanan pengiriman COD (Cash On Delivery) dengan pencairan dana harian dan sistem pengambilan paket dirumah oleh ekspedisi.", "Layanan pengiriman paket non-cod dengan sistem pengambilan paket dirumah oleh ekspedisi.", "Platform yang dapat membantu pebisnis online mengendalikan dan mengelola bisnisnya dengan lebih baik. "]
    };
  }
});
// CONCATENATED MODULE: ./components/about/our-mission/Content.vue?vue&type=script&lang=js&
 /* harmony default export */ var our_mission_Contentvue_type_script_lang_js_ = (Contentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/about/our-mission/Content.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  our_mission_Contentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "8b5a1dfa"
  
)

/* harmony default export */ var Content = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/about/OurMission.vue?vue&type=template&id=66ba9aa7&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "mb-10 mt-20 grid lg:grid-cols-2 gap-8 container m-auto"
  }, [_c('AboutOurMissionList'), _vm._ssrNode(" "), _c('AboutOurMissionContent')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/about/OurMission.vue?vue&type=template&id=66ba9aa7&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/about/OurMission.vue?vue&type=script&lang=js&
/* harmony default export */ var OurMissionvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/about/OurMission.vue?vue&type=script&lang=js&
 /* harmony default export */ var about_OurMissionvue_type_script_lang_js_ = (OurMissionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/about/OurMission.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  about_OurMissionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "52f11002"
  
)

/* harmony default export */ var OurMission = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {AboutOurMissionList: __webpack_require__(44).default,AboutOurMissionContent: __webpack_require__(45).default})


/***/ })

};;
//# sourceMappingURL=about-our-mission.js.map