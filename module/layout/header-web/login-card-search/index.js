import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import style from "./style.module.css";

const LoginCardSearch = () => {
    const [isSearching, setIsSearching] = useState(false);
    const handleIsSearching = useCallback(() => {
        setIsSearching(!isSearching);
    }, [isSearching]);

    return (
        <div className={style.loginCardSearch}>
            <div className={style.inactive}>
                <span><i className="fa-solid fa-user"></i></span>
            </div>
            <div>
                <Link href="/basket" className={style.basketLogo}>
                    <i className="fa-solid fa-cart-shopping">basket</i>
                </Link>
            </div>
            <i onClick={handleIsSearching} className="fa-solid fa-magnifying-glass"></i>
            {isSearching &&
                <input className={style.mobileSearchBar} type="text" placeholder='Recherche Produit' />
            }
        </div>
    );
};

export default LoginCardSearch;