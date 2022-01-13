import React, { useState, useEffect } from "react";
import { get } from "../../utilities";
import "./Card.css";
const Card = (props) => {
    return (
        <div className = "Card-container">
            {props.entryObj.timestamp}
            <p> </p>
            {props.entryObj.score} Emission Score
        </div>
    )
}
export default Card;