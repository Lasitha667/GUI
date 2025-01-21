import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const ImageSlider = () => {
  const images = [
    './Sketch-Co-Hero-Slider-1-scaled.jpg', 
    './Hustle_web_banner_2160_x_720_bdaf86b4-56b0-48dd-b0c0-f2f353d8cd46.jpg',
    './Sketch-Co-Hero-Slider-2-scaled.jpg',
    './kings_Street_web_banner_2160_x_720.jpg',
    './Sketch-Co-Hero-Slider-3-scaled.jpg',
    
    
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };


  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); 

    return () => clearInterval(interval); 
  }, []); 

  return (
    <div className="slider-container">
      <div className="slider">
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="slide">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        </div>

        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

     
    </div>
  );
};

export default ImageSlider;
