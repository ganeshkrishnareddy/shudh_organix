import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import './Chatbot.css';

// Knowledge base for the chatbot - plain text, no markdown
const knowledgeBase = {
    greetings: ['hi', 'hello', 'hey', 'namaste', 'good morning', 'good afternoon', 'good evening'],

    responses: {
        greeting: "Hello! 🌿 Welcome to Shudh Organix! I'm here to help you with any questions about our natural, handmade products. What would you like to know?",

        products: "We have 3 categories of products:\n\n✨ SKIN CARE - Lip Balms, Cold Process Soaps, Triple Butter Moisturizer\n\n💆 HAIR CARE - Herbal Shampoo, Herbal Hair Oil\n\n🍯 HEALTHY FOODS - Sunnundalu, Nuvvula Undalu, Makhana, Amla Candy, Dry Fruit Laddu, Palli Laddu\n\nAll 100% natural and handmade with love!",

        lipbalm: "Our Lip Balms are crafted with pure, skin-loving ingredients:\n\n🌺 Beetroot Lip Balm - ₹199/10g (Natural pink tint)\n🌸 Pigmentation Lip Balm - ₹269/10g (Reduces dark lips)\n💋 Tinted Lip Balm - ₹169/10g (Beautiful natural tint)\n\nAll made with almond oil, shea butter, beeswax & vitamin E!",

        soaps: "Our Cold Process Soaps (100gms each):\n\n🧼 Triple Butter Soap - ₹199\n🧼 ABC Soap - ₹156\n🧼 Papaya & Tomato Soap - ₹149\n🧼 Charcoal Soap - ₹169\n🧼 Manjista Soap - ₹199\n🧼 Sunnupindi Soap - ₹146\n\nAll handmade, chemical-free & long-lasting!",

        haircare: "Our Hair Care products:\n\n💆 Herbal Shampoo - ₹249/200ml\nMade with Shikakai, Reetha, Amla, Bhringraj & Neem. No sulfates!\n\n🧴 Herbal Hair Oil - ₹289/200ml\nInfused with Bhringraj, Brahmi, Amla & Hibiscus for strong, shiny hair.\n\n🧈 Triple Butter Moisturizer - ₹250/100ml\nShea, Cocoa & Mango butter for deep hydration!",

        foods: "Our Healthy Home Foods:\n\n🍪 Sunnundalu (Urad Dal) - ₹480/500gms\n🍪 Nuvvula Undalu (Sesame) - ₹360/500gms\n🥜 Caramelized Makhana - ₹190/100gms (5 flavors!)\n🍬 Amla Candy - ₹230/150gms\n🍪 Dry Fruits Laddu - ₹630/500gms\n🥜 Roasted Palli Laddu - ₹170/250gms\n\nAll made with palm jaggery - no refined sugar!",

        order: "Ordering is super easy! 🛒\n\n1. Browse products on our Shop page\n2. Add items to cart\n3. Fill your details\n4. Click 'Place Order via WhatsApp'\n5. Complete prepaid payment\n6. We'll ship your order!\n\n💳 Prepaid orders only\n🚚 FREE delivery!",

        delivery: "🚚 Delivery Info:\n\n• FREE delivery on all orders!\n• Hyderabad: 1-2 days\n• Other cities: 3-5 business days\n• Tracking shared via WhatsApp\n\n💳 Note: Prepaid orders only (no COD)\n\nWe deliver all across India!",

        natural: "Yes! ALL our products are:\n\n✅ 100% Natural\n✅ Chemical-free\n✅ No parabens or sulfates\n✅ No artificial preservatives\n✅ Handmade with love\n✅ Safe for kids & babies\n\nWe believe in pure, honest ingredients!",

        founder: "Shudh Organix was founded by Lakshmi 👑\n\n🧪 Certified Cosmetics Formulator\n💼 Former Software Professional\n🌿 Passionate about natural products\n\nShe left her MNC job to pursue her dream of creating pure, chemical-free products for families.\n\n📺 Watch her journey: youtube.com/@modernmahalakshmi-l6s",

        contact: "📞 Contact Us:\n\n📱 WhatsApp: +91 93468 96536\n📧 Email: shudhorganix@gmail.com\n📸 Instagram: @shudh_organix\n📺 YouTube: @modernmahalakshmi-l6s\n\nWe typically respond within 2-4 hours!",

        refund: "Your satisfaction matters! 💯\n\n• Not happy? Contact us within 7 days\n• We'll replace or refund - no questions asked!\n• Quality guaranteed on all products\n\nJust WhatsApp us with your concern.",

        bulk: "Yes! We offer bulk orders for:\n\n🎁 Festival gifting\n💒 Wedding favors\n👶 Baby showers\n🏢 Corporate gifts\n\nBeautiful custom packaging available! WhatsApp us for special pricing.",

        payment: "💳 Payment Info:\n\nWe accept PREPAID orders only (no Cash on Delivery).\n\nPayment methods:\n• UPI (GPay, PhonePe, Paytm)\n• Bank Transfer\n• Online Payment\n\nPayment details shared on WhatsApp after order confirmation.",

        default: "I'm not sure about that, but I'd love to help! 🌿\n\nYou can ask me about:\n• Our products & prices\n• How to order\n• Delivery info\n• Ingredients\n• Bulk orders\n\nOr WhatsApp us at +91 93468 96536 for personalized help!"
    }
};

// Simple keyword matching for responses
const getResponse = (message) => {
    const msg = message.toLowerCase();

    // Greetings
    if (knowledgeBase.greetings.some(g => msg.includes(g))) {
        return knowledgeBase.responses.greeting;
    }

    // Payment
    if (msg.includes('payment') || msg.includes('pay') || msg.includes('cod') || msg.includes('prepaid') || msg.includes('upi')) {
        return knowledgeBase.responses.payment;
    }

    // Products general
    if (msg.includes('product') || msg.includes('what do you sell') || msg.includes('what you have')) {
        return knowledgeBase.responses.products;
    }

    // Lip balm
    if (msg.includes('lip') || msg.includes('balm') || msg.includes('beetroot') || msg.includes('pigment') || msg.includes('tint')) {
        return knowledgeBase.responses.lipbalm;
    }

    // Soaps
    if (msg.includes('soap') || msg.includes('charcoal') || msg.includes('manjista') || msg.includes('papaya')) {
        return knowledgeBase.responses.soaps;
    }

    // Hair care
    if (msg.includes('hair') || msg.includes('shampoo') || msg.includes('oil') || msg.includes('moistur')) {
        return knowledgeBase.responses.haircare;
    }

    // Food products
    if (msg.includes('food') || msg.includes('laddu') || msg.includes('ladoo') || msg.includes('makhana') || msg.includes('amla') || msg.includes('sunnundalu') || msg.includes('nuvvula') || msg.includes('palli')) {
        return knowledgeBase.responses.foods;
    }

    // Order/Buy
    if (msg.includes('order') || msg.includes('buy') || msg.includes('purchase') || msg.includes('how to get')) {
        return knowledgeBase.responses.order;
    }

    // Delivery
    if (msg.includes('delivery') || msg.includes('shipping') || msg.includes('how long') || msg.includes('when will')) {
        return knowledgeBase.responses.delivery;
    }

    // Natural/Ingredients
    if (msg.includes('natural') || msg.includes('chemical') || msg.includes('ingredient') || msg.includes('safe') || msg.includes('organic')) {
        return knowledgeBase.responses.natural;
    }

    // Founder
    if (msg.includes('founder') || msg.includes('lakshmi') || msg.includes('who started') || msg.includes('about you') || msg.includes('youtube')) {
        return knowledgeBase.responses.founder;
    }

    // Contact
    if (msg.includes('contact') || msg.includes('phone') || msg.includes('email') || msg.includes('whatsapp') || msg.includes('instagram') || msg.includes('reach')) {
        return knowledgeBase.responses.contact;
    }

    // Refund
    if (msg.includes('refund') || msg.includes('return') || msg.includes('not satisfied') || msg.includes('problem')) {
        return knowledgeBase.responses.refund;
    }

    // Bulk
    if (msg.includes('bulk') || msg.includes('gift') || msg.includes('wedding') || msg.includes('corporate') || msg.includes('wholesale')) {
        return knowledgeBase.responses.bulk;
    }

    // Price
    if (msg.includes('price') || msg.includes('cost') || msg.includes('how much') || msg.includes('rate')) {
        return knowledgeBase.responses.products;
    }

    return knowledgeBase.responses.default;
};

function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: "Hello! 🌿 I'm your Shudh Organix assistant. How can I help you today?" }
    ]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const userMessage = inputValue.trim();
        setInputValue('');

        // Add user message
        setMessages(prev => [...prev, { type: 'user', text: userMessage }]);

        // Simulate typing delay and add bot response
        setTimeout(() => {
            const response = getResponse(userMessage);
            setMessages(prev => [...prev, { type: 'bot', text: response }]);
        }, 500);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const quickQuestions = [
        "What products do you have?",
        "How to order?",
        "Delivery info",
        "Are products natural?"
    ];

    return (
        <>
            {/* Chat Button */}
            <button
                className={`chatbot__toggle ${isOpen ? 'chatbot__toggle--hidden' : ''}`}
                onClick={() => setIsOpen(true)}
                aria-label="Open chat"
            >
                <Bot size={24} />
                <span>Ask me!</span>
            </button>

            {/* Chat Window */}
            <div className={`chatbot ${isOpen ? 'chatbot--open' : ''}`}>
                {/* Header */}
                <div className="chatbot__header">
                    <div className="chatbot__header-info">
                        <Bot size={24} />
                        <div>
                            <h4>Shudh Organix Assistant</h4>
                            <span>Online • Typically replies instantly</span>
                        </div>
                    </div>
                    <button
                        className="chatbot__close"
                        onClick={() => setIsOpen(false)}
                        aria-label="Close chat"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Messages */}
                <div className="chatbot__messages">
                    {messages.map((msg, index) => (
                        <div key={index} className={`chatbot__message chatbot__message--${msg.type}`}>
                            <div className="chatbot__message-icon">
                                {msg.type === 'bot' ? <Bot size={16} /> : <User size={16} />}
                            </div>
                            <div className="chatbot__message-content">
                                {msg.text.split('\n').map((line, i) => (
                                    <p key={i}>{line}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                {/* Quick Questions */}
                {messages.length <= 2 && (
                    <div className="chatbot__quick">
                        {quickQuestions.map((q, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    setInputValue(q);
                                    setTimeout(() => handleSend(), 100);
                                }}
                            >
                                {q}
                            </button>
                        ))}
                    </div>
                )}

                {/* Input */}
                <div className="chatbot__input">
                    <input
                        type="text"
                        placeholder="Type your question..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <button onClick={handleSend} disabled={!inputValue.trim()}>
                        <Send size={18} />
                    </button>
                </div>
            </div>
        </>
    );
}

export default Chatbot;
