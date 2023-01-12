import { useCallback, useState } from 'react';
import Layout from '../module/layout';
import './_app.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { data } from '../projectsData';


export default function App({ Component, pageProps }) {
  return (
    <Layout  >
      <Component  {...pageProps} />
    </Layout>
  );
}
