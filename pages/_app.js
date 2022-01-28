import Head from 'next/head';
import SiteNavbar from '../components/SiteNavbar';
import SiteFooter from '../components/SiteFooter';
import '../styles/globals.css';
import '@fortawesome/fontawesome-free/css/all.css';

function MyApp({ Component, pageProps }) {
    return (
        <div className="flex min-h-screen flex-col">
            <Head>
                <title>Omar Ali | A freelance full-stack web &amp; mobile developer</title>
                <meta name="description" content="Omar Ali's personal website and portfolio." />
                <meta name="author" content="Omar Ali" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <SiteNavbar />

            <Component {...pageProps} />

            <SiteFooter />
        </div>
    );
}

export default MyApp;
