import '../styles/global.css';

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp; // ✅ Ensure there is a default export
