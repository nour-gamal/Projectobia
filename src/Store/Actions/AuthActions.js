export const signin = (Credential) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firebase = getFirebase();
		firebase
			.auth()
			.signInWithEmailAndPassword(Credential.email, Credential.password)
			.then(() => {
				dispatch({ type: "Login_success" });
			})
			.catch((error) => {
				dispatch({ type: "Login_Error", error });
			});
	};
};

export const signout = () => {
	return (dispatch, state, { getFirebase }) => {
		const firebase = getFirebase();
		firebase
			.auth()
			.signOut()
			.then(() => {
				dispatch({ type: "signOut_success" });
			});
	};
};

export const signup = (newUser) => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();
		const firestore = getFirebase().firestore();

		firebase
			.auth()
			.createUserWithEmailAndPassword(newUser.email, newUser.password)
			.then((resp) => {
				return firestore
					.collection("user")
					.doc(resp.user.uid)
					.set({
						firstName: newUser.firstName,
						lastName: newUser.lastName,
						initial: newUser.firstName[0] + newUser.lastName[0],
					});
			})
			.then(() => {
				return firestore.collection("Notifications").add({
					authorFirstname: newUser.firstName,
					authorLastname: newUser.lastName,
					action: "Signed up",
					createdAt: new Date(),
				});
			})
			.then(() => {
				dispatch({ type: "signUp_success" });
			})
			.catch((error) => {
				dispatch({ type: "signUp_Error" }, error);
			});
	};
};

export default { signin, signout, signup };
