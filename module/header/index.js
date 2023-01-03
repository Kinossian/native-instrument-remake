import React from 'react';
import style from "./style.module.css";
import Logo from '../../components/logo';
import ButtonMenu from '../../components/button-menu';
import LoginCardSearch from '../login-card-search';


const Header = ({ handleClick, isNavIn }) => {
    return (
        <header className={style.header}>
            <Logo />
            <LoginCardSearch />
            <ButtonMenu onClick={handleClick} isNavIn={isNavIn} />
        </header >
    );
};

export default Header;