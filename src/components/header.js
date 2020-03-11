import React from "react"

import logo from "../images/logo.svg"
import BurgerMenu from "../components/burgerMenu"
// import LatestWorks from "./latestWorks"
// import Social from "./social"
// import Copy from "./copy"

const Header = () => (
    <div className="header">
        <a className="header__link" href={"/"}>
            <img className="header__link-logo" src={logo} alt="logo" />
        </a>
        <BurgerMenu />
    </div>
)

export default Header
