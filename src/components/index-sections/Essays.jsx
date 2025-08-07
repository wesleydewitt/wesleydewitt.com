import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import "../icons/EssayIcon";
import essaysStyles from "../../styles/components/index-sections/essays-section.scss";
import EssayIcon from "../icons/EssayIcon";

const Essays = () => {
    const data = useStaticQuery(graphql`
        query {
            allMdx(
                limit: 2
                filter: { frontmatter: { type: { eq: "essay" } } }
                sort: { frontmatter: { date: DESC } }
            ) {
                nodes {
                    frontmatter {
                        type
                        slug
                        title
                        subtitle
                        cover
                        tags
                        date(formatString: "MMM YYYY")
                    }
                    fields {
                        day
                        month_abbreviated
                        year
                    }
                    excerpt(pruneLength: 400)
                }
                totalCount
            }
        }
    `);

    return (
        <section className="index-section essays">
            <div className="index-section__head">
                <h3 className="index-section__heading">Featured Essays</h3>

                <h4 className="index-section__subheading">
                    Short- to medium-form pieces on art, culture, literature,
                    and politics
                </h4>
            </div>

            <div className="index-section__content essays-list">
                {data.allMdx.nodes.map((essay, index) => (
                    <Link
                        to={essay.frontmatter.type + essay.frontmatter.slug}
                        className="essays-list__entry"
                        key={index}
                    >
                        <div className="essays-list__cover">
                            <img
                                src={
                                    "/assets/photos/" + essay.frontmatter.cover
                                }
                            />
                        </div>

                        <div className="essays-list__cover-text">
                            <div className="essays-list__type-label">
                                <EssayIcon /> Essay
                            </div>

                            <h4 className="essays-list__title">
                                {essay.frontmatter.title}
                            </h4>

                            <h5 className="essays-list__subtitle">
                                {essay.frontmatter.subtitle}
                            </h5>

                            {essay.frontmatter.tags &&
                                essay.frontmatter.tags.length > 0 && (
                                    <div className="essays-list__tags">
                                        {essay.frontmatter.tags.map(
                                            (tag, index) => (
                                                <div
                                                    className={tag}
                                                    key={index}
                                                >
                                                    {tag}
                                                </div>
                                            )
                                        )}
                                    </div>
                                )}
                        </div>
                    </Link>
                ))}

                <Link to="/" className="all-link">
                    All Essays
                </Link>
            </div>
        </section>
    );
};

export default Essays;
