import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import ProjectIcon from "../icons/ProjectIcon";
import "../../styles/components/index-sections/projects-section.scss";

const Projects = () => {
    const data = useStaticQuery(graphql`
        query {
            allMdx(
                limit: 4
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

    const Projects = data.allMdx.nodes.map((project, index) => (
        <Link to="/" className="projects-list__entry" key={index}>
            <div className="projects-list__type-label">
                <ProjectIcon /> Project
            </div>

            <div className="projects-list__cover"></div>

            <h4 className="projects-list__title">
                {project.frontmatter.title}
            </h4>

            <h5 className="projects-list__subtitle">
                {project.frontmatter.subtitle}
            </h5>

            {project.frontmatter.technologies &&
                project.frontmatter.technologies.length > 0 && (
                    <div className="projects-list__technologies">
                        {project.frontmatter.technologies.map((tech, index) => (
                            <div className={tech} key={index}>
                                {tech}
                            </div>
                        ))}
                    </div>
                )}
        </Link>
    ));

    return (
        <section className="index-section projects">
            <div className="index-section__head">
                <h3 className="index-section__heading">Featured Projects</h3>

                <h4 className="index-section__subheading">
                    Apps and websites made with precision and minimalism in mind
                </h4>
            </div>

            <div className="index-section__content projects-list">
                {Projects}
                <Link to="/" className="all-link">
                    All Projects
                </Link>
            </div>
        </section>
    );
};

export default Projects;
