import React, { useState, useEffect } from "react";
import "./Slider.css";

const OatSlider = () => {
    const inputFunc = () => {
        let value = document.getElementById("oatInput").value;
        let te = document.getElementById("oatText");
        if (value < 10) {
            te.textContent = "0 servings";
        } else if (value < 100) {
            te.textContent = "1 serving";
        } else if (value < 200) {
            te.textContent = "2 servings";
        } else {
            te.textContent = "3 servings";
        }
    };

    return (
        <>
        <div class="range">
    <div class="field">
        <div class="value left">
            0</div>
        <input id="oatInput" type="range" min="0" max="200" steps="1" onChange={inputFunc}/>
        <div class="value right">
            3</div>
    </div>
</div>
<br />

<span className="test" id="oatText">1 serving</span>

</>
    );
}

export default OatSlider;