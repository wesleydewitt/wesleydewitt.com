import React from "react";
import { Link } from "gatsby";
// import countWords from "../pages/{markdownRemark.frontmatter__type}/{markdownRemark.frontmatter__slug}";

function countWords(html) {
	const text = html.replace(/<[^>]+>/g, " ").trim();

	return text.split(/\s+/).filter((word) => word !== "").length;
}

function calculateReadTime(wordCount) {
	return Math.round(wordCount / 200);
}

const DailyWritingLink = ({ dailyWriting }) => {
	const wordCount = countWords(dailyWriting.html);
	const readTime = calculateReadTime(wordCount);

	return (
		<div className="daily-writing-link">
			<h4 className="daily-writing-link__title">
				<Link to={"/daily" + dailyWriting.frontmatter.slug}>{dailyWriting.frontmatter.title}</Link>
			</h4>
			{/* <div className="daily-writing-link__word-count">{wordCount} words</div> */}
			<div className="daily-writing-link__read-time">~{readTime} minute read</div>
			<div className="daily-writing-link__date">{dailyWriting.frontmatter.date}</div>
		</div>
	);
};

export default DailyWritingLink;
