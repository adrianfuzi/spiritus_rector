import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { slugify } from "../util/utilityFunctions"

const Post = ({ title, author, slug, date, body, fluid, tags }) => {
  return (
    <div className="post">
      <figure className="post__figure">
        <Link to={`/${slug}`}>
          <Img className="post__figure--image" fluid={fluid} />
        </Link>
      </figure>
      <div className="post__card">
        <h2 className="post__card--title">
          <Link to={`/${slug}`}>{title}</Link>
        </h2>
        <div className="post__card--info">
          <p>{date}</p> by <p>{author}</p>
        </div>
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
            Tovább...
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Post
