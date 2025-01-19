import React from "react";
import "./ProductCards.css";


const products = [
  {
    id: 1,
    image: "path_to_image_1", // Replace with your image URLs
    title: "Unisex Drop Shoulder Shirt",
    price: "LKR 2,600.00",
    installment: "3 X Rs. 866.67",
  },
  {
    id: 2,
    image: "path_to_image_2",
    title: "Outline Ribbed Top",
    price: "LKR 1,400.00",
    installment: "3 X Rs. 466.67",
  },
  {
    id: 3,
    image: "path_to_image_3",
    title: "Ladies Workwear Pant",
    price: "LKR 2,500.00",
    installment: "3 X Rs. 833.33",
  },
  {
    id: 4,
    image: "path_to_image_4",
    title: "Unisex Cargo Pant",
    price: "LKR 3,400.00",
    installment: "3 X Rs. 1,133.33",
  },
];

const ProductCards = () => {
  return (
    <div className="product-cards-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} className="product-image" />
          <h3 className="product-title">{product.title}</h3>
          <p className="product-price">{product.price}</p>
          <p className="product-installment">{product.installment}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
