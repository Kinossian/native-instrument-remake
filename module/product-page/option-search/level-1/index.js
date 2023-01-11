import { useCallback } from "react";
import style from "./style.module.css";

const OptionSearchLevel1 = ({ onClick }) => {
    const handleOnClick = useCallback(onClick, [onClick]);

    return (
        <>
            <div className={style.OptionSearchLevel1Container}>
                <div className={style.radioContainer}>
                    <input onClick={handleOnClick} type="radio" value="apercu" name="level1" id="apercu" defaultChecked />
                    <label htmlFor="apercu">APERCU <span>Produits à l'affiche</span></label>
                </div>
                <div className={style.radioContainer}>
                    <input onClick={handleOnClick} type="radio" value="komplete" name="level1" id="komplete" />
                    <label htmlFor="komplete">KOMPLETE <span>Instruments et Effets</span></label>
                </div>
            </div>


        </>
    );
};

export default OptionSearchLevel1;