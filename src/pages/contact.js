// src/pages/contact.js

import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ContactForm from "../components/ContactForm"

const ContactPage = () => (
  <Layout>
    <Seo title="Contact Us" />
    <ContactForm />
  </Layout>
)

export default ContactPage;
