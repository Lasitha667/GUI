import React, { useState } from "react";
import "./cardsmen.css";

const products = [
  {
    image: "card1.jpg",
    title: "Textured Crop Top",
    price: 1800,
    installment: "3 X Rs. 600.00 with mintpay",
  },
  {
    image: "card2.jpg",
    title: "Unisex Drop Shoulder Shirt",
    price: 2600,
    installment: "3 X Rs. 866.67 with mintpay",
  },
  {
    image: "card3.jpg",
    title: "Outline Ribbed Top",
    price: 1400,
    installment: "3 X Rs. 466.67 with mintpay",
  },
  {
    image: "card5.jpg",
    title: "Ladies Workwear Pant",
    price: 2500,
    installment: "3 X Rs. 833.33 with mintpay",
  },
  {
    image: "card4.jpg",
    title: "Ladies Workwear Pant",
    price: 2500,
    installment: "3 X Rs. 833.33 with mintpay",
  },
  {
    image: "image1.jpg",
    title: "Ladies Workwear Pant",
    price: 2500,
    installment: "3 X Rs. 833.33 with mintpay",
  },
   {
    image: "card7.jpg",
    title: "Ladies Workwear Pant",
    price: 2500,
    installment: "3 X Rs. 833.33 with mintpay",
  },
  {
    image: "card8.jpg",
    title: "Outline Ribbed Top",
    price: 1400,
    installment: "3 X Rs. 466.67 with mintpay",
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
