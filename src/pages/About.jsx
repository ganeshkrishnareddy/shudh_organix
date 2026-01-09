import { Heart, Leaf, Users, Award, Target, Sparkles, Youtube, Instagram } from 'lucide-react';
import './About.css';

function About() {
    return (
        <main className="about">
            {/* Hero */}
            <section className="about__hero">
                <div className="container">
                    <h1>Our Story</h1>
                    <p>Pure, honest, and handcrafted organic products for your family</p>
                </div>
            </section>

            {/* Founder Section */}
            <section className="about__founder section">
                <div className="container">
                    <div className="about__founder-content">
                        <div className="about__founder-image">
                            <img src="/logo.png" alt="Shudh Organix" />
                        </div>
                        <div className="about__founder-text">
                            <span className="about__founder-badge">👑 Meet the Founder</span>
                            <h2>Hi, I'm Lakshmi!</h2>
                            <p className="about__founder-title">
                                🧪 Certified Cosmetics Formulator | 🌿 Natural Products Expert
                            </p>
                            <p>
                                I recently resigned from my job as a software professional in a top MNC
                                to pursue my true passion – creating pure, chemical-free products for families like yours.
                            </p>
                            <p>
                                Every Shudh Organix product is handcrafted with love, using traditional recipes
                                and the finest natural ingredients. From skincare to healthy foods, I personally
                                ensure each product meets the standards I'd want for my own family.
                            </p>
                            <p className="about__founder-quote">
                                ✨ "Nature-made goodness for your glow & wellness"
                            </p>
                            <div className="about__founder-socials">
                                <a
                                    href="https://www.youtube.com/@modernmahalakshmi-l6s"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-accent"
                                >
                                    <Youtube size={18} />
                                    YouTube
                                </a>
                                <a
                                    href="https://www.instagram.com/shudh_organix/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                >
                                    <Instagram size={18} />
                                    Instagram
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="about__story section">
                <div className="container">
                    <div className="section-title">
                        <h2>Born from a Mother's Love</h2>
                    </div>
                    <div className="about__story-text">
                        <p>
                            Shudh Organix was born from a simple wish – to give our families the purest,
                            most natural products without compromise. Like every mother who reads every label,
                            worries about every ingredient, and wants nothing but the best for her children.
                        </p>
                        <p>
                            We started in our kitchen, experimenting with traditional recipes passed down
                            through generations. Cold-process soaps, herbal oils, and wholesome snacks –
                            each product is a labor of love.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="about__values section">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Values</h2>
                    </div>

                    <div className="about__values-grid">
                        <div className="about__value-card">
                            <div className="about__value-icon">
                                <Leaf size={28} />
                            </div>
                            <h3>Pure</h3>
                            <p>Every ingredient is carefully sourced from nature. No shortcuts, no compromises.</p>
                        </div>
                        <div className="about__value-card">
                            <div className="about__value-icon">
                                <Sparkles size={28} />
                            </div>
                            <h3>Hygiene</h3>
                            <p>We maintain the highest standards of cleanliness in our crafting process.</p>
                        </div>
                        <div className="about__value-card">
                            <div className="about__value-icon">
                                <Heart size={28} />
                            </div>
                            <h3>Honest</h3>
                            <p>Complete transparency in our ingredients, processes, and promises to you.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="about__stats section">
                <div className="container">
                    <div className="about__stats-grid">
                        <div className="about__stat">
                            <span className="about__stat-number">2000+</span>
                            <span className="about__stat-label">Happy Families</span>
                        </div>
                        <div className="about__stat">
                            <span className="about__stat-number">17+</span>
                            <span className="about__stat-label">Products</span>
                        </div>
                        <div className="about__stat">
                            <span className="about__stat-number">100%</span>
                            <span className="about__stat-label">Natural</span>
                        </div>
                        <div className="about__stat">
                            <span className="about__stat-number">5★</span>
                            <span className="about__stat-label">Rated</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default About;
