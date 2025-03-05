import React from "react";
import "./customer.css";

const testimonials = [
  {
    name: "Menuka Wijekoon",
    review:
      "I just got my first order and I have one word WOW!! The fit is great and neat. Love it ❤️❤️ I'll be back to buy more. For sure.",
    rating: 5,
  },
  {
    name: "Susan Kumanayake",
    review:
      "Highly recommended!! Friendly customer services and good quality dresses for reasonable price. Definitely will shop again 😍",
    rating: 5,
  },
  {
    name: "Nirasha Miyuri",
    review:
      "Highly recommended!! 😍😍 Friendly customer service, high quality products & fast delivery..❤️❤️😍",
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
