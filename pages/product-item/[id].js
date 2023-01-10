import CGV from "../../components/cgv";
import SectionDescription from "../../module/product-item/body/section-description";
import SectionDescriptionNopic from "../../module/product-item/body/section-description-nopic";
import HeaderArticlePage from "../../module/product-item/header/header-product-container";
import { data } from "../../projectsData";
import style from "./style.module.css";
import { useCallback, useState } from "react";
import SectionCarroussellePicture from "../../module/product-item/body/section-carrousselle-picture";
import SectionFirst from "../../module/product-item/body/section-first";
import SectionOnlyOnePicture from "../../module/product-item/body/section-only-one-picture";

const Article = ({ product }) => {
    const _body = product.page.body;
    const [isMenuIn, setIsMenuIn] = useState(false);
    const handleClick = useCallback(() => {
        setIsMenuIn(!isMenuIn);
    }, [isMenuIn]);

    return (
        <div className={style.articlePage} style={{ background: product.page.body.backgroundColor, color: product.page.body.colorText }}>
            {
                product.page.header &&
                <HeaderArticlePage
                    product={product}
                    isMenuIn={isMenuIn}
                    handleClick={handleClick}
                />
            }
            {_body.sectionHead && <SectionFirst section={_body.sectionHead} />}
            {_body.sectionCarroussel && <SectionCarroussellePicture
                image={_body.sectionCarroussel.images?.map(image => image.src)}
                description={_body.sectionCarroussel.images?.map(image => image.description)}
            />}
            {_body.description1 && <SectionDescription noPicture={true} section={_body.description1} />}
            {_body.description2 && <SectionDescription odd={true} section={_body.description2} />}
            {_body.description3 && <SectionDescription section={_body.description3} />}
            {_body.description4 && <SectionDescription vertical={true} section={_body.description4} />}
            {_body.description5 && <SectionDescription odd={true} section={_body.description5} />}
            {_body.description6 && <SectionDescription section={_body.description6} />}
            {_body.description7 && <SectionDescription vertical={true} section={_body.description7} />}

            {product.page.cgv && <CGV cgv={product.page.cgv} />}

        </div >
    );
};
export default Article;




export const getStaticProps = (context) => {
    const filtered = data.filter(
        (product) => product.id == context.params.id
    );

    if (filtered.length > 0) {
        return {
            props: {
                product: filtered[0],
            },
        };
    }
};

export const getStaticPaths = () => {
    const ids = data.map((product) => product.id);
    const paths = ids.map((id) => ({ params: { id: id.toString() } }));

    return {
        paths,
        fallback: false,
    };
};
