import { data } from "../../projectsData";
import style from "./style.module.css";
import { path } from "../../config/path";
import Image from "next/image";
import HeaderArticlePage from "../../module/header-article-page";
import { useCallback, useState } from "react";

const article = ({ article }) => {
    const [isMenuIn, setIsMenuIn] = useState(false);

    const handleClick = useCallback(() => {
        setIsMenuIn(!isMenuIn);
    }, [isMenuIn]);

    return (
        <div className={style.articlePage}>
            <div className={style.imgContainer}>
                <Image
                    src={`${path}${article.imgArticleBannier}`}
                    alt={article.title}
                    width={10000}
                    height={10000}
                    className={style.bannierDesktop}
                />
                <Image
                    src={`${path}${article.imgArticleBannierMobile}`}
                    alt={article.title}
                    width={10000}
                    height={10000}
                    className={style.bannierMobile}
                />
                <h1>{article.titleArticle}</h1>
            </div>
            <HeaderArticlePage
                article={article}
                isMenuIn={isMenuIn}
                handleClick={handleClick}
            />
            <p className={style.provi}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores illum magnam necessitatibus at cumque repudiandae amet doloremque voluptates, blanditiis ea? Vero doloremque maxime totam. Voluptatum quam modi molestiae maiores natus voluptatem necessitatibus impedit, iure temporibus perferendis sapiente eos dolorum exercitationem ut commodi inventore magnam? Dignissimos at dolorum nesciunt vel beatae obcaecati esse placeat ipsum quis omnis dicta, deleniti illum cupiditate nostrum nulla. Quos est quis consectetur eum tenetur quisquam repellendus totam cum, consequatur inventore aperiam a libero vero dicta perspiciatis provident. Magnam minus quis accusantium veritatis nemo aperiam error adipisci, aut ea laudantium. Cum explicabo id molestias! Rem magni odio saepe dolores nobis amet nihil ex ut culpa minima asperiores, officia quisquam aut reiciendis labore temporibus, quia iure sunt suscipit magnam? Minus ducimus nulla maiores iusto atque? Eaque est, sint neque cum autem velit suscipit dignissimos aliquam vero aut animi quibusdam quos consectetur nisi vel assumenda ullam earum perspiciatis voluptas accusantium tempora quidem minus provident delectus? Esse culpa eveniet dolorem dolorum, necessitatibus ipsum, magni aliquam reiciendis explicabo velit at incidunt et rem eum. Alias recusandae ducimus accusamus, quas ipsum eum enim accusantium odio perspiciatis libero incidunt aliquid fuga. Reprehenderit beatae commodi minus eos corporis saepe voluptates impedit perspiciatis, perferendis nulla harum placeat quos explicabo. Maxime id sit totam nostrum repellendus? Culpa facilis amet, reprehenderit eos quasi cupiditate? Excepturi nisi iste odio, iusto, a cumque atque sint corporis quibusdam voluptatibus eius rem ipsum in voluptates ullam numquam, dolor saepe. Ipsa at illo quae, cum provident ab, eveniet iusto voluptas ex hic, neque qui veritatis! Facilis ratione esse qui beatae vero molestias earum quo labore nemo, provident nam aperiam velit rem. Nesciunt, dolore eos eveniet alias fuga fugiat inventore aliquam minus quos sapiente illum maxime quidem, facere blanditiis officiis laborum vero! Rerum blanditiis reiciendis aliquid non ex. Quisquam suscipit tenetur ipsum quaerat ab odio, atque minus. Hic ipsum eos praesentium voluptate veniam fugit, nostrum corrupti libero maxime aut, rerum corporis illo facere quisquam harum placeat sit molestias, quos rem animi provident. Quaerat distinctio, illum earum eos ex quasi cum quisquam perspiciatis quia iure quas accusantium eum fugit, quidem mollitia assumenda perferendis nihil. Harum inventore earum sint atque eius dicta a et dignissimos, nisi vero delectus laudantium officia eligendi quaerat eos adipisci! Illum tempore porro incidunt culpa id vel et alias harum delectus unde cumque, mollitia laborum quam nam at natus ea magnam ipsam asperiores esse est sint aspernatur. Provident consequuntur repudiandae assumenda?
            </p>
        </div>
    );
};

export default article;

export const getStaticProps = (context) => {
    const filtered = data.articles.filter(
        (article) => article.id == context.params.id
    );

    if (filtered.length > 0) {
        return {
            props: {
                article: filtered[0],
            },
        };
    }
};

export const getStaticPaths = () => {
    const ids = data.articles.map((article) => article.id);
    const paths = ids.map((id) => ({ params: { id: id.toString() } }));

    return {
        paths,
        fallback: false,
    };
};