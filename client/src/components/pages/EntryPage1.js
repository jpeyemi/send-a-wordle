import React, { useState, useEffect } from "react";
import MeatModal from "../modules/MeatModal.js";
import Slider from "../modules/Slider.js";
import DairySlider from "../modules/DairySlider.js";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./EntryPage.css";
import { Link } from "@reach/router";

const EntryPage1 = () => {
    const handleClick = () => {
        console.log("ayo");
        sessionStorage.setItem("slider", 40);
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

    const getData = (data) => {
        console.log(data);
    }

    return (
        <>
            <h6 className="EntryPageHeader">ANIMAL PRODUCTS</h6>
            <h2 className="EntryPageQuestion">How often did you eat meat?</h2>
            <Slider handleChange={getData} />
            <br />
            <MeatModal />
            <br />
            <h2 className="EntryPageQuestion">How often did you consume eggs and/or dairy products?</h2>
            <DairySlider />

            <Link to="/entry/2" className="RightArrowContainer" 
                onMouseOver = { handleRightArrowHover } 
                onClick = { handleClick }>
                <div className="RightArrow" />
            </Link>

        </> 
    );
};

export default EntryPage1;