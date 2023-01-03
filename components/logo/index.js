import React from 'react';
import style from "./style.module.css";
import Link from 'next/link';
const Logo = () => {
    return (
        <Link href="/">
            <div className={style.logoContainer}>
                <img className={style.logo} src="logoni.svg" alt="logo du site" />
            </div>
        </Link>
    );
};

export default Logo;