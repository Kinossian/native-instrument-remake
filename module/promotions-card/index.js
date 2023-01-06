import Link from "next/link";
import style from "./style.module.css";
import Image from "next/image";
import { path } from "../../config/path";

const PromotionsCard = ({ article }) => {
    return (
        <Link
            href="/article/[id]" as={`/article/${article.id}`}
            className={style.promotionsCard}>
            <Image
                src={`${path}${article.imgCard}`}
                alt={article.title}
                width={400}
                height={400}
            />
            <div>
                <h3>{article.titleCard}</h3>
                <p>{article.content}</p>
            </div>
        </Link>
    );
};

export default PromotionsCard;