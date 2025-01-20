import React, { useEffect, useState } from 'react';
import './ProductCards.css';

const Cards = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from the API
  useEffect(() => {
    fetch('http://localhost:3000/') // Fetches all products
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={`http://localhost:3000${product.image}`} alt={product.name} className="product-image" />
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">LKR {Number(product.price).toFixed(2)}</p>
          <button className="select-options">Select Options</button>
        </div>
      ))}
    </div>
  );
};

export default Cards;
