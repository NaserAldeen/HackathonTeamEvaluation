import { combineReducers } from "redux";
//import your reducer files here like the following two lines
import reducer from "./unnamed";
import auth from "./authentication";
const rootReducer = combineReducers({
  //the following two lines are an example
  semesters: reducer,
  rootAuth: auth
});

export default rootReducer;
