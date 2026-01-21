import React, { useState } from 'react';
import { ShoppingBag, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';
import ProductModal from '../components/ProductModal';
import './ProductPage.css';

const Women = () => {
    const { addToCart } = useCart();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [products, setProducts] = useState([]);

    React.useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data.filter(p => p.category === 'Women'));
            })
            .catch(err => console.error('Error fetching products:', err));
    }, []);

    return (
        <div className="page-container container">
            <header className="page-header">
                <h1>Women's Collection</h1>
                <p>Elegance and style for every occasion.</p>
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

export default Women;
