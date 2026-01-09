import { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, MessageCircle, Send, Clock, ChevronDown, HelpCircle, Youtube } from 'lucide-react';
import './Contact.css';

// FAQ Data
const faqs = [
    {
        question: "Are your products 100% natural?",
        answer: "Yes! All Shudh Organix products are made with 100% natural ingredients. We never use chemicals, parabens, sulfates, or artificial preservatives. Our skincare products are crafted with coconut, shea & mango butters, enriched with almond, coconut, castor and vitamin E oils."
    },
    {
        question: "Are your products safe for kids and babies?",
        answer: "Absolutely! Our products are chemical-free, preservative-free, and safe for kids. We specifically have Cold Process Soaps that are ultra-gentle for delicate baby skin. Even our lip balms and moisturizers are safe for the whole family."
    },
    {
        question: "How do I place an order?",
        answer: "Simply browse our products, add items to your cart, fill in your details, and click 'Place Order via WhatsApp'. Your order details will be automatically sent to us. We'll confirm and share payment details. After prepaid payment, we'll ship your order!"
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept PREPAID orders only (no Cash on Delivery). Payment methods include UPI (GPay, PhonePe, Paytm), Bank Transfer, and Online Payment. Payment details are shared on WhatsApp after order confirmation."
    },
    {
        question: "What are the delivery charges?",
        answer: "We offer FREE delivery on all orders! Your organic goodies will be delivered right to your doorstep at no extra cost."
    },
    {
        question: "How long does delivery take?",
        answer: "We typically deliver within 3-5 business days depending on your location. For Hyderabad locals, delivery is usually within 1-2 days. We'll share tracking details on WhatsApp once your order is dispatched."
    },
    {
        question: "What is the shelf life of your products?",
        answer: "Our skincare products (lip balms, soaps, moisturizers) have a shelf life of 6-12 months when stored properly in a cool, dry place. Our food products (laddus, makhana, candy) are best consumed within 2-3 months for freshness."
    },
    {
        question: "Do you offer bulk orders or gifting options?",
        answer: "Yes! We love creating gift hampers for festivals, weddings, baby showers, and corporate gifting. Contact us on WhatsApp for customized bulk order pricing and beautiful packaging options."
    },
    {
        question: "What if I'm not satisfied with my order?",
        answer: "Your satisfaction is our priority! If you're not happy with any product, reach out to us within 7 days of delivery. We'll either replace the product or provide a full refund - no questions asked."
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

        // Generate WhatsApp message
        const message = encodeURIComponent(
            `New Inquiry from Website\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
        );

        // Open WhatsApp
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
                    <p>Have questions? Check our FAQs or reach out directly!</p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq section" id="faq">
                <div className="container">
                    <div className="section-title">
                        <h2>Frequently Asked Questions</h2>
                        <p>Got questions? We've got answers!</p>
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
                                    aria-expanded={openFaq === index}
                                >
                                    <HelpCircle size={20} className="faq__icon" />
                                    <span>{faq.question}</span>
                                    <ChevronDown size={20} className="faq__chevron" />
                                </button>
                                <div className="faq__answer">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="contact-page__content section">
                <div className="container">
                    <div className="contact-page__grid">
                        {/* Contact Info */}
                        <div className="contact-page__info">
                            <h2>Contact Info</h2>
                            <p className="contact-page__intro">
                                Still have questions? Reach out directly!
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

                                <div className="contact-page__item">
                                    <div className="contact-page__item-icon">
                                        <Clock size={24} />
                                    </div>
                                    <div className="contact-page__item-content">
                                        <span className="contact-page__item-label">Response Time</span>
                                        <span className="contact-page__item-value">Within 2-4 hours</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-page__form-wrapper">
                            <h2>Send us a Message</h2>

                            {submitted ? (
                                <div className="contact-page__success">
                                    <div className="contact-page__success-icon">✅</div>
                                    <h3>Message Sent!</h3>
                                    <p>Thank you for reaching out. We'll get back to you soon!</p>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => setSubmitted(false)}
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form className="contact-page__form" onSubmit={handleSubmit}>
                                    <div className="input-group">
                                        <label htmlFor="name">Your Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="input"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter your name"
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
                                        <label htmlFor="message">Your Message *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            className="input textarea"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="How can we help you?"
                                            rows={4}
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-whatsapp btn-lg contact-page__submit"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            'Sending...'
                                        ) : (
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
        </main>
    );
}

export default Contact;
