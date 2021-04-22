import { combineReducers } from "redux";
import login from "./login";
import todayGame from "./todayGame";

const reducers = combineReducers({
  login,
  todayGame,
});

export default reducers;
