import React from 'react';
import style from "./style.module.css";
import Link from 'next/link';
import Image from 'next/image';
import logo from "/public/logo.svg";

const Logo = () => {
    return (
        <Link href="/">
            <div className={style.logoContainer}>
                <Image
                    className={style.logo}
                    src={logo}
                    alt="logo du site"
                />
            </div>
        </Link>
    );
};

export default Logo;