import style from "./style.module.css";

const Notice = () => {
    return (
        <div className={style.noticeContainer}>
            <i className="fa-solid fa-exclamation"></i>
            <div className={style.notice}>
                <h4>Notice</h4>
                <p>Native Instruments est solidaire du peuple ukrainien, parmi lequel se trouvent nos collègues, notre famille, nos amis, nos partenaires et nos collègues créateurs. Nous avons suspendu toutes les ventes à destination de la Russie et de la Biélorussie sur notre boutique en ligne, joignant ainsi nos forces à celles des organisations mondiales qui font pression sur le gouvernement russe. À nos créateurs(trices) de musique russes et biélorusses, nous reconnaissons que cette décision vous affecte directement et nous vous remercions d’avance pour votre compréhension.</p>
            </div>
        </div>
    );
};

export default Notice;