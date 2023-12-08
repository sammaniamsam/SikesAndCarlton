import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import "../css/iconGroup.css"; // Ensure this file is in the same directory and contains the previous CSS

const IconGroup = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center">
          <div className="icon-group">
            <div className="icon-spacing">
            <a style={{paddingRight: 5}}
              href="https://maps.app.goo.gl/wMzFithEsGXttbPz5"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-button"
            >
              <FontAwesomeIcon icon={faGoogle} size="2x" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCF9XepynEnqC1kGc-0s6w-w"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-button"
            >
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default IconGroup;
