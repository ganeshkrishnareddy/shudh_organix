import { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, MessageCircle, Send, Clock, ChevronDown, HelpCircle, Youtube } from 'lucide-react';
import './Contact.css';

// Reduced FAQ Data - Key questions only
const faqs = [
    {
        question: "How do I place an order?",
        answer: "Browse products, add to cart, fill your details, and click 'Place Order via WhatsApp'. We'll confirm and share payment details. After prepaid payment, we ship your order!"
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept PREPAID orders only. Payment via UPI (GPay, PhonePe, Paytm), Bank Transfer, or Online Payment. Details shared on WhatsApp after order confirmation."
    },
    {
        question: "What about delivery?",
        answer: "FREE delivery on all orders! Hyderabad: 1-2 days, Other cities: 3-5 business days. Tracking shared via WhatsApp."
    },
    {
        question: "Are products safe for kids?",
        answer: "Yes! All products are 100% natural, chemical-free, and safe for kids & babies. No parabens, sulfates, or artificial preservatives."
    },
    {
        question: "What's your refund policy?",
        answer: "Not satisfied? Contact us within 7 days. We'll replace or refund - no questions asked! Quality guaranteed."
    }
];

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [openFaq, setOpenFaq] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const message = encodeURIComponent(
            `New Inquiry from Website\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
        );

        window.open(`https://wa.me/919346896536?text=${message}`, '_blank');

        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setFormData({ name: '', email: '', phone: '', message: '' });
        }, 1000);
    };

    return (
        <main className="contact-page">
            {/* Hero */}
            <section className="contact-page__hero">
                <div className="container">
                    <h1>Get in Touch</h1>
                    <p>Have questions? Reach out directly or check our FAQs below!</p>
                </div>
            </section>

            <section className="contact-page__content section">
                <div className="container">
                    <div className="contact-page__grid">
                        {/* Contact Info */}
                        <div className="contact-page__info">
                            <h2>Contact Info</h2>
                            <p className="contact-page__intro">
                                We're here to help! Reach out anytime.
                            </p>

                            <div className="contact-page__items">
                                <a href="https://wa.me/919346896536" className="contact-page__item contact-page__item--whatsapp">
                                    <div className="contact-page__item-icon">
                                        <MessageCircle size={24} />
                                    </div>
                                    <div className="contact-page__item-content">
                                        <span className="contact-page__item-label">WhatsApp (Preferred)</span>
                                        <span className="contact-page__item-value">+91 93468 96536</span>
                                    </div>
                                </a>

                                <a href="tel:+919346896536" className="contact-page__item">
                                    <div className="contact-page__item-icon">
                                        <Phone size={24} />
                                    </div>
                                    <div className="contact-page__item-content">
                                        <span className="contact-page__item-label">Phone</span>
                                        <span className="contact-page__item-value">+91 93468 96536</span>
                                    </div>
                                </a>

                                <a href="mailto:shudhorganix@gmail.com" className="contact-page__item">
                                    <div className="contact-page__item-icon">
                                        <Mail size={24} />
                                    </div>
                                    <div className="contact-page__item-content">
                                        <span className="contact-page__item-label">Email</span>
                                        <span className="contact-page__item-value">shudhorganix@gmail.com</span>
                                    </div>
                                </a>

                                <a href="https://www.instagram.com/shudh_organix/" target="_blank" rel="noopener noreferrer" className="contact-page__item">
                                    <div className="contact-page__item-icon">
                                        <Instagram size={24} />
                                    </div>
                                    <div className="contact-page__item-content">
                                        <span className="contact-page__item-label">Instagram</span>
                                        <span className="contact-page__item-value">@shudh_organix</span>
                                    </div>
                                </a>

                                <a href="https://www.youtube.com/@modernmahalakshmi-l6s" target="_blank" rel="noopener noreferrer" className="contact-page__item">
                                    <div className="contact-page__item-icon">
                                        <Youtube size={24} />
                                    </div>
                                    <div className="contact-page__item-content">
                                        <span className="contact-page__item-label">YouTube</span>
                                        <span className="contact-page__item-value">@modernmahalakshmi</span>
                                    </div>
                                </a>

                                <div className="contact-page__item">
                                    <div className="contact-page__item-icon">
                                        <MapPin size={24} />
                                    </div>
                                    <div className="contact-page__item-content">
                                        <span className="contact-page__item-label">Location</span>
                                        <span className="contact-page__item-value">Hyderabad, India</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-page__form-wrapper">
                            <h2>Send a Message</h2>

                            {submitted ? (
                                <div className="contact-page__success">
                                    <div className="contact-page__success-icon">✅</div>
                                    <h3>Message Sent!</h3>
                                    <p>We'll get back to you soon!</p>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => setSubmitted(false)}
                                    >
                                        Send Another
                                    </button>
                                </div>
                            ) : (
                                <form className="contact-page__form" onSubmit={handleSubmit}>
                                    <div className="input-group">
                                        <label htmlFor="name">Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="input"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your name"
                                            required
                                        />
                                    </div>

                                    <div className="contact-page__form-row">
                                        <div className="input-group">
                                            <label htmlFor="email">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="input"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="your@email.com"
                                            />
                                        </div>

                                        <div className="input-group">
                                            <label htmlFor="phone">Phone *</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                className="input"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="10-digit number"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="input-group">
                                        <label htmlFor="message">Message *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            className="input textarea"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="How can we help?"
                                            rows={3}
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-whatsapp btn-lg contact-page__submit"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Sending...' : (
                                            <>
                                                <Send size={20} />
                                                Send via WhatsApp
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section - Below Contact */}
            <section className="faq section" id="faq">
                <div className="container">
                    <div className="section-title">
                        <h2>Quick FAQs</h2>
                    </div>

                    <div className="faq__list">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`faq__item ${openFaq === index ? 'faq__item--open' : ''}`}
                            >
                                <button
                                    className="faq__question"
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                >
                                    <HelpCircle size={18} className="faq__icon" />
                                    <span>{faq.question}</span>
                                    <ChevronDown size={18} className="faq__chevron" />
                                </button>
                                <div className="faq__answer">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Contact;
