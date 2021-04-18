import produce from "immer";
import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from "../constants/actionTypes";
import {
  createUser,
  deleteUser,
  failLogin,
  waitUser
} from "../actions/user";

const initialState = {
  user: null,
  isLoading: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_PENDING:
      return produce(state, (draft) => {
        const draftState = draft;
        draftState.isLoading = true;
      });
    case LOGIN_SUCCESS:
      return produce(state, (draft) => {
        const draftState = draft;
        draftState.isLoading = false;
        draftState.user = action.payload;
      });
    case LOGIN_FAILURE:
      return initialState;
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

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
    const { data } = await res.json();
    dispatch(createUser(data));
  } catch {
    dispatch(failLogin());
  }
};

export const clearUser = () => async (dispatch) => {
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("@token"))
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

export default reducer;
