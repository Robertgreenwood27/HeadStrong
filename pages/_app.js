import "../styles.css";
import 'react-masonry-css';
import Header from "../components/Header";



// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <div  className="bg-zinc-900 text-zinc-300">
<Header/>
<Component {...pageProps} />
</div>
  );
}
