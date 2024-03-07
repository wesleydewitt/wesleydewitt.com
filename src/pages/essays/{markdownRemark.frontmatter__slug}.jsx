import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"

export default function BlogPostTemplate({ data }) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark

    return (
        <Layout>
            <article className='essay'>
                <p className='essay-date'>Essay&nbsp;&nbsp;|&nbsp;&nbsp;{frontmatter.date}</p>
                <h3 className='essay-title'>{frontmatter.title}</h3>
                <h4 className='essay-subtitle'>{frontmatter.subtitle}</h4>
                <div className='essay-body'
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </article>
        </Layout>
    )
}

export const Head = ({ data }) => {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark

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
      }
    }
  }
`