import React from 'react';
import ContactForm from './ContactForm';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <div className="contact-us-form">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
