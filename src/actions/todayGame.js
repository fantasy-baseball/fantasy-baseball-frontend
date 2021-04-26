import {
  fetchPlayerRankings,
  fetchSchedule,
  fetchUserRankings,
} from "../api/game";
import {
  FETCH_TODAY_GAME_SCHEDULE,
  FETCH_USER_RANKINGS,
  FETCH_PLAYER_RANKINGS,
} from "../constants/actionTypes";
import { refinePlayerRankings } from "../utils";

export const getSchedule = (date) => async (dispatch) => {
  try {
    const schedule = await fetchSchedule(date);
    dispatch({ type: FETCH_TODAY_GAME_SCHEDULE, schedule });
  } catch (err) {
    console.error(err);
  }
};

export const getUserRankings = (date) => async (dispatch) => {
  try {
    const fetchedUserRankings = await fetchUserRankings(date);

    if (fetchedUserRankings.result === "none") {
      const userRankings = fetchedUserRankings;
      dispatch({ type: FETCH_USER_RANKINGS, userRankings });
      return;
    }

    const userRankings = fetchedUserRankings
      .map((ranking) => {
        const { name, imageUrl } = ranking.user;
        return {
          name,
          earnedMoney: ranking.earnedMoney,
          imageUrl,
          rank: ranking.rank,
        };
      })
      .slice(0, 5);

    dispatch({ type: FETCH_USER_RANKINGS, userRankings });
  } catch (err) {
    console.error(err);
  }
};

export const getPlayerRankings = (date) => async (dispatch) => {
  try {
    const fetchedPlayerRankings = await fetchPlayerRankings(date);

    if (fetchedPlayerRankings.result === "none") {
      const pitcherRankings = { result: "none" };
      const hitterRankings = { result: "none" };
      dispatch({
        type: FETCH_PLAYER_RANKINGS,
        pitcherRankings,
        hitterRankings,
      });
      return;
    }

    const pitcherRankings = refinePlayerRankings(fetchedPlayerRankings.pitchers).slice(0, 5);
    const hitterRankings = refinePlayerRankings(fetchedPlayerRankings.hitters).slice(0, 5);

    dispatch({
      type: FETCH_PLAYER_RANKINGS,
      pitcherRankings,
      hitterRankings,
    });
  } catch (err) {
    console.error(err);
  }
};
