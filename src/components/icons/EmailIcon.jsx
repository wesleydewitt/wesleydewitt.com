import React from "react";
// import "../../styles/components/icons/email-icon.scss";

const EmailIcon = () => {
    return (
        <svg
            width="98"
            height="81"
            viewBox="0 0 98 81"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <mask id="path-1-inside-1_5190_2" fill="white">
                <rect width="97.2" height="81" rx="3" />
            </mask>
            <rect
                width="97.2"
                height="81"
                rx="3"
                stroke-width="12"
                mask="url(#path-1-inside-1_5190_2)"
            />
            <path
                d="M3 8L46.5875 44.8817C47.6948 45.8187 49.3139 45.8292 50.4333 44.9066L94 9"
                stroke-width="6"
            />
        </svg>
    );
};

export default EmailIcon;
