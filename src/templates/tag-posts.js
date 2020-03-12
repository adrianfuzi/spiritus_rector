import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Post from "../components/Post"

const tagPosts = ({ data, pageContext }) => {
  const { tag } = pageContext
  const { totalCount } = data.allMarkdownRemark
  // const pageHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tag}"`
  const pageHeader = tag
  const pageHeaderCount = `(${totalCount} bejegyzés)`

  return (
    <Layout pageTitle={pageHeader}>
      <div className="content">
        <h1 className="content__title">
          {pageHeader} {" "}
          <span className="content__title-count">{pageHeaderCount}</span>
        </h1>
        <div className="content__page">
          <div className="content__page--post">
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Post
                key={node.id}
                slug={node.fields.slug}
                title={node.frontmatter.title}
                author={node.frontmatter.author}
                date={node.frontmatter.date}
                body={node.excerpt}
                tags={node.frontmatter.tags}
                fluid={node.frontmatter.image.childImageSharp.fluid}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const tagQuery = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
            author
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt(pruneLength: 500)
        }
      }
    }
  }
`

export default tagPosts
