import ReactMarkdown from "react-markdown";
import aboutText from "../../_content/about.md?raw";
import "../../styles/components/index-sections/about-section.css";
import AboutIcon from "../svg/AboutIcon";

const AboutSection = () => {
  return (
    <section className="section section--about">
      <h3 className="section__heading">
        <AboutIcon />
        About
      </h3>
      <div className="section__content">
        <ReactMarkdown>{aboutText}</ReactMarkdown>
      </div>
    </section>
  );
};

export default AboutSection;
