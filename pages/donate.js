import { useState } from "react";
import Layout from '../components/layout';

export default function Donate() {
    const [loading, setLoading] = useState(false);

    const handleDonate = async () => {
        setLoading(true);
        const response = await fetch("/api/checkout", {
            method: "POST",
        });

        const data = await response.json();
        if (data.url) {
            window.location.href = data.url; // Redirect to Stripe Checkout
        }
        setLoading(false);
    };

    return (
        <div style={{ textAlign: "center", padding: "2rem" }}>
            <h1>Support NKABA</h1>
            <p>Your donation helps us continue our mission.</p>
            <button 
                onClick={handleDonate} 
                disabled={loading}
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    backgroundColor: "#0047A0",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    marginTop: "20px"
                }}>
                {loading ? "Processing..." : "Donate Now"}
            </button>
        </div>
    );
}
