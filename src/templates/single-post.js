import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { slugify } from "../util/utilityFunctions"

import Layout from "../components/layout"
import SEO from "../components/seo"

import GoBack from "../components/goBack"
import facebook from "../images/facebook.svg"

const SinglePost = ({ data, pageContext }) => {
  const post = data.markdownRemark.frontmatter

  const baseUrl = "https://spiritus-rector.netlify.com/"

  return (
    <Layout>
      <SEO title={post.title} />
      <div className="content">
        <div className="content__page">
          <div className="post">
            <div className="post__card">
              <h2 className="post__card--title">{post.title}</h2>
              <div className="post__card--info">
                <p>
                  By {post.author} - {post.date}
                </p>
              </div>
              <figure className="post__card--figure">
                <Img
                  className="post__card--figure-imagePost"
                  fluid={post.image.childImageSharp.fluid}
                />
              </figure>
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
              <div className="post__card--share">
                <h3>Megosztás:</h3>
                <ul>
                  <li>
                    <a
                      className="post__card--share-link"
                      href={
                        "https://www.facebook.com/sharer/sharer.php?u=" +
                        baseUrl +
                        pageContext.slug
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="post__card--share-link_name">
                        Facebook
                      </span>
                      <img
                        className="post__card--share-link_icon"
                        src={facebook}
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <GoBack />
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
