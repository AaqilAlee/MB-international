import "@/styles/globals.css";
import "../styles/main.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "tailwindcss/tailwind.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SSRProvider } from "react-bootstrap";
import NextNProgress from "nextjs-progressbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Layout from "../layouts/Layout";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../store";
import Preloader from "../components/prelaoder/Preloader";

export default function App({ Component, pageProps }) {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      document.body.classList.add("loaded");
      setIsLoaded(true);
    }, 5000);
    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      {!isLoaded ? (
        <Preloader />
      ) : (
        <SSRProvider>
          <Layout>
            <NextNProgress options={{ easing: "ease", speed: 500 }} />

            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <Component {...pageProps} />
              </PersistGate>
            </Provider>

            <ToastContainer autoClose={2500} position="bottom-right" />
          </Layout>
        </SSRProvider>
      )}
    </>
  );
}
