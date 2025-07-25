import React from "react";
import "../styles/global.scss";
import { siteMetadata } from "../../gatsby-config";
import Header from "../components/Header";

const Layout = ({ children }) => {
    return (
        <div className="page" id="page">
            {/* <Header /> */}
            <main className="main">{children}</main>
        </div>
    );
};

export default Layout;
