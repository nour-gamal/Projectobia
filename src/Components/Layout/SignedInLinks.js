import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signout } from "../../Store/Actions/AuthActions";
const SignedInLinks = (props) => {
	return (
		<ul className="right">
			<li>
				<NavLink to="/createproject">Create Project</NavLink>
			</li>
			<li onClick={props.signOut}>Sign out</li>
			<li>
				<NavLink to="/" className="btn btn-floating red darken-1">
					{props.profile.initial}
				</NavLink>
			</li>
		</ul>
	);
};

const mapDispatchToProps = (dispatch) => {
	return { signOut: () => dispatch(signout()) };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
