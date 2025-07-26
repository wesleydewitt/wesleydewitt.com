import React from "react";
import { Link } from "gatsby";
import { siteMetadata } from "../../gatsby-config";
import "../styles/components/header.scss";
import pic from "../images/pic.png";
import AboutIcon from "./icons/AboutIcon";
import SocialLinks from "./SocialLinks";

const Header = () => {
    const siteDescription =
        "Born in 1995. Discovered a love for writing, design and front-end web development. Worked ever since to create things that seek to delight and inform.";

    return (
        <header className="header">
            {/* <Link className="header__site-logo" to="/">
                <img src={pic} />
            </Link> */}

            <h1 className="header__site-title">
                <Link to="/">{siteMetadata.title}</Link>
            </h1>

            <h2 className="header__site-subtitle">{siteMetadata.subtitle}</h2>

            {/* <div className="header__buttons">
                <button className="theme-toggle"></button>
            </div> */}
        </header>
    );
};

export default Header;
