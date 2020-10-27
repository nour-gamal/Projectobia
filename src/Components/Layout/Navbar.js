import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
const Navbar = (props) => {
	const { auth, profile } = props;
	return (
		<nav className="nav-wrapper red darken-3">
			<div className="container-fluid">
				<Link to="/" className="brand-logo left">
					Projectobia
				</Link>
				{auth ? <SignedInLinks profile={profile} /> : <SignedOutLinks />}
			</div>
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
