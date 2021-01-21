webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Navbars/IndexNavbar.js":
/*!*******************************************!*\
  !*** ./components/Navbars/IndexNavbar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Dropdowns_IndexDropdown_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Dropdowns/IndexDropdown.js */ "./components/Dropdowns/IndexDropdown.js");
var _jsxFileName = "D:\\Projects\\notus-nextjs-master\\components\\Navbars\\IndexNavbar.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // components


function Navbar(props) {
  _s();

  const [navbarOpen, setNavbarOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("nav", {
    className: "top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container px-4 mx-auto flex flex-wrap items-center justify-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "text-gray-800 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase",
    href: "#pablo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 15
    }
  }, "Notus NextJS")), __jsx("button", {
    className: "cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",
    type: "button",
    onClick: () => setNavbarOpen(!navbarOpen),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "fas fa-bars",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" + (navbarOpen ? " block" : " hidden"),
    id: "example-navbar-warning",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "flex flex-col lg:flex-row list-none mr-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }), __jsx("ul", {
    className: "flex flex-col lg:flex-row list-none lg:ml-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "flex items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, __jsx(components_Dropdowns_IndexDropdown_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  })), __jsx("li", {
    className: "flex items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
    href: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-nextjs%2F",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "text-gray-500 fab fa-facebook text-lg leading-lg ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 19
    }
  }), __jsx("span", {
    className: "lg:hidden inline-block ml-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 19
    }
  }, "Share"))), __jsx("li", {
    className: "flex items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
    href: "https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-nextjs%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20NextJS%20UI%20Kit%20and%20Admin.%20Let%20Notus%20NextJS%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "text-gray-500 fab fa-twitter text-lg leading-lg ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 19
    }
  }), __jsx("span", {
    className: "lg:hidden inline-block ml-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 19
    }
  }, "Tweet"))), __jsx("li", {
    className: "flex items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
    href: "https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index-navbar",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "text-gray-500 fab fa-github text-lg leading-lg ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 19
    }
  }), __jsx("span", {
    className: "lg:hidden inline-block ml-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 19
    }
  }, "Star"))), __jsx("li", {
    className: "flex items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, __jsx("button", {
    className: "bg-gray-800 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150",
    type: "button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fas fa-arrow-alt-circle-down",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 19
    }
  }), " Download")))))));
}

_s(Navbar, "15c5sM/hZYq2eTRu58QbId6xljA=");

_c = Navbar;

var _c;

$RefreshReg$(_c, "Navbar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXJzL0luZGV4TmF2YmFyLmpzIl0sIm5hbWVzIjpbIk5hdmJhciIsInByb3BzIiwibmF2YmFyT3BlbiIsInNldE5hdmJhck9wZW4iLCJSZWFjdCIsInVzZVN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUVBO0FBRWUsU0FBU0EsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFBQTs7QUFDcEMsUUFBTSxDQUFDQyxVQUFELEVBQWFDLGFBQWIsSUFBOEJDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBQXBDO0FBQ0EsU0FDRSxtRUFDRTtBQUFLLGFBQVMsRUFBQyxnSEFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsb0VBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLG9GQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLHFHQURaO0FBRUUsUUFBSSxFQUFDLFFBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixDQURGLEVBU0U7QUFDRSxhQUFTLEVBQUMsNkpBRFo7QUFFRSxRQUFJLEVBQUMsUUFGUDtBQUdFLFdBQU8sRUFBRSxNQUFNRixhQUFhLENBQUMsQ0FBQ0QsVUFBRixDQUg5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0U7QUFBRyxhQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsQ0FURixDQURGLEVBa0JFO0FBQ0UsYUFBUyxFQUNQLDhFQUNDQSxVQUFVLEdBQUcsUUFBSCxHQUFjLFNBRHpCLENBRko7QUFLRSxNQUFFLEVBQUMsd0JBTEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9FO0FBQUksYUFBUyxFQUFDLDZDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixFQWtCRTtBQUFJLGFBQVMsRUFBQyxnREFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsbUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRTtBQUFJLGFBQVMsRUFBQyxtQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUMsbUdBRFo7QUFFRSxRQUFJLEVBQUMscUdBRlA7QUFHRSxVQUFNLEVBQUMsUUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0U7QUFBRyxhQUFTLEVBQUMsbURBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBTUU7QUFBTSxhQUFTLEVBQUMsNkJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORixDQURGLENBSkYsRUFlRTtBQUFJLGFBQVMsRUFBQyxtQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUMsbUdBRFo7QUFFRSxRQUFJLEVBQUMsZ1dBRlA7QUFHRSxVQUFNLEVBQUMsUUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0U7QUFBRyxhQUFTLEVBQUMsa0RBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBTUU7QUFBTSxhQUFTLEVBQUMsNkJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORixDQURGLENBZkYsRUEwQkU7QUFBSSxhQUFTLEVBQUMsbUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLG1HQURaO0FBRUUsUUFBSSxFQUFDLDJFQUZQO0FBR0UsVUFBTSxFQUFDLFFBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQUcsYUFBUyxFQUFDLGlEQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQU1FO0FBQU0sYUFBUyxFQUFDLDZCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsQ0FERixDQTFCRixFQXFDRTtBQUFJLGFBQVMsRUFBQyxtQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUMsa05BRFo7QUFFRSxRQUFJLEVBQUMsUUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBRyxhQUFTLEVBQUMsOEJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLGNBREYsQ0FyQ0YsQ0FsQkYsQ0FsQkYsQ0FERixDQURGLENBREY7QUEwRkQ7O0dBNUZ1QkYsTTs7S0FBQUEsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44YmYyZTAxZjgzMjE4MzE1ZGZiNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuLy8gY29tcG9uZW50c1xuXG5pbXBvcnQgSW5kZXhEcm9wZG93biBmcm9tIFwiY29tcG9uZW50cy9Ecm9wZG93bnMvSW5kZXhEcm9wZG93bi5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIocHJvcHMpIHtcbiAgY29uc3QgW25hdmJhck9wZW4sIHNldE5hdmJhck9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cInRvcC0wIGZpeGVkIHotNTAgdy1mdWxsIGZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtMiBweS0zIG5hdmJhci1leHBhbmQtbGcgYmctd2hpdGUgc2hhZG93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB4LTQgbXgtYXV0byBmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcmVsYXRpdmUgZmxleCBqdXN0aWZ5LWJldHdlZW4gbGc6dy1hdXRvIGxnOnN0YXRpYyBsZzpibG9jayBsZzpqdXN0aWZ5LXN0YXJ0XCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS04MDAgdGV4dC1zbSBmb250LWJvbGQgbGVhZGluZy1yZWxheGVkIGlubGluZS1ibG9jayBtci00IHB5LTIgd2hpdGVzcGFjZS1uby13cmFwIHVwcGVyY2FzZVwiXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNwYWJsb1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBOb3R1cyBOZXh0SlNcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciB0ZXh0LXhsIGxlYWRpbmctbm9uZSBweC0zIHB5LTEgYm9yZGVyIGJvcmRlci1zb2xpZCBib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZCBiZy10cmFuc3BhcmVudCBibG9jayBsZzpoaWRkZW4gb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXROYXZiYXJPcGVuKCFuYXZiYXJPcGVuKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJhcnNcIj48L2k+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICBcImxnOmZsZXggZmxleC1ncm93IGl0ZW1zLWNlbnRlciBiZy13aGl0ZSBsZzpiZy10cmFuc3BhcmVudCBsZzpzaGFkb3ctbm9uZVwiICtcbiAgICAgICAgICAgICAgKG5hdmJhck9wZW4gPyBcIiBibG9ja1wiIDogXCIgaGlkZGVuXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZD1cImV4YW1wbGUtbmF2YmFyLXdhcm5pbmdcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGxpc3Qtbm9uZSBtci1hdXRvXCI+XG4gICAgICAgICAgICAgIHsvKiA8bGkgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1ncmF5LTYwMCB0ZXh0LWdyYXktODAwIHB4LTMgcHktNCBsZzpweS0yIGZsZXggaXRlbXMtY2VudGVyIHRleHQteHMgdXBwZXJjYXNlIGZvbnQtYm9sZFwiXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbS9sZWFybmluZy1sYWIvdGFpbHdpbmQvbmV4dGpzL292ZXJ2aWV3L25vdHVzP3JlZj1ubmpzLWluZGV4LW5hdmJhclwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBmYXIgZmEtZmlsZS1hbHQgdGV4dC1sZyBsZWFkaW5nLWxnIG1yLTJcIiAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgIERvY3NcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+ICovfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGxpc3Qtbm9uZSBsZzptbC1hdXRvXCI+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxJbmRleERyb3Bkb3duIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWdyYXktNjAwIHRleHQtZ3JheS04MDAgcHgtMyBweS00IGxnOnB5LTIgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC14cyB1cHBlcmNhc2UgZm9udC1ib2xkXCJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA/dT1odHRwcyUzQSUyRiUyRmRlbW9zLmNyZWF0aXZlLXRpbS5jb20lMkZub3R1cy1uZXh0anMlMkZcIlxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIGZhYiBmYS1mYWNlYm9vayB0ZXh0LWxnIGxlYWRpbmctbGcgXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxnOmhpZGRlbiBpbmxpbmUtYmxvY2sgbWwtMlwiPlNoYXJlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1ncmF5LTYwMCB0ZXh0LWdyYXktODAwIHB4LTMgcHktNCBsZzpweS0yIGZsZXggaXRlbXMtY2VudGVyIHRleHQteHMgdXBwZXJjYXNlIGZvbnQtYm9sZFwiXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dXJsPWh0dHBzJTNBJTJGJTJGZGVtb3MuY3JlYXRpdmUtdGltLmNvbSUyRm5vdHVzLW5leHRqcyUyRiZ0ZXh0PVN0YXJ0JTIweW91ciUyMGRldmVsb3BtZW50JTIwd2l0aCUyMGElMjBGcmVlJTIwVGFpbHdpbmQlMjBDU1MlMjBhbmQlMjBOZXh0SlMlMjBVSSUyMEtpdCUyMGFuZCUyMEFkbWluLiUyMExldCUyME5vdHVzJTIwTmV4dEpTJTIwYW1hemUlMjB5b3UlMjB3aXRoJTIwaXRzJTIwY29vbCUyMGZlYXR1cmVzJTIwYW5kJTIwYnVpbGQlMjB0b29scyUyMGFuZCUyMGdldCUyMHlvdXIlMjBwcm9qZWN0JTIwdG8lMjBhJTIwd2hvbGUlMjBuZXclMjBsZXZlbC5cIlxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIGZhYiBmYS10d2l0dGVyIHRleHQtbGcgbGVhZGluZy1sZyBcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGc6aGlkZGVuIGlubGluZS1ibG9jayBtbC0yXCI+VHdlZXQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWdyYXktNjAwIHRleHQtZ3JheS04MDAgcHgtMyBweS00IGxnOnB5LTIgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC14cyB1cHBlcmNhc2UgZm9udC1ib2xkXCJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vY3JlYXRpdmV0aW1vZmZpY2lhbC9ub3R1cy1uZXh0anM/cmVmPW5uanMtaW5kZXgtbmF2YmFyXCJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBmYWIgZmEtZ2l0aHViIHRleHQtbGcgbGVhZGluZy1sZyBcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGc6aGlkZGVuIGlubGluZS1ibG9jayBtbC0yXCI+U3Rhcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgdGV4dC13aGl0ZSBhY3RpdmU6YmctZ3JheS03MDAgdGV4dC14cyBmb250LWJvbGQgdXBwZXJjYXNlIHB4LTQgcHktMiByb3VuZGVkIHNoYWRvdyBob3ZlcjpzaGFkb3ctbGcgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBsZzptci0xIGxnOm1iLTAgbWwtMyBtYi0zIGVhc2UtbGluZWFyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTE1MFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYXJyb3ctYWx0LWNpcmNsZS1kb3duXCI+PC9pPiBEb3dubG9hZFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=