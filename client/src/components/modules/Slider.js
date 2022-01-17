import React, { useState, useEffect } from "react";
import "./Slider.css";

const Slider = (props) => {
    const inputFunc = () => {
        let value = document.querySelector("input").value;
        props.handleChange(value);
        let qs = document.querySelector(".spanclass");
        let te = document.querySelector(".test");
        if (value < 10) {
            qs.textContent = 0;
            te.textContent = "0 servings";
        } else if (value < 100) {
            qs.textContent = 1;
            te.textContent = "1 serving";
        } else if (value < 200) {
            qs.textContent = 2;
            te.textContent = "2 servings";
        } else {
            qs.textContent = 3;
            te.textContent = "3 servings";
        }
        //qs.textContent = Math.floor((value/2)*(0.01)*(3)) - 1;
        qs.style.left = (value/2) - 0.5 + "%";
        qs.classList.add("show");
        
    };

    const blurFunc = () => {
        document.querySelector(".spanclass").classList.remove("show");
    }

    return (
        <>
        <div class="range">
    <div class="sliderValue">
        <span className="spanclass">1</span>
    </div>
    <div class="field">
        <div class="value left">
            0</div>
        <input type="range" min="0" max="200" steps="1" onChange={inputFunc} onBlur={blurFunc}/>
        <div class="value right">
            3</div>
    </div>
</div>
<br />

<span className="test">1 serving</span>

</>
    );
}

export default Slider;