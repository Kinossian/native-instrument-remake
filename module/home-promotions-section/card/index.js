import Link from "next/link";
import style from "./style.module.css";
import Image from "next/image";


const PromotionsCard = ({ item }) => {
    return (
        <Link
            href={`/product-item/[id]`} as={`/product-item/${item.id}`}
            className={style.promotionsCard}>
            <div className={style.imgContainer}>
                <Image
                    src={item.teaser.image}
                    alt={item.teaser.title}
                    width={400}
                    height={400}
                />
            </div>
            <div>
                <h3>{item.teaser.title}</h3>
                <p>{item.teaser.description}</p>
            </div>
        </Link>
    );
};

export default PromotionsCard;;;