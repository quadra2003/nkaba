// components/Layout.js
import Link from 'next/link';

const Layout = ({ children }) => {
    return (
        <div style={{ fontFamily: 'sans-serif' }}>
            {/* Navigation Bar */}
            <nav style={{
                backgroundColor: '#0047A0',
                padding: '10px',
                marginBottom: '20px',
                textAlign: 'center'
            }}>
                <Link href="/" style={{ color: 'white', textDecoration: 'none', margin: '0 15px' }}>Home</Link>
                <Link href="/about" style={{ color: 'white', textDecoration: 'none', margin: '0 15px' }}>About Us</Link>
                <Link href="/board" style={{ color: 'white', textDecoration: 'none', margin: '0 15px' }}>Board</Link>
                <Link href="/contact" style={{ color: 'white', textDecoration: 'none', margin: '0 15px' }}>Contact</Link>
            </nav>

            {/* Main Content */}
            <main style={{ padding: '0 20px' }}>
                {children}
            </main>

            {/* Footer */}
            <footer style={{
                backgroundColor: '#000000',
                color: '#FFFFFF',
                padding: '1rem',
                textAlign: 'center',
                marginTop: '20px'
            }}>
                <p>&copy; 2025 National Korean American Bar Association. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;
