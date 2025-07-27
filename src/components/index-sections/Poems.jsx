import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import ReactMarkdown from "react-markdown";

import "../../styles/components/index-sections/poems.scss";

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

    return (
        <div className="index-section poems">
            <h3 className="index-section__heading">Poetry</h3>

            <h4 className="index-section__subheading">
                My best, least-embarrasing poems
            </h4>

            <div className="index-section__content poems-list">
                {data.allMdx.nodes.map((poem) => (
                    <Link
                        to={"/" + poem.frontmatter.type + poem.frontmatter.slug}
                        className="poems-list__entry"
                    >
                        <h5 className="poems-list__title">
                            {poem.frontmatter.title}
                        </h5>

                        <div className="poems-list__excerpt">
                            <ReactMarkdown>{poem.body}</ReactMarkdown>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Poems;
