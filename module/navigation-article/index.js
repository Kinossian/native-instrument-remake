import React from 'react';
import style from "./style.module.css";

const NavigationArticle = ({ isMenuIn, handleClick, article }) => {
    return (
        <ul className={`${style.menu} ${isMenuIn && style.menuIn}`}>
            <li>Download</li>
            <li>Spécifications</li>
            <li>Banque de sons</li>
        </ul>
    );
};

export default NavigationArticle;