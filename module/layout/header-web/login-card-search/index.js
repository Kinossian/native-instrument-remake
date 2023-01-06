import React from 'react';
import Link from 'next/link';
import style from "./style.module.css";

const LoginCardSearch = () => {
    return (
        <ul className={style.loginCardSearch}>
            <li>
                <span><i className="fa-solid fa-user"></i></span>
            </li>
            <li>
                <Link href="/basket"><i className="fa-solid fa-cart-shopping"></i></Link>
            </li>
            <li>
                <span><i className="fa-solid fa-magnifying-glass"></i></span>
            </li>
        </ul>
    );
};

export default LoginCardSearch;