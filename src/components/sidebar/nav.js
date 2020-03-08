import React from "react"
import { Link } from "gatsby"

import arrow from "../../images/arrow.svg"

const Nav = () => (
  <ul className="nav">
    <li className="nav__item">
      <Link to="/">Főoldal</Link>
    </li>
    <li className="nav__item nav__item--parent">
      <Link to="/temak">Témák</Link>{" "}
      <img className="nav__arrow" alt="" src={arrow} />
      <ul className="nav__item--submenu">
        <li>
          <Link to="/tema/hipnozis">Hipnózis</Link>
        </li>
        <li>
          <Link to="/tema/pszichologia">Pszichológia</Link>
        </li>
        <li>
          <Link to="/tema/tudomany">Tudomány</Link>
        </li>
        <li>
          <Link to="/tema/almodas">Álmodás</Link>
        </li>
        <li>
          <Link to="/tema/testen-kivuli-elmeny">Testen kívüli élmény</Link>
        </li>
        <li>
          <Link to="/tema/pszichedelikumok">Pszichedelikumok</Link>
        </li>
        <li>
          <Link to="/tema/okkult-tudomanyok">Okkult tudományok</Link>
        </li>
      </ul>
    </li>
    <li className="nav__item nav__item--parent">
      Linkek <img className="nav__arrow" alt="" src={arrow} />
      <ul className="nav__item--submenu">
        <li>Első</li>
        <li>Második</li>
        <li>Harmadik</li>
        <li>Negyedik</li>
      </ul>
    </li>
    <li className="nav__item">
      <Link to="/rolunk">Rólunk</Link>
    </li>
    <li className="nav__item">
      <Link to="/kapcsolat">Kapcsolat</Link>
    </li>
  </ul>
)

export default Nav
