import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Kapcsolat" />
    <div className="content">
      <h1 className="content__title">Kapcsolat</h1>
      <div className="content__page">
        <p className="content__page--text">Lépj kapcsolatba velünk!</p>
      </div>
    </div>
  </Layout>
)

export default ContactPage
