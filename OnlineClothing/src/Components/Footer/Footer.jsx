import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h2 className="footer-logo">Thread & Co.</h2>
        <p className="footer-description">
          Your go-to destination for modern and stylish clothing.
        </p>
        <div className="footer-social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaTwitter />
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaPinterest />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Thread & Co.. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
