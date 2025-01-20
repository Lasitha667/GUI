import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        Have questions, feedback, or need assistance? We're here to help. Reach out to us
        anytime!
      </p>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your Email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Your Message" rows="5" required></textarea>
        </div>

        <button type="submit" className="contact-button">Send Message</button>
      </form>

      <div className="contact-info">
        <h2>Contact Information</h2>
        <p><strong>Email:</strong> support@monomoda.co.com</p>
        <p><strong>Phone:</strong> +1 (123) 456-7890</p>
        <p><strong>Address:</strong> 123/1 Samarasinghe Mawatha,Badulla</p>
      </div>
    </div>
  );
};

export default ContactUs;
