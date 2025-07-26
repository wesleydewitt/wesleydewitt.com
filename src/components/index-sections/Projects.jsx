import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import ProjectIcon from "../icons/ProjectIcon";
import "../../styles/components/index-sections/projects-section.scss";

const Projects = () => {
    const data = useStaticQuery(graphql`
        query {
            allMdx(
                filter: { frontmatter: { type: { eq: "project" } } }
                sort: { frontmatter: { date: DESC } }
            ) {
                nodes {
                    frontmatter {
                        type
                        slug
                        title
                        subtitle
                        icon
                        technologies
                        date(formatString: "MMM YYYY")
                    }
                }
                totalCount
            }
        }
    `);

    return (
        <section className="index-section projects">
            <h3 className="index-section__heading">Projects</h3>

            <h4 className="index-section__subheading">
                Apps and websites made with precision and minimalism in mind
            </h4>

            <ul className="index-section__content projects-list">
                {data.allMdx.nodes.map((project) => (
                    <li>
                        <Link to="/" className="projects-list__entry">
                            <div className="projects-list__titles">
                                <h4 className="projects-list__title">
                                    {project.frontmatter.title}
                                </h4>

                                <h5 className="projects-list__subtitle">
                                    {project.frontmatter.subtitle}
                                </h5>
                            </div>

                            <div className="projects-list__leader-line"></div>

                            <div className="projects-list__date">
                                {project.frontmatter.date}
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;
