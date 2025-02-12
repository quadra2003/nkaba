import { useState } from 'react';
import Layout from '../components/layout';

export default function Home() {
    // State variables for the subscription form
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Function to handle subscription
    const handleSubscribe = async () => {
        if (!email) {
            setMessage('Please enter a valid email.');
            return;
        }

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setMessage('Subscribed successfully!');
                setEmail('');
            } else {
                setMessage('Subscription failed. Please try again.');
            }
        } catch (error) {
            setMessage('An error occurred. Please try again.');
        }
    };

    return (
        <Layout>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                {/* Existing content */}
                <h1>Welcome to the National Korean American Bar Association (NKABA)</h1>
                <p>Dedicated to serving the Korean American legal community.</p>

                {/* Navigation Links */}
                <nav>
                    <a href="/about" style={{ margin: '10px', textDecoration: 'none', color: '#0047A0' }}>About Us</a>
                    <a href="/board" style={{ margin: '10px', textDecoration: 'none', color: '#0047A0' }}>Board of Directors</a>
                    <a href="/contact" style={{ margin: '10px', textDecoration: 'none', color: '#0047A0' }}>Contact</a>
                </nav>

                {/* Subscribe Section */}
                <div style={{ marginTop: '30px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', maxWidth: '400px', marginLeft: 'auto', marginRight: 'auto' }}>
                    <h3>Subscribe to Our Mailing List</h3>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        style={{
                            padding: '8px',
                            width: '100%',
                            marginBottom: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                        }}
                    />
                    <button
                        onClick={handleSubscribe}
                        style={{
                            padding: '8px 12px',
                            backgroundColor: '#0047A0',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            width: '100%',
                        }}
                    >
                        Subscribe
                    </button>
                    {message && <p style={{ marginTop: '10px', color: message.includes('success') ? 'green' : 'red' }}>{message}</p>}
                </div>

                {/* Footer */}
                <footer style={{ marginTop: '40px', backgroundColor: '#000', color: '#fff', padding: '10px' }}>
                    <p>&copy; 2025 National Korean American Bar Association. All rights reserved.</p>
                </footer>
            </div>
        </Layout>
    );
}
