import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/header.css"

//{siteTitle}

const Header = () => (
  <header className="header-class" >
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,500;1,300;1,500&display=swap" rel="stylesheet"></link>
    <div className="header-container" >
      <h1>
        <Link to="/" className="header-link" >
          <div className="link-first" >Un</div>
          <div className="link-second" >.programador.</div>
          <div className="link-third" >ocupado</div>
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
