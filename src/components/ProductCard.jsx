import { useState } from 'react';
import { ShoppingBag, Plus, Minus, Heart, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/products';
import './ProductCard.css';

function ProductCard({ product, onQuickView }) {
    const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
    const [quantity, setQuantity] = useState(1);
    const [isAdding, setIsAdding] = useState(false);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        setIsAdding(true);
        addToCart(product, selectedVariant, quantity);

        setTimeout(() => {
            setIsAdding(false);
            setQuantity(1);
        }, 500);
    };

    const handleQuantityChange = (delta) => {
        setQuantity(prev => Math.max(1, prev + delta));
    };

    // Generate placeholder image with product initials
    const getPlaceholderImage = () => {
        const initials = product.name.split(' ').map(w => w[0]).join('').slice(0, 2);
        return `data:image/svg+xml,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
        <rect fill="#E8D5D0" width="300" height="300"/>
        <text x="150" y="160" font-family="Georgia" font-size="60" fill="#1B4D3E" text-anchor="middle">${initials}</text>
      </svg>
    `)}`;
    };

    return (
        <div className="product-card">
            {/* Image */}
            <div className="product-card__image-wrapper">
                <img
                    src={getPlaceholderImage()}
                    alt={product.name}
                    className="product-card__image"
                    loading="lazy"
                />

                {product.badge && (
                    <span className={`product-card__badge product-card__badge--${product.badge.toLowerCase().replace(' ', '-')}`}>
                        {product.badge}
                    </span>
                )}

                <button
                    className={`product-card__wishlist ${isWishlisted ? 'product-card__wishlist--active' : ''}`}
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                >
                    <Heart size={18} fill={isWishlisted ? 'currentColor' : 'none'} />
                </button>

                <div className="product-card__overlay">
                    <button
                        className="product-card__quick-view"
                        onClick={() => onQuickView && onQuickView(product)}
                    >
                        Quick View
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="product-card__content">
                <div className="product-card__category">
                    {product.category === 'skincare' && '✨ Skin Care'}
                    {product.category === 'haircare' && '💆 Hair Care'}
                    {product.category === 'foods' && '🍯 Healthy Foods'}
                </div>

                <h3 className="product-card__name">{product.name}</h3>

                <p className="product-card__description">{product.shortDescription}</p>

                {/* Rating */}
                <div className="product-card__rating">
                    <Star size={14} fill="var(--color-gold)" color="var(--color-gold)" />
                    <span className="product-card__rating-value">{product.rating}</span>
                    <span className="product-card__rating-count">({product.reviews} reviews)</span>
                </div>

                {/* Variants */}
                {product.variants.length > 1 && (
                    <div className="product-card__variants">
                        {product.variants.map(variant => (
                            <button
                                key={variant.id}
                                className={`product-card__variant ${selectedVariant.id === variant.id ? 'product-card__variant--active' : ''}`}
                                onClick={() => setSelectedVariant(variant)}
                            >
                                {variant.weight}
                            </button>
                        ))}
                    </div>
                )}

                {/* Price */}
                <div className="product-card__price">
                    {formatPrice(selectedVariant.price)}
                    {product.variants.length === 1 && (
                        <span className="product-card__weight"> / {selectedVariant.weight}</span>
                    )}
                </div>

                {/* Actions */}
                <div className="product-card__actions">
                    <div className="product-card__quantity">
                        <button
                            className="product-card__qty-btn"
                            onClick={() => handleQuantityChange(-1)}
                            disabled={quantity <= 1}
                            aria-label="Decrease quantity"
                        >
                            <Minus size={16} />
                        </button>
                        <span className="product-card__qty-value">{quantity}</span>
                        <button
                            className="product-card__qty-btn"
                            onClick={() => handleQuantityChange(1)}
                            aria-label="Increase quantity"
                        >
                            <Plus size={16} />
                        </button>
                    </div>

                    <button
                        className={`product-card__add-btn ${isAdding ? 'product-card__add-btn--adding' : ''}`}
                        onClick={handleAddToCart}
                        disabled={isAdding}
                    >
                        <ShoppingBag size={18} />
                        <span>{isAdding ? 'Added!' : 'Add to Cart'}</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
