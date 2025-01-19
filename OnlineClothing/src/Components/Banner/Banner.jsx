import React from "react";
import "./ClothingStoreBanner.css";
import promoImage from '../../assets/472709897_1004841068332711_6913993373117599696_n.jpg';
const ClothingStoreBanner = () => {
  return (
    <div className="banner-container">
      <div className="text-section">
        <h1>Your Latest Online Clothing Store in Sri Lanka.</h1>
        <p>
          Discover a new level of style at Sketch Co, your online clothing store
          in Sri Lanka. Our clothing reflects individuality and is designed for
          comfort and durability. Enjoy convenient home delivery with our
          islandwide service, bringing the latest fashion right to your door.
        </p>
      </div>
      <div className="promo-section">
        <img src={promoImage} alt="Promotional Offer" className="promo-image" />
        <div className="promo-text">
          <h2>UPTO</h2>
          <h1>20% OFF</h1>
          <p>ON SELECTED ITEMS</p>
          <p className="brand-name">MonoModa.Co</p>
          <p className="website">www.MonoModa-co.com</p>
        </div>
      </div>
    </div>
  );
};

export default ClothingStoreBanner;
