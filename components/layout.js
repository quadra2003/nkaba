import Link from 'next/link';
import { useEffect } from 'react';

const Layout = ({ children }) => {
    useEffect(() => {
        document.body.style.overflowY = "scroll";
    }, []);

    return (
        <div style={{ fontFamily: 'sans-serif', minHeight: '100vh', overflowX: 'hidden' }}>
            <style jsx global>{`
                /* Scrollbar Styling */
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
                * {
                    scrollbar-width: thin;
                    scrollbar-color: rgba(100, 100, 100, 0.5) #f4f4f4;
                }

                /* Responsive Header + Navigation */
                .header-nav-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    background-color: #0047A0;
                    color: white;
                    padding: 10px;
                }

                .nav-links {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 15px;
                    margin-top: 5px;
                }

                .nav-links a {
                    color: white;
                    text-decoration: none;
                    font-size: 14px;
                    padding: 5px 10px;
                    transition: opacity 0.2s;
                }

                .nav-links a:hover {
                    opacity: 0.8;
                }

                @media (max-width: 768px) {
                    .header-nav-container {
                        padding: 10px;
                    }
                    .nav-links {
                        flex-direction: column;
                        align-items: center;
                        gap: 8px;
                    }
                }
            `}</style>

            {/* Header + Navigation in a Single Unit */}
            <div className="header-nav-container">
                <h1 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>
                    National Korean American Bar Association (NKABA)
                </h1>
                <nav className="nav-links">
                    <Link href="/">Home</Link>
                    <Link href="/about">About Us</Link>
                    <Link href="/board">Board</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
            </div>

            {/* Push content down to avoid overlap */}
            <div style={{ paddingTop: '80px' }}>
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
