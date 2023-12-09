import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../css/about.css";
import values from "../constants/valuesData";

const About = () => (
  <Layout maxWidthOverride={"125rem"}>
    <Seo
      title="About"
      description="Learn more about our company, our mission, and our team."
    />
    <Container fluid className={"section"}>
      <Row>
        <Col>
          <h2 className={"sub-heading"}>Our Values</h2>
          <Row>
            {values.map((value, index) => (
              <Col lg={4} md={12} key={index}>
                <Card className="mb-4">
                  <Card.Body>
                    <Card.Title>{value.title}</Card.Title>
                    <Card.Text>{value.content}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export const Head = () => <Seo title="About" />;

export default About;
