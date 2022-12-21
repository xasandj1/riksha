import { Footer, Navbar } from "../layouts";
import "../assets/style/globals.css"
import News from "../components/News";

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <Navbar/>
      <Component {...pageProps} />
      <News/>
      <Footer/>
    </div>
  );
}

export default MyApp;