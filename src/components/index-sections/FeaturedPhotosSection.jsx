import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const FeaturedPhotosSection = () => {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
				edges {
					node {
						id
						excerpt(pruneLength: 1000)
						frontmatter {
							date(formatString: "MMMM DD, YYYY")
							slug
							type
							title
							description
						}
						html
					}
				}
			}
		}
	`);

	return (
		<div className="index-section photos">
			<h3 className="index-section__label">Photos</h3>
			<div></div>
		</div>
	);
};

export default FeaturedPhotosSection;
