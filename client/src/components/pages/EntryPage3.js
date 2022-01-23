import React, { useState, useEffect } from "react";
import "./EntryPage.css";
import { Link } from "@reach/router";
import LocalSlider from "../modules/LocalSlider.js";
import DivineSliderTheSliderToEndAllSliders from "../modules/DivineSliderTheSliderToEndAllSliders.js";

const EntryPage3 = (props) => {
    /*useEffect(() => {
        console.log(sessionStorage.getItem('slider'));
    }, []);*/

    const keys = ["meat", "beef", "lamb", "pork", "poultry", "dairy", "non", "rice", "soy", "oat", "almond", "local"];

    const mapV = ["Never", "Rarely", "Sometimes", "Often",  "Very Often"];
    const mapL = [0, 1, 34, 67, 100]
    const mapU = [0, 33, 66, 99, 100];

    const [isLoaded, setLoaded] = useState(false)

    const addPerc = (val) => {
        return val + "%";
    };
    
    const findTxt = (num) => {
        for (let i = 0; i < mapV.length; i++) {
            if (num >= mapL[i] && num <= mapU[i]) {
                return mapV[i];
            }
        }
    }

    const [servings, setServings] = useState({})
    const serv = (type, servs) => {
        servings[type] = servs;
    };

    const handleClick = () => {
        /*for (const [key, value] of Object.entries(servings)) {
            sessionStorage.setItem(key, value);
        }*/
        /*for (let i = 0; i < sessionStorage.length; i++) {
            console.log(JSON.stringify(sessionStorage.key(i)) + ", " + sessionStorage.getItem(sessionStorage.key(i)));
        }*/
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

    return (
        <>
        <div className="entryBody">
            <h6 className="EntryPageHeader">LOCAL PRODUCE</h6>
            <h2 className="EntryPageQuestion">How much of your diet was locally grown or produced?</h2>
            <LocalSlider id='local' save={serv} servs = {servings} find = { addPerc } />
            <br />

            <Link to="/entry/4" className="RightArrowContainer" 
                onMouseOver = { handleRightArrowHover } 
                onClick = { handleClick } >
                <div className="RightArrow" />
            </Link>

            <Link to="/entry/2" className="LeftArrowContainer" 
                onMouseOver = { handleLeftArrowHover } 
                onClick = { handleClick } >
                <div className="LeftArrow" />
            </Link>
            </div>
        </> 
    );
};

export default EntryPage3;