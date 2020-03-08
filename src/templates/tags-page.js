import React from "react"
import { slugify } from "../util/utilityFunctions"

import Layout from "../components/layout"
import SEO from "../components/seo"

import hypnosis from "../images/hypnosis.jpg"
import psychology from "../images/psychology.jpg"
import science from "../images/science.jpg"
import dreaming from "../images/dreaming.jpg"
import obe from "../images/obe.jpg"
import psychedelics from "../images/psychedelics.jpg"
import occultism from "../images/occultism.jpg"

const tagsPage = ({ pageContext }) => {
  const { tags, tagPostCounts } = pageContext

  const imgSource = tag => {
    if (tag === "Hipnózis") {
      return hypnosis
    } else if (tag === "Pszichológia") {
      return psychology
    } else if (tag === "Tudomány") {
      return science
    } else if (tag === "Álmodás") {
      return dreaming
    } else if (tag === "Testen kívüli élmény") {
      return obe
    } else if (tag === "Pszichedelikumok") {
      return psychedelics
    } else if (tag === "Okkult tudományok") {
      return occultism
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
                  <img
                    className="content__page--topics-figure-img"
                    alt={tag}
                    src={imgSource(tag)}
                  />
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
