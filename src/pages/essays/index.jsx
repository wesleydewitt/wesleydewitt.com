import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../layouts/Layout';
import Nav from '../../components/Nav';
import '../../styles/styles.scss';
import EssayLink from '../../components/EssayLink';

const EssaysPage = ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    const Essays = edges
        .filter((edge) => !!edge.node.frontmatter.date)
        .map((edge) => <EssayLink key={edge.node.id} essay={edge.node} />);

    return (
        <Layout>
            <div className="essays-grid">{Essays}</div>
        </Layout>
    );
};

export default EssaysPage;

export const Head = () => (
    <>
        <title>Essays by Wesley De Witt</title>
    </>
);

export const pageQuery = graphql`
    query {
        allMarkdownRemark(
            filter: { frontmatter: { type: { eq: "essay" } } }
            sort: { frontmatter: { date: DESC } }
        ) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 250)
                    frontmatter {
                        date(formatString: "D MMMM YYYY")
                        slug
                        title
                    }
                }
            }
        }
    }
`;
