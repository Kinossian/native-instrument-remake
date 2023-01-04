import BannierePub from '../components/banniere-pub';
import { path } from '../config/path';
import PromotionsContainer from '../module/promotions-container';

const index = ({ articles }) => {
  return (
    <>
      <BannierePub />
      <PromotionsContainer articles={articles} />
    </>
  );
};

export default index;

export async function getStaticProps() {
  const res = await fetch(path + "/api");
  const data = await res.json();
  const articles = await data.articles;

  return {
    props: {
      articles,
    },
  };
}