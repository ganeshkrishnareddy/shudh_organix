import './Legal.css';

function PrivacyPolicy() {
    return (
        <main className="legal-page">
            <section className="legal-page__hero">
                <div className="container">
                    <h1>Privacy Policy</h1>
                    <p>Last updated: January 2026</p>
                </div>
            </section>

            <section className="legal-page__content section">
                <div className="container">
                    <div className="legal-page__text">
                        <h2>1. Information We Collect</h2>
                        <p>When you place an order or contact us, we collect:</p>
                        <ul>
                            <li>Name and contact information (phone number, email)</li>
                            <li>Delivery address</li>
                            <li>Order history and preferences</li>
                            <li>Communication history via WhatsApp</li>
                        </ul>

                        <h2>2. How We Use Your Information</h2>
                        <p>We use your information to:</p>
                        <ul>
                            <li>Process and deliver your orders</li>
                            <li>Communicate order updates via WhatsApp</li>
                            <li>Respond to your inquiries</li>
                            <li>Send promotional offers (only with your consent)</li>
                            <li>Improve our products and services</li>
                        </ul>

                        <h2>3. Information Sharing</h2>
                        <p>
                            We do not sell, trade, or rent your personal information to third parties.
                            We may share information only with:
                        </p>
                        <ul>
                            <li>Delivery partners to fulfill your orders</li>
                            <li>Payment processors for secure transactions</li>
                        </ul>

                        <h2>4. Data Security</h2>
                        <p>
                            We implement appropriate security measures to protect your personal information.
                            However, no method of transmission over the internet is 100% secure.
                        </p>

                        <h2>5. Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul>
                            <li>Access your personal information</li>
                            <li>Correct inaccurate information</li>
                            <li>Request deletion of your data</li>
                            <li>Opt-out of marketing communications</li>
                        </ul>

                        <h2>6. Contact Us</h2>
                        <p>
                            For privacy-related queries, contact us at:<br />
                            Email: shudhorganix@gmail.com<br />
                            WhatsApp: +91 93468 96536
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default PrivacyPolicy;
