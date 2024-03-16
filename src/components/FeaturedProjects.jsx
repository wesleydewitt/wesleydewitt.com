import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import ProjectLink from './ProjectLink';

const FeaturedProjects = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
                edges {
                    node {
                        id
                        excerpt(pruneLength: 250)
                        frontmatter {
                            date(formatString: "MMMM DD, YYYY")
                            slug
                            title
                            type
                            featured
                        }
                    }
                }
            }
        }
    `);

    const { edges } = data.allMarkdownRemark;

    const Projects = edges
        .filter((edge) => edge.node.frontmatter.type === 'project')
        .filter((edge) => edge.node.frontmatter.featured === true)
        .map((edge) => <ProjectLink key={edge.node.id} project={edge.node} />);

    return (
        <div className="featured-projects">
            <h2 className="index-label">Featured Projects</h2>
            <div className="projects-grid">{Projects}</div>
        </div>
    );
};

export default FeaturedProjects;
