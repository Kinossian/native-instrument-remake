import React from 'react';
import style from "./style.module.css";
import NavigationArticle from '../navigation-article';
import BurgerButton from '../../../components/burger-button';
import PriceBuy from "../price-buy";
import Image from "next/image";




const HeaderArticlePage = ({ handleClick, isMenuIn, article }) => {

    return (
        <>
            <div className={style.imgContainerBannier}>
                <Image
                    src={article.page.header.image.desktop}
                    alt={article.page.header.title}
                    width={10000}
                    height={10000}
                    className={style.bannierDesktop}
                />
                <Image
                    src={article.page.header.image.mobile}
                    alt={article.page.header.title}
                    width={10000}
                    height={10000}
                    className={style.bannierMobile}
                />
                <h1>{article.page.header.title}</h1>
            </div>
            <header className={style.headerArticlePage}>
                <h1>{article.page.header.title}</h1>
                <NavigationArticle
                    isMenuIn={isMenuIn}
                    handleClick={handleClick}
                    article={article}
                />
                <BurgerButton
                    isNavIn={isMenuIn}
                    onClick={handleClick}
                    color="#edeff0"
                />
                {
                    article.price &&
                    <PriceBuy article={article} />
                }

            </header >
        </>
    );
};

export default HeaderArticlePage;