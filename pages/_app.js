import Layout from "@/components/layout/Layout";
import "../styles/globals.css";

/**
 * Receives props and uses object destructuring, to pull information out of the props. The component and pageProps props, past in by nextJs.
 * Component prop holds the actual page content to be render.
 * pageProps are specific props that the pages may be getting.
 */
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
