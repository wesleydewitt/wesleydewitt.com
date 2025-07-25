import React from "react";
import newsletterStyles from "../../styles/components/index-sections/newsletter.scss";
import EmailIcon from "../icons/EmailIcon";

const Newsletter = () => {
    return (
        <div className="newsletter">
            <h3 className="newsletter__heading">Newsletter</h3>

            <h4 className="newsletter__subheading">
                Subscribe to get updates on my projects, new essays, and new
                photos delivered to your inbox
            </h4>

            <div className="newsletter__image">
                <EmailIcon />
            </div>

            <form className="newsletter__form">
                <input type="text" className="newsletter__email-field"></input>

                <button type="button" className="newsletter__signup-button">
                    Subscribe
                </button>
            </form>
        </div>
    );
};

export default Newsletter;
