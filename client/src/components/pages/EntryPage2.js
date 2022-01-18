import React, { useState, useEffect } from "react";
import "./EntryPage.css";
import MilkModal from "../modules/MilkModal.js";
import { Link } from "@reach/router";
import DivineSliderTheSliderToEndAllSliders from "../modules/DivineSliderTheSliderToEndAllSliders.js";

const EntryPage2 = (props) => {

    const [servings, setServings] = useState({})
    const serv = (type, servs) => {
        servings[type] = servs;
    };

    const handleClick = () => {
        for (const [key, value] of Object.entries(servings)) {
            sessionStorage.setItem(key, value);
        }
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
            <DivineSliderTheSliderToEndAllSliders id='non' save={serv} servs = {servings}/>
            <br />
            <MilkModal serv={serv} servs={servings}/>

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