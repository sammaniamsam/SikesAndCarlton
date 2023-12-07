// src/components/Nav.js
import React from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import IconGroup from "./iconGroup"

const NavBar = () => {
  const data = useStaticQuery(graphql`
    query {
      myLogo: file(relativePath: { eq: "sikes-and-carlton-logo-with-background.svg" }) {
        publicURL
      }
    }
  `);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand to="/">
          <Image
            fluid={true}
            src={data.myLogo.publicURL}
            style={{ maxHeight: "60px", marginBottom: 0}}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/" as={Link}>
              Home
            </Nav.Link>
            <Nav.Link to="/services" as={Link}>
              Services
            </Nav.Link>
            <Nav.Link to="/about" as={Link}>
              About
            </Nav.Link>
            <Nav.Link to="/contact" as={Link}>
              Contact
            </Nav.Link>
            {/* ...other links */}
          </Nav>
          <IconGroup />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
