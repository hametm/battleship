/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/cursor.png */ "./src/images/cursor.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/smile.png */ "./src/images/smile.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/ice-cream.png */ "./src/images/ice-cream.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/lollipop.png */ "./src/images/lollipop.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/cat.png */ "./src/images/cat.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./images/panda.png */ "./src/images/panda.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./images/pointer.png */ "./src/images/pointer.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&family=Noto+Sans+JP&family=Nunito:wght@400;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --yellow: #f3e080;\n    --text: rgb(83, 83, 83);\n}\n\nhtml {\n    cursor: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), default;\n    min-height: 100%;\n}\n\nbody {\n    margin: 0;\n    font-family: 'Nunito', sans-serif;    \n    display: grid;\n    gap: 2rem;\n    grid-template-rows: auto;\n    min-height: 100vh;\n    background-color: #f9d0d0;\n    color: rgb(65, 103, 201);\n    padding-left: 8vw;\n    padding-right: 8vw;\n}\n\nheader {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    /* background-color: var(--yellow);  */\n}\n\nheader h1 {\n    font-size: 4.5rem;\n    letter-spacing: 1px;\n    font-family: 'Mochiy Pop P One', sans-serif;\n}\n\n#display {\n    display: flex;\n    justify-content: space-around;\n    align-content: center;\n}\n\n.board {\n    display: grid;\n    height: 100%;\n    width: 100%;\n    grid-template-rows: repeat(10, minmax(10px, 1fr));\n    grid-template-columns: repeat(10, minmax(10px, 1fr));\n    margin: 0;\n    place-content: center;\n    gap: 3px;\n}\n\n.boardContainer {\n    height: 100%;\n    width: 100%;\n}\n\n.numbersAndBoard {\n    display: flex;\n    align-items: flex-start;\n    height: 100%;\n    width: 100%;\n}\n\n.letterHeader {\n    color: var(--text);\n    display: grid;\n    grid-template-columns: repeat(11, 1fr);\n    width: 100%;\n}\n\n.numberHeader {\n    color: var(--text);\n    display: grid;\n    grid-template-rows: (repeat(10, 1fr));\n    height: 100%;\n    width: 10%;\n}\n\n.letterSpace, .numberSpace {\n    height: 100%;\n    width: 100%;\n    display: grid;\n    place-items: center;\n}\n\n.nameAndBoard {\n    display: flex;\n}\n\n.nameAndBoard h2 {\n    writing-mode: vertical-lr;\n    text-orientation: upright;\n    margin: 0;\n    font-size: 2rem;\n\n}\n\n.fullBoard {\n    display: flex;\n    flex-direction: column;\n    gap: .5rem;\n    min-height: 300px;\n    min-width: 300px;\n    height: 33vw;\n    width: 33vw;\n    padding-right: max(2vw, 30px);\n    padding-bottom: max(2vw, 30px);\n}\n\n.taken1 {\n    background: rgb(222, 160, 171) url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center;\n    background-size: 80%;\n}\n\n.taken2 {\n    background: rgb(76, 224, 172) url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center;\n    background-size: 80%;\n}\n\n.taken3 {\n    background: rgb(92, 205, 230) url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center;\n    background-size: 80%;\n}\n\n.taken4 {\n    background: rgb(232, 179, 20) url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center;\n    background-size: 80%;\n}\n\n.space {\n    border: 1px solid var(--text);\n    display: grid;\n    place-items: center;\n    border-radius: 5px;\n}\n\n@keyframes glow {\n    from {\n        box-shadow: none;\n    }\n    to {\n        box-shadow: \n        2px 0px 5px 3px #f9cd1f, \n        0px 2px 5px 3px  #f9cd1f, \n        -2px 0px 5px 3px  #f9cd1f, \n        0px -2px 5px 3px  #f9cd1f;\n    }\n}\n\n.hit {\n    background: var(--yellow) url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center;\n    background-size: 80%;\n    animation: glow 1s linear alternate infinite;\n}\n\n.missed {\n    background-position: center;\n    background-size: 80%;\n    background-repeat: no-repeat;\n}\n\n.iceCream {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-color: rgb(248, 188, 199);\n}\n\n.lollipop {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-color: rgb(216, 251, 229);\n}\n\n.cat {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n    background-color: rgb(238, 217, 251);\n}\n\n.panda {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n    background-color: rgb(255, 220, 167);\n}\n\n.dot {\n    height: 3px;\n    width: 3px;\n    background-color: black;\n    border-radius: 50%;\n}\n\n.space.computer:hover {\n    background-color: #f7dcdc;\n}\n\n.computerSpaces:hover {\n    cursor: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + "), pointer;\n}\n\n.space.computer:active {\n    transform: scale(.9);\n}\n\n@keyframes fadein {\n    from {\n      opacity: 0;\n    }\n  \n    to {\n      opacity: 1;\n    }\n}\n\n.announcement {\n    position: fixed;\n    top: 50vh;\n    left: 50vw;\n    transform: translate(-50%, -50%);\n    animation: linear .5s fadein;\n    font-size: 3rem;\n    background-color: white;\n    height: 30%;\n    width: 30%;\n    box-shadow: -2px 2px 5px grey;\n    display: grid;\n    place-items: center;\n}\n\nh3 {\n    margin: 0;\n}\n\n.loser {\n    background-color: rgb(225, 225, 225);\n}\n\nfooter {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    margin-top: auto;\n    font-size: 1.2rem;\n}\n\n@media (max-width: 480px) {\n    body {\n        padding-left: 1rem;\n        padding-right: 1rem;\n    }\n    \n    header h1 {\n        font-size: 2.2rem;\n    }\n    \n    main {\n        padding: 0;\n    }\n\n    .nameAndBoard {\n        flex-direction: column;\n    }\n\n    .nameAndBoard h2 {\n        writing-mode: horizontal-tb;\n        font-size: 1.4rem;\n        margin-bottom: .3rem;\n    }\n\n    #display {\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&family=Noto+Sans+JP&family=Nunito:wght@400;700&display=swap');\n\n:root {\n    --yellow: #f3e080;\n    --text: rgb(83, 83, 83);\n}\n\nhtml {\n    cursor: url(./images/cursor.png), default;\n    min-height: 100%;\n}\n\nbody {\n    margin: 0;\n    font-family: 'Nunito', sans-serif;    \n    display: grid;\n    gap: 2rem;\n    grid-template-rows: auto;\n    min-height: 100vh;\n    background-color: #f9d0d0;\n    color: rgb(65, 103, 201);\n    padding-left: 8vw;\n    padding-right: 8vw;\n}\n\nheader {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    /* background-color: var(--yellow);  */\n}\n\nheader h1 {\n    font-size: 4.5rem;\n    letter-spacing: 1px;\n    font-family: 'Mochiy Pop P One', sans-serif;\n}\n\n#display {\n    display: flex;\n    justify-content: space-around;\n    align-content: center;\n}\n\n.board {\n    display: grid;\n    height: 100%;\n    width: 100%;\n    grid-template-rows: repeat(10, minmax(10px, 1fr));\n    grid-template-columns: repeat(10, minmax(10px, 1fr));\n    margin: 0;\n    place-content: center;\n    gap: 3px;\n}\n\n.boardContainer {\n    height: 100%;\n    width: 100%;\n}\n\n.numbersAndBoard {\n    display: flex;\n    align-items: flex-start;\n    height: 100%;\n    width: 100%;\n}\n\n.letterHeader {\n    color: var(--text);\n    display: grid;\n    grid-template-columns: repeat(11, 1fr);\n    width: 100%;\n}\n\n.numberHeader {\n    color: var(--text);\n    display: grid;\n    grid-template-rows: (repeat(10, 1fr));\n    height: 100%;\n    width: 10%;\n}\n\n.letterSpace, .numberSpace {\n    height: 100%;\n    width: 100%;\n    display: grid;\n    place-items: center;\n}\n\n.nameAndBoard {\n    display: flex;\n}\n\n.nameAndBoard h2 {\n    writing-mode: vertical-lr;\n    text-orientation: upright;\n    margin: 0;\n    font-size: 2rem;\n\n}\n\n.fullBoard {\n    display: flex;\n    flex-direction: column;\n    gap: .5rem;\n    min-height: 300px;\n    min-width: 300px;\n    height: 33vw;\n    width: 33vw;\n    padding-right: max(2vw, 30px);\n    padding-bottom: max(2vw, 30px);\n}\n\n.taken1 {\n    background: rgb(222, 160, 171) url(./images/smile.png) no-repeat center;\n    background-size: 80%;\n}\n\n.taken2 {\n    background: rgb(76, 224, 172) url(./images/smile.png) no-repeat center;\n    background-size: 80%;\n}\n\n.taken3 {\n    background: rgb(92, 205, 230) url(./images/smile.png) no-repeat center;\n    background-size: 80%;\n}\n\n.taken4 {\n    background: rgb(232, 179, 20) url(./images/smile.png) no-repeat center;\n    background-size: 80%;\n}\n\n.space {\n    border: 1px solid var(--text);\n    display: grid;\n    place-items: center;\n    border-radius: 5px;\n}\n\n@keyframes glow {\n    from {\n        box-shadow: none;\n    }\n    to {\n        box-shadow: \n        2px 0px 5px 3px #f9cd1f, \n        0px 2px 5px 3px  #f9cd1f, \n        -2px 0px 5px 3px  #f9cd1f, \n        0px -2px 5px 3px  #f9cd1f;\n    }\n}\n\n.hit {\n    background: var(--yellow) url(./images/smile.png) no-repeat center;\n    background-size: 80%;\n    animation: glow 1s linear alternate infinite;\n}\n\n.missed {\n    background-position: center;\n    background-size: 80%;\n    background-repeat: no-repeat;\n}\n\n.iceCream {\n    background-image: url(./images/ice-cream.png);\n    background-color: rgb(248, 188, 199);\n}\n\n.lollipop {\n    background-image: url(./images/lollipop.png);\n    background-color: rgb(216, 251, 229);\n}\n\n.cat {\n    background-image: url(./images/cat.png);\n    background-color: rgb(238, 217, 251);\n}\n\n.panda {\n    background-image: url(./images/panda.png);\n    background-color: rgb(255, 220, 167);\n}\n\n.dot {\n    height: 3px;\n    width: 3px;\n    background-color: black;\n    border-radius: 50%;\n}\n\n.space.computer:hover {\n    background-color: #f7dcdc;\n}\n\n.computerSpaces:hover {\n    cursor: url(./images/pointer.png), pointer;\n}\n\n.space.computer:active {\n    transform: scale(.9);\n}\n\n@keyframes fadein {\n    from {\n      opacity: 0;\n    }\n  \n    to {\n      opacity: 1;\n    }\n}\n\n.announcement {\n    position: fixed;\n    top: 50vh;\n    left: 50vw;\n    transform: translate(-50%, -50%);\n    animation: linear .5s fadein;\n    font-size: 3rem;\n    background-color: white;\n    height: 30%;\n    width: 30%;\n    box-shadow: -2px 2px 5px grey;\n    display: grid;\n    place-items: center;\n}\n\nh3 {\n    margin: 0;\n}\n\n.loser {\n    background-color: rgb(225, 225, 225);\n}\n\nfooter {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    margin-top: auto;\n    font-size: 1.2rem;\n}\n\n@media (max-width: 480px) {\n    body {\n        padding-left: 1rem;\n        padding-right: 1rem;\n    }\n    \n    header h1 {\n        font-size: 2.2rem;\n    }\n    \n    main {\n        padding: 0;\n    }\n\n    .nameAndBoard {\n        flex-direction: column;\n    }\n\n    .nameAndBoard h2 {\n        writing-mode: horizontal-tb;\n        font-size: 1.4rem;\n        margin-bottom: .3rem;\n    }\n\n    #display {\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "announceWinner": () => (/* binding */ announceWinner),
/* harmony export */   "displayBoard": () => (/* binding */ displayBoard),
/* harmony export */   "hideGameboard": () => (/* binding */ hideGameboard),
/* harmony export */   "markAttack": () => (/* binding */ markAttack),
/* harmony export */   "pickSpace": () => (/* binding */ pickSpace)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./src/game.js");




const player1 = (0,_player__WEBPACK_IMPORTED_MODULE_1__.Player)("you");
const player2 = (0,_player__WEBPACK_IMPORTED_MODULE_1__.Player)("computer");
const player1Board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)(player1);
const player2Board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)(player2);
displayBoard(player1Board);
displayBoard(player2Board);
hideGameboard(player2Board);

function displayBoard(gameboard) {
    const name = document.createElement("h2");
    if (gameboard.player.name === "you") {
        name.textContent = "プラル";
    } 
    else if (gameboard.player.name === "computer") {
        name.textContent = "コンピューター";
    }
    const display = document.getElementById("display");

    const board = document.createElement("div");
    const boardContainer = document.createElement("div");
    const numbersAndBoard = document.createElement("div");
    const fullBoard = document.createElement("div");
    const nameAndBoard = document.createElement("div");

    numbersAndBoard.classList.add("numbersAndBoard");
    fullBoard.classList.add("fullBoard", `${gameboard.player.name}Board`);
    board.classList.add("board", `${gameboard.player.name}Spaces`);
    boardContainer.classList.add("boardContainer");
    nameAndBoard.classList.add("nameAndBoard", `${gameboard.player.name}Card`);

    for (let i = 0; i < gameboard.positions.length; i++) {
        const space = document.createElement("div");
        space.classList.add("space");
        space.classList.add(`${gameboard.player.name}`);
        space.dataset.id = `${gameboard.positions[i]}`;
        board.appendChild(space);
        display.appendChild(nameAndBoard);
        if (gameboard.ship1.position.includes(space.dataset.id)) {
            space.classList.add("taken", "taken1");
        }
        if (gameboard.ship2.position.includes(space.dataset.id)) {
            space.classList.add("taken", "taken2");
        }
        if (gameboard.ship3.position.includes(space.dataset.id)) {
            space.classList.add("taken", "taken3");
        }
        if (gameboard.ship4.position.includes(space.dataset.id)) {
            space.classList.add("taken", "taken4");
        }
    }

    fullBoard.appendChild(numbersAndBoard);
    boardContainer.appendChild(board);
    nameAndBoard.appendChild(name, fullBoard);

    createLetterRow(fullBoard, nameAndBoard);
    createNumberColumn(numbersAndBoard, fullBoard);

    numbersAndBoard.appendChild(boardContainer);

}

function createLetterRow(container1, container2) {
    const letters = ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    const header = document.createElement("div");
    header.classList.add("letterHeader");

    for (let i = 0; i < letters.length; i++) {
        const letterSpace = document.createElement("div");
        letterSpace.textContent = letters[i];
        letterSpace.classList.add("letterSpace");
        header.appendChild(letterSpace);
    }

    container1.appendChild(header);
    container2.appendChild(container1);
}

function createNumberColumn(container1, container2) {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const header = document.createElement("div");
    header.classList.add("numberHeader");

    for (let i = 0; i < numbers.length; i++) {
        const numberSpace = document.createElement("div");
        numberSpace.textContent = numbers[i];
        numberSpace.classList.add("numberSpace");
        header.appendChild(numberSpace);
    }

    container1.appendChild(header);
    container2.appendChild(container1);
}

function hideGameboard(gameboard) {
    const spaces = document.querySelectorAll(".taken");
    spaces.forEach(space => {
        if (space.classList.contains(`${gameboard.player.name}`)) {
            space.classList.remove("taken1", "taken2", "taken3", "taken4");
        }
    })

}

function pickSpace() {
    const computerSpaces = document.querySelectorAll(".computer");
    computerSpaces.forEach(space => {
        space.onclick = () => {
            if (space.classList.contains("hit") || space.classList.contains("missed")) return 0;
            else {
                player1.attack = space.dataset.id;
                getComputerAttack(player2, player1Board);
                (0,_game__WEBPACK_IMPORTED_MODULE_2__.playRound)(player1, player2, player1Board, player2Board);
            }
        }
    })
}

function getComputerAttack(player, gameboard) {
    let currentMove = gameboard.positions[Math.floor(Math.random() * (gameboard.positions.length - 1))];
    while (player.attackList.includes(currentMove)) {
        currentMove = gameboard.positions[Math.floor(Math.random() * (gameboard.positions.length - 1))];
    }
    player.attackList.push(currentMove);
    player.attack = currentMove;
}

function markAttack(opponent, attack, gameboard) {
    const opponentSpaces = document.querySelectorAll(`.${opponent.name}`);
    for (let i = 0; i < gameboard.shipList.length; i++) {
        opponentSpaces.forEach(space => {
            if (gameboard.shipList[i].hitPositions.includes(space.dataset.id)) {
                space.classList.add("hit");
            } 
        })
    }
    opponentSpaces.forEach(space => {
        if (space.dataset.id === attack && !(space.classList.contains("hit"))) {
            space.classList.add("missed", getBackgroundImage());
        }
    })
}

function getBackgroundImage() {
    const backgroundList = ["iceCream", "lollipop", "cat", "panda"];
    let index = Math.floor(Math.random() * 4);
    return backgroundList[index];
}

function resetGame() {
    player1.attackList = [];
    player2.attackList = [];
    for (let i = 0; i < player1Board.shipList.length; i++) {
        player1Board.shipList[i].hitPositions = [];
    }
    for (let i = 0; i < player2Board.shipList.length; i++) {
        player2Board.shipList[i].hitPositions = [];
    }
    const display = document.getElementById("display");
    display.innerHTML = "";
}

function announceWinner(gameboard) {

    if (gameboard.checkIfSunk()) {
        const boards = document.querySelectorAll(".board");
        boards.forEach(board => {
            board.classList.add("loser");
        });

        const display = document.getElementById("display");
        const announcement = document.createElement("div");
        const announcementText = document.createElement("h3");
        const playAgainBtn = document.createElement("button");
        playAgainBtn.textContent = "Play again";
        announcement.classList.add("announcement");

        if (gameboard.player.name === "computer") {
            announcementText.textContent = "You win!";
        }
        if (gameboard.player.name === "you") {
            announcementText.textContent = "The computer wins!";
        }

        announcement.appendChild(announcementText);
        display.appendChild(announcement);

        playAgainBtn.onclick = () => {
            resetGame();
            const player1Board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)(player1);
            const player2Board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)(player2);
            displayBoard(player1Board);
            displayBoard(player2Board);
            pickSpace();
        }
    }
}





/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playRound": () => (/* binding */ playRound)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");



function playRound(player1, player2, player1Board, player2Board) {

    let player1Attack = player1.attack;
    let player2Attack = player2.attack;

    player1.addAttack(player1Attack);
    player2.addAttack(player2Attack);

    player2Board.receiveAttack(player1Attack);
    player1Board.receiveAttack(player2Attack);

    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.markAttack)(player2, player1Attack, player2Board);
    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.markAttack)(player1, player2Attack, player1Board), 3000;
    

    player1Board.checkIfSunk();
    player2Board.checkIfSunk();

    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.announceWinner)(player1Board);
    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.announceWinner)(player2Board);
}





/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");


function Gameboard (player) {
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let byLetter = [[],[],[],[],[],[],[],[],[],[]];
    let byNumber = [[],[],[],[],[],[],[],[],[],[]];
    const ship1 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)([]);
    const ship2 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)([]);
    const ship3 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)([]);
    const ship4 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)([]);
    const shipList = [ship1, ship2, ship3, ship4];
    const missedAttacks = [];

    // Set up positions
    for (let i = 0; i < letters.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            let position = letters[i] + numbers[j];
            getRows(position, i);
            getColumns(position, j);
        }
    }
    
    let positions = byNumber.flat();

    function getRows(position, i) {
        if (letters[i] === "A") byLetter[0].push(position);
        if (letters[i] === "B") byLetter[1].push(position);
        if (letters[i] === "C") byLetter[2].push(position);
        if (letters[i] === "D") byLetter[3].push(position);
        if (letters[i] === "E") byLetter[4].push(position);
        if (letters[i] === "F") byLetter[5].push(position);
        if (letters[i] === "G") byLetter[6].push(position);
        if (letters[i] === "H") byLetter[7].push(position);
        if (letters[i] === "I") byLetter[8].push(position);
        if (letters[i] === "J") byLetter[9].push(position);
    }
    
    function getColumns(position, j) {
        if (numbers[j] === 1) byNumber[0].push(position);
        if (numbers[j] === 2) byNumber[1].push(position);
        if (numbers[j] === 3) byNumber[2].push(position);
        if (numbers[j] === 4) byNumber[3].push(position);
        if (numbers[j] === 5) byNumber[4].push(position);
        if (numbers[j] === 6) byNumber[5].push(position);
        if (numbers[j] === 7) byNumber[6].push(position);
        if (numbers[j] === 8) byNumber[7].push(position);
        if (numbers[j] === 9) byNumber[8].push(position);
        if (numbers[j] === 10) byNumber[9].push(position);
    }

    const pickPositions = (ship) => {
        let shipPositions = [];
        let length = Math.floor(Math.random() * 3 + 2);
        let startPosition;
        let outerLetterIndex;
        let innerLetterIndex;
        let outerNumberIndex;
        let innerNumberIndex;
        let direction = Math.floor(Math.random() * 2 + 1);

        getStartPosition();


        function getStartPosition() {
            startPosition = positions[Math.floor(Math.random() * (positions.length - 1))]; // Add 1 at the end?
            while (checkIfTaken(startPosition)) {
                startPosition = positions[Math.floor(Math.random() * (positions.length - 1))];
            }
         
        }

        function checkIfTaken(positionCheck) {
            for (let i = 0; i < shipList.length; i++) {
                if (shipList[i].position.includes(positionCheck)) {
                    return true;
                }
            }
        }

        // Get letter indices
        for (let i = 0; i < byLetter.length; i++) {
            for (let j = 0; j < byLetter[i].length; j++) {
                if (byLetter[i][j] === startPosition) {
                    outerLetterIndex = i;
                    innerLetterIndex = j;
                }
            }
        }   

        // Get number indices
        for (let i = 0; i < byNumber.length; i++) {
            for (let j = 0; j < byNumber[i].length; j++) {
                if (byNumber[i][j] === startPosition) {
                    outerNumberIndex = i;
                    innerNumberIndex = j;
                }
            }
        }   

        // Ship if horizontal
        if (direction === 1) {
            let innerIndex = innerLetterIndex;
            let outerIndex = outerLetterIndex;
            shipPositions.push(startPosition);
            if ((innerLetterIndex + (length)) > 10) {
                length = 10 - innerLetterIndex;
            }
            for (let i = 0; i < length - 1; i++) {
                let position = byLetter[outerIndex][innerIndex + 1];
                if (checkIfTaken(position)) {
                    break;
                }
                shipPositions.push(position);
                innerIndex++;
            }
            ship.position = shipPositions;
        }

        // Ship if vertical
        if (direction === 2) {
            let innerIndex = innerNumberIndex;
            let outerIndex = outerNumberIndex;
            shipPositions.push(startPosition);
            if ((innerNumberIndex + (length)) > 10) {
                length = 10 - innerNumberIndex;
            }
            for (let i = 0; i < length - 1; i++) {
                let position = byNumber[outerIndex][innerIndex + 1];
                if (checkIfTaken(position)) {
                    break;
                }
                shipPositions.push(position);
                innerIndex++;
            }
            ship.position = shipPositions;
        }
    } // End of pick positions

    for (let i = 0; i < shipList.length; i++) {
        pickPositions(shipList[i]);
    }


    return { 
        player,
        missedAttacks,
        positions,
        ship1,
        ship2,
        ship3,
        ship4,
        shipList,
        receiveAttack: (attack) => {
            let flag = false;
            for (let i = 0; i < shipList.length; i++) {
                if (shipList[i].position.includes(attack)) {
                    shipList[i].hit(attack);
                    flag = true;
                }
            }
            for (let i = 0; i < shipList.length; i++) {
                if (!flag) {
                    if (missedAttacks.includes(attack)) continue;
                    else missedAttacks.push(attack);
                }
            }
        },
        checkIfSunk: () => {
            let sunkShips = 0;
            for (let i = 0; i < shipList.length; i++) {
                if (shipList[i].isSunk(shipList[i].hitPositions, shipList[i].position)) sunkShips++;
            }
            if (sunkShips === 4) return true;
        } 
    };
};



/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
function Player(name) {
    let attackList = [];
    let addAttack = (currentAttack) => {
        attackList.push(currentAttack);
    }
    let attack;
    return { name, attack, addAttack, attackList };
}



/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });
function Ship(position) {
    const length = position.length;
    const hitPositions = [];
    const hit = (num) => {
        hitPositions.push(num);
    }
    const isSunk = (positionTest, hitPositionsTest) => {
        if (hitPositionsTest.length === positionTest.length && positionTest) return true;
    }
    return { length, position, hitPositions, hit, isSunk };
}



/***/ }),

/***/ "./src/images/cat.png":
/*!****************************!*\
  !*** ./src/images/cat.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1bc6395fd8592acf9fa6.png";

/***/ }),

/***/ "./src/images/cursor.png":
/*!*******************************!*\
  !*** ./src/images/cursor.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c5956cedb6da01766d0f.png";

/***/ }),

/***/ "./src/images/ice-cream.png":
/*!**********************************!*\
  !*** ./src/images/ice-cream.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d855ef85d59a86371a0.png";

/***/ }),

/***/ "./src/images/lollipop.png":
/*!*********************************!*\
  !*** ./src/images/lollipop.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eeab4b59d85e422d2b26.png";

/***/ }),

/***/ "./src/images/panda.png":
/*!******************************!*\
  !*** ./src/images/panda.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4121ee1fcf4ce917aaf5.png";

/***/ }),

/***/ "./src/images/pointer.png":
/*!********************************!*\
  !*** ./src/images/pointer.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0e870efcff104510bdf1.png";

/***/ }),

/***/ "./src/images/smile.png":
/*!******************************!*\
  !*** ./src/images/smile.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fe7160c8fec78551ad46.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");



(0,_DOM__WEBPACK_IMPORTED_MODULE_1__.pickSpace)();



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNhOztBQUVsQywrQ0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2N1cnNvci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9zbWlsZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9pY2UtY3JlYW0ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvbG9sbGlwb3AucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvY2F0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3BhbmRhLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3BvaW50ZXIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb2NoaXkrUG9wK1ArT25lJmZhbWlseT1Ob3RvK1NhbnMrSlAmZmFtaWx5PU51bml0bzp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS15ZWxsb3c6ICNmM2UwODA7XFxuICAgIC0tdGV4dDogcmdiKDgzLCA4MywgODMpO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgY3Vyc29yOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpLCBkZWZhdWx0O1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7ICAgIFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWQwZDA7XFxuICAgIGNvbG9yOiByZ2IoNjUsIDEwMywgMjAxKTtcXG4gICAgcGFkZGluZy1sZWZ0OiA4dnc7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDh2dztcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7ICAqL1xcbn1cXG5cXG5oZWFkZXIgaDEge1xcbiAgICBmb250LXNpemU6IDQuNXJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgZm9udC1mYW1pbHk6ICdNb2NoaXkgUG9wIFAgT25lJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2Rpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgbWlubWF4KDEwcHgsIDFmcikpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgbWlubWF4KDEwcHgsIDFmcikpO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAzcHg7XFxufVxcblxcbi5ib2FyZENvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5udW1iZXJzQW5kQm9hcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmxldHRlckhlYWRlciB7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDFmcik7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubnVtYmVySGVhZGVyIHtcXG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IChyZXBlYXQoMTAsIDFmcikpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMCU7XFxufVxcblxcbi5sZXR0ZXJTcGFjZSwgLm51bWJlclNwYWNlIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5hbWVBbmRCb2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5uYW1lQW5kQm9hcmQgaDIge1xcbiAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xcbiAgICB0ZXh0LW9yaWVudGF0aW9uOiB1cHJpZ2h0O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG5cXG59XFxuXFxuLmZ1bGxCb2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogLjVyZW07XFxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDMzdnc7XFxuICAgIHdpZHRoOiAzM3Z3O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiBtYXgoMnZ3LCAzMHB4KTtcXG4gICAgcGFkZGluZy1ib3R0b206IG1heCgydncsIDMwcHgpO1xcbn1cXG5cXG4udGFrZW4xIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIyMiwgMTYwLCAxNzEpIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA4MCU7XFxufVxcblxcbi50YWtlbjIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNzYsIDIyNCwgMTcyKSB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogODAlO1xcbn1cXG5cXG4udGFrZW4zIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDkyLCAyMDUsIDIzMCkgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgwJTtcXG59XFxuXFxuLnRha2VuNCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMzIsIDE3OSwgMjApIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA4MCU7XFxufVxcblxcbi5zcGFjZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHQpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbkBrZXlmcmFtZXMgZ2xvdyB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICBib3gtc2hhZG93OiBcXG4gICAgICAgIDJweCAwcHggNXB4IDNweCAjZjljZDFmLCBcXG4gICAgICAgIDBweCAycHggNXB4IDNweCAgI2Y5Y2QxZiwgXFxuICAgICAgICAtMnB4IDBweCA1cHggM3B4ICAjZjljZDFmLCBcXG4gICAgICAgIDBweCAtMnB4IDVweCAzcHggICNmOWNkMWY7XFxuICAgIH1cXG59XFxuXFxuLmhpdCB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXllbGxvdykgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgwJTtcXG4gICAgYW5pbWF0aW9uOiBnbG93IDFzIGxpbmVhciBhbHRlcm5hdGUgaW5maW5pdGU7XFxufVxcblxcbi5taXNzZWQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogODAlO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4uaWNlQ3JlYW0ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAxODgsIDE5OSk7XFxufVxcblxcbi5sb2xsaXBvcCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDI1MSwgMjI5KTtcXG59XFxuXFxuLmNhdCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIxNywgMjUxKTtcXG59XFxuXFxuLnBhbmRhIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjIwLCAxNjcpO1xcbn1cXG5cXG4uZG90IHtcXG4gICAgaGVpZ2h0OiAzcHg7XFxuICAgIHdpZHRoOiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5zcGFjZS5jb21wdXRlcjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2RjZGM7XFxufVxcblxcbi5jb21wdXRlclNwYWNlczpob3ZlciB7XFxuICAgIGN1cnNvcjogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyArIFwiKSwgcG9pbnRlcjtcXG59XFxuXFxuLnNwYWNlLmNvbXB1dGVyOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoLjkpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XFxuICAgIGZyb20ge1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gIFxcbiAgICB0byB7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG5cXG4uYW5ub3VuY2VtZW50IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwdmg7XFxuICAgIGxlZnQ6IDUwdnc7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBhbmltYXRpb246IGxpbmVhciAuNXMgZmFkZWluO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDMwJTtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgYm94LXNoYWRvdzogLTJweCAycHggNXB4IGdyZXk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgzIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubG9zZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI1LCAyMjUsIDIyNSk7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAgIGJvZHkge1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMXJlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgaGVhZGVyIGgxIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xcbiAgICB9XFxuICAgIFxcbiAgICBtYWluIHtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgIH1cXG5cXG4gICAgLm5hbWVBbmRCb2FyZCB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5uYW1lQW5kQm9hcmQgaDIge1xcbiAgICAgICAgd3JpdGluZy1tb2RlOiBob3Jpem9udGFsLXRiO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAuM3JlbTtcXG4gICAgfVxcblxcbiAgICAjZGlzcGxheSB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxpQkFBaUI7SUFDakIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksd0RBQXlDO0lBQ3pDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLFNBQVM7SUFDVCx3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFF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QjtJQUMxQjs7SUFFQTtRQUNJLDJCQUEyQjtRQUMzQixpQkFBaUI7UUFDakIsb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2QixtQkFBbUI7SUFDdkI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb2NoaXkrUG9wK1ArT25lJmZhbWlseT1Ob3RvK1NhbnMrSlAmZmFtaWx5PU51bml0bzp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgICAtLXllbGxvdzogI2YzZTA4MDtcXG4gICAgLS10ZXh0OiByZ2IoODMsIDgzLCA4Myk7XFxufVxcblxcbmh0bWwge1xcbiAgICBjdXJzb3I6IHVybCguL2ltYWdlcy9jdXJzb3IucG5nKSwgZGVmYXVsdDtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmOyAgICBcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlkMGQwO1xcbiAgICBjb2xvcjogcmdiKDY1LCAxMDMsIDIwMSk7XFxuICAgIHBhZGRpbmctbGVmdDogOHZ3O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA4dnc7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpOyAgKi9cXG59XFxuXFxuaGVhZGVyIGgxIHtcXG4gICAgZm9udC1zaXplOiA0LjVyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9jaGl5IFBvcCBQIE9uZScsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNkaXNwbGF5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIG1pbm1heCgxMHB4LCAxZnIpKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIG1pbm1heCgxMHB4LCAxZnIpKTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogM3B4O1xcbn1cXG5cXG4uYm9hcmRDb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubnVtYmVyc0FuZEJvYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5sZXR0ZXJIZWFkZXIge1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAxZnIpO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm51bWJlckhlYWRlciB7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAocmVwZWF0KDEwLCAxZnIpKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAlO1xcbn1cXG5cXG4ubGV0dGVyU3BhY2UsIC5udW1iZXJTcGFjZSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYW1lQW5kQm9hcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubmFtZUFuZEJvYXJkIGgyIHtcXG4gICAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcXG4gICAgdGV4dC1vcmllbnRhdGlvbjogdXByaWdodDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuXFxufVxcblxcbi5mdWxsQm9hcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IC41cmVtO1xcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gICAgbWluLXdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAzM3Z3O1xcbiAgICB3aWR0aDogMzN2dztcXG4gICAgcGFkZGluZy1yaWdodDogbWF4KDJ2dywgMzBweCk7XFxuICAgIHBhZGRpbmctYm90dG9tOiBtYXgoMnZ3LCAzMHB4KTtcXG59XFxuXFxuLnRha2VuMSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMjIsIDE2MCwgMTcxKSB1cmwoLi9pbWFnZXMvc21pbGUucG5nKSBuby1yZXBlYXQgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgwJTtcXG59XFxuXFxuLnRha2VuMiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYig3NiwgMjI0LCAxNzIpIHVybCguL2ltYWdlcy9zbWlsZS5wbmcpIG5vLXJlcGVhdCBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogODAlO1xcbn1cXG5cXG4udGFrZW4zIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDkyLCAyMDUsIDIzMCkgdXJsKC4vaW1hZ2VzL3NtaWxlLnBuZykgbm8tcmVwZWF0IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA4MCU7XFxufVxcblxcbi50YWtlbjQge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjMyLCAxNzksIDIwKSB1cmwoLi9pbWFnZXMvc21pbGUucG5nKSBuby1yZXBlYXQgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgwJTtcXG59XFxuXFxuLnNwYWNlIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuQGtleWZyYW1lcyBnbG93IHtcXG4gICAgZnJvbSB7XFxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIGJveC1zaGFkb3c6IFxcbiAgICAgICAgMnB4IDBweCA1cHggM3B4ICNmOWNkMWYsIFxcbiAgICAgICAgMHB4IDJweCA1cHggM3B4ICAjZjljZDFmLCBcXG4gICAgICAgIC0ycHggMHB4IDVweCAzcHggICNmOWNkMWYsIFxcbiAgICAgICAgMHB4IC0ycHggNXB4IDNweCAgI2Y5Y2QxZjtcXG4gICAgfVxcbn1cXG5cXG4uaGl0IHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0teWVsbG93KSB1cmwoLi9pbWFnZXMvc21pbGUucG5nKSBuby1yZXBlYXQgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgwJTtcXG4gICAgYW5pbWF0aW9uOiBnbG93IDFzIGxpbmVhciBhbHRlcm5hdGUgaW5maW5pdGU7XFxufVxcblxcbi5taXNzZWQge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogODAlO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4uaWNlQ3JlYW0ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvaWNlLWNyZWFtLnBuZyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDE4OCwgMTk5KTtcXG59XFxuXFxuLmxvbGxpcG9wIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL2xvbGxpcG9wLnBuZyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDI1MSwgMjI5KTtcXG59XFxuXFxuLmNhdCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9jYXQucG5nKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMjE3LCAyNTEpO1xcbn1cXG5cXG4ucGFuZGEge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvcGFuZGEucG5nKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjIwLCAxNjcpO1xcbn1cXG5cXG4uZG90IHtcXG4gICAgaGVpZ2h0OiAzcHg7XFxuICAgIHdpZHRoOiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5zcGFjZS5jb21wdXRlcjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2RjZGM7XFxufVxcblxcbi5jb21wdXRlclNwYWNlczpob3ZlciB7XFxuICAgIGN1cnNvcjogdXJsKC4vaW1hZ2VzL3BvaW50ZXIucG5nKSwgcG9pbnRlcjtcXG59XFxuXFxuLnNwYWNlLmNvbXB1dGVyOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoLjkpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XFxuICAgIGZyb20ge1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gIFxcbiAgICB0byB7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG5cXG4uYW5ub3VuY2VtZW50IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwdmg7XFxuICAgIGxlZnQ6IDUwdnc7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBhbmltYXRpb246IGxpbmVhciAuNXMgZmFkZWluO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDMwJTtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgYm94LXNoYWRvdzogLTJweCAycHggNXB4IGdyZXk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgzIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubG9zZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI1LCAyMjUsIDIyNSk7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAgIGJvZHkge1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMXJlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgaGVhZGVyIGgxIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xcbiAgICB9XFxuICAgIFxcbiAgICBtYWluIHtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgIH1cXG5cXG4gICAgLm5hbWVBbmRCb2FyZCB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5uYW1lQW5kQm9hcmQgaDIge1xcbiAgICAgICAgd3JpdGluZy1tb2RlOiBob3Jpem9udGFsLXRiO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAuM3JlbTtcXG4gICAgfVxcblxcbiAgICAjZGlzcGxheSB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHsgcGxheVJvdW5kIH0gZnJvbSBcIi4vZ2FtZVwiO1xuXG5jb25zdCBwbGF5ZXIxID0gUGxheWVyKFwieW91XCIpO1xuY29uc3QgcGxheWVyMiA9IFBsYXllcihcImNvbXB1dGVyXCIpO1xuY29uc3QgcGxheWVyMUJvYXJkID0gR2FtZWJvYXJkKHBsYXllcjEpO1xuY29uc3QgcGxheWVyMkJvYXJkID0gR2FtZWJvYXJkKHBsYXllcjIpO1xuZGlzcGxheUJvYXJkKHBsYXllcjFCb2FyZCk7XG5kaXNwbGF5Qm9hcmQocGxheWVyMkJvYXJkKTtcbmhpZGVHYW1lYm9hcmQocGxheWVyMkJvYXJkKTtcblxuZnVuY3Rpb24gZGlzcGxheUJvYXJkKGdhbWVib2FyZCkge1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgaWYgKGdhbWVib2FyZC5wbGF5ZXIubmFtZSA9PT0gXCJ5b3VcIikge1xuICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gXCLjg5fjg6njg6tcIjtcbiAgICB9IFxuICAgIGVsc2UgaWYgKGdhbWVib2FyZC5wbGF5ZXIubmFtZSA9PT0gXCJjb21wdXRlclwiKSB7XG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBcIuOCs+ODs+ODlOODpeODvOOCv+ODvFwiO1xuICAgIH1cbiAgICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNwbGF5XCIpO1xuXG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBudW1iZXJzQW5kQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGZ1bGxCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbmFtZUFuZEJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIG51bWJlcnNBbmRCb2FyZC5jbGFzc0xpc3QuYWRkKFwibnVtYmVyc0FuZEJvYXJkXCIpO1xuICAgIGZ1bGxCb2FyZC5jbGFzc0xpc3QuYWRkKFwiZnVsbEJvYXJkXCIsIGAke2dhbWVib2FyZC5wbGF5ZXIubmFtZX1Cb2FyZGApO1xuICAgIGJvYXJkLmNsYXNzTGlzdC5hZGQoXCJib2FyZFwiLCBgJHtnYW1lYm9hcmQucGxheWVyLm5hbWV9U3BhY2VzYCk7XG4gICAgYm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImJvYXJkQ29udGFpbmVyXCIpO1xuICAgIG5hbWVBbmRCb2FyZC5jbGFzc0xpc3QuYWRkKFwibmFtZUFuZEJvYXJkXCIsIGAke2dhbWVib2FyZC5wbGF5ZXIubmFtZX1DYXJkYCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVib2FyZC5wb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgc3BhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzcGFjZS5jbGFzc0xpc3QuYWRkKFwic3BhY2VcIik7XG4gICAgICAgIHNwYWNlLmNsYXNzTGlzdC5hZGQoYCR7Z2FtZWJvYXJkLnBsYXllci5uYW1lfWApO1xuICAgICAgICBzcGFjZS5kYXRhc2V0LmlkID0gYCR7Z2FtZWJvYXJkLnBvc2l0aW9uc1tpXX1gO1xuICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChzcGFjZSk7XG4gICAgICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQobmFtZUFuZEJvYXJkKTtcbiAgICAgICAgaWYgKGdhbWVib2FyZC5zaGlwMS5wb3NpdGlvbi5pbmNsdWRlcyhzcGFjZS5kYXRhc2V0LmlkKSkge1xuICAgICAgICAgICAgc3BhY2UuY2xhc3NMaXN0LmFkZChcInRha2VuXCIsIFwidGFrZW4xXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnYW1lYm9hcmQuc2hpcDIucG9zaXRpb24uaW5jbHVkZXMoc3BhY2UuZGF0YXNldC5pZCkpIHtcbiAgICAgICAgICAgIHNwYWNlLmNsYXNzTGlzdC5hZGQoXCJ0YWtlblwiLCBcInRha2VuMlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2FtZWJvYXJkLnNoaXAzLnBvc2l0aW9uLmluY2x1ZGVzKHNwYWNlLmRhdGFzZXQuaWQpKSB7XG4gICAgICAgICAgICBzcGFjZS5jbGFzc0xpc3QuYWRkKFwidGFrZW5cIiwgXCJ0YWtlbjNcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdhbWVib2FyZC5zaGlwNC5wb3NpdGlvbi5pbmNsdWRlcyhzcGFjZS5kYXRhc2V0LmlkKSkge1xuICAgICAgICAgICAgc3BhY2UuY2xhc3NMaXN0LmFkZChcInRha2VuXCIsIFwidGFrZW40XCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVsbEJvYXJkLmFwcGVuZENoaWxkKG51bWJlcnNBbmRCb2FyZCk7XG4gICAgYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoYm9hcmQpO1xuICAgIG5hbWVBbmRCb2FyZC5hcHBlbmRDaGlsZChuYW1lLCBmdWxsQm9hcmQpO1xuXG4gICAgY3JlYXRlTGV0dGVyUm93KGZ1bGxCb2FyZCwgbmFtZUFuZEJvYXJkKTtcbiAgICBjcmVhdGVOdW1iZXJDb2x1bW4obnVtYmVyc0FuZEJvYXJkLCBmdWxsQm9hcmQpO1xuXG4gICAgbnVtYmVyc0FuZEJvYXJkLmFwcGVuZENoaWxkKGJvYXJkQ29udGFpbmVyKTtcblxufVxuXG5mdW5jdGlvbiBjcmVhdGVMZXR0ZXJSb3coY29udGFpbmVyMSwgY29udGFpbmVyMikge1xuICAgIGNvbnN0IGxldHRlcnMgPSBbXCJcIiwgXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIsIFwiRVwiLCBcIkZcIiwgXCJHXCIsIFwiSFwiLCBcIklcIiwgXCJKXCJdO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJsZXR0ZXJIZWFkZXJcIik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxldHRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGV0dGVyU3BhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsZXR0ZXJTcGFjZS50ZXh0Q29udGVudCA9IGxldHRlcnNbaV07XG4gICAgICAgIGxldHRlclNwYWNlLmNsYXNzTGlzdC5hZGQoXCJsZXR0ZXJTcGFjZVwiKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGxldHRlclNwYWNlKTtcbiAgICB9XG5cbiAgICBjb250YWluZXIxLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29udGFpbmVyMi5hcHBlbmRDaGlsZChjb250YWluZXIxKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTnVtYmVyQ29sdW1uKGNvbnRhaW5lcjEsIGNvbnRhaW5lcjIpIHtcbiAgICBjb25zdCBudW1iZXJzID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwXTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwibnVtYmVySGVhZGVyXCIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG51bWJlclNwYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbnVtYmVyU3BhY2UudGV4dENvbnRlbnQgPSBudW1iZXJzW2ldO1xuICAgICAgICBudW1iZXJTcGFjZS5jbGFzc0xpc3QuYWRkKFwibnVtYmVyU3BhY2VcIik7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChudW1iZXJTcGFjZSk7XG4gICAgfVxuXG4gICAgY29udGFpbmVyMS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRhaW5lcjIuYXBwZW5kQ2hpbGQoY29udGFpbmVyMSk7XG59XG5cbmZ1bmN0aW9uIGhpZGVHYW1lYm9hcmQoZ2FtZWJvYXJkKSB7XG4gICAgY29uc3Qgc3BhY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWtlblwiKTtcbiAgICBzcGFjZXMuZm9yRWFjaChzcGFjZSA9PiB7XG4gICAgICAgIGlmIChzcGFjZS5jbGFzc0xpc3QuY29udGFpbnMoYCR7Z2FtZWJvYXJkLnBsYXllci5uYW1lfWApKSB7XG4gICAgICAgICAgICBzcGFjZS5jbGFzc0xpc3QucmVtb3ZlKFwidGFrZW4xXCIsIFwidGFrZW4yXCIsIFwidGFrZW4zXCIsIFwidGFrZW40XCIpO1xuICAgICAgICB9XG4gICAgfSlcblxufVxuXG5mdW5jdGlvbiBwaWNrU3BhY2UoKSB7XG4gICAgY29uc3QgY29tcHV0ZXJTcGFjZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbXB1dGVyXCIpO1xuICAgIGNvbXB1dGVyU3BhY2VzLmZvckVhY2goc3BhY2UgPT4ge1xuICAgICAgICBzcGFjZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNwYWNlLmNsYXNzTGlzdC5jb250YWlucyhcImhpdFwiKSB8fCBzcGFjZS5jbGFzc0xpc3QuY29udGFpbnMoXCJtaXNzZWRcIikpIHJldHVybiAwO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGxheWVyMS5hdHRhY2sgPSBzcGFjZS5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgICAgIGdldENvbXB1dGVyQXR0YWNrKHBsYXllcjIsIHBsYXllcjFCb2FyZCk7XG4gICAgICAgICAgICAgICAgcGxheVJvdW5kKHBsYXllcjEsIHBsYXllcjIsIHBsYXllcjFCb2FyZCwgcGxheWVyMkJvYXJkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGdldENvbXB1dGVyQXR0YWNrKHBsYXllciwgZ2FtZWJvYXJkKSB7XG4gICAgbGV0IGN1cnJlbnRNb3ZlID0gZ2FtZWJvYXJkLnBvc2l0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoZ2FtZWJvYXJkLnBvc2l0aW9ucy5sZW5ndGggLSAxKSldO1xuICAgIHdoaWxlIChwbGF5ZXIuYXR0YWNrTGlzdC5pbmNsdWRlcyhjdXJyZW50TW92ZSkpIHtcbiAgICAgICAgY3VycmVudE1vdmUgPSBnYW1lYm9hcmQucG9zaXRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChnYW1lYm9hcmQucG9zaXRpb25zLmxlbmd0aCAtIDEpKV07XG4gICAgfVxuICAgIHBsYXllci5hdHRhY2tMaXN0LnB1c2goY3VycmVudE1vdmUpO1xuICAgIHBsYXllci5hdHRhY2sgPSBjdXJyZW50TW92ZTtcbn1cblxuZnVuY3Rpb24gbWFya0F0dGFjayhvcHBvbmVudCwgYXR0YWNrLCBnYW1lYm9hcmQpIHtcbiAgICBjb25zdCBvcHBvbmVudFNwYWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke29wcG9uZW50Lm5hbWV9YCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lYm9hcmQuc2hpcExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgb3Bwb25lbnRTcGFjZXMuZm9yRWFjaChzcGFjZSA9PiB7XG4gICAgICAgICAgICBpZiAoZ2FtZWJvYXJkLnNoaXBMaXN0W2ldLmhpdFBvc2l0aW9ucy5pbmNsdWRlcyhzcGFjZS5kYXRhc2V0LmlkKSkge1xuICAgICAgICAgICAgICAgIHNwYWNlLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICAgICAgICB9IFxuICAgICAgICB9KVxuICAgIH1cbiAgICBvcHBvbmVudFNwYWNlcy5mb3JFYWNoKHNwYWNlID0+IHtcbiAgICAgICAgaWYgKHNwYWNlLmRhdGFzZXQuaWQgPT09IGF0dGFjayAmJiAhKHNwYWNlLmNsYXNzTGlzdC5jb250YWlucyhcImhpdFwiKSkpIHtcbiAgICAgICAgICAgIHNwYWNlLmNsYXNzTGlzdC5hZGQoXCJtaXNzZWRcIiwgZ2V0QmFja2dyb3VuZEltYWdlKCkpO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZ2V0QmFja2dyb3VuZEltYWdlKCkge1xuICAgIGNvbnN0IGJhY2tncm91bmRMaXN0ID0gW1wiaWNlQ3JlYW1cIiwgXCJsb2xsaXBvcFwiLCBcImNhdFwiLCBcInBhbmRhXCJdO1xuICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpO1xuICAgIHJldHVybiBiYWNrZ3JvdW5kTGlzdFtpbmRleF07XG59XG5cbmZ1bmN0aW9uIHJlc2V0R2FtZSgpIHtcbiAgICBwbGF5ZXIxLmF0dGFja0xpc3QgPSBbXTtcbiAgICBwbGF5ZXIyLmF0dGFja0xpc3QgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllcjFCb2FyZC5zaGlwTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBwbGF5ZXIxQm9hcmQuc2hpcExpc3RbaV0uaGl0UG9zaXRpb25zID0gW107XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyMkJvYXJkLnNoaXBMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBsYXllcjJCb2FyZC5zaGlwTGlzdFtpXS5oaXRQb3NpdGlvbnMgPSBbXTtcbiAgICB9XG4gICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzcGxheVwiKTtcbiAgICBkaXNwbGF5LmlubmVySFRNTCA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGFubm91bmNlV2lubmVyKGdhbWVib2FyZCkge1xuXG4gICAgaWYgKGdhbWVib2FyZC5jaGVja0lmU3VuaygpKSB7XG4gICAgICAgIGNvbnN0IGJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9hcmRcIik7XG4gICAgICAgIGJvYXJkcy5mb3JFYWNoKGJvYXJkID0+IHtcbiAgICAgICAgICAgIGJvYXJkLmNsYXNzTGlzdC5hZGQoXCJsb3NlclwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzcGxheVwiKTtcbiAgICAgICAgY29uc3QgYW5ub3VuY2VtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgYW5ub3VuY2VtZW50VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgY29uc3QgcGxheUFnYWluQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgcGxheUFnYWluQnRuLnRleHRDb250ZW50ID0gXCJQbGF5IGFnYWluXCI7XG4gICAgICAgIGFubm91bmNlbWVudC5jbGFzc0xpc3QuYWRkKFwiYW5ub3VuY2VtZW50XCIpO1xuXG4gICAgICAgIGlmIChnYW1lYm9hcmQucGxheWVyLm5hbWUgPT09IFwiY29tcHV0ZXJcIikge1xuICAgICAgICAgICAgYW5ub3VuY2VtZW50VGV4dC50ZXh0Q29udGVudCA9IFwiWW91IHdpbiFcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2FtZWJvYXJkLnBsYXllci5uYW1lID09PSBcInlvdVwiKSB7XG4gICAgICAgICAgICBhbm5vdW5jZW1lbnRUZXh0LnRleHRDb250ZW50ID0gXCJUaGUgY29tcHV0ZXIgd2lucyFcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGFubm91bmNlbWVudC5hcHBlbmRDaGlsZChhbm5vdW5jZW1lbnRUZXh0KTtcbiAgICAgICAgZGlzcGxheS5hcHBlbmRDaGlsZChhbm5vdW5jZW1lbnQpO1xuXG4gICAgICAgIHBsYXlBZ2FpbkJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVzZXRHYW1lKCk7XG4gICAgICAgICAgICBjb25zdCBwbGF5ZXIxQm9hcmQgPSBHYW1lYm9hcmQocGxheWVyMSk7XG4gICAgICAgICAgICBjb25zdCBwbGF5ZXIyQm9hcmQgPSBHYW1lYm9hcmQocGxheWVyMik7XG4gICAgICAgICAgICBkaXNwbGF5Qm9hcmQocGxheWVyMUJvYXJkKTtcbiAgICAgICAgICAgIGRpc3BsYXlCb2FyZChwbGF5ZXIyQm9hcmQpO1xuICAgICAgICAgICAgcGlja1NwYWNlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG5leHBvcnQgeyBkaXNwbGF5Qm9hcmQsIGhpZGVHYW1lYm9hcmQsIHBpY2tTcGFjZSwgbWFya0F0dGFjaywgYW5ub3VuY2VXaW5uZXIgfTsiLCJcbmltcG9ydCB7IG1hcmtBdHRhY2ssIGFubm91bmNlV2lubmVyIH0gZnJvbSAnLi9ET00nO1xuXG5mdW5jdGlvbiBwbGF5Um91bmQocGxheWVyMSwgcGxheWVyMiwgcGxheWVyMUJvYXJkLCBwbGF5ZXIyQm9hcmQpIHtcblxuICAgIGxldCBwbGF5ZXIxQXR0YWNrID0gcGxheWVyMS5hdHRhY2s7XG4gICAgbGV0IHBsYXllcjJBdHRhY2sgPSBwbGF5ZXIyLmF0dGFjaztcblxuICAgIHBsYXllcjEuYWRkQXR0YWNrKHBsYXllcjFBdHRhY2spO1xuICAgIHBsYXllcjIuYWRkQXR0YWNrKHBsYXllcjJBdHRhY2spO1xuXG4gICAgcGxheWVyMkJvYXJkLnJlY2VpdmVBdHRhY2socGxheWVyMUF0dGFjayk7XG4gICAgcGxheWVyMUJvYXJkLnJlY2VpdmVBdHRhY2socGxheWVyMkF0dGFjayk7XG5cbiAgICBtYXJrQXR0YWNrKHBsYXllcjIsIHBsYXllcjFBdHRhY2ssIHBsYXllcjJCb2FyZCk7XG4gICAgbWFya0F0dGFjayhwbGF5ZXIxLCBwbGF5ZXIyQXR0YWNrLCBwbGF5ZXIxQm9hcmQpLCAzMDAwO1xuICAgIFxuXG4gICAgcGxheWVyMUJvYXJkLmNoZWNrSWZTdW5rKCk7XG4gICAgcGxheWVyMkJvYXJkLmNoZWNrSWZTdW5rKCk7XG5cbiAgICBhbm5vdW5jZVdpbm5lcihwbGF5ZXIxQm9hcmQpO1xuICAgIGFubm91bmNlV2lubmVyKHBsYXllcjJCb2FyZCk7XG59XG5cbmV4cG9ydCB7IHBsYXlSb3VuZCB9O1xuXG4iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuXG5mdW5jdGlvbiBHYW1lYm9hcmQgKHBsYXllcikge1xuICAgIGNvbnN0IGxldHRlcnMgPSBbXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIsIFwiRVwiLCBcIkZcIiwgXCJHXCIsIFwiSFwiLCBcIklcIiwgXCJKXCJdXG4gICAgY29uc3QgbnVtYmVycyA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMF07XG4gICAgbGV0IGJ5TGV0dGVyID0gW1tdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdXTtcbiAgICBsZXQgYnlOdW1iZXIgPSBbW10sW10sW10sW10sW10sW10sW10sW10sW10sW11dO1xuICAgIGNvbnN0IHNoaXAxID0gU2hpcChbXSk7XG4gICAgY29uc3Qgc2hpcDIgPSBTaGlwKFtdKTtcbiAgICBjb25zdCBzaGlwMyA9IFNoaXAoW10pO1xuICAgIGNvbnN0IHNoaXA0ID0gU2hpcChbXSk7XG4gICAgY29uc3Qgc2hpcExpc3QgPSBbc2hpcDEsIHNoaXAyLCBzaGlwMywgc2hpcDRdO1xuICAgIGNvbnN0IG1pc3NlZEF0dGFja3MgPSBbXTtcblxuICAgIC8vIFNldCB1cCBwb3NpdGlvbnNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxldHRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBudW1iZXJzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBsZXQgcG9zaXRpb24gPSBsZXR0ZXJzW2ldICsgbnVtYmVyc1tqXTtcbiAgICAgICAgICAgIGdldFJvd3MocG9zaXRpb24sIGkpO1xuICAgICAgICAgICAgZ2V0Q29sdW1ucyhwb3NpdGlvbiwgaik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgbGV0IHBvc2l0aW9ucyA9IGJ5TnVtYmVyLmZsYXQoKTtcblxuICAgIGZ1bmN0aW9uIGdldFJvd3MocG9zaXRpb24sIGkpIHtcbiAgICAgICAgaWYgKGxldHRlcnNbaV0gPT09IFwiQVwiKSBieUxldHRlclswXS5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgaWYgKGxldHRlcnNbaV0gPT09IFwiQlwiKSBieUxldHRlclsxXS5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgaWYgKGxldHRlcnNbaV0gPT09IFwiQ1wiKSBieUxldHRlclsyXS5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgaWYgKGxldHRlcnNbaV0gPT09IFwiRFwiKSBieUxldHRlclszXS5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgaWYgKGxldHRlcnNbaV0gPT09IFwiRVwiKSBieUxldHRlcls0XS5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgaWYgKGxldHRlcnNbaV0gPT09IFwiRlwiKSBieUxldHRlcls1XS5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgaWYgKGxldHRlcnNbaV0gPT09IFwiR1wiKSBieUxldHRlcls2XS5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgaWYgKGxldHRlcnNbaV0gPT09IFwiSFwiKSBieUxldHRlcls3XS5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgaWYgKGxldHRlcnNbaV0gPT09IFwiSVwiKSBieUxldHRlcls4XS5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgaWYgKGxldHRlcnNbaV0gPT09IFwiSlwiKSBieUxldHRlcls5XS5wdXNoKHBvc2l0aW9uKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZ2V0Q29sdW1ucyhwb3NpdGlvbiwgaikge1xuICAgICAgICBpZiAobnVtYmVyc1tqXSA9PT0gMSkgYnlOdW1iZXJbMF0ucHVzaChwb3NpdGlvbik7XG4gICAgICAgIGlmIChudW1iZXJzW2pdID09PSAyKSBieU51bWJlclsxXS5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgaWYgKG51bWJlcnNbal0gPT09IDMpIGJ5TnVtYmVyWzJdLnB1c2gocG9zaXRpb24pO1xuICAgICAgICBpZiAobnVtYmVyc1tqXSA9PT0gNCkgYnlOdW1iZXJbM10ucHVzaChwb3NpdGlvbik7XG4gICAgICAgIGlmIChudW1iZXJzW2pdID09PSA1KSBieU51bWJlcls0XS5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgaWYgKG51bWJlcnNbal0gPT09IDYpIGJ5TnVtYmVyWzVdLnB1c2gocG9zaXRpb24pO1xuICAgICAgICBpZiAobnVtYmVyc1tqXSA9PT0gNykgYnlOdW1iZXJbNl0ucHVzaChwb3NpdGlvbik7XG4gICAgICAgIGlmIChudW1iZXJzW2pdID09PSA4KSBieU51bWJlcls3XS5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgaWYgKG51bWJlcnNbal0gPT09IDkpIGJ5TnVtYmVyWzhdLnB1c2gocG9zaXRpb24pO1xuICAgICAgICBpZiAobnVtYmVyc1tqXSA9PT0gMTApIGJ5TnVtYmVyWzldLnB1c2gocG9zaXRpb24pO1xuICAgIH1cblxuICAgIGNvbnN0IHBpY2tQb3NpdGlvbnMgPSAoc2hpcCkgPT4ge1xuICAgICAgICBsZXQgc2hpcFBvc2l0aW9ucyA9IFtdO1xuICAgICAgICBsZXQgbGVuZ3RoID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMyArIDIpO1xuICAgICAgICBsZXQgc3RhcnRQb3NpdGlvbjtcbiAgICAgICAgbGV0IG91dGVyTGV0dGVySW5kZXg7XG4gICAgICAgIGxldCBpbm5lckxldHRlckluZGV4O1xuICAgICAgICBsZXQgb3V0ZXJOdW1iZXJJbmRleDtcbiAgICAgICAgbGV0IGlubmVyTnVtYmVySW5kZXg7XG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyICsgMSk7XG5cbiAgICAgICAgZ2V0U3RhcnRQb3NpdGlvbigpO1xuXG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0U3RhcnRQb3NpdGlvbigpIHtcbiAgICAgICAgICAgIHN0YXJ0UG9zaXRpb24gPSBwb3NpdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHBvc2l0aW9ucy5sZW5ndGggLSAxKSldOyAvLyBBZGQgMSBhdCB0aGUgZW5kP1xuICAgICAgICAgICAgd2hpbGUgKGNoZWNrSWZUYWtlbihzdGFydFBvc2l0aW9uKSkge1xuICAgICAgICAgICAgICAgIHN0YXJ0UG9zaXRpb24gPSBwb3NpdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHBvc2l0aW9ucy5sZW5ndGggLSAxKSldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjaGVja0lmVGFrZW4ocG9zaXRpb25DaGVjaykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChzaGlwTGlzdFtpXS5wb3NpdGlvbi5pbmNsdWRlcyhwb3NpdGlvbkNoZWNrKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBHZXQgbGV0dGVyIGluZGljZXNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBieUxldHRlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBieUxldHRlcltpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChieUxldHRlcltpXVtqXSA9PT0gc3RhcnRQb3NpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBvdXRlckxldHRlckluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJMZXR0ZXJJbmRleCA9IGo7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9ICAgXG5cbiAgICAgICAgLy8gR2V0IG51bWJlciBpbmRpY2VzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnlOdW1iZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYnlOdW1iZXJbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYnlOdW1iZXJbaV1bal0gPT09IHN0YXJ0UG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0ZXJOdW1iZXJJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGlubmVyTnVtYmVySW5kZXggPSBqO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgIFxuXG4gICAgICAgIC8vIFNoaXAgaWYgaG9yaXpvbnRhbFxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAxKSB7XG4gICAgICAgICAgICBsZXQgaW5uZXJJbmRleCA9IGlubmVyTGV0dGVySW5kZXg7XG4gICAgICAgICAgICBsZXQgb3V0ZXJJbmRleCA9IG91dGVyTGV0dGVySW5kZXg7XG4gICAgICAgICAgICBzaGlwUG9zaXRpb25zLnB1c2goc3RhcnRQb3NpdGlvbik7XG4gICAgICAgICAgICBpZiAoKGlubmVyTGV0dGVySW5kZXggKyAobGVuZ3RoKSkgPiAxMCkge1xuICAgICAgICAgICAgICAgIGxlbmd0aCA9IDEwIC0gaW5uZXJMZXR0ZXJJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gYnlMZXR0ZXJbb3V0ZXJJbmRleF1baW5uZXJJbmRleCArIDFdO1xuICAgICAgICAgICAgICAgIGlmIChjaGVja0lmVGFrZW4ocG9zaXRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzaGlwUG9zaXRpb25zLnB1c2gocG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIGlubmVySW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNoaXAucG9zaXRpb24gPSBzaGlwUG9zaXRpb25zO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2hpcCBpZiB2ZXJ0aWNhbFxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAyKSB7XG4gICAgICAgICAgICBsZXQgaW5uZXJJbmRleCA9IGlubmVyTnVtYmVySW5kZXg7XG4gICAgICAgICAgICBsZXQgb3V0ZXJJbmRleCA9IG91dGVyTnVtYmVySW5kZXg7XG4gICAgICAgICAgICBzaGlwUG9zaXRpb25zLnB1c2goc3RhcnRQb3NpdGlvbik7XG4gICAgICAgICAgICBpZiAoKGlubmVyTnVtYmVySW5kZXggKyAobGVuZ3RoKSkgPiAxMCkge1xuICAgICAgICAgICAgICAgIGxlbmd0aCA9IDEwIC0gaW5uZXJOdW1iZXJJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gYnlOdW1iZXJbb3V0ZXJJbmRleF1baW5uZXJJbmRleCArIDFdO1xuICAgICAgICAgICAgICAgIGlmIChjaGVja0lmVGFrZW4ocG9zaXRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzaGlwUG9zaXRpb25zLnB1c2gocG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIGlubmVySW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNoaXAucG9zaXRpb24gPSBzaGlwUG9zaXRpb25zO1xuICAgICAgICB9XG4gICAgfSAvLyBFbmQgb2YgcGljayBwb3NpdGlvbnNcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcGlja1Bvc2l0aW9ucyhzaGlwTGlzdFtpXSk7XG4gICAgfVxuXG5cbiAgICByZXR1cm4geyBcbiAgICAgICAgcGxheWVyLFxuICAgICAgICBtaXNzZWRBdHRhY2tzLFxuICAgICAgICBwb3NpdGlvbnMsXG4gICAgICAgIHNoaXAxLFxuICAgICAgICBzaGlwMixcbiAgICAgICAgc2hpcDMsXG4gICAgICAgIHNoaXA0LFxuICAgICAgICBzaGlwTGlzdCxcbiAgICAgICAgcmVjZWl2ZUF0dGFjazogKGF0dGFjaykgPT4ge1xuICAgICAgICAgICAgbGV0IGZsYWcgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoc2hpcExpc3RbaV0ucG9zaXRpb24uaW5jbHVkZXMoYXR0YWNrKSkge1xuICAgICAgICAgICAgICAgICAgICBzaGlwTGlzdFtpXS5oaXQoYXR0YWNrKTtcbiAgICAgICAgICAgICAgICAgICAgZmxhZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICghZmxhZykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobWlzc2VkQXR0YWNrcy5pbmNsdWRlcyhhdHRhY2spKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBtaXNzZWRBdHRhY2tzLnB1c2goYXR0YWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNoZWNrSWZTdW5rOiAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgc3Vua1NoaXBzID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoc2hpcExpc3RbaV0uaXNTdW5rKHNoaXBMaXN0W2ldLmhpdFBvc2l0aW9ucywgc2hpcExpc3RbaV0ucG9zaXRpb24pKSBzdW5rU2hpcHMrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdW5rU2hpcHMgPT09IDQpIHJldHVybiB0cnVlO1xuICAgICAgICB9IFxuICAgIH07XG59O1xuXG5leHBvcnQgeyBHYW1lYm9hcmQgfTsiLCJmdW5jdGlvbiBQbGF5ZXIobmFtZSkge1xuICAgIGxldCBhdHRhY2tMaXN0ID0gW107XG4gICAgbGV0IGFkZEF0dGFjayA9IChjdXJyZW50QXR0YWNrKSA9PiB7XG4gICAgICAgIGF0dGFja0xpc3QucHVzaChjdXJyZW50QXR0YWNrKTtcbiAgICB9XG4gICAgbGV0IGF0dGFjaztcbiAgICByZXR1cm4geyBuYW1lLCBhdHRhY2ssIGFkZEF0dGFjaywgYXR0YWNrTGlzdCB9O1xufVxuXG5leHBvcnQgeyBQbGF5ZXIgfTsiLCJmdW5jdGlvbiBTaGlwKHBvc2l0aW9uKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gcG9zaXRpb24ubGVuZ3RoO1xuICAgIGNvbnN0IGhpdFBvc2l0aW9ucyA9IFtdO1xuICAgIGNvbnN0IGhpdCA9IChudW0pID0+IHtcbiAgICAgICAgaGl0UG9zaXRpb25zLnB1c2gobnVtKTtcbiAgICB9XG4gICAgY29uc3QgaXNTdW5rID0gKHBvc2l0aW9uVGVzdCwgaGl0UG9zaXRpb25zVGVzdCkgPT4ge1xuICAgICAgICBpZiAoaGl0UG9zaXRpb25zVGVzdC5sZW5ndGggPT09IHBvc2l0aW9uVGVzdC5sZW5ndGggJiYgcG9zaXRpb25UZXN0KSByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHsgbGVuZ3RoLCBwb3NpdGlvbiwgaGl0UG9zaXRpb25zLCBoaXQsIGlzU3VuayB9O1xufVxuXG5leHBvcnQgeyBTaGlwIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgcGlja1NwYWNlIH0gZnJvbSAnLi9ET00nO1xuXG5waWNrU3BhY2UoKTtcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=