import React from 'react';
import { Link } from 'gatsby';

const ProjectLink = ({ project }) => (
    <Link to={'/project' + project.frontmatter.slug}>
        {project.frontmatter.title} ({project.frontmatter.date})
    </Link>
);

export default ProjectLink;
