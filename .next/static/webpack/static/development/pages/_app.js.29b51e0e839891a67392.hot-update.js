webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./actions.js":
/*!********************!*\
  !*** ./actions.js ***!
  \********************/
/*! exports provided: actionTypes, failure, saveJob */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failure", function() { return failure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveJob", function() { return saveJob; });
var actionTypes = {
  SAVE_JOB: 'SAVE_JOB'
};
function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error: error
  };
}
function saveJob() {
  return {
    type: actionTypes.SAVE_JOB
  };
}

/***/ })

})
//# sourceMappingURL=_app.js.29b51e0e839891a67392.hot-update.js.map