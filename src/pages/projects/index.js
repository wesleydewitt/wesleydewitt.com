import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import ProjectLink from "../../components/ProjectLink"
import '../../styles/styles.scss'

const ProjectsPage = ({
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
                {Projects}
            </div>
        </Layout>
    )
}

export default ProjectsPage

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
