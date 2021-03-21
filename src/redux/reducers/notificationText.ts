import { TOGGLE_ERROR, TOGGLE_MESSAGE } from "../actionTypes";

const initialState = {
  errorText: "",
  message: "",
};

const notificationTextReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case TOGGLE_ERROR: {
      const { error } = action.payload;
      return {
        ...state,
        errorText: error,
      };
    }
    case TOGGLE_MESSAGE: {
      const { message } = action.payload;
      return {
        ...state,
        message: message,
      };
    }
    default:
      return state;
  }
};

export default notificationTextReducers;
