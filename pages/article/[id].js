import { data } from "../../projectsData";
import style from "./style.module.css";
import HeaderArticlePage from "../../module/header-article-page";
import { useCallback, useState } from "react";

const Article = ({ article }) => {
    const [isMenuIn, setIsMenuIn] = useState(false);
    const handleClick = useCallback(() => {
        setIsMenuIn(!isMenuIn);
    }, [isMenuIn]);



    console.log(article);
    return (
        <div className={style.articlePage}>
            {
                article.page.header &&
                <HeaderArticlePage
                    article={article}
                    isMenuIn={isMenuIn}
                    handleClick={handleClick}
                />
            }
            <p className={style.provi}>{article.page.section1.description}</p>
        </div>
    );
};

export default Article;

export const getStaticProps = (context) => {
    const filtered = data.articles.filter(
        (article) => article.id == context.params.id
    );

    if (filtered.length > 0) {
        return {
            props: {
                article: filtered[0],
            },
        };
    }
};

export const getStaticPaths = () => {
    const ids = data.articles.map((article) => article.id);
    const paths = ids.map((id) => ({ params: { id: id.toString() } }));

    return {
        paths,
        fallback: false,
    };
};
