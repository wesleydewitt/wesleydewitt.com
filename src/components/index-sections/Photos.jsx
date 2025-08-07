import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import "../../styles/components/index-sections/photos-section.scss";
import PhotosIcon from "../icons/PhotosIcon";

const Photos = () => {
    const data = useStaticQuery(graphql`
        query {
            allMdx(
                limit: 6
                filter: { frontmatter: { type: { eq: "photo" } } }
                sort: { frontmatter: { date: DESC } }
            ) {
                nodes {
                    frontmatter {
                        filename
                    }
                }
                totalCount
            }
        }
    `);

    const totalCount = data.allMdx.totalCount;

    const Photos = data.allMdx.nodes.map((entry) => (
        <Link
            className="photo-link"
            to={entry.frontmatter.type + entry.frontmatter.slug}
        >
            <img src={"assets/photos/" + entry.frontmatter.filename} />
        </Link>
    ));

    return (
        <section className="index-section photos">
            <div className="index-section__head">
                <h3 className="index-section__heading">Photos</h3>

                <h4 className="index-section__subheading">
                    Photo albums from various places
                </h4>
            </div>

            <div className="index-section__content photos-grid">
                {Photos}
                <Link className="all-link" to="/photos">
                    All Photos
                </Link>
            </div>
        </section>
    );
};

export default Photos;
