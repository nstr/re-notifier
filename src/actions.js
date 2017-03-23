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
    const n = new Notification({...actionData.data});
    dispatch({
      type: "renotifier/SEND_NITIFICATION",
      data: actionData.data
    });
    if (actionData.dispatchType) n.onclick = () => dispatch({
      type: actionData.dispatchType,
      data: actionData.data
    });
  };
}
