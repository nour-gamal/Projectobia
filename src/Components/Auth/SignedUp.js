import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signup } from "../../Store/Actions/AuthActions";
class SignedUp extends Component {
	state = {
		email: "",
		password: "",
		firstName: "",
		lastName: "",
	};

	changeHandler = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};

	submitHandler = (e) => {
		e.preventDefault();
		this.props.signUp(this.state);
	};

	render(props) {
		const { auth, authError } = this.props;
		if (auth.uid) return <Redirect to="/" />;
		return (
			<div className="container">
				<form className="center-align" onSubmit={this.submitHandler}>
					<h5>Sign Up</h5>
					<div className="input-field">
						<label htmlFor="firstName">First name</label>
						<input
							type="text"
							id="firstName"
							value={this.state.firstName}
							onChange={this.changeHandler}
						/>
					</div>
					<div className="input-field">
						<label htmlFor="lastName">Last name</label>
						<input
							type="text"
							id="lastName"
							value={this.state.lastName}
							onChange={this.changeHandler}
						/>
					</div>

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
						<button className="btn btn-success"> Sign Up </button>
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
		auth: state.firebase.auth,
		authError: state.auth.authError,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		signUp: (newUser) => dispatch(signup(newUser)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(SignedUp);
