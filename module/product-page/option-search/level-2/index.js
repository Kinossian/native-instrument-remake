import { useCallback } from "react";
import style from "./style.module.css";
const OptionSearchLevel2 = ({ radio, onClick, setIsOneClick, isOneClick }) => {
    const handleOnClicks = useCallback(onClick, [onClick]);
    function handleOnClick(e) {
        handleOnClicks(e);
        setIsOneClick(false);

    }

    return (
        <div className={`${style.radioContainer}`} >
            <input onClick={handleOnClick} type="radio" value={radio} name="level2" id={radio} />
            {
                isOneClick ?
                    <label style={{ color: "inherit" }} htmlFor={radio}>{radio}</label>
                    :
                    <label htmlFor={radio}>{radio}</label>
            }
        </div>

    );
};

export default OptionSearchLevel2;