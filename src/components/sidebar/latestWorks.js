import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

const LatestWorks = () => (
  <div className="latestWorks">
    <p className="latestWorks__title">Legfrissebb munkák:</p>
    <StaticQuery
      query={latestWorksQuery}
      render={data => (
        <div className="latestWorks__container">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <figure className="latestWorks__figure" key={node.id}>
              <Link to={`/${node.fields.slug}`}>
                <Img
                  className="latestWorks__figure-img"
                  fluid={node.frontmatter.image.childImageSharp.fluid}
                />
              </Link>
              <figcaption className="latestWorks__figure-title">
                <Link to={`/${node.fields.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    />
  </div>
)

const latestWorksQuery = graphql`
  query latestWorksQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default LatestWorks
