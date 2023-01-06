import Link from "next/link";
import style from "./style.module.css";
import Image from "next/image";


const PromotionsCard = ({ article }) => {

    return (
        <Link
            href="/article/[id]" as={`/article/${article.id}`}
            className={style.promotionsCard}>
            <Image
                src={article.teaser.image}
                alt={article.teaser.title}
                width={400}
                height={400}
            />
            <div>
                <h3>{article.teaser.title}</h3>
                <p>{article.teaser.description}</p>
            </div>
        </Link>
    );
};

export default PromotionsCard;