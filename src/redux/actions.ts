import { TOGGLE_ERROR, TOGGLE_MESSAGE } from "./actionTypes";

export const toggleError = (error: String) => ({
  type: TOGGLE_ERROR,
  payload: { error },
});

export const toggleMessage = (message: String) => ({
  type: TOGGLE_MESSAGE,
  payload: { message },
});
