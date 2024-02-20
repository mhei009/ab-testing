import React, { useState } from 'react';
import "../index.css"

const SimpleForm = () => {
    const [email, setEmail] = useState('');
    const [variation, setVariation] = useState(Math.random() < 0.5 ? 'A' : 'B');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('A/B Test Form Submitted with Email:', email);
        // Add tracking code here
    };

    const handleCTAClick = () => {
        console.log('CTA Clicked: Special Offer Claimed');
        // Add tracking code here
    };

    return (
        <div className={`form_container variation_${variation}`}>
            {/* Static Section */}
            <section id="static-section">
                <h1>About Us</h1>
                <p>Welcome to the Quack shop. We provide quackie things...</p>
            </section>

            {/* Dynamic Section (A/B Test) */}
            <section id="dynamic-section">
                {variation === 'A' ? (
                    <h2>Join Our Newsletter (Variation A)</h2>
                ) : (
                    <h2>Join Our Newsletter (Variation B)</h2>
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
                    <button type="submit">Subscribe</button>
                </form>
            </section>

            {/* CTA with Tracking */}
            <section id="cta-section">
                <h2>Special Offer</h2>
                <p>Sign up now and get 10% off your first purchase!</p>
                <button onClick={handleCTAClick}>Claim Offer</button>
            </section>
        </div>
    );
};

export default SimpleForm;
