import style from "./style.module.css";
import PromotionsCard from "../card";
import { data } from "../../../projectsData";


const HomePromotionsContainer = () => {
    return (
        <div className={style.promotionsContainer}>
            {
                data.map((item) => (
                    item.promotion &&
                    <PromotionsCard key={item.id} item={item} />
                ))
            }
        </div>
    );
};

export default HomePromotionsContainer;