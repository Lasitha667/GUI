import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./destinations.css";

const products = [
  { id: 1, image: "Kithulgala.jpg", title: "Kithulgala Adventure", price: 10000, installment: "Available" },
  { id: 2, image: "Sigiriya.jpg", title: "Sigiriya", price: 12000, installment: "Available" },
  { id: 3, image: "Wilpattu-national-park-safari.jpg", title: "Wilpattu National Park", price: 4400, installment: "Available" },
  { id: 4, image: "destination.outside_Pinnawala-Elephant-Orphanage.jpg", title: "Pinnawala Elephant Orphanage", price: 3500, installment: "In Stock" },
  { id: 5, image: "Mirissa.jpg", title: "Mirissa", price: 3500, installment: "Available" },
  { id: 6, image: "kitesurfing-fitness-training-guide.jpg", title: "Kalpitiya  ", price: 2500, installment: "Available" },
  { id: 7, image: "A-man-at-the-top-of-Knuckles-Mountain-Range-the-Fascinating-Wonder-of-Nature-in-Sri-Lanka.jpg", title: "Knuckless Mountain Range", price: 2500, installment: " Not Available" },
  { id: 8, image: "LK66161630-11-E.jpg", title: "Nuwara Eliya", price: 3400, installment: "Available" },
  { id: 9, image: "Ambuluwawa.webp", title: "Ambuluwawa", price: 2400, installment: "Available" },
  { id: 10, image: "download (2).jpeg", title: "Ella", price: 3400, installment: "Available" },
  { id: 11, image: "unnamed (1).jpg", title: "Kandy", price: 3400, installment: "Available" },
  { id: 12, image: "images.jpg", title: "Ancient City Of Anuradhapura", price: 2300, installment: "Available" },
  
];

const ProductDisplay = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDays, setSelectedDays] = useState({}); // store days for each product

  const handleDaysChange = (productId, days) => {
    setSelectedDays(prev => ({ ...prev, [productId]: Number(days) }));
  };

  const handleAddToCart = (product) => {
    const days = selectedDays[product.id] || 1;
    const totalPrice = product.price * days;

    setCart(prevCart => {
      const existingItem = prevCart.find(item =>
        item.id === product.id && item.days === days
      );

      return existingItem
        ? prevCart.map(item =>
            item.id === product.id && item.days === days
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prevCart, { ...product, days, totalPrice, quantity: 1 }];
    });

    setCartOpen(true);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  const handleRemoveFromCart = (productId, days) => {
    setCart(prevCart =>
      prevCart.filter(item => !(item.id === productId && item.days === days))
    );
  };

  const calculateCartTotal = () => {
    const subtotal = cart.reduce((sum, item) => sum + (item.totalPrice * item.quantity), 0);
    return {
      subtotal,
      discount: subtotal * 0.05,
      total: subtotal * 0.95
    };
  };

  const handleCheckout = () => {
    navigate('/checkout', {
      state: {
        cart: cart.map(item => ({
          id: item.id,
          title: item.title,
          days: item.days,
          quantity: item.quantity,
          price: item.totalPrice
        })),
        total: calculateCartTotal().total
      }
    });
  };

  return (
    <div>
      <div className="NewHeader">
        <h1>Destinations</h1>
      </div>

      <div className="product-container">
        {products.map(product => {
          const days = selectedDays[product.id] || 1;
          const totalPrice = product.price * days;

          return (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.title} className="product-image" />
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">LKR {totalPrice.toLocaleString()}</p>

              <select
                className="size-dropdown"
                onChange={(e) => handleDaysChange(product.id, e.target.value)}
                value={days}
              >
                <option value="1">1 Day</option>
                <option value="2">2 Days</option>
                <option value="3">3 Days</option>
                <option value="4">4 Days</option>
                <option value="5">5 Days</option>
              </select>

              <button
                className="add-to-cart-button"
                onClick={() => handleAddToCart(product)}
                disabled={product.installment === "Out of Stock"}
              >
                {product.installment === "Out of Stock" ? "Out of Stock" : "Book Now"}
              </button>
            </div>
          );
        })}
      </div>

      {cartOpen && (
        <div className="cart-popup">
          <div className="cart-header">
            <h2>Shopping Cart</h2>
            <button onClick={() => setCartOpen(false)} className="close-cart-btn">✖</button>
          </div>
          <div className="cart-items">
            {cart.map(item => (
              <div key={`${item.id}-${item.days}`} className="cart-item">
                <div className="cart-item-info">
                  <p>{item.title} - {item.days} Day(s)</p>
                  <p className="quantity">Quantity: {item.quantity}</p>
                </div>
                <div className="cart-item-price">
                  <span>LKR {(item.totalPrice * item.quantity).toLocaleString()}</span>
                  <button
                    className="remove-btn"
                    onClick={() => handleRemoveFromCart(item.id, item.days)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>LKR {calculateCartTotal().subtotal.toLocaleString()}</span>
            </div>
            <div className="summary-row">
              <span>Discount (5%):</span>
              <span>- LKR {calculateCartTotal().discount.toLocaleString()}</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>LKR {calculateCartTotal().total.toLocaleString()}</span>
            </div>
          </div>

          <button className="checkout-btn" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </div>
      )}

      {showPopup && (
        <div className="popup-message">
          <p>Booked Succesfully Need Payment to Confirm!</p>
        </div>
      )}
    </div>
  );
};

export default ProductDisplay;
