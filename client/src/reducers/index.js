import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import emploiReducer from "./emploiReducer"

export default combineReducers({
  auth,
  message,
  emploiReducer
});
