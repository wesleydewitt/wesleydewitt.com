import projects from "../../_content/projects.json";
import ProjectsIcon from "../svg/ProjectsIcon";
import "../../styles/components/index-sections/projects-section.css";
import { Link } from "react-router";

const ProjectsSection = () => {
  return (
    <section className="section section--projects">
      <h3 className="section__heading">
        <ProjectsIcon />
        Projects
      </h3>
      <div className="section__content">
        {projects.map((project) => (
          <div className="project">
            <div className="project__text">
              <h4 className="project__name">{project.name}</h4>

              <p className="project__description">{project.description}</p>

              <div className="project__links">
                <Link className="project__link" to={project.url}>
                  View Case Study{" "}
                  <span className="project__link__arrow">{"\u2192"}</span>
                </Link>

                <Link className="project__link" to={project.url}>
                  Visit Site{" "}
                  <span className="project__link__arrow">{"\u2197"}</span>
                </Link>
              </div>
            </div>
            <div className="project__image"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
