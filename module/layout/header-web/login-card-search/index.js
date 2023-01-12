import React, { useCallback } from 'react';
import Link from 'next/link';
import style from "./style.module.css";

const LoginCardSearch = ({ setQuery, search }) => {
    const handleChange = useCallback(setQuery, [setQuery]);
    const searching = useCallback(search, [search]);

    function handleSubmit(e) {
        e.preventDefault();
        console.log("kjk");
    }

    return (
        <div className={style.loginCardSearch}>
            <div className={style.inactive}>
                <span><i className="fa-solid fa-user"></i></span>
            </div>
            <div>
                <Link href="/basket" className={style.basketLogo}><i className="fa-solid fa-cart-shopping"></i></Link>
            </div>
            <form onSubmit={handleSubmit} className={style.searchBarContainer} onChange={searching}>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input className={style.checkbox} type="checkbox" />
                <input onChange={handleChange} className={style.searchBar} type="text" placeholder='Recherche Produit' />
            </form>
        </div>
    );
};

export default LoginCardSearch;