import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./layout.css"

//{siteTitle}

const Header = () => (
  <header
    style={{
      background: `#252525`,
      marginBottom: `1.45rem`,
    }}
  >
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,500;1,300;1,500&display=swap" rel="stylesheet"></link>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
            fontFamily: `Ubuntu`,
            display: `flex`,
            color: `white`,
          }}
        >
          <div 
            style={{
              color: `#9370DB`,
            }}
          >
            El
          </div>
            .programador.
          <div 
            style={{
              color: `#FF7F50`,
            }}
          >
            precario
          </div>
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
