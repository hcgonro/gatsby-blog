import React from "react"
import { Link } from "gatsby"
import "../styles/postList.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faTags } from '@fortawesome/free-solid-svg-icons'

const PostList = ({ data }) => {
    
    const {edges} = data.allMarkdownRemark
    console.log(edges.length)
    
    return (
        <div>
            {edges.map(edge => {
                const { frontmatter } = edge.node
                return (
                    <div className="postList-container">
                        <Link to={frontmatter.path} key={frontmatter.path}>
                            <div>
                                <div className="postList-image-group">
                                    <img src={frontmatter.image}></img>
                                    <div className="postList-group-title-date">
                                        <div className="postList-title">{frontmatter.title}</div>
                                        <small className="postList-date">
                                            <FontAwesomeIcon icon={faCalendarAlt} />&nbsp;{frontmatter.date}&nbsp; &nbsp;<FontAwesomeIcon icon={faTags} />&nbsp;{frontmatter.tags.join(", ")}
                                        </small>
                                    </div>
                                </div>
                                <p>{frontmatter.excerpt}</p>
                                <br />
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default PostList