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
             Dive into adventure in Kitulgala, where lush rainforests, hidden waterfalls, and white-water rapids offer the perfect escape for thrill-seekers and nature lovers alike.
            </p>
          </div>
          <div className="promo-section">
            <img
              src="Kithulgala.jpg"
              alt="Promotional Offer 1"
              className="promo-image"
            />
            <div className="promo-text1">
              <h2>UPTO</h2>
              <h1>20% OFF</h1>
              
            </div>
          </div>
        </div>

        {/* Banner 2 */}
        <div className="banner-container02">
          <div className="text-section2">
            <h1>Exclusive Winter Collection Now Available!</h1>
            <p>
              Breathe in the cool mountain air of Nuwara Eliya — a timeless retreat of tea plantations, flower gardens, and colonial charm nestled in Sri Lanka’s highlands
            </p>
          </div>
          <div className="promo-section">
            <img
              src="LK66161630-11-E.jpg"
              alt="Promotional Offer 2"
              className="promo-image"
            />
            <div className="promo-text2">
              <h2>LIMITED SEATS</h2>
              <h1>30% OFF</h1>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClothingStoreBanner;
