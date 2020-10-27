import React, { Component } from "react";
import Notfications from "./Notfications";
import ProjectList from "../Projects/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
class Dashboard extends Component {
	render() {
		const projects = this.props.project;
		const auth = this.props.auth;
		if (!auth) return <Redirect to="/signin"></Redirect>;
		return (
			<div className="dashboard container ">
				<div className="row">
					<div className="col s12 m6">
						<ProjectList projects={projects} />
					</div>
					<div className="col s12 m6">
						<Notfications />
					</div>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		project: state.firestore.ordered.Projects,
		auth: state.firebase.auth.uid,
	};
};

export default compose(
	firestoreConnect(() => ["Projects"]),
	connect(mapStateToProps)
)(Dashboard);
