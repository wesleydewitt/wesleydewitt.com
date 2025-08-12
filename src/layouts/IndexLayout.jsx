import React from "react";
import "../styles/global.scss";
import { siteMetadata } from "../../gatsby-config";
import Header from "../components/Header";
import Footer from "../components/Footer";

const IndexLayout = ({ children }) => {
    return (
        <div className="page" id="page">
            <Header isIndex={true} />
            <main className="main main--index-page">{children}</main>
            <Footer />
        </div>
    );
};

export default IndexLayout;
