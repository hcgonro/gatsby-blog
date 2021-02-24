import React from "react"
import { Link } from "gatsby"

const PostList = ({ data }) => {
    
    const {edges} = data.allMarkdownRemark
    
    return (
        <div>
            {edges.map(edge => {
                const { frontmatter } = edge.node
                return (
                    <div key={frontmatter.path}>
                        <Link to={frontmatter.path}>{frontmatter.title}</Link>
                        <br />
                        <small>
                            {' '}
                            <em>publicado el </em> {frontmatter.date}
                        </small>
                        <p>{frontmatter.excerpt}</p>
                        <br />
                    </div>
                )
            })}
        </div>
    )
}

export default PostList