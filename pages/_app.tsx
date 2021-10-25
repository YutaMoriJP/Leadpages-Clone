// import App from "next/app";
import type { AppProps /*, AppContext */ } from "next/app";
import "../styles/globals.scss";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
