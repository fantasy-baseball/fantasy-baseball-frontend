import { fetchUser, deleteUser } from "../api";
import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  CHECK_USER,
  EXPIRED_TOKEN,
} from "../constants/actionTypes";

export const saveUser = (tokenId) => async (dispatch) => {
  dispatch({ type: LOGIN_PENDING });

  try {
    const { result, user, isInitialLogin } = await fetchUser(tokenId, "login");

    if (result === "ok") {
      dispatch({ type: LOGIN_SUCCESS, user });
      return isInitialLogin;
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
  try {
    const { result, user } = await fetchUser(tokenId, "checkUser");

    if (result === "ok") {
      dispatch({ type: CHECK_USER, user });
    } else {
      dispatch({ type: EXPIRED_TOKEN });
    }
  } catch (err) {
    console.error(err);
  }
};
