import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const ImageSlider = () => {
  const images = [
    './Sketch-Co-Hero-Slider-1-scaled.jpg', // Replace with your actual image paths
    './Sketch-Co-Hero-Slider-2-scaled.jpg',
    './Sketch-Co-Hero-Slider-3-scaled.jpg',
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Automatically change slides every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slides every 4000ms (4 seconds)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []); // Use an empty dependency array to ensure it runs only once on mount

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
