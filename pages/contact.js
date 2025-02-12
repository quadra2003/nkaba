// pages/contact.js
import Layout from '../components/layout';

export default function Contact() {
    return (
        <Layout>
        <div style={{ padding: '0.5rem', textAlign: 'center' }}>
            <h2>Contact Us</h2>

    
            {/* Contact Email */}
            <p><strong>Email:</strong> 
                <a href="mailto:contact@nkaba.org" style={{ color: '#0047A0', textDecoration: 'none', marginLeft: '5px' }}>
                    contact@nkaba.org
                </a>
            </p>


    
            <p>Phone: (123) 456-7890</p>
            <p>Address: 123 NKABA Lane, Los Angeles, CA 90001</p>
        </div>
        </Layout>
    );
}
