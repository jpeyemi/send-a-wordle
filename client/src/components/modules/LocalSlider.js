import React, { useState, useEffect } from "react";
import "./Slider.css";

const LocalSlider = (props) => {
    let inp = String(props.id) + "Input";
    let txt = String(props.id) + "Text";
    let init = '1';
    init = String(props.servs[props.id]);
    //console.log(init);
    if(typeof(init) == 'undefined'){
        init = '1';
        //console.log(init)
    }
    //return to this to make not undefined on start
    const[value,setValue] = useState();
    let servMap = {
        0 : 10,
        1 : 100,
        2 : 200,
        3 : 201,
    }
    useEffect(()=> {
        if(Object.keys(props.servs).includes(props.id)){
            console.log(props.servs[props.id]);
            setValue(servMap[props.servs[props.id]]-1);   
        }
    }, []);
    const inputFunc = () => {
        let value = document.getElementById("localInput").value;
        let te = document.getElementById("localText");
        te.textContent = (value/2) + "%";
        props.save(props.id, value/2)
        setValue(value)
    };

    return (
        <>
        <div id = "localRange" class="range">
    <div class="field">
        <div class="value left">
            0</div>
        <input id="localInput" type="range" min="0" max="200" steps="1" value={value} onChange={inputFunc}/>
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