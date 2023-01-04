import style from "./style.module.css";
import PromotionsCard from "../promotions-card";


const PromotionsContainer = ({ articles }) => {
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

