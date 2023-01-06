import React from 'react';
import style from "./style.module.css";
import Logo from '../../../../components/logo';
import BurgerMenu from '../../../../components/burger-button';
import LoginCardSearch from '../login-card-search';
import logo from "/public/logo.svg";
import NavigationWeb from '../navigation-web';




const Header = ({ handleClick, isNavIn }) => {
    return (
        <header className={style.header}>
            <Logo src={logo} />
            <NavigationWeb
                isNavIn={isNavIn}
                handleClick={handleClick}
            />
            <LoginCardSearch />
            <BurgerMenu
                onClick={handleClick}
                isNavIn={isNavIn}
                title="MENU"
                color="black"
            />
        </header >
    );
};

export default Header;