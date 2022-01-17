import React, { useState, useEffect } from "react";
import "./Checkbox.css";

const Checkbox = (props) => {
    const idName = "Checkbox" + props.id;
    const [isChecked, setChecked] = useState(false);

    const handleClick = () => {
        if (isChecked) { setChecked(false); }
        else { setChecked(true); }

        if (isChecked) {
            document.getElementById(idName).classList.add("CheckboxButtonClicked");
        } else {
            document.getElementById(idName).classList.remove("CheckboxButtonClicked");
        }
    }

    return(
        <>
            <span className="CheckboxButton" id={idName} onClick={handleClick}>
                { props.text }
            </span>
        </>
    );
};

export default Checkbox;