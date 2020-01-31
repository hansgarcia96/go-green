/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascript/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/styles.scss */ \"./src/sass/styles.scss\");\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n\nconsole.log(\"Webpack Boilerplate\");\nvar today = new Date(2020, 0, 30);\nvar theYear = today.getFullYear();\nvar lastMonth = today.getMonth() - 1;\n\nif (lastMonth < 0) {\n  theYear = theYear - 1;\n  lastMonth = 11;\n} else {\n  lastMonth = lastMonth - 1;\n}\n\nvar oldTime = new Date(theYear, lastMonth, 26);\nvar options = {\n  weekday: \"long\",\n  year: \"numeric\",\n  month: \"short\",\n  day: \"numeric\"\n};\nconsole.log(oldTime.toLocaleDateString(\"en-US\", options));\nvar dynamicDate = document.getElementById(\"page-date\");\ndynamicDate.innerHTML = \"\".concat(oldTime.toLocaleDateString(\"en-US\", options)); // CHECK FIRST VISIT\n\nfunction setCookie(cookieName, value, exdays) {\n  var exdate = new Date();\n  exdate.setDate(exdate.getDate() + exdays);\n  var cookieValue = escape(value) + (exdays == null ? \"\" : \"; expires=\" + exdate.toUTCString());\n  document.cookie = cookieName + \"=\" + cookieValue;\n}\n\nfunction getCookie(cookieName) {\n  var cookieValue = document.cookie;\n  var cookieStart = cookieValue.indexOf(\" \" + cookieName + \"=\");\n\n  if (cookieStart == -1) {\n    cookieStart = cookieValue.indexOf(cookieName + \"=\");\n  }\n\n  if (cookieStart == -1) {\n    cookieValue = null;\n  } else {\n    cookieStart = cookieValue.indexOf(\"=\", cookieStart) + 1;\n    var cookieEnd = cookieValue.indexOf(\";\", cookieStart);\n\n    if (cookieEnd == -1) {\n      cookieEnd = cookieValue.length;\n    }\n\n    cookieValue = unescape(cookieValue.substring(cookieStart, cookieEnd));\n  }\n\n  return cookieValue;\n}\n\nfunction checkSession() {\n  var c = getCookie(\"visited\");\n\n  if (c === \"yes\") {//  alert(\"Welcome back!\");\n  } else {\n    alert(\"Welcome new visitor!\");\n  }\n\n  setCookie(\"visited\", \"yes\", 365); // expire in 1 year; or use null to never expire\n}\n\ncheckSession();\n\nfunction myFunction(e, data) {\n  e.preventDefault();\n  var formData = {\n    lastName: data.lastName.value,\n    email: data.email.value\n  };\n  console.log(formData);\n}\n\n//# sourceURL=webpack:///./src/javascript/index.js?");

/***/ }),

/***/ "./src/sass/styles.scss":
/*!******************************!*\
  !*** ./src/sass/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/styles.scss?");

/***/ })

/******/ });