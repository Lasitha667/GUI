import React from "react";
import productimage from '../../assets/exclusive-mockups-branding-packaging-design-260nw-1932288902.jpg';

function NewArrivals({ product }) {
  return (
    <div className="product-card">
      <img src={productimage} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">LKR {product.price.toFixed(2)}</p>
      <p className="product-installment">
        3 X Rs. {product.installment} with <span className="installment-brand">mintpay</span>
      </p>
    </div>
  );
}

export default NewArrivals;

