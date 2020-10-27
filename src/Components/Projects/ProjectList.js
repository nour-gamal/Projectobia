import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
	return (
		<div className="project-list section">
			{projects &&
				projects.map((project) => (
					<Link key={project.id} to={"/project/" + project.id}>
						<ProjectSummary
							authorFirstname={project.authorFirstname}
							authorLastname={project.authorLastname}
							title={project.title}
							content={project.content}
							createdAt={project.createdAt}
						/>
					</Link>
				))}
		</div>
	);
};

export default ProjectList;
