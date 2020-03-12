import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { slugify } from "../util/utilityFunctions"

import arrow from "../images/arrow.svg"

const Post = ({ title, author, slug, date, body, fluid, tags }) => {
  return (
    <div className="post">
      <div className="post__card">
        <h2 className="post__card--title">
          <Link to={`/${slug}`}>{title}</Link>
        </h2>
        <div className="post__card--info">
          <p>
            By {author} - {date}
          </p>
        </div>
        <figure className="post__card--figure">
          <Link to={`/${slug}`}>
            <Img className="post__card--figure-image" fluid={fluid} />
          </Link>
        </figure>
        <div className="post__card--body">{body}</div>
        <ul className="post__card--tags">
          {tags.map(tag => (
            <li key={tag} className="post__card--tags-tag">
              <Link to={`/tema/${slugify(tag)}`}>
                <div>{tag}</div>
              </Link>
            </li>
          ))}
        </ul>
        <p className="post__card--more">
          <Link to={`/${slug}`} className="post__card--more-btn">
            Tovább <img className="post__card--more-arrow" alt="" src={arrow} />
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Post
