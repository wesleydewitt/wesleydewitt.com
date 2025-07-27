import React from "react";
import { Link } from "gatsby";
import "../styles/components/social-links.scss";
import ClipboardIcon from "./icons/ClipboardIcon";

const SocialLinks = () => {
    return (
        <div className="social-links">
            <h3 className="index-section__heading">Links</h3>
            <h4 className="index-section__subheading">
                Reach out or find me elsewhere on the web
            </h4>

            <ul className="social-links__list">
                <li className="social-links__entry">
                    <Link className="social-links__link email" to="/">
                        <h3 className="social-links__heading">
                            Email
                            <ClipboardIcon />
                        </h3>
                        <div className="social-links__url">
                            hello@wesleydewitt.com
                        </div>
                    </Link>
                </li>

                <li className="social-links__entry">
                    <Link className="social-links__link" to="/">
                        <h3 className="social-links__heading">
                            Github
                            <span>&#8599;</span>
                        </h3>
                        <div className="social-links__url">
                            github.com/wesleydewitt
                        </div>
                    </Link>
                </li>

                <li className="social-links__entry">
                    <Link className="social-links__link" to="/">
                        <h3 className="social-links__heading">
                            Twitter
                            <span>&#8599;</span>
                        </h3>
                        <div className="social-links__url">
                            twitter.com/@wesleydewitt
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default SocialLinks;
