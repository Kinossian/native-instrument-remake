import React, { useCallback } from 'react';
import style from "./style.module.css";

const ButtonMenu = ({ onClick, isNavIn }) => {
    const handleClick = useCallback(onClick, [onClick]);

    return (
        <button
            onClick={handleClick}
            className={style.buttonMenu}>
            <span>MENU</span>
            <div className={`${style.burger} ${isNavIn && style.isOpen}`}>
                <div className={style.burgerPatty}></div>
                <div className={style.burgerPatty}></div>
                <div className={style.burgerPatty}></div>
            </div>
        </button>
    );
};

export default ButtonMenu;