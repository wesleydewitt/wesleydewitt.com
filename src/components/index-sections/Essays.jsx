import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import EssayIcon from "../icons/EssayIcon";
import essaysStyles from "../../styles/components/index-sections/essays-section.scss";

const Essays = () => {
    const data = useStaticQuery(graphql`
        query {
            allMdx(
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
                        technologies
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
            <h3 className="index-section__heading">Essays</h3>

            <h4 className="index-section__subheading">
                Short- to medium-form pieces on art, culture, literature, and
                politics
            </h4>

            <div className="index-section__content essays-list">
                {data.allMdx.nodes.map((essay) => (
                    <Link
                        to={
                            "/" +
                            essay.frontmatter.type +
                            essay.frontmatter.slug
                        }
                        className="essays-list__entry"
                    >
                        <div className="essays-list__cover">
                            <img
                                src={
                                    "/assets/photos/" + essay.frontmatter.cover
                                }
                            />
                        </div>

                        <div className="essays-list__date">
                            <div className="month-abbreviated">
                                {essay.fields.month_abbreviated}
                            </div>
                            <div className="year">{essay.fields.year}</div>
                        </div>

                        <div className="essays-list__titles">
                            <h4 className="essays-list__title">
                                {essay.frontmatter.title}
                            </h4>

                            <h5 className="essays-list__subtitle">
                                {essay.frontmatter.subtitle}
                            </h5>
                        </div>

                        <div className="essays-list__excerpt">
                            {essay.excerpt}
                        </div>

                        {/* <Link
                            className="essays-list__read-link"
                            to={
                                "/" +
                                essay.frontmatter.type +
                                essay.frontmatter.slug
                            }
                        >
                            Read&nbsp;&nbsp;&nbsp;&rarr;
                        </Link> */}
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Essays;
