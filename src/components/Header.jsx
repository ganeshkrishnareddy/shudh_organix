import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Heart, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Header.css';

function Header({ onCartClick }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { cartCount } = useCart();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/shop', label: 'Shop' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
            <div className="header__container container">
                {/* Logo */}
                <Link to="/" className="header__logo">
                    <img src="/logo.png" alt="Shudh Organix" className="header__logo-img" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="header__nav">
                    {navLinks.map(link => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`header__nav-link ${location.pathname === link.path ? 'header__nav-link--active' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="header__actions">
                    <button className="header__action-btn" aria-label="Search">
                        <Search size={20} />
                    </button>
                    <button className="header__action-btn" aria-label="Wishlist">
                        <Heart size={20} />
                    </button>
                    <button
                        className="header__cart-btn"
                        onClick={onCartClick}
                        aria-label="Shopping cart"
                    >
                        <ShoppingBag size={20} />
                        {cartCount > 0 && (
                            <span className="header__cart-count">{cartCount}</span>
                        )}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="header__mobile-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`header__mobile-menu ${isMobileMenuOpen ? 'header__mobile-menu--open' : ''}`}>
                <nav className="header__mobile-nav">
                    {navLinks.map(link => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`header__mobile-link ${location.pathname === link.path ? 'header__mobile-link--active' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <div className="header__mobile-actions">
                    <button className="btn btn-primary btn-lg" onClick={onCartClick}>
                        <ShoppingBag size={20} />
                        View Cart ({cartCount})
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
