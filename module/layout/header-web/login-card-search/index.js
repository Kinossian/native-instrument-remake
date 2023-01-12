import React from 'react';
import Link from 'next/link';
import style from "./style.module.css";

const LoginCardSearch = () => {
    return (
        <div className={style.loginCardSearch}>
            <div className={style.inactive}>
                <span><i className="fa-solid fa-user"></i></span>
            </div>
            <div>
                <Link href="/basket" className={style.basketLogo}><i className="fa-solid fa-cart-shopping"></i></Link>
            </div>
            <div className={style.searchBarContainer}>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input className={style.searchBar} type="text" placeholder='Recherche Produit' />
            </div>
        </div>
    );
};

export default LoginCardSearch;