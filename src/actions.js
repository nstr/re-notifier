export function getPermission() {
  return (dispatch) => {
    const Notification = window.Notification;
    if (Notification && Notification.permission !== "denied") {
      Notification.requestPermission((status) => {
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

export function sendNotification(actionData) {
  return (dispatch) => {
    let data = [actionData.title];
    if (actionData.options) data.push(actionData.options);

    const n = new Notification(...data);
    dispatch({
      type: "renotifier/SEND_NITIFICATION",
      data: actionData
    });
    if (actionData.onclick) n.onclick = actionData.onclick;
  };
}
