import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import ContactForm from "../components/contactForm";

const ContactPage = () => (
  <Layout>
    <Seo title="Contact" />
    <ContactForm />
  </Layout>
);

export const Head = () => <Seo title="Contact" />;

export default ContactPage;
