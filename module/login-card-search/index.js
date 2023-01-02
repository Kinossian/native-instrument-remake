import React from 'react';
import Link from 'next/link';
import style from "./style.module.css";

const LoginCardSearch = () => {
    return (
        <div className={style.loginCardSearch}>
            <span><i class="fa-solid fa-user"></i></span>
            <Link href="/basket"><i class="fa-solid fa-cart-shopping"></i></Link>
            <span><i class="fa-solid fa-magnifying-glass"></i></span>
        </div>
    );
};

export default LoginCardSearch;