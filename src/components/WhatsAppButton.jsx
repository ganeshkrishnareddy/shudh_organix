import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

function WhatsAppButton() {
    const phoneNumber = '919346896536';
    const message = encodeURIComponent('Hi! I\'m interested in Shudh Organix products. Can you help me?');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
            aria-label="Chat on WhatsApp"
        >
            <div className="whatsapp-btn__pulse"></div>
            <div className="whatsapp-btn__icon">
                <MessageCircle size={28} fill="currentColor" />
            </div>
            <span className="whatsapp-btn__text">Chat with us</span>
        </a>
    );
}

export default WhatsAppButton;
