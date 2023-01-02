import React from 'react';
import style from "./style.module.css";
import Link from 'next/link';

const Navigation = ({ isNavIn }) => {
    return (
        <nav className={`${style.nav} ${isNavIn && style.navIn}`}>
            <ul className={style.navbar}>
                <li>
                    <Link href="/produits">Produits</Link>
                </li>
                <li>
                    <Link href="/communaute">Communauté</Link>
                </li>
                <li>
                    <Link href="/assistance">Assistance</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;