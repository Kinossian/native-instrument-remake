import React, { useCallback } from 'react';
import style from "./style.module.css";

const BurgerMenu = ({ onClick, isNavIn, title, color }) => {
    const handleClick = useCallback(onClick, [onClick]);

    return (
        <button
            onClick={handleClick}
            className={style.burgerMenu}>
            <span>{title}</span>
            <div className={`${style.burger} ${isNavIn && style.isOpen}`}>
                <div
                    className={style.burgerPatty}
                    style={{ background: color }}
                ></div>
                <div
                    className={style.burgerPatty}
                    style={{ background: color }}
                ></div>
                <div
                    className={style.burgerPatty}
                    style={{ background: color }}
                ></div>
            </div>
        </button>
    );
};

export default BurgerMenu;