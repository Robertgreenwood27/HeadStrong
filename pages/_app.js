import "../styles.css";
import 'react-masonry-css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from 'next/head'; // Import Head from next/head

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-zinc-900 text-zinc-300">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>HeadStrong</title> {/* You can also set a default title for all pages here */}
      </Head>
      <Header />
      <div className="py-16">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
