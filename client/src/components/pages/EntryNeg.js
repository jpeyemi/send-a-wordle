import React, { useState, useEffect } from "react";
import MeatModal from "../modules/MeatModal.js";
import DivineSliderTheSliderToEndAllSliders from "../modules/DivineSliderTheSliderToEndAllSliders.js";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./EntryPage.css";
import { Link } from "@reach/router";

const EntryNeg = (props) => {

    document.body.style = 'background: #D9E2DC;';
    
    

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
        <div className="EntryNeg-Header">How to Use this Calculator</div>
                <div className="EntryNeg-Underline"></div>

                <div className='steps'>
  <div className='step-item step-one'>
   <div className="stepfirstContainer"> 
    <div className="stepfirst"></div>
   </div>
      <div className = "stepTextBolded stepOne">1. Choose a Date</div>
      <div className = "stepText stepOne">By default, your daily entry will be logged for the current date. 
      However, you will have the option to log an entry for a previous date.</div>
  </div>
  <div className='step-item step-two'>
  <div className="stepsecondContainer">
     <div className="stepsecond"></div>
     </div>
     <div className = "stepTextBolded stepTwo">2. Log your Daily Intake</div>
      <div className = "stepText stepTwo">Answer a few questions to log what you ate or drank that day.</div>
  </div>
  <div className='step-item step-three'>
  <div className="stepthirdContainer"> 
    <div className="stepthird"></div>
    </div>
  <div className = "stepTextBolded stepThree">3. Calculate your Score</div>
      <div className = "stepText stepThree">Our calculator will use your input to generate your Emission 
      Score - a score from 0 to 100 that represents your impact on the Amazon. The lower the score, 
      the better!</div>
  </div>
</div>

            <Link to="/entry/0" className="RightArrowContainer" 
                onMouseOver = { handleRightArrowHover } >
                <div className="RightArrow" />
            </Link>
        </div>
        </> 
    );
};

export default EntryNeg;