import React from 'react';
import { Link } from 'gatsby';

const ProjectLink = ({ project }) => (
    <Link className="project-link" to={'/project' + project.frontmatter.slug}>
        <p className="project-link__date">{project.frontmatter.date}</p>
        <h2 className="project-link__title">{project.frontmatter.title}</h2>
        <div>{project.excerpt}</div>
    </Link>
);

export default ProjectLink;
