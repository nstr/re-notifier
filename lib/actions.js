"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.getPermission = getPermission;
exports.sendNotification = sendNotification;
function getPermission() {
  return function (dispatch) {
    var Notification = window.Notification;
    if (Notification && Notification.permission !== "denied") {
      Notification.requestPermission(function (status) {
        dispatch({
          type: "renotifier/GETTING_PERMISSION",
          allowed: status === "granted"
        });
      });
    }
  };
}

function sendNotification(actionData) {
  return function (dispatch) {
    var n = new Notification(_extends({}, actionData.data));
    dispatch({
      type: "renotifier/SEND_NITIFICATION",
      data: actionData.data
    });
    if (actionData.dispatchType) n.onclick = function () {
      return dispatch({
        type: actionData.dispatchType,
        data: actionData.data
      });
    };
  };
}