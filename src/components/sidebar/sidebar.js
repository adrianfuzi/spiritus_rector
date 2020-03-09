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
    <div className="divider divider-first"/>
    <Nav />
    <div className="divider divider-second"/>
    <Social />
    <div className="divider divider-third"/>
    <Copy />
  </div>
)

export default Sidebar
