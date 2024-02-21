import React, { useState } from 'react';
import "../index.css"

const SimpleForm = () => {
    const [email, setEmail] = useState('');
    const [variation, setVariation] = useState(Math.random() < 0.5 ? 'A' : 'B');
    const [consentGiven, setConsentGiven] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Check if consent is given before logging email
        if (consentGiven) {
            console.log('A/B Test Form Submitted with Email:', email);
            // Add tracking code here
        } else {
            console.log('Error: Consent not given for email submission.');
        }
    };

    const handleCTAClick = () => {
        console.log('CTA Clicked: Special Offer Claimed');
        console.log({
            event: "ctaSubscribeClick",
            cta: "button",
            location: variation === "A" ? "variantA" : "variantB",
        });
    };

    return (
        <>
            <section className="static-section">
                <h1>About Us</h1>
                <p>Welcome to the Quack shop. We will provide quackie things soon...</p>
            </section>

            <div className={`form_container variation_${variation}`}>
                {/* dynamic sevtion for  (A/B Test) */}
                <section id="dynamic-section">
                    {variation === 'A' ? (
                        <h2>Subscribe to Our Newsletter (Variation A)</h2>
                    ) : (
                        <h2>Subscribe to Our Newsletter (Variation B)</h2>
                    )}
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <div>
                            <input
                                type="checkbox"
                                id="consent"
                                checked={consentGiven}
                                onChange={() => setConsentGiven(!consentGiven)}
                            />
                            <label htmlFor="consent">I consent to my email being used for newsletter subscription.</label>
                        </div>
                        <button type="submit">Subscribe</button>
                    </form>
                </section>

                {/* cta with tracking */}
                <section className="cta-section">
                    <h2>Special Offer</h2>
                    <p>Sign up now and get 10% off your first purchase on the web launch!</p>
                    <button onClick={handleCTAClick}>Claim Offer</button>
                </section>
            </div>
        </>
    );
};

export default SimpleForm;
