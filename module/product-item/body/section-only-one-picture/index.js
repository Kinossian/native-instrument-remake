import Image from "next/image";
import style from "./style.module.css";

const SectionOnlyOnePicture = ({ section }) => {
    return (
        <div
            className={style.sectionPicture}
            style={
                { backgroundImage: section.backgroundImg }
            }
        >
            <Image
                className={style.imageDesktop}
                src={section.image?.desktop}
                alt={section.title}
                width={1000}
                height={1000}
            />
            <Image
                className={style.imageMobile}
                src={section.image?.mobile ? section.image?.mobile : section.image?.desktop}
                alt={section.title}
                width={1000}
                height={1000}
            />
        </div>
    );
};

export default SectionOnlyOnePicture;