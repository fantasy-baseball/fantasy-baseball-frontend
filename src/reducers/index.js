import { combineReducers } from "redux";
import user from "./user";
import todayGame from "./todayGame";

const reducers = combineReducers({
  user,
  todayGame,
});

export default reducers;
