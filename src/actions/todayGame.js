import { fetchSchedule } from "../api";
import {
  FETCH_TODAY_GAME_SCHEDULE,
  FETCH_TODAY_USERS_RANKING,
  FETCH_TODAY_PITCHERS_RANKING,
  FETCH_TODAY_HITTERS_RANKING,
} from "../constants/actionTypes";

export const getSchedule = () => async (dispatch) => {
  try {
    const schedule = await fetchSchedule();
    dispatch({ type: FETCH_TODAY_GAME_SCHEDULE, schedule });
  } catch (err) {
    console.error(err);
  }
};

// TODO: ESLint 에러 방지를 위해 추가한 코드. 데이터 연결 시 사용 예정
export const getUsersRanking = () => async (dispatch) => {};
