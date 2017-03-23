"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require("./actions");

var _reducer = require("./reducer");

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = { getPermission: _actions.getPermission, sendNotification: _actions.sendNotification, renotifierReducer: _reducer2.default };