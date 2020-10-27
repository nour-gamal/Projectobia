const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

//exports.helloWorld = functions.https.onRequest((request, response) => {
//	functions.logger.info("Hello logs!", { structuredData: true });
//	response.send("Hello people from Firebase!");
//});

const createNotification = async (notification) => {
	const doc = await admin
		.firestore()
		.collection("notifications")
		.add(notification);
	return console.log("notification added ", doc);
};

exports.projectCreated = functions.firestore
	.document("Projects/{projectId}")
	.onCreate((doc) => {
		const project = doc.data();
		const notification = {
			content: "Added a new project",
			user: `${project.authorFirstname} ${project.authorLastname}`,
			time: admin.firestore.FieldValue.serverTimestamp(),
		};
		return createNotification(notification);
	});

/*exports.userJoined = functions.auth.user().onCreate((user) => {
	return admin()
		.firestore.collection("user")
		.doc(user.uid)
		.get()
		.then((doc) => {
			const newUser = doc.data;
			const notification = {
				content: "Joined the party",
				user: `${newUser.firstName} ${newUser.lasttName} `,
				time: admin.firestore.FieldValue.serverTimestamp(),
			};
			return createNotification(notification);
		});
});*/
exports.userJoined = functions.firestore
	.document("user/{uid}")
	.onCreate((doc) => {
		const user = doc.data();
		const notification = {
			content: "Joined the party",
			user: `${user.Firstname} ${user.Lastname}`,
			time: admin.firestore.FieldValue.serverTimestamp(),
		};
		return createNotification(notification);
	});
