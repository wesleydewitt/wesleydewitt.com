import React from "react";

const LongFormPiece = ({ frontmatter, html, wordCount, readTime }) => {
	return (
		<article className="long-form-piece">
			<h3 className="long-form-piece__title">{frontmatter.title}</h3>
			<div className="long-form-piece__meta">
				<div className="long-form-piece__date">{frontmatter.date}</div>
				<div className="long-form-piece__read-time">{readTime} minute read</div>
				{/* <div className="long-form-piece__word-count">{wordCount} words</div> */}
				{/* <div className="long-form-piece__location">Written in Broad Ripple</div> */}
			</div>
			<div className="long-form-piece__body" dangerouslySetInnerHTML={{ __html: html }} />
		</article>
	);
};

export default LongFormPiece;
