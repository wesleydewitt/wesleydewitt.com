import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/Layout';
import ProjectLink from '../components/ProjectLink';
import '../styles/styles.scss';
import EssayLink from '../components/EssayLink';

const IndexPage = ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    const Projects = edges
        .filter((edge) => edge.node.frontmatter.type === 'project')
        .map((edge) => <ProjectLink key={edge.node.id} project={edge.node} />);

    const Essays = edges
        .filter((edge) => edge.node.frontmatter.type === 'essay')
        .map((edge) => <EssayLink key={edge.node.id} essay={edge.node} />);

    return (
        <Layout>
            <div className="hero">
                <h2 className="hero-text">
                    A developer and writer obsessed with the process of making
                    beautiful, intuitive websites and applications
                </h2>
                <div className="hero__subscribe-field">
                    <input type="text"></input>
                    <button>Subscribe</button>
                </div>
            </div>
            <div className="index-grid">
                {Essays}
                {Essays}
                {Essays}
            </div>
        </Layout>
    );
};

export default IndexPage;

export const Head = () => (
    <>
        <title>Wesley De Witt</title>
    </>
);

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 250)
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        slug
                        title
                        type
                    }
                }
            }
        }
    }
`;
