import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../layouts/Layout"
import Essay from "../../components/Essay"
import Project from "../../components/Project"

export default function EssayAndProjectPageTemplate({ data }) {
    const { frontmatter, html } = data.markdownRemark


    if (frontmatter.type === 'essay') {
        return (
            <Layout>
                <Essay frontmatter={frontmatter} html={html}/>
            </Layout>
        )
    } else if (frontmatter.type === 'project') {
        return (
            <Layout>
                <Project frontmatter={frontmatter} html={html}/>
            </Layout>
        )
    } else {
        return null
    }
}

export const Head = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <>
            <title>{frontmatter.title} by Wesley De Witt</title>
        </>
    )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "D MMMM YYYY")
        slug
        title
        subtitle
        type
      }
    }
  }
`