// src/components/ContactForm.js

import React from "react"
import './contactForm.css'

const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeCGD6u9Hh-WE66PJlCEoBVBmwvKSDJatyZXmYCv8LhUDRFpg/formResponse";
const GOOGLE_FORM_NAME_ID = "entry.222030724";
const GOOGLE_FORM_EMAIL_ID = "entry.286980625";
const GOOGLE_FORM_PHONE_ID = "entry.1989085065";
const GOOGLE_FORM_DETAILS_ID = "entry.1652381296";
const GOOGLE_FORM_ADDRESS_ID = "entry.245607667";

const ContactForm = () => {
  return (
    <form action={GOOGLE_FORM_ACTION_URL} method="POST" target="_blank" className="contact-form">
      <label htmlFor="name">Name</label>
      <input type="text" name={GOOGLE_FORM_NAME_ID} id="name" required />

      <label htmlFor="email">Email</label>
      <input type="email" name={GOOGLE_FORM_EMAIL_ID} id="email" required />

      <label htmlFor="phone">Phone Number</label>
      <input type="tel" name={GOOGLE_FORM_PHONE_ID} id="phone" required />

      <label htmlFor="details">Details</label>
      <textarea name={GOOGLE_FORM_DETAILS_ID} id="details" required></textarea>

      <label htmlFor="address">Physical Address</label>
      <textarea name={GOOGLE_FORM_ADDRESS_ID} id="address"></textarea>

      <button type="submit">Submit</button>
    </form>
  )
}

export default ContactForm;
