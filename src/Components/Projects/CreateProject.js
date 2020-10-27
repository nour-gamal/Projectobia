import React, { Component } from "react";
import createProject from "../../Store/Actions/ProjectActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class CreateProject extends Component {
	state = {
		title: "",
		content: "",
	};

	changeHandler = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};

	submitHandler = (e) => {
		e.preventDefault();
		this.props.createProject(this.state);
		this.props.history.push("/");
	};

	render() {
		const auth = this.props.auth;
		if (!auth) {
			return <Redirect to="/signin"></Redirect>;
		}

		return (
			<div className="container">
				<form className="center-align" onSubmit={this.submitHandler}>
					<h5>Create new project</h5>
					<div className="input-field">
						<label htmlFor="title">Title</label>
						<input
							type="text"
							id="title"
							required
							value={this.state.title}
							onChange={this.changeHandler}
						/>
					</div>
					<div className="input-field">
						<label htmlFor="content">Content</label>
						<textarea
							required
							className="materialize-textarea"
							id="content"
							value={this.state.content}
							onChange={this.changeHandler}
						></textarea>
					</div>

					<div className="input-field">
						<button className="btn btn-success">Submit</button>
					</div>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		createProject: (project) => dispatch(createProject(project)),
	};
};
const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth.uid,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
