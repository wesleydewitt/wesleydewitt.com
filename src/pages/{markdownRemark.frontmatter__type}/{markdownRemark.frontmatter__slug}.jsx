import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../layouts/Layout";
import DailyWritingPiece from "../../components/DailyWritingPiece";
import LongFormPiece from "../../components/LongFormPiece";

function CountWords(html) {
	const text = html.replace(/<[^>]+>/g, " ").trim();

	return text.split(/\s+/).filter((word) => word !== "").length;
}

function calculateReadTime(wordCount) {
	const readTime = wordCount / 200;

	return Math.round(wordCount / 200);
}

export default function EssayAndProjectPageTemplate({ data }) {
	const { frontmatter, html } = data.markdownRemark;
	const wordCount = CountWords(html);
	const readTime = calculateReadTime(wordCount);
	const imageUrl = "../../photos/" + frontmatter.image;

	if (frontmatter.type === "daily") {
		return (
			<Layout>
				<DailyWritingPiece
					frontmatter={frontmatter}
					html={html}
					wordCount={wordCount}
					readTime={readTime}
				/>
			</Layout>
		);
	} else if (frontmatter.type === "long-form") {
		return (
			<Layout>
				<LongFormPiece
					frontmatter={frontmatter}
					html={html}
					wordCount={wordCount}
					readTime={readTime}
					imageUrl={imageUrl}
				/>
			</Layout>
		);
	} else {
		return <Layout></Layout>;
	}
}

export const Head = ({ data }) => {
	const { frontmatter } = data.markdownRemark;

	return (
		<>
			<title>{frontmatter.title} by Wesley De Witt</title>
		</>
	);
};

export const pageQuery = graphql`
	query ($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			frontmatter {
				date(formatString: "MMMM D, YYYY")
				slug
				title
				type
				image
			}
		}
	}
`;
