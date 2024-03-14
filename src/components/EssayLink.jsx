import React from 'react';
import { Link } from 'gatsby';

const EssayLink = ({ essay }) => (
    <Link className="essay-link" to={'/essay' + essay.frontmatter.slug}>
        <p className="essay-link__date">{essay.frontmatter.date}</p>
        <h2 className="essay-link__title">{essay.frontmatter.title}</h2>
        <div>{essay.excerpt}</div>
    </Link>
);

export default EssayLink;
