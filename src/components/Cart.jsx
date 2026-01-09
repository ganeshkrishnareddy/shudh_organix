import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/products';
import './Cart.css';

function Cart({ isOpen, onClose }) {
    const {
        items,
        cartTotal,
        cartCount,
        updateQuantity,
        removeFromCart,
        customerInfo,
        setCustomerInfo,
        getWhatsAppOrderLink,
        clearCart
    } = useCart();

    const [step, setStep] = useState('cart'); // 'cart' or 'checkout'
    const [formErrors, setFormErrors] = useState({});

    // Generate placeholder image
    const getPlaceholderImage = (name) => {
        const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2);
        return `data:image/svg+xml,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
        <rect fill="#E8D5D0" width="80" height="80" rx="8"/>
        <text x="40" y="48" font-family="Georgia" font-size="24" fill="#1B4D3E" text-anchor="middle">${initials}</text>
      </svg>
    `)}`;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCustomerInfo({ ...customerInfo, [name]: value });
        if (formErrors[name]) {
            setFormErrors({ ...formErrors, [name]: null });
        }
    };

    const validateForm = () => {
        const errors = {};
        if (!customerInfo.name.trim()) errors.name = 'Name is required';
        if (!customerInfo.phone.trim()) errors.phone = 'Phone is required';
        if (customerInfo.phone && !/^[0-9]{10}$/.test(customerInfo.phone.replace(/\D/g, ''))) {
            errors.phone = 'Enter a valid 10-digit phone number';
        }
        if (!customerInfo.address.trim()) errors.address = 'Address is required';
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handlePlaceOrder = () => {
        if (validateForm()) {
            const whatsappLink = getWhatsAppOrderLink();
            window.open(whatsappLink, '_blank');
            clearCart();
            setStep('cart');
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <>
            <div className="cart-overlay" onClick={onClose}></div>
            <div className="cart">
                {/* Header */}
                <div className="cart__header">
                    <div className="cart__header-content">
                        <ShoppingBag size={24} />
                        <h2>{step === 'cart' ? 'Your Cart' : 'Checkout'}</h2>
                        <span className="cart__count">{cartCount} items</span>
                    </div>
                    <button className="cart__close" onClick={onClose} aria-label="Close cart">
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="cart__content">
                    {items.length === 0 ? (
                        <div className="cart__empty">
                            <div className="cart__empty-icon">🛒</div>
                            <h3>Your cart is empty</h3>
                            <p>Add some organic goodness to your cart!</p>
                            <Link to="/shop" className="btn btn-primary" onClick={onClose}>
                                Start Shopping
                            </Link>
                        </div>
                    ) : step === 'cart' ? (
                        <>
                            {/* Cart Items */}
                            <div className="cart__items">
                                {items.map((item, index) => (
                                    <div key={`${item.productId}-${item.variantId}`} className="cart__item">
                                        <img
                                            src={getPlaceholderImage(item.name)}
                                            alt={item.name}
                                            className="cart__item-image"
                                        />
                                        <div className="cart__item-details">
                                            <h4 className="cart__item-name">{item.name}</h4>
                                            <p className="cart__item-variant">{item.variant}</p>
                                            <p className="cart__item-price">{formatPrice(item.price)}</p>
                                        </div>
                                        <div className="cart__item-actions">
                                            <div className="cart__item-quantity">
                                                <button
                                                    onClick={() => updateQuantity(item.productId, item.variantId, item.quantity - 1)}
                                                    aria-label="Decrease quantity"
                                                >
                                                    <Minus size={14} />
                                                </button>
                                                <span>{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.productId, item.variantId, item.quantity + 1)}
                                                    aria-label="Increase quantity"
                                                >
                                                    <Plus size={14} />
                                                </button>
                                            </div>
                                            <button
                                                className="cart__item-remove"
                                                onClick={() => removeFromCart(item.productId, item.variantId)}
                                                aria-label="Remove item"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                        <div className="cart__item-total">
                                            {formatPrice(item.price * item.quantity)}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Cart Summary */}
                            <div className="cart__summary">
                                <div className="cart__summary-row">
                                    <span>Subtotal</span>
                                    <span>{formatPrice(cartTotal)}</span>
                                </div>
                                <div className="cart__summary-row">
                                    <span>Delivery</span>
                                    <span className="cart__summary-free">Free</span>
                                </div>
                                <div className="cart__summary-row cart__summary-total">
                                    <span>Total</span>
                                    <span>{formatPrice(cartTotal)}</span>
                                </div>
                            </div>

                            <button
                                className="btn btn-whatsapp btn-lg cart__checkout-btn"
                                onClick={() => setStep('checkout')}
                            >
                                <MessageCircle size={20} />
                                Proceed to Checkout
                                <ArrowRight size={20} />
                            </button>
                        </>
                    ) : (
                        <>
                            {/* Checkout Form */}
                            <button
                                className="cart__back-btn"
                                onClick={() => setStep('cart')}
                            >
                                ← Back to Cart
                            </button>

                            <div className="cart__checkout-form">
                                <h3>Delivery Details</h3>
                                <p className="cart__checkout-info">
                                    Your order will be sent via WhatsApp. We'll confirm and process your order shortly!
                                </p>

                                <div className="input-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className={`input ${formErrors.name ? 'input--error' : ''}`}
                                        value={customerInfo.name}
                                        onChange={handleInputChange}
                                        placeholder="Enter your name"
                                    />
                                    {formErrors.name && <span className="input-error">{formErrors.name}</span>}
                                </div>

                                <div className="input-group">
                                    <label htmlFor="phone">Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className={`input ${formErrors.phone ? 'input--error' : ''}`}
                                        value={customerInfo.phone}
                                        onChange={handleInputChange}
                                        placeholder="10-digit mobile number"
                                    />
                                    {formErrors.phone && <span className="input-error">{formErrors.phone}</span>}
                                </div>

                                <div className="input-group">
                                    <label htmlFor="address">Delivery Address *</label>
                                    <textarea
                                        id="address"
                                        name="address"
                                        className={`input textarea ${formErrors.address ? 'input--error' : ''}`}
                                        value={customerInfo.address}
                                        onChange={handleInputChange}
                                        placeholder="Full address with pincode"
                                        rows={3}
                                    />
                                    {formErrors.address && <span className="input-error">{formErrors.address}</span>}
                                </div>

                                {/* Order Summary */}
                                <div className="cart__order-summary">
                                    <h4>Order Summary</h4>
                                    {items.map(item => (
                                        <div key={`${item.productId}-${item.variantId}`} className="cart__order-item">
                                            <span>{item.name} ({item.variant}) × {item.quantity}</span>
                                            <span>{formatPrice(item.price * item.quantity)}</span>
                                        </div>
                                    ))}
                                    <div className="cart__order-total">
                                        <span>Total</span>
                                        <span>{formatPrice(cartTotal)}</span>
                                    </div>
                                </div>

                                <button
                                    className="btn btn-whatsapp btn-lg cart__place-order-btn"
                                    onClick={handlePlaceOrder}
                                >
                                    <MessageCircle size={20} />
                                    Place Order via WhatsApp
                                </button>

                                <p className="cart__checkout-note">
                                    🔒 Safe & Secure • No payment needed now
                                </p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default Cart;
