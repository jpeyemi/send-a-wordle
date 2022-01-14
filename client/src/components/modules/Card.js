import React, { useState, useEffect } from "react";
import { get } from "../../utilities";
import "./Card.css";
const Card = (props) => {
    return (
        <div className = "Card-container">
            <span className = "Card-score">
                {props.entryObj.score} 
            </span>
            <span className = "Card-scoreText">
                Emission Score
            </span>
            <span className = "Card-date">
                 {props.entryObj.timestamp.substring(5,10)}-{props.entryObj.timestamp.substring(0,4)}
            </span>
            
        </div>
    )
}
export default Card;