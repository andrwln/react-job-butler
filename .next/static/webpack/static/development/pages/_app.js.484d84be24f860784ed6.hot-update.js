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
function saveJob(job) {
  return {
    type: actionTypes.SAVE_JOB,
    payload: job
  };
}

/***/ })

})
//# sourceMappingURL=_app.js.484d84be24f860784ed6.hot-update.js.map