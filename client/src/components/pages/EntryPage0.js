import React, { useState, useEffect } from "react";
import MeatModal from "../modules/MeatModal.js";
import DivineSliderTheSliderToEndAllSliders from "../modules/DivineSliderTheSliderToEndAllSliders.js";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./EntryPage.css";
import { Link } from "@reach/router";
import DateSelector from "../modules/DateSelector.js"

const EntryPage0 = (props) => {

    document.body.style = 'background: #D9E2DC;';
    
    const [entryDate, setD] = useState(new Date());

    const datesel = (date) =>{
        console.log("at datesel");
        setD(date)
        sessionStorage.setItem("date", entryDate.toString());
        console.log(date);
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
        <div className="EntryNeg-Header">Choose a Date</div>
                <div className="EntryNeg-Underline"></div>

                <div className="DateInput">
                Entry Date:
                <DateSelector datesel = {datesel}/>
            </div>
                
<Link to="/entry/1" className="RightArrowContainer" 
                onMouseOver = { handleRightArrowHover } >
                <div className="RightArrow" />
            </Link>

            <Link to="/entry/00" className="LeftArrowContainer" 
                onMouseOver = { handleLeftArrowHover } >
                <div className="LeftArrow" />
        
            </Link>
        </div>
        </> 
    );
};

export default EntryPage0;