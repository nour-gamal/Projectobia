import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";
import ProjectDetails from "./Components/Projects/ProjectDetails";
import SignedIn from "./Components/Auth/SignedIn";
import SignedUp from "./Components/Auth/SignedUp";
import CreateProject from "./Components/Projects/CreateProject";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch>
					<Route exact path="/" component={Dashboard} />
					<Route path="/project/:id" component={ProjectDetails} />
					<Route path="/signin" component={SignedIn} />
					<Route path="/signup" component={SignedUp} />
					<Route path="/createproject" component={CreateProject} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
