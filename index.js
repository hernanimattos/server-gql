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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./http/index.js":
/*!***********************!*\
  !*** ./http/index.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var HTTP =
/*#__PURE__*/
function () {
  function HTTP() {
    _classCallCheck(this, HTTP);
  }

  _createClass(HTTP, null, [{
    key: "urlParser",
    value: function urlParser(url, param, adic) {
      var urlParse = Object.keys(param).map(function (e) {
        return "".concat(e, "=").concat(param[e]);
      }).join('?');
      return "".concat(url, "?").concat(urlParse, "?").concat(adic || '');
    }
  }, {
    key: "get",
    value: function get(params) {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.apply(void 0, _toConsumableArray(params));
    }
  }]);

  return HTTP;
}();

/* harmony default export */ __webpack_exports__["default"] = (new HTTP());

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server */ "apollo-server");
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http */ "./http/index.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.\n\n  # This \"Book\" type defines the queryable fields for every book in our data source.\n  type Book {\n    title: String\n    author: String\n  }\n\n  # The \"Query\" type is special: it lists all of the available queries that\n  # clients can execute, along with the return type for each. In this\n  # case, the \"books\" query returns an array of zero or more Books (defined above).\n  type Query {\n    books: [Book]\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// const { ApolloServer, gql } = require('apollo-server');


console.log(_http__WEBPACK_IMPORTED_MODULE_1__["default"]); //eslint-disable-line

var typeDefs = Object(apollo_server__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject());
var resolvers = {
  Query: {
    books: function (_books) {
      function books() {
        return _books.apply(this, arguments);
      }

      books.toString = function () {
        return _books.toString();
      };

      return books;
    }(function () {
      return books;
    }) //eslint-disable-line

  }
};
var server = new apollo_server__WEBPACK_IMPORTED_MODULE_0__["ApolloServer"]({
  typeDefs: typeDefs,
  resolvers: resolvers
}); // The `listen` method launches a web server.

server.listen().then(function (_ref) {
  var url = _ref.url;
  console.log("\uD83D\uDE80  Server ready at ".concat(url));
});

/***/ }),

/***/ "apollo-server":
/*!********************************!*\
  !*** external "apollo-server" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaHR0cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLXNlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiXSwibmFtZXMiOlsiSFRUUCIsInVybCIsInBhcmFtIiwiYWRpYyIsInVybFBhcnNlIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImUiLCJqb2luIiwicGFyYW1zIiwiYXhpb3MiLCJjb25zb2xlIiwibG9nIiwiSHR0cCIsInR5cGVEZWZzIiwiZ3FsIiwicmVzb2x2ZXJzIiwiUXVlcnkiLCJib29rcyIsInNlcnZlciIsIkFwb2xsb1NlcnZlciIsImxpc3RlbiIsInRoZW4iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7SUFFTUEsSTs7Ozs7Ozs7OzhCQUVhQyxHLEVBQUtDLEssRUFBT0MsSSxFQUFNO0FBQ2pDLFVBQU1DLFFBQVEsR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlKLEtBQVosRUFBbUJLLEdBQW5CLENBQXVCLFVBQUNDLENBQUQ7QUFBQSx5QkFBVUEsQ0FBVixjQUFlTixLQUFLLENBQUNNLENBQUQsQ0FBcEI7QUFBQSxPQUF2QixFQUFrREMsSUFBbEQsQ0FBdUQsR0FBdkQsQ0FBakI7QUFDQSx1QkFBVVIsR0FBVixjQUFpQkcsUUFBakIsY0FBNkJELElBQUksSUFBSSxFQUFyQztBQUNEOzs7d0JBRVVPLE0sRUFBUTtBQUNqQkMsa0RBQUssTUFBTCw0QkFBU0QsTUFBVDtBQUNEOzs7Ozs7QUFJWSxtRUFBSVYsSUFBSixFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUVBO0FBSUE7QUFFQVksT0FBTyxDQUFDQyxHQUFSLENBQVlDLDZDQUFaLEUsQ0FBbUI7O0FBRW5CLElBQU1DLFFBQVEsR0FBR0MseURBQUgsbUJBQWQ7QUFpQkEsSUFBTUMsU0FBUyxHQUFHO0FBQ2hCQyxPQUFLLEVBQUU7QUFDTEMsU0FBSztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxNQUFFO0FBQUEsYUFBTUEsS0FBTjtBQUFBLEtBQUYsQ0FEQSxDQUNlOztBQURmO0FBRFMsQ0FBbEI7QUFNQSxJQUFNQyxNQUFNLEdBQUcsSUFBSUMsMERBQUosQ0FBaUI7QUFBRU4sVUFBUSxFQUFSQSxRQUFGO0FBQVlFLFdBQVMsRUFBVEE7QUFBWixDQUFqQixDQUFmLEMsQ0FFQTs7QUFDQUcsTUFBTSxDQUFDRSxNQUFQLEdBQWdCQyxJQUFoQixDQUFxQixnQkFBYTtBQUFBLE1BQVZ0QixHQUFVLFFBQVZBLEdBQVU7QUFDaENXLFNBQU8sQ0FBQ0MsR0FBUix5Q0FBbUNaLEdBQW5DO0FBQ0QsQ0FGRCxFOzs7Ozs7Ozs7OztBQ3BDQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY2xhc3MgSFRUUCB7XG5cbiAgc3RhdGljIHVybFBhcnNlcih1cmwsIHBhcmFtLCBhZGljKSB7XG4gICAgY29uc3QgdXJsUGFyc2UgPSBPYmplY3Qua2V5cyhwYXJhbSkubWFwKChlKSA9PiBgJHtlfT0ke3BhcmFtW2VdfWApLmpvaW4oJz8nKTtcbiAgICByZXR1cm4gYCR7dXJsfT8ke3VybFBhcnNlfT8ke2FkaWMgfHwgJyd9YDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQocGFyYW1zKSB7XG4gICAgYXhpb3MoLi4ucGFyYW1zKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBIVFRQKCk7XG4iLCIvLyBjb25zdCB7IEFwb2xsb1NlcnZlciwgZ3FsIH0gPSByZXF1aXJlKCdhcG9sbG8tc2VydmVyJyk7XG5cbmltcG9ydCB7XG4gIEFwb2xsb1NlcnZlcixcbiAgZ3FsLFxufSBmcm9tICdhcG9sbG8tc2VydmVyJztcbmltcG9ydCBIdHRwIGZyb20gJy4uL2h0dHAnO1xuXG5jb25zb2xlLmxvZyhIdHRwKTsgLy9lc2xpbnQtZGlzYWJsZS1saW5lXG5cbmNvbnN0IHR5cGVEZWZzID0gZ3FsYFxuICAjIENvbW1lbnRzIGluIEdyYXBoUUwgc3RyaW5ncyAoc3VjaCBhcyB0aGlzIG9uZSkgc3RhcnQgd2l0aCB0aGUgaGFzaCAoIykgc3ltYm9sLlxuXG4gICMgVGhpcyBcIkJvb2tcIiB0eXBlIGRlZmluZXMgdGhlIHF1ZXJ5YWJsZSBmaWVsZHMgZm9yIGV2ZXJ5IGJvb2sgaW4gb3VyIGRhdGEgc291cmNlLlxuICB0eXBlIEJvb2sge1xuICAgIHRpdGxlOiBTdHJpbmdcbiAgICBhdXRob3I6IFN0cmluZ1xuICB9XG5cbiAgIyBUaGUgXCJRdWVyeVwiIHR5cGUgaXMgc3BlY2lhbDogaXQgbGlzdHMgYWxsIG9mIHRoZSBhdmFpbGFibGUgcXVlcmllcyB0aGF0XG4gICMgY2xpZW50cyBjYW4gZXhlY3V0ZSwgYWxvbmcgd2l0aCB0aGUgcmV0dXJuIHR5cGUgZm9yIGVhY2guIEluIHRoaXNcbiAgIyBjYXNlLCB0aGUgXCJib29rc1wiIHF1ZXJ5IHJldHVybnMgYW4gYXJyYXkgb2YgemVybyBvciBtb3JlIEJvb2tzIChkZWZpbmVkIGFib3ZlKS5cbiAgdHlwZSBRdWVyeSB7XG4gICAgYm9va3M6IFtCb29rXVxuICB9XG5gO1xuXG5jb25zdCByZXNvbHZlcnMgPSB7XG4gIFF1ZXJ5OiB7XG4gICAgYm9va3M6ICgpID0+IGJvb2tzLCAvL2VzbGludC1kaXNhYmxlLWxpbmVcbiAgfSxcbn07XG5cbmNvbnN0IHNlcnZlciA9IG5ldyBBcG9sbG9TZXJ2ZXIoeyB0eXBlRGVmcywgcmVzb2x2ZXJzIH0pO1xuXG4vLyBUaGUgYGxpc3RlbmAgbWV0aG9kIGxhdW5jaGVzIGEgd2ViIHNlcnZlci5cbnNlcnZlci5saXN0ZW4oKS50aGVuKCh7IHVybCB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKGDwn5qAICBTZXJ2ZXIgcmVhZHkgYXQgJHt1cmx9YCk7XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1zZXJ2ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==