import React, { useState, useEffect } from "react";
import "./EntryPage.css";
import { Link } from "@reach/router";
import Checkbox from "../modules/Checkbox.js";
import { post } from "../../utilities";
import DateSelector from "../modules/DateSelector.js"

const EntryPage4 = (props) => {
    /*useEffect(() => {
        console.log(sessionStorage.getItem('slider'));
    }, []);*/
    const [servings, setServings] = useState({})
    {/*Here const [entryDate, setD] = useState(new Date());*/}
    const serv = (type, servs) => {
        servings[type] = servs;
    };

    const map = {"meat":7.6, "beef":50, "lamb":20, "pork":7.6, "poultry":5.7, "dairy":6.1, 
                    "non":0.7, "rice":1.2, "soy":1, "oat":0.9, "almond":0.7};
    
    const localMap = {"meat":4.6, "beef":20, "lamb":12, "pork":4.6, "poultry":2.4, "dairy":3.1, 
                    "non":0.7, "rice":1.2, "soy":1, "oat":0.9, "almond":0.7};

    /*const defaultVal = {"meat":2, "beef":1, "lamb":1, "pork":1, "poultry":1, "dairy":2, 
                    "non":0.25, "rice":1, "soy":1, "oat":1, "almond":1, "local":0.25};*/

    const ozTog = 28.3495;
    const gPerServ = 3 * ozTog;
    const convFactor = (gPerServ) * (1/100) * (1/33) * (1/100);

    const handleClick = () => {
        /*for (const [key, value] of Object.entries(servings)) {
            sessionStorage.setItem(key, value);
        }*/
        for (let i = 0; i < sessionStorage.length; i++) {
            console.log(JSON.stringify(sessionStorage.key(i)) + ", " + sessionStorage.getItem(sessionStorage.key(i)));
        }
    }

    const handleRightArrowHover = () => {
        document.querySelector('.RightArrow').animate([
            {left: '0'},
            {left: '10px'},
            {left: '0'}
        ],{
            duration: 700,
            iterations: 2
        });
    }

    const handleLeftArrowHover = () => {
        document.querySelector('.LeftArrow').animate([
            {left: '0'},
            {left: '10px'},
            {left: '0'}
        ],{
            duration: 700,
            iterations: 2
        });
    }

    const handleSubmit = () => {
        // calculate score
        let carbonScore = 0;
        let localPercent = sessionStorage.getItem("local");
        let normPercent = 100 - localPercent;

        if (sessionStorage.getItem("meatTouched") === "false") {
            carbonScore += normPercent * map["meat"] * sessionStorage.getItem("meat") + localPercent * localMap["meat"] * sessionStorage.getItem("meat");
        } else {
            let meatList = ["beef", "lamb", "pork", "poultry"];
            for (const meat of meatList) {
                carbonScore += normPercent * map[meat] * sessionStorage.getItem(meat) + localPercent * localMap[meat] * sessionStorage.getItem(meat);
            }
        }
        console.log("after meat calc: " + carbonScore);

        carbonScore += normPercent * map["dairy"] * sessionStorage.getItem("dairy") + localPercent * localMap["dairy"] * sessionStorage.getItem("dairy");
        console.log("after dairy calc: " + carbonScore);

        if (sessionStorage.getItem("veganTouched") === "false") {
            carbonScore += normPercent * map["non"] * sessionStorage.getItem("non") + localPercent * localMap["non"] * sessionStorage.getItem("non");
        } else {
            let altList = ["rice", "soy", "oat", "almond"];
            for (const alt of altList) {
                carbonScore += normPercent * map[alt] * sessionStorage.getItem(alt) + localPercent * localMap[alt] * sessionStorage.getItem(alt);
            }
        }
        console.log("after vegan calc: " + carbonScore);

        /*// next, look at meat
        if (!sessionStorage.getItem("beef") && !sessionStorage.getItem("lamb") &&
                !sessionStorage.getItem("pork") && !sessionStorage.getItem("poultry")) {
            
            if (!sessionStorage.getItem("meat")) {
                carbonScore += normPercent * map["meat"] * defaultVal["meat"] + localPercent * localMap["meat"] * defaultVal["meat"];
            } else {
                carbonScore += normPercent * map["meat"] * sessionStorage.getItem("meat") + localPercent * localMap["meat"] * sessionStorage.getItem("meat");
            }
        } else {
            let meatList = ["beef", "lamb", "pork", "poultry"];
            for (const meat of meatList) {
                if (sessionStorage.getItem(meat)) {
                    carbonScore += normPercent * map[meat] * sessionStorage.getItem(meat) + localPercent * localMap[meat] * sessionStorage.getItem(meat);
                } else {
                    carbonScore += normPercent * map[meat] * defaultVal[meat] + localPercent * localMap[meat] * defaultVal[meat];
                }
            }
        }

        // look at dairy
        if (sessionStorage.getItem("dairy")) {
            carbonScore += normPercent * map["dairy"] * sessionStorage.getItem("dairy") + localPercent * localMap["dairy"] * sessionStorage.getItem("dairy");
        } else {
            carbonScore += normPercent * map["dairy"] * defaultVal["dairy"] + localPercent * localMap["dairy"] * defaultVal["dairy"];
        }

        // look at vegan alternatives
        if (!sessionStorage.getItem("rice") && !sessionStorage.getItem("soy") &&
                !sessionStorage.getItem("oat") && !sessionStorage.getItem("almond")) {
            
            if (!sessionStorage.getItem("non")) {
                carbonScore += normPercent * map["non"] * defaultVal["non"] + localPercent * localMap["non"] * defaultVal["non"];
            } else {
                carbonScore += normPercent * map["non"] * sessionStorage.getItem("non") + localPercent * localMap["non"] * sessionStorage.getItem("non");
            }
        } else {
            let altList = ["rice", "soy", "oat", "almond"];
            for (const alt of altList) {
                if (sessionStorage.getItem(alt)) {
                    carbonScore += normPercent * map[alt] * sessionStorage.getItem(alt) + localPercent * localMap[alt] * sessionStorage.getItem(alt);
                } else {
                    carbonScore += normPercent * map[alt] * defaultVal[alt] + localPercent * localMap[alt] * defaultVal[alt];
                }
            }
        }*/

        // conversion
        carbonScore *= convFactor;
        console.log("after converting: " + carbonScore);

        // look at acai, etc.
        let consList = ["acai", "cocoa", "nuts", "gua"];
        for (const item of consList) {
            if (sessionStorage.getItem(item) === "true") {
                carbonScore -= 5;
            }
        }
        console.log("after acai calc: " + carbonScore);

        // capping
        // cap:143.22167399999998
        let cap = 85;
        if (carbonScore > cap) {
            carbonScore = cap;
        }

        if (carbonScore < 0) {
            carbonScore = 0;
        }

        console.log("after capping: " + carbonScore);

        // calculating out of 100
        let carbonActual = (Number(carbonScore) / cap) * 100;
        let val = Math.round(carbonActual);
        console.log("after everything: " + val);

        const dateObj = new Date(sessionStorage.getItem("date"));

        // finished! time to post.
        console.log(val);
        const body = {score: val, creator_id: props.userId, timestamp: dateObj};
        post("/api/entry", body).then(()=> {
            location.reload();
        });
    }

    return (
        <>
        <div className="entryBody">
            <h6 className="EntryPageHeader">CONSERVE THE AMAZON</h6>
            <h2 className="EntryPageQuestion">How many of these foods did you eat?</h2>
            <div className="EntryPageNote">(by buying sustainably-harvested products, you can help preserve the forest!)</div>
            
            <Checkbox className = "checkbox" text="Açaí berries" id="acai" save={serv} servs = {servings} />
            <br />
            <Checkbox className = "checkbox" text="Amazonian cocoa" id="cocoa" save={serv} servs = {servings} />
            <br />
            <Checkbox className = "checkbox" text="Brazil nuts" id="nuts" save={serv} servs = {servings} />
            <br />
            <Checkbox className = "checkbox" text="Guaraná berries" id="gua" save={serv} servs = {servings} />
            <br />

            <Link to="/journey/:userId" className="SubmitButton" 
                onClick = {handleSubmit}>Submit
            </Link>

            {/*<div className="DateInput">
                Entry Date:
                <DateSelector datesel = {datesel}/>
    </div>*/}
            
            <Link to="/entry/3" className="LeftArrowContainer" 
                onMouseOver = { handleLeftArrowHover } 
                onClick = {handleClick} >
                <div className="LeftArrow" />
            </Link>
            </div>
        </> 
    );
};

export default EntryPage4;