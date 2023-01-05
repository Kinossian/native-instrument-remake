import { useCallback } from "react";
import style from "./style.module.css";

const ButtonCustom = ({ onClick, content }) => {
    const handleClick = useCallback(onClick, [onClick]);
    return (
        <button
            onClick={handleClick}
            className={style.buttonCustom}
        >
            {content}
        </button>
    );
};

export default ButtonCustom;