import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Star, Shield } from 'lucide-react';
import './Hero.css';

function Hero() {
    return (
        <section className="hero">
            <div className="hero__bg-shapes">
                <div className="hero__shape hero__shape--1"></div>
                <div className="hero__shape hero__shape--2"></div>
                <div className="hero__shape hero__shape--3"></div>
            </div>

            <div className="hero__container container">
                <div className="hero__content">
                    <div className="hero__badge">
                        <Leaf size={16} />
                        <span>100% Natural & Handmade</span>
                    </div>

                    <h1 className="hero__title">
                        <span className="hero__title-line">Pure.</span>
                        <span className="hero__title-line">Hygiene.</span>
                        <span className="hero__title-line hero__title-accent">Honest.</span>
                    </h1>

                    <p className="hero__description">
                        Discover handcrafted organic skincare, haircare, and healthy home foods.
                        Made with love, pure ingredients, and traditional recipes for you and your family.
                    </p>

                    <div className="hero__cta">
                        <Link to="/shop" className="btn btn-primary btn-lg">
                            Shop Now
                            <ArrowRight size={20} />
                        </Link>
                        <Link to="/about" className="btn btn-secondary btn-lg">
                            Our Story
                        </Link>
                    </div>

                    <div className="hero__trust-badges">
                        <div className="hero__trust-badge">
                            <Leaf size={18} />
                            <span>100% Natural</span>
                        </div>
                        <div className="hero__trust-badge">
                            <Star size={18} />
                            <span>Handmade</span>
                        </div>
                        <div className="hero__trust-badge">
                            <Shield size={18} />
                            <span>Chemical-Free</span>
                        </div>
                    </div>
                </div>

                <div className="hero__visual">
                    <div className="hero__image-wrapper">
                        <img
                            src="/logo.png"
                            alt="Shudh Organix Logo"
                            className="hero__logo-image"
                        />
                        <div className="hero__image-glow"></div>
                    </div>
                    <div className="hero__floating-elements">
                        <div className="hero__float hero__float--1">🌿</div>
                        <div className="hero__float hero__float--2">🍃</div>
                        <div className="hero__float hero__float--3">✨</div>
                        <div className="hero__float hero__float--4">🌸</div>
                    </div>
                </div>
            </div>

            <div className="hero__scroll-indicator">
                <div className="hero__scroll-line"></div>
                <span>Scroll to explore</span>
            </div>
        </section>
    );
}

export default Hero;
