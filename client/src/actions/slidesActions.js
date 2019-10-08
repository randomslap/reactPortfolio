import history from "../history";

export const setFirstSlide = () => {
	history.push("/about");
	return {
		type: "FIRST"
	};
};

export const setSecondSlide = () => {
	history.push("/portfolio");
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
