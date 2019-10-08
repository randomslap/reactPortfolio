import { FIRST, SECOND, THIRD } from "../actions/types";
import history from "../history";

const initialState = {
	index: 0
};

export default function(state = initialState, action) {
	switch (history.location.pathname) {
		case "/about":
			return {
				index: 1
			};
		case "/portfolio":
			return {
				index: 2
			};
		case "/contact":
			return {
				index: 3
			};
		default:
			return state;
	}
}
