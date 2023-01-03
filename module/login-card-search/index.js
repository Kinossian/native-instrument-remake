import React from 'react';
import Link from 'next/link';
import style from "./style.module.css";

const LoginCardSearch = () => {
    return (
        <div className={style.loginCardSearch}>
            <span><i className="fa-solid fa-user"></i></span>
            <Link href="/basket"><i className="fa-solid fa-cart-shopping"></i></Link>
            <span><i className="fa-solid fa-magnifying-glass"></i></span>
        </div>
    );
};

export default LoginCardSearch;