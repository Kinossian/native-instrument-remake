import React from 'react';
import style from "./style.module.css";
import Link from 'next/link';
import Image from 'next/image';


const Logo = ({ src }) => {
    return (
        <Link href="/">
            <div className={style.logoContainer}>
                <Image
                    className={style.logo}
                    src={src}
                    alt="logo du site"
                />
            </div>
        </Link>
    );
};

export default Logo;