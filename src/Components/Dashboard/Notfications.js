import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import moment from "moment";

const Notification = (props) => {
	const { Notifications } = props.Notifications;
	return (
		<div className="container project-details section ">
			<div className="card z-depth-2 white-text blue-grey darken-1">
				<div className="card-content">
					<span className="card-title center-align">Notifications</span>
					<ul>
						{Notifications &&
							Notifications.map((Notification) => {
								return (
									<li key={Notification.id}>
										<span className=" blue-text text-lighten-3 ">
											{Notification.authorFirstname}{" "}
											{Notification.authorLastname}{" "}
										</span>
										{Notification.action}
										<div className="blue-text text-lighten-4">
											{moment(Notification.createdAt.toDate().toString())
												.startOf("minute")
												.fromNow()}
										</div>
										<div className="divider"></div>
									</li>
								);
							})}
					</ul>
				</div>
			</div>
		</div>
	);
};

//export default Notification;
const mapstateToProps = (state, ownProps) => {
	//const firstName = state.firestore.data.Notifications.authorFirstname;
	//const lastName = state.firestore.data.Notifications.authorLastname;
	//const action = state.firestore.data.Notifications.action;
	//console.log(`${firstName} ${lastName} ${action} `);

	const Notifications = state.firestore.ordered.Notifications;

	return {
		Notifications: { Notifications },
	};
};

export default compose(
	connect(mapstateToProps),
	firestoreConnect([
		{ collection: "Notifications", limit: 3, orderBy: ["createdAt", "desc"] },
	])
)(Notification);
