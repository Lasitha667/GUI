import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const ImageSlider = () => {
  const images = [
   
    '/MIRISSA-HSE-FINISHED-4-ELLA-BRIDGE_3-1-1024x683.jpg',
    '/IMG_1155-min.jpg',
    '/kitesurfing-fitness-training-guide.jpg',
    '/sri-lanka-sigiriya.webp',
    
    
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
