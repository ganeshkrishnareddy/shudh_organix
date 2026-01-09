import { Leaf, Sparkles, Shield, Heart, Baby, Truck } from 'lucide-react';
import './WhyChooseUs.css';

function WhyChooseUs() {
    const features = [
        {
            icon: <Leaf size={32} />,
            title: '100% Natural',
            description: 'Every ingredient is sourced from nature. No chemicals, no synthetics, just pure goodness.'
        },
        {
            icon: <Sparkles size={32} />,
            title: 'Handcrafted',
            description: 'Each product is carefully made by hand using traditional techniques passed down through generations.'
        },
        {
            icon: <Shield size={32} />,
            title: 'Chemical-Free',
            description: 'We believe in honest beauty. Our products are free from parabens, sulfates, and harmful chemicals.'
        },
        {
            icon: <Baby size={32} />,
            title: 'Kid-Safe',
            description: 'Gentle enough for the most delicate skin. Safe for babies, kids, and the entire family.'
        },
        {
            icon: <Heart size={32} />,
            title: 'Made with Love',
            description: 'Every product carries our commitment to your well-being and the environment.'
        },
        {
            icon: <Truck size={32} />,
            title: 'Free Delivery',
            description: 'We deliver our organic products right to your doorstep at no extra cost.'
        }
    ];

    return (
        <section className="why-us section">
            <div className="container">
                <div className="section-title">
                    <h2>Why Shudh Organix?</h2>
                    <p>We're not just a brand, we're a commitment to pure, honest, and healthy living</p>
                </div>

                <div className="why-us__grid">
                    {features.map((feature, index) => (
                        <div key={index} className="why-us__card">
                            <div className="why-us__icon">{feature.icon}</div>
                            <h3 className="why-us__title">{feature.title}</h3>
                            <p className="why-us__description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;
