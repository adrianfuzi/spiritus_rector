import React from "react"
import { slugify } from "../util/utilityFunctions"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const tagsPage = ({ data, pageContext }) => {
  const { tags, tagPostCounts } = pageContext

  const imgSource = tag => {
    switch (tag) {
      case "Hipnózis": return data.hypnosis.childImageSharp.fluid
      case "Pszichológia": return data.psychology.childImageSharp.fluid
      case "Tudomány": return data.science.childImageSharp.fluid
      case "Álmodás": return data.dreaming.childImageSharp.fluid
      case "Testen kívüli élmény": return data.obe.childImageSharp.fluid
      case "Pszichedelikumok": return data.psychedelics.childImageSharp.fluid
      case "Okkult tudományok": return data.occultism.childImageSharp.fluid
      default: return null
  }
}

  return (
    <Layout pageTitle="Témák">
      {/* TODO: keywords */}
      <SEO title="Témák" keywords={["tags", "topics"]} />
      <div className="content">
        <div className="content__page">
          <h1 className="content__title">Témák</h1>
          <div className="content__page--topics">
            {tags.map(tag => (
              <figure className="content__page--topics-figure" key={tag}>
                <a href={`/tema/${slugify(tag)}`}>
                  <Img className="content__page--topics-figure-img" fluid={imgSource(tag)}/>
                </a>
                <figcaption className="content__page--topics-figure-title">
                  {tag}
                  <span className="content__page--topics-figure-title-tag">
                    {tagPostCounts[tag]}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default tagsPage

export const imageQuery = graphql`
  query {
    hypnosis: file(relativePath: { eq: "hypnosis.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    psychology: file(relativePath: { eq: "psychology.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    science: file(relativePath: { eq: "science.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dreaming: file(relativePath: { eq: "dreaming.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    obe: file(relativePath: { eq: "obe.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    psychedelics: file(relativePath: { eq: "psychedelics.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    occultism: file(relativePath: { eq: "occultism.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`