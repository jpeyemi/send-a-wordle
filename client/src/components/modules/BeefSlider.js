import React, { useState, useEffect } from "react";
import "./Slider.css";

const BeefSlider = (props) => {
    const inputFunc = () => {
        let value = document.getElementById("beefInput").value;
        let te = document.getElementById("beefText");
        let numServ = 0
        let servMap = {
            0 : 10,
            1 : 100,
            2 : 200,
            3 : 201,
        }
        for(let k in servMap){
            if(value < servMap[k]){
                numServ = k
                break
            }
        }
        if(numServ == 1){
            te.textContent = String(numServ) + " serving"
        }else{
            te.textContent = String(numServ) + " servings"
        }
        props.save('beef', numServ)
        /*if (value < 10) {
            te.textContent = "0 servings";
        } else if (value < 100) {
            te.textContent = "1 serving";
        } else if (value < 200) {
            te.textContent = "2 servings";
        } else {
            te.textContent = "3 servings";
        }*/

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