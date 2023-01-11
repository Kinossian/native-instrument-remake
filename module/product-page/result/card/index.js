import style from "./style.module.css";

const ResultCard = ({ product }) => {
    return (
        <div className={style.apercuCard}>
            <h3>{product.teaser.title}</h3>
            <p>{product.teaser.description}</p>
        </div>
    );
};

export default ResultCard;