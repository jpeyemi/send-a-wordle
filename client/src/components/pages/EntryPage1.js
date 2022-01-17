import React, { useState, useEffect } from "react";
import MeatModal from "../modules/MeatModal.js";
import DivineSliderTheSliderToEndAllSliders from "../modules/DivineSliderTheSliderToEndAllSliders.js";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./EntryPage.css";
import { Link } from "@reach/router";

const EntryPage1 = () => {
    
    const [servings, setServings] = useState({})
    const serv = (type, servs) => {
        servings[type] = servs;
        console.log(servings);
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

    const getData = (data) => {
        console.log(data);
    }

    return (
        <>
            <h6 className="EntryPageHeader">ANIMAL PRODUCTS</h6>
            <h2 className="EntryPageQuestion">How often did you eat meat?</h2>
            {/*<Slider handleChange={getData} />*/}
            <DivineSliderTheSliderToEndAllSliders id='meat' save={serv} servs={servings}/>
            <br />
            <MeatModal serv={serv} servs={servings}/>
            <br />
            <h2 className="EntryPageQuestion">How often did you consume eggs and/or dairy products?</h2>
            {/*<DairySlider />*/}
            <DivineSliderTheSliderToEndAllSliders id='dairy' save={serv} servs={servings}/>

            <Link to="/entry/2" className="RightArrowContainer" 
                onMouseOver = { handleRightArrowHover } >
                <div className="RightArrow" />
            </Link>

        </> 
    );
};

export default EntryPage1;