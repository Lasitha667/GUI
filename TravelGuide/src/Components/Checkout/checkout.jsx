import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './checkout.css';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, total } = location.state || {};

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    alert('Payment Successful!');
    navigate('/');
  };

  if (!cart || cart.length === 0) {
    navigate('/');
    return null;
  }

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <h2>Secure Checkout</h2>
        <div className="security-notice">
          <span className="lock-icon">🔒</span>
          <span>Secure SSL Encryption · 256-bit Security</span>
        </div>
      </div>

      <div className="checkout-content">
        <div className="order-summary">
          <h3>
            <span className="summary-icon">📦</span>
            Order Summary
          </h3>
          {cart.map((item, index) => (
            <div key={index} className="checkout-item">
              <div className="item-info">
                <p className="item-title">{item.title} - {item.size}</p>
                <p className="item-quantity">Quantity: {item.quantity}</p>
              </div>
              <p className="item-price">LKR {(item.price * item.quantity).toLocaleString()}</p>
            </div>
          ))}
          <div className="total-section">
            <h4>Total: LKR {total.toLocaleString()}</h4>
          </div>
        </div>

        <form className="payment-form" onSubmit={handlePaymentSubmit}>
          <div className="form-group">
            <label>Name on Card</label>
            <input 
              type="text" 
              placeholder="John Doe" 
              required 
              className="card-input"
            />
          </div>
          
          <div className="form-group">
            <label>Card Number</label>
            <input 
              type="text" 
              pattern="[0-9]{16}" 
              placeholder="4242 4242 4242 4242" 
              required 
              className="card-input"
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Expiration Date</label>
              <input 
                type="month" 
                required 
                className="expiry-input"
              />
            </div>
            
            <div className="form-group">
              <label>CVV</label>
              <input 
                type="text" 
                pattern="[0-9]{3}" 
                placeholder="123" 
                required 
                className="cvv-input"
              />
            </div>
          </div>

          <div className="payment-methods">
            <span>Accepted Cards:</span>
            <div className="card-icons">
              <span className="card-icon">💳</span>
              <span className="card-icon">🇻🇮</span>
              <span className="card-icon">🏦</span>
              <span className="card-icon">💎</span>
            </div>
          </div>

          <button type="submit" className="pay-now-btn">
            <span className="lock-icon">🔒</span>
            Pay LKR {total.toLocaleString()}
          </button>

          <div className="security-guarantee">
            <p>✅ 100% Money Back Guarantee</p>
            <p>✅ SSL Secure Connection</p>
            <p>✅ No Storage of Payment Details</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;