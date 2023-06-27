import "../styles/font-face.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import GlobalContextProvider from "utils/GlobalContext";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-X65RVRKX9Z" />
            <Script id="google-analytics">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-X65RVRKX9Z');
                `}
            </Script>
            <GlobalContextProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </GlobalContextProvider>
        </>
    );
}
