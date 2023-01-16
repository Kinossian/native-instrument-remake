import ButtonCustom from "../../../components/button-custom";
import style from "./style.module.css";

const Empty = () => {
    return (
        <div className={style.empty}>
            <p>Panier est vide</p>
            <div className={style.buttonContainer}>
                <ButtonCustom content="Continuer vos achats" />
            </div>
        </div>
    );
};

export default Empty;