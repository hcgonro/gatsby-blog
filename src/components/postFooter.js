import React from "react"
import { Link } from "gatsby"
import "../styles/postList.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faTags } from '@fortawesome/free-solid-svg-icons'

const PostFooter = ({ pageContext }) => {
    
    const { next, prev } = pageContext;

    return (
        <>
            <p className="postFooter-title">También te puede interesar ...</p>
            {next && (
                <div className="postList-container">
                    <Link to={next.frontmatter.path} key={next.frontmatter.path}>
                        <div>
                            <div className="postList-image-group">
                                <img alt="" src={next.frontmatter.image}></img>
                                <div className="postList-group-title-date">
                                    <div className="postList-title">{next.frontmatter.title}</div>
                                        <small className="postList-date">
                                            <FontAwesomeIcon icon={faCalendarAlt} />&nbsp;{next.frontmatter.date}&nbsp; &nbsp;<FontAwesomeIcon icon={faTags} />&nbsp;{next.frontmatter.tags.join(", ")}
                                        </small>
                                </div>
                            </div>
                            <p>{next.frontmatter.excerpt}</p>
                            <br />
                        </div>
                    </Link>
                </div>
            )}
            {prev && (
                <div className="postList-container">
                    <Link to={prev.frontmatter.path} key={prev.frontmatter.path}>
                        <div>
                            <div className="postList-image-group">
                                <img alt="" src={prev.frontmatter.image}></img>
                                <div className="postList-group-title-date">
                                    <div className="postList-title">{prev.frontmatter.title}</div>
                                    <small className="postList-date">
                                    <FontAwesomeIcon icon={faCalendarAlt} />&nbsp;{prev.frontmatter.date}&nbsp; &nbsp;<FontAwesomeIcon icon={faTags} />&nbsp;{prev.frontmatter.tags.join(", ")}
                                    </small>
                                </div>
                            </div>
                            <p>{prev.frontmatter.excerpt}</p>
                            <br />
                        </div>
                    </Link>
                </div>
            )}
        </>
    )
}

export default PostFooter