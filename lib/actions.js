"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPermission = getPermission;
exports.sendNotification = sendNotification;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
    var data = { title: actionData.title };
    if (actionData.options) data["options"] = actionData.options;

    var n = new (Function.prototype.bind.apply(Notification, [null].concat(_toConsumableArray(data))))();
    dispatch({
      type: "renotifier/SEND_NITIFICATION",
      data: actionData
    });
    if (actionData.onclickDispatch) n.onclick = function () {
      return dispatch({
        type: actionData.onclickDispatch,
        data: actionData
      });
    };
  };
}