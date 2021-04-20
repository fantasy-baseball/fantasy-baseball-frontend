import { fetchUser, deleteUser } from "../api";
import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "../constants/actionTypes";

export const saveUser = (tokenId) => async (dispatch) => {
  dispatch({ type: LOGIN_PENDING });

  try {
    const { result, user } = await fetchUser(tokenId);

    if (result === "ok") {
      dispatch({ type: LOGIN_SUCCESS, user });
    } else {
      dispatch({ type: LOGIN_FAILURE });
    }
  } catch {
    dispatch({ type: LOGIN_FAILURE });
  }
};

export const clearUser = () => async (dispatch) => {
  const result = await deleteUser();

  if (result === "ok") {
    dispatch({ type: LOGOUT });
  }
};
