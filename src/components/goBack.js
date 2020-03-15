import React from "react"

import backArrow from "../images/backArrow.svg"

const GoBack = () => {
    if (typeof window !== `undefined`) {
        return window.history.length > 2 ? (
          <button className="back" onClick={() => window.history.back()}>
            <img className="back__arrow" src={backArrow} alt=""/> Vissza
          </button>
        ) : null
    } else {
        return null
    }
}

export default GoBack