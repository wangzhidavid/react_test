import { combineReducers } from "redux";
import login from "./systemManage/login";
import moviesInfo from "./moviesInfoReducer/index";

const rootReducer = combineReducers({
  login,
  moviesInfo
});

export default rootReducer;
