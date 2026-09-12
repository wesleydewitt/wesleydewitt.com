import skills from "../../_content/skills.json";
import "../../styles/components/index-sections/skills-section.css";
import SkillsIcon from "../svg/SkillsIcon";

const SkillsSection = () => {
  return (
    <section className="section section--skills">
      <h3 className="section__heading">
        <SkillsIcon />
        Skills
      </h3>
      <div className="section__content">
        {skills.map((skill) => (
          <div className="skill">
            <div className="skill__image"></div>
            <h4 className="skill__name">{skill.name}</h4>
            <p className="skill__description">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
