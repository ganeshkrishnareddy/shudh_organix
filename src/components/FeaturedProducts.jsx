import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { getFeaturedProducts } from '../data/products';
import './FeaturedProducts.css';

function FeaturedProducts({ onQuickView }) {
    const featuredProducts = getFeaturedProducts().slice(0, 8);

    return (
        <section className="featured section">
            <div className="container">
                <div className="section-title">
                    <h2>Featured Products</h2>
                    <p>Discover our bestsellers and new arrivals loved by thousands of happy customers</p>
                </div>

                <div className="featured__grid">
                    {featuredProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onQuickView={onQuickView}
                        />
                    ))}
                </div>

                <div className="featured__cta">
                    <Link to="/shop" className="btn btn-primary btn-lg">
                        View All Products
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default FeaturedProducts;
