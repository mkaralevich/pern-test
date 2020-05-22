module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Meta.js":
/*!****************************!*\
  !*** ./components/Meta.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Meta; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/maksim.karalevich/Code/-sketches/pern-app/client/components/Meta.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Meta() {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 3
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 4
    }
  }, "PERN todo"));
}

/***/ }),

/***/ "./components/TodoEdit.js":
/*!********************************!*\
  !*** ./components/TodoEdit.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TodoEdit; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/maksim.karalevich/Code/-sketches/pern-app/client/components/TodoEdit.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function TodoEdit({
  todo
}) {
  const {
    0: description,
    1: setDescription
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(todo.description);

  const updateTodo = async e => {
    e.preventDefault();

    try {
      const body = {
        description
      };
      const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });
    } catch (err) {
      console.error(err);
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 3
    }
  }, __jsx("input", {
    defaultValue: description,
    onChange: e => setDescription(e.target.value),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 4
    }
  }), __jsx("button", {
    onClick: e => updateTodo(e),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }
  }, "Edit"));
}

/***/ }),

/***/ "./components/TodoInput.js":
/*!*********************************!*\
  !*** ./components/TodoInput.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TodoInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/maksim.karalevich/Code/-sketches/pern-app/client/components/TodoInput.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function TodoInput() {
  const {
    0: description,
    1: setDescription
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""); // form event

  const onSubmit = async e => {
    e.preventDefault();

    try {
      // packaging response
      const body = {
        description
      }; // Making POST request

      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 3
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }
  }, "input todo"), __jsx("form", {
    onSubmit: onSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }
  }, __jsx("input", {
    type: "text",
    value: description,
    onChange: e => {
      setDescription(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }), __jsx("button", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, "Add")));
}

/***/ }),

/***/ "./components/TodoList.js":
/*!********************************!*\
  !*** ./components/TodoList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TodoList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TodoEdit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoEdit */ "./components/TodoEdit.js");
var _jsxFileName = "/Users/maksim.karalevich/Code/-sketches/pern-app/client/components/TodoList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function TodoList() {
  const {
    0: todos,
    1: setTodos
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getTodos();
  }, []);

  const deleteTodo = async id => {
    try {
      const response = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE"
      });
      setTodos(todos.filter(todo => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const allTodos = todos.map((todo, key) => {
    return __jsx("div", {
      key: key,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 4
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 5
      }
    }, todo.todo_id), __jsx(_TodoEdit__WEBPACK_IMPORTED_MODULE_1__["default"], {
      todo: todo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 5
      }
    }), __jsx("button", {
      onClick: () => deleteTodo(todo.todo_id),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 5
      }
    }, "Delete"));
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 3
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 4
    }
  }, "todos:"), allTodos);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TodoInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TodoInput */ "./components/TodoInput.js");
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Meta */ "./components/Meta.js");
/* harmony import */ var _components_TodoList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TodoList */ "./components/TodoList.js");
var _jsxFileName = "/Users/maksim.karalevich/Code/-sketches/pern-app/client/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Home() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 3
    }
  }, __jsx(_components_Meta__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }
  }), __jsx(_components_TodoInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }
  }), __jsx(_components_TodoList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }
  }));
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/maksim.karalevich/Code/-sketches/pern-app/client/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NZXRhLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVG9kb0VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ub2RvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ub2RvTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIk1ldGEiLCJUb2RvRWRpdCIsInRvZG8iLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwidXNlU3RhdGUiLCJ1cGRhdGVUb2RvIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYm9keSIsInJlc3BvbnNlIiwiZmV0Y2giLCJ0b2RvX2lkIiwibWV0aG9kIiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJ0YXJnZXQiLCJ2YWx1ZSIsIlRvZG9JbnB1dCIsIm9uU3VibWl0Iiwid2luZG93IiwibG9jYXRpb24iLCJtZXNzYWdlIiwiVG9kb0xpc3QiLCJ0b2RvcyIsInNldFRvZG9zIiwiZ2V0VG9kb3MiLCJqc29uRGF0YSIsImpzb24iLCJ1c2VFZmZlY3QiLCJkZWxldGVUb2RvIiwiaWQiLCJmaWx0ZXIiLCJhbGxUb2RvcyIsIm1hcCIsImtleSIsIkhvbWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FB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QU1BLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDRDtBQUVBO0FBQ0E7QUFDQTtBQUVlLFNBQVNHLElBQVQsR0FBZ0I7QUFDOUIsU0FDQyxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQUVDLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZELEVBR0MsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEQsQ0FERDtBQU9BLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEQsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoic3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZXRhKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxIZWFkPlxuXHRcdFx0PHRpdGxlPlBFUk4gdG9kbzwvdGl0bGU+XG5cdFx0PC9IZWFkPlxuXHQpO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvRWRpdCh7IHRvZG8gfSkge1xuXHRjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKHRvZG8uZGVzY3JpcHRpb24pO1xuXG5cdGNvbnN0IHVwZGF0ZVRvZG8gPSBhc3luYyAoZSkgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgYm9keSA9IHsgZGVzY3JpcHRpb24gfTtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG5cdFx0XHRcdGBodHRwOi8vbG9jYWxob3N0OjUwMDAvdG9kb3MvJHt0b2RvLnRvZG9faWR9YCxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG1ldGhvZDogXCJQVVRcIixcblx0XHRcdFx0XHRoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG5cdFx0XHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGVycik7XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gKFxuXHRcdDxGcmFnbWVudD5cblx0XHRcdDxpbnB1dFxuXHRcdFx0XHRkZWZhdWx0VmFsdWU9e2Rlc2NyaXB0aW9ufVxuXHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cblx0XHRcdC8+XG5cdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiB1cGRhdGVUb2RvKGUpfT5FZGl0PC9idXR0b24+XG5cdFx0PC9GcmFnbWVudD5cblx0KTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kb0lucHV0KCkge1xuXHRjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xuXHQvLyBmb3JtIGV2ZW50XG5cdGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dHJ5IHtcblx0XHRcdC8vIHBhY2thZ2luZyByZXNwb25zZVxuXHRcdFx0Y29uc3QgYm9keSA9IHsgZGVzY3JpcHRpb24gfTtcblx0XHRcdC8vIE1ha2luZyBQT1NUIHJlcXVlc3Rcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvdG9kb3NcIiwge1xuXHRcdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0XHRoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG5cdFx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuXHRcdFx0fSk7XG5cdFx0XHR3aW5kb3cubG9jYXRpb24gPSBcIi9cIjtcblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpO1xuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxGcmFnbWVudD5cblx0XHRcdDxoMT5pbnB1dCB0b2RvPC9oMT5cblx0XHRcdDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XG5cdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHR2YWx1ZT17ZGVzY3JpcHRpb259XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSk7XG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PGJ1dHRvbj5BZGQ8L2J1dHRvbj5cblx0XHRcdDwvZm9ybT5cblx0XHQ8L0ZyYWdtZW50PlxuXHQpO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVG9kb0VkaXQgZnJvbSBcIi4vVG9kb0VkaXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kb0xpc3QoKSB7XG5cdGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoW10pO1xuXG5cdGNvbnN0IGdldFRvZG9zID0gYXN5bmMgKCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL3RvZG9zXCIpO1xuXHRcdFx0Y29uc3QganNvbkRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cdFx0XHRzZXRUb2Rvcyhqc29uRGF0YSk7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKTtcblx0XHR9XG5cdH07XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRnZXRUb2RvcygpO1xuXHR9LCBbXSk7XG5cblx0Y29uc3QgZGVsZXRlVG9kbyA9IGFzeW5jIChpZCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjUwMDAvdG9kb3MvJHtpZH1gLCB7XG5cdFx0XHRcdG1ldGhvZDogXCJERUxFVEVcIixcblx0XHRcdH0pO1xuXHRcdFx0c2V0VG9kb3ModG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLnRvZG9faWQgIT09IGlkKSk7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgYWxsVG9kb3MgPSB0b2Rvcy5tYXAoKHRvZG8sIGtleSkgPT4ge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGtleT17a2V5fT5cblx0XHRcdFx0PGRpdj57dG9kby50b2RvX2lkfTwvZGl2PlxuXHRcdFx0XHQ8VG9kb0VkaXQgdG9kbz17dG9kb30gLz5cblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVUb2RvKHRvZG8udG9kb19pZCl9PkRlbGV0ZTwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSk7XG5cdHJldHVybiAoXG5cdFx0PEZyYWdtZW50PlxuXHRcdFx0PGgxPnRvZG9zOjwvaDE+XG5cdFx0XHR7YWxsVG9kb3N9XG5cdFx0PC9GcmFnbWVudD5cblx0KTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgVG9kb0lucHV0IGZyb20gXCIuLi9jb21wb25lbnRzL1RvZG9JbnB1dFwiO1xuaW1wb3J0IE1ldGEgZnJvbSBcIi4uL2NvbXBvbmVudHMvTWV0YVwiO1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL1RvZG9MaXN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cdHJldHVybiAoXG5cdFx0PEZyYWdtZW50PlxuXHRcdFx0PE1ldGEgLz5cblx0XHRcdDxUb2RvSW5wdXQgLz5cblx0XHRcdDxUb2RvTGlzdCAvPlxuXHRcdDwvRnJhZ21lbnQ+XG5cdCk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==