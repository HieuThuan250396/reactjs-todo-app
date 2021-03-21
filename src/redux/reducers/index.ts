import { combineReducers } from "redux";

import notificationTextReducers from "./notificationText";

console.log('created reducer');

export default combineReducers({ errorReducers: notificationTextReducers });
