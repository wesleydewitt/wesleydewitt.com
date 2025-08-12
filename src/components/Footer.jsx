import React from "react";
import "../styles/components/footer.scss";
import { Link } from "gatsby";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="footer__copyright">
                &copy; {currentYear} Wesley De Witt
            </div>
        </footer>
    );
};

export default Footer;
