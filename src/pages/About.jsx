import { Heart, Leaf, Users, Award, Target, Sparkles } from 'lucide-react';
import './About.css';

function About() {
    return (
        <main className="about">
            {/* Hero */}
            <section className="about__hero">
                <div className="container">
                    <h1>Our Story</h1>
                    <p>The journey of creating pure, honest, and handcrafted organic products</p>
                </div>
            </section>

            {/* Story Section */}
            <section className="about__story section">
                <div className="container">
                    <div className="about__story-content">
                        <div className="about__story-text">
                            <h2>Born from a Mother's Love</h2>
                            <p>
                                Shudh Organix was born from a simple wish – to give our families the purest,
                                most natural products without compromise. Like every mother who reads every label,
                                worries about every ingredient, and wants nothing but the best for her children.
                            </p>
                            <p>
                                We started in our kitchen, experimenting with traditional recipes passed down
                                through generations. Cold-process soaps, herbal oils, and wholesome snacks –
                                each product is a labor of love, crafted with ingredients we would use on our
                                own babies.
                            </p>
                            <p>
                                Today, we're proud to share these products with families across India, knowing
                                that every lip balm, every laddu, every drop of hair oil carries our commitment
                                to purity, hygiene, and honesty.
                            </p>
                        </div>
                        <div className="about__story-image">
                            <img src="/logo.png" alt="Shudh Organix" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="about__values section">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Values</h2>
                        <p>What drives us every single day</p>
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

            {/* Mission Section */}
            <section className="about__mission section">
                <div className="container">
                    <div className="about__mission-content">
                        <div className="about__mission-card">
                            <Target size={40} />
                            <h3>Our Mission</h3>
                            <p>
                                To make organic, handcrafted products accessible to every family.
                                We believe everyone deserves products that are safe, effective, and
                                made with love.
                            </p>
                        </div>
                        <div className="about__mission-card">
                            <Award size={40} />
                            <h3>Our Promise</h3>
                            <p>
                                100% natural ingredients, no harmful chemicals, no false claims.
                                Just honest products that work, made the traditional way.
                            </p>
                        </div>
                        <div className="about__mission-card">
                            <Users size={40} />
                            <h3>Our Community</h3>
                            <p>
                                Join thousands of families who have made the switch to organic.
                                Together, we're building a healthier future for our children.
                            </p>
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
                            <span className="about__stat-number">20+</span>
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
