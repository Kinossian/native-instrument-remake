import Link from "next/link";
import style from "./style.module.css";

const BannierePub = () => {


    return (
        <Link className={style.bannierePubContainer} href="/promotions">
            <img
                src="/img/homepagepub.jpg" alt="Pub Plugin"
                className={style.ImgBannierePub}
            />
            <img
                src="/img/homepagepubscreen.jpg" alt="Pub Plugin"
                className={style.ImgBannierePubSmall}
            />
            <div className={style.textPubContainer}>
                <h2>DES REMISES EXCEPTIONNELLES SUR LES PRODUITS D’U-HE</h2>
                <p>Profite de réductions sur les meilleures émulations d’équipements analogiques du marché, notamment Diva et Satin. Jusqu’au 10 janvier. </p>
                <button>Profiter de l'offre</button>
            </div>
        </Link>
    );
};

export default BannierePub;