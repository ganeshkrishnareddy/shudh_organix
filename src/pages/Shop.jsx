import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Grid, List, Search } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories, getProductsByCategory } from '../data/products';
import './Shop.css';

function Shop() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [viewMode, setViewMode] = useState('grid');
    const [filteredProducts, setFilteredProducts] = useState(products);

    // Get category from URL params
    useEffect(() => {
        const categoryParam = searchParams.get('category');
        if (categoryParam && categories.some(c => c.id === categoryParam)) {
            setActiveCategory(categoryParam);
        }
    }, [searchParams]);

    // Filter products based on category and search
    useEffect(() => {
        let result = getProductsByCategory(activeCategory);

        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            result = result.filter(product =>
                product.name.toLowerCase().includes(query) ||
                product.description.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query)
            );
        }

        setFilteredProducts(result);
    }, [activeCategory, searchQuery]);

    const handleCategoryChange = (categoryId) => {
        setActiveCategory(categoryId);
        if (categoryId === 'all') {
            searchParams.delete('category');
        } else {
            searchParams.set('category', categoryId);
        }
        setSearchParams(searchParams);
    };

    return (
        <main className="shop">
            {/* Hero Banner */}
            <section className="shop__hero">
                <div className="container">
                    <h1>Our Products</h1>
                    <p>Discover handcrafted organic products for your skin, hair, and home</p>
                </div>
            </section>

            <div className="container">
                <div className="shop__layout">
                    {/* Sidebar */}
                    <aside className="shop__sidebar">
                        <div className="shop__filter-section">
                            <h3>
                                <Filter size={18} />
                                Categories
                            </h3>
                            <div className="shop__categories">
                                {categories.map(category => (
                                    <button
                                        key={category.id}
                                        className={`shop__category-btn ${activeCategory === category.id ? 'shop__category-btn--active' : ''}`}
                                        onClick={() => handleCategoryChange(category.id)}
                                    >
                                        <span className="shop__category-icon">{category.icon}</span>
                                        <span>{category.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="shop__main">
                        {/* Toolbar */}
                        <div className="shop__toolbar">
                            <div className="shop__search">
                                <Search size={18} />
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>

                            <div className="shop__toolbar-right">
                                <span className="shop__count">
                                    {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                                </span>

                                <div className="shop__view-toggle">
                                    <button
                                        className={`shop__view-btn ${viewMode === 'grid' ? 'shop__view-btn--active' : ''}`}
                                        onClick={() => setViewMode('grid')}
                                        aria-label="Grid view"
                                    >
                                        <Grid size={18} />
                                    </button>
                                    <button
                                        className={`shop__view-btn ${viewMode === 'list' ? 'shop__view-btn--active' : ''}`}
                                        onClick={() => setViewMode('list')}
                                        aria-label="List view"
                                    >
                                        <List size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Products Grid */}
                        {filteredProducts.length > 0 ? (
                            <div className={`shop__products ${viewMode === 'list' ? 'shop__products--list' : ''}`}>
                                {filteredProducts.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="shop__empty">
                                <div className="shop__empty-icon">🔍</div>
                                <h3>No products found</h3>
                                <p>Try adjusting your search or filter to find what you're looking for.</p>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => {
                                        setSearchQuery('');
                                        handleCategoryChange('all');
                                    }}
                                >
                                    View All Products
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Shop;
