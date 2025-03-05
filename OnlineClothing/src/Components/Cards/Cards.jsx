import React, { useState } from "react";
import "./ProductCards.css";

const products = [
  { id: 1, image: "card1.jpg", title: "Ladies Top", price: 2800, installment: "In Stock" },
  { id: 2, image: "card2.jpg", title: "Ladies Top", price: 3600, installment: "In Stock" },
  { id: 3, image: "card3.jpg", title: "Mens Shirt", price: 4400, installment: "In Stock" },
  { id: 4, image: "card5.jpg", title: "Mens T-shirt", price: 3500, installment: "In Stock" },
  { id: 5, image: "card4.jpg", title: "Ladies Top", price: 3500, installment: "In Stock" },
  { id: 6, image: "image1.jpg", title: "Ladies Shirt", price: 2500, installment: "In Stock" },
  { id: 7, image: "card7.jpg", title: "Mens Short", price: 2500, installment: "Out of Stock" },
  { id: 8, image: "card8.jpg", title: "Mens Shirt", price: 3400, installment: "In Stock" },
  { id: 9, image: "card9.jpg", title: "Ladies Dress", price: 2400, installment: "In Stock" },
  { id: 10, image: "card10.jpg", title: "Ladies Dress", price: 3400, installment: "In Stock" },
  { id: 11, image: "card11.jpg", title: "Mens Shirt", price: 3400, installment: "In Stock" },
  { id: 12, image: "card12.jpg", title: "Mens Shirt", price: 2300, installment: "In Stock" },
  { id: 13, image: "image (2).jpg", title: "Ladies Dress", price: 3400, installment: "In Stock" },
  { id: 14, image: "image (1).jpg", title: "Ladies Shirt", price: 2400, installment: "In Stock" },
  { id: 15, image: "image.jpg", title: "Mens Shirt", price: 3600, installment: "In Stock" },
];

const ProductDisplay = () => {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeChange = (productId, size) => {
    setSelectedSizes(prev => ({ ...prev, [productId]: size }));
  };

  const handleAddToCart = (product) => {
    const selectedSize = selectedSizes[product.id];
    if (!selectedSize) {
      alert("Please select a size before adding to cart!");
      return;
    }

    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id && item.size === selectedSize);
      return existingItem 
        ? prevCart.map(item => 
            item.id === product.id && item.size === selectedSize 
              ? { ...item, quantity: item.quantity + 1 } 
              : item
          )
        : [...prevCart, { ...product, size: selectedSize, quantity: 1 }];
    });

    setCartOpen(true);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  const handleRemoveFromCart = (productId, size) => {
    setCart(prevCart => prevCart.filter(item => !(item.id === productId && item.size === size)));
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout!");
    setCart([]);
    setCartOpen(false);
  };

  const calculateCartTotal = () => {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    return {
      subtotal,
      discount: subtotal * 0.05,
      total: subtotal * 0.95
    };
  };

  return (
    <div>
      <div className="NewHeader">
        <h1>New Arrivals</h1>
      </div>

      <div className="product-container">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} className="product-image" />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">LKR {product.price.toLocaleString()}</p>
            
            <select
              className="size-dropdown"
              onChange={(e) => handleSizeChange(product.id, e.target.value)}
              value={selectedSizes[product.id] || ""}
            >
              <option value="">Choose Size</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>

            <button 
              className="add-to-cart-button" 
              onClick={() => handleAddToCart(product)}
              disabled={product.installment === "Out of Stock"}
            >
              {product.installment === "Out of Stock" ? "Out of Stock" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>

      {cartOpen && (
        <div className="cart-popup">
          <div className="cart-header">
            <h2>Shopping Cart</h2>
            <button onClick={() => setCartOpen(false)} className="close-cart-btn">
              ✖
            </button>
          </div>
          <div className="cart-items">
            {cart.map(item => (
              <div key={`${item.id}-${item.size}`} className="cart-item">
                <div className="cart-item-info">
                  <p>{item.title} - {item.size}</p>
                  <p className="quantity">Quantity: {item.quantity}</p>
                </div>
                <div className="cart-item-price">
                  <span>LKR {(item.price * item.quantity).toLocaleString()}</span>
                  <button 
                    className="remove-btn" 
                    onClick={() => handleRemoveFromCart(item.id, item.size)}
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
          <p>Added to cart successfully!</p>
        </div>
      )}
    </div>
  );
};

export default ProductDisplay;