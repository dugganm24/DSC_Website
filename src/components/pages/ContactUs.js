import React from 'react';
import ContactForm from './ContactForm';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us-wrapper">
      <div className="contact-us-container">
        <div className="left-content">
          <h2>Let's Connect</h2>
          <p>
            Whether you're planning a remodel, custom home build, or looking to sell your property, our team is here to help.
            We specialize in all aspects of construction and real estate, ensuring a seamless experience from start to finish.
            Our inbox is always open, and we look forward to hearing from you!
          </p>
          <div className="contact-info">
            <div className="phone-info">
              <i className="fas fa-phone-alt"></i>
              <span>(978) 909 - 3122</span>
            </div>
          </div>
          <div className="socials">
            <a href="https://x.com/Duggan_andSons" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-x-twitter"></i>
            </a>
            <a href="https://www.instagram.com/dugganandsons/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="right-form">
          <div className="contact-us-form">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
