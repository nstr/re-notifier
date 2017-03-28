# re-notifier
Redux notifier with using standard web HTML5 API for browser notification

## Installation

```
npm i re-notifier --save
```

## Usage

First step: Add re-notifier to your redux reducers. 

```js
import { combineReducers } from "redux";

import { renotifierReducer } from "re-notifier";

const reducers = combineReducers({
  ...
  renotifier: renotifierReducer
  ...
});

export default reducers;
```

Next step: You must get a permission. Ask user about access to his browser notification.

```jsx
import { getPermission } from "re-notifier";

class SomeComponent extends React.Component{
  ...
  componentDidMount() {
   this.props.dispatch(getPermisson());
  }
  ...
}
```

After all, you will get the opportunity to send browser notification using re-notifier actions in the way: 

```jsx
import { sendNotification } from "re-notifier";

this.props.dispatch(sendNotification({
  title: "This is a title",
  options: {
    body: "this is a description"
  },
  onclick: function() { console.log("a user made click to the notification") }
}));

```
Module "re-notifier" serve all web HTML5 API standards.

Property | Type | Description
:---|:---|:---
title | `string` (required) | A title of the notication.
options | `Object` | Notification items such as `body`, `icon`, `tag` and etc.
onclick | `function` | Function which was called after click.
