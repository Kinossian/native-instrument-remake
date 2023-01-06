import ButtonCustom from "../../components/button-custom";
import style from "./style.module.css";
const PriceBuy = ({ article }) => {
    return (
        <div className={style.priceBuyContainer}>
            <div className={style.priceContainer}>
                <p>{article.price},00€</p>
                <p>Mise à jour {article.priceForUpdate},00 €</p>
            </div>
            <div className={style.buttonContainer}>
                <ButtonCustom content={"Acheter"} />
            </div>
        </div>
    );
};

export default PriceBuy;