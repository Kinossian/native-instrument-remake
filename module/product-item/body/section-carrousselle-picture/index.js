import Image from "next/image";
import style from "./style.module.css";
import { useState } from "react";

const SectionOnlyPicture = ({ image, description }) => {
    const [count, setCount] = useState(0);

    const handleClickPlus = () => {
        if (count === image.length - 1) {
            setCount(0);
        } else {
            setCount(count + 1);
        }
    };
    const handleClickMoins = () => {
        if (count === 0) {
            setCount(image.length - 1);
        } else {
            setCount(count - 1);
        }
    };

    return (
        <div>

            <div
                className={style.imagePicture}
                style={
                    { backgroundImage: image?.backgroundImg }
                }
            >
                <button onClick={handleClickMoins}><i className="fa-solid fa-chevron-left"></i></button>
                <div className={style.imgContainer}>
                    <Image
                        src={image && image[count]}
                        alt={"ok"}
                        width={1000}
                        height={1000}
                    />
                </div>
                <button onClick={handleClickPlus}><i className="fa-solid fa-chevron-right"></i></button>
            </div>
            <p className={style.description}>{description && description[count]}</p>
            <div className={style.PageNumber}>{count + 1} / {image && image.length}</div>
        </div>
    );
};

export default SectionOnlyPicture;