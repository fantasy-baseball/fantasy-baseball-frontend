import produce from "immer";

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

const initialState = {
  user: null,
  isLoading: true,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return produce(state, (draft) => {
        draft.user = action.user;
        draft.isAuth = true;
      });
    case LOGIN_FAILURE:
      return initialState;
    case LOGOUT:
      return initialState;
    case CHECK_USER:
      return produce(state, (draft) => {
        draft.user = action.user;
      });
    case EXPIRED_TOKEN:
      return produce(state, (draft) => {
        draft.user = null;
      });
    case UPDATE_MONEY:
      return produce(state, (draft) => {
        draft.user.money -= action.bettingMoney;
      });
    case START_LOADING:
      return produce(state, (draft) => {
        draft.isLoading = true;
      });
    case FINISH_LOADING:
      return produce(state, (draft) => {
        draft.isLoading = false;
      });
    default:
      return state;
  }
};

export default user;
