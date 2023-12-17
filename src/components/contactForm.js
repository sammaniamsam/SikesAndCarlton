// src/components/ContactForm.js
import React from "react";
import { Form, Button } from "react-bootstrap";
// import "../css/contactForm.css";

const GOOGLE_FORM_ACTION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdXkPPKWh6uetRc9k87uxgbSUOZqr_-fZyRH_5ZqLIhaGcYXA/formResponse";
const GOOGLE_FORM_NAME_ID = "entry.461958518";
const GOOGLE_FORM_EMAIL_ID = "entry.114581294";
const GOOGLE_FORM_PHONE_ID = "entry.517148974";
const GOOGLE_FORM_DETAILS_ID = "entry.958979502";
const GOOGLE_FORM_ADDRESS_ID = "entry.295656525";

const ContactForm = () => {
  const formGroupStyle = {
    marginBottom: "15px",
  };

  return (
    <Form action={GOOGLE_FORM_ACTION_URL} method="POST" target="_blank">
      <Form.Group controlId="name" style={formGroupStyle}>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name={GOOGLE_FORM_NAME_ID} required />
      </Form.Group>

      <Form.Group controlId="email" style={formGroupStyle}>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name={GOOGLE_FORM_EMAIL_ID} required />
      </Form.Group>

      <Form.Group controlId="phone" style={formGroupStyle}>
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="tel" name={GOOGLE_FORM_PHONE_ID} required />
      </Form.Group>

      <Form.Group controlId="details" style={formGroupStyle}>
        <Form.Label>Details</Form.Label>
        <Form.Control as="textarea" name={GOOGLE_FORM_DETAILS_ID} required />
      </Form.Group>

      <Form.Group controlId="address" style={formGroupStyle}>
        <Form.Label>Physical Address</Form.Label>
        <Form.Control as="textarea" name={GOOGLE_FORM_ADDRESS_ID} />
      </Form.Group>

      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default ContactForm;
