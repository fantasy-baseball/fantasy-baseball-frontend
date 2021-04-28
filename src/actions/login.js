import { fetchUser, deleteUser } from "../api/login";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  CHECK_USER,
  EXPIRED_TOKEN,
  UPDATE_MONEY,
  START_LOADING,
  FINISH_LOADING,
} from "../constants/actionTypes";

export const saveUser = (result, user) => async (dispatch) => {
  try {
    if (result === "ok") {
      dispatch({ type: LOGIN_SUCCESS, user });
      return;
    }

    dispatch({ type: LOGIN_FAILURE });
  } catch {
    dispatch({ type: LOGIN_FAILURE });
  }
};

export const clearUser = () => async (dispatch) => {
  try {
    const result = await deleteUser();

    if (result === "ok") {
      dispatch({ type: LOGOUT });
    }
  } catch (err) {
    console.error(err);
  }
};

export const checkUser = (tokenId) => async (dispatch) => {
  dispatch({ type: START_LOADING });
  try {
    const { result, user } = await fetchUser(tokenId, "checkUser");

    if (result === "ok") {
      dispatch({ type: CHECK_USER, user });
    } else {
      dispatch({ type: EXPIRED_TOKEN });
    }
    dispatch({ type: FINISH_LOADING });
  } catch (err) {
    console.error(err);
  }
};

export const updateMoney = (bettingMoney) => ({ type: UPDATE_MONEY, bettingMoney });
