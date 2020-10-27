import React, { Component } from "react";
import { connect } from "react-redux";
import { signin } from "../../Store/Actions/AuthActions";
import { Redirect } from "react-router-dom";
class SignedIn extends Component {
	state = {
		email: "",
		password: "",
	};

	changeHandler = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};

	submitHandler = (e) => {
		e.preventDefault();
		this.props.signIn(this.state);
	};

	render() {
		const { authError } = this.props;
		const { auth } = this.props;
		if (auth.uid) return <Redirect to="/"></Redirect>;
		return (
			<div className="container">
				<form className="center-align" onSubmit={this.submitHandler}>
					<h5>Sign In</h5>
					<div className="input-field">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							value={this.state.email}
							onChange={this.changeHandler}
						/>
					</div>
					<div className="input-field">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							value={this.state.password}
							onChange={this.changeHandler}
						/>
					</div>
					<div className="input-field">
						<button className="btn btn-success"> Sign In </button>
					</div>
					<div className="red-text">
						{authError ? <div>{authError}</div> : null}
					</div>
				</form>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		authError: state.auth.authError,
		auth: state.firebase.auth,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		signIn: (creds) => dispatch(signin(creds)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignedIn);
