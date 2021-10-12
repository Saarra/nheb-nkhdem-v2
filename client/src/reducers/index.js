import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import emploiReducer from "./emploiReducer"
import productReducer from "./productReducer"
import contactReducer from "./contactusReducer"

export default combineReducers({
  auth,
  message,
  emploiReducer, 
  productReducer, 
  contactReducer
});
