import React from "react";
import "./bottominfo.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Features = () => {
  return (
    <div className="features-container">
      {/* Feature 1 */}
      <div className="feature">
        <div className="icon">
          <i className="fas fa-phone-alt"></i>
        </div>
        <h3>SUPPORT 24/7</h3>
        <p>24/7 Customer Support</p>
        
      </div>

      {/* Feature 2 */}
      <div className="feature">
        <div className="icon">
          <i className="fas fa-car"></i>
        </div>
        <h3>ISLANDWIDE Transpotation</h3>
        <p>Delivery to anywhere in Sri Lanka</p>
      </div>

      {/* Feature 3 */}
      <div className="feature">
        <div className="icon">
          <i className="fas fa-shield-alt"></i>
        </div>
        <h3>Safety & Comfort</h3>
        <p>Your well-being is our top priority.</p>
      </div>
    </div>
  );
};

export default Features;
