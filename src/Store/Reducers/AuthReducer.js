const initState = {
	authError: null,
};

const authReducer = (state = initState, action) => {
	switch (action.type) {
		case "Login_Error":
			console.log("login error");
			return { ...state, authError: "Login Failed" };
		case "Login_success":
			console.log("login success");
			return { ...state, authError: null };
		case "signOut_success":
			console.log("signout success");
			return state;
		case "signUp_success":
			console.log("signup success");
			return { ...state, authError: null };
		case "signUp_Error":
			console.log("signup Error");
			return { ...state, authError: action.error };

		default:
			return state;
	}
};

export default authReducer;
