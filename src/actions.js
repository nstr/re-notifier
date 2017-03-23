export function getPermission() {
  return (dispatch) => {
    const Notification = window.Notification;
    if (Notification && Notification.permission !== "denied") {
      Notification.requestPermission((status) => {
        dispatch({
          type: "renotifier/GETTING_PERMISSION",
          allowed: status === "granted"
        });
      });
    }
  };
}

export function sendNotification(actionData) {
  return (dispatch) => {
    let data = { title: actionData.title };
    if (actionData.options) data["options"] = actionData.options;

    const n = new Notification(...data);
    dispatch({
      type: "renotifier/SEND_NITIFICATION",
      data: actionData
    });
    if (actionData.onclickDispatch) n.onclick = () => dispatch({
      type: actionData.onclickDispatch,
      data: actionData
    });
  };
}
