import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import WhyChooseUs from '../components/WhyChooseUs';
import { Youtube, Instagram, ExternalLink } from 'lucide-react';
import './Home.css';

function Home() {
    return (
        <main className="home">
            <Hero />
            <Categories />
            <FeaturedProducts />
            <WhyChooseUs />

            {/* Founder & Social Section Combined */}
            <section className="founder section">
                <div className="container">
                    <div className="founder__content">
                        <span className="founder__badge">👑 Meet the Founder</span>
                        <h2>Hi, I'm Lakshmi!</h2>
                        <p className="founder__bio">
                            🧪 Certified Cosmetics Formulator | 🌿 Natural Skin & Hair Care Expert
                        </p>
                        <p>
                            I resigned from my software job at a top MNC to pursue my passion for
                            creating pure, chemical-free products. Every Shudh Organix product is
                            handcrafted with love for your family's wellness.
                        </p>
                        <p className="founder__quote">
                            ✨ "Nature-made goodness for your glow & wellness"
                        </p>

                        <div className="founder__socials">
                            <a
                                href="https://www.youtube.com/@modernmahalakshmi-l6s"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-accent"
                            >
                                <Youtube size={20} />
                                Watch on YouTube
                            </a>
                            <a
                                href="https://www.instagram.com/shudh_organix/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                <Instagram size={20} />
                                Follow @shudh_organix
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="newsletter section">
                <div className="container">
                    <div className="newsletter__content">
                        <div className="newsletter__text">
                            <h2>Get 10% Off Your First Order</h2>
                            <p>Subscribe for exclusive offers and organic living tips!</p>
                        </div>
                        <form className="newsletter__form" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="input newsletter__input"
                                required
                            />
                            <button type="submit" className="btn btn-primary">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
