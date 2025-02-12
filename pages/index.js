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
                <meta name="description" content="National Korean American Bar Association - Dedicated to uniting the Korean American legal community." />
            </Head>

            <main style={{ padding: '0.5rem', textAlign: 'center' }}>
                <h2>Welcome to NKABA</h2>
                <p>Dedicated to uniting the Korean American legal community.</p>
                
            </main>
        </div>
        </Layout>
    );
}
