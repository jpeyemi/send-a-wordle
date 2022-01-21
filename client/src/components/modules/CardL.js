import React, { useState, useEffect } from "react";
import { get } from "../../utilities";
import "./Card.css";
const CardL = (props) => {
    if(props.avg < 101){
    return (
        <div className = "Card-container">
            <span className = "Card-score">
                 {props.map[props.userId]}
            </span>
            <span className = "Card-score">
                {props.avg} 
            </span>
            <span className = "Card-scoreText">
                Average Emission Score
            </span>
            
        </div>
    )
    }else{
        return(null)
    }
}
export default CardL;