import React, { useState, useEffect } from "react";
import "./Slider.css";

const LocalSlider = () => {
    const inputFunc = () => {
        let value = document.getElementById("localInput").value;
        let te = document.getElementById("localText");
        te.textContent = (value/2) + "%";
    };

    return (
        <>
        <div id = "localRange" class="range">
    <div class="field">
        <div class="value left">
            0</div>
        <input id="localInput" type="range" min="0" max="200" steps="1" onChange={inputFunc}/>
        <div class="value right" id = "localright">
            100</div>
    </div>
</div>
<br />

<span className="test" id="localText">25.5%</span>

</>
    );
}

export default LocalSlider;