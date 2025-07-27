import React from "react";
import "../styles/global.scss";
import { siteMetadata } from "../../gatsby-config";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
    return (
        <div className="page" id="page">
            <Header />
            <main className="main">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
