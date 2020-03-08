import React from "react"

import logo from "../../images/logo.svg"
import LatestWorks from "./latestWorks"
import Nav from "./nav"
import Social from "./social"
import Copy from "./copy"

const Sidebar = () => (
  <div className="sidebar">
    <a className="sidebar__link" href={"/"}>
      <img className="sidebar__link-logo" src={logo} alt="logo" />
    </a>
    <LatestWorks />
    <Nav />
    <Social />
    <Copy />
  </div>
)

export default Sidebar
