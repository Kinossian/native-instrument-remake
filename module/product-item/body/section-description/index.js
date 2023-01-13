import Image from "next/image";
import style from "./style.module.css";

const SectionDescription = ({ section, odd, noPicture, vertical }) => {
    return (
        <div
            className={`${style.sectionDescription} ${odd && style.odd} ${vertical && style.vertical}`}
            style={{ backgroundColor: section.backgroundColor, backgroundImage: section.backgroundImg }}
        >
            <div className={`${style.descriptionContainer} ${section.image ? "" : style.withOutImage} ${noPicture && style.noPicture}`}>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
                <p>{section.extra}</p>
            </div>
            {section.image &&
                <div className={style.imageContainer}>
                    <Image
                        src={section.image.desktop ? section.image.desktop : section.image.mobile}
                        alt={section.title}
                        width={10000}
                        height={10000}
                    />
                    <Image
                        src={section.image.mobile ? section.image.mobile : section.image.desktop}
                        alt={section.title}
                        width={10000}
                        height={10000}
                    />
                </div>
            }
        </div>
    );
};

export default SectionDescription;