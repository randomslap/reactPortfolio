import { combineReducers } from "redux";
import slideReducer from "./slideReducers";
export default combineReducers({
	index: slideReducer
});
