const createProject = (project) => {
	return (dispatch, getState, { getFirestore, getFirebase }) => {
		//make async calls to database
		const firestore = getFirestore();
		const profile = getState();
		firestore.collection("Notifications").add({
			authorFirstname: profile.firebase.profile.firstName,
			authorLastname: profile.firebase.profile.lastName,
			action: "created a project",
			createdAt: new Date(),
		});
		firestore
			.collection("Projects")
			.add({
				...project,
				authorFirstname: profile.firebase.profile.firstName,
				authorLastname: profile.firebase.profile.lastName,
				authorId: profile.firebase.auth.uid,
				createdAt: new Date(),
			})
			.then(() => dispatch({ type: "CREATE_PROJECT", project: project }))
			.catch((err) => dispatch({ type: "CREATE_PROJECT_ERROR", err }));
	};
};

export default createProject;
