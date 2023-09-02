import { combineReducers } from "redux";
import { reducer } from "../src/redux/reducer";

//Combine all the sub reducers
const rootReducer = combineReducers({
  userReducer: reducer
});

export default rootReducer;
