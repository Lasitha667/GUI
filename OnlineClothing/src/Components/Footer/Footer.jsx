import React from 'react';
import './Footer.css';




function Footer() {
  return(
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>Welcome to StyleHub, your go-to store for the latest trends in fashion. We aim to deliver style and comfort to all our customers.</p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: support@stylehub.com</p>
          <p>Phone: +123-456-7890</p>
          <p>Address: 123 Fashion Ave, Style City</p>
        </div>
        <div>
          <h2>Follow Us</h2>
          <div>
            
          </div>
        </div>
        
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 StyleHub | All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;