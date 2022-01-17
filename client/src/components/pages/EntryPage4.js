import React, { useState, useEffect } from "react";
import "./EntryPage.css";
import { Link } from "@reach/router";
import Checkbox from "../modules/Checkbox.js";

const EntryPage4 = () => {
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
            <h6 className="EntryPageHeader">CONSERVE THE AMAZON</h6>
            <h2 className="EntryPageQuestion">How many of these foods did you eat?</h2>
            
            <Checkbox text="Açaí berries" id="acai" />
            <br />
            <Checkbox text="Amazonian cocoa" id="cocoa" />
            <br />
            <Checkbox text="Brazil nuts" id="nuts" />
            <br />
            <Checkbox text="Guaraná berries" id="gua" />
            <br />

            <Link to="/journey" className="SubmitButton" > Submit
            </Link>

            <Link to="/entry/3" className="LeftArrowContainer" 
                onMouseOver = { handleLeftArrowHover } >
                <div className="LeftArrow" />
            </Link>
            
        </> 
    );
};

export default EntryPage4;