import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import '../../styles/styles.scss'
import EssayLink from "../../components/EssayLink"

const EssaysPage = ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    const Essays = edges
        .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map(edge => <EssayLink key={edge.node.id} project={edge.node} />)

    return (
        <Layout>
            <div className="index-grid">
                {Essays}
            </div>
        </Layout>
    )
}

export default EssaysPage

export const Head = () => (
    <>
        <title>Wesley De Witt</title>
    </>
)

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "essay" } } }, sort: { frontmatter: { date: DESC }}) {
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
