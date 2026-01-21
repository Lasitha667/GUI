import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './HeroSlider.css';

const slides = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop',
        title: 'Redefine Your Style',
        subtitle: 'Premium collection for the modern individual.',
        link: '/men'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop',
        title: 'Summer Essentials',
        subtitle: 'Breathable fabrics for the season.',
        link: '/women'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop',
        title: 'New Arrivals',
        subtitle: 'Check out the latest trends.',
        link: '/men'
    }
];

const HeroSlider = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    return (
        <div className="hero-slider">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`slide ${index === current ? 'active' : ''}`}
                    style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.image})` }}
                >
                    <div className="slide-content container">
                        <h1>{slide.title}</h1>
                        <p>{slide.subtitle}</p>
                        <Link to={slide.link} className="btn btn-primary slide-btn">
                            Shop Now <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            ))}

            <button className="slider-ctrl prev" onClick={prevSlide}><ChevronLeft size={32} /></button>
            <button className="slider-ctrl next" onClick={nextSlide}><ChevronRight size={32} /></button>

            <div className="slider-dots">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === current ? 'active' : ''}`}
                        onClick={() => setCurrent(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;
