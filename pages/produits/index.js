import React, { useState } from 'react';
import style from "./style.module.css";
import OptionSearchLevel1 from '../../module/product-page/option-search/level-1';
import OptionSearchLevel2 from '../../module/product-page/option-search/level-2';
import { data } from "../../projectsData";
import ResultContainer from '../../module/product-page/result/container';
import Meta from '../../components/meta';


const Produits = () => {
    const [isOneClick, setIsOneClick] = useState(false);
    let [radioArrayLvl1, setRadioArrayLvl1] = useState(["Gratuit", "Nouveauté"]);
    let [product, setProduct] = useState(data.filter((prod) => prod.tag.includes("apercu")));

    const radioLvl1 = (e) => {
        let queryRadio = e.currentTarget.value;
        if (queryRadio === "apercu") {
            setRadioArrayLvl1(["Gratuit", "Nouveauté",]);
            setProduct(data.filter((prod) => prod.tag.includes(queryRadio.toLowerCase())));
        } else if (queryRadio === "komplete") {
            setRadioArrayLvl1(["Gratuit", "Voix", "Guitare", "Cordes", "sampleurs"]);
            setProduct(data.filter((prod) => prod.tag.includes(queryRadio.toLowerCase())));
        }
    };
    const radioLvl2 = (e) => {
        let queryRadio = e.currentTarget.value;
        setProduct(data.filter((prod) => prod.tag.includes(queryRadio.toLowerCase())));

    };


    return (
        <>
            <Meta />
            <div className={style.produitsPage}>
                <OptionSearchLevel1 setIsOneClick={setIsOneClick} onClick={radioLvl1} />
                <div className={style.OptionSearchLevel2Container}>
                    {radioArrayLvl1.map((radio, index) => (
                        <OptionSearchLevel2 isOneClick={isOneClick} setIsOneClick={setIsOneClick} onClick={radioLvl2} key={index} radio={radio} />
                    ))}
                </div>
                <ResultContainer data={product} />
            </div>
        </>
    );
};

export default Produits;