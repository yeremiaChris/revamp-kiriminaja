exports.ids = [13,7];
exports.modules = {

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/Input.vue?vue&type=template&id=489eaf96&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<label" + _vm._ssrAttr("for", _vm.id) + ">" + _vm._ssrEscape("\n    " + _vm._s(_vm.label) + "\n    ") + (_vm.isRequired ? "<span class=\"text-red-500\">*</span>" : "<!---->") + "</label> <input" + _vm._ssrAttr("type", _vm.type) + _vm._ssrAttr("name", _vm.id) + _vm._ssrAttr("id", _vm.id) + _vm._ssrAttr("placeholder", _vm.placeholder) + " class=\"block bg-transparent focus:mt-2 w-full duration-300 focus:border outline-none focus:outline-none rounded-md border-gray-300 focus:px-3 py-2 focus:ring-0 sm:text-sm\">")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/form/Input.vue?vue&type=template&id=489eaf96&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/Input.vue?vue&type=script&lang=js&
/* harmony default export */ var Inputvue_type_script_lang_js_ = ({
  props: {
    id: {
      type: String,
      default: () => "input-1"
    },
    placeholder: {
      type: String,
      default: () => ""
    },
    type: {
      type: String,
      default: () => "text"
    },
    label: {
      type: String,
      default: () => "label"
    },
    isRequired: {
      type: Boolean,
      default: () => true
    }
  }
});
// CONCATENATED MODULE: ./components/form/Input.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_Inputvue_type_script_lang_js_ = (Inputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/form/Input.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  form_Inputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4189419f"
  
)

/* harmony default export */ var Input = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/FormPrice.vue?vue&type=template&id=2e2f29b3&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "mt-5 shadow border dark:border-0 dark:bg-gray-800 rounded-lg dark:text-white py-6 px-5 text-sm"
  }, [_vm._ssrNode("<form class=\"flex flex-col lg:flex-row lg:items-center gap-2 flex-wrap\">", "</form>", [_vm._l(_vm.fields, function (field, index) {
    return _vm._ssrNode("<div" + _vm._ssrClass("flex-1", {
      'lg:border-l lg:pl-5': index > 0
    }) + ">", "</div>", [_c('FormInput', {
      attrs: {
        "label": field.title,
        "id": field.title + '-' + index,
        "placeholder": field.placeholder,
        "type": field.type
      }
    })], 1);
  }), _vm._ssrNode(" <button type=\"submit\" class=\"bg-primary text-white flex items-center gap-2 lg:ml-4 lg:h-12 rounded-lg lg:rounded px-4 lg:px-2.5 py-2.5\"><img src=\"/icon/search.svg\" alt=\"search\" class=\"w-7\"> <p class=\"lg:hidden\">Cek Tarif</p></button>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/home/FormPrice.vue?vue&type=template&id=2e2f29b3&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/FormPrice.vue?vue&type=script&lang=js&
/* harmony default export */ var FormPricevue_type_script_lang_js_ = ({
  data() {
    return {
      fields: [{
        title: "From",
        placeholder: "Kelurahan Asal",
        type: "text"
      }, {
        title: "Destination",
        placeholder: "Kelurahan Tujuan",
        type: "text"
      }, {
        title: "Weight (Gram)",
        placeholder: "1000",
        type: "number"
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/home/FormPrice.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_FormPricevue_type_script_lang_js_ = (FormPricevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/home/FormPrice.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_FormPricevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1094acd6"
  
)

/* harmony default export */ var FormPrice = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {FormInput: __webpack_require__(48).default})


/***/ })

};;
//# sourceMappingURL=home-form-price.js.map