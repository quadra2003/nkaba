import Link from 'next/link';
import { useEffect } from 'react';

const Layout = ({ children }) => {
    useEffect(() => {
        // Ensures the scrollbar is always visible to prevent shifting
        document.body.style.overflowY = "scroll";
    }, []);

    return (
        <div style={{
            fontFamily: 'sans-serif',
            minHeight: '100vh',
            overflowX: 'hidden'
        }}>
            {/* Global Scrollbar Styling */}
            <style jsx global>{`
                /* Webkit (Chrome, Safari, Edge) */
                ::-webkit-scrollbar {
                    width: 10px;
                }
                
                ::-webkit-scrollbar-track {
                    background: #f4f4f4;
                }
                
                ::-webkit-scrollbar-thumb {
                    background: rgba(100, 100, 100, 0.5);
                    border-radius: 5px;
                }

                ::-webkit-scrollbar-thumb:hover {
                    background: rgba(100, 100, 100, 0.8);
                }

                /* Firefox */
                * {
                    scrollbar-width: thin;
                    scrollbar-color: rgba(100, 100, 100, 0.5) #f4f4f4;
                }
            `}</style>

            {/* Fixed Organization Name Header */}
            <header style={{
                backgroundColor: '#FFFFFF',
                textAlign: 'center',
                padding: '15px 0',
                fontSize: '18px',
                fontWeight: 'bold',
                position: 'fixed',
                width: '100%',
                top: 0,
                left: 0,
                zIndex: 1100, // Higher than nav bar
                borderBottom: '1px solid #ddd'
            }}>
                National Korean American Bar Association (NKABA)
            </header>

            {/* Navigation Bar (Now Below the Fixed Header) */}
            <nav style={{
                backgroundColor: '#0047A0',
                padding: '10px',
                textAlign: 'center',
                position: 'fixed',
                width: '100%',
                top: '50px',  // Pushes it below the header
                left: 0,
                zIndex: 1000
            }}>
                <Link href="/" style={{ color: 'white', textDecoration: 'none', margin: '0 15px' }}>Home</Link>
                <Link href="/about" style={{ color: 'white', textDecoration: 'none', margin: '0 15px' }}>About Us</Link>
                <Link href="/board" style={{ color: 'white', textDecoration: 'none', margin: '0 15px' }}>Board</Link>
                <Link href="/contact" style={{ color: 'white', textDecoration: 'none', margin: '0 15px' }}>Contact</Link>
            </nav>

            {/* Push content down to avoid overlapping with fixed header & nav */}
            <div style={{ paddingTop: '100px' }}>
                {children}
            </div>

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
