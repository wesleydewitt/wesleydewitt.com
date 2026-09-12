import projects from "../../_content/projects.json";
import ProjectsIcon from "../svg/ProjectsIcon";
import "../../styles/components/index-sections/projects-section.css";

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
            <div className="project__image"></div>
            <h4 className="project__name">{project.name}</h4>
            <p className="project__description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
