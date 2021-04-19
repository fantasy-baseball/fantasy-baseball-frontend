import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from "../constants/actionTypes";

export const saveUser = (tokenId) => async (dispatch) => {
  dispatch({ type: LOGIN_PENDING });

  try {
    const res = await fetch(`${process.env.REACT_APP_API_ADDRESS}/users/login`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenId}`,
      },
      credentials: "include",
    });
    const { result, data: user } = await res.json();

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
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token"))
    .split("=")[1];

  const res = await fetch(`${process.env.REACT_APP_API_ADDRESS}/users/logout`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    credentials: "include",
  });

  const { result } = await res.json();

  if (result === "ok") {
    dispatch({ type: LOGOUT });
  }
};
