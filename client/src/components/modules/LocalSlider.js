import React, { useState, useEffect } from "react";
import "./Slider.css";

const LocalSlider = (props) => {
    let inp = String(props.id) + "Input";
    let txt = String(props.id) + "Text";
    /*let init = '1';
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
    }*/
    /*const inputFunc = () => {
        let value = document.getElementById(txt).value;
        setText(props.find(value));
        setValue(value);
        sessionStorage.setItem(props.id, value);

        //let te = document.getElementById(txt);
        //te.textContent = text;
        //console.log(document.getElementById(txt).textContent);
        //props.save(props.id, numServ)
        
    };*/
    const[value,setValue] = useState(sessionStorage.getItem(props.id));
    const[text, setText] = useState(props.find(sessionStorage.getItem(props.id)));
    useEffect(()=> {
        if(Object.keys(props.servs).includes(props.id)){
            //console.log(props.servs[props.id]);
            setValue(servMap[props.servs[props.id]]-1);   
        }
    }, []);

    const inputFunc = () => {
        let value = document.getElementById("localInput").value;
        setText(props.find(value));
        setValue(value)
        sessionStorage.setItem(props.id, value);
    };

    return (
        <>
        <div id = "localRange" class="range">
    <div class="field">
        <div class="value left">
            0</div>
        <input id="localInput" type="range" min="0" max="100" steps="1" value={value} onChange={inputFunc}/>
        <div class="value right" id = "localright">
            100</div>
    </div>
</div>
<br />

<span className="test" id="localText"> {text} </span>

</>
    );
}

export default LocalSlider;