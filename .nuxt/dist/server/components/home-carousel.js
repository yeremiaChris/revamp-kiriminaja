exports.ids = [10,11,16];
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


/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/Carousel.vue?vue&type=template&id=0d67f360&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('header', [_c('client-only', {
    attrs: {
      "placeholder": "Setup the carousel..."
    }
  }, [!_vm.data.length ? _c('p', [_vm._v("Data is empty")]) : _vm._e(), _vm._v(" "), _c('Carousel', {
    attrs: {
      "items": 1,
      "nav": false,
      "autoplay": true
    }
  }, _vm._l(_vm.data, function (item, index) {
    return _c('div', {
      key: item.title + index,
      staticClass: "mt-10 lg:mt-16 lg:px-14 gap-10 grid lg:grid-cols-2 items-center",
      class: {
        'animate-pulse': _vm.isLoading
      }
    }, [_c('img', {
      staticClass: "rounded-lg w-[400px] transition-all duration-300 ease-in transform hover:-translate-y-8",
      class: {
        'bg-slate-200 self-stretch block': _vm.isLoading,
        'shadow-lg': !_vm.isLoading
      },
      attrs: {
        "src": !_vm.isLoading ? `https://picsum.photos/id/${index + 10}/600/600` : '',
        "alt": !_vm.isLoading ? 'image' : 'loading...'
      }
    }), _vm._v(" "), _c('HomeCarouselContent', {
      attrs: {
        "number": index,
        "item": item
      }
    })], 1);
  }), 0)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/home/Carousel.vue?vue&type=template&id=0d67f360&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/Carousel.vue?vue&type=script&lang=js&

/* harmony default export */ var Carouselvue_type_script_lang_js_ = ({
  data() {
    return {
      options: {
        items: 1
      }
    };
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])({
      data: "home/getCarouselData",
      isLoading: "home/getIsLoading"
    })
  },
  async fetch() {
    await this.$store.dispatch("home/fetchCarouselData");
  }
});
// CONCATENATED MODULE: ./components/home/Carousel.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_Carouselvue_type_script_lang_js_ = (Carouselvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/home/Carousel.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_Carouselvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "db606340"
  
)

/* harmony default export */ var Carousel = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HomeCarouselContent: __webpack_require__(47).default})


/***/ })

};;
//# sourceMappingURL=home-carousel.js.map