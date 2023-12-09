import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Table } from "react-bootstrap";
import services from "../constants/servicesData.js";

const colorMap = {
  Blue: "#6EB5E5",
  Green: "#A3CC8C",
  Orange: "#F5A623",
  Brown: "#D8B995",
};

const IndexPage = () => {
  return (
    <Layout maxWidthOverride={"125rem"}>
      <Seo title="Services" />
      {Object.keys(services).map((category, idx) => {
        // Get the corresponding color for the category
        const categoryColor = colorMap[category];

        return (
          <div key={idx} className="mb-5" style={{backgroundColor: categoryColor}}>
            <h3 className="mb-3" style={{ color: categoryColor }}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h3>
            <Table bordered hover responsive style={{ backgroundColor: categoryColor }}>
              <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
              </tr>
              </thead>
              <tbody>
              {services[category].map((service, serviceIdx) => (
                <tr key={serviceIdx}>
                  <td>{service.name}</td>
                  <td>{service.description}</td>
                </tr>
              ))}
              </tbody>
            </Table>
          </div>
        );
      })}
    </Layout>
  );
};

export default IndexPage;
