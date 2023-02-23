import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import GlobalStyle from "../styles/GlobalStyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
