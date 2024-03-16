import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import ProjectLink from './ProjectLink';

const FeaturedEssays = () => {
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

    const Essays = edges
        .filter((edge) => edge.node.frontmatter.type === 'essay')
        .filter((edge) => edge.node.frontmatter.featured === true)
        .map((edge) => <ProjectLink key={edge.node.id} project={edge.node} />);

    return (
        <div className="featured-essays">
            <h2 className="index-label">Featured Essays</h2>
            <div className="essays-grid">{Essays}</div>
        </div>
    );
};

export default FeaturedEssays;
