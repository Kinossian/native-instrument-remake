import React from 'react';
import style from "./style.module.css";
import NavigationArticle from '../navigation-product';
import BurgerButton from '../../../../components/burger-button';
import PriceBuy from "../price-buy";
import Image from "next/image";




const HeaderArticlePage = ({ handleClick, isMenuIn, product }) => {

    return (
        <>
            <div className={style.imgContainerBannier}>
                <Image
                    src={product.page.header.image.desktop}
                    alt={product.page.header.title}
                    width={10000}
                    height={10000}
                    className={style.bannierDesktop}
                />
                <Image
                    src={product.page.header.image.mobile}
                    alt={product.page.header.title}
                    width={10000}
                    height={10000}
                    className={style.bannierMobile}
                />
                <h1>{product.page.header.titleImg}</h1>
            </div>
            <header className={style.headerArticlePage} style={{ backgroundColor: product.page.header.backgroundColor }}>
                <h1>{product.page.header.title}</h1>
                <NavigationArticle
                    isMenuIn={isMenuIn}
                    handleClick={handleClick}
                    product={product}
                />
                <BurgerButton
                    isNavIn={isMenuIn}
                    onClick={handleClick}
                    color="#edeff0"
                />
                {
                    product.price &&
                    <PriceBuy product={product} />
                }

            </header >
        </>
    );
};

export default HeaderArticlePage;