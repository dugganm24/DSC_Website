import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="services-container">
      <section className="welcome-section">
        <h1>Our Services</h1>
      </section>

      <section className="service-section">
        <div className="service">
          <img src="/images/img2.jpeg" alt="We Buy Properties" />
          <div className="service-details">
            <h3>We Buy Properties</h3>
            <p>Whether you're looking to sell your house quickly or need assistance with property acquisition, we provide efficient and reliable services to meet your needs.</p>
          </div>
        </div>

        <div className="service">
          <img src="/images/img3.jpeg" alt="Custom Homes" />
          <div className="service-details">
            <h3>Custom Homes</h3>
            <p>Design and build your dream home with our expert team. From concept to completion, we'll work closely with you to ensure every detail reflects your vision.</p>
          </div>
        </div>

        <div className="service">
          <img src="/images/img4.jpeg" alt="Additions and Renovations" />
          <div className="service-details">
            <h3>Additions and Renovations</h3>
            <p>Expand your living space or update your current home with our additions and renovations services. Enhance functionality and increase property value with our expert craftsmanship.</p>
          </div>
        </div>

        <div className="service">
          <img src="/images/img4.jpeg" alt="Kitchens and Baths" />
          <div className="service-details">
            <h3>Kitchens and Baths</h3>
            <p>Transform your kitchen and bathrooms into stylish and functional spaces. From modern upgrades to complete renovations, we'll bring your vision to life.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
