import React, { useState, useEffect } from "react";
import "./EntryPage.css";
import MilkModal from "../modules/MilkModal.js";
import { Link } from "@reach/router";
import DivineSliderTheSliderToEndAllSliders from "../modules/DivineSliderTheSliderToEndAllSliders.js";

const EntryPage2 = (props) => {

    const keys = ["meat", "beef", "lamb", "pork", "poultry", "dairy", "non", "rice", "soy", "oat", "almond", "local"];

    //const mapV = ["Never", "Rarely", "Sometimes", "Often",  "Very Often"];
    const mapV = [1, 2, 3, 4, 5];
    const mapL = [0, 1, 34, 67, 100]
    const mapU = [0, 33, 66, 99, 100];

    const [isLoaded, setLoaded] = useState(false)
    
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
        /*for (let i = 0; i < sessionStorage.length; i++) {
            console.log(JSON.stringify(sessionStorage.key(i)) + ", " + sessionStorage.getItem(sessionStorage.key(i)));
        }*/
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
            <h6 className="EntryPageHeader">VEGAN ALTERNATIVES</h6>
            <h2 className="EntryPageQuestion">How often did you consume plant-based alternatives?</h2>
            <div className="EntryPageNote">(meat substitutes derived from plants such as soy)</div>
            <DivineSliderTheSliderToEndAllSliders id='non' save={serv} servs = {servings} find = {findTxt} />
            <br />
            <MilkModal serv={serv} servs={servings} find = {findTxt} />

            <Link to="/entry/3" className="RightArrowContainer" 
                onMouseOver = { handleRightArrowHover } 
                onClick = { handleClick } >
                <div className="RightArrow" />
            </Link>

            <Link to="/entry/1" className="LeftArrowContainer" 
                onMouseOver = { handleLeftArrowHover } 
                onClick = { handleClick } >
                <div className="LeftArrow" />
        
            </Link>
            </div>
        </> 
    );
};

export default EntryPage2;