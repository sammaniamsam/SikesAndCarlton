// src/components/ContactForm.js
import React from "react";
import { Form, Button } from "react-bootstrap";
import '../css/contactForm.css';

const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeCGD6u9Hh-WE66PJlCEoBVBmwvKSDJatyZXmYCv8LhUDRFpg/formResponse";
const GOOGLE_FORM_NAME_ID = "entry.222030724";
const GOOGLE_FORM_EMAIL_ID = "entry.1989085065";
const GOOGLE_FORM_PHONE_ID = "entry.286980625";
const GOOGLE_FORM_DETAILS_ID = "entry.1652381296";
const GOOGLE_FORM_ADDRESS_ID = "entry.245607667";

const ContactForm = () => {
  return (
    <Form action={GOOGLE_FORM_ACTION_URL} method="POST" target="_blank">
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name={GOOGLE_FORM_NAME_ID} required />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name={GOOGLE_FORM_EMAIL_ID} required />
      </Form.Group>

      <Form.Group controlId="phone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="tel" name={GOOGLE_FORM_PHONE_ID} required />
      </Form.Group>

      <Form.Group controlId="details">
        <Form.Label>Details</Form.Label>
        <Form.Control as="textarea" name={GOOGLE_FORM_DETAILS_ID} required />
      </Form.Group>

      <Form.Group controlId="address">
        <Form.Label>Physical Address</Form.Label>
        <Form.Control as="textarea" name={GOOGLE_FORM_ADDRESS_ID} />
      </Form.Group>

      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default ContactForm;