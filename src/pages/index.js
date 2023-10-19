import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ImageGallery from "../components/ImageGallery";
import Nav from "../components/nav";

const IndexPage = () => (
  <Layout>
    <div>
      <ImageGallery album="dry-creek-bed" />
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
