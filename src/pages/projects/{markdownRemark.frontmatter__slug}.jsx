import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"

export default function BlogPostTemplate({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  console.log(data)

  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  )
}

export const Head = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark
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
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`