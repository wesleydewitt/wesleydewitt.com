import React from "react"

const Essay = ({ frontmatter, html }) => (
    <article className='essay'>
        <p className='essay-date'>Essay&nbsp;&nbsp;|&nbsp;&nbsp;{frontmatter.date}</p>
        <h3 className='essay-title'>{frontmatter.title}</h3>
        <h4 className='essay-subtitle'>{frontmatter.subtitle}</h4>
        <div className='essay-body'
            dangerouslySetInnerHTML={{ __html: html }}
        />
    </article>
)

export default Essay