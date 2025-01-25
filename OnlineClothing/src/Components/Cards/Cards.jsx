import React, { useState } from "react";
import "./ProductCards.css";

const products = [
  { image: "card1.jpg", title: "Ladies Top", price: 1800, installment: "In Stock" },
  { image: "card2.jpg", title: "Ladies Top", price: 2600, installment: "In Stock" },
  { image: "card3.jpg", title: "Mens Shirt", price: 1400, installment: "In Stock" },
  { image: "card5.jpg", title: "Mens T-shirt", price: 2500, installment: "In Stock" },
  { image: "card4.jpg", title: "Ladies Top", price: 2500, installment: "In Stock" },
  { image: "image1.jpg", title: "Ladies Shirt", price: 2500, installment: "In Stock" },
  { image: "card7.jpg", title: "Mens Short", price: 2500, installment: "Out of Stock" },
  { image: "card8.jpg", title: "Mens Shirt", price: 1400, installment: "In Stock" },
  { image: "card9.jpg", title: "Ladies Dress", price: 1400, installment: "In Stock" },
  { image: "card10.jpg", title: "Ladies Dress", price: 1400, installment: "In Stock" },
  { image: "card11.jpg", title: "Mens Shirt", price: 1400, installment: "In Stock" },
  { image: "card12.jpg", title: "Mens Shirt", price: 1400, installment: "In Stock" },
];





const ProductDisplay = ({ handleAddToCart }) => {
  return (
    <div>
      <div className="NewHeader">
        <h1>New Arrivals</h1>
      </div>
      <div className="product-container">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.title} className="product-image" />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">LKR {product.price.toLocaleString()}</p>
            <label htmlFor="size">Size - </label>
            <select name="size" id="size">
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
            <p className="product-installment">{product.installment}</p>
            <button
              className="add-to-cart-button"
              onClick={() => handleAddToCart(product)}
              disabled={product.installment === "Out of Stock"}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;
