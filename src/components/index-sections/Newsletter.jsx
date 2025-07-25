import React from "react";
import newsletterStyles from "../../styles/components/index-sections/newsletter.scss";
import EmailIcon from "../icons/EmailIcon";

const Newsletter = () => {
    return (
        <div className="newsletter">
            <h3 className="newsletter__heading">Newsletter</h3>

            <div className="newsletter__image">
                <EmailIcon />
            </div>

            <input type="text" className="newsletter__email-field"></input>

            <button type="button" className="newsletter__signup-button">
                Subscribe
            </button>
        </div>
    );
};

export default Newsletter;
