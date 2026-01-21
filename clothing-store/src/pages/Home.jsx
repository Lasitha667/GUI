import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, ShieldCheck, RefreshCw } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <HeroSlider />

            {/* Features Section */}
            <section className="features container">
                <div className="feature-item">
                    <Truck size={32} strokeWidth={1} />
                    <h3>Free Shipping</h3>
                    <p>On all orders over $150</p>
                </div>
                <div className="feature-item">
                    <ShieldCheck size={32} strokeWidth={1} />
                    <h3>Secure Payment</h3>
                    <p>100% secure payment</p>
                </div>
                <div className="feature-item">
                    <RefreshCw size={32} strokeWidth={1} />
                    <h3>Easy Returns</h3>
                    <p>30 days return policy</p>
                </div>
            </section>

            {/* Categories / Teaser */}
            <section className="categories container">
                <div className="category-card men-category">
                    <div className="category-content">
                        <h2>Men's Collection</h2>
                        <Link to="/men" className="link-arrow">
                            View Products <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
                <div className="category-card women-category">
                    <div className="category-content">
                        <h2>Women's Collection</h2>
                        <Link to="/women" className="link-arrow">
                            View Products <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="newsletter">
                <div className="newsletter-content container">
                    <h2>Join Our Newsletter</h2>
                    <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Enter your email" />
                        <button type="submit" className="btn btn-primary">Subscribe</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Home;
