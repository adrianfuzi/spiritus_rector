import React from "react"
import { graphql, StaticQuery } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Post from "../components/Post"
import PaginationLinks from "../components/PaginationLinks"

const IndexPage = () => {
  const postsPerPage = 3
  let numberOfPages

  return (
    <Layout pageTitle="Főoldal">
      <SEO title="Főoldal" />
      <div className="content">
        <h1 className="content__title">Spiritus Rector</h1>
        <div className="content__page">
          <p className="content__page--text">
            Holás vinyományának porsonával mind inkább konyába szakított a zong
            göréne. A szfánra a cselló annyira amvarott, hogy brásban fésűs zong
            lett a polyászokból. Ennek simítása, hogy a keres kelső ezeli
            gulyákban garságot tökedtek, így az intos egységek morlány nezéknek
            kanyozták ki. A gatoroknak gatámoruk volt, kóznia és élkelnie őket.
            A kapítások szoraszán azonban van sajgás matlás.
          </p>
          <h2 className="content__page--highlight">Legfrissebb munkák:</h2>

          <StaticQuery
            query={indexQuery}
            render={data => {
              numberOfPages = Math.ceil(
                data.allMarkdownRemark.totalCount / postsPerPage
              )
              return (
                <div className="content__page--post">
                  {data.allMarkdownRemark.edges.map(({ node }) => (
                    <Post
                      key={node.id}
                      title={node.frontmatter.title}
                      author={node.frontmatter.author}
                      slug={node.fields.slug}
                      date={node.frontmatter.date}
                      body={node.excerpt}
                      fluid={node.frontmatter.image.childImageSharp.fluid}
                      tags={node.frontmatter.tags}
                    />
                  ))}
                  <PaginationLinks
                    currentPage={1}
                    numberOfPages={numberOfPages}
                  />
                </div>
              )
            }}
          />
        </div>
      </div>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
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

export default IndexPage
