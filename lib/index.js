"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require("./actions");

var _reducer = require("./reducer");

exports.default = { getPermission: _actions.getPermission, sendNotification: _actions.sendNotification, renotifierReducer: _reducer.renotifierReducer };