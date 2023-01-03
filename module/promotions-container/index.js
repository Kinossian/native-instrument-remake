import PromotionsCard from "../promotions-card";
import style from "./style.module.css";
const PromotionsContainer = () => {
    return (
        <div className={style.promotionsContainer}>
            <PromotionsCard
                link="/"
                img="/img/cadeaunoel.jpeg"
                title="CADEAUX DE NOËL"
                content="Profite de 25,00 € à dépenser sur n'importe quel logiciel, et télécharge HYPHA gratuitement."
            />
            <PromotionsCard
                link="/"
                img="/img/borough.jpeg"
                title="BOROUGH CHOPS"
                content="Raw, golden-era hip hop"
            />
            <PromotionsCard
                link="/"
                img="/img/komplet14.jpeg"
                title="DÉCOUVRE KOMPLETE 14"
                content="Avec KONTAKT 7, OZONE 10 STANDARD, PLAYBOX, PIANO COLORS, CHOIR: OMNIA, et bien d’autres choses encore."
            />
            <PromotionsCard
                link="/"
                img="/img/kontakt7.jpeg"
                title="KONTAKT 7 EST SORTI"
                content="Nouvelle Factory Library. Nouvel explorateur. Nouveau chapitre."
            />
            <PromotionsCard
                link="/"
                img="/img/cyber.jpeg"
                title="CYBER SEASON"
                content="Des réductions monstres sur les matériel et les collections."
            />
            <PromotionsCard
                link="/"
                img="/img/demande.jpeg"
                title="DEMANDE TON REMBOURSEMENT ICI"
                content="Tu vis en Europe et tu as acheté du matériel NI éligible pendant les promos Cyber Season ?"
            />
            <PromotionsCard
                link="/"
                img="/img/voici.jpeg"
                title="VOICI KOMPLETE NOW"
                content="Nos meilleurs outils de production pour 9,99 € par mois. Essaie-le maintenant!"
            />
            <PromotionsCard
                link="/"
                img="/img/lescartescadeau.jpeg"
                title="LES CARTES CADEAUX DE NI SONT À PRÉSENT DISPONIBLES"
                content="Fais plaisir aux créateurs(trices) de musiques et DJs de ton entourage"
            />

        </div>
    );
};

export default PromotionsContainer;