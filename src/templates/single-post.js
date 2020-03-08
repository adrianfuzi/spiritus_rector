import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { slugify } from "../util/utilityFunctions"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SinglePost = ({ data }) => {
  const post = data.markdownRemark.frontmatter
  return (
    <Layout>
      <SEO title={post.title} />
      <div className="content">
        <div className="content__page">
          <div className="post">
            <figure className="post__figure">
              <Img
                className="post__figure--imagePost"
                fluid={post.image.childImageSharp.fluid}
              />
            </figure>
            <div className="post__card">
              <h2 className="post__card--title">{post.title}</h2>
              <div className="post__card--info">
                <p>{post.date}</p> by <p>{post.author}</p>
              </div>
              <div
                className="post__card--body"
                dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
              />
              <ul className="post__card--tags">
                {post.tags.map(tag => (
                  <li className="post__card--tags-tag" key={tag}>
                    <Link to={`/tema/${slugify(tag)}`}>
                      <div>{tag}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query blogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        author
        date
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default SinglePost
