import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from "../constants/actionTypes";

export const waitUser = () => ({
  type: LOGIN_PENDING,
});

export const createUser = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const failLogin = () => ({
  type: LOGIN_FAILURE,
});

export const deleteUser = () => ({
  type: LOGOUT,
});

export const saveUser = (tokenId) => async (dispatch) => {
  dispatch(waitUser());

  try {
    const res = await fetch(`${process.env.REACT_APP_API_ADDRESS}/users/login`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenId}`,
      },
      credentials: "include",
    });
    const { result, data } = await res.json();

    if (result === "ok") {
      dispatch(createUser(data));
    } else {
      dispatch(failLogin());
    }
  } catch {
    dispatch(failLogin());
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
    dispatch(deleteUser());
  }
};
