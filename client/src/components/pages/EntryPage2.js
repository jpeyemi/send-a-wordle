import React, { useState, useEffect } from "react";
import "./EntryPage.css";
import MilkModal from "../modules/MilkModal.js";
import { Link } from "@reach/router";
import DivineSliderTheSliderToEndAllSliders from "../modules/DivineSliderTheSliderToEndAllSliders.js";

const EntryPage2 = () => {

    const [servings, setServings] = useState({})
    const serv = (type, servs) => {
        servings[type] = servs;
    };

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
            <h6 className="EntryPageHeader">VEGAN ALTERNATIVES</h6>
            <h2 className="EntryPageQuestion">How often did you consume plant-based alternatives?</h2>
            <DivineSliderTheSliderToEndAllSliders id='non' save={serv} servs = {servings}/>
            <br />
            <MilkModal servs={servings}/>

            <Link to="/entry/3" className="RightArrowContainer" 
                onMouseOver = { handleRightArrowHover } >
                <div className="RightArrow" />
            </Link>

            <Link to="/entry/1" className="LeftArrowContainer" 
                onMouseOver = { handleLeftArrowHover } >
                <div className="LeftArrow" />
            </Link>
            
        </> 
    );
};

export default EntryPage2;