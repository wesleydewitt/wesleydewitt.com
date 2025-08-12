import React from "react";
import AboutIcon from "../icons/AboutIcon";
import AboutPhoto from "../../images/pic.png";
import { Link } from "gatsby";
import "../../styles/components/index-sections/about.scss";
import SocialLinks from "../SocialLinks";
import Newsletter from "../Newsletter";

const About = () => {
    const siteDescription = (
        <div className="about__site-description">
            <p>
                I'm a designer, writer, and aspiring front-end developer from
                Indianapolis. I love exciting ideas, good aesthetics, and clear
                writing. My days are spent working in the gig economy, while my
                nights and weekends are devoted to making things &mdash; apps,
                websites, essays, and photos &mdash; that seek to delight,
                inform, and entertain.
            </p>

            <p>
                This is my web journal, a place that serves as a reposiotry of
                creative output. It is anti-social media, a space to incubate
                ideas and content semi-privately, in a way that documents
                creative growth but is not immediately funneled into the
                systematized and socially corrosive algorithms of our modern
                social netowrks.
            </p>
        </div>
    );
    return (
        <section className="index-section about">
            <div className="index-section__content">{siteDescription}</div>
        </section>
    );
};

export default About;
