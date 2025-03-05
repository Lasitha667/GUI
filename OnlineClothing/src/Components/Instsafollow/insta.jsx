import React, { useState } from "react";
import "./insta.css";


const images = [
  { url: "/card9.jpg" },
  { url: "/card3.jpg" },
  { url: "/image2 (1).jpg" },
  
];

const InstaFeed = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="insta-section">
      
      <div className="insta-text">
        <h2>@Thread</h2>
        <p>Join our fam! Shop the looks from our Insta Feed</p>
        <button className="follow-btn">FOLLOW US</button>
      </div>

      
      <div className="carousel-container">
        <button className="nav-btn left" onClick={prevSlide}>
          &lt;
        </button>
        <div
          className="carousel-slide"
          style={{ transform: `translateX(-${currentIndex * 400}px)` }}
        >
          {images.map((img, index) => (
            <div className="slide" key={index}>
              <img src={img.url} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
        <button className="nav-btn right" onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </section>
  );
};

export default InstaFeed;
