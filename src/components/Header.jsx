import { Link } from "react-router";
import "../styles/components/header.css";
import selfie from "../assets/selfie-grayscale-transparent.png";
import aboutText from "../_content/about.md?raw";
import ReactMarkdown from "react-markdown";
import EssaysIcon from "./svg/EssaysIcon";
import MenuIcon from "./svg/MenuIcon";
import Favicon from "./svg/Favicon";

const Header = ({ isIndexPage }) => {
    return (
        <header className="header">
            <h1 className="header__site-title">
                <Link to="/">Wesley De Witt</Link>
            </h1>

            <div className="header__selfie">
                <img src={selfie} alt="Wesley De Witt" />
            </div>

            {isIndexPage ? (
                <>
                    <div className="header__about">
                        <ReactMarkdown>{aboutText}</ReactMarkdown>
                    </div>

                    <div className="header__links">
                        <Link
                            className="header__link header__link--email"
                            to="/"
                        >
                            <span className="header__link-label">Email</span>
                            <span className="header__link-text">
                                hello@wesleydewitt.com
                            </span>
                        </Link>
                        <Link
                            className="header__link header__link--github"
                            to="/"
                        >
                            <span className="header__link-label">GitHub</span>
                            <span className="header__link-text">
                                wesleydewitt
                            </span>
                        </Link>
                        <Link
                            className="header__link header__link--linkedin"
                            to="/"
                        >
                            <span className="header__link-label">LinkedIn</span>
                            <span className="header__link-text">
                                wesley-dewitt
                            </span>
                        </Link>
                    </div>

                    <div className="header__availability-block">
                        <h2 className="availability">
                            <div className="availability__indicator"></div>
                            Available for hire
                        </h2>

                        <div className="availability-block__content">
                            <p>
                                I'm seeking a role as a Network Support
                                Technician, Data Center Technician, or Help Desk
                                Technician. I have previous IT experience, and I
                                am a Cisco Certified Network Associate.
                            </p>

                            <Link className="header__availability-block__download-link">
                                Resume/CV &darr;
                            </Link>

                            <Link className="header__availability-block__download-link">
                                Cover Letter &darr;
                            </Link>
                        </div>
                    </div>
                </>
            ) : null}
        </header>
    );
};

export default Header;
