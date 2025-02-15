import { useState } from 'react';
import Layout from '../components/layout';

export default function Home() {
    // State variables for the subscription form
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Function to handle subscription

    const handleSubscribe = async () => {
    if (!email || !validateEmail(email)) {
        setMessage("Please enter a valid email address.");
        return;
    }

    try {
        const response = await fetch("/api/subscribe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
        });

        if (response.ok) {
            setMessage("Subscribed successfully!");
            setEmail("");
        } else {
            setMessage("Subscription failed. Try again.");
        }
    } catch (error) {
        setMessage("An error occurred. Please try again.");
    }
};

        // ✅ Email validation function
        const validateEmail = (email) => {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Standard email regex
            return re.test(email);
        };


    return (
        <Layout>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                {/* Existing content */}
                <h1>Welcome to the National Korean American Bar Association (NKABA)</h1>
                <p>Dedicated to serving the Korean American legal community.</p>

                {/* Subscribe Section */}


                <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    width: '100%' 
                }}>
                    <h2 style={{ marginBottom: '10px' }}>Subscribe to Our Mailing List</h2>
                
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        maxWidth: '400px', // Ensures a clean layout
                        gap: '10px' // Space between input and button
                    }}>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            style={{
                                flex: '1', // Input takes up remaining space
                                padding: '10px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                fontSize: '16px',
                                maxWidth: '280px' // Controls input width
                            }}
                        />
                        <button
                            onClick={handleSubscribe}
                            style={{
                                padding: '10px 15px',
                                backgroundColor: '#0047A0',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                fontSize: '16px',
                                cursor: 'pointer'
                            }}
                        >
                            Subscribe
                        </button>
                    </div>
                    
                    {message && <p style={{ marginTop: '10px', color: message.includes('success') ? 'green' : 'red' }}>{message}</p>}
                </div>


            </div>
        </Layout>
    );
}
