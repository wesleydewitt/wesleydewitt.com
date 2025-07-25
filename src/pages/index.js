import * as React from "react";
import { siteMetadata } from "../../gatsby-config";
import favicon from "../images/favicon.png";
import IndexLayout from "../layouts/IndexLayout";
import Projects from "../components/index-sections/Projects";
import Essays from "../components/index-sections/Essays";
import About from "../components/index-sections/About";
import SocialLinks from "../components/SocialLinks";
import Newsletter from "../components/index-sections/Newsletter";
import Photos from "../components/index-sections/Photos";
// import Links from "../components/index-sections/Links";

const IndexPage = () => {
    return (
        <IndexLayout>
            <About />
            <Newsletter />
            <Essays />
            <Projects />
            <Photos />
        </IndexLayout>
    );
};

export default IndexPage;

export const Head = () => (
    <>
        <title>{siteMetadata.title}</title>
        {/* <meta name="theme-color" content="#ffffff" /> */}
        <link rel="icon" href={favicon} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&display=swap"
            rel="stylesheet"
        ></link>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&display=swap"
            rel="stylesheet"
        ></link>
    </>
);

// export async function getServerData() {}
