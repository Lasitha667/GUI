import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Serendip Travels</h2>
          <p>ready to show you the island’s breathtaking landscapes</p>
          <p className="footer-contact">
            <span>📞</span> +94 (71) 568 7863
          </p>
          <p className="footer-contact">
            <span>📧</span> info@serendip.com
          </p>
          <div className="social-icons">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faFacebook} size="2x" />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faInstagram} size="2x" />
  </a>
  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faTiktok} size="2x" />
  </a>
</div>
        </div>

        <div className="footer-section">
          <h3>Thread & Co. Network</h3>
          <ul>
            <li>Colombo</li>
            <li>Badulla</li>
            <li>Kandy</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Information</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/destinations">Destinations</a></li>
            <li><a href="/guides">Our Guides</a></li>
            <li><a href="/about">About Us</a></li>
           
            
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2024 Thread & Co. All Rights Reserved</p>
        <div className="payment-icons">
          <img src="visa.jpg" alt="Visa" />
          <img src="mastercard.jpg" alt="Mastercard" />
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;