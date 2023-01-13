import style from "./style.module.css";

const SectionFirst = ({ section }) => {
    return (
        <div className={style.sectionWithOutPicture} style={{ backgroundColor: section.backgroundColor, backgroundImage: section.backgroundImg }}>
            <h3>{section.title}</h3>
            <p>{section.description}</p>
            {section.extra && <p>{section.extra}</p>}
        </div>
    );
};

export default SectionFirst;