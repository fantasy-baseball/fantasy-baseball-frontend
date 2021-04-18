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
