import React, { useEffect } from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";
import Layout from "../layouts/Layout";
import essayIcon from "../images/essay.svg";
import essayStyles from "../styles/templates/essay.scss";

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

        addSpanToFirstNWords(firstChildParagraph, 3, "uppercase");

        const hrElements = document.querySelectorAll("hr");

        hrElements.forEach((hr) => {
            let nextSibling = hr.nextElementSibling;

            if (nextSibling && nextSibling.tagName === "P") {
                addSpanToFirstNWords(nextSibling, 3, "uppercase");
            }
        });
    });

    return (
        <Layout>
            <article className="essay">
                <div className="essay__head">
                    <div className="essay__head__titles">
                        <div className="essay__date">
                            {data.mdx.frontmatter.date}
                        </div>

                        <h1 className="essay__title">
                            {data.mdx.frontmatter.title}
                        </h1>

                        <h2 className="essay__subtitle">
                            {data.mdx.frontmatter.subtitle}
                        </h2>
                    </div>

                    <div className="essay__cover-image">
                        <img
                            src={"/assets/photos/" + data.mdx.frontmatter.image}
                        />
                    </div>
                </div>

                <div className="essay__body" id="essay__body">
                    <MDXProvider components={shortcodes}>
                        {children}
                    </MDXProvider>
                </div>
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
        }
    }
`;
