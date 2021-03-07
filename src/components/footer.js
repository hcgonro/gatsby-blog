import React from "react"
import "../styles/footer.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer>
            <div className="social-container">
                <ul>
                    <li>
                        <a className="social-twitter" href="//twitter.com/hectorCodes" rel="nofollow">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </li>
                    <li>
                        <a className="social-github" href="//github.com/hcgonro" rel="nofollow">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                © hectorCodes, {new Date().getFullYear()}
            </div>
            <div className="footer-reference">
                Built with
                {` `}
                <em><a href="https://www.gatsbyjs.com">Gatsby</a></em>
            </div>
        </footer>
    )
}

export default Footer