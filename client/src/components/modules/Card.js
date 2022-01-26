import React, { useState, useEffect } from "react";
import { get } from "../../utilities";
import "./Card.css";
import "./NavBar.css"
const Card = (props) => {
    let score = Math.round(props.entryObj.score)
    return (
        <div className = "CardL-container parent">
            <span className = "Card-score">
                {score} 
            </span>
            <span className = "Card-scoreText">
                Emission Score
            </span>
            <span className = "Card-date child">
                 {String(props.entryObj.timestamp).substring(5,10)}-{String(props.entryObj.timestamp).substring(0,4)}
            </span>
            
        </div>
    )
}
export default Card;