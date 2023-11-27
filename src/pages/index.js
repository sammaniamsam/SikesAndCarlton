import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Card, Row, Col, Container } from "react-bootstrap";
import services from "../constants/servicesData.js"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Container>
        <h2 className="text-center my-4">Our Landscaping Services</h2>
        {Object.keys(services).map((category, idx) => (
          <div key={idx} className="mb-5">
            <h3 className="mb-3">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            <Row xs={1} md={2} lg={3} className="g-4">
              {services[category].map((service, serviceIdx) => (
                <Col key={serviceIdx}>
                  <Card>
                    <Card.Body>
                      <Card.Title>{service.name}</Card.Title>
                      <Card.Text>
                        {service.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />

export default IndexPage;
