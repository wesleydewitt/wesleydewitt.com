import React from "react";
// import "../../styles/components/icons/sun-icon.scss";

const MoonIcon = () => {
    return (
        <svg
            className="sun-icon-svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <mask
                id="mask0_712_57"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="12"
                height="12"
            >
                <circle cx="6" cy="6" r="4.75" stroke-width="2.5" />
            </mask>
            <g mask="url(#mask0_712_57)">
                <path d="M1.75737 1.75736L10.2426 10.2426M1.75737 10.2426L10.2426 1.75736" />
                <path d="M6 0V12M0 6H12" />
            </g>
            <circle cx="6" cy="6" r="2" />
        </svg>
    );
};

export default MoonIcon;
