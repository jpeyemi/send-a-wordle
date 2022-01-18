import React, { useState, useEffect } from "react";
import "./EntryPage.css";
import { Link } from "@reach/router";
import LocalSlider from "../modules/LocalSlider.js";
import DivineSliderTheSliderToEndAllSliders from "../modules/DivineSliderTheSliderToEndAllSliders.js";

const EntryPage3 = () => {
    /*useEffect(() => {
        console.log(sessionStorage.getItem('slider'));
    }, []);*/

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
            <h6 className="EntryPageHeader">LOCAL PRODUCE</h6>
            <h2 className="EntryPageQuestion">How much of your diet was locally grown or produced?</h2>
            <LocalSlider />
            <br />

            <Link to="/entry/4" className="RightArrowContainer" 
                onMouseOver = { handleRightArrowHover } >
                <div className="RightArrow" />
            </Link>

            <Link to="/entry/2" className="LeftArrowContainer" 
                onMouseOver = { handleLeftArrowHover } >
                <div className="LeftArrow" />
            </Link>
            
        </> 
    );
};

export default EntryPage3;