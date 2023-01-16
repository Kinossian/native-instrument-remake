import Empty from "../../module/basket-page/empty";
import Notice from "../../module/basket-page/notice";
import TableauProduct from "../../module/basket-page/tableau-product";
import style from "./style.module.css";
const Basket = () => {
    return (
        <div className={style.basketPage}>
            <div className={style.header}>
                <h3>Panier</h3>
            </div>
            <div className={style.body}>
                <Empty />
                {/* <Notice /> */}
                {/* <TableauProduct /> */}
            </div>
        </div>
    );
};

export default Basket;