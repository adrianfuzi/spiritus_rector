import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GoBack from "../components/goBack"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Oldal nem létezik" />
    <div className="content">
      <h1 className="content__title">Upsz <span role="img" aria-label="bizonytalan">&#128533;</span></h1>
      <div className="content__page">
        <p className="content__page--text">Ez az oldal nem létezik!</p>
      <GoBack/>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
