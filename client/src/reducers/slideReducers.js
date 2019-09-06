import { FIRST, SECOND } from "../actions/types";

const initialState = {
	index: 0
};

export default function(state = initialState, action) {
	switch (action.type) {
		case FIRST:
			return {
				index: 1
			};
		case SECOND:
			return {
				index: 2
			};
		default:
			return state;
	}
}
