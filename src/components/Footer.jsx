import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="copyright">&copy; {currentYear} Wesley De Witt</div>
        </footer>
    );
};

export default Footer;
