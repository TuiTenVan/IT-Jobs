import { combineReducers } from "redux";
import authenReducer from "./authentication";


const allReducers = combineReducers({
  authenReducer
  // Thêm nhiều reducer ở đây
});

export default allReducers;
