import React from "react"
import PropTypes from "prop-types"

import "../styles/main.scss"
import Sidebar from "./sidebar/sidebar"

const Layout = ({ children }) => {
  return (
    <>
      <main className="main">
        <div className="sidebar-placeholder"></div>
        <Sidebar />
        {children}
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
