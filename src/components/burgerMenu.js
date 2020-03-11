import React from "react"
import { Link } from "gatsby"

class BurgerMenu extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
    }
  }

  openMenuHandler = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { isOpen } = this.state

    return (
      <>
        <div
          className={`burger ${isOpen ? "burger__change" : ""}`}
          onClick={this.openMenuHandler}
          onKeyDown={this.openMenuHandler}
          role="button"
          tabIndex={0}
        >
          <div className="burger__bar-1"></div>
          <div className="burger__bar-2"></div>
          <div className="burger__bar-3"></div>
        </div>
        <div className={`burger-menu ${isOpen ? "burger-menu-visible" : ""}`}>
          <ul className="burger-menu__nav">
            <li className="burger-menu__nav-link">
              <Link to="/">Főoldal</Link>
            </li>
            <li className="burger-menu__nav-link">
              <Link to="/temak">Témák</Link>
            </li>
            <li className="burger-menu__nav-link">Linkek</li>
            <li className="burger-menu__nav-link">
              <Link to="/rolunk">Rólunk</Link>
            </li>
            <li className="burger-menu__nav-link">
              <Link to="/kapcsolat">Kapcsolat</Link>
            </li>
          </ul>
        </div>
      </>
    )
  }
}

export default BurgerMenu
