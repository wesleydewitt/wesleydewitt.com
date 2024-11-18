import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import LongFormLink from "../LongFormLink";

const LongFormSection = () => {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
				edges {
					node {
						id
						excerpt(pruneLength: 1000)
						frontmatter {
							date(formatString: "MMMM D, YYYY")
							slug
							type
							title
							description
							image
							color
						}
						html
					}
				}
			}
		}
	`);

	const { edges } = data.allMarkdownRemark;

	const LongForms = edges
		.filter((edge) => edge.node.frontmatter.type === "long-form")
		.map((edge) => <LongFormLink key={edge.node.id} longForm={edge.node} />);

	return (
		<div className="index-section long-form">
			<h3 className="index-section__label">Featured</h3>

			<div className="long-form__list">{LongForms}</div>
		</div>
	);
};

export default LongFormSection;
