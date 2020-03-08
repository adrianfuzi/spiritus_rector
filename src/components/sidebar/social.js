import React from "react"

import facebook from "../../images/facebook.svg"
import youtube from "../../images/youtube.svg"

const Social = () => (
  <div className="social">
    <img className="social__item" src={facebook} alt="facebook"></img>
    <img className="social__item" src={youtube} alt="youtube"></img>
  </div>
)

export default Social
