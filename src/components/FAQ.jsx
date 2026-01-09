import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import './FAQ.css';

const faqs = [
    {
        question: "Are your products 100% natural?",
        answer: "Yes! All Shudh Organix products are made with 100% natural ingredients. We never use chemicals, parabens, sulfates, or artificial preservatives. Our skincare products are crafted with coconut, shea & mango butters, enriched with almond, coconut, castor and vitamin E oils."
    },
    {
        question: "Are your products safe for kids and babies?",
        answer: "Absolutely! Our products are chemical-free, preservative-free, and safe for kids. We specifically have a Cold Process Soap for Kids that's ultra-gentle for delicate baby skin. Even our lip balms and moisturizers are safe for the whole family."
    },
    {
        question: "How do I place an order?",
        answer: "Simply browse our products, add items to your cart, and click 'Place Order via WhatsApp'. Your order details will be automatically sent to us on WhatsApp. We'll confirm your order and arrange delivery. No online payment needed - you can pay on delivery!"
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
    },
    {
        question: "Who is behind Shudh Organix?",
        answer: "Shudh Organix was founded by Lakshmi, a Certified Cosmetics Formulator and former software professional. Driven by her passion for natural, chemical-free products for her family, she started crafting these handmade products with love. Follow her journey on YouTube @modernmahalakshmi!"
    }
];

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
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
                            className={`faq__item ${openIndex === index ? 'faq__item--open' : ''}`}
                        >
                            <button
                                className="faq__question"
                                onClick={() => toggleFaq(index)}
                                aria-expanded={openIndex === index}
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

                <div className="faq__cta">
                    <p>Still have questions?</p>
                    <a
                        href="https://wa.me/919346896536"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-whatsapp"
                    >
                        Chat with us on WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}

export default FAQ;
