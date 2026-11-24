import { Link } from "react-router-dom";
import aboutText from "../../_content/about.md?raw";
import ReactMarkdown from "react-markdown";
import "../../styles/components/index-sections/about-section.css";
import AboutIcon from "../svg/AboutIcon";
import Links from "../Links";

const AboutSection = () => {
    return (
        <section className="section section--about">
            <h2 className="section__heading">
                <AboutIcon /> About
            </h2>
            <div className="section__content">
                <div className="section--about__about-text">
                    <ReactMarkdown>{aboutText}</ReactMarkdown>
                </div>

                <Links />
            </div>
        </section>
    );
};

export default AboutSection;
