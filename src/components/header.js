import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/header.css"

const Header = (props) => {

  const titleArray = (props.siteTitle).split(" ");
  for(let i=0; i<titleArray.length; i++) {
    if(i>0) {
      titleArray[i]=".".concat(titleArray[i])
    }
  }
  const listItems = titleArray.map((title, index) =>
    <div className={"link-"+(index%3)} key={index}>{title}</div>
  );

  return (
    <header className="header-class" >
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,500;1,300;1,500&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet"></link>
      <div className="header-container" >
        <h1>
          <Link to="/" className="header-link" >
            {listItems}
          </Link>
        </h1>
      </div>
    </header>
    )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
