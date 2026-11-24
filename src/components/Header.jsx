import { Link } from "react-router";
import ReactMarkdown from "react-markdown";

import aboutText from "../_content/about.md?raw";
import selfie from "../assets/selfie-grayscale-transparent.png";

import AboutSection from "./index-sections/AboutSection";
import SelfieSection from "./index-sections/SelfieSection";
import AvailabilitySection from "./index-sections/AvailabilitySection";
import LinksSection from "./index-sections/LinksSection";

import "../styles/components/header.css";
import MenuIcon from "./svg/MenuIcon";

const Header = ({ isIndexPage }) => {
    return (
        <header className="header">
            <div className="header__selfie">
                <img src={selfie} />
            </div>

            <h1 className="header__site-title">
                <Link to="/">Wesley De Witt</Link>
            </h1>

            {/* <div className="header__about">
                <ReactMarkdown>{aboutText}</ReactMarkdown>
            </div> */}

            <div className="header__menu-button">
                Menu
                <MenuIcon />
            </div>
        </header>
    );
};

export default Header;
