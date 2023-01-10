import React from 'react';
import style from "./style.module.css";

const NavigationArticle = ({ isMenuIn, handleClick, product }) => {
    return (
        <>
            <ul className={`${style.menu} ${isMenuIn && style.menuIn}`}>
                <li>Download</li>
                <li>Spécifications</li>
            </ul>
        </>
    );
};

export default NavigationArticle;