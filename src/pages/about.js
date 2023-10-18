// src/pages/about.js
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/about.css"

const About = () => (
  <Layout>
    <Seo
      title="About Us"
      description="Learn more about our company, our mission, and our team."
    />
    <div className={"section"}>
      <h1 className={"heading"}>About Us</h1>
      <p className={"content"}>Your content here...</p>
    </div>
  </Layout>
)

export default About
