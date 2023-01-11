import style from "./style.module.css";
import ApercuCard from "../card";

const ResultContainer = ({ data }) => {
    return (
        <div className={style.apercuContainer}>
            {
                data.map((product) => (
                    <ApercuCard key={product.id} product={product} />
                ))
            }
        </div>
    );
};

export default ResultContainer;