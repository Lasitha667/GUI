import React, { useState } from 'react';
import { ShoppingBag, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';
import ProductModal from '../components/ProductModal';
import './ProductPage.css';

const Men = () => {
    const { addToCart } = useCart();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [products, setProducts] = useState([]);

    React.useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data.filter(p => p.category === 'Men'));
            })
            .catch(err => console.error('Error fetching products:', err));
    }, []);

    return (
        <div className="page-container container">
            <header className="page-header">
                <h1>Men's Collection</h1>
                <p>Essentials for the modern gentleman.</p>
            </header>

            <div className="product-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <div className="product-image">
                            <img src={product.image} alt={product.name} />
                            <div className="product-overlay">
                                <button
                                    className="overlay-btn"
                                    onClick={() => setSelectedProduct(product)}
                                    title="Quick View"
                                >
                                    <Eye size={20} />
                                </button>
                                <button
                                    className="overlay-btn"
                                    onClick={() => addToCart(product)}
                                    title="Add to Cart"
                                >
                                    <ShoppingBag size={20} />
                                </button>
                            </div>
                        </div>
                        <div className="product-info">
                            <h3>{product.name}</h3>
                            <p className="price">{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>

            <ProductModal
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />
        </div>
    );
};

export default Men;
