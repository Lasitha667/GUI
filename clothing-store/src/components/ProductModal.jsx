import React from 'react';
import { X, ShoppingBag } from 'lucide-react';
import './ProductModal.css';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const ProductModal = ({ product, onClose }) => {
    const { addToCart } = useCart();

    if (!product) return null;

    const { user } = useAuth();
    const navigate = useNavigate();

    const handleAddToCart = () => {
        if (!user) {
            navigate('/login');
            return;
        }
        addToCart(product);
        onClose();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    <X size={24} />
                </button>

                <div className="modal-grid">
                    <div className="modal-image">
                        <img src={product.image} alt={product.name} />
                    </div>

                    <div className="modal-details">
                        <h2>{product.name}</h2>
                        <p className="modal-price">{product.price}</p>
                        <p className="modal-description">
                            Experience premium quality with this essential piece. Designed for comfort and style,
                            it fits perfectly into your modern wardrobe. Made from sustainable materials.
                        </p>

                        <div className="modal-actions">
                            <button className="btn btn-primary btn-full" onClick={handleAddToCart}>
                                <ShoppingBag size={20} style={{ marginRight: '8px' }} />
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
