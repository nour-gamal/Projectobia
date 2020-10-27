import React from "react";
import moment from "moment";
const ProjectSummary = ({
	authorFirstname,
	authorLastname,
	content,
	title,
	createdAt,
}) => {
	return (
		<div className="card z-depth-2  project-summary white-text red darken-3">
			<div className="card-content">
				<span className="card-title center-align ">{title}</span>
				<p>{content}</p>
			</div>
			<div className="card-action ">
				<div>
					Posted by {authorFirstname} {authorLastname}
				</div>
				<div>{moment(createdAt.toDate().toString()).calendar()}</div>
			</div>
		</div>
	);
};

export default ProjectSummary;
