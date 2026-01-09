import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

// Cart reducer for state management
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const existingItemIndex = state.items.findIndex(
                item => item.productId === action.payload.productId &&
                    item.variantId === action.payload.variantId
            );

            if (existingItemIndex > -1) {
                // Item exists, update quantity
                const updatedItems = [...state.items];
                updatedItems[existingItemIndex].quantity += action.payload.quantity;
                return { ...state, items: updatedItems };
            }

            // New item, add to cart
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        }

        case 'REMOVE_FROM_CART': {
            return {
                ...state,
                items: state.items.filter(
                    item => !(item.productId === action.payload.productId &&
                        item.variantId === action.payload.variantId)
                )
            };
        }

        case 'UPDATE_QUANTITY': {
            const updatedItems = state.items.map(item => {
                if (item.productId === action.payload.productId &&
                    item.variantId === action.payload.variantId) {
                    return { ...item, quantity: action.payload.quantity };
                }
                return item;
            });
            return { ...state, items: updatedItems };
        }

        case 'CLEAR_CART': {
            return { ...state, items: [] };
        }

        case 'SET_CUSTOMER_INFO': {
            return { ...state, customerInfo: action.payload };
        }

        case 'LOAD_CART': {
            return action.payload;
        }

        default:
            return state;
    }
};

// Initial state
const initialState = {
    items: [],
    customerInfo: {
        name: '',
        phone: '',
        address: ''
    }
};

// Cart Provider Component
export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('shudhOrganixCart');
        if (savedCart) {
            try {
                const parsedCart = JSON.parse(savedCart);
                dispatch({ type: 'LOAD_CART', payload: parsedCart });
            } catch (e) {
                console.error('Error loading cart from localStorage:', e);
            }
        }
    }, []);

    // Save cart to localStorage on change
    useEffect(() => {
        localStorage.setItem('shudhOrganixCart', JSON.stringify(state));
    }, [state]);

    // Action functions
    const addToCart = (product, variant, quantity = 1) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                productId: product.id,
                variantId: variant.id,
                name: product.name,
                variant: variant.weight,
                price: variant.price,
                image: product.image,
                quantity
            }
        });
    };

    const removeFromCart = (productId, variantId) => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: { productId, variantId }
        });
    };

    const updateQuantity = (productId, variantId, quantity) => {
        if (quantity < 1) {
            removeFromCart(productId, variantId);
            return;
        }
        dispatch({
            type: 'UPDATE_QUANTITY',
            payload: { productId, variantId, quantity }
        });
    };

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    const setCustomerInfo = (info) => {
        dispatch({
            type: 'SET_CUSTOMER_INFO',
            payload: info
        });
    };

    // Calculate totals
    const cartTotal = state.items.reduce(
        (total, item) => total + (item.price * item.quantity),
        0
    );

    const cartCount = state.items.reduce(
        (count, item) => count + item.quantity,
        0
    );

    // Generate WhatsApp order message
    const generateWhatsAppMessage = () => {
        const { name, phone, address } = state.customerInfo;

        const itemsList = state.items.map(item =>
            `• ${item.name} (${item.variant}) x ${item.quantity} – ₹${item.price * item.quantity}`
        ).join('\n');

        const message = `🌿 *New Order – Shudh Organix*

*Customer Details*
Name: ${name}
Phone: ${phone}
Address: ${address}

*Order Items*
${itemsList}

*Total: ₹${cartTotal}*

_Sent via shudhorganix.com_`;

        return encodeURIComponent(message);
    };

    // WhatsApp number (update this with actual number)
    const whatsappNumber = '919346896536';

    const getWhatsAppOrderLink = () => {
        const message = generateWhatsAppMessage();
        return `https://wa.me/${whatsappNumber}?text=${message}`;
    };

    const value = {
        items: state.items,
        customerInfo: state.customerInfo,
        cartTotal,
        cartCount,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        setCustomerInfo,
        getWhatsAppOrderLink,
        whatsappNumber
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

// Custom hook to use cart context
export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}

export default CartContext;
