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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\n\n#canvas {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    justify-content: center;\n}\n\n.board {\n    display: grid;\n    grid-template-columns: repeat(10, 50px);\n    grid-template-rows: repeat(10, 50px);\n    margin: 20px;\n    place-content: center;\n}\n\n.taken {\n    color: white;\n}\n\n.taken1 {\n    background-color: rgb(222, 160, 171);\n}\n\n.taken2 {\n    background-color: rgb(59, 180, 137);\n}\n\n.taken3 {\n    background-color: rgb(80, 117, 204);\n}\n\n.taken4 {\n    background-color: rgb(232, 179, 20);\n}\n\n.space {\n    border: 1px solid grey;\n    display: grid;\n    place-items: center;\n}\n\n.missed {\n    background-color: rgb(224, 224, 224);\n}\n\n.dot {\n    height: 3px;\n    width: 3px;\n    background-color: black;\n    border-radius: 50%;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,wEAAwE;AAC5E;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,oCAAoC;IACpC,YAAY;IACZ,qBAAqB;AACzB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,WAAW;IACX,UAAU;IACV,uBAAuB;IACvB,kBAAkB;AACtB","sourcesContent":["body {\n    margin: 0;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\n\n#canvas {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    justify-content: center;\n}\n\n.board {\n    display: grid;\n    grid-template-columns: repeat(10, 50px);\n    grid-template-rows: repeat(10, 50px);\n    margin: 20px;\n    place-content: center;\n}\n\n.taken {\n    color: white;\n}\n\n.taken1 {\n    background-color: rgb(222, 160, 171);\n}\n\n.taken2 {\n    background-color: rgb(59, 180, 137);\n}\n\n.taken3 {\n    background-color: rgb(80, 117, 204);\n}\n\n.taken4 {\n    background-color: rgb(232, 179, 20);\n}\n\n.space {\n    border: 1px solid grey;\n    display: grid;\n    place-items: center;\n}\n\n.missed {\n    background-color: rgb(224, 224, 224);\n}\n\n.dot {\n    height: 3px;\n    width: 3px;\n    background-color: black;\n    border-radius: 50%;\n}"],"sourceRoot":""}]);
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



function displayBoard(gameboard) {
    const name = document.createElement("h1");
    name.textContent = `${gameboard.player.name}`;
    const canvas = document.getElementById("canvas");
    canvas.appendChild(name);
    const board = document.createElement("div");
    board.classList.add("board");
    for (let i = 0; i < gameboard.positions.length; i++) {
        const space = document.createElement("div");
        space.classList.add("space");
        space.classList.add(`${gameboard.player.name}`);
        space.dataset.id = `${gameboard.positions[i]}`;
        board.appendChild(space);
        canvas.appendChild(board);
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
}

function hideGameboard(gameboard) {
    const spaces = document.querySelectorAll(".taken");
    spaces.forEach(space => {
        if (space.classList.contains(`${gameboard.player.name}`)) {
            space.classList.remove("taken1", "taken2", "taken3", "taken4");
        }
    })

}

function pickSpace(opponent, attack) {
    const opponentSpaces = document.querySelectorAll(`.${opponent.name}`);
    opponentSpaces.forEach(space => {
        space.onclick = () => {
             attack = space.textContent;
        }
    })
}

function markAttack(opponent, attack, gameboard) {
    const opponentSpaces = document.querySelectorAll(`.${opponent.name}`);
    for (let i = 0; i < gameboard.shipList.length; i++) {
        // console.log("Hit positions: " + gameboard.shipList[i].hitPositions);
        opponentSpaces.forEach(space => {
            if (gameboard.shipList[i].hitPositions.includes(space.dataset.id)) {
                space.style.backgroundColor = "red";
            } else if (space.dataset.id === attack) {
                space.classList.add("missed");
                if (space.innerHTML === "") {
                    const dot = document.createElement("div");
                    dot.classList.add("dot");
                    space.appendChild(dot);
                }
            }
        })
    }
    // opponentSpaces.forEach(space => {
    //     if (space.textContent === attack) {
    //         space.classList.add("missed");
    //         const dot = document.createElement("div");
    //         dot.classList.add("dot");
    //         space.appendChild(dot);
    //     }
        
    // })
}

function announceWinner(gameboard) {
    if (gameboard.checkIfSunk()) {
        const canvas = document.getElementById("canvas");
        const announcement = document.createElement("h1");
        announcement.textContent = `${gameboard.player.name} loses`;
        canvas.appendChild(announcement);
    }
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
            // console.log(`${player.name} receive attack: ` + attack);
            let flag = false;
            for (let i = 0; i < shipList.length; i++) {
                if (shipList[i].position.includes(attack)) {
                    shipList[i].hit(attack);
                    // console.log("HIT");
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
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");


function Player(name) {
    let score = 0;
    let attackList = [];
    let addAttack = (currentAttack) => {
        attackList.push(currentAttack);
    }
    let attack = (Gameboard) => {
        let currentMove = Gameboard.positions[Math.floor(Math.random() * (Gameboard.positions.length - 1))];
        while (attackList.includes(currentMove)) {
            currentMove = Gameboard.positions[Math.floor(Math.random() * (Gameboard.positions.length - 1))];
        }
        attackList.push(currentMove);
        return currentMove;
    }

    return { name, score, attack, addAttack, attackList };
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
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ship */ "./src/ship.js");







const player1 = (0,_player__WEBPACK_IMPORTED_MODULE_1__.Player)("you");
const player2 = (0,_player__WEBPACK_IMPORTED_MODULE_1__.Player)("computer");
const button = document.querySelector("button");
const player1Board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_2__.Gameboard)(player1);
const player2Board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_2__.Gameboard)(player2);
(0,_DOM__WEBPACK_IMPORTED_MODULE_3__.displayBoard)(player1Board);
(0,_DOM__WEBPACK_IMPORTED_MODULE_3__.displayBoard)(player2Board);
(0,_DOM__WEBPACK_IMPORTED_MODULE_3__.hideGameboard)(player2Board);

button.onclick = () => {
    playRound();
}

function playRound() {
    let player1Attack = player1.attack(player2Board);
    player1.addAttack(player1Attack);
    let player2Attack = player2.attack(player1Board);
    player2.addAttack(player2Attack);

    player2Board.receiveAttack(player1Attack);
    player1Board.receiveAttack(player2Attack);

    (0,_DOM__WEBPACK_IMPORTED_MODULE_3__.markAttack)(player2, player1Attack, player2Board);
    (0,_DOM__WEBPACK_IMPORTED_MODULE_3__.markAttack)(player1, player2Attack, player1Board);

    player1Board.checkIfSunk();
    player2Board.checkIfSunk();

    (0,_DOM__WEBPACK_IMPORTED_MODULE_3__.announceWinner)(player1Board);
    (0,_DOM__WEBPACK_IMPORTED_MODULE_3__.announceWinner)(player2Board);
}




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2E7QUFDTTtBQUNtRDtBQUM3RDs7O0FBRzlCLGdCQUFnQiwrQ0FBTTtBQUN0QixnQkFBZ0IsK0NBQU07QUFDdEI7QUFDQSxxQkFBcUIscURBQVM7QUFDOUIscUJBQXFCLHFEQUFTO0FBQzlCLGtEQUFZO0FBQ1osa0RBQVk7QUFDWixtREFBYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLElBQUksZ0RBQVU7QUFDZCxJQUFJLGdEQUFVOztBQUVkO0FBQ0E7O0FBRUEsSUFBSSxvREFBYztBQUNsQixJQUFJLG9EQUFjO0FBQ2xCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NhbnZhcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA1MHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDUwcHgpO1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRha2VuIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGFrZW4xIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMiwgMTYwLCAxNzEpO1xcbn1cXG5cXG4udGFrZW4yIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU5LCAxODAsIDEzNyk7XFxufVxcblxcbi50YWtlbjMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODAsIDExNywgMjA0KTtcXG59XFxuXFxuLnRha2VuNCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzIsIDE3OSwgMjApO1xcbn1cXG5cXG4uc3BhY2Uge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWlzc2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCwgMjI0LCAyMjQpO1xcbn1cXG5cXG4uZG90IHtcXG4gICAgaGVpZ2h0OiAzcHg7XFxuICAgIHdpZHRoOiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1Qsd0VBQXdFO0FBQzVFOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjYW52YXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgNTBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA1MHB4KTtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50YWtlbiB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRha2VuMSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjIsIDE2MCwgMTcxKTtcXG59XFxuXFxuLnRha2VuMiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1OSwgMTgwLCAxMzcpO1xcbn1cXG5cXG4udGFrZW4zIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgwLCAxMTcsIDIwNCk7XFxufVxcblxcbi50YWtlbjQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMyLCAxNzksIDIwKTtcXG59XFxuXFxuLnNwYWNlIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1pc3NlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjQsIDIyNCwgMjI0KTtcXG59XFxuXFxuLmRvdCB7XFxuICAgIGhlaWdodDogM3B4O1xcbiAgICB3aWR0aDogM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5cbmZ1bmN0aW9uIGRpc3BsYXlCb2FyZChnYW1lYm9hcmQpIHtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSBgJHtnYW1lYm9hcmQucGxheWVyLm5hbWV9YDtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgICBjYW52YXMuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJvYXJkLmNsYXNzTGlzdC5hZGQoXCJib2FyZFwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVib2FyZC5wb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgc3BhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzcGFjZS5jbGFzc0xpc3QuYWRkKFwic3BhY2VcIik7XG4gICAgICAgIHNwYWNlLmNsYXNzTGlzdC5hZGQoYCR7Z2FtZWJvYXJkLnBsYXllci5uYW1lfWApO1xuICAgICAgICBzcGFjZS5kYXRhc2V0LmlkID0gYCR7Z2FtZWJvYXJkLnBvc2l0aW9uc1tpXX1gO1xuICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChzcGFjZSk7XG4gICAgICAgIGNhbnZhcy5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgICAgIGlmIChnYW1lYm9hcmQuc2hpcDEucG9zaXRpb24uaW5jbHVkZXMoc3BhY2UuZGF0YXNldC5pZCkpIHtcbiAgICAgICAgICAgIHNwYWNlLmNsYXNzTGlzdC5hZGQoXCJ0YWtlblwiLCBcInRha2VuMVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2FtZWJvYXJkLnNoaXAyLnBvc2l0aW9uLmluY2x1ZGVzKHNwYWNlLmRhdGFzZXQuaWQpKSB7XG4gICAgICAgICAgICBzcGFjZS5jbGFzc0xpc3QuYWRkKFwidGFrZW5cIixcInRha2VuMlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2FtZWJvYXJkLnNoaXAzLnBvc2l0aW9uLmluY2x1ZGVzKHNwYWNlLmRhdGFzZXQuaWQpKSB7XG4gICAgICAgICAgICBzcGFjZS5jbGFzc0xpc3QuYWRkKFwidGFrZW5cIixcInRha2VuM1wiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2FtZWJvYXJkLnNoaXA0LnBvc2l0aW9uLmluY2x1ZGVzKHNwYWNlLmRhdGFzZXQuaWQpKSB7XG4gICAgICAgICAgICBzcGFjZS5jbGFzc0xpc3QuYWRkKFwidGFrZW5cIixcInRha2VuNFwiKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gaGlkZUdhbWVib2FyZChnYW1lYm9hcmQpIHtcbiAgICBjb25zdCBzcGFjZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRha2VuXCIpO1xuICAgIHNwYWNlcy5mb3JFYWNoKHNwYWNlID0+IHtcbiAgICAgICAgaWYgKHNwYWNlLmNsYXNzTGlzdC5jb250YWlucyhgJHtnYW1lYm9hcmQucGxheWVyLm5hbWV9YCkpIHtcbiAgICAgICAgICAgIHNwYWNlLmNsYXNzTGlzdC5yZW1vdmUoXCJ0YWtlbjFcIiwgXCJ0YWtlbjJcIiwgXCJ0YWtlbjNcIiwgXCJ0YWtlbjRcIik7XG4gICAgICAgIH1cbiAgICB9KVxuXG59XG5cbmZ1bmN0aW9uIHBpY2tTcGFjZShvcHBvbmVudCwgYXR0YWNrKSB7XG4gICAgY29uc3Qgb3Bwb25lbnRTcGFjZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtvcHBvbmVudC5uYW1lfWApO1xuICAgIG9wcG9uZW50U3BhY2VzLmZvckVhY2goc3BhY2UgPT4ge1xuICAgICAgICBzcGFjZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgIGF0dGFjayA9IHNwYWNlLnRleHRDb250ZW50O1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gbWFya0F0dGFjayhvcHBvbmVudCwgYXR0YWNrLCBnYW1lYm9hcmQpIHtcbiAgICBjb25zdCBvcHBvbmVudFNwYWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke29wcG9uZW50Lm5hbWV9YCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lYm9hcmQuc2hpcExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJIaXQgcG9zaXRpb25zOiBcIiArIGdhbWVib2FyZC5zaGlwTGlzdFtpXS5oaXRQb3NpdGlvbnMpO1xuICAgICAgICBvcHBvbmVudFNwYWNlcy5mb3JFYWNoKHNwYWNlID0+IHtcbiAgICAgICAgICAgIGlmIChnYW1lYm9hcmQuc2hpcExpc3RbaV0uaGl0UG9zaXRpb25zLmluY2x1ZGVzKHNwYWNlLmRhdGFzZXQuaWQpKSB7XG4gICAgICAgICAgICAgICAgc3BhY2Uuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3BhY2UuZGF0YXNldC5pZCA9PT0gYXR0YWNrKSB7XG4gICAgICAgICAgICAgICAgc3BhY2UuY2xhc3NMaXN0LmFkZChcIm1pc3NlZFwiKTtcbiAgICAgICAgICAgICAgICBpZiAoc3BhY2UuaW5uZXJIVE1MID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgICAgIGRvdC5jbGFzc0xpc3QuYWRkKFwiZG90XCIpO1xuICAgICAgICAgICAgICAgICAgICBzcGFjZS5hcHBlbmRDaGlsZChkb3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgLy8gb3Bwb25lbnRTcGFjZXMuZm9yRWFjaChzcGFjZSA9PiB7XG4gICAgLy8gICAgIGlmIChzcGFjZS50ZXh0Q29udGVudCA9PT0gYXR0YWNrKSB7XG4gICAgLy8gICAgICAgICBzcGFjZS5jbGFzc0xpc3QuYWRkKFwibWlzc2VkXCIpO1xuICAgIC8vICAgICAgICAgY29uc3QgZG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAvLyAgICAgICAgIGRvdC5jbGFzc0xpc3QuYWRkKFwiZG90XCIpO1xuICAgIC8vICAgICAgICAgc3BhY2UuYXBwZW5kQ2hpbGQoZG90KTtcbiAgICAvLyAgICAgfVxuICAgICAgICBcbiAgICAvLyB9KVxufVxuXG5mdW5jdGlvbiBhbm5vdW5jZVdpbm5lcihnYW1lYm9hcmQpIHtcbiAgICBpZiAoZ2FtZWJvYXJkLmNoZWNrSWZTdW5rKCkpIHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gICAgICAgIGNvbnN0IGFubm91bmNlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgYW5ub3VuY2VtZW50LnRleHRDb250ZW50ID0gYCR7Z2FtZWJvYXJkLnBsYXllci5uYW1lfSBsb3Nlc2A7XG4gICAgICAgIGNhbnZhcy5hcHBlbmRDaGlsZChhbm5vdW5jZW1lbnQpO1xuICAgIH1cbn1cblxuXG5cbmV4cG9ydCB7IGRpc3BsYXlCb2FyZCwgaGlkZUdhbWVib2FyZCwgcGlja1NwYWNlLCBtYXJrQXR0YWNrLCBhbm5vdW5jZVdpbm5lciB9OyIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5cbmZ1bmN0aW9uIEdhbWVib2FyZCAocGxheWVyKSB7XG4gICAgY29uc3QgbGV0dGVycyA9IFtcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCIsIFwiSVwiLCBcIkpcIl1cbiAgICBjb25zdCBudW1iZXJzID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwXTtcbiAgICBsZXQgYnlMZXR0ZXIgPSBbW10sW10sW10sW10sW10sW10sW10sW10sW10sW11dO1xuICAgIGxldCBieU51bWJlciA9IFtbXSxbXSxbXSxbXSxbXSxbXSxbXSxbXSxbXSxbXV07XG4gICAgY29uc3QgcG9zaXRpb25zID0gW107XG4gICAgY29uc3Qgc2hpcDEgPSBTaGlwKFtdKTtcbiAgICBjb25zdCBzaGlwMiA9IFNoaXAoW10pO1xuICAgIGNvbnN0IHNoaXAzID0gU2hpcChbXSk7XG4gICAgY29uc3Qgc2hpcDQgPSBTaGlwKFtdKTtcbiAgICBjb25zdCBzaGlwTGlzdCA9IFtzaGlwMSwgc2hpcDIsIHNoaXAzLCBzaGlwNF07XG4gICAgY29uc3QgbWlzc2VkQXR0YWNrcyA9IFtdO1xuXG4gICAgLy8gU2V0IHVwIHBvc2l0aW9uc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGV0dGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG51bWJlcnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IGxldHRlcnNbaV0gKyBudW1iZXJzW2pdO1xuICAgICAgICAgICAgcG9zaXRpb25zLnB1c2gocG9zaXRpb24pO1xuICAgICAgICAgICAgZ2V0Um93cyhwb3NpdGlvbiwgaSk7XG4gICAgICAgICAgICBnZXRDb2x1bW5zKHBvc2l0aW9uLCBqKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFJvd3MocG9zaXRpb24sIGkpIHtcbiAgICAgICAgaWYgKGxldHRlcnNbaV0gPT09IFwiQVwiKSBieUxldHRlclswXS5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgaWYgKGxldHRlcnNbaV0gPT09IFwiQlwiKSBieUxldHRlclsxXS5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgaWYgKGxldHRlcnNbaV0gPT09IFwiQ1wiKSBieUxldHRlclsyXS5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgaWYgKGxldHRlcnNbaV0gPT09IFwiRFwiKSBieUxldHRlclszXS5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgaWYgKGxldHRlcnNbaV0gPT09IFwiRVwiKSBieUxldHRlcls0XS5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgaWYgKGxldHRlcnNbaV0gPT09IFwiRlwiKSBieUxldHRlcls1XS5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgaWYgKGxldHRlcnNbaV0gPT09IFwiR1wiKSBieUxldHRlcls2XS5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgaWYgKGxldHRlcnNbaV0gPT09IFwiSFwiKSBieUxldHRlcls3XS5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgaWYgKGxldHRlcnNbaV0gPT09IFwiSVwiKSBieUxldHRlcls4XS5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgaWYgKGxldHRlcnNbaV0gPT09IFwiSlwiKSBieUxldHRlcls5XS5wdXNoKHBvc2l0aW9uKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZ2V0Q29sdW1ucyhwb3NpdGlvbiwgaikge1xuICAgICAgICBpZiAobnVtYmVyc1tqXSA9PT0gMSkgYnlOdW1iZXJbMF0ucHVzaChwb3NpdGlvbik7XG4gICAgICAgIGlmIChudW1iZXJzW2pdID09PSAyKSBieU51bWJlclsxXS5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgaWYgKG51bWJlcnNbal0gPT09IDMpIGJ5TnVtYmVyWzJdLnB1c2gocG9zaXRpb24pO1xuICAgICAgICBpZiAobnVtYmVyc1tqXSA9PT0gNCkgYnlOdW1iZXJbM10ucHVzaChwb3NpdGlvbik7XG4gICAgICAgIGlmIChudW1iZXJzW2pdID09PSA1KSBieU51bWJlcls0XS5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgaWYgKG51bWJlcnNbal0gPT09IDYpIGJ5TnVtYmVyWzVdLnB1c2gocG9zaXRpb24pO1xuICAgICAgICBpZiAobnVtYmVyc1tqXSA9PT0gNykgYnlOdW1iZXJbNl0ucHVzaChwb3NpdGlvbik7XG4gICAgICAgIGlmIChudW1iZXJzW2pdID09PSA4KSBieU51bWJlcls3XS5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgaWYgKG51bWJlcnNbal0gPT09IDkpIGJ5TnVtYmVyWzhdLnB1c2gocG9zaXRpb24pO1xuICAgICAgICBpZiAobnVtYmVyc1tqXSA9PT0gMTApIGJ5TnVtYmVyWzldLnB1c2gocG9zaXRpb24pO1xuICAgIH1cblxuICAgIGNvbnN0IHBpY2tQb3NpdGlvbnMgPSAoc2hpcCkgPT4ge1xuICAgICAgICBsZXQgc2hpcFBvc2l0aW9ucyA9IFtdO1xuICAgICAgICBsZXQgbGVuZ3RoID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCArIDEpO1xuICAgICAgICBsZXQgc3RhcnRQb3NpdGlvbjtcbiAgICAgICAgbGV0IG91dGVyTGV0dGVySW5kZXg7XG4gICAgICAgIGxldCBpbm5lckxldHRlckluZGV4O1xuICAgICAgICBsZXQgb3V0ZXJOdW1iZXJJbmRleDtcbiAgICAgICAgbGV0IGlubmVyTnVtYmVySW5kZXg7XG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyICsgMSk7XG5cbiAgICAgICAgZ2V0U3RhcnRQb3NpdGlvbigpO1xuXG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0U3RhcnRQb3NpdGlvbigpIHtcbiAgICAgICAgICAgIHN0YXJ0UG9zaXRpb24gPSBwb3NpdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHBvc2l0aW9ucy5sZW5ndGggLSAxKSldOyAvLyBBZGQgMSBhdCB0aGUgZW5kP1xuICAgICAgICAgICAgd2hpbGUgKGNoZWNrSWZUYWtlbihzdGFydFBvc2l0aW9uKSkge1xuICAgICAgICAgICAgICAgIHN0YXJ0UG9zaXRpb24gPSBwb3NpdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHBvc2l0aW9ucy5sZW5ndGggLSAxKSldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjaGVja0lmVGFrZW4ocG9zaXRpb25DaGVjaykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChzaGlwTGlzdFtpXS5wb3NpdGlvbi5pbmNsdWRlcyhwb3NpdGlvbkNoZWNrKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBHZXQgbGV0dGVyIGluZGljZXNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBieUxldHRlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBieUxldHRlcltpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChieUxldHRlcltpXVtqXSA9PT0gc3RhcnRQb3NpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBvdXRlckxldHRlckluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJMZXR0ZXJJbmRleCA9IGo7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9ICAgXG5cbiAgICAgICAgLy8gR2V0IG51bWJlciBpbmRpY2VzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnlOdW1iZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYnlOdW1iZXJbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYnlOdW1iZXJbaV1bal0gPT09IHN0YXJ0UG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0ZXJOdW1iZXJJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGlubmVyTnVtYmVySW5kZXggPSBqO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgIFxuXG4gICAgICAgIC8vIFNoaXAgaWYgaG9yaXpvbnRhbFxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAxKSB7XG4gICAgICAgICAgICBsZXQgaW5uZXJJbmRleCA9IGlubmVyTGV0dGVySW5kZXg7XG4gICAgICAgICAgICBsZXQgb3V0ZXJJbmRleCA9IG91dGVyTGV0dGVySW5kZXg7XG4gICAgICAgICAgICBzaGlwUG9zaXRpb25zLnB1c2goc3RhcnRQb3NpdGlvbik7XG4gICAgICAgICAgICBpZiAoKGlubmVyTGV0dGVySW5kZXggKyAobGVuZ3RoKSkgPiAxMCkge1xuICAgICAgICAgICAgICAgIGxlbmd0aCA9IDEwIC0gaW5uZXJMZXR0ZXJJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gYnlMZXR0ZXJbb3V0ZXJJbmRleF1baW5uZXJJbmRleCArIDFdO1xuICAgICAgICAgICAgICAgIGlmIChjaGVja0lmVGFrZW4ocG9zaXRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzaGlwUG9zaXRpb25zLnB1c2gocG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIGlubmVySW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNoaXAucG9zaXRpb24gPSBzaGlwUG9zaXRpb25zO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2hpcCBpZiB2ZXJ0aWNhbFxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAyKSB7XG4gICAgICAgICAgICBsZXQgaW5uZXJJbmRleCA9IGlubmVyTnVtYmVySW5kZXg7XG4gICAgICAgICAgICBsZXQgb3V0ZXJJbmRleCA9IG91dGVyTnVtYmVySW5kZXg7XG4gICAgICAgICAgICBzaGlwUG9zaXRpb25zLnB1c2goc3RhcnRQb3NpdGlvbik7XG4gICAgICAgICAgICBpZiAoKGlubmVyTnVtYmVySW5kZXggKyAobGVuZ3RoKSkgPiAxMCkge1xuICAgICAgICAgICAgICAgIGxlbmd0aCA9IDEwIC0gaW5uZXJOdW1iZXJJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gYnlOdW1iZXJbb3V0ZXJJbmRleF1baW5uZXJJbmRleCArIDFdO1xuICAgICAgICAgICAgICAgIGlmIChjaGVja0lmVGFrZW4ocG9zaXRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzaGlwUG9zaXRpb25zLnB1c2gocG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIGlubmVySW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNoaXAucG9zaXRpb24gPSBzaGlwUG9zaXRpb25zO1xuICAgICAgICB9XG4gICAgfSAvLyBFbmQgb2YgcGljayBwb3NpdGlvbnNcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcGlja1Bvc2l0aW9ucyhzaGlwTGlzdFtpXSk7XG4gICAgfVxuXG5cbiAgICByZXR1cm4geyBcbiAgICAgICAgcGxheWVyLFxuICAgICAgICBtaXNzZWRBdHRhY2tzLFxuICAgICAgICBwb3NpdGlvbnMsXG4gICAgICAgIHNoaXAxLFxuICAgICAgICBzaGlwMixcbiAgICAgICAgc2hpcDMsXG4gICAgICAgIHNoaXA0LFxuICAgICAgICBzaGlwTGlzdCxcbiAgICAgICAgcmVjZWl2ZUF0dGFjazogKGF0dGFjaykgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYCR7cGxheWVyLm5hbWV9IHJlY2VpdmUgYXR0YWNrOiBgICsgYXR0YWNrKTtcbiAgICAgICAgICAgIGxldCBmbGFnID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNoaXBMaXN0W2ldLnBvc2l0aW9uLmluY2x1ZGVzKGF0dGFjaykpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcExpc3RbaV0uaGl0KGF0dGFjayk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSElUXCIpO1xuICAgICAgICAgICAgICAgICAgICBmbGFnID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFmbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtaXNzZWRBdHRhY2tzLmluY2x1ZGVzKGF0dGFjaykpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIG1pc3NlZEF0dGFja3MucHVzaChhdHRhY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGZsYWcgPSBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgY2hlY2tJZlN1bms6ICgpID0+IHtcbiAgICAgICAgICAgIGxldCBzdW5rU2hpcHMgID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoc2hpcExpc3RbaV0uaXNTdW5rKCkpIHN1bmtTaGlwcyArKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdW5rU2hpcHMgPT09IDUpIHJldHVybiB0cnVlO1xuICAgICAgICB9IFxuICAgIH07XG59O1xuXG5leHBvcnQgeyBHYW1lYm9hcmQgfTsiLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcblxuZnVuY3Rpb24gUGxheWVyKG5hbWUpIHtcbiAgICBsZXQgc2NvcmUgPSAwO1xuICAgIGxldCBhdHRhY2tMaXN0ID0gW107XG4gICAgbGV0IGFkZEF0dGFjayA9IChjdXJyZW50QXR0YWNrKSA9PiB7XG4gICAgICAgIGF0dGFja0xpc3QucHVzaChjdXJyZW50QXR0YWNrKTtcbiAgICB9XG4gICAgbGV0IGF0dGFjayA9IChHYW1lYm9hcmQpID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnRNb3ZlID0gR2FtZWJvYXJkLnBvc2l0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoR2FtZWJvYXJkLnBvc2l0aW9ucy5sZW5ndGggLSAxKSldO1xuICAgICAgICB3aGlsZSAoYXR0YWNrTGlzdC5pbmNsdWRlcyhjdXJyZW50TW92ZSkpIHtcbiAgICAgICAgICAgIGN1cnJlbnRNb3ZlID0gR2FtZWJvYXJkLnBvc2l0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoR2FtZWJvYXJkLnBvc2l0aW9ucy5sZW5ndGggLSAxKSldO1xuICAgICAgICB9XG4gICAgICAgIGF0dGFja0xpc3QucHVzaChjdXJyZW50TW92ZSk7XG4gICAgICAgIHJldHVybiBjdXJyZW50TW92ZTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBuYW1lLCBzY29yZSwgYXR0YWNrLCBhZGRBdHRhY2ssIGF0dGFja0xpc3QgfTtcbn1cblxuZXhwb3J0IHsgUGxheWVyIH07IiwiZnVuY3Rpb24gU2hpcChwb3NpdGlvbikge1xuICAgIGNvbnN0IGxlbmd0aCA9IHBvc2l0aW9uLmxlbmd0aDtcbiAgICBjb25zdCBoaXRQb3NpdGlvbnMgPSBbXTtcbiAgICBjb25zdCBoaXQgPSAobnVtKSA9PiB7XG4gICAgICAgIGhpdFBvc2l0aW9ucy5wdXNoKG51bSk7XG4gICAgfVxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICAgICAgaWYgKGhpdFBvc2l0aW9ucy5sZW5ndGggPT09IGxlbmd0aCkgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiB7IGxlbmd0aCwgcG9zaXRpb24sIGhpdFBvc2l0aW9ucywgaGl0LCBpc1N1bmsgfTtcbn1cblxuZXhwb3J0IHsgU2hpcCB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInO1xuaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IHsgZGlzcGxheUJvYXJkLCBoaWRlR2FtZWJvYXJkLCBwaWNrU3BhY2UsIG1hcmtBdHRhY2ssIGFubm91bmNlV2lubmVyIH0gZnJvbSAnLi9ET00nO1xuaW1wb3J0IHsgU2hpcCB9IGZyb20gJy4vc2hpcCc7XG5cblxuY29uc3QgcGxheWVyMSA9IFBsYXllcihcInlvdVwiKTtcbmNvbnN0IHBsYXllcjIgPSBQbGF5ZXIoXCJjb21wdXRlclwiKTtcbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25cIik7XG5jb25zdCBwbGF5ZXIxQm9hcmQgPSBHYW1lYm9hcmQocGxheWVyMSk7XG5jb25zdCBwbGF5ZXIyQm9hcmQgPSBHYW1lYm9hcmQocGxheWVyMik7XG5kaXNwbGF5Qm9hcmQocGxheWVyMUJvYXJkKTtcbmRpc3BsYXlCb2FyZChwbGF5ZXIyQm9hcmQpO1xuaGlkZUdhbWVib2FyZChwbGF5ZXIyQm9hcmQpO1xuXG5idXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICBwbGF5Um91bmQoKTtcbn1cblxuZnVuY3Rpb24gcGxheVJvdW5kKCkge1xuICAgIGxldCBwbGF5ZXIxQXR0YWNrID0gcGxheWVyMS5hdHRhY2socGxheWVyMkJvYXJkKTtcbiAgICBwbGF5ZXIxLmFkZEF0dGFjayhwbGF5ZXIxQXR0YWNrKTtcbiAgICBsZXQgcGxheWVyMkF0dGFjayA9IHBsYXllcjIuYXR0YWNrKHBsYXllcjFCb2FyZCk7XG4gICAgcGxheWVyMi5hZGRBdHRhY2socGxheWVyMkF0dGFjayk7XG5cbiAgICBwbGF5ZXIyQm9hcmQucmVjZWl2ZUF0dGFjayhwbGF5ZXIxQXR0YWNrKTtcbiAgICBwbGF5ZXIxQm9hcmQucmVjZWl2ZUF0dGFjayhwbGF5ZXIyQXR0YWNrKTtcblxuICAgIG1hcmtBdHRhY2socGxheWVyMiwgcGxheWVyMUF0dGFjaywgcGxheWVyMkJvYXJkKTtcbiAgICBtYXJrQXR0YWNrKHBsYXllcjEsIHBsYXllcjJBdHRhY2ssIHBsYXllcjFCb2FyZCk7XG5cbiAgICBwbGF5ZXIxQm9hcmQuY2hlY2tJZlN1bmsoKTtcbiAgICBwbGF5ZXIyQm9hcmQuY2hlY2tJZlN1bmsoKTtcblxuICAgIGFubm91bmNlV2lubmVyKHBsYXllcjFCb2FyZCk7XG4gICAgYW5ub3VuY2VXaW5uZXIocGxheWVyMkJvYXJkKTtcbn1cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==