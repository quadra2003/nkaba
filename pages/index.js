// pages/index.js
import Layout from '../components/layout';

import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
    return (
        <Layout>
        <div className="container">
            <Head>
                <title>NKABA - National Korean American Bar Association</title>
                <meta name="description" content="National Korean American Bar Association - Dedicated to serving the Korean American legal community." />
            </Head>
            
            <header style={{ backgroundColor: '#0047A0', color: '#FFFFFF', padding: '1rem', textAlign: 'center' }}>
                <h1>National Korean American Bar Association (NKABA)</h1>
            </header>

            <main style={{ padding: '2rem', textAlign: 'center' }}>
                <h2>Welcome to NKABA</h2>
                <p>Dedicated to uniting the Korean American legal community.</p>
                
            </main>
        </div>
        </Layout>
    );
}
