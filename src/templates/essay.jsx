import React, { useEffect } from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { siteMetadata } from "../../gatsby-config";
import favicon from "../images/favicon.png";
import { Link } from "gatsby";
import Layout from "../layouts/Layout";
import essayIcon from "../images/essay.svg";
import "../styles/templates/essay.scss";
import Newsletter from "../components/Newsletter";
import SocialLinks from "../components/SocialLinks";

const shortcodes = { Link }; // Provide common components here

function addSpanToFirstNWords(element, n, className) {
    const text = element.textContent.trim();
    const words = text.split(/\s+/);

    if (words.length <= n) {
        element.innerHTML = `<span class="${className}">${text}</span>`;
        return;
    }

    const firstNWords = words.slice(0, n).join(" ");
    const remainingWords = words.slice(n).join(" ");

    element.innerHTML = `<span class="${className}">${firstNWords}</span> ${remainingWords}`;
}

export default function PageTemplate({ data, children }) {
    useEffect(() => {
        const essayBody = document.querySelector("#essay__body");
        const firstChildParagraph = essayBody.querySelector("p");

        addSpanToFirstNWords(firstChildParagraph, 5, "uppercase");

        const hrElements = document.querySelectorAll("hr");

        hrElements.forEach((hr) => {
            let nextSibling = hr.nextElementSibling;

            if (nextSibling && nextSibling.tagName === "P") {
                addSpanToFirstNWords(nextSibling, 5, "uppercase");
            }
        });
    });

    return (
        <Layout>
            <article className="essay">
                <div className="essay__head">
                    {/* <div className="essay__cover-image">
                        <img
                            src={"/assets/photos/" + data.mdx.frontmatter.image}
                        />
                    </div> */}

                    <div className="essay__head__titles">
                        <h1 className="essay__title">
                            {data.mdx.frontmatter.title}
                        </h1>

                        <h2 className="essay__subtitle">
                            {data.mdx.frontmatter.subtitle}
                        </h2>

                        <div className="essay__date">
                            {data.mdx.frontmatter.date}
                        </div>
                    </div>
                </div>

                <div className="essay__body" id="essay__body">
                    <MDXProvider components={shortcodes}>
                        {children}
                    </MDXProvider>
                </div>

                <Newsletter />

                <SocialLinks />
            </article>
        </Layout>
    );
}

export const query = graphql`
    query ($id: String!) {
        mdx(id: { eq: $id }) {
            frontmatter {
                title
                subtitle
                date(formatString: "D MMMM YYYY")
                image
            }
            fields {
                day
                month_abbreviated
                year
            }
        }
    }
`;

export const Head = ({ data }) => (
    <>
        <title>{data.mdx.frontmatter.title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap"
            rel="stylesheet"
        />
    </>
);
