import React, { useState, useEffect } from "react";
import "./Checkbox.css";

const Checkbox = (props) => {
    
    const idName = "Checkbox" + props.id;
    const [isChecked, setChecked] = useState(sessionStorage.getItem(props.id) === "true");

    useEffect(() => {
       console.log("at use effect");
        for (let i = 0; i < sessionStorage.length; i++) {
            console.log(JSON.stringify(sessionStorage.key(i)) + ", " + sessionStorage.getItem(sessionStorage.key(i)));
        }
        sessionStorage.setItem(props.id, isChecked);
    }, [isChecked]);

    const handleClick = () => {
        if (isChecked) { setChecked(false); }
        else { setChecked(true); }
    }

    return(
        <>
            <span className={isChecked ? "CheckboxButtonClicked CheckboxButton" : "CheckboxButton" } id={idName} onClick={handleClick}>
                { props.text }
            </span>
        </>
    );
};

export default Checkbox;