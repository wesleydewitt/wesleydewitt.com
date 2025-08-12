import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import ReactMarkdown from "react-markdown";

import "../../styles/components/index-sections/poems.scss";
import PoemIcon from "../icons/PoemIcon";

const Poems = () => {
    const data = useStaticQuery(graphql`
        query {
            allMdx(
                filter: { frontmatter: { type: { eq: "poem" } } }
                sort: { frontmatter: { date: DESC } }
            ) {
                nodes {
                    frontmatter {
                        type
                        slug
                        title
                        subtitle
                        cover
                        technologies
                        date(formatString: "MMM YYYY")
                    }
                    fields {
                        day
                        month_abbreviated
                        year
                    }
                    excerpt(pruneLength: 400)
                    body
                }
                totalCount
            }
        }
    `);

    const Poems = data.allMdx.nodes.map((poem) => (
        <Link
            to={"/" + poem.frontmatter.type + poem.frontmatter.slug}
            className="poems-list__entry"
        >
            <div className="type-label">
                <PoemIcon /> Poem
            </div>
            <h5 className="poems-list__title">{poem.frontmatter.title}</h5>

            <div className="poems-list__body">
                <ReactMarkdown>{poem.body}</ReactMarkdown>
            </div>
        </Link>
    ));

    return (
        <div className="index-section poems">
            <div className="index-section__head">
                <h3 className="index-section__heading">Featured Poems</h3>

                <h4 className="index-section__subheading">
                    My best, least-embarrasing poems
                </h4>
            </div>

            <div className="index-section__content poems-list">
                {Poems}
                <Link to="/" className="all-link">
                    All Poems
                </Link>
            </div>
        </div>
    );
};

export default Poems;
