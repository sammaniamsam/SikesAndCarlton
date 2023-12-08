// src/pages/about.js
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Container, Row, Col } from "react-bootstrap";
import "../css/about.css";

const About = () => (
  <Layout>
    <Seo
      title="About"
      description="Learn more about our company, our mission, and our team."
    />
    <Container fluid className={"section"}>
      <Row>
        <Col>
          <h1 className={"heading"}>About Us</h1>
          <p className={"content"}>Coning soon!</p>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export const Head = () => <Seo title="About" />;

export default About;
