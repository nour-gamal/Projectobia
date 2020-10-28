import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
const Navbar = (props) => {
	const { auth, profile } = props;
	return (
		<nav className="nav-wrapper  blue-grey darken-1">
			<div className="container-fluid">
					<Link to="/" className="brand-logo left">
						Projectobia
					</Link>
					{auth ? <SignedInLinks profile={profile} /> : <SignedOutLinks />}
		</nav>
	);
};

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth.uid,
		profile: state.firebase.profile,
	};
};

export default connect(mapStateToProps)(Navbar);
