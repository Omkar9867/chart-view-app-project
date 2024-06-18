// pages/_app.js

import '../public/styles/normal.css';
import './globals.css';

import '../components/styles/LoadingSpinner.css'


function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
