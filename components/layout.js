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

                /* Title Header */
                .header-container {
                    background-color: white;
                    text-align: center;
                    padding: 10px;
                    font-size: 18px;
                    font-weight: bold;
                    border-bottom: 1px solid #ddd;
                }

                .header-container a {
                    text-decoration: none;
                    color: black;
                    transition: opacity 0.2s;
                }

                .header-container a:hover {
                    opacity: 0.7;
                }

                /* Navigation Bar */
                .nav-container {
                    background-color: #0047A0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 10px 0;
                }

                .nav-links {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 20px;
                    flex-wrap: nowrap;
                }

                .nav-links a {
                    color: white;
                    text-decoration: none;
                    font-size: 14px;
                    padding: 5px 10px;
                    white-space: nowrap;
                    transition: opacity 0.2s;
                }

                .nav-links a:hover {
                    opacity: 0.8;
                }

                @media (max-width: 768px) {
                    .header-container {
                        padding: 8px;
                        font-size: 16px;
                    }
                    .nav-container {
                        padding: 8px 0;
                    }
                    .nav-links {
                        gap: 15px;
                        flex-wrap: nowrap;
                    }
                }
            `}</style>

            {/* Clickable Header Title */}
            <div className="header-container">
                <Link href="/">
                    National Korean American Bar Association (NKABA)
                </Link>
            </div>

            {/* Navigation Bar */}
            <nav className="nav-container">
                <div className="nav-links">
                    <Link href="/">Home</Link>
                    <Link href="/about">About Us</Link>
                    <Link href="/board">Board</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            </nav>

            {/* Push content down to avoid overlap */}
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
