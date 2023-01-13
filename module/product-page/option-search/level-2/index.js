import { useCallback } from "react";
import style from "./style.module.css";
const OptionSearchLevel2 = ({ radio, onClick }) => {
    const handleOnClick = useCallback(onClick, [onClick]);
    return (
        <div className={style.radioContainer}>
            <input onClick={handleOnClick} type="radio" value={radio} name="level2" id={radio} />
            <label htmlFor={radio}>{radio}</label>
        </div>

    );
};

export default OptionSearchLevel2;