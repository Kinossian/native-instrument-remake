import Link from "next/link";
import { data } from "../../projectsData";
import style from "./style.module.css";
import { path } from "../../config/path";
import Image from "next/image";

const article = ({ article }) => {
    return (
        <div className={style.articlePage}>
            <Link href="/">
                <div className={style.imgContainer}>
                    <Image
                        src={`${path}${article.img}`}
                        alt={article.title}
                        width={10000}
                        height={10000}
                    />
                </div>
                <h3>{article.title}</h3>
                <p>{article.content}</p>
            </Link>
        </div>
    );
};

export default article;

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