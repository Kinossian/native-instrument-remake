import Layout from '../module/layout';
import './_app.css';
import '@fortawesome/fontawesome-free/css/all.css';


export default function App({ Component, pageProps }) {
  return (
    <Layout  >
      <Component  {...pageProps} />
    </Layout>
  );
}
