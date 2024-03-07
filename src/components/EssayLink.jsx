import React from "react"
import { Link } from "gatsby"

const EssayLink = ({ project }) => (
    <div>
        <Link to={'/essay' + project.frontmatter.slug}>
            {project.frontmatter.title} ({project.frontmatter.date})
        </Link>
    </div>
)

export default EssayLink