import { PROJECTS } from "../actions/types";
import API from "../utils/API";

const initialState = {
	projects: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case PROJECTS:
			return {
				projects: action.data
			};
		default:
			return state;
	}
}
