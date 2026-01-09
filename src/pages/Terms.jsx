import './Legal.css';

function Terms() {
    return (
        <main className="legal-page">
            <section className="legal-page__hero">
                <div className="container">
                    <h1>Terms & Conditions</h1>
                    <p>Last updated: January 2026</p>
                </div>
            </section>

            <section className="legal-page__content section">
                <div className="container">
                    <div className="legal-page__text">
                        <h2>1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using the Shudh Organix website and purchasing our products,
                            you agree to be bound by these terms and conditions.
                        </p>

                        <h2>2. Products</h2>
                        <ul>
                            <li>All products are handmade and made from 100% natural ingredients</li>
                            <li>Product images are for illustration purposes; actual products may vary slightly</li>
                            <li>We reserve the right to modify product formulations for improvement</li>
                            <li>Product availability is subject to stock</li>
                        </ul>

                        <h2>3. Ordering & Payment</h2>
                        <ul>
                            <li>Orders are placed via our website and confirmed through WhatsApp</li>
                            <li>We accept PREPAID orders only (no Cash on Delivery)</li>
                            <li>Payment methods: UPI, Bank Transfer, Online Payment</li>
                            <li>Prices are in Indian Rupees (INR) and inclusive of all taxes</li>
                            <li>We reserve the right to cancel orders in case of pricing errors</li>
                        </ul>

                        <h2>4. Delivery</h2>
                        <ul>
                            <li>Free delivery on all orders across India</li>
                            <li>Delivery timelines: Hyderabad 1-2 days, Other cities 3-5 business days</li>
                            <li>We are not responsible for delays due to courier services or unforeseen circumstances</li>
                            <li>Risk of loss passes to you upon delivery</li>
                        </ul>

                        <h2>5. Usage & Safety</h2>
                        <ul>
                            <li>Perform a patch test before using any skincare product</li>
                            <li>Discontinue use if irritation occurs and consult a dermatologist</li>
                            <li>Store products in cool, dry place away from direct sunlight</li>
                            <li>Check ingredients list if you have known allergies</li>
                        </ul>

                        <h2>6. Intellectual Property</h2>
                        <p>
                            All content on this website including logos, images, and product descriptions
                            are the property of Shudh Organix and protected by copyright laws.
                        </p>

                        <h2>7. Limitation of Liability</h2>
                        <p>
                            Shudh Organix shall not be liable for any indirect, incidental, or consequential
                            damages arising from the use of our products or services.
                        </p>

                        <h2>8. Contact</h2>
                        <p>
                            For queries regarding these terms:<br />
                            Email: shudhorganix@gmail.com<br />
                            WhatsApp: +91 93468 96536
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Terms;
