import React from "react";

const Project = ({ frontmatter, html }) => (
	<article className="project">
		{/* <p className='project-date'>Project</p> */}
		<h3 className="project-title">{frontmatter.title}</h3>
		{/* <h4 className='project-subtitle'>{frontmatter.subtitle}</h4> */}
		<div className="project-body" dangerouslySetInnerHTML={{ __html: html }} />
	</article>
);

export default Project;
