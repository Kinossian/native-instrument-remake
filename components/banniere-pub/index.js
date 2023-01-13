import Link from "next/link";
import style from "./style.module.css";
import Image from "next/image";

const BannierePub = () => {


    return (
        <Link className={style.bannierePubContainer} href="/">
            <Image
                src="https://www.native-instruments.com/typo3temp/pics/img-homepage-nks-uhe-hp-tile-l1_03-5db7103e6e81cf5305cecbbc53058b40-t.jpg"
                alt="Pub Plugin"
                width={1000}
                height={1000}
                className={style.ImgBannierePub}
            />
            <Image
                src="https://www.native-instruments.com/typo3temp/pics/img-homepage-nks-uhe-hp-tile-l1_03-5db7103e6e81cf5305cecbbc53058b40-m.jpg"
                alt="Pub Plugin"
                width={400}
                height={400}
                className={style.ImgBannierePubSmall}
            />

            <div className={style.textPubContainer}>
                <h2>DES REMISES EXCEPTIONNELLES SUR LES PRODUITS D’U-HE</h2>
                <p>Profite de réductions sur les meilleures émulations d’équipements analogiques du marché, notamment Diva et Satin. Jusqu’au 10 janvier. </p>
                <button>Profiter de l’offre</button>
            </div>
        </Link>
    );
};

export default BannierePub;