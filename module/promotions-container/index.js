import style from "./style.module.css";
import PromotionsCard from "../promotions-card";
import { data } from "../../projectsData";


const PromotionsContainer = () => {
    const articles = data.articles;
    return (
        <div className={style.promotionsContainer}>
            {
                articles.map((article) => (
                    <PromotionsCard key={article.id} article={article} />
                ))
            }
        </div>
    );
};

export default PromotionsContainer;

