import ButtonCustom from "../../../components/button-custom";
import style from "./style.module.css";

const PriceBuy = ({ article }) => {
    return (
        <div className={style.priceBuyContainer}>
            <div className={style.priceContainer}>
                <p className={style.price}>{article.price},00 €</p>
                <p>Mise à jour <span className={style.priceUpdate}>{article.priceForUpdate},00 €</span></p>
            </div>
            <div className={style.buttonContainer}>
                <ButtonCustom content={"Acheter"} />
            </div>
        </div>
    );
};

export default PriceBuy;