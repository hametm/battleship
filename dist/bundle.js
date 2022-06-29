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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    display: flex;\n    justify-content: center;\n    min-height: 100vh;\n}\n\n#display {\n    display: flex;\n    gap: 20px;\n    align-content: center;\n    justify-content: space-evenly;\n    width: 95%;\n}\n\n.board {\n    display: grid;\n    grid-template-columns: repeat(10, 50px);\n    grid-template-rows: repeat(10, 50px);\n    margin: 0;\n    place-content: center;\n}\n\n.numberContainer {\n    display: flex;\n    align-items: flex-start;\n}\n\n.letterHeader {\n    display: flex;\n}\n\n.numberHeader {\n\n}\n\n.letterSpace, .numberSpace {\n    height: 50px;\n    width: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.taken {\n    color: white;\n}\n\n.taken1 {\n    background-color: rgb(222, 160, 171);\n}\n\n.taken2 {\n    background-color: rgb(59, 180, 137);\n}\n\n.taken3 {\n    background-color: rgb(80, 117, 204);\n}\n\n.taken4 {\n    background-color: rgb(232, 179, 20);\n}\n\n.space {\n    border: 1px solid grey;\n    display: grid;\n    place-items: center;\n}\n\n.hit {\n    background-color: red;\n}\n\n.missed {\n    background-color: rgb(224, 224, 224);\n}\n\n.dot {\n    height: 3px;\n    width: 3px;\n    background-color: black;\n    border-radius: 50%;\n}\n\n.space.computer:hover {\n    background-color: rgb(197, 197, 215);\n    cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,wEAAwE;IACxE,aAAa;IACb,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,qBAAqB;IACrB,6BAA6B;IAC7B,UAAU;AACd;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,oCAAoC;IACpC,SAAS;IACT,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;AACjB;;AAEA;;AAEA;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,WAAW;IACX,UAAU;IACV,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,oCAAoC;IACpC,eAAe;AACnB","sourcesContent":["body {\n    margin: 0;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    display: flex;\n    justify-content: center;\n    min-height: 100vh;\n}\n\n#display {\n    display: flex;\n    gap: 20px;\n    align-content: center;\n    justify-content: space-evenly;\n    width: 95%;\n}\n\n.board {\n    display: grid;\n    grid-template-columns: repeat(10, 50px);\n    grid-template-rows: repeat(10, 50px);\n    margin: 0;\n    place-content: center;\n}\n\n.numberContainer {\n    display: flex;\n    align-items: flex-start;\n}\n\n.letterHeader {\n    display: flex;\n}\n\n.numberHeader {\n\n}\n\n.letterSpace, .numberSpace {\n    height: 50px;\n    width: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.taken {\n    color: white;\n}\n\n.taken1 {\n    background-color: rgb(222, 160, 171);\n}\n\n.taken2 {\n    background-color: rgb(59, 180, 137);\n}\n\n.taken3 {\n    background-color: rgb(80, 117, 204);\n}\n\n.taken4 {\n    background-color: rgb(232, 179, 20);\n}\n\n.space {\n    border: 1px solid grey;\n    display: grid;\n    place-items: center;\n}\n\n.hit {\n    background-color: red;\n}\n\n.missed {\n    background-color: rgb(224, 224, 224);\n}\n\n.dot {\n    height: 3px;\n    width: 3px;\n    background-color: black;\n    border-radius: 50%;\n}\n\n.space.computer:hover {\n    background-color: rgb(197, 197, 215);\n    cursor: pointer;\n}"],"sourceRoot":""}]);
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
    const name = document.createElement("h1");
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
    boardContainer.appendChild(name);


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
            const dot = document.createElement("div");
            dot.classList.add("dot");
            space.appendChild(dot);
        }
    })
}

function announceWinner(gameboard) {
    if (gameboard.checkIfSunk()) {
        const display = document.getElementById("display");
        const announcement = document.createElement("h1");
        announcement.textContent = `${gameboard.player.name} loses`;
        display.appendChild(announcement);
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
    const positions = [];
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
            positions.push(position);
            getRows(position, i);
            getColumns(position, j);
        }
    }

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
        let length = Math.floor(Math.random() * 4 + 1);
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
            // flag = false;
        },
        checkIfSunk: () => {
            let sunkShips  = 0;
            for (let i = 0; i < shipList.length; i++) {
                if (shipList[i].isSunk()) sunkShips ++;
            }
            if (sunkShips === 5) return true;
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
    const isSunk = () => {
        if (hitPositions.length === length) return true;
    }
    return { length, position, hitPositions, hit, isSunk };
}



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2E7O0FBRWxDLCtDQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI2Rpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHdpZHRoOiA5NSU7XFxufVxcblxcbi5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA1MHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDUwcHgpO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm51bWJlckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ubGV0dGVySGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm51bWJlckhlYWRlciB7XFxuXFxufVxcblxcbi5sZXR0ZXJTcGFjZSwgLm51bWJlclNwYWNlIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YWtlbiB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRha2VuMSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjIsIDE2MCwgMTcxKTtcXG59XFxuXFxuLnRha2VuMiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1OSwgMTgwLCAxMzcpO1xcbn1cXG5cXG4udGFrZW4zIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgwLCAxMTcsIDIwNCk7XFxufVxcblxcbi50YWtlbjQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMyLCAxNzksIDIwKTtcXG59XFxuXFxuLnNwYWNlIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLm1pc3NlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjQsIDIyNCwgMjI0KTtcXG59XFxuXFxuLmRvdCB7XFxuICAgIGhlaWdodDogM3B4O1xcbiAgICB3aWR0aDogM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uc3BhY2UuY29tcHV0ZXI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk3LCAxOTcsIDIxNSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCx3RUFBd0U7SUFDeEUsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxvQ0FBb0M7SUFDcEMsU0FBUztJQUNULHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBOztBQUVBOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jZGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgd2lkdGg6IDk1JTtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDUwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNTBweCk7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubnVtYmVyQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5sZXR0ZXJIZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubnVtYmVySGVhZGVyIHtcXG5cXG59XFxuXFxuLmxldHRlclNwYWNlLCAubnVtYmVyU3BhY2Uge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRha2VuIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGFrZW4xIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMiwgMTYwLCAxNzEpO1xcbn1cXG5cXG4udGFrZW4yIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU5LCAxODAsIDEzNyk7XFxufVxcblxcbi50YWtlbjMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODAsIDExNywgMjA0KTtcXG59XFxuXFxuLnRha2VuNCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzIsIDE3OSwgMjApO1xcbn1cXG5cXG4uc3BhY2Uge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ubWlzc2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCwgMjI0LCAyMjQpO1xcbn1cXG5cXG4uZG90IHtcXG4gICAgaGVpZ2h0OiAzcHg7XFxuICAgIHdpZHRoOiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5zcGFjZS5jb21wdXRlcjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTcsIDE5NywgMjE1KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgeyBwbGF5Um91bmQgfSBmcm9tIFwiLi9nYW1lXCI7XG5cbmNvbnN0IHBsYXllcjEgPSBQbGF5ZXIoXCJ5b3VcIik7XG5jb25zdCBwbGF5ZXIyID0gUGxheWVyKFwiY29tcHV0ZXJcIik7XG5jb25zdCBwbGF5ZXIxQm9hcmQgPSBHYW1lYm9hcmQocGxheWVyMSk7XG5jb25zdCBwbGF5ZXIyQm9hcmQgPSBHYW1lYm9hcmQocGxheWVyMik7XG5kaXNwbGF5Qm9hcmQocGxheWVyMUJvYXJkKTtcbmRpc3BsYXlCb2FyZChwbGF5ZXIyQm9hcmQpO1xuaGlkZUdhbWVib2FyZChwbGF5ZXIyQm9hcmQpO1xuXG5mdW5jdGlvbiBkaXNwbGF5Qm9hcmQoZ2FtZWJvYXJkKSB7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBuYW1lLnRleHRDb250ZW50ID0gYCR7Z2FtZWJvYXJkLnBsYXllci5uYW1lfWA7XG4gICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzcGxheVwiKTtcblxuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbnVtYmVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBudW1iZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm51bWJlckNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBsZXR0ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldHRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibGV0dGVyQ29udGFpbmVyXCIpO1xuICAgIGJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJib2FyZENvbnRhaW5lclwiKTtcbiAgICBib2FyZC5jbGFzc0xpc3QuYWRkKFwiYm9hcmRcIik7XG5cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZWJvYXJkLnBvc2l0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBzcGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNwYWNlLmNsYXNzTGlzdC5hZGQoXCJzcGFjZVwiKTtcbiAgICAgICAgc3BhY2UuY2xhc3NMaXN0LmFkZChgJHtnYW1lYm9hcmQucGxheWVyLm5hbWV9YCk7XG4gICAgICAgIHNwYWNlLmRhdGFzZXQuaWQgPSBgJHtnYW1lYm9hcmQucG9zaXRpb25zW2ldfWA7XG4gICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHNwYWNlKTtcbiAgICAgICAgZGlzcGxheS5hcHBlbmRDaGlsZChib2FyZENvbnRhaW5lcik7XG4gICAgICAgIGlmIChnYW1lYm9hcmQuc2hpcDEucG9zaXRpb24uaW5jbHVkZXMoc3BhY2UuZGF0YXNldC5pZCkpIHtcbiAgICAgICAgICAgIHNwYWNlLmNsYXNzTGlzdC5hZGQoXCJ0YWtlblwiLCBcInRha2VuMVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2FtZWJvYXJkLnNoaXAyLnBvc2l0aW9uLmluY2x1ZGVzKHNwYWNlLmRhdGFzZXQuaWQpKSB7XG4gICAgICAgICAgICBzcGFjZS5jbGFzc0xpc3QuYWRkKFwidGFrZW5cIixcInRha2VuMlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2FtZWJvYXJkLnNoaXAzLnBvc2l0aW9uLmluY2x1ZGVzKHNwYWNlLmRhdGFzZXQuaWQpKSB7XG4gICAgICAgICAgICBzcGFjZS5jbGFzc0xpc3QuYWRkKFwidGFrZW5cIixcInRha2VuM1wiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2FtZWJvYXJkLnNoaXA0LnBvc2l0aW9uLmluY2x1ZGVzKHNwYWNlLmRhdGFzZXQuaWQpKSB7XG4gICAgICAgICAgICBzcGFjZS5jbGFzc0xpc3QuYWRkKFwidGFrZW5cIixcInRha2VuNFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXR0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobnVtYmVyQ29udGFpbmVyKVxuICAgIGJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGxldHRlckNvbnRhaW5lcik7XG5cbiAgICBjcmVhdGVMZXR0ZXJSb3cobGV0dGVyQ29udGFpbmVyLCBib2FyZENvbnRhaW5lcik7XG4gICAgY3JlYXRlTnVtYmVyQ29sdW1uKG51bWJlckNvbnRhaW5lciwgbGV0dGVyQ29udGFpbmVyKTtcblxuICAgIG51bWJlckNvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZSk7XG5cblxufVxuXG5mdW5jdGlvbiBjcmVhdGVMZXR0ZXJSb3coY29udGFpbmVyMSwgY29udGFpbmVyMikge1xuICAgIGNvbnN0IGxldHRlcnMgPSBbXCJcIiwgXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIsIFwiRVwiLCBcIkZcIiwgXCJHXCIsIFwiSFwiLCBcIklcIiwgXCJKXCJdO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmRDb250YWluZXJcIik7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNwbGF5XCIpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwibGV0dGVySGVhZGVyXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGV0dGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBsZXR0ZXJTcGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxldHRlclNwYWNlLnRleHRDb250ZW50ID0gbGV0dGVyc1tpXTtcbiAgICAgICAgbGV0dGVyU3BhY2UuY2xhc3NMaXN0LmFkZChcImxldHRlclNwYWNlXCIpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobGV0dGVyU3BhY2UpO1xuICAgIH1cbiAgICBjb250YWluZXIxLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29udGFpbmVyMi5hcHBlbmRDaGlsZChjb250YWluZXIxKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTnVtYmVyQ29sdW1uKGNvbnRhaW5lcjEsIGNvbnRhaW5lcjIpIHtcbiAgICBjb25zdCBudW1iZXJzID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwXTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwibnVtYmVySGVhZGVyXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBudW1iZXJTcGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG51bWJlclNwYWNlLnRleHRDb250ZW50ID0gbnVtYmVyc1tpXTtcbiAgICAgICAgbnVtYmVyU3BhY2UuY2xhc3NMaXN0LmFkZChcIm51bWJlclNwYWNlXCIpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobnVtYmVyU3BhY2UpO1xuICAgIH1cbiAgICBjb250YWluZXIxLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29udGFpbmVyMi5hcHBlbmRDaGlsZChjb250YWluZXIxKTtcbn1cblxuZnVuY3Rpb24gaGlkZUdhbWVib2FyZChnYW1lYm9hcmQpIHtcbiAgICBjb25zdCBzcGFjZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRha2VuXCIpO1xuICAgIHNwYWNlcy5mb3JFYWNoKHNwYWNlID0+IHtcbiAgICAgICAgaWYgKHNwYWNlLmNsYXNzTGlzdC5jb250YWlucyhgJHtnYW1lYm9hcmQucGxheWVyLm5hbWV9YCkpIHtcbiAgICAgICAgICAgIHNwYWNlLmNsYXNzTGlzdC5yZW1vdmUoXCJ0YWtlbjFcIiwgXCJ0YWtlbjJcIiwgXCJ0YWtlbjNcIiwgXCJ0YWtlbjRcIik7XG4gICAgICAgIH1cbiAgICB9KVxuXG59XG5cbmZ1bmN0aW9uIHBpY2tTcGFjZSgpIHtcbiAgICBjb25zdCBjb21wdXRlclNwYWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29tcHV0ZXJcIik7XG4gICAgY29tcHV0ZXJTcGFjZXMuZm9yRWFjaChzcGFjZSA9PiB7XG4gICAgICAgIHNwYWNlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBwbGF5ZXIxLmF0dGFjayA9IHNwYWNlLmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICBnZXRDb21wdXRlckF0dGFjayhwbGF5ZXIyLCBwbGF5ZXIxQm9hcmQpO1xuICAgICAgICAgICAgcGxheVJvdW5kKHBsYXllcjEsIHBsYXllcjIsIHBsYXllcjFCb2FyZCwgcGxheWVyMkJvYXJkKTtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGdldENvbXB1dGVyQXR0YWNrKHBsYXllciwgZ2FtZWJvYXJkKSB7XG4gICAgbGV0IGN1cnJlbnRNb3ZlID0gZ2FtZWJvYXJkLnBvc2l0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoZ2FtZWJvYXJkLnBvc2l0aW9ucy5sZW5ndGggLSAxKSldO1xuICAgIHdoaWxlIChwbGF5ZXIuYXR0YWNrTGlzdC5pbmNsdWRlcyhjdXJyZW50TW92ZSkpIHtcbiAgICAgICAgY3VycmVudE1vdmUgPSBnYW1lYm9hcmQucG9zaXRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChnYW1lYm9hcmQucG9zaXRpb25zLmxlbmd0aCAtIDEpKV07XG4gICAgfVxuICAgIHBsYXllci5hdHRhY2tMaXN0LnB1c2goY3VycmVudE1vdmUpO1xuICAgIHBsYXllci5hdHRhY2sgPSBjdXJyZW50TW92ZTtcbn1cblxuZnVuY3Rpb24gbWFya0F0dGFjayhvcHBvbmVudCwgYXR0YWNrLCBnYW1lYm9hcmQpIHtcbiAgICBjb25zdCBvcHBvbmVudFNwYWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke29wcG9uZW50Lm5hbWV9YCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lYm9hcmQuc2hpcExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgb3Bwb25lbnRTcGFjZXMuZm9yRWFjaChzcGFjZSA9PiB7XG4gICAgICAgICAgICBpZiAoZ2FtZWJvYXJkLnNoaXBMaXN0W2ldLmhpdFBvc2l0aW9ucy5pbmNsdWRlcyhzcGFjZS5kYXRhc2V0LmlkKSkge1xuICAgICAgICAgICAgICAgIHNwYWNlLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICAgICAgICB9IFxuICAgICAgICB9KVxuICAgIH1cbiAgICBvcHBvbmVudFNwYWNlcy5mb3JFYWNoKHNwYWNlID0+IHtcbiAgICAgICAgaWYgKHNwYWNlLmRhdGFzZXQuaWQgPT09IGF0dGFjayAmJiAhKHNwYWNlLmNsYXNzTGlzdC5jb250YWlucyhcImhpdFwiKSkpIHtcbiAgICAgICAgICAgIHNwYWNlLmNsYXNzTGlzdC5hZGQoXCJtaXNzZWRcIik7XG4gICAgICAgICAgICBjb25zdCBkb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgZG90LmNsYXNzTGlzdC5hZGQoXCJkb3RcIik7XG4gICAgICAgICAgICBzcGFjZS5hcHBlbmRDaGlsZChkb3QpO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gYW5ub3VuY2VXaW5uZXIoZ2FtZWJvYXJkKSB7XG4gICAgaWYgKGdhbWVib2FyZC5jaGVja0lmU3VuaygpKSB7XG4gICAgICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc3BsYXlcIik7XG4gICAgICAgIGNvbnN0IGFubm91bmNlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgYW5ub3VuY2VtZW50LnRleHRDb250ZW50ID0gYCR7Z2FtZWJvYXJkLnBsYXllci5uYW1lfSBsb3Nlc2A7XG4gICAgICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQoYW5ub3VuY2VtZW50KTtcbiAgICB9XG59XG5cblxuXG5leHBvcnQgeyBkaXNwbGF5Qm9hcmQsIGhpZGVHYW1lYm9hcmQsIHBpY2tTcGFjZSwgbWFya0F0dGFjaywgYW5ub3VuY2VXaW5uZXIgfTsiLCJcbmltcG9ydCB7IG1hcmtBdHRhY2ssIGFubm91bmNlV2lubmVyIH0gZnJvbSAnLi9ET00nO1xuXG5mdW5jdGlvbiBwbGF5Um91bmQocGxheWVyMSwgcGxheWVyMiwgcGxheWVyMUJvYXJkLCBwbGF5ZXIyQm9hcmQpIHtcblxuICAgIGxldCBwbGF5ZXIxQXR0YWNrID0gcGxheWVyMS5hdHRhY2s7XG4gICAgbGV0IHBsYXllcjJBdHRhY2sgPSBwbGF5ZXIyLmF0dGFjaztcblxuICAgIHBsYXllcjEuYWRkQXR0YWNrKHBsYXllcjFBdHRhY2spO1xuICAgIHBsYXllcjIuYWRkQXR0YWNrKHBsYXllcjJBdHRhY2spO1xuXG4gICAgcGxheWVyMkJvYXJkLnJlY2VpdmVBdHRhY2socGxheWVyMUF0dGFjayk7XG4gICAgcGxheWVyMUJvYXJkLnJlY2VpdmVBdHRhY2socGxheWVyMkF0dGFjayk7XG5cbiAgICBtYXJrQXR0YWNrKHBsYXllcjIsIHBsYXllcjFBdHRhY2ssIHBsYXllcjJCb2FyZCk7XG4gICAgbWFya0F0dGFjayhwbGF5ZXIxLCBwbGF5ZXIyQXR0YWNrLCBwbGF5ZXIxQm9hcmQpO1xuXG4gICAgcGxheWVyMUJvYXJkLmNoZWNrSWZTdW5rKCk7XG4gICAgcGxheWVyMkJvYXJkLmNoZWNrSWZTdW5rKCk7XG5cbiAgICBhbm5vdW5jZVdpbm5lcihwbGF5ZXIxQm9hcmQpO1xuICAgIGFubm91bmNlV2lubmVyKHBsYXllcjJCb2FyZCk7XG59XG5cbmV4cG9ydCB7IHBsYXlSb3VuZCB9O1xuXG4iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuXG5mdW5jdGlvbiBHYW1lYm9hcmQgKHBsYXllcikge1xuICAgIGNvbnN0IGxldHRlcnMgPSBbXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIsIFwiRVwiLCBcIkZcIiwgXCJHXCIsIFwiSFwiLCBcIklcIiwgXCJKXCJdXG4gICAgY29uc3QgbnVtYmVycyA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMF07XG4gICAgbGV0IGJ5TGV0dGVyID0gW1tdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdXTtcbiAgICBsZXQgYnlOdW1iZXIgPSBbW10sW10sW10sW10sW10sW10sW10sW10sW10sW11dO1xuICAgIGNvbnN0IHBvc2l0aW9ucyA9IFtdO1xuICAgIGNvbnN0IHNoaXAxID0gU2hpcChbXSk7XG4gICAgY29uc3Qgc2hpcDIgPSBTaGlwKFtdKTtcbiAgICBjb25zdCBzaGlwMyA9IFNoaXAoW10pO1xuICAgIGNvbnN0IHNoaXA0ID0gU2hpcChbXSk7XG4gICAgY29uc3Qgc2hpcExpc3QgPSBbc2hpcDEsIHNoaXAyLCBzaGlwMywgc2hpcDRdO1xuICAgIGNvbnN0IG1pc3NlZEF0dGFja3MgPSBbXTtcblxuICAgIC8vIFNldCB1cCBwb3NpdGlvbnNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxldHRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBudW1iZXJzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBsZXQgcG9zaXRpb24gPSBsZXR0ZXJzW2ldICsgbnVtYmVyc1tqXTtcbiAgICAgICAgICAgIHBvc2l0aW9ucy5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgICAgIGdldFJvd3MocG9zaXRpb24sIGkpO1xuICAgICAgICAgICAgZ2V0Q29sdW1ucyhwb3NpdGlvbiwgaik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRSb3dzKHBvc2l0aW9uLCBpKSB7XG4gICAgICAgIGlmIChsZXR0ZXJzW2ldID09PSBcIkFcIikgYnlMZXR0ZXJbMF0ucHVzaChwb3NpdGlvbik7XG4gICAgICAgIGlmIChsZXR0ZXJzW2ldID09PSBcIkJcIikgYnlMZXR0ZXJbMV0ucHVzaChwb3NpdGlvbik7XG4gICAgICAgIGlmIChsZXR0ZXJzW2ldID09PSBcIkNcIikgYnlMZXR0ZXJbMl0ucHVzaChwb3NpdGlvbik7XG4gICAgICAgIGlmIChsZXR0ZXJzW2ldID09PSBcIkRcIikgYnlMZXR0ZXJbM10ucHVzaChwb3NpdGlvbik7XG4gICAgICAgIGlmIChsZXR0ZXJzW2ldID09PSBcIkVcIikgYnlMZXR0ZXJbNF0ucHVzaChwb3NpdGlvbik7XG4gICAgICAgIGlmIChsZXR0ZXJzW2ldID09PSBcIkZcIikgYnlMZXR0ZXJbNV0ucHVzaChwb3NpdGlvbik7XG4gICAgICAgIGlmIChsZXR0ZXJzW2ldID09PSBcIkdcIikgYnlMZXR0ZXJbNl0ucHVzaChwb3NpdGlvbik7XG4gICAgICAgIGlmIChsZXR0ZXJzW2ldID09PSBcIkhcIikgYnlMZXR0ZXJbN10ucHVzaChwb3NpdGlvbik7XG4gICAgICAgIGlmIChsZXR0ZXJzW2ldID09PSBcIklcIikgYnlMZXR0ZXJbOF0ucHVzaChwb3NpdGlvbik7XG4gICAgICAgIGlmIChsZXR0ZXJzW2ldID09PSBcIkpcIikgYnlMZXR0ZXJbOV0ucHVzaChwb3NpdGlvbik7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGdldENvbHVtbnMocG9zaXRpb24sIGopIHtcbiAgICAgICAgaWYgKG51bWJlcnNbal0gPT09IDEpIGJ5TnVtYmVyWzBdLnB1c2gocG9zaXRpb24pO1xuICAgICAgICBpZiAobnVtYmVyc1tqXSA9PT0gMikgYnlOdW1iZXJbMV0ucHVzaChwb3NpdGlvbik7XG4gICAgICAgIGlmIChudW1iZXJzW2pdID09PSAzKSBieU51bWJlclsyXS5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgaWYgKG51bWJlcnNbal0gPT09IDQpIGJ5TnVtYmVyWzNdLnB1c2gocG9zaXRpb24pO1xuICAgICAgICBpZiAobnVtYmVyc1tqXSA9PT0gNSkgYnlOdW1iZXJbNF0ucHVzaChwb3NpdGlvbik7XG4gICAgICAgIGlmIChudW1iZXJzW2pdID09PSA2KSBieU51bWJlcls1XS5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgaWYgKG51bWJlcnNbal0gPT09IDcpIGJ5TnVtYmVyWzZdLnB1c2gocG9zaXRpb24pO1xuICAgICAgICBpZiAobnVtYmVyc1tqXSA9PT0gOCkgYnlOdW1iZXJbN10ucHVzaChwb3NpdGlvbik7XG4gICAgICAgIGlmIChudW1iZXJzW2pdID09PSA5KSBieU51bWJlcls4XS5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgaWYgKG51bWJlcnNbal0gPT09IDEwKSBieU51bWJlcls5XS5wdXNoKHBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBjb25zdCBwaWNrUG9zaXRpb25zID0gKHNoaXApID0+IHtcbiAgICAgICAgbGV0IHNoaXBQb3NpdGlvbnMgPSBbXTtcbiAgICAgICAgbGV0IGxlbmd0aCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQgKyAxKTtcbiAgICAgICAgbGV0IHN0YXJ0UG9zaXRpb247XG4gICAgICAgIGxldCBvdXRlckxldHRlckluZGV4O1xuICAgICAgICBsZXQgaW5uZXJMZXR0ZXJJbmRleDtcbiAgICAgICAgbGV0IG91dGVyTnVtYmVySW5kZXg7XG4gICAgICAgIGxldCBpbm5lck51bWJlckluZGV4O1xuICAgICAgICBsZXQgZGlyZWN0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMiArIDEpO1xuXG4gICAgICAgIGdldFN0YXJ0UG9zaXRpb24oKTtcblxuXG4gICAgICAgIGZ1bmN0aW9uIGdldFN0YXJ0UG9zaXRpb24oKSB7XG4gICAgICAgICAgICBzdGFydFBvc2l0aW9uID0gcG9zaXRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChwb3NpdGlvbnMubGVuZ3RoIC0gMSkpXTsgLy8gQWRkIDEgYXQgdGhlIGVuZD9cbiAgICAgICAgICAgIHdoaWxlIChjaGVja0lmVGFrZW4oc3RhcnRQb3NpdGlvbikpIHtcbiAgICAgICAgICAgICAgICBzdGFydFBvc2l0aW9uID0gcG9zaXRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChwb3NpdGlvbnMubGVuZ3RoIC0gMSkpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY2hlY2tJZlRha2VuKHBvc2l0aW9uQ2hlY2spIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoc2hpcExpc3RbaV0ucG9zaXRpb24uaW5jbHVkZXMocG9zaXRpb25DaGVjaykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gR2V0IGxldHRlciBpbmRpY2VzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnlMZXR0ZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYnlMZXR0ZXJbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYnlMZXR0ZXJbaV1bal0gPT09IHN0YXJ0UG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0ZXJMZXR0ZXJJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGlubmVyTGV0dGVySW5kZXggPSBqO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgIFxuXG4gICAgICAgIC8vIEdldCBudW1iZXIgaW5kaWNlc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ5TnVtYmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJ5TnVtYmVyW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJ5TnVtYmVyW2ldW2pdID09PSBzdGFydFBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIG91dGVyTnVtYmVySW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICBpbm5lck51bWJlckluZGV4ID0gajtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICBcblxuICAgICAgICAvLyBTaGlwIGlmIGhvcml6b250YWxcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gMSkge1xuICAgICAgICAgICAgbGV0IGlubmVySW5kZXggPSBpbm5lckxldHRlckluZGV4O1xuICAgICAgICAgICAgbGV0IG91dGVySW5kZXggPSBvdXRlckxldHRlckluZGV4O1xuICAgICAgICAgICAgc2hpcFBvc2l0aW9ucy5wdXNoKHN0YXJ0UG9zaXRpb24pO1xuICAgICAgICAgICAgaWYgKChpbm5lckxldHRlckluZGV4ICsgKGxlbmd0aCkpID4gMTApIHtcbiAgICAgICAgICAgICAgICBsZW5ndGggPSAxMCAtIGlubmVyTGV0dGVySW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IGJ5TGV0dGVyW291dGVySW5kZXhdW2lubmVySW5kZXggKyAxXTtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tJZlRha2VuKHBvc2l0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2hpcFBvc2l0aW9ucy5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBpbm5lckluZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaGlwLnBvc2l0aW9uID0gc2hpcFBvc2l0aW9ucztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNoaXAgaWYgdmVydGljYWxcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gMikge1xuICAgICAgICAgICAgbGV0IGlubmVySW5kZXggPSBpbm5lck51bWJlckluZGV4O1xuICAgICAgICAgICAgbGV0IG91dGVySW5kZXggPSBvdXRlck51bWJlckluZGV4O1xuICAgICAgICAgICAgc2hpcFBvc2l0aW9ucy5wdXNoKHN0YXJ0UG9zaXRpb24pO1xuICAgICAgICAgICAgaWYgKChpbm5lck51bWJlckluZGV4ICsgKGxlbmd0aCkpID4gMTApIHtcbiAgICAgICAgICAgICAgICBsZW5ndGggPSAxMCAtIGlubmVyTnVtYmVySW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IGJ5TnVtYmVyW291dGVySW5kZXhdW2lubmVySW5kZXggKyAxXTtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tJZlRha2VuKHBvc2l0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2hpcFBvc2l0aW9ucy5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBpbm5lckluZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaGlwLnBvc2l0aW9uID0gc2hpcFBvc2l0aW9ucztcbiAgICAgICAgfVxuICAgIH0gLy8gRW5kIG9mIHBpY2sgcG9zaXRpb25zXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBpY2tQb3NpdGlvbnMoc2hpcExpc3RbaV0pO1xuICAgIH1cblxuXG4gICAgcmV0dXJuIHsgXG4gICAgICAgIHBsYXllcixcbiAgICAgICAgbWlzc2VkQXR0YWNrcyxcbiAgICAgICAgcG9zaXRpb25zLFxuICAgICAgICBzaGlwMSxcbiAgICAgICAgc2hpcDIsXG4gICAgICAgIHNoaXAzLFxuICAgICAgICBzaGlwNCxcbiAgICAgICAgc2hpcExpc3QsXG4gICAgICAgIHJlY2VpdmVBdHRhY2s6IChhdHRhY2spID0+IHtcbiAgICAgICAgICAgIGxldCBmbGFnID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNoaXBMaXN0W2ldLnBvc2l0aW9uLmluY2x1ZGVzKGF0dGFjaykpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcExpc3RbaV0uaGl0KGF0dGFjayk7XG4gICAgICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIWZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pc3NlZEF0dGFja3MuaW5jbHVkZXMoYXR0YWNrKSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgbWlzc2VkQXR0YWNrcy5wdXNoKGF0dGFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZmxhZyA9IGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICBjaGVja0lmU3VuazogKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHN1bmtTaGlwcyAgPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChzaGlwTGlzdFtpXS5pc1N1bmsoKSkgc3Vua1NoaXBzICsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN1bmtTaGlwcyA9PT0gNSkgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gXG4gICAgfTtcbn07XG5cbmV4cG9ydCB7IEdhbWVib2FyZCB9OyIsImZ1bmN0aW9uIFBsYXllcihuYW1lKSB7XG4gICAgbGV0IGF0dGFja0xpc3QgPSBbXTtcbiAgICBsZXQgYWRkQXR0YWNrID0gKGN1cnJlbnRBdHRhY2spID0+IHtcbiAgICAgICAgYXR0YWNrTGlzdC5wdXNoKGN1cnJlbnRBdHRhY2spO1xuICAgIH1cbiAgICBsZXQgYXR0YWNrO1xuICAgIHJldHVybiB7IG5hbWUsIGF0dGFjaywgYWRkQXR0YWNrLCBhdHRhY2tMaXN0IH07XG59XG5cbmV4cG9ydCB7IFBsYXllciB9OyIsImZ1bmN0aW9uIFNoaXAocG9zaXRpb24pIHtcbiAgICBjb25zdCBsZW5ndGggPSBwb3NpdGlvbi5sZW5ndGg7XG4gICAgY29uc3QgaGl0UG9zaXRpb25zID0gW107XG4gICAgY29uc3QgaGl0ID0gKG51bSkgPT4ge1xuICAgICAgICBoaXRQb3NpdGlvbnMucHVzaChudW0pO1xuICAgIH1cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIGlmIChoaXRQb3NpdGlvbnMubGVuZ3RoID09PSBsZW5ndGgpIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4geyBsZW5ndGgsIHBvc2l0aW9uLCBoaXRQb3NpdGlvbnMsIGhpdCwgaXNTdW5rIH07XG59XG5cbmV4cG9ydCB7IFNoaXAgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHBpY2tTcGFjZSB9IGZyb20gJy4vRE9NJztcblxucGlja1NwYWNlKCk7XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9