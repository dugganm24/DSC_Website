import React from 'react';
import './Footer.css';

function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-container">
        <div className="llc-info">
          <p>&copy; {currentYear} Duggan and Sons LLC. All rights reserved.</p>
        </div>
        <div className="social-links">
          <a href="https://x.com/Duggan_andSons" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-x-twitter"></i>
          </a>
          <a href="https://www.instagram.com/dugganandsons/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
