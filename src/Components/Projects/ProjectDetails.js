import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

const ProjectDetails = (props) => {
	//const id = props.match.params.id;
	const { project } = props.project;
	const { auth } = props;
	if (!auth.uid) return <Redirect to="/signin"></Redirect>;
	if (project) {
		return (
			<div className="container project-details section ">
				<div className="card z-depth-2 white-text blue-grey darken-1">
					<div className="card-content">
						<span className="card-title center-align">{project.title}</span>
						<p>{project.content}</p>
					</div>
					<div className="card-action  ">
						<div>
							Posted by {project.authorFirstname} {project.authorLastname}
						</div>
						<div>
							{moment(project.createdAt.toDate().toString()).calendar()}
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="container center">
				<h2>Loading projects ...</h2>
			</div>
		);
	}
};
const mapstateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id;
	const projects = state.firestore.data.Projects;
	const project = projects ? projects[id] : null;
	return {
		project: { project },
		auth: state.firebase.auth,
	};
};

export default compose(
	connect(mapstateToProps),
	firestoreConnect([{ collection: "Projects", orderBy: ["createdAt", "desc"] }])
)(ProjectDetails);
