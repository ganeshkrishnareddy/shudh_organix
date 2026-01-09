// Product catalog for Shudh Organix
// Updated with actual products and prices from price list

export const categories = [
  { id: 'all', name: 'All Products', icon: '🌿' },
  { id: 'skincare', name: 'Skin Care', icon: '✨' },
  { id: 'haircare', name: 'Hair Care', icon: '💆' },
  { id: 'foods', name: 'Healthy Foods', icon: '🍯' },
];

export const products = [
  // === SKIN CARE - LIP BALMS ===
  {
    id: 'lip-balm-beetroot',
    name: 'Beetroot Lip Balm',
    category: 'skincare',
    description: 'Natural beetroot-infused lip balm for soft, pink lips. Crafted with coconut, shea & mango butters, enriched with almond, coconut, castor and vitamin E oils. 100% natural, chemical-free, and safe for kids.',
    shortDescription: 'Natural pink tint for soft lips',
    ingredients: ['Beetroot Extract', 'Shea Butter', 'Coconut Oil', 'Almond Oil', 'Vitamin E', 'Beeswax'],
    benefits: ['Natural pink tint', 'Deep moisturization', 'Heals chapped lips', 'Chemical-free', 'Safe for kids'],
    variants: [
      { id: 'lb-bt-10g', weight: '10g', price: 199 }
    ],
    image: '/products/lip-balm-beetroot.jpg',
    badge: 'Bestseller',
    rating: 4.8,
    reviews: 156
  },
  {
    id: 'lip-balm-pigmentation',
    name: 'Pigmentation Lip Balm',
    category: 'skincare',
    description: 'Specially formulated to reduce lip pigmentation and restore natural lip color. Enriched with pure botanical ingredients for deep moisture and long-lasting softness.',
    shortDescription: 'Reduces dark lips naturally',
    ingredients: ['Liquorice Extract', 'Turmeric', 'Almond Oil', 'Shea Butter', 'Vitamin E', 'Beeswax'],
    benefits: ['Reduces pigmentation', 'Even skin tone', 'Deep nourishment', 'Safe for daily use'],
    variants: [
      { id: 'lb-pg-10g', weight: '10g', price: 269 }
    ],
    image: '/products/lip-balm-pigmentation.jpg',
    badge: null,
    rating: 4.7,
    reviews: 89
  },
  {
    id: 'lip-balm-tinted',
    name: 'Tinted Lip Balm',
    category: 'skincare',
    description: 'Beautiful natural tint with deep hydration. Made with FDA-approved pigment, almond oil, shea butter, and vitamin E. Perfect for everyday use, gifting, or adding to your skincare routine!',
    shortDescription: 'Gentle tint + long hydration',
    ingredients: ['FDA-Approved Pigment', 'Almond Oil', 'Shea Butter', 'Beeswax', 'Vitamin E', 'Lip Flavour'],
    benefits: ['100% Natural', 'Safe on lips', 'Gentle tint', 'Long hydration'],
    variants: [
      { id: 'lb-tn-10g', weight: '10g', price: 169 }
    ],
    image: '/products/lip-balm-tinted.jpg',
    badge: 'Popular',
    rating: 4.9,
    reviews: 42
  },

  // === SKIN CARE - COLD PROCESS SOAPS ===
  {
    id: 'soap-triple-butter',
    name: 'Triple Butter Soap',
    category: 'skincare',
    description: 'Luxurious handmade cold process soap with the power of three butters. Deep cleansing with natural moisturization for soft, supple skin.',
    shortDescription: 'Triple butter luxury cleansing',
    ingredients: ['Shea Butter', 'Cocoa Butter', 'Mango Butter', 'Coconut Oil', 'Olive Oil'],
    benefits: ['Deep cleansing', 'Natural exfoliation', 'Long-lasting', 'Handcrafted'],
    variants: [
      { id: 'sp-tb-100g', weight: '100gms', price: 199 }
    ],
    image: '/products/soap-triple-butter.jpg',
    badge: 'Premium',
    rating: 4.9,
    reviews: 124
  },
  {
    id: 'soap-abc',
    name: 'ABC Soap',
    category: 'skincare',
    description: 'Gentle handmade cold process soap perfect for daily use. Made with pure natural ingredients for clean, healthy skin.',
    shortDescription: 'Gentle daily cleansing',
    ingredients: ['Coconut Oil', 'Olive Oil', 'Castor Oil', 'Essential Oils'],
    benefits: ['Gentle formula', 'Daily use', 'Natural ingredients', 'All skin types'],
    variants: [
      { id: 'sp-abc-100g', weight: '100gms', price: 156 }
    ],
    image: '/products/soap-abc.jpg',
    badge: null,
    rating: 4.7,
    reviews: 98
  },
  {
    id: 'soap-papaya-tomato',
    name: 'Papaya & Tomato Soap',
    category: 'skincare',
    description: 'Natural papaya and tomato infused soap for bright, glowing skin. Enriched with natural fruit extracts for gentle exfoliation.',
    shortDescription: 'Brightening fruit soap',
    ingredients: ['Papaya Extract', 'Tomato Extract', 'Coconut Oil', 'Glycerin', 'Vitamin E'],
    benefits: ['Brightens skin', 'Natural glow', 'Gentle exfoliation', 'Vitamin-rich'],
    variants: [
      { id: 'sp-pt-100g', weight: '100gms', price: 149 }
    ],
    image: '/products/soap-papaya-tomato.jpg',
    badge: null,
    rating: 4.6,
    reviews: 67
  },
  {
    id: 'soap-charcoal',
    name: 'Charcoal Soap',
    category: 'skincare',
    description: 'Activated charcoal cold process soap for deep pore cleansing. Draws out impurities and toxins for clear, fresh skin.',
    shortDescription: 'Deep pore cleansing',
    ingredients: ['Activated Charcoal', 'Coconut Oil', 'Olive Oil', 'Tea Tree Oil'],
    benefits: ['Deep cleansing', 'Removes impurities', 'Controls oil', 'Clears pores'],
    variants: [
      { id: 'sp-ch-100g', weight: '100gms', price: 169 }
    ],
    image: '/products/soap-charcoal.jpg',
    badge: 'Popular',
    rating: 4.8,
    reviews: 134
  },
  {
    id: 'soap-manjista',
    name: 'Manjista Soap',
    category: 'skincare',
    description: 'Traditional Ayurvedic manjista soap for radiant, even-toned skin. Made with pure manjista root extract known for skin purification.',
    shortDescription: 'Ayurvedic skin purification',
    ingredients: ['Manjista Root Extract', 'Coconut Oil', 'Olive Oil', 'Essential Oils'],
    benefits: ['Even skin tone', 'Ayurvedic formula', 'Skin purification', 'Natural radiance'],
    variants: [
      { id: 'sp-mj-100g', weight: '100gms', price: 199 }
    ],
    image: '/products/soap-manjista.jpg',
    badge: null,
    rating: 4.7,
    reviews: 76
  },
  {
    id: 'soap-sunnupindi',
    name: 'Sunnupindi Soap',
    category: 'skincare',
    description: 'Traditional sunnupindi (gram flour) soap for gentle cleansing and natural glow. Based on age-old Indian bathing rituals.',
    shortDescription: 'Traditional gram flour soap',
    ingredients: ['Gram Flour', 'Turmeric', 'Coconut Oil', 'Rose Water'],
    benefits: ['Traditional recipe', 'Natural glow', 'Gentle cleansing', 'Skin softening'],
    variants: [
      { id: 'sp-sn-100g', weight: '100gms', price: 146 }
    ],
    image: '/products/soap-sunnupindi.jpg',
    badge: 'Value',
    rating: 4.6,
    reviews: 89
  },

  // === HAIR CARE ===
  {
    id: 'herbal-shampoo',
    name: 'Herbal Shampoo',
    category: 'haircare',
    description: 'Gentle herbal shampoo with traditional Ayurvedic herbs. Cleanses without stripping natural oils for healthy, bouncy hair.',
    shortDescription: 'Ayurvedic gentle cleansing',
    ingredients: ['Shikakai', 'Reetha', 'Amla', 'Bhringraj', 'Neem'],
    benefits: ['Gentle cleansing', 'Promotes hair growth', 'Reduces hair fall', 'No sulfates'],
    variants: [
      { id: 'hs-200ml', weight: '200ml', price: 249 }
    ],
    image: '/products/herbal-shampoo.jpg',
    badge: null,
    rating: 4.7,
    reviews: 167
  },
  {
    id: 'herbal-hair-oil',
    name: 'Herbal Hair Oil',
    category: 'haircare',
    description: 'Nourishing hair oil infused with herbs for strong, shiny, and healthy hair. Traditional recipe with modern care for all hair types.',
    shortDescription: 'Nourishing herbal formula',
    ingredients: ['Coconut Oil', 'Bhringraj', 'Brahmi', 'Amla', 'Hibiscus'],
    benefits: ['Strengthens roots', 'Promotes growth', 'Adds shine', 'Reduces dandruff'],
    variants: [
      { id: 'hho-200ml', weight: '200ml', price: 289 }
    ],
    image: '/products/herbal-hair-oil.jpg',
    badge: 'Bestseller',
    rating: 4.8,
    reviews: 234
  },

  // === SKIN CARE - MOISTURIZER ===
  {
    id: 'triple-butter-moisturizer',
    name: 'Triple Butter Moisturizer',
    category: 'skincare',
    description: 'Intensive moisturizer with the power of three butters - Shea, Cocoa, and Mango. For deep, lasting hydration and soft, supple skin.',
    shortDescription: 'Triple butter deep hydration',
    ingredients: ['Shea Butter', 'Cocoa Butter', 'Mango Butter', 'Almond Oil', 'Vitamin E'],
    benefits: ['Intense hydration', 'Soft, supple skin', 'Non-greasy', 'All skin types'],
    variants: [
      { id: 'tbm-100ml', weight: '100ml', price: 250 }
    ],
    image: '/products/triple-butter-moisturizer.jpg',
    badge: 'Premium',
    rating: 4.9,
    reviews: 112
  },

  // === HEALTHY HOME FOODS ===
  {
    id: 'sunnundalu',
    name: 'Sunnundalu',
    category: 'foods',
    description: 'Traditional Andhra sweet made with unpolished urad dal and jaggery. High in protein and iron, perfect for a healthy energy boost.',
    shortDescription: 'Unpolished Urad Dal Laddus',
    ingredients: ['Unpolished Urad Dal', 'Jaggery', 'Ghee', 'Cardamom'],
    benefits: ['High protein', 'Rich in iron', 'Natural sweetener', 'Traditional recipe'],
    variants: [
      { id: 'sun-500g', weight: '500gms', price: 480 }
    ],
    image: '/products/sunnundalu.jpg',
    badge: 'Traditional',
    rating: 4.9,
    reviews: 89
  },
  {
    id: 'nuvvula-undalu',
    name: 'Nuvvula Undalu',
    category: 'foods',
    description: 'Delicious sesame seed (til) laddus with jaggery. Rich in calcium and healthy fats for strong bones and energy.',
    shortDescription: 'Sesame (Til) Laddus',
    ingredients: ['Sesame Seeds', 'Jaggery', 'Ghee', 'Cardamom'],
    benefits: ['Rich in calcium', 'Healthy fats', 'Energy boost', 'Natural ingredients'],
    variants: [
      { id: 'nuv-500g', weight: '500gms', price: 360 }
    ],
    image: '/products/nuvvula-undalu.jpg',
    badge: null,
    rating: 4.8,
    reviews: 67
  },
  {
    id: 'caramelized-makhana',
    name: 'Caramelized Phool Makhana',
    category: 'foods',
    description: 'Crunchy caramelized fox nuts available in 5 delicious flavors. A guilt-free, healthy snack perfect for munching anytime!',
    shortDescription: '5 Flavors Available',
    ingredients: ['Fox Nuts (Makhana)', 'Jaggery Caramel', 'Ghee', 'Natural Flavoring'],
    benefits: ['Low calorie', 'High protein', 'Antioxidant rich', 'Gluten-free'],
    variants: [
      { id: 'mk-100g', weight: '100gms', price: 190 }
    ],
    image: '/products/makhana.jpg',
    badge: 'Popular',
    rating: 4.8,
    reviews: 145
  },
  {
    id: 'amla-candy',
    name: 'Amla Candy with Palm Jaggery',
    category: 'foods',
    description: 'Sweet and tangy amla candy made with healthy palm jaggery. Packed with Vitamin C and antioxidants for immunity boost.',
    shortDescription: 'Vitamin C powerhouse',
    ingredients: ['Fresh Amla', 'Palm Jaggery', 'Rock Salt', 'Spices'],
    benefits: ['High Vitamin C', 'Immunity boost', 'Digestive health', 'Natural sweetener'],
    variants: [
      { id: 'ac-150g', weight: '150gms', price: 230 }
    ],
    image: '/products/amla-candy.jpg',
    badge: 'Healthy',
    rating: 4.8,
    reviews: 98
  },
  {
    id: 'dry-fruit-laddu',
    name: 'Dry Fruits Laddu',
    category: 'foods',
    description: 'Premium laddus loaded with almonds, cashews, dates, and more. Energy-packed and delicious for a nutritious treat.',
    shortDescription: 'Premium dry fruit energy',
    ingredients: ['Almonds', 'Cashews', 'Dates', 'Ghee', 'Honey', 'Cardamom'],
    benefits: ['Energy boost', 'Nutrient dense', 'No added sugar', 'Premium ingredients'],
    variants: [
      { id: 'dfl-500g', weight: '500gms', price: 630 }
    ],
    image: '/products/dry-fruit-laddu.jpg',
    badge: 'Premium',
    rating: 4.9,
    reviews: 178
  },
  {
    id: 'roasted-palli-laddu',
    name: 'Roasted Palli Laddu',
    category: 'foods',
    description: 'Traditional peanut laddus with palm jaggery. Crunchy, sweet, and packed with protein for healthy snacking.',
    shortDescription: 'Peanut Laddu with Palm Jaggery',
    ingredients: ['Roasted Peanuts', 'Palm Jaggery', 'Ghee', 'Cardamom'],
    benefits: ['High protein', 'Energy boost', 'Natural sweetener', 'Traditional recipe'],
    variants: [
      { id: 'rpl-250g', weight: '250gms', price: 170 }
    ],
    image: '/products/roasted-palli-laddu.jpg',
    badge: 'Value',
    rating: 4.7,
    reviews: 156
  }
];

// Get products by category
export const getProductsByCategory = (categoryId) => {
  if (categoryId === 'all') return products;
  return products.filter(product => product.category === categoryId);
};

// Get featured products (bestsellers and new arrivals)
export const getFeaturedProducts = () => {
  return products.filter(product =>
    product.badge === 'Bestseller' || product.badge === 'Popular' || product.badge === 'Premium'
  );
};

// Get product by ID
export const getProductById = (id) => {
  return products.find(product => product.id === id);
};

// Format price in Indian Rupees
export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};
