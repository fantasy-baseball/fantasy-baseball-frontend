import produce from "immer";
import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from "../constants/actionTypes";

const initialState = {
  user: null,
  isLoading: false,
};

const reducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export default reducer;
