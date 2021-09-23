import { combineReducers } from "redux";
import registerReducers from "./registerReducer";

const rootReducer = combineReducers({
  registerReducers: registerReducers,
});

export default rootReducer;
