import { createStore } from "redux";
import rootReducer from "./reducers";

console.log('created store');

export default createStore(rootReducer);
