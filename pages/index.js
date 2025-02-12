import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
    return (
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
                <p>Dedicated to serving the Korean American legal community.</p>
                <nav>
                    <Link href="/about" style={{ margin: '10px', textDecoration: 'none', color: 'inherit' }}>About Us</Link>
                    <Link href="/board" style={{ margin: '10px', textDecoration: 'none', color: 'inherit' }}>Board of Directors</Link>
                    <Link href="/contact" style={{ margin: '10px', textDecoration: 'none', color: 'inherit' }}>Contact</Link>
                </nav>
            </main>

            <footer style={{ backgroundColor: '#000000', color: '#FFFFFF', padding: '1rem', textAlign: 'center' }}>
                <p>&copy; 2025 National Korean American Bar Association</p>
            </footer>
        </div>
    );
}
