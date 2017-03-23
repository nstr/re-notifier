const initialState = {
  allowed: false
};

const renotifierReducer = (state = initialState, action) => {
  switch (action.type) {
    case "renotifier/GETTING_PERMISSION":
      return Object.assign({}, state, {
        allowed: action.payload.allowed
      });
  }
  return state;
};

export default renotifierReducer;
