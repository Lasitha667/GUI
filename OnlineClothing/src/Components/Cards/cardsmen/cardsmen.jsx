import React, { useState } from "react";
import "./cardsmen.css";

const products = [
    {
      image: "card1.jpg",
      title: "Ladies  Top",
      price: 1800,
      installment: "In Stock",
    },
    {
      image: "card2.jpg",
      title: "Ladies Top",
      price: 2600,
      installment: "In Stock",
    },
    {
      image: "card3.jpg",
      title: "Mens Shirt",
      price: 1400,
      installment: "In Stock",
    },
    {
      image: "card5.jpg",
      title: "Mens T-shirt",
      price: 2500,
      installment: "In Stock",
    },
    {
      image: "card4.jpg",
      title: "Ladies Top",
      price: 2500,
      installment: "In Stock",
    },
    {
      image: "image1.jpg",
      title: "Ladies Shirt",
      price: 2500,
      installment: "In Stock",
    },
     {
      image: "card7.jpg",
      title: "Mens Short",
      price: 2500,
      installment: "In Stock",
    },
    {
      image: "card8.jpg",
      title: "Mens Shirt",
      price: 1400,
      installment: "In Stock",
    },
  ];

const ProductDisplay2 = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.title} has been added to the cart.`);
  };

  return (
    
    <div>
      <div className="NewHeader">
        <h1>Mens Wear</h1>
        </div>
      
      <div className="product-container">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.title} className="product-image" />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">LKR {product.price.toLocaleString()}</p>
            <label for="size" >Size -</label>
            <select name ="size" id ="size">
            <option value="audi">XS</option>
            <option value="volvo">S</option>
            <option value="saab">M</option>
            <option value="mercedes">L</option>
            <option value="audi">XL</option>
            <option value="audi">XXL</option>
            </select>
            <p className="product-installment">{product.installment}</p>
            <button
              className="add-to-cart-button"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay2;
