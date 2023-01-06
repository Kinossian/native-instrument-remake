import React from 'react';
import style from "./style.module.css";
import Logo from '../../components/logo';
import ButtonMenu from '../../components/burger-menu';
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
            <ButtonMenu
                onClick={handleClick}
                isNavIn={isNavIn}
                title="MENU"
                color="black"
            />
        </header >
    );
};

export default Header;