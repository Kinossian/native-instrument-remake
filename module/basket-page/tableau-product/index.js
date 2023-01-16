import Image from "next/image";
import style from "./style.module.css";

const TableauProduct = () => {
    return (
        <>
            <div className={style.tableauProduct}>
                <div className={style.headerTableau}>
                    <span className={style.provi}>Provi</span>
                    <h4>Produit</h4>
                    <h4 className={style.quantity}>Quantité</h4>
                    <h4 className={style.price}>Prix</h4>
                    <h4 className={style.headerTotal}>Total</h4>
                </div>
                <div className={style.bodyTableau}>
                    <div className={style.imageContainer}>
                        <Image src="https://www.native-instruments.com/typo3temp/pics/img-packshot-kontakt-7-product-finder-1098e1eb83e0e8a82da8195580b99acd-d.jpg"
                            alt="Pub Plugin"
                            width={400}
                            height={400}
                            className={style.ImgBannierePub}
                            priority
                        />
                    </div>
                    <div className={style.bodyTitle}>
                        <div className={style.titleContainer}>
                            <h5>Kontakt 7 Bundle (telechargement)</h5>
                        </div>
                        <span>retirer</span>
                    </div>
                    <select className={style.quantity} id="quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <p className={style.price}>299,00 €</p>
                    <p className={style.bodyTotal}>299,00 €</p>
                </div>
            </div>
        </>

    );
};

export default TableauProduct;



