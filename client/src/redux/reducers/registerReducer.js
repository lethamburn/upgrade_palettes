import * as actions from "../actions/registerActions";

export const initialState = {
  user: {},
};

export default function register(state = initialState, action) {
  switch (action.type) {
    case actions.REGISTER_OK:
      return { user: action.payload };
    case actions.REGISTER_ERROR:
      return { ...state };
    default:
      return state;
  }
}
