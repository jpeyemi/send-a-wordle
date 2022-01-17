import React, { useState, useEffect } from "react";
import "./Slider.css";

const BeefSlider = () => {
    const inputFunc = () => {
        let value = document.getElementById("beefInput").value;
        let te = document.getElementById("beefText");
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
        <input id="beefInput" type="range" min="0" max="200" steps="1" onChange={inputFunc}/>
        <div class="value right">
            3</div>
    </div>
</div>
<br />

<span className="test" id="beefText">1 serving</span>

</>
    );
}

export default BeefSlider;