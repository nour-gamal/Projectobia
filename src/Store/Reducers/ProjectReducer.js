const initState = {
	projects: [],
};

const projectReducer = (state = initState, action) => {
	switch (action.type) {
		case "CREATE_PROJECT":
			console.log("CREATED PROJECT", action.project);
			return state;
		case "CREATE_PROJECT_ERROR":
			console.log("CREATED PROJECT Error", action.err);
			return state;
		default:
			return state;
	}
};

export default projectReducer;
