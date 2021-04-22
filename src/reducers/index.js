import { combineReducers } from "redux";
import login from "./login";
import todayGame from "./todayGame";
import modal from "./modal";

const reducers = combineReducers({
  login,
  todayGame,
  modal,
});

export default reducers;
