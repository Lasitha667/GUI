import React from "react";
import "./customer.css";

const testimonials = [
  {
    name: "John & Emily - UK",
    review:
      "Our trip to Sri Lanka was simply magical! From the beaches of Mirissa to the tea fields of Nuwara Eliya, everything was perfectly planned. Our guide was friendly, knowledgeable, and made us feel like family.",
    rating: 5,
  },
  {
    name: "Mark – Australia",
    review:
      "Professional, punctual, and passionate! Every day was an adventure, and we learned so much about the culture and history. Can’t wait to come back!",
    rating: 5,
  },
  {
    name: "Sophia – Germany",
    review:
      "The personal care and attention to detail were incredible. We felt safe, comfortable, and welcomed throughout our journey. Truly unforgettable!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Our Happy Clients!</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <p className="review-text">"{testimonial.review}"</p>
            <div className="stars">
              {"★".repeat(testimonial.rating)}
            </div>
            <div className="user-info">
              
              <h4>{testimonial.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
