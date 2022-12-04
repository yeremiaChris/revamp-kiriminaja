exports.ids = [12];
exports.modules = {

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/Expedition.vue?vue&type=template&id=07d6c8e4&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "mt-12"
  }, [_c('client-only', {
    attrs: {
      "placeholder": "Setup the carousel..."
    }
  }, [_c('Carousel', {
    staticClass: "expedition",
    attrs: {
      "responsive": _vm.responsive
    }
  }, _vm._l(_vm.list, function (item) {
    return _c('img', {
      key: item,
      staticClass: "hover-animate dark:grayscale dark:hover:grayscale-0 cursor-pointer",
      attrs: {
        "src": `https://kiriminaja.com/assets/logistics/${item}.png`,
        "alt": item
      }
    });
  }), 0)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/home/Expedition.vue?vue&type=template&id=07d6c8e4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/Expedition.vue?vue&type=script&lang=js&
/* harmony default export */ var Expeditionvue_type_script_lang_js_ = ({
  data() {
    return {
      list: ["jne", "gosend", "sentral", "idx", "grab_express", "sicepat", "jnt", "sap", "anteraja"],
      responsive: {
        768: {
          dots: false,
          nav: false,
          autoplay: true,
          items: 6,
          loop: true
        },
        0: {
          dots: false,
          nav: false,
          autoplay: true,
          items: 2,
          loop: true
        }
      }
    };
  }
});
// CONCATENATED MODULE: ./components/home/Expedition.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_Expeditionvue_type_script_lang_js_ = (Expeditionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/home/Expedition.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_Expeditionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7110fb81"
  
)

/* harmony default export */ var Expedition = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-expedition.js.map