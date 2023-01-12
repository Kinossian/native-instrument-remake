import { useCallback, useState } from 'react';
import Layout from '../module/layout';
import './_app.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { data } from '../projectsData';


export default function App({ Component, pageProps }) {
  const [query, setQuery] = useState("");
  let [searchBar, setSearchBar] = useState([]);
  // console.log(query?.target?.value.length);

  const search = useCallback(() => {
    if (query?.target?.value.length >= 1) {
      setSearchBar(data.filter((prod) => prod.teaser.title.toLocaleLowerCase().includes(query?.target?.value.toLowerCase())));
    } else {
      setSearchBar([]);
    }
  }, [searchBar]);

  return (
    <Layout setQuery={setQuery} search={search} >
      <Component search={searchBar} {...pageProps} />
    </Layout>
  );
}
