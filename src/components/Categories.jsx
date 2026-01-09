import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '../data/products';
import './Categories.css';

function Categories() {
    const displayCategories = categories.filter(cat => cat.id !== 'all');

    const categoryImages = {
        skincare: '✨',
        haircare: '💆',
        foods: '🍯'
    };

    const categoryDescriptions = {
        skincare: 'Natural lip balms, soaps & moisturizers for glowing skin',
        haircare: 'Herbal oils & shampoos for strong, healthy hair',
        foods: 'Traditional sweets & healthy snacks made with love'
    };

    return (
        <section className="categories section">
            <div className="container">
                <div className="section-title">
                    <h2>Shop by Category</h2>
                    <p>Explore our range of organic products crafted for your well-being</p>
                </div>

                <div className="categories__grid">
                    {displayCategories.map(category => (
                        <Link
                            key={category.id}
                            to={`/shop?category=${category.id}`}
                            className="categories__card"
                        >
                            <div className="categories__icon">
                                {categoryImages[category.id]}
                            </div>
                            <div className="categories__content">
                                <h3>{category.name}</h3>
                                <p>{categoryDescriptions[category.id]}</p>
                                <span className="categories__link">
                                    Shop Now <ArrowRight size={16} />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Categories;
