import { combineReducers } from "redux";
import fullProgramReducer from "./program.reducers";

const rootReducer = combineReducers({
  program: fullProgramReducer
});

export default rootReducer;
