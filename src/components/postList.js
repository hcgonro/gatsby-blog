import React from "react"
import { Link } from "gatsby"
import "../styles/postList.css"

const PostList = ({ data }) => {
    
    const {edges} = data.allMarkdownRemark
    
    return (
        <div>
            {edges.map(edge => {
                const { frontmatter } = edge.node
                return (
                    <div className="postList-container">
                        <Link to={frontmatter.path} key={frontmatter.path}>
                            <div className="postList-title">{frontmatter.title}</div>
                            <small className="postList-date">
                                {frontmatter.date}&nbsp;|&nbsp;{frontmatter.tags.join(", ")}
                            </small>
                            <p>{frontmatter.excerpt}</p>
                            <br />
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default PostList