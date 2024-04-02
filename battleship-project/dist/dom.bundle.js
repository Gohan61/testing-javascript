"use strict";
(self["webpackChunkbattleship_project"] = self["webpackChunkbattleship_project"] || []).push([["dom"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/dom/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/dom/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  margin: 0;
  padding: 0;
  font-family: "Courier New", Courier, monospace;
  height: 100vh;
}

h1 {
  text-align: center;
  background-color: rgb(250, 0, 0, 5%);
  margin: 0;
  padding: 20px;
}

.gameContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  background-color: rgb(200, 0, 0, 1%);
  padding-top: 10px;
}

.computerGrid,
.playerGrid {
  width: 30vw;
  height: 30vw;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
}

.computerBoard,
.playerBoard {
  text-align: center;
}

.computerGrid div,
.playerGrid div {
  width: 100%;
  height: 100%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}

.gameButtons {
  padding: 10%;
  grid-area: 2 / 2;
  display: flex;
  justify-content: space-between;
  width: 50%;
  flex-wrap: wrap;
  border-radius: 10px;
}

.newGame {
  border-radius: 10px;
  background-color: rgb(200, 0, 0, 20%);
  font-size: 1em;
  font-weight: bold;
  padding: 20px;
}

.statusBar {
  grid-area: 2 / 1;
  font-size: 2em;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
}

footer {
  height: 100%;
  background-color: rgb(250, 0, 0, 5%);
}
`, "",{"version":3,"sources":["webpack://./src/dom/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,8CAA8C;EAC9C,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,oCAAoC;EACpC,SAAS;EACT,aAAa;AACf;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,qBAAqB;EACrB,oCAAoC;EACpC,iBAAiB;AACnB;;AAEA;;EAEE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,sCAAsC;EACtC,mCAAmC;AACrC;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;;EAEE,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,8BAA8B;EAC9B,UAAU;EACV,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,qCAAqC;EACrC,cAAc;EACd,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,oCAAoC;AACtC","sourcesContent":["body {\n  margin: 0;\n  padding: 0;\n  font-family: \"Courier New\", Courier, monospace;\n  height: 100vh;\n}\n\nh1 {\n  text-align: center;\n  background-color: rgb(250, 0, 0, 5%);\n  margin: 0;\n  padding: 20px;\n}\n\n.gameContainer {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  justify-items: center;\n  background-color: rgb(200, 0, 0, 1%);\n  padding-top: 10px;\n}\n\n.computerGrid,\n.playerGrid {\n  width: 30vw;\n  height: 30vw;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.computerBoard,\n.playerBoard {\n  text-align: center;\n}\n\n.computerGrid div,\n.playerGrid div {\n  width: 100%;\n  height: 100%;\n  border: 1px solid black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.gameButtons {\n  padding: 10%;\n  grid-area: 2 / 2;\n  display: flex;\n  justify-content: space-between;\n  width: 50%;\n  flex-wrap: wrap;\n  border-radius: 10px;\n}\n\n.newGame {\n  border-radius: 10px;\n  background-color: rgb(200, 0, 0, 20%);\n  font-size: 1em;\n  font-weight: bold;\n  padding: 20px;\n}\n\n.statusBar {\n  grid-area: 2 / 1;\n  font-size: 2em;\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nfooter {\n  height: 100%;\n  background-color: rgb(250, 0, 0, 5%);\n}\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/dom/style.css":
/*!***************************!*\
  !*** ./src/dom/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/dom/style.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/dom/dom.js":
/*!************************!*\
  !*** ./src/dom/dom.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computerBoard: () => (/* binding */ computerBoard),
/* harmony export */   computerGridElements: () => (/* binding */ computerGridElements),
/* harmony export */   newGameButton: () => (/* binding */ newGameButton),
/* harmony export */   newGameObj: () => (/* binding */ newGameObj),
/* harmony export */   placeXonScreen: () => (/* binding */ placeXonScreen),
/* harmony export */   playerGridElements: () => (/* binding */ playerGridElements),
/* harmony export */   statusbar: () => (/* binding */ statusbar)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/dom/style.css");
/* harmony import */ var _startGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startGame */ "./src/dom/startGame.js");



const computerBoard = document.querySelector(".computerGrid");
const playerBoard = document.querySelector(".playerGrid");
const newGameButton = document.querySelector(".newGame");
const statusbar = document.querySelector(".statusBar");

function createGrid(element) {
  for (let i = 0; i < 100; i++) {
    let div = document.createElement("div");
    if (i < 10) {
      div.setAttribute("data", `0${i}`);
    } else {
      div.setAttribute("data", i);
    }
    element.append(div);
  }
}

createGrid(computerBoard);
createGrid(playerBoard);

const computerGridElements =
  document.querySelectorAll(".computerGrid div");
const playerGridElements = document.querySelectorAll(".playerGrid div");

function hover(element) {
  element.forEach((div) => {
    div.addEventListener("mouseover", (color) => {
      color.currentTarget.style.border = "blue 1px solid";
      color.currentTarget.style.boxShadow = "inset #dde0ee 15px 15px 15px";
    });
  });

  element.forEach((div) => {
    div.addEventListener("mouseout", (color) => {
      color.currentTarget.style.border = "";
      color.currentTarget.style.boxShadow = "";
    });
  });
}

function placeXonScreen(item, grid) {
  let clickedDiv = undefined;
  let itemNum = Number(item);
  if (itemNum < 10) {
    clickedDiv = document.querySelector(`div.${grid} [data="0${itemNum}"]`);
  } else {
    clickedDiv = document.querySelector(`div.${grid} [data="${itemNum}"]`);
  }
  clickedDiv.textContent = "x";
}

hover(computerGridElements);

const newGameObj = (0,_startGame__WEBPACK_IMPORTED_MODULE_1__.startNewGame)();


/***/ }),

/***/ "./src/dom/randomize.js":
/*!******************************!*\
  !*** ./src/dom/randomize.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   randomize: () => (/* binding */ randomize)
/* harmony export */ });
/* harmony import */ var _startGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startGame */ "./src/dom/startGame.js");


function randomize(newGame) {
  (0,_startGame__WEBPACK_IMPORTED_MODULE_0__.placeShips)(
    Math.floor(Math.random() * 2),
    Math.floor(Math.random() * 4),
    Math.floor(Math.random()) > 0.5 ? "horizontal" : "vertical",
    "gameBoardComputer",
    ".computerGrid",
    "carrier",
    newGame
  );
  (0,_startGame__WEBPACK_IMPORTED_MODULE_0__.placeShips)(
    Math.floor(Math.random() * 2 + 8),
    Math.floor(Math.random() * 6),
    "horizontal",
    "gameBoardComputer",
    ".computerGrid",
    "battleship",
    newGame
  );
  (0,_startGame__WEBPACK_IMPORTED_MODULE_0__.placeShips)(
    Math.floor(Math.random() * 6),
    7,
    "horizontal",
    "gameBoardComputer",
    ".computerGrid",
    "cruiser",
    newGame
  );
  (0,_startGame__WEBPACK_IMPORTED_MODULE_0__.placeShips)(
    Math.floor(Math.random() * 6),
    6,
    "vertical",
    "gameBoardComputer",
    ".computerGrid",
    "submarine",
    newGame
  );
  (0,_startGame__WEBPACK_IMPORTED_MODULE_0__.placeShips)(
    Math.floor(Math.random() * 2 + 4),
    Math.floor(Math.random() * 2 + 4),
    "horizontal",
    "gameBoardComputer",
    ".computerGrid",
    "destroyer",
    newGame
  );

  (0,_startGame__WEBPACK_IMPORTED_MODULE_0__.placeShips)(
    Math.floor(Math.random() * 2),
    Math.floor(Math.random() * 4),
    Math.floor(Math.random()) > 0.5 ? "horizontal" : "vertical",
    "gameBoardPlayer1",
    ".playerGrid",
    "carrier",
    newGame
  );
  (0,_startGame__WEBPACK_IMPORTED_MODULE_0__.placeShips)(
    Math.floor(Math.random() * 2 + 8),
    Math.floor(Math.random() * 6),
    "horizontal",
    "gameBoardPlayer1",
    ".playerGrid",
    "battleship",
    newGame
  );
  (0,_startGame__WEBPACK_IMPORTED_MODULE_0__.placeShips)(
    Math.floor(Math.random() * 6),
    7,
    "horizontal",
    "gameBoardPlayer1",
    ".playerGrid",
    "cruiser",
    newGame
  );
  (0,_startGame__WEBPACK_IMPORTED_MODULE_0__.placeShips)(
    Math.floor(Math.random() * 6),
    6,
    "vertical",
    "gameBoardPlayer1",
    ".playerGrid",
    "submarine",
    newGame
  );
  (0,_startGame__WEBPACK_IMPORTED_MODULE_0__.placeShips)(
    Math.floor(Math.random() * 2 + 4),
    Math.floor(Math.random() * 2 + 4),
    "horizontal",
    "gameBoardPlayer1",
    ".playerGrid",
    "destroyer",
    newGame
  );
}


/***/ }),

/***/ "./src/dom/startGame.js":
/*!******************************!*\
  !*** ./src/dom/startGame.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attack: () => (/* binding */ attack),
/* harmony export */   placeShips: () => (/* binding */ placeShips),
/* harmony export */   startNewGame: () => (/* binding */ startNewGame)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom/dom.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _randomize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./randomize */ "./src/dom/randomize.js");









let newGame = undefined;

function startNewGame() {
  _dom__WEBPACK_IMPORTED_MODULE_0__.newGameButton.addEventListener("click", () => {
    newGame = (0,___WEBPACK_IMPORTED_MODULE_1__.gameLoop)();
    remove();
    _dom__WEBPACK_IMPORTED_MODULE_0__.computerGridElements.forEach((element) => {
      element.style.backgroundColor = "";
      element.textContent = "";
    });
    _dom__WEBPACK_IMPORTED_MODULE_0__.playerGridElements.forEach((element) => {
      element.style.backgroundColor = "";
      element.textContent = "";
    });
    _dom__WEBPACK_IMPORTED_MODULE_0__.statusbar.textContent = "";

    const random = (0,_randomize__WEBPACK_IMPORTED_MODULE_2__.randomize)(newGame);

    addListener();
  });
}

function placeShips(x, y, direction, board, grid, ship, game) {
  const shipLength = game[board][ship].length;
  const nodePoint = Number(`${x}${y}`);

  if (ship === "destroyer") {
    const element = document.querySelector(
      `${grid} div:nth-child(${nodePoint + 1})`
    );
    if (board === "gameBoardPlayer1") {
      colorShips(element, ship);
    }
    game[board].placeShip(x, y, direction, game[board][ship].length);
  } else if (direction === "horizontal") {
    if (y >= 6 && shipLength + y > 10) {
      _dom__WEBPACK_IMPORTED_MODULE_0__.statusbar.textContent = "Ship does not fit board";
    } else {
      if (x < 1) {
        for (let i = 1; i < shipLength + 1; i++) {
          const element = document.querySelector(
            `${grid} div:nth-child(${y + i})`
          );
          if (board === "gameBoardPlayer1") {
            colorShips(element, ship);
          }
          game[board].placeShip(x, y, direction, game[board][ship].length);
        }
      } else {
        for (let i = 1; i < shipLength + 1; i++) {
          const element = document.querySelector(
            `${grid} div:nth-child(${nodePoint + i})`
          );
          if (board === "gameBoardPlayer1") {
            colorShips(element, ship);
          }
          game[board].placeShip(x, y, direction, game[board][ship].length);
        }
      }
    }
  } else if (direction === "vertical") {
    if (x >= 6 && shipLength + x > 10) {
      _dom__WEBPACK_IMPORTED_MODULE_0__.statusbar.textContent = "Ship does not fit board";
    } else {
      const element1 = document.querySelector(
        `${grid} div:nth-child(${nodePoint + 1})`
      );
      for (let i = 2; i < shipLength + 1; i++) {
        let increment = Number(`${i}0` - 10);

        const element2 = document.querySelector(
          `${grid} div:nth-child(${nodePoint + increment + 1})`
        );
        if (board === "gameBoardPlayer1") {
          colorShips(element1, ship);
          colorShips(element2, ship);
        }
        game[board].placeShip(x, y, direction, game[board][ship].length);
      }
    }
  }
}

function colorShips(element, ship) {
  const carrier = "#b30000";
  const battleship = "#e68a00";
  const cruiser = "#008000";
  const submarine = "#0000b3";
  const destroyer = "#e6e600";

  switch (true) {
    case ship === "carrier":
      element.style.backgroundColor = carrier;
      break;
    case ship === "battleship":
      element.style.backgroundColor = battleship;
      break;
    case ship === "cruiser":
      element.style.backgroundColor = cruiser;
      break;
    case ship === "submarine":
      element.style.backgroundColor = submarine;
      break;
    case ship === "destroyer":
      element.style.backgroundColor = destroyer;
      break;
  }
}

function colorComputerShips(game) {
  game.gameBoardComputer.gameBoard.forEach((row, index) => {
    for (let i = 0; i < 10; i++) {
      let div = undefined;

      switch (true) {
        case row[i] === 5:
          div = document.querySelector(
            `div.computerGrid [data="${index}${i}"]`
          );
          colorShips(div, "carrier");
          break;
        case row[i] === 4:
          div = document.querySelector(
            `div.computerGrid [data="${index}${i}"]`
          );
          colorShips(div, "battleship");
          break;
        case row[i] === 3:
          div = document.querySelector(
            `div.computerGrid [data="${index}${i}"]`
          );
          colorShips(div, "cruiser");
          break;
        case row[i] === 2:
          div = document.querySelector(
            `div.computerGrid [data="${index}${i}"]`
          );
          colorShips(div, "submarine");
          break;
        case row[i] === 1:
          div = document.querySelector(
            `div.computerGrid [data="${index}${i}"]`
          );
          colorShips(div, "destroyer");
          break;
      }
    }
  });
}

function attack(game, item) {
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.placeXonScreen)(item, "computerGrid");
  const itemToAttack = item.split("");
  const x = Number(itemToAttack[0]);
  const y = Number(itemToAttack[1]);

  if (game.gameBoardComputer.gameBoard[x][y] !== "x") {
    game.player1.playerAttack(x, y);
    if (game.checkIfGameOver()) {
      _dom__WEBPACK_IMPORTED_MODULE_0__.statusbar.textContent = game.checkIfGameOver();
      colorComputerShips(game);
    }
    const coordinateComputerAttack = game.computer.computerAttack();

    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.placeXonScreen)(coordinateComputerAttack, "playerGrid");
    if (game.checkIfGameOver()) {
      _dom__WEBPACK_IMPORTED_MODULE_0__.statusbar.textContent = game.checkIfGameOver();
      colorComputerShips(game);
      remove();
    }
  }
}

function addListener() {
  _dom__WEBPACK_IMPORTED_MODULE_0__.computerGridElements.forEach((item) => {
    item.addEventListener("click", wait);
  });
}

function wait(item) {
  const itemToAttack = item.target.getAttribute("data");

  attack(newGame, itemToAttack);
}

function remove() {
  _dom__WEBPACK_IMPORTED_MODULE_0__.computerGridElements.forEach((item) => {
    item.removeEventListener("click", wait);
  });
}


/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameBoard: () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");


class GameBoard {
  constructor() {
    this.gameBoard = [];
    this.carrier = new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(5);
    this.battleship = new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(4);
    this.cruiser = new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(3);
    this.submarine = new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(2);
    this.destroyer = new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(1);
    this.myTurn = false;
  }
  newGameboard = () => {
    for (let i = 0; i < 10; i++) {
      this.gameBoard.push(Array(10).fill(0));
    }
  };

  changeTurn() {
    this.myTurn = false;
  }

  placeShip(x, y, direction, length) {
    if (direction === "horizontal") {
      if (this.gameBoard[x].slice(y, y + length).every((item) => item === 0)) {
        this.gameBoard[x].fill(length, y, y + length);
      }
    }
    if (direction === "vertical") {
      if (this.checkIfBoardEmpty(x, y, length) === true) {
        for (let i = 0; i < length; i++) {
          this.gameBoard[x][y] = length;
          this.gameBoard[x + i][y] = length;
        }
      }
    }
  }

  checkIfBoardEmpty(x, y, length) {
    for (let i = 0; i < length; i++) {
      if (this.gameBoard[x][y] !== 0) {
        return false;
      } else if (this.gameBoard[x + i][y] !== 0) {
        return false;
      }
    }
    return true;
  }

  receiveAttack(x, y) {
    if (this.myTurn === false) {
      if (this.gameBoard[x][y] !== 0) {
        this.checkShipType(x, y);
      } else {
        this.gameBoard[x][y] = "x";
      }
      this.myTurn = true;
      this.checkIfAllShipsSunk();
    }
  }

  checkShipType(x, y) {
    switch (true) {
      case this.gameBoard[x][y] === 5:
        this.carrier.hit();
        break;
      case this.gameBoard[x][y] === 4:
        this.battleship.hit();
        break;
      case this.gameBoard[x][y] === 3:
        this.cruiser.hit();
        break;
      case this.gameBoard[x][y] === 2:
        this.submarine.hit();
        break;
      case this.gameBoard[x][y] === 1:
        this.destroyer.hit();
        break;
    }
  }

  checkIfAllShipsSunk() {
    if (
      this.carrier.isSunk() &&
      this.battleship.isSunk() &&
      this.cruiser.isSunk() &&
      this.submarine.isSunk() &&
      this.destroyer.isSunk()
    ) {
      return true;
    }
  }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameLoop: () => (/* binding */ gameLoop)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/player.js");




function gameLoop() {
  const gameBoardPlayer1 = new _gameBoard__WEBPACK_IMPORTED_MODULE_1__.GameBoard();
  const gameBoardComputer = new _gameBoard__WEBPACK_IMPORTED_MODULE_1__.GameBoard();
  gameBoardComputer.newGameboard();
  gameBoardPlayer1.newGameboard();

  const player1 = new _player__WEBPACK_IMPORTED_MODULE_2__.Player(gameBoardComputer, gameBoardPlayer1);
  const computer = new _player__WEBPACK_IMPORTED_MODULE_2__.Player(gameBoardPlayer1, gameBoardComputer);

  if (gameBoardPlayer1.myTurn === false) {
    gameBoardPlayer1.myTurn = true;
    gameBoardComputer.myTurn = false;
  }

  const checkIfGameOver = () => {
    let winner = undefined;
    if (gameBoardPlayer1.checkIfAllShipsSunk()) {
      winner = "Computer wins";
    } else if (gameBoardComputer.checkIfAllShipsSunk()) {
      winner = "You win!";
    }
    return winner;
  };

  return {
    player1,
    computer,
    gameBoardPlayer1,
    gameBoardComputer,
    checkIfGameOver,
  };
}


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");


class Player {
  constructor(enemy, ownBoard) {
    this.enemy = enemy;
    this.ownBoard = ownBoard;
    this.usedCoordinates = [];
  }

  playerAttack(x, y) {
    this.enemy.receiveAttack(x, y);
    this.ownBoard.changeTurn();
  }

  computerAttack() {
    let coordinate = Math.floor(Math.random() * 100);

    while (this.usedCoordinates.includes(coordinate)) {
      coordinate = Math.floor(Math.random() * 100);
    }
    this.usedCoordinates.push(coordinate);

    let x = Number(coordinate.toString().split("")[0]);
    let y = Number(coordinate.toString().split("")[1]);

    if (coordinate < 10) {
      this.enemy.receiveAttack(0, x);
    } else if (coordinate === 10) {
      this.enemy.receiveAttack(1, 0);
    } else {
      this.enemy.receiveAttack(x, y);
    }
    this.ownBoard.changeTurn();

    return coordinate;
  }
}


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(length) {
    this.length = length;
    this.timesHit = null;
    this.sunk = null;
  }

  hit() {
    this.timesHit += 1;
  }

  isSunk() {
    if (this.length === this.timesHit) {
      this.sunk = true;
      return true;
    }
  }
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/dom/dom.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aEM7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVGOEI7QUFDVTtBQUNOOztBQUUzQjtBQUNQLCtCQUErQixpREFBUztBQUN4QyxnQ0FBZ0MsaURBQVM7QUFDekM7QUFDQTs7QUFFQSxzQkFBc0IsMkNBQU07QUFDNUIsdUJBQXVCLDJDQUFNOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkN3Qzs7QUFFakM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2RvbS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvZG9tL3N0eWxlLmNzcz9iYjVkIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2RvbS9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2RvbS9yYW5kb21pemUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2RvbS9zdGFydEdhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvc2hpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5oMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMCwgMCwgNSUpO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5nYW1lQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsIDAsIDAsIDElKTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5jb21wdXRlckdyaWQsXG4ucGxheWVyR3JpZCB7XG4gIHdpZHRoOiAzMHZ3O1xuICBoZWlnaHQ6IDMwdnc7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbn1cblxuLmNvbXB1dGVyQm9hcmQsXG4ucGxheWVyQm9hcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb21wdXRlckdyaWQgZGl2LFxuLnBsYXllckdyaWQgZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZ2FtZUJ1dHRvbnMge1xuICBwYWRkaW5nOiAxMCU7XG4gIGdyaWQtYXJlYTogMiAvIDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDUwJTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4ubmV3R2FtZSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsIDAsIDAsIDIwJSk7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLnN0YXR1c0JhciB7XG4gIGdyaWQtYXJlYTogMiAvIDE7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmZvb3RlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMCwgMCwgNSUpO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZG9tL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsOENBQThDO0VBQzlDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsU0FBUztFQUNULGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIscUJBQXFCO0VBQ3JCLG9DQUFvQztFQUNwQyxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztBQUNyQzs7QUFFQTs7RUFFRSxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsVUFBVTtFQUNWLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIscUNBQXFDO0VBQ3JDLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0NBQW9DO0FBQ3RDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ291cmllciBOZXdcXFwiLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5oMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAwLCAwLCA1JSk7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uZ2FtZUNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMCwgMCwgMSUpO1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxufVxcblxcbi5jb21wdXRlckdyaWQsXFxuLnBsYXllckdyaWQge1xcbiAgd2lkdGg6IDMwdnc7XFxuICBoZWlnaHQ6IDMwdnc7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLmNvbXB1dGVyQm9hcmQsXFxuLnBsYXllckJvYXJkIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbXB1dGVyR3JpZCBkaXYsXFxuLnBsYXllckdyaWQgZGl2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZUJ1dHRvbnMge1xcbiAgcGFkZGluZzogMTAlO1xcbiAgZ3JpZC1hcmVhOiAyIC8gMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogNTAlO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLm5ld0dhbWUge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsIDAsIDAsIDIwJSk7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLnN0YXR1c0JhciB7XFxuICBncmlkLWFyZWE6IDIgLyAxO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmZvb3RlciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAwLCAwLCA1JSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgbmV3R2FtZSwgc3RhcnROZXdHYW1lIH0gZnJvbSBcIi4vc3RhcnRHYW1lXCI7XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlckdyaWRcIik7XG5jb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyR3JpZFwiKTtcbmV4cG9ydCBjb25zdCBuZXdHYW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdHYW1lXCIpO1xuZXhwb3J0IGNvbnN0IHN0YXR1c2JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhdHVzQmFyXCIpO1xuXG5mdW5jdGlvbiBjcmVhdGVHcmlkKGVsZW1lbnQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGlmIChpIDwgMTApIHtcbiAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhXCIsIGAwJHtpfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXYuc2V0QXR0cmlidXRlKFwiZGF0YVwiLCBpKTtcbiAgICB9XG4gICAgZWxlbWVudC5hcHBlbmQoZGl2KTtcbiAgfVxufVxuXG5jcmVhdGVHcmlkKGNvbXB1dGVyQm9hcmQpO1xuY3JlYXRlR3JpZChwbGF5ZXJCb2FyZCk7XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlckdyaWRFbGVtZW50cyA9XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29tcHV0ZXJHcmlkIGRpdlwiKTtcbmV4cG9ydCBjb25zdCBwbGF5ZXJHcmlkRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllckdyaWQgZGl2XCIpO1xuXG5mdW5jdGlvbiBob3ZlcihlbGVtZW50KSB7XG4gIGVsZW1lbnQuZm9yRWFjaCgoZGl2KSA9PiB7XG4gICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKGNvbG9yKSA9PiB7XG4gICAgICBjb2xvci5jdXJyZW50VGFyZ2V0LnN0eWxlLmJvcmRlciA9IFwiYmx1ZSAxcHggc29saWRcIjtcbiAgICAgIGNvbG9yLmN1cnJlbnRUYXJnZXQuc3R5bGUuYm94U2hhZG93ID0gXCJpbnNldCAjZGRlMGVlIDE1cHggMTVweCAxNXB4XCI7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGVsZW1lbnQuZm9yRWFjaCgoZGl2KSA9PiB7XG4gICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoY29sb3IpID0+IHtcbiAgICAgIGNvbG9yLmN1cnJlbnRUYXJnZXQuc3R5bGUuYm9yZGVyID0gXCJcIjtcbiAgICAgIGNvbG9yLmN1cnJlbnRUYXJnZXQuc3R5bGUuYm94U2hhZG93ID0gXCJcIjtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwbGFjZVhvblNjcmVlbihpdGVtLCBncmlkKSB7XG4gIGxldCBjbGlja2VkRGl2ID0gdW5kZWZpbmVkO1xuICBsZXQgaXRlbU51bSA9IE51bWJlcihpdGVtKTtcbiAgaWYgKGl0ZW1OdW0gPCAxMCkge1xuICAgIGNsaWNrZWREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXYuJHtncmlkfSBbZGF0YT1cIjAke2l0ZW1OdW19XCJdYCk7XG4gIH0gZWxzZSB7XG4gICAgY2xpY2tlZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdi4ke2dyaWR9IFtkYXRhPVwiJHtpdGVtTnVtfVwiXWApO1xuICB9XG4gIGNsaWNrZWREaXYudGV4dENvbnRlbnQgPSBcInhcIjtcbn1cblxuaG92ZXIoY29tcHV0ZXJHcmlkRWxlbWVudHMpO1xuXG5leHBvcnQgY29uc3QgbmV3R2FtZU9iaiA9IHN0YXJ0TmV3R2FtZSgpO1xuIiwiaW1wb3J0IHsgcGxhY2VTaGlwcyB9IGZyb20gXCIuL3N0YXJ0R2FtZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9taXplKG5ld0dhbWUpIHtcbiAgcGxhY2VTaGlwcyhcbiAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSxcbiAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KSxcbiAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkpID4gMC41ID8gXCJob3Jpem9udGFsXCIgOiBcInZlcnRpY2FsXCIsXG4gICAgXCJnYW1lQm9hcmRDb21wdXRlclwiLFxuICAgIFwiLmNvbXB1dGVyR3JpZFwiLFxuICAgIFwiY2FycmllclwiLFxuICAgIG5ld0dhbWVcbiAgKTtcbiAgcGxhY2VTaGlwcyhcbiAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyICsgOCksXG4gICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNiksXG4gICAgXCJob3Jpem9udGFsXCIsXG4gICAgXCJnYW1lQm9hcmRDb21wdXRlclwiLFxuICAgIFwiLmNvbXB1dGVyR3JpZFwiLFxuICAgIFwiYmF0dGxlc2hpcFwiLFxuICAgIG5ld0dhbWVcbiAgKTtcbiAgcGxhY2VTaGlwcyhcbiAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KSxcbiAgICA3LFxuICAgIFwiaG9yaXpvbnRhbFwiLFxuICAgIFwiZ2FtZUJvYXJkQ29tcHV0ZXJcIixcbiAgICBcIi5jb21wdXRlckdyaWRcIixcbiAgICBcImNydWlzZXJcIixcbiAgICBuZXdHYW1lXG4gICk7XG4gIHBsYWNlU2hpcHMoXG4gICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNiksXG4gICAgNixcbiAgICBcInZlcnRpY2FsXCIsXG4gICAgXCJnYW1lQm9hcmRDb21wdXRlclwiLFxuICAgIFwiLmNvbXB1dGVyR3JpZFwiLFxuICAgIFwic3VibWFyaW5lXCIsXG4gICAgbmV3R2FtZVxuICApO1xuICBwbGFjZVNoaXBzKFxuICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIgKyA0KSxcbiAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyICsgNCksXG4gICAgXCJob3Jpem9udGFsXCIsXG4gICAgXCJnYW1lQm9hcmRDb21wdXRlclwiLFxuICAgIFwiLmNvbXB1dGVyR3JpZFwiLFxuICAgIFwiZGVzdHJveWVyXCIsXG4gICAgbmV3R2FtZVxuICApO1xuXG4gIHBsYWNlU2hpcHMoXG4gICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMiksXG4gICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCksXG4gICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKSA+IDAuNSA/IFwiaG9yaXpvbnRhbFwiIDogXCJ2ZXJ0aWNhbFwiLFxuICAgIFwiZ2FtZUJvYXJkUGxheWVyMVwiLFxuICAgIFwiLnBsYXllckdyaWRcIixcbiAgICBcImNhcnJpZXJcIixcbiAgICBuZXdHYW1lXG4gICk7XG4gIHBsYWNlU2hpcHMoXG4gICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMiArIDgpLFxuICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpLFxuICAgIFwiaG9yaXpvbnRhbFwiLFxuICAgIFwiZ2FtZUJvYXJkUGxheWVyMVwiLFxuICAgIFwiLnBsYXllckdyaWRcIixcbiAgICBcImJhdHRsZXNoaXBcIixcbiAgICBuZXdHYW1lXG4gICk7XG4gIHBsYWNlU2hpcHMoXG4gICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNiksXG4gICAgNyxcbiAgICBcImhvcml6b250YWxcIixcbiAgICBcImdhbWVCb2FyZFBsYXllcjFcIixcbiAgICBcIi5wbGF5ZXJHcmlkXCIsXG4gICAgXCJjcnVpc2VyXCIsXG4gICAgbmV3R2FtZVxuICApO1xuICBwbGFjZVNoaXBzKFxuICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpLFxuICAgIDYsXG4gICAgXCJ2ZXJ0aWNhbFwiLFxuICAgIFwiZ2FtZUJvYXJkUGxheWVyMVwiLFxuICAgIFwiLnBsYXllckdyaWRcIixcbiAgICBcInN1Ym1hcmluZVwiLFxuICAgIG5ld0dhbWVcbiAgKTtcbiAgcGxhY2VTaGlwcyhcbiAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyICsgNCksXG4gICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMiArIDQpLFxuICAgIFwiaG9yaXpvbnRhbFwiLFxuICAgIFwiZ2FtZUJvYXJkUGxheWVyMVwiLFxuICAgIFwiLnBsYXllckdyaWRcIixcbiAgICBcImRlc3Ryb3llclwiLFxuICAgIG5ld0dhbWVcbiAgKTtcbn1cbiIsImltcG9ydCB7IG5ld0dhbWVCdXR0b24gfSBmcm9tIFwiLi9kb21cIjtcbmltcG9ydCB7IGdhbWVMb29wIH0gZnJvbSBcIi4uXCI7XG5pbXBvcnQgeyBjb21wdXRlckdyaWRFbGVtZW50cyB9IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHsgcGxheWVyR3JpZEVsZW1lbnRzIH0gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgeyBzdGF0dXNiYXIgfSBmcm9tIFwiLi9kb21cIjtcbmltcG9ydCB7IHJhbmRvbWl6ZSB9IGZyb20gXCIuL3JhbmRvbWl6ZVwiO1xuaW1wb3J0IHsgY29tcHV0ZXJCb2FyZCB9IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHsgcGxhY2VYb25TY3JlZW4gfSBmcm9tIFwiLi9kb21cIjtcblxubGV0IG5ld0dhbWUgPSB1bmRlZmluZWQ7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE5ld0dhbWUoKSB7XG4gIG5ld0dhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBuZXdHYW1lID0gZ2FtZUxvb3AoKTtcbiAgICByZW1vdmUoKTtcbiAgICBjb21wdXRlckdyaWRFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiXCI7XG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB9KTtcbiAgICBwbGF5ZXJHcmlkRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIlwiO1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgfSk7XG4gICAgc3RhdHVzYmFyLnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgIGNvbnN0IHJhbmRvbSA9IHJhbmRvbWl6ZShuZXdHYW1lKTtcblxuICAgIGFkZExpc3RlbmVyKCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxhY2VTaGlwcyh4LCB5LCBkaXJlY3Rpb24sIGJvYXJkLCBncmlkLCBzaGlwLCBnYW1lKSB7XG4gIGNvbnN0IHNoaXBMZW5ndGggPSBnYW1lW2JvYXJkXVtzaGlwXS5sZW5ndGg7XG4gIGNvbnN0IG5vZGVQb2ludCA9IE51bWJlcihgJHt4fSR7eX1gKTtcblxuICBpZiAoc2hpcCA9PT0gXCJkZXN0cm95ZXJcIikge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYCR7Z3JpZH0gZGl2Om50aC1jaGlsZCgke25vZGVQb2ludCArIDF9KWBcbiAgICApO1xuICAgIGlmIChib2FyZCA9PT0gXCJnYW1lQm9hcmRQbGF5ZXIxXCIpIHtcbiAgICAgIGNvbG9yU2hpcHMoZWxlbWVudCwgc2hpcCk7XG4gICAgfVxuICAgIGdhbWVbYm9hcmRdLnBsYWNlU2hpcCh4LCB5LCBkaXJlY3Rpb24sIGdhbWVbYm9hcmRdW3NoaXBdLmxlbmd0aCk7XG4gIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgIGlmICh5ID49IDYgJiYgc2hpcExlbmd0aCArIHkgPiAxMCkge1xuICAgICAgc3RhdHVzYmFyLnRleHRDb250ZW50ID0gXCJTaGlwIGRvZXMgbm90IGZpdCBib2FyZFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoeCA8IDEpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzaGlwTGVuZ3RoICsgMTsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgJHtncmlkfSBkaXY6bnRoLWNoaWxkKCR7eSArIGl9KWBcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChib2FyZCA9PT0gXCJnYW1lQm9hcmRQbGF5ZXIxXCIpIHtcbiAgICAgICAgICAgIGNvbG9yU2hpcHMoZWxlbWVudCwgc2hpcCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGdhbWVbYm9hcmRdLnBsYWNlU2hpcCh4LCB5LCBkaXJlY3Rpb24sIGdhbWVbYm9hcmRdW3NoaXBdLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2hpcExlbmd0aCArIDE7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYCR7Z3JpZH0gZGl2Om50aC1jaGlsZCgke25vZGVQb2ludCArIGl9KWBcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChib2FyZCA9PT0gXCJnYW1lQm9hcmRQbGF5ZXIxXCIpIHtcbiAgICAgICAgICAgIGNvbG9yU2hpcHMoZWxlbWVudCwgc2hpcCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGdhbWVbYm9hcmRdLnBsYWNlU2hpcCh4LCB5LCBkaXJlY3Rpb24sIGdhbWVbYm9hcmRdW3NoaXBdLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICBpZiAoeCA+PSA2ICYmIHNoaXBMZW5ndGggKyB4ID4gMTApIHtcbiAgICAgIHN0YXR1c2Jhci50ZXh0Q29udGVudCA9IFwiU2hpcCBkb2VzIG5vdCBmaXQgYm9hcmRcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZWxlbWVudDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgJHtncmlkfSBkaXY6bnRoLWNoaWxkKCR7bm9kZVBvaW50ICsgMX0pYFxuICAgICAgKTtcbiAgICAgIGZvciAobGV0IGkgPSAyOyBpIDwgc2hpcExlbmd0aCArIDE7IGkrKykge1xuICAgICAgICBsZXQgaW5jcmVtZW50ID0gTnVtYmVyKGAke2l9MGAgLSAxMCk7XG5cbiAgICAgICAgY29uc3QgZWxlbWVudDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAke2dyaWR9IGRpdjpudGgtY2hpbGQoJHtub2RlUG9pbnQgKyBpbmNyZW1lbnQgKyAxfSlgXG4gICAgICAgICk7XG4gICAgICAgIGlmIChib2FyZCA9PT0gXCJnYW1lQm9hcmRQbGF5ZXIxXCIpIHtcbiAgICAgICAgICBjb2xvclNoaXBzKGVsZW1lbnQxLCBzaGlwKTtcbiAgICAgICAgICBjb2xvclNoaXBzKGVsZW1lbnQyLCBzaGlwKTtcbiAgICAgICAgfVxuICAgICAgICBnYW1lW2JvYXJkXS5wbGFjZVNoaXAoeCwgeSwgZGlyZWN0aW9uLCBnYW1lW2JvYXJkXVtzaGlwXS5sZW5ndGgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjb2xvclNoaXBzKGVsZW1lbnQsIHNoaXApIHtcbiAgY29uc3QgY2FycmllciA9IFwiI2IzMDAwMFwiO1xuICBjb25zdCBiYXR0bGVzaGlwID0gXCIjZTY4YTAwXCI7XG4gIGNvbnN0IGNydWlzZXIgPSBcIiMwMDgwMDBcIjtcbiAgY29uc3Qgc3VibWFyaW5lID0gXCIjMDAwMGIzXCI7XG4gIGNvbnN0IGRlc3Ryb3llciA9IFwiI2U2ZTYwMFwiO1xuXG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2Ugc2hpcCA9PT0gXCJjYXJyaWVyXCI6XG4gICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNhcnJpZXI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIHNoaXAgPT09IFwiYmF0dGxlc2hpcFwiOlxuICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBiYXR0bGVzaGlwO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBzaGlwID09PSBcImNydWlzZXJcIjpcbiAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY3J1aXNlcjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2Ugc2hpcCA9PT0gXCJzdWJtYXJpbmVcIjpcbiAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gc3VibWFyaW5lO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBzaGlwID09PSBcImRlc3Ryb3llclwiOlxuICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBkZXN0cm95ZXI7XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5mdW5jdGlvbiBjb2xvckNvbXB1dGVyU2hpcHMoZ2FtZSkge1xuICBnYW1lLmdhbWVCb2FyZENvbXB1dGVyLmdhbWVCb2FyZC5mb3JFYWNoKChyb3csIGluZGV4KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBsZXQgZGl2ID0gdW5kZWZpbmVkO1xuXG4gICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgY2FzZSByb3dbaV0gPT09IDU6XG4gICAgICAgICAgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGBkaXYuY29tcHV0ZXJHcmlkIFtkYXRhPVwiJHtpbmRleH0ke2l9XCJdYFxuICAgICAgICAgICk7XG4gICAgICAgICAgY29sb3JTaGlwcyhkaXYsIFwiY2FycmllclwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSByb3dbaV0gPT09IDQ6XG4gICAgICAgICAgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGBkaXYuY29tcHV0ZXJHcmlkIFtkYXRhPVwiJHtpbmRleH0ke2l9XCJdYFxuICAgICAgICAgICk7XG4gICAgICAgICAgY29sb3JTaGlwcyhkaXYsIFwiYmF0dGxlc2hpcFwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSByb3dbaV0gPT09IDM6XG4gICAgICAgICAgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGBkaXYuY29tcHV0ZXJHcmlkIFtkYXRhPVwiJHtpbmRleH0ke2l9XCJdYFxuICAgICAgICAgICk7XG4gICAgICAgICAgY29sb3JTaGlwcyhkaXYsIFwiY3J1aXNlclwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSByb3dbaV0gPT09IDI6XG4gICAgICAgICAgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGBkaXYuY29tcHV0ZXJHcmlkIFtkYXRhPVwiJHtpbmRleH0ke2l9XCJdYFxuICAgICAgICAgICk7XG4gICAgICAgICAgY29sb3JTaGlwcyhkaXYsIFwic3VibWFyaW5lXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHJvd1tpXSA9PT0gMTpcbiAgICAgICAgICBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYGRpdi5jb21wdXRlckdyaWQgW2RhdGE9XCIke2luZGV4fSR7aX1cIl1gXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb2xvclNoaXBzKGRpdiwgXCJkZXN0cm95ZXJcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dGFjayhnYW1lLCBpdGVtKSB7XG4gIHBsYWNlWG9uU2NyZWVuKGl0ZW0sIFwiY29tcHV0ZXJHcmlkXCIpO1xuICBjb25zdCBpdGVtVG9BdHRhY2sgPSBpdGVtLnNwbGl0KFwiXCIpO1xuICBjb25zdCB4ID0gTnVtYmVyKGl0ZW1Ub0F0dGFja1swXSk7XG4gIGNvbnN0IHkgPSBOdW1iZXIoaXRlbVRvQXR0YWNrWzFdKTtcblxuICBpZiAoZ2FtZS5nYW1lQm9hcmRDb21wdXRlci5nYW1lQm9hcmRbeF1beV0gIT09IFwieFwiKSB7XG4gICAgZ2FtZS5wbGF5ZXIxLnBsYXllckF0dGFjayh4LCB5KTtcbiAgICBpZiAoZ2FtZS5jaGVja0lmR2FtZU92ZXIoKSkge1xuICAgICAgc3RhdHVzYmFyLnRleHRDb250ZW50ID0gZ2FtZS5jaGVja0lmR2FtZU92ZXIoKTtcbiAgICAgIGNvbG9yQ29tcHV0ZXJTaGlwcyhnYW1lKTtcbiAgICB9XG4gICAgY29uc3QgY29vcmRpbmF0ZUNvbXB1dGVyQXR0YWNrID0gZ2FtZS5jb21wdXRlci5jb21wdXRlckF0dGFjaygpO1xuXG4gICAgcGxhY2VYb25TY3JlZW4oY29vcmRpbmF0ZUNvbXB1dGVyQXR0YWNrLCBcInBsYXllckdyaWRcIik7XG4gICAgaWYgKGdhbWUuY2hlY2tJZkdhbWVPdmVyKCkpIHtcbiAgICAgIHN0YXR1c2Jhci50ZXh0Q29udGVudCA9IGdhbWUuY2hlY2tJZkdhbWVPdmVyKCk7XG4gICAgICBjb2xvckNvbXB1dGVyU2hpcHMoZ2FtZSk7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkTGlzdGVuZXIoKSB7XG4gIGNvbXB1dGVyR3JpZEVsZW1lbnRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB3YWl0KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHdhaXQoaXRlbSkge1xuICBjb25zdCBpdGVtVG9BdHRhY2sgPSBpdGVtLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhXCIpO1xuXG4gIGF0dGFjayhuZXdHYW1lLCBpdGVtVG9BdHRhY2spO1xufVxuXG5mdW5jdGlvbiByZW1vdmUoKSB7XG4gIGNvbXB1dGVyR3JpZEVsZW1lbnRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB3YWl0KTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcC5qc1wiO1xuXG5leHBvcnQgY2xhc3MgR2FtZUJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5nYW1lQm9hcmQgPSBbXTtcbiAgICB0aGlzLmNhcnJpZXIgPSBuZXcgU2hpcCg1KTtcbiAgICB0aGlzLmJhdHRsZXNoaXAgPSBuZXcgU2hpcCg0KTtcbiAgICB0aGlzLmNydWlzZXIgPSBuZXcgU2hpcCgzKTtcbiAgICB0aGlzLnN1Ym1hcmluZSA9IG5ldyBTaGlwKDIpO1xuICAgIHRoaXMuZGVzdHJveWVyID0gbmV3IFNoaXAoMSk7XG4gICAgdGhpcy5teVR1cm4gPSBmYWxzZTtcbiAgfVxuICBuZXdHYW1lYm9hcmQgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICB0aGlzLmdhbWVCb2FyZC5wdXNoKEFycmF5KDEwKS5maWxsKDApKTtcbiAgICB9XG4gIH07XG5cbiAgY2hhbmdlVHVybigpIHtcbiAgICB0aGlzLm15VHVybiA9IGZhbHNlO1xuICB9XG5cbiAgcGxhY2VTaGlwKHgsIHksIGRpcmVjdGlvbiwgbGVuZ3RoKSB7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGlmICh0aGlzLmdhbWVCb2FyZFt4XS5zbGljZSh5LCB5ICsgbGVuZ3RoKS5ldmVyeSgoaXRlbSkgPT4gaXRlbSA9PT0gMCkpIHtcbiAgICAgICAgdGhpcy5nYW1lQm9hcmRbeF0uZmlsbChsZW5ndGgsIHksIHkgKyBsZW5ndGgpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGlmICh0aGlzLmNoZWNrSWZCb2FyZEVtcHR5KHgsIHksIGxlbmd0aCkgPT09IHRydWUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMuZ2FtZUJvYXJkW3hdW3ldID0gbGVuZ3RoO1xuICAgICAgICAgIHRoaXMuZ2FtZUJvYXJkW3ggKyBpXVt5XSA9IGxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNoZWNrSWZCb2FyZEVtcHR5KHgsIHksIGxlbmd0aCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmdhbWVCb2FyZFt4XVt5XSAhPT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZ2FtZUJvYXJkW3ggKyBpXVt5XSAhPT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgaWYgKHRoaXMubXlUdXJuID09PSBmYWxzZSkge1xuICAgICAgaWYgKHRoaXMuZ2FtZUJvYXJkW3hdW3ldICE9PSAwKSB7XG4gICAgICAgIHRoaXMuY2hlY2tTaGlwVHlwZSh4LCB5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkW3hdW3ldID0gXCJ4XCI7XG4gICAgICB9XG4gICAgICB0aGlzLm15VHVybiA9IHRydWU7XG4gICAgICB0aGlzLmNoZWNrSWZBbGxTaGlwc1N1bmsoKTtcbiAgICB9XG4gIH1cblxuICBjaGVja1NoaXBUeXBlKHgsIHkpIHtcbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgIGNhc2UgdGhpcy5nYW1lQm9hcmRbeF1beV0gPT09IDU6XG4gICAgICAgIHRoaXMuY2Fycmllci5oaXQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRoaXMuZ2FtZUJvYXJkW3hdW3ldID09PSA0OlxuICAgICAgICB0aGlzLmJhdHRsZXNoaXAuaGl0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0aGlzLmdhbWVCb2FyZFt4XVt5XSA9PT0gMzpcbiAgICAgICAgdGhpcy5jcnVpc2VyLmhpdCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdGhpcy5nYW1lQm9hcmRbeF1beV0gPT09IDI6XG4gICAgICAgIHRoaXMuc3VibWFyaW5lLmhpdCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdGhpcy5nYW1lQm9hcmRbeF1beV0gPT09IDE6XG4gICAgICAgIHRoaXMuZGVzdHJveWVyLmhpdCgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBjaGVja0lmQWxsU2hpcHNTdW5rKCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMuY2Fycmllci5pc1N1bmsoKSAmJlxuICAgICAgdGhpcy5iYXR0bGVzaGlwLmlzU3VuaygpICYmXG4gICAgICB0aGlzLmNydWlzZXIuaXNTdW5rKCkgJiZcbiAgICAgIHRoaXMuc3VibWFyaW5lLmlzU3VuaygpICYmXG4gICAgICB0aGlzLmRlc3Ryb3llci5pc1N1bmsoKVxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IHsgR2FtZUJvYXJkIH0gZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdhbWVMb29wKCkge1xuICBjb25zdCBnYW1lQm9hcmRQbGF5ZXIxID0gbmV3IEdhbWVCb2FyZCgpO1xuICBjb25zdCBnYW1lQm9hcmRDb21wdXRlciA9IG5ldyBHYW1lQm9hcmQoKTtcbiAgZ2FtZUJvYXJkQ29tcHV0ZXIubmV3R2FtZWJvYXJkKCk7XG4gIGdhbWVCb2FyZFBsYXllcjEubmV3R2FtZWJvYXJkKCk7XG5cbiAgY29uc3QgcGxheWVyMSA9IG5ldyBQbGF5ZXIoZ2FtZUJvYXJkQ29tcHV0ZXIsIGdhbWVCb2FyZFBsYXllcjEpO1xuICBjb25zdCBjb21wdXRlciA9IG5ldyBQbGF5ZXIoZ2FtZUJvYXJkUGxheWVyMSwgZ2FtZUJvYXJkQ29tcHV0ZXIpO1xuXG4gIGlmIChnYW1lQm9hcmRQbGF5ZXIxLm15VHVybiA9PT0gZmFsc2UpIHtcbiAgICBnYW1lQm9hcmRQbGF5ZXIxLm15VHVybiA9IHRydWU7XG4gICAgZ2FtZUJvYXJkQ29tcHV0ZXIubXlUdXJuID0gZmFsc2U7XG4gIH1cblxuICBjb25zdCBjaGVja0lmR2FtZU92ZXIgPSAoKSA9PiB7XG4gICAgbGV0IHdpbm5lciA9IHVuZGVmaW5lZDtcbiAgICBpZiAoZ2FtZUJvYXJkUGxheWVyMS5jaGVja0lmQWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgIHdpbm5lciA9IFwiQ29tcHV0ZXIgd2luc1wiO1xuICAgIH0gZWxzZSBpZiAoZ2FtZUJvYXJkQ29tcHV0ZXIuY2hlY2tJZkFsbFNoaXBzU3VuaygpKSB7XG4gICAgICB3aW5uZXIgPSBcIllvdSB3aW4hXCI7XG4gICAgfVxuICAgIHJldHVybiB3aW5uZXI7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwbGF5ZXIxLFxuICAgIGNvbXB1dGVyLFxuICAgIGdhbWVCb2FyZFBsYXllcjEsXG4gICAgZ2FtZUJvYXJkQ29tcHV0ZXIsXG4gICAgY2hlY2tJZkdhbWVPdmVyLFxuICB9O1xufVxuIiwiaW1wb3J0IHsgR2FtZUJvYXJkIH0gZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihlbmVteSwgb3duQm9hcmQpIHtcbiAgICB0aGlzLmVuZW15ID0gZW5lbXk7XG4gICAgdGhpcy5vd25Cb2FyZCA9IG93bkJvYXJkO1xuICAgIHRoaXMudXNlZENvb3JkaW5hdGVzID0gW107XG4gIH1cblxuICBwbGF5ZXJBdHRhY2soeCwgeSkge1xuICAgIHRoaXMuZW5lbXkucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICB0aGlzLm93bkJvYXJkLmNoYW5nZVR1cm4oKTtcbiAgfVxuXG4gIGNvbXB1dGVyQXR0YWNrKCkge1xuICAgIGxldCBjb29yZGluYXRlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcblxuICAgIHdoaWxlICh0aGlzLnVzZWRDb29yZGluYXRlcy5pbmNsdWRlcyhjb29yZGluYXRlKSkge1xuICAgICAgY29vcmRpbmF0ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgfVxuICAgIHRoaXMudXNlZENvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZSk7XG5cbiAgICBsZXQgeCA9IE51bWJlcihjb29yZGluYXRlLnRvU3RyaW5nKCkuc3BsaXQoXCJcIilbMF0pO1xuICAgIGxldCB5ID0gTnVtYmVyKGNvb3JkaW5hdGUudG9TdHJpbmcoKS5zcGxpdChcIlwiKVsxXSk7XG5cbiAgICBpZiAoY29vcmRpbmF0ZSA8IDEwKSB7XG4gICAgICB0aGlzLmVuZW15LnJlY2VpdmVBdHRhY2soMCwgeCk7XG4gICAgfSBlbHNlIGlmIChjb29yZGluYXRlID09PSAxMCkge1xuICAgICAgdGhpcy5lbmVteS5yZWNlaXZlQXR0YWNrKDEsIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVuZW15LnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgfVxuICAgIHRoaXMub3duQm9hcmQuY2hhbmdlVHVybigpO1xuXG4gICAgcmV0dXJuIGNvb3JkaW5hdGU7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy50aW1lc0hpdCA9IG51bGw7XG4gICAgdGhpcy5zdW5rID0gbnVsbDtcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICB0aGlzLnRpbWVzSGl0ICs9IDE7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSB0aGlzLnRpbWVzSGl0KSB7XG4gICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=