import React from "react"

import backArrow from "../images/backArrow.svg"

const GoBack = () => {
  return window.history.length > 2 ? (
    <button className="back" onClick={() => window.history.back()}>
      <img className="back__arrow" src={backArrow} alt=""/> Vissza
    </button>
  ) : null
}

export default GoBack