"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPermission = getPermission;
exports.sendNotification = sendNotification;
function getPermission() {
  return function (dispatch) {
    var Notification = window.Notification;
    if (Notification && Notification.permission !== "denied") {
      Notification.requestPermission(function (status) {
        dispatch({
          type: "renotifier/GETTING_PERMISSION",
          payload: {
            allowed: status === "granted"
          }
        });
      });
    }
  };
}

function sendNotification(actionData) {
  return function (dispatch) {
    var data = [actionData.title];
    if (actionData.options) data.push(actionData.options);

    var n = new (Function.prototype.bind.apply(Notification, [null].concat(data)))();
    dispatch({
      type: "renotifier/SEND_NITIFICATION",
      data: actionData
    });
    if (actionData.onclick) n.onclick = actionData.onclick;
    if (actionData.closeOnclick) n.addEventListener("click", function () {
      return n.close();
    });
  };
}