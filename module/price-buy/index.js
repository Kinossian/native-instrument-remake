import ButtonCustom from "../../components/button-custom";
import style from "./style.module.css";
const PriceBuy = () => {
    return (
        <div className={style.priceBuyContainer}>
            <div className={style.priceContainer}>
                <p>199,00 €</p>
                <p>Mise à jour 99,00 €</p>
            </div>
            <div className={style.buttonContainer}>
                <ButtonCustom content={"Acheter"} />
            </div>
        </div>
    );
};

export default PriceBuy;