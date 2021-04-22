import produce from "immer";
import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  CHECK_USER,
  EXPIRED_TOKEN,
  UPDATE_MONEY,
} from "../constants/actionTypes";

const initialState = {
  user: null,
  isLoading: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_PENDING:
      return produce(state, (draft) => {
        draft.isLoading = true;
      });
    case LOGIN_SUCCESS:
      return produce(state, (draft) => {
        draft.isLoading = false;
        draft.user = action.user;
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
        draft.user = action.user;
      });
    case UPDATE_MONEY:
      return produce(state, (draft) => {
        draft.user.money -= action.bettingMoney;
      });
    default:
      return state;
  }
};

export default user;
