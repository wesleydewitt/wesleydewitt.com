import React from "react";
import { Link } from "gatsby";
import { siteMetadata } from "../../gatsby-config";
import "../styles/components/header.scss";
import pic from "../images/pic2.png";
import AboutIcon from "./icons/AboutIcon";
import SocialLinks from "./SocialLinks";
import MenuIcon from "./icons/MenuIcon";
import Newsletter from "./Newsletter";
import Availability from "./Availability";

const Header = ({ isIndex }) => {
    const siteDescription = (
        <>
            {/* <p>
                B. 1995. Discovered an appreciation for good design and writing.
                Worked ever since to make things — apps, websites, photos, and
                sentences — that seek to delight, inform, and entertain.
            </p> */}

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
        </>
    );

    return (
        <header className={isIndex ? "header header--index" : "header"}>
            <div className="header__titles">
                <h1 className="header__site-title">
                    <Link to="/">{siteMetadata.title}</Link>
                </h1>

                <h2 className="header__site-subtitle">
                    {siteMetadata.subtitle}
                </h2>
            </div>

            {isIndex ? (
                <>
                    <div className="header__site-logo">
                        <img src={pic} />
                    </div>

                    <div className="header__site-description">
                        {siteDescription}
                    </div>
                </>
            ) : null}
        </header>
    );
};

export default Header;
