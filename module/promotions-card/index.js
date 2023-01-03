import Link from "next/link";
import style from "./style.module.css";

const PromotionsCard = ({ link, img, title, content }) => {
    return (
        <Link href={link} className={style.promotionsCard}>
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>{content}</p>
        </Link>
    );
};

export default PromotionsCard;