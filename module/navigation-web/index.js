import React from 'react';
import style from "./style.module.css";
import CustomLink from '../../components/custom-link';

const NavigationWeb = ({ isNavIn, handleClick }) => {
    return (
        <nav className={`${style.nav} ${isNavIn && style.navIn}`}>
            <ul className={style.navbar}>
                <li>
                    <CustomLink href="/produits" handleClick={handleClick}>Produits</CustomLink>
                </li>
                <li>
                    <CustomLink href="/communaute" handleClick={handleClick}>Communauté</CustomLink>
                </li>
                <li>
                    <CustomLink href="/assistance" handleClick={handleClick}>Assistance</CustomLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationWeb;