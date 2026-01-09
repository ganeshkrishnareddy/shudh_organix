import './Legal.css';

function RefundPolicy() {
    return (
        <main className="legal-page">
            <section className="legal-page__hero">
                <div className="container">
                    <h1>Refund Policy</h1>
                    <p>Your satisfaction is our priority</p>
                </div>
            </section>

            <section className="legal-page__content section">
                <div className="container">
                    <div className="legal-page__text">
                        <div className="legal-page__highlight">
                            <h2>💯 Our Promise</h2>
                            <p>
                                Not satisfied with your order? Contact us within 7 days of delivery.
                                We'll replace or refund – no questions asked!
                            </p>
                        </div>

                        <h2>Eligible for Refund/Replacement</h2>
                        <ul>
                            <li>Damaged products received during delivery</li>
                            <li>Wrong product delivered</li>
                            <li>Product quality not as expected</li>
                            <li>Allergic reaction (with medical proof)</li>
                        </ul>

                        <h2>How to Request a Refund</h2>
                        <ol>
                            <li>Contact us on WhatsApp: +91 93468 96536</li>
                            <li>Share your order details and photos of the issue</li>
                            <li>We'll review and respond within 24 hours</li>
                            <li>If approved, choose between replacement or refund</li>
                        </ol>

                        <h2>Refund Timeline</h2>
                        <ul>
                            <li>Refund processed within 3-5 business days of approval</li>
                            <li>Amount credited to original payment method</li>
                            <li>Bank processing may take additional 2-5 days</li>
                        </ul>

                        <h2>Non-Refundable Cases</h2>
                        <ul>
                            <li>Change of mind after 7 days</li>
                            <li>Product used more than 50%</li>
                            <li>Natural variation in handmade products (color, texture)</li>
                            <li>Food products past consumption date</li>
                        </ul>

                        <h2>Replacement Policy</h2>
                        <p>
                            We prefer to replace products rather than refund when possible.
                            Replacements are shipped within 2-3 business days at no additional cost.
                        </p>

                        <h2>Contact for Refunds</h2>
                        <p>
                            WhatsApp: +91 93468 96536 (fastest)<br />
                            Email: shudhorganix@gmail.com<br />
                            We typically respond within 2-4 hours on WhatsApp.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default RefundPolicy;
