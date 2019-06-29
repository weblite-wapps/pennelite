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

/***/ "./logic/Pen.js":
/*!**********************!*\
  !*** ./logic/Pen.js ***!
  \**********************/
/*! exports provided: savePen, incPenLikes, decPenLikes, deletePen, fetchLastNinePens, fetchSinglePen, fetchWriterPens */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"savePen\", function() { return savePen; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"incPenLikes\", function() { return incPenLikes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"decPenLikes\", function() { return decPenLikes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deletePen\", function() { return deletePen; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchLastNinePens\", function() { return fetchLastNinePens; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchSinglePen\", function() { return fetchSinglePen; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchWriterPens\", function() { return fetchWriterPens; });\n/* harmony import */ var _models_Pen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Pen */ \"./models/Pen.js\");\n\nconst savePen = ({\n  title,\n  writer,\n  html,\n  css,\n  js\n}) => _models_Pen__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateOne({\n  writer,\n  title\n}, {\n  html,\n  css,\n  js\n}, {\n  upsert: true\n}).exec(); // console.log(\n//   'title: ',\n//   title,\n//   'writer: ',\n//   writer,\n//   'html: ',\n//   html,\n//   'css: ',\n//   css,\n//   'js: ',\n//   js,\n//   '_id: ',\n//   _id,\n// )\n// console.log('_id: ', typeof _id)\n\nconst incPenLikes = _id => _models_Pen__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateOne({\n  _id\n}, {\n  $inc: {\n    likeCnt: 1\n  }\n}).exec();\nconst decPenLikes = _id => _models_Pen__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateOne({\n  _id\n}, {\n  $dec: {\n    likeCnt: 1\n  }\n}).exec();\nconst deletePen = ({\n  writer,\n  title\n}) => _models_Pen__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteOne({\n  title,\n  writer\n}).exec();\nconst fetchLastNinePens = () => _models_Pen__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({}, {\n  html: 0,\n  css: 0,\n  js: 0,\n  __v: 0\n}).limit(9).exec();\nconst fetchSinglePen = (writer, title) => _models_Pen__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n  writer,\n  title\n}, {\n  _id: 0,\n  __v: 0\n}).exec(); // console.log('writer, title :', writer, title)\n\nconst fetchWriterPens = writer => _models_Pen__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({\n  writer\n}, {\n  title: 1,\n  _id: 0\n}).exec(); // console.log('writer :', writer)\n\n//# sourceURL=webpack:///./logic/Pen.js?");

/***/ }),

/***/ "./logic/User.js":
/*!***********************!*\
  !*** ./logic/User.js ***!
  \***********************/
/*! exports provided: likePen, dislikePen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"likePen\", function() { return likePen; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dislikePen\", function() { return dislikePen; });\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/User */ \"./models/User.js\");\n\nconst likePen = (user, _id) => _models_User__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateOne({\n  user\n}, {\n  user,\n  $addToSet: {\n    likes: _id\n  }\n}, {\n  upsert: true\n}).exec(); // console.log(\n//   'title: ',\n//   title,\n//   'writer: ',\n//   writer,\n//   'html: ',\n//   html,\n//   'css: ',\n//   css,\n//   'js: ',\n//   js,\n//   '_id: ',\n//   _id,\n// )\n// console.log('_id: ', typeof _id)\n\nconst dislikePen = ({\n  user,\n  _id\n}) => _models_User__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateOne({\n  user\n}, {\n  $pop: _id\n}).exec();\n\n//# sourceURL=webpack:///./logic/User.js?");

/***/ }),

/***/ "./logic/router.js":
/*!*************************!*\
  !*** ./logic/router.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Pen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pen */ \"./logic/Pen.js\");\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User */ \"./logic/User.js\");\n\n\n\nconst router = Object(express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"])();\nrouter.get('/', (req, res) => Object(_Pen__WEBPACK_IMPORTED_MODULE_1__[\"fetchLastNinePens\"])() // .then(pens => console.log( pens, liked: true ))\n// .then(pens => res.send(pens))\n.catch(() => console.log('there is not nine in db')));\nrouter.post('/updateCurrentPen', ({\n  body\n}, res) => Object(_Pen__WEBPACK_IMPORTED_MODULE_1__[\"savePen\"])(body).then(resp => res.send(resp)).catch(() => console.log(\"couldn't save current pen\")) // console.log('body :', typeof body),\n);\nrouter.get('/fetchSinglePen', ({\n  query: {\n    writer,\n    title\n  }\n}, res) => Object(_Pen__WEBPACK_IMPORTED_MODULE_1__[\"fetchSinglePen\"])(writer, title).then(pen => res.send(pen)) // console.log(user, title),\n);\nrouter.get('/fetchWriterPens', ({\n  query: {\n    writer\n  }\n}, res) => Object(_Pen__WEBPACK_IMPORTED_MODULE_1__[\"fetchWriterPens\"])(writer).then(pens => res.send(pens)) // console.log('query :', query),\n);\nrouter.get('/likePen', ({\n  query: {\n    user,\n    _id\n  }\n}, res) => {\n  Object(_User__WEBPACK_IMPORTED_MODULE_2__[\"likePen\"])(user, _id).then(() => res.send('liked succesfully')).catch(() => console.log('unable to like'));\n  Object(_Pen__WEBPACK_IMPORTED_MODULE_1__[\"incPenLikes\"])(_id).then(() => console.log('increased')).catch(() => console.log('unable to increase'));\n});\nrouter.get('/dislikePen', ({\n  query: {\n    user,\n    _id\n  }\n}, res) => {\n  Object(_User__WEBPACK_IMPORTED_MODULE_2__[\"dislikePen\"])(user, _id).then(() => res.send('disliked succesfully')).catch(() => console.log('unable to dislike'));\n  Object(_Pen__WEBPACK_IMPORTED_MODULE_1__[\"incPenLikes\"])(_id).then(() => console.log('increased')).catch(() => console.log('unable to increase'));\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./logic/router.js?");

/***/ }),

/***/ "./models/Pen.js":
/*!***********************!*\
  !*** ./models/Pen.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst PenSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"]({\n  likeCnt: {\n    type: Number,\n    default: 0\n  },\n  writer: String,\n  title: String,\n  html: String,\n  css: String,\n  js: String\n}, {\n  timestamps: {\n    createdAt: 'createdat'\n  }\n}); // timeStamps\n// disable __v\n// composite index of writer, title\n// lean\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Pen', PenSchema));\n\n//# sourceURL=webpack:///./models/Pen.js?");

/***/ }),

/***/ "./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchame = new mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"]({\n  user: String,\n  likes: [String]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User', UserSchame));\n\n//# sourceURL=webpack:///./models/User.js?");

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