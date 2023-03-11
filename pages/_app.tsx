import "../styles/font-face.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import GlobalContextProvider from "utils/GlobalContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalContextProvider>
    </>
  );
}
