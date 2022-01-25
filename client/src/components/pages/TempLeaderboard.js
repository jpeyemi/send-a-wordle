import React, { useState, useEffect } from "react";
import MeatModal from "../modules/MeatModal.js";
import DivineSliderTheSliderToEndAllSliders from "../modules/DivineSliderTheSliderToEndAllSliders.js";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Temp.css";
import { Link } from "@reach/router";

const Temp = (props) => {
    return (
        <>
        <div className="Leaderboard-Header"> LEADERBOARDS </div>
        <div class='footer'>
            <div class='footer-item footer-one'>
                <span className="Leaderboard-SubHeader"> Best Score </span>
            </div>
            <div class='footer-item footer-two'>

            </div>
            <div class='footer-item footer-three'>

            </div>
        </div>
        </> 
    );
};

export default Temp;