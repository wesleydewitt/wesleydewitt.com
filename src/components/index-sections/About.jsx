import React from "react";
import AboutIcon from "../icons/AboutIcon";
import AboutPhoto from "../../images/pic.png";
import { Link } from "gatsby";
import aboutStyles from "../../styles/components/index-sections/about.scss";
import SocialLinks from "../SocialLinks";
import Newsletter from "./Newsletter";

const About = () => {
    const siteDescription = (
        <div className="site-description">
            <p>
                Hi, I'm a designer, writer, and aspiring front-end developer
                from Indianapolis. I love exciting ideas, good aesthetics, and
                clear writing. My days are spent working in the gig economy,
                while my nights and weekends are devoted to making things
                &mdash; websites, apps, essays, and photos &mdash; that seek to
                delight, inform, and entertain.
            </p>

            <p>
                This is my web journal, a place that serves as a reposiotry of
                creative output. It is anti-social media, a space to incubate
                ideas and content semi-privately, in a way that documents
                creative growth but is not immediately funneled into the
                systematized and socially corrosive algorithms of our modern
                social netowrks.
            </p>

            {/* <h3 className="index-section__heading">Available for hire</h3>

            <p>
                I am currently available for employment as well as freelance
                work. If you have an opportunity for which you feel he would be
                a good fit, please feel free to reach out.
            </p> */}
        </div>
    );
    return (
        <section className="index-section about">
            <div className="about__photo">
                <img src={AboutPhoto} />
            </div>
            <h3 className="index-section__heading">Wesley De Witt</h3>
            <h4 className="index-section__subheading">
                Code, photos & prose out of Indianapolis
            </h4>
            <div className="index-section__content">{siteDescription}</div>
            <SocialLinks />
        </section>
    );
};

export default About;
