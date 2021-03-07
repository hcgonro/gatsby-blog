import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../styles/layout.css"

//El layout es el componente donde va todo lo demás.
//children es lo que se pone entre <Layout> </Layout>, por ejemplo en index.js
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header className="layout-header" siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="layout-container" >
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

//Proptypes valida la información. En este caso, que children sea un "node"
//"node" es cualquier cosa que puede ser renderizada por react (number, string, array, etc.)
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
