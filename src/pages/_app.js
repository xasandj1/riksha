import { Footer, Navbar } from "../layouts";
import "../assets/style/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
}

export default MyApp;