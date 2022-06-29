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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/cow.png */ "./src/images/cow.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/grass.png */ "./src/images/grass.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Moo+Lah+Lah&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    display: grid;\n    grid-template-rows: auto;\n    min-height: 100vh;\n    background-color: rgb(255, 243, 244);\n    color: rgb(83, 83, 83);\n}\n\nheader {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 30px 50px;\n}\n\nheader p {\n    font-size: 1.25rem;\n    margin: 0;\n}\n\nh1 {\n    font-size: 4.5rem;\n    margin: 0;\n    font-family: 'Moo Lah Lah', cursive;\n    letter-spacing: 1px;\n}\n\n#spots {\n    height: 12px;\n    background-color: grey;\n    display: none;\n}\n\nh2 {\n    margin: 15px auto;\n    text-align: center;\n}\n\n#display {\n    display: flex;\n    gap: 20px;\n    align-content: center;\n    justify-content: space-evenly;\n    width: 95%;\n    padding-bottom: 5%;\n}\n\n.board {\n    display: grid;\n    height: 100%;\n    width: 100%;\n    grid-template-rows: repeat(10, 50px);\n    grid-template-columns: repeat(10, 50px);\n    margin: 0;\n    place-content: center;\n    background-color: white;\n}\n\n.numberContainer {\n    display: flex;\n    align-items: flex-start;\n}\n\n.letterHeader {\n    display: flex;\n}\n\n.numberHeader {\n\n}\n\n.letterSpace, .numberSpace {\n    height: 50px;\n    width: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.taken {\n    color: white;\n}\n\n.taken1 {\n    background-color: rgb(222, 160, 171);\n}\n\n.taken2 {\n    background-color: rgb(59, 180, 137);\n}\n\n.taken3 {\n    background-color: rgb(80, 117, 204);\n}\n\n.taken4 {\n    background-color: rgb(232, 179, 20);\n}\n\n.space {\n    border: 1px solid grey;\n    display: grid;\n    place-items: center;\n}\n\n.hit {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-position: center;\n    background-size: cover;\n}\n\n.missed {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-position: center;\n    background-size: cover;\n}\n\n.dot {\n    height: 3px;\n    width: 3px;\n    background-color: black;\n    border-radius: 50%;\n}\n\n.space.computer:hover {\n    background-color: rgb(197, 197, 215);\n    cursor: pointer;\n}\n\n@keyframes fadein {\n    from {\n      opacity: 0;\n    }\n  \n    to {\n      opacity: 1;\n    }\n}\n\n.announcement {\n    position: fixed;\n    top: 50vh;\n    left: 50vw;\n    transform: translate(-50%, -50%);\n    animation: linear .5s fadein;\n    font-size: 3rem;\n    background-color: white;\n    height: 30%;\n    width: 30%;\n    box-shadow: -2px 2px 5px grey;\n    display: grid;\n    place-items: center;\n}\n\nh3 {\n    margin: 0;\n}\n\n.loser {\n    background-color: rgb(225, 225, 225);\n}\n\nfooter {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    margin-top: 20px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,SAAS;IACT,wEAAwE;IACxE,aAAa;IACb,wBAAwB;IACxB,iBAAiB;IACjB,oCAAoC;IACpC,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,SAAS;IACT,mCAAmC;IACnC,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,qBAAqB;IACrB,6BAA6B;IAC7B,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,WAAW;IACX,oCAAoC;IACpC,uCAAuC;IACvC,SAAS;IACT,qBAAqB;IACrB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;AACjB;;AAEA;;AAEA;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,yDAAuC;IACvC,2BAA2B;IAC3B,sBAAsB;AAC1B;;AAEA;IACI,yDAAyC;IACzC,2BAA2B;IAC3B,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,UAAU;IACV,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,oCAAoC;IACpC,eAAe;AACnB;;AAEA;IACI;MACE,UAAU;IACZ;;IAEA;MACE,UAAU;IACZ;AACJ;;AAEA;IACI,eAAe;IACf,SAAS;IACT,UAAU;IACV,gCAAgC;IAChC,4BAA4B;IAC5B,eAAe;IACf,uBAAuB;IACvB,WAAW;IACX,UAAU;IACV,6BAA6B;IAC7B,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,gBAAgB;AACpB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Moo+Lah+Lah&display=swap');\n\nbody {\n    margin: 0;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    display: grid;\n    grid-template-rows: auto;\n    min-height: 100vh;\n    background-color: rgb(255, 243, 244);\n    color: rgb(83, 83, 83);\n}\n\nheader {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 30px 50px;\n}\n\nheader p {\n    font-size: 1.25rem;\n    margin: 0;\n}\n\nh1 {\n    font-size: 4.5rem;\n    margin: 0;\n    font-family: 'Moo Lah Lah', cursive;\n    letter-spacing: 1px;\n}\n\n#spots {\n    height: 12px;\n    background-color: grey;\n    display: none;\n}\n\nh2 {\n    margin: 15px auto;\n    text-align: center;\n}\n\n#display {\n    display: flex;\n    gap: 20px;\n    align-content: center;\n    justify-content: space-evenly;\n    width: 95%;\n    padding-bottom: 5%;\n}\n\n.board {\n    display: grid;\n    height: 100%;\n    width: 100%;\n    grid-template-rows: repeat(10, 50px);\n    grid-template-columns: repeat(10, 50px);\n    margin: 0;\n    place-content: center;\n    background-color: white;\n}\n\n.numberContainer {\n    display: flex;\n    align-items: flex-start;\n}\n\n.letterHeader {\n    display: flex;\n}\n\n.numberHeader {\n\n}\n\n.letterSpace, .numberSpace {\n    height: 50px;\n    width: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.taken {\n    color: white;\n}\n\n.taken1 {\n    background-color: rgb(222, 160, 171);\n}\n\n.taken2 {\n    background-color: rgb(59, 180, 137);\n}\n\n.taken3 {\n    background-color: rgb(80, 117, 204);\n}\n\n.taken4 {\n    background-color: rgb(232, 179, 20);\n}\n\n.space {\n    border: 1px solid grey;\n    display: grid;\n    place-items: center;\n}\n\n.hit {\n    background-image: url(./images/cow.png);\n    background-position: center;\n    background-size: cover;\n}\n\n.missed {\n    background-image: url(./images/grass.png);\n    background-position: center;\n    background-size: cover;\n}\n\n.dot {\n    height: 3px;\n    width: 3px;\n    background-color: black;\n    border-radius: 50%;\n}\n\n.space.computer:hover {\n    background-color: rgb(197, 197, 215);\n    cursor: pointer;\n}\n\n@keyframes fadein {\n    from {\n      opacity: 0;\n    }\n  \n    to {\n      opacity: 1;\n    }\n}\n\n.announcement {\n    position: fixed;\n    top: 50vh;\n    left: 50vw;\n    transform: translate(-50%, -50%);\n    animation: linear .5s fadein;\n    font-size: 3rem;\n    background-color: white;\n    height: 30%;\n    width: 30%;\n    box-shadow: -2px 2px 5px grey;\n    display: grid;\n    place-items: center;\n}\n\nh3 {\n    margin: 0;\n}\n\n.loser {\n    background-color: rgb(225, 225, 225);\n}\n\nfooter {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    margin-top: 20px;\n}"],"sourceRoot":""}]);
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
    name.textContent = `${gameboard.player.name}`;
    const display = document.getElementById("display");

    const board = document.createElement("div");
    const boardContainer = document.createElement("div");
    const numberContainer = document.createElement("div");
    numberContainer.classList.add("numberContainer");
    const letterContainer = document.createElement("div");
    letterContainer.classList.add("letterContainer");
    boardContainer.classList.add("boardContainer");
    board.classList.add("board");
    boardContainer.appendChild(name);


    for (let i = 0; i < gameboard.positions.length; i++) {
        const space = document.createElement("div");
        space.classList.add("space");
        space.classList.add(`${gameboard.player.name}`);
        space.dataset.id = `${gameboard.positions[i]}`;
        board.appendChild(space);
        display.appendChild(boardContainer);
        if (gameboard.ship1.position.includes(space.dataset.id)) {
            space.classList.add("taken", "taken1");
        }
        if (gameboard.ship2.position.includes(space.dataset.id)) {
            space.classList.add("taken","taken2");
        }
        if (gameboard.ship3.position.includes(space.dataset.id)) {
            space.classList.add("taken","taken3");
        }
        if (gameboard.ship4.position.includes(space.dataset.id)) {
            space.classList.add("taken","taken4");
        }
    }
    letterContainer.appendChild(numberContainer)
    boardContainer.appendChild(letterContainer);

    createLetterRow(letterContainer, boardContainer);
    createNumberColumn(numberContainer, letterContainer);

    numberContainer.appendChild(board);

}

function createLetterRow(container1, container2) {
    const letters = ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    const container = document.querySelector(".boardContainer");
    const header = document.createElement("div");
    const display = document.getElementById("display");
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
            player1.attack = space.dataset.id;
            getComputerAttack(player2, player1Board);
            (0,_game__WEBPACK_IMPORTED_MODULE_2__.playRound)(player1, player2, player1Board, player2Board);
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
            space.classList.add("missed");
        }
    })
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
    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.markAttack)(player1, player2Attack, player1Board);

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

/***/ "./src/images/cow.png":
/*!****************************!*\
  !*** ./src/images/cow.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1f48f1005577d59c8430.png";

/***/ }),

/***/ "./src/images/grass.png":
/*!******************************!*\
  !*** ./src/images/grass.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b15edf41a3cc6c77a161.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsNkdBQW1DO0FBQy9FLDRDQUE0QyxpSEFBcUM7QUFDakYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5SEFBeUg7QUFDekgseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0EsZ0RBQWdELGdCQUFnQiwrRUFBK0Usb0JBQW9CLCtCQUErQix3QkFBd0IsMkNBQTJDLDZCQUE2QixHQUFHLFlBQVksb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLHlCQUF5QixHQUFHLGNBQWMseUJBQXlCLGdCQUFnQixHQUFHLFFBQVEsd0JBQXdCLGdCQUFnQiwwQ0FBMEMsMEJBQTBCLEdBQUcsWUFBWSxtQkFBbUIsNkJBQTZCLG9CQUFvQixHQUFHLFFBQVEsd0JBQXdCLHlCQUF5QixHQUFHLGNBQWMsb0JBQW9CLGdCQUFnQiw0QkFBNEIsb0NBQW9DLGlCQUFpQix5QkFBeUIsR0FBRyxZQUFZLG9CQUFvQixtQkFBbUIsa0JBQWtCLDJDQUEyQyw4Q0FBOEMsZ0JBQWdCLDRCQUE0Qiw4QkFBOEIsR0FBRyxzQkFBc0Isb0JBQW9CLDhCQUE4QixHQUFHLG1CQUFtQixvQkFBb0IsR0FBRyxtQkFBbUIsS0FBSyxnQ0FBZ0MsbUJBQW1CLGtCQUFrQixvQkFBb0IsOEJBQThCLDBCQUEwQixHQUFHLFlBQVksbUJBQW1CLEdBQUcsYUFBYSwyQ0FBMkMsR0FBRyxhQUFhLDBDQUEwQyxHQUFHLGFBQWEsMENBQTBDLEdBQUcsYUFBYSwwQ0FBMEMsR0FBRyxZQUFZLDZCQUE2QixvQkFBb0IsMEJBQTBCLEdBQUcsVUFBVSx3RUFBd0Usa0NBQWtDLDZCQUE2QixHQUFHLGFBQWEsd0VBQXdFLGtDQUFrQyw2QkFBNkIsR0FBRyxVQUFVLGtCQUFrQixpQkFBaUIsOEJBQThCLHlCQUF5QixHQUFHLDJCQUEyQiwyQ0FBMkMsc0JBQXNCLEdBQUcsdUJBQXVCLFlBQVksbUJBQW1CLE9BQU8sY0FBYyxtQkFBbUIsT0FBTyxHQUFHLG1CQUFtQixzQkFBc0IsZ0JBQWdCLGlCQUFpQix1Q0FBdUMsbUNBQW1DLHNCQUFzQiw4QkFBOEIsa0JBQWtCLGlCQUFpQixvQ0FBb0Msb0JBQW9CLDBCQUEwQixHQUFHLFFBQVEsZ0JBQWdCLEdBQUcsWUFBWSwyQ0FBMkMsR0FBRyxZQUFZLG9CQUFvQiw4QkFBOEIsMEJBQTBCLG9CQUFvQix1QkFBdUIsR0FBRyxPQUFPLGdGQUFnRixVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLDJHQUEyRyxVQUFVLGdCQUFnQiwrRUFBK0Usb0JBQW9CLCtCQUErQix3QkFBd0IsMkNBQTJDLDZCQUE2QixHQUFHLFlBQVksb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLHlCQUF5QixHQUFHLGNBQWMseUJBQXlCLGdCQUFnQixHQUFHLFFBQVEsd0JBQXdCLGdCQUFnQiwwQ0FBMEMsMEJBQTBCLEdBQUcsWUFBWSxtQkFBbUIsNkJBQTZCLG9CQUFvQixHQUFHLFFBQVEsd0JBQXdCLHlCQUF5QixHQUFHLGNBQWMsb0JBQW9CLGdCQUFnQiw0QkFBNEIsb0NBQW9DLGlCQUFpQix5QkFBeUIsR0FBRyxZQUFZLG9CQUFvQixtQkFBbUIsa0JBQWtCLDJDQUEyQyw4Q0FBOEMsZ0JBQWdCLDRCQUE0Qiw4QkFBOEIsR0FBRyxzQkFBc0Isb0JBQW9CLDhCQUE4QixHQUFHLG1CQUFtQixvQkFBb0IsR0FBRyxtQkFBbUIsS0FBSyxnQ0FBZ0MsbUJBQW1CLGtCQUFrQixvQkFBb0IsOEJBQThCLDBCQUEwQixHQUFHLFlBQVksbUJBQW1CLEdBQUcsYUFBYSwyQ0FBMkMsR0FBRyxhQUFhLDBDQUEwQyxHQUFHLGFBQWEsMENBQTBDLEdBQUcsYUFBYSwwQ0FBMEMsR0FBRyxZQUFZLDZCQUE2QixvQkFBb0IsMEJBQTBCLEdBQUcsVUFBVSw4Q0FBOEMsa0NBQWtDLDZCQUE2QixHQUFHLGFBQWEsZ0RBQWdELGtDQUFrQyw2QkFBNkIsR0FBRyxVQUFVLGtCQUFrQixpQkFBaUIsOEJBQThCLHlCQUF5QixHQUFHLDJCQUEyQiwyQ0FBMkMsc0JBQXNCLEdBQUcsdUJBQXVCLFlBQVksbUJBQW1CLE9BQU8sY0FBYyxtQkFBbUIsT0FBTyxHQUFHLG1CQUFtQixzQkFBc0IsZ0JBQWdCLGlCQUFpQix1Q0FBdUMsbUNBQW1DLHNCQUFzQiw4QkFBOEIsa0JBQWtCLGlCQUFpQixvQ0FBb0Msb0JBQW9CLDBCQUEwQixHQUFHLFFBQVEsZ0JBQWdCLEdBQUcsWUFBWSwyQ0FBMkMsR0FBRyxZQUFZLG9CQUFvQiw4QkFBOEIsMEJBQTBCLG9CQUFvQix1QkFBdUIsR0FBRyxtQkFBbUI7QUFDMXBPO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDYjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0Q7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzVCYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmd0M7QUFDTjtBQUNDOztBQUVuQyxnQkFBZ0IsK0NBQU07QUFDdEIsZ0JBQWdCLCtDQUFNO0FBQ3RCLHFCQUFxQixxREFBUztBQUM5QixxQkFBcUIscURBQVM7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsc0JBQXNCO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0Esb0JBQW9CLGdDQUFnQztBQUNwRDtBQUNBO0FBQ0EsK0JBQStCLHNCQUFzQjtBQUNyRCw4QkFBOEIsdUJBQXVCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0JBQW9CO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0JBQW9CO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHNCQUFzQjtBQUM5RDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGdEQUFTO0FBQ3JCO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQsY0FBYztBQUN2RSxvQkFBb0IsK0JBQStCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtDQUFrQztBQUN0RDtBQUNBO0FBQ0Esb0JBQW9CLGtDQUFrQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxxREFBUztBQUMxQyxpQ0FBaUMscURBQVM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hMbUQ7O0FBRW5EOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLElBQUksZ0RBQVU7QUFDZCxJQUFJLGdEQUFVOztBQUVkO0FBQ0E7O0FBRUEsSUFBSSxvREFBYztBQUNsQixJQUFJLG9EQUFjO0FBQ2xCOztBQUVxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QlM7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsMkNBQUk7QUFDdEIsa0JBQWtCLDJDQUFJO0FBQ3RCLGtCQUFrQiwyQ0FBSTtBQUN0QixrQkFBa0IsMkNBQUk7QUFDdEI7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEMsd0JBQXdCLG9CQUFvQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0EsMkZBQTJGO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIscUJBQXFCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IscUJBQXFCO0FBQzdDLDRCQUE0Qix3QkFBd0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLHFCQUFxQjtBQUM3Qyw0QkFBNEIsd0JBQXdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGdCQUFnQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTixvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIscUJBQXFCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIscUJBQXFCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLDRCQUE0QixxQkFBcUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ1ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNhOztBQUVsQywrQ0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2Nvdy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9ncmFzcy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbytMYWgrTGFoJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNDMsIDI0NCk7XFxuICAgIGNvbG9yOiByZ2IoODMsIDgzLCA4Myk7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAzMHB4IDUwcHg7XFxufVxcblxcbmhlYWRlciBwIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiA0LjVyZW07XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdNb28gTGFoIExhaCcsIGN1cnNpdmU7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxufVxcblxcbiNzcG90cyB7XFxuICAgIGhlaWdodDogMTJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuaDIge1xcbiAgICBtYXJnaW46IDE1cHggYXV0bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jZGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNTBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA1MHB4KTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubnVtYmVyQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5sZXR0ZXJIZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubnVtYmVySGVhZGVyIHtcXG5cXG59XFxuXFxuLmxldHRlclNwYWNlLCAubnVtYmVyU3BhY2Uge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRha2VuIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGFrZW4xIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMiwgMTYwLCAxNzEpO1xcbn1cXG5cXG4udGFrZW4yIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU5LCAxODAsIDEzNyk7XFxufVxcblxcbi50YWtlbjMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODAsIDExNywgMjA0KTtcXG59XFxuXFxuLnRha2VuNCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzIsIDE3OSwgMjApO1xcbn1cXG5cXG4uc3BhY2Uge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGl0IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4ubWlzc2VkIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uZG90IHtcXG4gICAgaGVpZ2h0OiAzcHg7XFxuICAgIHdpZHRoOiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5zcGFjZS5jb21wdXRlcjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTcsIDE5NywgMjE1KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XFxuICAgIGZyb20ge1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gIFxcbiAgICB0byB7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG5cXG4uYW5ub3VuY2VtZW50IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwdmg7XFxuICAgIGxlZnQ6IDUwdnc7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBhbmltYXRpb246IGxpbmVhciAuNXMgZmFkZWluO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDMwJTtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgYm94LXNoYWRvdzogLTJweCAycHggNXB4IGdyZXk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgzIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubG9zZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI1LCAyMjUsIDIyNSk7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksU0FBUztJQUNULHdFQUF3RTtJQUN4RSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixvQ0FBb0M7SUFDcEMsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsU0FBUztJQUNULG1DQUFtQztJQUNuQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7SUFDWCxvQ0FBb0M7SUFDcEMsdUNBQXVDO0lBQ3ZDLFNBQVM7SUFDVCxxQkFBcUI7SUFDckIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7O0FBRUE7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseURBQXVDO0lBQ3ZDLDJCQUEyQjtJQUMzQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5REFBeUM7SUFDekMsMkJBQTJCO0lBQzNCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxlQUFlO0FBQ25COztBQUVBO0lBQ0k7TUFDRSxVQUFVO0lBQ1o7O0lBRUE7TUFDRSxVQUFVO0lBQ1o7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsVUFBVTtJQUNWLGdDQUFnQztJQUNoQyw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb28rTGFoK0xhaCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI0MywgMjQ0KTtcXG4gICAgY29sb3I6IHJnYig4MywgODMsIDgzKTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDMwcHggNTBweDtcXG59XFxuXFxuaGVhZGVyIHAge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDQuNXJlbTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogJ01vbyBMYWggTGFoJywgY3Vyc2l2ZTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG59XFxuXFxuI3Nwb3RzIHtcXG4gICAgaGVpZ2h0OiAxMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5oMiB7XFxuICAgIG1hcmdpbjogMTVweCBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNkaXNwbGF5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XFxufVxcblxcbi5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA1MHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDUwcHgpO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5udW1iZXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLmxldHRlckhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5udW1iZXJIZWFkZXIge1xcblxcbn1cXG5cXG4ubGV0dGVyU3BhY2UsIC5udW1iZXJTcGFjZSB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFrZW4ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50YWtlbjEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIyLCAxNjAsIDE3MSk7XFxufVxcblxcbi50YWtlbjIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTksIDE4MCwgMTM3KTtcXG59XFxuXFxuLnRha2VuMyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MCwgMTE3LCAyMDQpO1xcbn1cXG5cXG4udGFrZW40IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMiwgMTc5LCAyMCk7XFxufVxcblxcbi5zcGFjZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvY293LnBuZyk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLm1pc3NlZCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9ncmFzcy5wbmcpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5kb3Qge1xcbiAgICBoZWlnaHQ6IDNweDtcXG4gICAgd2lkdGg6IDNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnNwYWNlLmNvbXB1dGVyOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NywgMTk3LCAyMTUpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZWluIHtcXG4gICAgZnJvbSB7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgXFxuICAgIHRvIHtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcblxcbi5hbm5vdW5jZW1lbnQge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTB2aDtcXG4gICAgbGVmdDogNTB2dztcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGFuaW1hdGlvbjogbGluZWFyIC41cyBmYWRlaW47XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMzAlO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBib3gtc2hhZG93OiAtMnB4IDJweCA1cHggZ3JleTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaDMge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5sb3NlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjUsIDIyNSwgMjI1KTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHsgcGxheVJvdW5kIH0gZnJvbSBcIi4vZ2FtZVwiO1xuXG5jb25zdCBwbGF5ZXIxID0gUGxheWVyKFwieW91XCIpO1xuY29uc3QgcGxheWVyMiA9IFBsYXllcihcImNvbXB1dGVyXCIpO1xuY29uc3QgcGxheWVyMUJvYXJkID0gR2FtZWJvYXJkKHBsYXllcjEpO1xuY29uc3QgcGxheWVyMkJvYXJkID0gR2FtZWJvYXJkKHBsYXllcjIpO1xuZGlzcGxheUJvYXJkKHBsYXllcjFCb2FyZCk7XG5kaXNwbGF5Qm9hcmQocGxheWVyMkJvYXJkKTtcbmhpZGVHYW1lYm9hcmQocGxheWVyMkJvYXJkKTtcblxuZnVuY3Rpb24gZGlzcGxheUJvYXJkKGdhbWVib2FyZCkge1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgbmFtZS50ZXh0Q29udGVudCA9IGAke2dhbWVib2FyZC5wbGF5ZXIubmFtZX1gO1xuICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc3BsYXlcIik7XG5cbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG51bWJlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbnVtYmVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJudW1iZXJDb250YWluZXJcIik7XG4gICAgY29uc3QgbGV0dGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXR0ZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImxldHRlckNvbnRhaW5lclwiKTtcbiAgICBib2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYm9hcmRDb250YWluZXJcIik7XG4gICAgYm9hcmQuY2xhc3NMaXN0LmFkZChcImJvYXJkXCIpO1xuICAgIGJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWUpO1xuXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVib2FyZC5wb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgc3BhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzcGFjZS5jbGFzc0xpc3QuYWRkKFwic3BhY2VcIik7XG4gICAgICAgIHNwYWNlLmNsYXNzTGlzdC5hZGQoYCR7Z2FtZWJvYXJkLnBsYXllci5uYW1lfWApO1xuICAgICAgICBzcGFjZS5kYXRhc2V0LmlkID0gYCR7Z2FtZWJvYXJkLnBvc2l0aW9uc1tpXX1gO1xuICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChzcGFjZSk7XG4gICAgICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQoYm9hcmRDb250YWluZXIpO1xuICAgICAgICBpZiAoZ2FtZWJvYXJkLnNoaXAxLnBvc2l0aW9uLmluY2x1ZGVzKHNwYWNlLmRhdGFzZXQuaWQpKSB7XG4gICAgICAgICAgICBzcGFjZS5jbGFzc0xpc3QuYWRkKFwidGFrZW5cIiwgXCJ0YWtlbjFcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdhbWVib2FyZC5zaGlwMi5wb3NpdGlvbi5pbmNsdWRlcyhzcGFjZS5kYXRhc2V0LmlkKSkge1xuICAgICAgICAgICAgc3BhY2UuY2xhc3NMaXN0LmFkZChcInRha2VuXCIsXCJ0YWtlbjJcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdhbWVib2FyZC5zaGlwMy5wb3NpdGlvbi5pbmNsdWRlcyhzcGFjZS5kYXRhc2V0LmlkKSkge1xuICAgICAgICAgICAgc3BhY2UuY2xhc3NMaXN0LmFkZChcInRha2VuXCIsXCJ0YWtlbjNcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdhbWVib2FyZC5zaGlwNC5wb3NpdGlvbi5pbmNsdWRlcyhzcGFjZS5kYXRhc2V0LmlkKSkge1xuICAgICAgICAgICAgc3BhY2UuY2xhc3NMaXN0LmFkZChcInRha2VuXCIsXCJ0YWtlbjRcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0dGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG51bWJlckNvbnRhaW5lcilcbiAgICBib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChsZXR0ZXJDb250YWluZXIpO1xuXG4gICAgY3JlYXRlTGV0dGVyUm93KGxldHRlckNvbnRhaW5lciwgYm9hcmRDb250YWluZXIpO1xuICAgIGNyZWF0ZU51bWJlckNvbHVtbihudW1iZXJDb250YWluZXIsIGxldHRlckNvbnRhaW5lcik7XG5cbiAgICBudW1iZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoYm9hcmQpO1xuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxldHRlclJvdyhjb250YWluZXIxLCBjb250YWluZXIyKSB7XG4gICAgY29uc3QgbGV0dGVycyA9IFtcIlwiLCBcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCIsIFwiSVwiLCBcIkpcIl07XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZENvbnRhaW5lclwiKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc3BsYXlcIik7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJsZXR0ZXJIZWFkZXJcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZXR0ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxldHRlclNwYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbGV0dGVyU3BhY2UudGV4dENvbnRlbnQgPSBsZXR0ZXJzW2ldO1xuICAgICAgICBsZXR0ZXJTcGFjZS5jbGFzc0xpc3QuYWRkKFwibGV0dGVyU3BhY2VcIik7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChsZXR0ZXJTcGFjZSk7XG4gICAgfVxuICAgIGNvbnRhaW5lcjEuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb250YWluZXIyLmFwcGVuZENoaWxkKGNvbnRhaW5lcjEpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOdW1iZXJDb2x1bW4oY29udGFpbmVyMSwgY29udGFpbmVyMikge1xuICAgIGNvbnN0IG51bWJlcnMgPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTBdO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJudW1iZXJIZWFkZXJcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG51bWJlclNwYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbnVtYmVyU3BhY2UudGV4dENvbnRlbnQgPSBudW1iZXJzW2ldO1xuICAgICAgICBudW1iZXJTcGFjZS5jbGFzc0xpc3QuYWRkKFwibnVtYmVyU3BhY2VcIik7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChudW1iZXJTcGFjZSk7XG4gICAgfVxuICAgIGNvbnRhaW5lcjEuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb250YWluZXIyLmFwcGVuZENoaWxkKGNvbnRhaW5lcjEpO1xufVxuXG5mdW5jdGlvbiBoaWRlR2FtZWJvYXJkKGdhbWVib2FyZCkge1xuICAgIGNvbnN0IHNwYWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFrZW5cIik7XG4gICAgc3BhY2VzLmZvckVhY2goc3BhY2UgPT4ge1xuICAgICAgICBpZiAoc3BhY2UuY2xhc3NMaXN0LmNvbnRhaW5zKGAke2dhbWVib2FyZC5wbGF5ZXIubmFtZX1gKSkge1xuICAgICAgICAgICAgc3BhY2UuY2xhc3NMaXN0LnJlbW92ZShcInRha2VuMVwiLCBcInRha2VuMlwiLCBcInRha2VuM1wiLCBcInRha2VuNFwiKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbn1cblxuZnVuY3Rpb24gcGlja1NwYWNlKCkge1xuICAgIGNvbnN0IGNvbXB1dGVyU3BhY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb21wdXRlclwiKTtcbiAgICBjb21wdXRlclNwYWNlcy5mb3JFYWNoKHNwYWNlID0+IHtcbiAgICAgICAgc3BhY2Uub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHBsYXllcjEuYXR0YWNrID0gc3BhY2UuZGF0YXNldC5pZDtcbiAgICAgICAgICAgIGdldENvbXB1dGVyQXR0YWNrKHBsYXllcjIsIHBsYXllcjFCb2FyZCk7XG4gICAgICAgICAgICBwbGF5Um91bmQocGxheWVyMSwgcGxheWVyMiwgcGxheWVyMUJvYXJkLCBwbGF5ZXIyQm9hcmQpO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcHV0ZXJBdHRhY2socGxheWVyLCBnYW1lYm9hcmQpIHtcbiAgICBsZXQgY3VycmVudE1vdmUgPSBnYW1lYm9hcmQucG9zaXRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChnYW1lYm9hcmQucG9zaXRpb25zLmxlbmd0aCAtIDEpKV07XG4gICAgd2hpbGUgKHBsYXllci5hdHRhY2tMaXN0LmluY2x1ZGVzKGN1cnJlbnRNb3ZlKSkge1xuICAgICAgICBjdXJyZW50TW92ZSA9IGdhbWVib2FyZC5wb3NpdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGdhbWVib2FyZC5wb3NpdGlvbnMubGVuZ3RoIC0gMSkpXTtcbiAgICB9XG4gICAgcGxheWVyLmF0dGFja0xpc3QucHVzaChjdXJyZW50TW92ZSk7XG4gICAgcGxheWVyLmF0dGFjayA9IGN1cnJlbnRNb3ZlO1xufVxuXG5mdW5jdGlvbiBtYXJrQXR0YWNrKG9wcG9uZW50LCBhdHRhY2ssIGdhbWVib2FyZCkge1xuICAgIGNvbnN0IG9wcG9uZW50U3BhY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7b3Bwb25lbnQubmFtZX1gKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVib2FyZC5zaGlwTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBvcHBvbmVudFNwYWNlcy5mb3JFYWNoKHNwYWNlID0+IHtcbiAgICAgICAgICAgIGlmIChnYW1lYm9hcmQuc2hpcExpc3RbaV0uaGl0UG9zaXRpb25zLmluY2x1ZGVzKHNwYWNlLmRhdGFzZXQuaWQpKSB7XG4gICAgICAgICAgICAgICAgc3BhY2UuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH0pXG4gICAgfVxuICAgIG9wcG9uZW50U3BhY2VzLmZvckVhY2goc3BhY2UgPT4ge1xuICAgICAgICBpZiAoc3BhY2UuZGF0YXNldC5pZCA9PT0gYXR0YWNrICYmICEoc3BhY2UuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGl0XCIpKSkge1xuICAgICAgICAgICAgc3BhY2UuY2xhc3NMaXN0LmFkZChcIm1pc3NlZFwiKTtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHJlc2V0R2FtZSgpIHtcbiAgICBwbGF5ZXIxLmF0dGFja0xpc3QgPSBbXTtcbiAgICBwbGF5ZXIyLmF0dGFja0xpc3QgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllcjFCb2FyZC5zaGlwTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBwbGF5ZXIxQm9hcmQuc2hpcExpc3RbaV0uaGl0UG9zaXRpb25zID0gW107XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyMkJvYXJkLnNoaXBMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBsYXllcjJCb2FyZC5zaGlwTGlzdFtpXS5oaXRQb3NpdGlvbnMgPSBbXTtcbiAgICB9XG4gICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzcGxheVwiKTtcbiAgICBkaXNwbGF5LmlubmVySFRNTCA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGFubm91bmNlV2lubmVyKGdhbWVib2FyZCkge1xuICAgIGlmIChnYW1lYm9hcmQuY2hlY2tJZlN1bmsoKSkge1xuICAgICAgICBjb25zdCBib2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJvYXJkXCIpO1xuICAgICAgICBib2FyZHMuZm9yRWFjaChib2FyZCA9PiB7XG4gICAgICAgICAgICBib2FyZC5jbGFzc0xpc3QuYWRkKFwibG9zZXJcIik7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNwbGF5XCIpO1xuICAgICAgICBjb25zdCBhbm5vdW5jZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBhbm5vdW5jZW1lbnRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBjb25zdCBwbGF5QWdhaW5CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBwbGF5QWdhaW5CdG4udGV4dENvbnRlbnQgPSBcIlBsYXkgYWdhaW5cIjtcbiAgICAgICAgYW5ub3VuY2VtZW50LmNsYXNzTGlzdC5hZGQoXCJhbm5vdW5jZW1lbnRcIik7XG4gICAgICAgIGlmIChnYW1lYm9hcmQucGxheWVyLm5hbWUgPT09IFwiY29tcHV0ZXJcIikge1xuICAgICAgICAgICAgYW5ub3VuY2VtZW50VGV4dC50ZXh0Q29udGVudCA9IFwiWW91IHdpbiFcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2FtZWJvYXJkLnBsYXllci5uYW1lID09PSBcInlvdVwiKSB7XG4gICAgICAgICAgICBhbm5vdW5jZW1lbnRUZXh0LnRleHRDb250ZW50ID0gXCJUaGUgY29tcHV0ZXIgd2lucyFcIjtcbiAgICAgICAgfVxuICAgICAgICBhbm5vdW5jZW1lbnQuYXBwZW5kQ2hpbGQoYW5ub3VuY2VtZW50VGV4dCk7XG4gICAgICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQoYW5ub3VuY2VtZW50KTtcbiAgICAgICAgcGxheUFnYWluQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXNldEdhbWUoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgcGxheWVyMUJvYXJkID0gR2FtZWJvYXJkKHBsYXllcjEpO1xuICAgICAgICAgICAgY29uc3QgcGxheWVyMkJvYXJkID0gR2FtZWJvYXJkKHBsYXllcjIpO1xuICAgICAgICAgICAgZGlzcGxheUJvYXJkKHBsYXllcjFCb2FyZCk7XG4gICAgICAgICAgICBkaXNwbGF5Qm9hcmQocGxheWVyMkJvYXJkKTtcbiAgICAgICAgICAgIHBpY2tTcGFjZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuZXhwb3J0IHsgZGlzcGxheUJvYXJkLCBoaWRlR2FtZWJvYXJkLCBwaWNrU3BhY2UsIG1hcmtBdHRhY2ssIGFubm91bmNlV2lubmVyIH07IiwiXG5pbXBvcnQgeyBtYXJrQXR0YWNrLCBhbm5vdW5jZVdpbm5lciB9IGZyb20gJy4vRE9NJztcblxuZnVuY3Rpb24gcGxheVJvdW5kKHBsYXllcjEsIHBsYXllcjIsIHBsYXllcjFCb2FyZCwgcGxheWVyMkJvYXJkKSB7XG5cbiAgICBsZXQgcGxheWVyMUF0dGFjayA9IHBsYXllcjEuYXR0YWNrO1xuICAgIGxldCBwbGF5ZXIyQXR0YWNrID0gcGxheWVyMi5hdHRhY2s7XG5cbiAgICBwbGF5ZXIxLmFkZEF0dGFjayhwbGF5ZXIxQXR0YWNrKTtcbiAgICBwbGF5ZXIyLmFkZEF0dGFjayhwbGF5ZXIyQXR0YWNrKTtcblxuICAgIHBsYXllcjJCb2FyZC5yZWNlaXZlQXR0YWNrKHBsYXllcjFBdHRhY2spO1xuICAgIHBsYXllcjFCb2FyZC5yZWNlaXZlQXR0YWNrKHBsYXllcjJBdHRhY2spO1xuXG4gICAgbWFya0F0dGFjayhwbGF5ZXIyLCBwbGF5ZXIxQXR0YWNrLCBwbGF5ZXIyQm9hcmQpO1xuICAgIG1hcmtBdHRhY2socGxheWVyMSwgcGxheWVyMkF0dGFjaywgcGxheWVyMUJvYXJkKTtcblxuICAgIHBsYXllcjFCb2FyZC5jaGVja0lmU3VuaygpO1xuICAgIHBsYXllcjJCb2FyZC5jaGVja0lmU3VuaygpO1xuXG4gICAgYW5ub3VuY2VXaW5uZXIocGxheWVyMUJvYXJkKTtcbiAgICBhbm5vdW5jZVdpbm5lcihwbGF5ZXIyQm9hcmQpO1xufVxuXG5leHBvcnQgeyBwbGF5Um91bmQgfTtcblxuIiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcblxuZnVuY3Rpb24gR2FtZWJvYXJkIChwbGF5ZXIpIHtcbiAgICBjb25zdCBsZXR0ZXJzID0gW1wiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiLCBcIkVcIiwgXCJGXCIsIFwiR1wiLCBcIkhcIiwgXCJJXCIsIFwiSlwiXVxuICAgIGNvbnN0IG51bWJlcnMgPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTBdO1xuICAgIGxldCBieUxldHRlciA9IFtbXSxbXSxbXSxbXSxbXSxbXSxbXSxbXSxbXSxbXV07XG4gICAgbGV0IGJ5TnVtYmVyID0gW1tdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdXTtcbiAgICBjb25zdCBzaGlwMSA9IFNoaXAoW10pO1xuICAgIGNvbnN0IHNoaXAyID0gU2hpcChbXSk7XG4gICAgY29uc3Qgc2hpcDMgPSBTaGlwKFtdKTtcbiAgICBjb25zdCBzaGlwNCA9IFNoaXAoW10pO1xuICAgIGNvbnN0IHNoaXBMaXN0ID0gW3NoaXAxLCBzaGlwMiwgc2hpcDMsIHNoaXA0XTtcbiAgICBjb25zdCBtaXNzZWRBdHRhY2tzID0gW107XG5cbiAgICAvLyBTZXQgdXAgcG9zaXRpb25zXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZXR0ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbnVtYmVycy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gbGV0dGVyc1tpXSArIG51bWJlcnNbal07XG4gICAgICAgICAgICBnZXRSb3dzKHBvc2l0aW9uLCBpKTtcbiAgICAgICAgICAgIGdldENvbHVtbnMocG9zaXRpb24sIGopO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGxldCBwb3NpdGlvbnMgPSBieU51bWJlci5mbGF0KCk7XG5cbiAgICBmdW5jdGlvbiBnZXRSb3dzKHBvc2l0aW9uLCBpKSB7XG4gICAgICAgIGlmIChsZXR0ZXJzW2ldID09PSBcIkFcIikgYnlMZXR0ZXJbMF0ucHVzaChwb3NpdGlvbik7XG4gICAgICAgIGlmIChsZXR0ZXJzW2ldID09PSBcIkJcIikgYnlMZXR0ZXJbMV0ucHVzaChwb3NpdGlvbik7XG4gICAgICAgIGlmIChsZXR0ZXJzW2ldID09PSBcIkNcIikgYnlMZXR0ZXJbMl0ucHVzaChwb3NpdGlvbik7XG4gICAgICAgIGlmIChsZXR0ZXJzW2ldID09PSBcIkRcIikgYnlMZXR0ZXJbM10ucHVzaChwb3NpdGlvbik7XG4gICAgICAgIGlmIChsZXR0ZXJzW2ldID09PSBcIkVcIikgYnlMZXR0ZXJbNF0ucHVzaChwb3NpdGlvbik7XG4gICAgICAgIGlmIChsZXR0ZXJzW2ldID09PSBcIkZcIikgYnlMZXR0ZXJbNV0ucHVzaChwb3NpdGlvbik7XG4gICAgICAgIGlmIChsZXR0ZXJzW2ldID09PSBcIkdcIikgYnlMZXR0ZXJbNl0ucHVzaChwb3NpdGlvbik7XG4gICAgICAgIGlmIChsZXR0ZXJzW2ldID09PSBcIkhcIikgYnlMZXR0ZXJbN10ucHVzaChwb3NpdGlvbik7XG4gICAgICAgIGlmIChsZXR0ZXJzW2ldID09PSBcIklcIikgYnlMZXR0ZXJbOF0ucHVzaChwb3NpdGlvbik7XG4gICAgICAgIGlmIChsZXR0ZXJzW2ldID09PSBcIkpcIikgYnlMZXR0ZXJbOV0ucHVzaChwb3NpdGlvbik7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGdldENvbHVtbnMocG9zaXRpb24sIGopIHtcbiAgICAgICAgaWYgKG51bWJlcnNbal0gPT09IDEpIGJ5TnVtYmVyWzBdLnB1c2gocG9zaXRpb24pO1xuICAgICAgICBpZiAobnVtYmVyc1tqXSA9PT0gMikgYnlOdW1iZXJbMV0ucHVzaChwb3NpdGlvbik7XG4gICAgICAgIGlmIChudW1iZXJzW2pdID09PSAzKSBieU51bWJlclsyXS5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgaWYgKG51bWJlcnNbal0gPT09IDQpIGJ5TnVtYmVyWzNdLnB1c2gocG9zaXRpb24pO1xuICAgICAgICBpZiAobnVtYmVyc1tqXSA9PT0gNSkgYnlOdW1iZXJbNF0ucHVzaChwb3NpdGlvbik7XG4gICAgICAgIGlmIChudW1iZXJzW2pdID09PSA2KSBieU51bWJlcls1XS5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgaWYgKG51bWJlcnNbal0gPT09IDcpIGJ5TnVtYmVyWzZdLnB1c2gocG9zaXRpb24pO1xuICAgICAgICBpZiAobnVtYmVyc1tqXSA9PT0gOCkgYnlOdW1iZXJbN10ucHVzaChwb3NpdGlvbik7XG4gICAgICAgIGlmIChudW1iZXJzW2pdID09PSA5KSBieU51bWJlcls4XS5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgaWYgKG51bWJlcnNbal0gPT09IDEwKSBieU51bWJlcls5XS5wdXNoKHBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBjb25zdCBwaWNrUG9zaXRpb25zID0gKHNoaXApID0+IHtcbiAgICAgICAgbGV0IHNoaXBQb3NpdGlvbnMgPSBbXTtcbiAgICAgICAgbGV0IGxlbmd0aCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMgKyAyKTtcbiAgICAgICAgbGV0IHN0YXJ0UG9zaXRpb247XG4gICAgICAgIGxldCBvdXRlckxldHRlckluZGV4O1xuICAgICAgICBsZXQgaW5uZXJMZXR0ZXJJbmRleDtcbiAgICAgICAgbGV0IG91dGVyTnVtYmVySW5kZXg7XG4gICAgICAgIGxldCBpbm5lck51bWJlckluZGV4O1xuICAgICAgICBsZXQgZGlyZWN0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMiArIDEpO1xuXG4gICAgICAgIGdldFN0YXJ0UG9zaXRpb24oKTtcblxuXG4gICAgICAgIGZ1bmN0aW9uIGdldFN0YXJ0UG9zaXRpb24oKSB7XG4gICAgICAgICAgICBzdGFydFBvc2l0aW9uID0gcG9zaXRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChwb3NpdGlvbnMubGVuZ3RoIC0gMSkpXTsgLy8gQWRkIDEgYXQgdGhlIGVuZD9cbiAgICAgICAgICAgIHdoaWxlIChjaGVja0lmVGFrZW4oc3RhcnRQb3NpdGlvbikpIHtcbiAgICAgICAgICAgICAgICBzdGFydFBvc2l0aW9uID0gcG9zaXRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChwb3NpdGlvbnMubGVuZ3RoIC0gMSkpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY2hlY2tJZlRha2VuKHBvc2l0aW9uQ2hlY2spIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoc2hpcExpc3RbaV0ucG9zaXRpb24uaW5jbHVkZXMocG9zaXRpb25DaGVjaykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gR2V0IGxldHRlciBpbmRpY2VzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnlMZXR0ZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYnlMZXR0ZXJbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYnlMZXR0ZXJbaV1bal0gPT09IHN0YXJ0UG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0ZXJMZXR0ZXJJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGlubmVyTGV0dGVySW5kZXggPSBqO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgIFxuXG4gICAgICAgIC8vIEdldCBudW1iZXIgaW5kaWNlc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ5TnVtYmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJ5TnVtYmVyW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJ5TnVtYmVyW2ldW2pdID09PSBzdGFydFBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIG91dGVyTnVtYmVySW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICBpbm5lck51bWJlckluZGV4ID0gajtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICBcblxuICAgICAgICAvLyBTaGlwIGlmIGhvcml6b250YWxcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gMSkge1xuICAgICAgICAgICAgbGV0IGlubmVySW5kZXggPSBpbm5lckxldHRlckluZGV4O1xuICAgICAgICAgICAgbGV0IG91dGVySW5kZXggPSBvdXRlckxldHRlckluZGV4O1xuICAgICAgICAgICAgc2hpcFBvc2l0aW9ucy5wdXNoKHN0YXJ0UG9zaXRpb24pO1xuICAgICAgICAgICAgaWYgKChpbm5lckxldHRlckluZGV4ICsgKGxlbmd0aCkpID4gMTApIHtcbiAgICAgICAgICAgICAgICBsZW5ndGggPSAxMCAtIGlubmVyTGV0dGVySW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IGJ5TGV0dGVyW291dGVySW5kZXhdW2lubmVySW5kZXggKyAxXTtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tJZlRha2VuKHBvc2l0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2hpcFBvc2l0aW9ucy5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBpbm5lckluZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaGlwLnBvc2l0aW9uID0gc2hpcFBvc2l0aW9ucztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNoaXAgaWYgdmVydGljYWxcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gMikge1xuICAgICAgICAgICAgbGV0IGlubmVySW5kZXggPSBpbm5lck51bWJlckluZGV4O1xuICAgICAgICAgICAgbGV0IG91dGVySW5kZXggPSBvdXRlck51bWJlckluZGV4O1xuICAgICAgICAgICAgc2hpcFBvc2l0aW9ucy5wdXNoKHN0YXJ0UG9zaXRpb24pO1xuICAgICAgICAgICAgaWYgKChpbm5lck51bWJlckluZGV4ICsgKGxlbmd0aCkpID4gMTApIHtcbiAgICAgICAgICAgICAgICBsZW5ndGggPSAxMCAtIGlubmVyTnVtYmVySW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IGJ5TnVtYmVyW291dGVySW5kZXhdW2lubmVySW5kZXggKyAxXTtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tJZlRha2VuKHBvc2l0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2hpcFBvc2l0aW9ucy5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBpbm5lckluZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaGlwLnBvc2l0aW9uID0gc2hpcFBvc2l0aW9ucztcbiAgICAgICAgfVxuICAgIH0gLy8gRW5kIG9mIHBpY2sgcG9zaXRpb25zXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBpY2tQb3NpdGlvbnMoc2hpcExpc3RbaV0pO1xuICAgIH1cblxuXG4gICAgcmV0dXJuIHsgXG4gICAgICAgIHBsYXllcixcbiAgICAgICAgbWlzc2VkQXR0YWNrcyxcbiAgICAgICAgcG9zaXRpb25zLFxuICAgICAgICBzaGlwMSxcbiAgICAgICAgc2hpcDIsXG4gICAgICAgIHNoaXAzLFxuICAgICAgICBzaGlwNCxcbiAgICAgICAgc2hpcExpc3QsXG4gICAgICAgIHJlY2VpdmVBdHRhY2s6IChhdHRhY2spID0+IHtcbiAgICAgICAgICAgIGxldCBmbGFnID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNoaXBMaXN0W2ldLnBvc2l0aW9uLmluY2x1ZGVzKGF0dGFjaykpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcExpc3RbaV0uaGl0KGF0dGFjayk7XG4gICAgICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIWZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pc3NlZEF0dGFja3MuaW5jbHVkZXMoYXR0YWNrKSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgbWlzc2VkQXR0YWNrcy5wdXNoKGF0dGFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjaGVja0lmU3VuazogKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHN1bmtTaGlwcyA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNoaXBMaXN0W2ldLmlzU3VuayhzaGlwTGlzdFtpXS5oaXRQb3NpdGlvbnMsIHNoaXBMaXN0W2ldLnBvc2l0aW9uKSkgc3Vua1NoaXBzKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3Vua1NoaXBzID09PSA0KSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBcbiAgICB9O1xufTtcblxuZXhwb3J0IHsgR2FtZWJvYXJkIH07IiwiZnVuY3Rpb24gUGxheWVyKG5hbWUpIHtcbiAgICBsZXQgYXR0YWNrTGlzdCA9IFtdO1xuICAgIGxldCBhZGRBdHRhY2sgPSAoY3VycmVudEF0dGFjaykgPT4ge1xuICAgICAgICBhdHRhY2tMaXN0LnB1c2goY3VycmVudEF0dGFjayk7XG4gICAgfVxuICAgIGxldCBhdHRhY2s7XG4gICAgcmV0dXJuIHsgbmFtZSwgYXR0YWNrLCBhZGRBdHRhY2ssIGF0dGFja0xpc3QgfTtcbn1cblxuZXhwb3J0IHsgUGxheWVyIH07IiwiZnVuY3Rpb24gU2hpcChwb3NpdGlvbikge1xuICAgIGNvbnN0IGxlbmd0aCA9IHBvc2l0aW9uLmxlbmd0aDtcbiAgICBjb25zdCBoaXRQb3NpdGlvbnMgPSBbXTtcbiAgICBjb25zdCBoaXQgPSAobnVtKSA9PiB7XG4gICAgICAgIGhpdFBvc2l0aW9ucy5wdXNoKG51bSk7XG4gICAgfVxuICAgIGNvbnN0IGlzU3VuayA9IChwb3NpdGlvblRlc3QsIGhpdFBvc2l0aW9uc1Rlc3QpID0+IHtcbiAgICAgICAgaWYgKGhpdFBvc2l0aW9uc1Rlc3QubGVuZ3RoID09PSBwb3NpdGlvblRlc3QubGVuZ3RoICYmIHBvc2l0aW9uVGVzdCkgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiB7IGxlbmd0aCwgcG9zaXRpb24sIGhpdFBvc2l0aW9ucywgaGl0LCBpc1N1bmsgfTtcbn1cblxuZXhwb3J0IHsgU2hpcCB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHBpY2tTcGFjZSB9IGZyb20gJy4vRE9NJztcblxucGlja1NwYWNlKCk7XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9