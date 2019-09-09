import { combineReducers } from "redux";
import slideReducer from "./slideReducers";
import apiReducer from "./apiReducers";
export default combineReducers({
	index: slideReducer,
	api: apiReducer
});
