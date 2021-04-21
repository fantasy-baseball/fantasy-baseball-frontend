import {
  FETCH_TODAY_GAME_SCHEDULE,
  FETCH_TODAY_USERS_RANKING,
  FETCH_TODAY_PITCHERS_RANKING,
  FETCH_TODAY_HITTERS_RANKING,
} from "../constants/actionTypes";

const initialState = {
  schedule: [],
  usersRanking: [],
  pitchersRanking: [],
  hittersRanking: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODAY_GAME_SCHEDULE:
      return {
        ...state,
        schedule: action.schedule,
      };
    default:
      return state;
  }
};

export default reducer;
