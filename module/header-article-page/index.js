import React from 'react';
import style from "./style.module.css";
import NavigationArticle from '../navigation-article';
import BurgerMenu from '../../components/burger-menu';
import PriceBuy from "../../module/price-buy";




const HeaderArticlePage = ({ handleClick, isMenuIn, article }) => {
    return (
        <header className={style.headerArticlePage}>
            <h1>{article.titleArticle}</h1>
            <NavigationArticle
                isMenuIn={isMenuIn}
                handleClick={handleClick}
                article={article}
            />
            <BurgerMenu
                isNavIn={isMenuIn}
                onClick={handleClick}
                color="#edeff0"
            />
            <PriceBuy />

        </header >
    );
};

export default HeaderArticlePage;