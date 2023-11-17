/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n    --primary : #fffbeb;\n    --secondary : #0a0a0a;\n    --accent : #a3e635;\n}\n\nbody { \n    margin : 0;\n    background-color: var(--primary);\n}\n\n.button {\n    padding : 16px;\n    background-color: var(--accent);\n    color: var(--secondary);\n    border: none;\n    border-radius: 24px;\n    font-weight: 700;\n\n    transition: 400ms;\n}\n\n.button:hover {\n    transform: translateY(-4px);\n}\n\n.content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 32px;\n    width: 100%;\n}\n\n#nav-container {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    padding: 24px;\n}\n\n.button-group {\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n}\n\n\n\n.link-button {\n    background-color: var(--primary);\n    color: var(--secondary);\n    border: none;\n    font-size: 16px;\n    font-weight: 700;\n    transition: 400ms;\n}\n\n.link-button:hover {\n    transform: translateY(-4px);\n}\n\n#top-div {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n}\n\n.form-div {\n    width: 100%;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}   \n\n.form-input {\n    border: none;\n    outline: none;\n    border-bottom: 1px solid var(--secondary);\n    background-color: var(--primary);\n    height: 2rem;\n    width: 15rem;\n    transition: 400ms;\n}\n\n.form-input:focus {\n    border: none;\n    border-bottom: 1px solid var(--accent);\n}\n\n#project-selector-div {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    gap: 64px;\n    align-items: center;\n}\n\n.todo-list {\n    display : flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 32px;\n    width: 90%;\n}\n\n.task {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-project/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-project/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/createProjectFromInput.js":
/*!***************************************!*\
  !*** ./src/createProjectFromInput.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProjectFromInput: () => (/* binding */ createProjectFromInput)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\nfunction getProjectName() {\n    const projectNameInputValue = document.querySelector('#pName-input').value;\n    return projectNameInputValue;\n}\n\nfunction getProjectColor() {\n    const projectColorValue = document.querySelector('#pColor-input').value;\n    return projectColorValue;\n}\n\nfunction createProjectFromInput(uid) {\n    const newProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__.createNewProject)(uid,getProjectName(),getProjectColor());\n    return newProject;\n}\n\n\n\n//# sourceURL=webpack://todo-project/./src/createProjectFromInput.js?");

/***/ }),

/***/ "./src/createTaskFromInput.js":
/*!************************************!*\
  !*** ./src/createTaskFromInput.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTaskFromInput: () => (/* binding */ createTaskFromInput)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\nfunction getTitleFromInput() {\n    const titleValue = document.querySelector('#title-input').value;\n    return titleValue;\n}\n\nfunction getDue() {\n    const dueValue = document.querySelector('#due-input').value;\n    return dueValue;\n}\n\nfunction getDesc() {\n    const descValue = document.querySelector('#desc-input').value;\n    return descValue;\n}\n\nfunction getPriority() {\n    const priorityValue = document.querySelector('#priority-input').value;\n    return priorityValue;\n}\n\nfunction getProject() {\n    const projectValue = document.querySelector('#project-input').value;\n    return projectValue;\n}\n\nfunction createTaskFromInput(uid) {\n    const newTask = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.createNewToDo)(getProject(),uid,getTitleFromInput(),getDue(),getDesc(),getPriority(),false);\n    return newTask;\n}\n\n\n\n//# sourceURL=webpack://todo-project/./src/createTaskFromInput.js?");

/***/ }),

/***/ "./src/createTodoElement.js":
/*!**********************************!*\
  !*** ./src/createTodoElement.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createNewTaskDisplay: () => (/* binding */ createNewTaskDisplay)\n/* harmony export */ });\nfunction createTaskTitleUI(taskTitle) {\n    let newTaskTitle = document.createElement('div');\n    newTaskTitle.innerHTML = taskTitle;\n    return newTaskTitle;\n}\n\nfunction createTaskDueUI(taskDueDate) {\n    let newTaskDueDate = document.createElement('div');\n    newTaskDueDate.innerHTML = taskDueDate;\n    return newTaskDueDate;\n}\n\nfunction createTaskDescription(taskDescription) {\n    let newTaskDescription = document.createElement('div');\n    newTaskDescription.innerHTML = taskDescription;\n    return newTaskDescription;\n}\n\nfunction createTaskPriority(taskPriority) {\n    let newTaskPriority = document.createElement('div');\n    if(taskPriority == 1) {\n        newTaskPriority.innerHTML = \"High\";\n    } else if(taskPriority == 2) {\n        newTaskPriority.innerHTML = \"Medium\";\n    } else {\n        newTaskPriority.innerHTML = \"Low\";\n    }\n    return newTaskPriority;\n}\n\nfunction createTaskButtonGroup(uid) {\n    let newTaskButtonGroup = document.createElement('div');\n    \n    let deleteButton = document.createElement('button');\n    deleteButton.id = \"task-del-button\";\n    deleteButton.setAttribute('data-id',uid);\n    deleteButton.innerHTML = \"Delete\";\n    newTaskButtonGroup.appendChild(deleteButton);\n\n    let completeButton = document.createElement('button');\n    completeButton.innerHTML = \"Complete\";\n    completeButton.setAttribute('data-id',uid);\n    completeButton.id = \"task-comp-button\";\n    newTaskButtonGroup.appendChild(completeButton);\n\n    return newTaskButtonGroup;\n}\n\n\nfunction createNewTaskDisplay(task) {\n    let newTask = document.createElement('div');\n    newTask.classList.add('task')\n        \n    const newTaskTitle = createTaskTitleUI(task.getTitle());\n    newTask.appendChild(newTaskTitle);\n    \n    const newTaskDueDate = createTaskDueUI(task.getDueDate());\n    newTask.appendChild(newTaskDueDate);\n\n    const newTaskDescription = createTaskDescription(task.getDescription());\n    newTask.appendChild(newTaskDescription);\n\n    const newTaskPriority = createTaskPriority(task.getPriority());\n    newTask.appendChild(newTaskPriority);\n\n    if(task.getIsComplete() == true) {\n        newTask.style.color = \"red\";\n    }\n\n    const buttonGroup = createTaskButtonGroup(task.getUID());\n    newTask.appendChild(buttonGroup);\n\n    return newTask;\n}\n\n\n\n//# sourceURL=webpack://todo-project/./src/createTodoElement.js?");

/***/ }),

/***/ "./src/createUIElement.js":
/*!********************************!*\
  !*** ./src/createUIElement.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formGenInstance: () => (/* binding */ formGenInstance),\n/* harmony export */   uiGenInstance: () => (/* binding */ uiGenInstance)\n/* harmony export */ });\n/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectList */ \"./src/projectList.js\");\n\n\nclass UIGen {\n    constructor() {\n\n    }\n\n    createButton(idName, text) {\n        let newButton = document.createElement('button');\n        newButton.classList.add('button');\n        newButton.id = idName;\n        newButton.innerHTML = text;\n        return newButton;\n    }\n    \n    createLinkButton(idName,text) {\n        let newButton = document.createElement('button');\n        newButton.classList.add('link-button');\n        newButton.id = idName;\n        newButton.innerHTML = text;\n        return newButton;\n    }\n\n    createContainerDiv(idName) {\n        let newContainerDiv = document.createElement('div');\n        newContainerDiv.classList.add('container');\n        newContainerDiv.id = idName;\n        return newContainerDiv;\n    }\n\n    createGeneralDiv(className,idName) {\n        let newGeneralDiv = document.createElement('div');\n        newGeneralDiv.classList.add(className);\n        newGeneralDiv.id = idName;\n        return newGeneralDiv;\n    }\n\n    createInput(id,type,placeholder) {\n        let newInput = document.createElement('input');\n        newInput.classList.add('form-input');\n        newInput.id = id;\n        newInput.type = type;\n        if(placeholder) {\n            newInput.placeholder = placeholder;\n        }\n        return newInput;\n    }\n\n    createPrioritySelector() {\n        let taskPriorityInput = document.createElement('select');\n        taskPriorityInput.id = 'priority-input';\n        taskPriorityInput.classList.add('form-input');\n\n        let taskPriorityOption1 = document.createElement('option');\n        taskPriorityOption1.value = 1;\n        taskPriorityOption1.innerHTML = \"High\";\n        taskPriorityInput.appendChild(taskPriorityOption1);\n\n        let taskPriorityOption2 = document.createElement('option');\n        taskPriorityOption2.value = 2;\n        taskPriorityOption2.innerHTML = \"Medium\";\n        taskPriorityInput.appendChild(taskPriorityOption2);\n\n        let taskPriorityOption3 = document.createElement('option');\n        taskPriorityOption3.value = 3;\n        taskPriorityOption3.innerHTML = \"Low\";\n        taskPriorityInput.appendChild(taskPriorityOption3);\n\n        return taskPriorityInput;\n    }\n\n    createProjectSelector() {\n        let projectSelector = document.createElement('select');\n        projectSelector.classList.add('form-input');\n        projectSelector.classList.add('selector');\n        projectSelector.name = \"project-selector\";\n        projectSelector.id = 'project-input';\n\n        const projects = Array.from(_projectList__WEBPACK_IMPORTED_MODULE_0__.projectListInstance.getProjectList());\n        for(let i=0; i<projects.length;i++) {\n            let projectOption = document.createElement('option');\n            projectOption.value = projects[i].getProjectName();\n            projectOption.innerHTML = projects[i].getProjectName();\n            projectSelector.appendChild(projectOption);\n        }\n\n        return projectSelector;\n    }\n\n    createColorSelector() {\n        let projectColorInput = document.createElement('select');\n        projectColorInput.id = 'pColor-input';\n        projectColorInput.classList.add('form-input');\n        \n        let pco1 = document.createElement('option');\n        pco1.value = \"blue\";\n        pco1.innerHTML = \"Blue\";\n        projectColorInput.appendChild(pco1);\n\n        let pco2 = document.createElement('option');\n        pco2.value = \"green\";\n        pco2.innerHTML = \"Green\";\n        projectColorInput.appendChild(pco2);\n\n        let pco3 = document.createElement('option');\n        pco3.value = \"red\";\n        pco3.innerHTML = \"Red\";\n        projectColorInput.appendChild(pco3);\n\n        return projectColorInput;\n    }\n}\n\nconst uiGenInstance = new UIGen;\n\nclass FormGen {\n    constructor() {\n\n    }\n\n    createTaskForm() {\n        let taskFormDiv = document.createElement('div');\n        taskFormDiv.classList.add('form-div');\n    \n        let taskTitleInput = uiGenInstance.createInput('title-input','text',\"Title\");\n        taskFormDiv.appendChild(taskTitleInput);\n    \n        let taskDueInput = uiGenInstance.createInput('due-input','date');\n        taskFormDiv.appendChild(taskDueInput);\n    \n        let taskDescriptionInput = uiGenInstance.createInput('desc-input','text','Description');\n        taskFormDiv.appendChild(taskDescriptionInput);\n    \n        \n        taskFormDiv.appendChild(uiGenInstance.createPrioritySelector());\n    \n        let taskProjectInput = uiGenInstance.createProjectSelector();\n        taskFormDiv.appendChild(taskProjectInput);\n    \n        let taskCreateButton = uiGenInstance.createButton('create-task-button',\"Create\");\n        taskFormDiv.appendChild(taskCreateButton);\n    \n        return taskFormDiv;\n    }\n\n    createProjectForm() {\n        let projectForm = document.createElement('div');\n        projectForm.classList.add('form-div');\n    \n        let projectNameInput = uiGenInstance.createInput('pName-input','text','Project Name');\n        projectForm.appendChild(projectNameInput);\n    \n        projectForm.appendChild(uiGenInstance.createColorSelector());\n    \n        let projectCreateButton = uiGenInstance.createButton('create-project-button','Create Project');\n        projectForm.appendChild(projectCreateButton);\n    \n        return projectForm;\n    }\n}\n\nconst formGenInstance = new FormGen;\n\n\n//# sourceURL=webpack://todo-project/./src/createUIElement.js?");

/***/ }),

/***/ "./src/errorHandler.js":
/*!*****************************!*\
  !*** ./src/errorHandler.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectErrorObject: () => (/* binding */ projectErrorObject),\n/* harmony export */   taskErrorObject: () => (/* binding */ taskErrorObject)\n/* harmony export */ });\nclass taskErrors {\n    constructor() {\n\n    }\n\n    notTaskError() {\n        console.log(\"Tried inserting an item that was not class todo into the task list\");\n    }\n\n    taskNotFound() {\n        console.log(\"task with the required UID not found\");\n    }\n\n    wrongIsCompleteID() {\n        console.log(\"wrong data value has been provided to set the is complete for a task\")\n    }\n}\n\nclass projectErrors {\n    constructor() {\n\n    }\n\n    notProjectError() {\n        console.log(\"Tried inserting an item that was not a project into project list\");\n    }\n}\n\nconst taskErrorObject = new taskErrors;\nconst projectErrorObject = new projectErrors\n\n\n\n//# sourceURL=webpack://todo-project/./src/errorHandler.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoList */ \"./src/todoList.js\");\n/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectList */ \"./src/projectList.js\");\n/* harmony import */ var _initializePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./initializePage */ \"./src/initializePage.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst p1 = (0,_project__WEBPACK_IMPORTED_MODULE_1__.createNewProject)(_projectList__WEBPACK_IMPORTED_MODULE_3__.projectListInstance.getCurrentProjectCounter(),\"Cats\",\"Blue\");\n_projectList__WEBPACK_IMPORTED_MODULE_3__.projectListInstance.projectListAppend(p1);\n\nconst p2 = (0,_project__WEBPACK_IMPORTED_MODULE_1__.createNewProject)(_projectList__WEBPACK_IMPORTED_MODULE_3__.projectListInstance.getCurrentProjectCounter(),\"Project 2\",\"Green\");\n_projectList__WEBPACK_IMPORTED_MODULE_3__.projectListInstance.projectListAppend(p2);\nconsole.log(_projectList__WEBPACK_IMPORTED_MODULE_3__.projectListInstance.getProjectList());\n\n\n\n\n\nconst t1 = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.createNewToDo)(p1.getProjectName(),_todoList__WEBPACK_IMPORTED_MODULE_2__.taskListInstance.getCurrentCounter(),\"Test\",\"Test\",\"Test\",2, true);\n_todoList__WEBPACK_IMPORTED_MODULE_2__.taskListInstance.taskListAppend(t1);\nconst t2 = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.createNewToDo)(p1.getProjectName(),_todoList__WEBPACK_IMPORTED_MODULE_2__.taskListInstance.getCurrentCounter(),\"Miaw\",\"Test\",\"Test\",1, false);\n_todoList__WEBPACK_IMPORTED_MODULE_2__.taskListInstance.taskListAppend(t2);\n\nconsole.log(_todoList__WEBPACK_IMPORTED_MODULE_2__.taskListInstance.getTaskList());\n\nconsole.log(_todoList__WEBPACK_IMPORTED_MODULE_2__.taskListInstance.getTasksOfProject(\"Cats\"));\n\n(0,_initializePage__WEBPACK_IMPORTED_MODULE_4__.initializePage)();\n\n\n//# sourceURL=webpack://todo-project/./src/index.js?");

/***/ }),

/***/ "./src/initEventListeners.js":
/*!***********************************!*\
  !*** ./src/initEventListeners.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formListenerInstance: () => (/* binding */ formListenerInstance),\n/* harmony export */   navListenerInstnace: () => (/* binding */ navListenerInstnace),\n/* harmony export */   selectProjectListenerInstance: () => (/* binding */ selectProjectListenerInstance),\n/* harmony export */   taskHandlerListenerInstance: () => (/* binding */ taskHandlerListenerInstance)\n/* harmony export */ });\n/* harmony import */ var _updatePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updatePage */ \"./src/updatePage.js\");\n/* harmony import */ var _taskFunctionality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskFunctionality */ \"./src/taskFunctionality.js\");\n\n\n\nclass SelectProjectListener {\n    constructor() {}\n\n    addSelectEventListner() {\n        const getTaskButton = document.querySelector('#selector-button');\n        getTaskButton.addEventListener('click', _updatePage__WEBPACK_IMPORTED_MODULE_0__.updateTodoPage);\n    }\n}\n\nclass TaskHandlingListener {\n    constructor() {}\n    \n    addDeleteTaskEventListener() {\n        const delButtons = Array.from(document.querySelectorAll('#task-del-button'));\n        for(let i=0;i<delButtons.length;i++) {\n            delButtons[i].addEventListener('click',_taskFunctionality__WEBPACK_IMPORTED_MODULE_1__.deleteTask);\n        }   \n    }\n\n    addCompleteTaskEventListener() {\n        const completeButtons = Array.from(document.querySelectorAll('#task-comp-button'));\n        for(let i=0;i<completeButtons.length;i++) {\n            completeButtons[i].addEventListener('click',_taskFunctionality__WEBPACK_IMPORTED_MODULE_1__.taskComplete);\n        }\n    }\n\n}\n\nclass formListener {\n    constructor() {}\n\n    addTaskEventListener() {\n        const createTaskButton = document.querySelector('#create-task-button');\n        createTaskButton.addEventListener('click',_taskFunctionality__WEBPACK_IMPORTED_MODULE_1__.addNewTask);\n    }\n\n\n    addProjectEventListener() {\n        const createProjectButton = document.querySelector('#create-project-button');\n        createProjectButton.addEventListener('click',_taskFunctionality__WEBPACK_IMPORTED_MODULE_1__.addNewProject);\n    }\n}\n\nclass NavigationHandlingListener {\n    constructor() {}\n\n    addTaskFormListener() {\n        let switchTaskButton = document.querySelector('#task-nav');\n        switchTaskButton.addEventListener('click',_updatePage__WEBPACK_IMPORTED_MODULE_0__.loadTaskForm);\n    }\n\n    addProjectFormListener() {\n        let switchProjectButton = document.querySelector('#project-nav');\n        switchProjectButton.addEventListener('click',_updatePage__WEBPACK_IMPORTED_MODULE_0__.loadProjectForm);\n    }\n}\n\nconst taskHandlerListenerInstance = new TaskHandlingListener;\nconst selectProjectListenerInstance = new SelectProjectListener;\nconst navListenerInstnace = new NavigationHandlingListener;\nconst formListenerInstance = new formListener\n\n\n\n//# sourceURL=webpack://todo-project/./src/initEventListeners.js?");

/***/ }),

/***/ "./src/initializePage.js":
/*!*******************************!*\
  !*** ./src/initializePage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initializePage: () => (/* binding */ initializePage)\n/* harmony export */ });\n/* harmony import */ var _createUIElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createUIElement */ \"./src/createUIElement.js\");\n/* harmony import */ var _initEventListeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initEventListeners */ \"./src/initEventListeners.js\");\n\n\n\n\n\nfunction initializeNavBar() {\n    let navContainer = _createUIElement__WEBPACK_IMPORTED_MODULE_0__.uiGenInstance.createContainerDiv(\"nav-container\");\n    let navButtonGroup = _createUIElement__WEBPACK_IMPORTED_MODULE_0__.uiGenInstance.createGeneralDiv(\"button-group\",\"nav-button-group\");\n    const navButtonTask = _createUIElement__WEBPACK_IMPORTED_MODULE_0__.uiGenInstance.createLinkButton(\"task-nav\",\"Create A Task\");\n    navButtonGroup.appendChild(navButtonTask);\n    const navButtonproject = _createUIElement__WEBPACK_IMPORTED_MODULE_0__.uiGenInstance.createLinkButton(\"project-nav\",\"Create A Project\");\n    navButtonGroup.appendChild(navButtonproject);\n    navContainer.appendChild(navButtonGroup);\n    return navContainer;\n}\n\nfunction initializeTopDiv() {\n    let topDiv = _createUIElement__WEBPACK_IMPORTED_MODULE_0__.uiGenInstance.createContainerDiv(\"top-div\");\n    topDiv.appendChild(_createUIElement__WEBPACK_IMPORTED_MODULE_0__.formGenInstance.createTaskForm());\n    return topDiv;\n}\n\nfunction initializeSelector() {\n    let projectSelectorDiv = _createUIElement__WEBPACK_IMPORTED_MODULE_0__.uiGenInstance.createContainerDiv(\"project-selector-div\");\n    let projectSelector = _createUIElement__WEBPACK_IMPORTED_MODULE_0__.uiGenInstance.createProjectSelector();\n    projectSelector.id = \"list-project-selector\";\n    projectSelectorDiv.appendChild(projectSelector);\n\n    const selectorButton = _createUIElement__WEBPACK_IMPORTED_MODULE_0__.uiGenInstance.createButton('selector-button','Select');\n    projectSelectorDiv.appendChild(selectorButton);\n\n    return projectSelectorDiv;\n}\n\nfunction initializeTaskContainer() {\n    let todoDiv = document.createElement('div');\n    todoDiv.classList.add('todo-list');\n    todoDiv.innerHTML = \"No Chapter Selected\";\n    return todoDiv;\n}\n\nfunction initHomePageListener() {\n    _initEventListeners__WEBPACK_IMPORTED_MODULE_1__.selectProjectListenerInstance.addSelectEventListner();\n    _initEventListeners__WEBPACK_IMPORTED_MODULE_1__.navListenerInstnace.addProjectFormListener();\n    _initEventListeners__WEBPACK_IMPORTED_MODULE_1__.navListenerInstnace.addTaskFormListener();\n    _initEventListeners__WEBPACK_IMPORTED_MODULE_1__.formListenerInstance.addTaskEventListener();\n}\n\nfunction initializePage() {\n    let contentDiv = document.querySelector('.content');\n    contentDiv.appendChild(initializeNavBar());\n    contentDiv.appendChild(initializeTopDiv());\n    contentDiv.appendChild(initializeSelector());\n    contentDiv.appendChild(initializeTaskContainer());\n    initHomePageListener();\n}\n\n\n\n//# sourceURL=webpack://todo-project/./src/initializePage.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkIfProject: () => (/* binding */ checkIfProject),\n/* harmony export */   createNewProject: () => (/* binding */ createNewProject)\n/* harmony export */ });\nclass project {\n    constructor(uid, projectName, projectColor) {\n        this.uid = uid;\n        this.projectName = projectName;\n        this.projectColor = projectColor;\n    }\n\n    getProjectName() {\n        return this.projectName;\n    }\n\n    getProjectColor() {\n        return this.projectColor;\n    }\n}\n\nfunction createNewProject(uid,projectName, projectColor) {\n    const newProject = new project(uid, projectName,projectColor);\n    return newProject;\n}\n\nfunction checkIfProject(p) {\n    if(p instanceof project) {\n        return true;\n    }\n    return false;\n}\n\n\n\n//# sourceURL=webpack://todo-project/./src/project.js?");

/***/ }),

/***/ "./src/projectList.js":
/*!****************************!*\
  !*** ./src/projectList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectListInstance: () => (/* binding */ projectListInstance)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _errorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errorHandler */ \"./src/errorHandler.js\");\n\n\n\nclass projectList {\n    constructor() {\n        this.projectList = [];\n        this.projectCounter = 0;\n    }\n\n    projectListAppend(project) {\n        if((0,_project__WEBPACK_IMPORTED_MODULE_0__.checkIfProject)(project)) {\n            this.projectList.push(project);\n            this.projectCounter++;\n        } else {\n            _errorHandler__WEBPACK_IMPORTED_MODULE_1__.projectErrorObject.notProjectError();\n        }\n    }\n\n    getProjectList() {\n        return this.projectList\n    }\n\n    getCurrentProjectCounter() {\n        return this.projectCounter;\n    }\n}\n\n\n//Make delete task\n\nconst projectListInstance = new projectList;\n\n\n\n//# sourceURL=webpack://todo-project/./src/projectList.js?");

/***/ }),

/***/ "./src/taskFunctionality.js":
/*!**********************************!*\
  !*** ./src/taskFunctionality.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewProject: () => (/* binding */ addNewProject),\n/* harmony export */   addNewTask: () => (/* binding */ addNewTask),\n/* harmony export */   deleteTask: () => (/* binding */ deleteTask),\n/* harmony export */   taskComplete: () => (/* binding */ taskComplete)\n/* harmony export */ });\n/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList */ \"./src/todoList.js\");\n/* harmony import */ var _updatePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updatePage */ \"./src/updatePage.js\");\n/* harmony import */ var _createTaskFromInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createTaskFromInput */ \"./src/createTaskFromInput.js\");\n/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectList */ \"./src/projectList.js\");\n/* harmony import */ var _createProjectFromInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createProjectFromInput */ \"./src/createProjectFromInput.js\");\n\n\n\n\n\n\n\nfunction addNewTask() {\n    const taskUID = _todoList__WEBPACK_IMPORTED_MODULE_0__.taskListInstance.getCurrentCounter();\n    const newTask = (0,_createTaskFromInput__WEBPACK_IMPORTED_MODULE_2__.createTaskFromInput)(taskUID);\n    _todoList__WEBPACK_IMPORTED_MODULE_0__.taskListInstance.taskListAppend(newTask);\n    (0,_updatePage__WEBPACK_IMPORTED_MODULE_1__.updateTodoPage)();\n}\n\nfunction deleteTask(e) {\n    _todoList__WEBPACK_IMPORTED_MODULE_0__.taskListInstance.deleteTask(e.target.getAttribute('data-id'));\n    (0,_updatePage__WEBPACK_IMPORTED_MODULE_1__.updateTodoPage)();\n}\n\nfunction taskComplete(e) {\n    console.log(e.target);\n    _todoList__WEBPACK_IMPORTED_MODULE_0__.taskListInstance.setComplete(e.target.getAttribute('data-id'));\n    (0,_updatePage__WEBPACK_IMPORTED_MODULE_1__.updateTodoPage)();\n}\n\nfunction addNewProject() {\n    const projectUID = _projectList__WEBPACK_IMPORTED_MODULE_3__.projectListInstance.getCurrentProjectCounter();\n    const newProject = (0,_createProjectFromInput__WEBPACK_IMPORTED_MODULE_4__.createProjectFromInput)(projectUID);\n    _projectList__WEBPACK_IMPORTED_MODULE_3__.projectListInstance.projectListAppend(newProject);\n    (0,_updatePage__WEBPACK_IMPORTED_MODULE_1__.updateTodoPage)();\n}\n\n\n\n//# sourceURL=webpack://todo-project/./src/taskFunctionality.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkIfTask: () => (/* binding */ checkIfTask),\n/* harmony export */   createNewToDo: () => (/* binding */ createNewToDo)\n/* harmony export */ });\n/* harmony import */ var _errorHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errorHandler */ \"./src/errorHandler.js\");\n\n\nclass todo {\n    constructor(project, uid, title, duedate, description, priority, isComplete) {\n        this.project = project;\n        this.uid = uid;\n        this.title = title;\n        this.duedate = duedate;\n        this.description = description;\n        this.priority = priority;\n        this.isComplete = isComplete\n    }\n\n    getUID() {\n        return this.uid;\n    }\n\n    getTitle () {\n        return this.title;\n    }\n\n    getDueDate() {\n        return this.duedate;\n    }\n\n    getDescription() {\n        return this.description;\n    }\n\n    getPriority() {\n        return this.priority;\n    }\n\n    getTaskProject() {\n        return this.project;\n    }\n\n    getIsComplete() {\n        return this.isComplete;\n    }\n\n    setIsComplete(i) {\n        if(i==true) {\n            this.isComplete = true;\n        } else if(i==false) {\n            this.isComplete = false;\n        } else {\n            _errorHandler__WEBPACK_IMPORTED_MODULE_0__.taskErrorObject.wrongIsCompleteID();\n        }\n    }\n\n};\n\nfunction createNewToDo(project, uid, title, duedate, description, priority, isComplete) {\n    const newToDo = new todo(project, uid, title, duedate, description, priority, isComplete);\n    return newToDo;\n}\n\nfunction checkIfTask(t1) {\n    if(t1 instanceof todo) {\n        return true;\n    }\n    return false;\n}\n\n\n\n//# sourceURL=webpack://todo-project/./src/todo.js?");

/***/ }),

/***/ "./src/todoList.js":
/*!*************************!*\
  !*** ./src/todoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   taskListInstance: () => (/* binding */ taskListInstance)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _errorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errorHandler */ \"./src/errorHandler.js\");\n\n\n\nclass taskList {\n    constructor() {\n        this.taskList = [];\n        this.counter = 0;\n    }\n\n\n    taskListAppend(task) {\n        if((0,_todo__WEBPACK_IMPORTED_MODULE_0__.checkIfTask)(task)) {\n            this.taskList.push(task);\n            this.counter += 1;\n        }\n        else {\n            _errorHandler__WEBPACK_IMPORTED_MODULE_1__.taskErrorObject.notTaskError();\n        }\n    }\n\n    getCurrentCounter() {\n        return this.counter;\n    }\n\n    getTaskList() {\n        return this.taskList;\n    }\n\n    getTasksOfProject(projectName) {\n        let newTaskList = [];\n    \n        for(let i=0;i<this.taskList.length;i++) {\n            if(this.taskList[i].getTaskProject()==projectName) {\n                newTaskList.push(this.taskList[i]);\n            }\n        }\n    \n        return newTaskList;\n    }\n\n    getCompleteTasksOfProject(projectName) {\n        let newTaskList = [];\n        for(let i=0;i<this.taskList.length;i++) {\n            if(this.taskList[i].getTaskProject() == projectName && this.taskList[i].getIsComplete() == true) {\n                newTaskList.push(this.taskList[i]);\n            }\n        }\n        return newTaskList;\n    }\n\n    getIncompleteTasksOfProject(projectName) {\n        let newTaskList = [];\n        for(let i=0;i<this.taskList.length;i++) {\n            if(this.taskList[i].getTaskProject() == projectName && this.taskList[i].getIsComplete() == false) {\n                newTaskList.push(this.taskList[i]);\n            }\n        }\n        return newTaskList;\n    }\n\n\n    deleteTask(taskUID) {\n        let i=0;\n        let itemToDelete = -1;\n        while(i<this.taskList.length) {\n            if(this.taskList[i].getUID() == taskUID) {\n                itemToDelete = i;\n                break;\n            }\n            i++;\n        }\n        if(itemToDelete == -1) {\n            _errorHandler__WEBPACK_IMPORTED_MODULE_1__.taskErrorObject.taskNotFound();\n        } else {\n            this.taskList.splice(i,1);\n        }\n    }\n\n    setComplete(taskUID) {\n        let i=0;\n        let itemToSet = -1;\n        while(i<this.taskList.length) {\n            if(this.taskList[i].getUID() == taskUID) {\n                itemToSet = i;\n                break;\n            }\n            i++;\n        }\n        if(itemToSet == -1) {\n            _errorHandler__WEBPACK_IMPORTED_MODULE_1__.taskErrorObject.taskNotFound();\n            console.log(taskUID);\n        } else {\n            if(this.taskList[i].getIsComplete() == true) {\n                this.taskList[i].setIsComplete(false);\n            } else {\n                this.taskList[i].setIsComplete(true);\n            }\n        }\n    }\n}\n\nconst taskListInstance = new taskList;\n\n\n\n//# sourceURL=webpack://todo-project/./src/todoList.js?");

/***/ }),

/***/ "./src/updatePage.js":
/*!***************************!*\
  !*** ./src/updatePage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadProjectForm: () => (/* binding */ loadProjectForm),\n/* harmony export */   loadTaskForm: () => (/* binding */ loadTaskForm),\n/* harmony export */   updateTodoPage: () => (/* binding */ updateTodoPage)\n/* harmony export */ });\n/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList */ \"./src/todoList.js\");\n/* harmony import */ var _createTodoElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTodoElement */ \"./src/createTodoElement.js\");\n/* harmony import */ var _initEventListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initEventListeners */ \"./src/initEventListeners.js\");\n/* harmony import */ var _createUIElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createUIElement */ \"./src/createUIElement.js\");\n\n\n\n\n\n\nfunction updateHomePageListener() {\n    _initEventListeners__WEBPACK_IMPORTED_MODULE_2__.taskHandlerListenerInstance.addDeleteTaskEventListener();\n    _initEventListeners__WEBPACK_IMPORTED_MODULE_2__.taskHandlerListenerInstance.addCompleteTaskEventListener();\n}\n\nfunction updateSelector() {\n    const projectSelectorDiv = document.querySelector('#project-selector-div');\n    projectSelectorDiv.innerHTML = \"\";\n    let projectSelector = _createUIElement__WEBPACK_IMPORTED_MODULE_3__.uiGenInstance.createProjectSelector();\n    projectSelector.id = \"list-project-selector\";\n    projectSelectorDiv.appendChild(projectSelector);\n\n    const selectorButton = _createUIElement__WEBPACK_IMPORTED_MODULE_3__.uiGenInstance.createButton('selector-button','Select');\n    projectSelectorDiv.appendChild(selectorButton);\n}\n\n\nfunction updateTodoPage() {\n    const todoDiv = document.querySelector('.todo-list');\n\n\n    todoDiv.innerHTML = \"\";\n    const projectSelector = document.querySelector('#list-project-selector');\n    \n    const selectedProjectTasks = Array.from(_todoList__WEBPACK_IMPORTED_MODULE_0__.taskListInstance.getTasksOfProject(projectSelector.value));\n    for(let i=0;i<selectedProjectTasks.length;i++) {\n        let newTask = (0,_createTodoElement__WEBPACK_IMPORTED_MODULE_1__.createNewTaskDisplay)(selectedProjectTasks[i]);\n        todoDiv.appendChild(newTask);\n    }\n    updateSelector();\n    updateHomePageListener();\n}\n\nfunction loadProjectForm() {\n    const topDiv = document.querySelector('#top-div');\n    topDiv.innerHTML = \"\";\n    topDiv.appendChild(_createUIElement__WEBPACK_IMPORTED_MODULE_3__.formGenInstance.createProjectForm());\n    _initEventListeners__WEBPACK_IMPORTED_MODULE_2__.formListenerInstance.addProjectEventListener();\n}\n\nfunction loadTaskForm() {\n    const topDiv = document.querySelector('#top-div');\n    topDiv.innerHTML = \"\";\n    topDiv.appendChild(_createUIElement__WEBPACK_IMPORTED_MODULE_3__.formGenInstance.createTaskForm());\n}\n\n\n\n//# sourceURL=webpack://todo-project/./src/updatePage.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;