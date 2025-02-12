import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <Head>
                <title>NKABA - National Korean American Bar Association</title>
            </Head>
            <header style={{ backgroundColor: '#0047A0', color: '#FFFFFF', padding: '1rem', textAlign: 'center' }}>
                <h1>National Korean American Bar Association (NKABA)</h1>
            </header>
            <main style={{ padding: '2rem', textAlign: 'center' }}>
                <h2>Welcome to NKABA</h2>
                <p>Dedicated to serving the Korean American legal community.</p>
                <nav>
                    <Link href="/about"><a style={{ margin: '10px' }}>About Us</a></Link>
                    <Link href="/board"><a style={{ margin: '10px' }}>Board of Directors</a></Link>
                    <Link href="/contact"><a style={{ margin: '10px' }}>Contact</a></Link>
                </nav>
            </main>
            <footer style={{ backgroundColor: '#000000', color: '#FFFFFF', padding: '1rem', textAlign: 'center' }}>
                <p>&copy; 2025 National Korean American Bar Association</p>
            </footer>
        </div>
    );
}