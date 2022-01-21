import React, { useState, useEffect } from "react";
import "./Slider.css";

const DivineSliderTheSliderToEndAllSliders = (props) => {
    //const map = {0: "Never", 33: "Rarely", 66: "Sometimes", 99: "Often", 100: "Very Often"};

    let inp = String(props.id) + "Input";
    let txt = String(props.id) + "Text";
    /*let init = '1';
    init = String(props.servs[props.id]);
    console.log(init);
    if(typeof(init) == 'undefined'){
        init = '1';
        console.log(init)
    }*/
    //return to this to make not undefined on start
    const[value,setValue] = useState(sessionStorage.getItem(props.id));
    const[val, setKey] = useState(props.find(sessionStorage.getItem(props.id)));
    /*let servMap = {
        0 : 10,
        1 : 100,
        2 : 200,
        3 : 201,
    }*/
    /*useEffect(()=> {
        /*if(Object.keys(props.servs).includes(props.id)){
            console.log(props.servs[props.id]);
            setValue(servMap[props.servs[props.id]]-1);   
        }
        //location.reload();
        for (let i = 0; i < sessionStorage.length; i++) {
            console.log(JSON.stringify(sessionStorage.key(i)) + ", " + sessionStorage.getItem(sessionStorage.key(i)));
        }
        console.log(sessionStorage.getItem(props.id));
        console.log(text);
    }, []);*/

    /*const findTxt = (num) => {
        for (const [key, value] of Object.entries(map)) {
            if (num <= key) {
                //console.log(map[key]);
                return value;
            }
        }
        
    }*/

    /*const returnVal = ()  => {
        updateVal();
        return document.getElementById(txt).textContent;
    }*/

    const inputFunc = () => {
        let value = document.getElementById(inp).value;
        setKey(props.find(value));
        setValue(value);
        sessionStorage.setItem(props.id, value);

        //let te = document.getElementById(txt);
        //te.textContent = text;
        //console.log(document.getElementById(txt).textContent);
        //props.save(props.id, numServ)
        
    };

    // map
    // Never, Rarely, Sometimes, Often, Very often
    // Never = vegetarian/vegan (0)
    // Rarely = one serving (1-33)
    // Sometimes = more than one serving  (34-66)
    // Often = at least two servings (67-99)
    // Very often = with every meal  (100)
        

    return (
        <>
        <div class="range">
    <div class="field">
        <input id={inp} type="range" min="0" max="100" steps="1" value={value} onChange={inputFunc}/>
    </div>
</div>
<br />

<span className="test" >
    {(val===1) && <div id={txt} > Never <span class="extrainfo"> </span> </div> }
    {(val===2) && <div id={txt} > Rarely <span class="extrainfo"> one serving </span> </div> }
    {(val===3) && <div id={txt} > Sometimes <span class="extrainfo"> more than one serving </span> </div> }
    {(val===4) && <div id={txt} > Often <span class="extrainfo"> at least two servings </span> </div> }
    {(val===5) && <div id={txt} > Very Often <span class="extrainfo"> with every meal </span> </div> }
</span>

</>
    );
}

export default DivineSliderTheSliderToEndAllSliders;