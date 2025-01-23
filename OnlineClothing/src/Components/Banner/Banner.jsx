import React from "react";
import "./ClothingStoreBanner.css";

const ClothingStoreBanner = () => {
  return (
    <div className="banners-container">
     
      <div className="top-stories-header">
        <h1>Top Stories</h1>
      </div>

     
      <div className="banners-section">
        
        <div className="banner-container01">
          <div className="text-section1">
            <h1>Your Latest Online Clothing Store in Sri Lanka</h1>
            <p>
              Discover unique styles at Sketch Co. Our collections are curated
              for comfort, durability, and individuality. Shop now and enjoy
              home delivery anywhere in Sri Lanka.
            </p>
          </div>
          <div className="promo-section">
            <img
              src="image7.jpg"
              alt="Promotional Offer 1"
              className="promo-image"
            />
            <div className="promo-text1">
              <h2>UPTO</h2>
              <h1>20% OFF</h1>
              <p>ON SELECTED ITEMS</p>
            </div>
          </div>
        </div>

        {/* Banner 2 */}
        <div className="banner-container02">
          <div className="text-section2">
            <h1>Exclusive Winter Collection Now Available!</h1>
            <p>
              Elevate your wardrobe with our latest winter collection. Designed
              to keep you warm while staying stylish. Order now for doorstep
              delivery!
            </p>
          </div>
          <div className="promo-section">
            <img
              src="image1.jpg"
              alt="Promotional Offer 2"
              className="promo-image"
            />
            <div className="promo-text2">
              <h2>LIMITED</h2>
              <h1>30% OFF</h1>
              <p>ON WINTER COLLECTION</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClothingStoreBanner;
