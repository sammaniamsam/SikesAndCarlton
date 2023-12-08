import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Card, Row, Col } from "react-bootstrap";
import services from "../constants/servicesData.js";

const IndexPage = () => {
  return (
    <Layout maxWidthOverride={"125rem"}>
      <Seo title="Services" />
      {Object.keys(services).map((category, idx) => (
        <div key={idx} className="mb-5">
          <h3 className="mb-3">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </h3>
          <Row xs={1} md={2} lg={3} className="g-4">
            {services[category].map((service, serviceIdx) => (
              <Col key={serviceIdx} xxl={3}>
                <Card>
                  <Card.Body>
                    <Card.Title>{service.name}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Layout>
  );
};

export default IndexPage;
