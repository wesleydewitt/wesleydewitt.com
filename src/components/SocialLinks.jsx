import React from "react";
import { Link } from "gatsby";
import "../styles/components/social-links.scss";
import ClipboardIcon from "./icons/ClipboardIcon";

const SocialLinks = () => {
    return (
        <div className="social-links">
            <h3 className="social-links__heading">Links</h3>
            <h4 className="social-links__subheading">
                Reach out or find me elsewhere on the web
            </h4>

            <div className="social-links__list">
                <Link className="social-links__link email" to="/">
                    <h5 className="social-links__link-title">
                        Email
                        <ClipboardIcon />
                    </h5>
                    <div className="social-links__url">
                        hello@wesleydewitt.com
                    </div>
                </Link>

                <Link className="social-links__link" to="/">
                    <h5 className="social-links__link-title">
                        Github
                        <span>&#8599;</span>
                    </h5>
                    <div className="social-links__url">
                        github.com/wesleydewitt
                    </div>
                </Link>

                <Link className="social-links__link" to="/">
                    <h5 className="social-links__link-title">
                        Twitter
                        <span>&#8599;</span>
                    </h5>
                    <div className="social-links__url">x.com/@wesleydewitt</div>
                </Link>
            </div>
        </div>
    );
};

export default SocialLinks;
