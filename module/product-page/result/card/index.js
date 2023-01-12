import Image from "next/image";
import style from "./style.module.css";
import Link from "next/link";

const ResultCard = ({ product }) => {
    console.log(product);
    return (
        <Link
            href={`/product-item/[id]`} as={`/product-item/${product.id}`}>
            <div className={style.apercuCard}>
                <div className={style.imageContainer}>
                    <Image
                        src={product.teaser.image}
                        alt={product.teaser.title}
                        width={400}
                        height={400}
                    />
                </div>
                <div className={style.description}>
                    <h3>{product.teaser.title}</h3>
                    <span>
                        <p>{product.teaser.description}</p>
                    </span>
                </div>
                <div className={style.priceContainer}>
                    {
                        product.priceForUpdate &&
                        <div className={style.priceCard}>
                            <p>Mise à jour</p>
                            <span>{product.priceForUpdate},00 €</span>
                        </div>
                    }
                    <div className={style.priceCard}>
                        <p>Full Version</p>
                        <span>{product.price},00 €</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ResultCard;