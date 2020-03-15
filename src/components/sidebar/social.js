import React from "react"

import facebook from "../../images/facebook.svg"
import youtube from "../../images/youtube.svg"

const Social = () => (
  <div className="social">
    <a
      className="social__item"
      href="https://facebook.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={facebook} alt="facebook"></img>
    </a>
    <a
      className="social__item"
      href="https://youtube.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={youtube} alt="youtube"></img>
    </a>
  </div>
)

export default Social
