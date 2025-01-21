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
        <p>0112-5689-789</p>
        <p>MonoModa.co@gmail.com </p>
      </div>

      {/* Feature 2 */}
      <div className="feature">
        <div className="icon">
          <i className="fas fa-truck"></i>
        </div>
        <h3>ISLANDWIDE DELIVERY</h3>
        <p>Delivery to anywhere in Sri Lanka</p>
      </div>

      {/* Feature 3 */}
      <div className="feature">
        <div className="icon">
          <i className="fas fa-undo"></i>
        </div>
        <h3>EASY RETURN</h3>
        <p>Simply return it within 30 days.</p>
      </div>
    </div>
  );
};

export default Features;
