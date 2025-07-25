import React from "react";
import "../styles/global.scss";
import { siteMetadata } from "../../gatsby-config";
import Header from "../components/Header";

const IndexLayout = ({ children }) => {
    return (
        <div className="page" id="page">
            {/* <Header /> */}
            <main className="main main--index-page">{children}</main>
        </div>
    );
};

export default IndexLayout;
