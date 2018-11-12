webpackHotUpdate("static/development/pages/jobs.js",{

/***/ "./components/JobsList.js":
/*!********************************!*\
  !*** ./components/JobsList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_JobListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/JobListItem */ "./components/JobListItem.js");
var _jsxFileName = "/Users/andrwln/dev/react-job-butler/components/JobsList.js";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n  div {\n    width: 20%;\n    padding: 5px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: grey;\n  max-width: 1200px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var JobsListContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var JobsListHeaders = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());

function JobsList(_ref) {
  var jobs = _ref.jobs;
  console.log('props: ', jobs);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(JobsListContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(JobsListHeaders, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Company Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Position Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Status")), jobs.map(function (job) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_JobListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      job: job,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    });
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (JobsList);

/***/ })

})
//# sourceMappingURL=jobs.js.c489c56b1f7cfa4dc5d5.hot-update.js.map