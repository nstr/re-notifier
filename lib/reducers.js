"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var initialState = {
  allowed: false
};

var renotifierReducers = function renotifierReducers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case "renotifier/GETTING_PERMISSION":
      return Object.assign({}, state, {
        allowed: action.payload.allowed
      });
  }
  return state;
};

exports.default = renotifierReducers;