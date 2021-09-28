import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import emploiReducer from "./emploiReducer"
import productReducer from "./productReducer"

export default combineReducers({
  auth,
  message,
  emploiReducer, 
  productReducer
});
