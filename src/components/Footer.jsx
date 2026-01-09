import { Link, useLocation } from 'react-router-dom';
import { Instagram, Phone, Mail, MapPin, Heart, Youtube, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';
import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();
    const location = useLocation();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    // Handle scroll to top for same-page navigation
    const handleNavClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="footer__wave">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="currentColor" />
                </svg>
            </div>

            <div className="footer__content">
                <div className="container">
                    <div className="footer__grid">
                        {/* Brand */}
                        <div className="footer__brand">
                            <Link to="/" className="footer__logo" onClick={handleNavClick}>
                                <img src="/logo.png" alt="Shudh Organix" />
                            </Link>
                            <p className="footer__tagline">Pure. Hygiene. Honest.</p>
                            <p className="footer__description">
                                Handcrafted organic products for you and your family.
                                Made with love and pure ingredients by Certified Cosmetics Formulator.
                            </p>
                            <div className="footer__social">
                                <a
                                    href="https://www.instagram.com/shudh_organix/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Follow us on Instagram"
                                >
                                    <Instagram size={20} />
                                </a>
                                <a
                                    href="https://www.youtube.com/@modernmahalakshmi-l6s"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Subscribe on YouTube"
                                >
                                    <Youtube size={20} />
                                </a>
                                <a
                                    href="https://wa.me/919346896536"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Contact us on WhatsApp"
                                >
                                    <Phone size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Shop Links */}
                        <div className="footer__links">
                            <h4>Shop</h4>
                            <ul>
                                <li><Link to="/shop?category=skincare" onClick={handleNavClick}>Skin Care</Link></li>
                                <li><Link to="/shop?category=haircare" onClick={handleNavClick}>Hair Care</Link></li>
                                <li><Link to="/shop?category=foods" onClick={handleNavClick}>Healthy Foods</Link></li>
                                <li><Link to="/shop" onClick={handleNavClick}>All Products</Link></li>
                            </ul>
                        </div>

                        {/* Company Links */}
                        <div className="footer__links">
                            <h4>Company</h4>
                            <ul>
                                <li><Link to="/about" onClick={handleNavClick}>About Us</Link></li>
                                <li><Link to="/contact" onClick={handleNavClick}>Contact</Link></li>
                                <li><Link to="/contact#faq" onClick={handleNavClick}>FAQs</Link></li>
                            </ul>
                        </div>

                        {/* Policies */}
                        <div className="footer__links">
                            <h4>Policies</h4>
                            <ul>
                                <li><Link to="/refund-policy" onClick={handleNavClick}>Refund Policy</Link></li>
                                <li><Link to="/privacy" onClick={handleNavClick}>Privacy Policy</Link></li>
                                <li><Link to="/terms" onClick={handleNavClick}>Terms & Conditions</Link></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="footer__contact">
                            <h4>Get in Touch</h4>
                            <div className="footer__contact-item">
                                <Phone size={16} />
                                <a href="tel:+919346896536">+91 93468 96536</a>
                            </div>
                            <div className="footer__contact-item">
                                <Mail size={16} />
                                <a href="mailto:shudhorganix@gmail.com">shudhorganix@gmail.com</a>
                            </div>
                            <div className="footer__contact-item">
                                <MapPin size={16} />
                                <span>Hyderabad, India</span>
                            </div>
                            <div className="footer__contact-item">
                                <Instagram size={16} />
                                <a href="https://instagram.com/shudh_organix" target="_blank" rel="noopener noreferrer">
                                    @shudh_organix
                                </a>
                            </div>
                            <div className="footer__contact-item">
                                <Youtube size={16} />
                                <a href="https://www.youtube.com/@modernmahalakshmi-l6s" target="_blank" rel="noopener noreferrer">
                                    @modernmahalakshmi
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Trust Badges */}
                    <div className="footer__badges">
                        <div className="footer__badge">🌿 100% Natural</div>
                        <div className="footer__badge">🤲 Handmade</div>
                        <div className="footer__badge">🚫 Chemical-Free</div>
                        <div className="footer__badge">👶 Kid-Safe</div>
                        <div className="footer__badge">🛡️ Quality Assured</div>
                    </div>

                    {/* Bottom */}
                    <div className="footer__bottom">
                        <p className="footer__copyright">
                            © {currentYear} Shudh Organix. All rights reserved.
                        </p>
                        <p className="footer__made-with">
                            Made with <Heart size={14} fill="currentColor" /> in India
                        </p>
                        <p className="footer__credits">
                            Created & Deployed by{' '}
                            <a href="https://progvision.in/" target="_blank" rel="noopener noreferrer">
                                ProgVision <ExternalLink size={12} />
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
