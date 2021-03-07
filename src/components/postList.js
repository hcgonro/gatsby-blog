import React, { useState } from "react"
import { Link } from "gatsby"
import "../styles/postList.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faTags } from '@fortawesome/free-solid-svg-icons'

//Global variables
const postsShowed = 10

const PostList = ({ data }) => {
    
    const {edges} = data.allMarkdownRemark
    const [postsToShow, setPostsToShow] = useState([...edges.slice(0, postsShowed)])
    const [next, setNext] = useState(postsShowed*2)

    const handleShowMorePosts = () => {
        setNext(next + postsShowed)
        setPostsToShow(edges.slice(0, next))
    };

    let button
    if(postsToShow.length < edges.length) {
        button = <div className="postList-showMore"><button onClick={handleShowMorePosts}>Mostrar más</button></div>
    } else {
        button=''
    }

    return (
        <div>
            {postsToShow.map(edge => {
                const { frontmatter } = edge.node
                return (
                    <div className="postList-container" key={edge.node.id}>
                        <Link to={frontmatter.path} key={frontmatter.path}>
                            <div>
                                <div className="postList-image-group">
                                    <img alt="" src={frontmatter.image}></img>
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
            {button}
        </div>
    )
}

export default PostList