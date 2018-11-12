webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./reducer.js":
/*!********************!*\
  !*** ./reducer.js ***!
  \********************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./actions.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  jobs: [{
    id: 1,
    company_name: 'Google',
    position_title: 'Software Engineer II',
    current_status: 'Applied'
  }, {
    id: 2,
    company_name: 'Apple',
    position_title: 'CAO',
    current_status: 'Interview Scheduled'
  }, {
    id: 1,
    company_name: 'Facebook',
    position_title: 'CEO',
    current_status: 'Offer Received'
  }]
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });
    // case actionTypes.INCREMENT:
    //   return {
    //     ...state,
    //     ...{count: state.count + 1}
    //   }
    // case actionTypes.DECREMENT:
    //   return {
    //     ...state,
    //     ...{count: state.count - 1}
    //   }
    // case actionTypes.RESET:
    //   return {
    //     ...state,
    //     ...{count: exampleInitialState.count}
    //   }
    // case actionTypes.LOAD_DATA_SUCCESS:
    //   return {
    //     ...state,
    //     ...{placeholderData: action.data}
    //   }
    // case actionTypes.TICK_CLOCK:
    //   return {
    //     ...state,
    //     ...{lastUpdate: action.ts, light: !!action.light}
    //   }

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ })

})
//# sourceMappingURL=_app.js.167a422d4efe75158e08.hot-update.js.map