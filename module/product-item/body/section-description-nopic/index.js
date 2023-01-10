import Image from "next/image";
import style from "./style.module.css";

const SectionDescriptionNopic = ({ section, odd, noPicture }) => {
    return (
        <div
            className={`${style.sectionDescription} ${odd && style.odd}`}
            style={{ backgroundColor: section.backgroundColor, backgroundImage: section.backgroundImg }}
        >
            <div className={`${style.descriptionContainer}`}>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
                <p>{section.extra}</p>
            </div>
        </div>
    );
};

export default SectionDescriptionNopic;