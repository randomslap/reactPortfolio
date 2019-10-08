import history from "../history";

export const setFirstSlide = () => {
	history.push("/");
	return {
		type: "FIRST"
	};
};

export const setSecondSlide = () => {
	history.push("/about");
	return {
		type: "SECOND"
	};
};

export const setThirdSlide = () => {
	history.push("/contact");
	return {
		type: "THIRD"
	};
};
