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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./logic/router.js":
/*!*************************!*\
  !*** ./logic/router.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from E:/Work/Weblite/KhashmeShab/weblite/tools/buildlite/node_modules/babel-loader/lib/index.js):\\nSyntaxError: E:\\\\Work\\\\Weblite\\\\KhashmeShab\\\\weblite\\\\wapp\\\\pennelite\\\\backend\\\\src\\\\logic\\\\router.js: Unexpected token, expected \\\",\\\" (17:42)\\n\\n\\u001b[0m \\u001b[90m 15 | \\u001b[39mrouter\\u001b[33m.\\u001b[39mget(\\u001b[32m'/'\\u001b[39m\\u001b[33m,\\u001b[39m (req\\u001b[33m,\\u001b[39m res) \\u001b[33m=>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 16 | \\u001b[39m  fetchLastNinePens()\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 17 | \\u001b[39m    \\u001b[33m.\\u001b[39mthen(pens \\u001b[33m=>\\u001b[39m console\\u001b[33m.\\u001b[39mlog( pens\\u001b[33m,\\u001b[39m liked\\u001b[33m:\\u001b[39m \\u001b[36mtrue\\u001b[39m ))\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m                                          \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 18 | \\u001b[39m    \\u001b[90m// .then(pens => res.send(pens))\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 19 | \\u001b[39m    \\u001b[33m.\\u001b[39m\\u001b[36mcatch\\u001b[39m(() \\u001b[33m=>\\u001b[39m console\\u001b[33m.\\u001b[39mlog(\\u001b[32m'there is not nine in db'\\u001b[39m))\\u001b[33m,\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 20 | \\u001b[39m)\\u001b[0m\\n    at _class.raise (E:\\\\Work\\\\Weblite\\\\KhashmeShab\\\\weblite\\\\tools\\\\buildlite\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3939:15)\\n    at _class.unexpected (E:\\\\Work\\\\Weblite\\\\KhashmeShab\\\\weblite\\\\tools\\\\buildlite\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5248:16)\\n    at _class.expect (E:\\\\Work\\\\Weblite\\\\KhashmeShab\\\\weblite\\\\tools\\\\buildlite\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5236:28)\\n    at _class.parseCallExpressionArguments (E:\\\\Work\\\\Weblite\\\\KhashmeShab\\\\weblite\\\\tools\\\\buildlite\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6116:14)\\n    at _class.parseSubscript (E:\\\\Work\\\\Weblite\\\\KhashmeShab\\\\weblite\\\\tools\\\\buildlite\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6029:32)\\n    at _class.parseSubscripts (E:\\\\Work\\\\Weblite\\\\KhashmeShab\\\\weblite\\\\tools\\\\buildlite\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5944:19)\\n    at _class.parseExprSubscripts (E:\\\\Work\\\\Weblite\\\\KhashmeShab\\\\weblite\\\\tools\\\\buildlite\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5934:17)\\n    at _class.parseMaybeUnary (E:\\\\Work\\\\Weblite\\\\KhashmeShab\\\\weblite\\\\tools\\\\buildlite\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5903:21)\\n    at _class.parseExprOps (E:\\\\Work\\\\Weblite\\\\KhashmeShab\\\\weblite\\\\tools\\\\buildlite\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5812:21)\\n    at _class.parseMaybeConditional (E:\\\\Work\\\\Weblite\\\\KhashmeShab\\\\weblite\\\\tools\\\\buildlite\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5784:21)\\n    at _class.parseMaybeAssign (E:\\\\Work\\\\Weblite\\\\KhashmeShab\\\\weblite\\\\tools\\\\buildlite\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5731:21)\\n    at _class.parseFunctionBody (E:\\\\Work\\\\Weblite\\\\KhashmeShab\\\\weblite\\\\tools\\\\buildlite\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6917:24)\\n    at _class.parseArrowExpression (E:\\\\Work\\\\Weblite\\\\KhashmeShab\\\\weblite\\\\tools\\\\buildlite\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6877:10)\\n    at _class.parseExprAtom (E:\\\\Work\\\\Weblite\\\\KhashmeShab\\\\weblite\\\\tools\\\\buildlite\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6231:18)\\n    at _class.parseExprAtom (E:\\\\Work\\\\Weblite\\\\KhashmeShab\\\\weblite\\\\tools\\\\buildlite\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3635:52)\\n    at _class.parseExprSubscripts (E:\\\\Work\\\\Weblite\\\\KhashmeShab\\\\weblite\\\\tools\\\\buildlite\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5924:21)\");\n\n//# sourceURL=webpack:///./logic/router.js?");

/***/ }),

/***/ "./setup/dev.index.js":
/*!****************************!*\
  !*** ./setup/dev.index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./server */ \"./setup/server.js\");\n/* harmony import */ var _mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mongodb */ \"./setup/mongodb.js\");\n// modules\n // components\n\n\n // http.createServer(app).listen(3080)\n\n_server__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listen(3080, () => console.log('listening  3080'));\n\n//# sourceURL=webpack:///./setup/dev.index.js?");

/***/ }),

/***/ "./setup/mongodb.js":
/*!**************************!*\
  !*** ./setup/mongodb.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect('mongodb://localhost:27017/Pennelite', {\n  useNewUrlParser: true\n});\nconst db = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection;\ndb.on('connected', () => console.log('Connection to MongoDb is established!'));\ndb.on('error', console.log);\n\n//# sourceURL=webpack:///./setup/mongodb.js?");

/***/ }),

/***/ "./setup/server.js":
/*!*************************!*\
  !*** ./setup/server.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _logic_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logic/router */ \"./logic/router.js\");\n// modules\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(cors__WEBPACK_IMPORTED_MODULE_1___default()({\n  origin: '*'\n}));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.urlencoded({\n  extended: true\n}));\napp.use('/', _logic_router__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./setup/server.js?");

/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./setup/dev.index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./setup/dev.index.js */\"./setup/dev.index.js\");\n\n\n//# sourceURL=webpack:///multi_./setup/dev.index.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ })

/******/ });