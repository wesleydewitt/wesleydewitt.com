import React from "react";
import { Link } from "gatsby";

function countWords(html) {
	const text = html.replace(/<[^>]+>/g, " ").trim();

	return text.split(/\s+/).filter((word) => word !== "").length;
}

function calculateReadTime(wordCount) {
	return Math.round(wordCount / 200);
}

const LongFormLink = ({ longForm }) => {
	const wordCount = countWords(longForm.html);
	const readTime = calculateReadTime(wordCount);
	const imageUrl = "./photos/" + longForm.frontmatter.image;

	const styles = {
		backgroundImage: "url(" + imageUrl + ")",
		backgroundSize: "cover",
		border: "none",
		borderRadius: "3px",
		color: "#ffffff",
		textShadow: "0 0 3px #000000",
		// backgroundColor: "white",
		padding: "24px",
		// color: longForm.frontmatter.color,
		color: "white",
	};

	return (
		<div className="long-form-link" style={styles}>
			{/* <div className="long-form-link__image">
				<img src={imageUrl} />
			</div> */}

			<h4 className="long-form-link__title">
				<Link to={"/long-form" + longForm.frontmatter.slug}>{longForm.frontmatter.title}</Link>
			</h4>

			<div className="long-form-link__excerpt">{longForm.frontmatter.description}</div>

			<div className="long-form-link__meta">
				<div className="long-form-link__date">{longForm.frontmatter.date}</div>
				{/* <div className="long-form-link__word-count">{wordCount} words</div> */}
				<div className="long-form-link__read-time">{readTime} minute read</div>
			</div>
		</div>
	);
};

export default LongFormLink;
