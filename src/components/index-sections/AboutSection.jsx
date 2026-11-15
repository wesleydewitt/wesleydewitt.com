import aboutText from "../../_content/about.md?raw";
import ReactMarkdown from "react-markdown";
import "../../styles/components/index-sections/about-section.css";

const AboutSection = () => {
    return (
        <section className="section section--about">
            <ReactMarkdown>{aboutText}</ReactMarkdown>
        </section>
    );
};

export default AboutSection;
