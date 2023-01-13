import ButtonCustom from "../../../../components/button-custom";
import style from "./style.module.css";

const PriceBuy = ({ product }) => {
    return (
        <div className={style.priceBuyContainer}>
            <div className={style.priceContainer}>
                <p className={style.price}>{product.price},00 €</p>
                {product.priceForUpdate && <p>Mise à jour <span className={style.priceUpdate}>{product.priceForUpdate},00 €</span></p>}
            </div>
            <div className={style.buttonContainer}>
                <ButtonCustom content={"Acheter"} />
            </div>
        </div>
    );
};

export default PriceBuy;