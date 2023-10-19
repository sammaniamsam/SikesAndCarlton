import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faGoogle } from '@fortawesome/free-brands-svg-icons';
import '../css/footer.css';  // Ensure this file is in the same directory and contains the previous CSS

const Footer = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center">
          <div className="icon-group">
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="icon-button">
              <FontAwesomeIcon icon={faGoogle} size="2x" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon-button icon-spacing">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="icon-button">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
