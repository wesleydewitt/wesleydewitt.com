import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import DailyWritingLink from "../DailyWritingLink";

const DailyWriting = () => {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
				edges {
					node {
						id
						excerpt(pruneLength: 250)
						frontmatter {
							date(formatString: "MMMM D, YYYY")
							slug
							title
							type
						}
						html
					}
				}
			}
		}
	`);

	const { edges } = data.allMarkdownRemark;

	const DailyWritings = edges
		.filter((edge) => edge.node.frontmatter.type === "daily")
		.map((edge) => <DailyWritingLink key={edge.node.id} dailyWriting={edge.node} />);

	return (
		<div className="index-section daily-writing">
			<h3 className="index-section__label">All Entries</h3>

			<div className="daily-writing__list">{DailyWritings}</div>
		</div>
	);
};

export default DailyWriting;
