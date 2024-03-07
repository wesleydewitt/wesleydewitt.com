import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/Layout"
import ProjectLink from "../components/ProjectLink"
import '../styles/styles.scss'

const IndexPage = ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    const Projects = edges
        .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map(edge => <ProjectLink key={edge.node.id} project={edge.node} />)

    return (
        <Layout>
            <div className="index-grid">

            </div>
        </Layout>
    )
}

export default IndexPage

export const Head = () => (
    <>
        <title>Wesley De Witt</title>
    </>
)

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC }}) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`
