import React, { useState, useEffect } from "react";
import { get } from "../../utilities";
import "./Card.css";

const Stats = (props) => {
    let min = props.scores[0];
    let avg = 0
    for (let i = 0; i < props.scores.length ; i++){
        avg += props.scores[i]
    }
    avg/=props.scores.length
    for (let i = 0; i < props.scores.length ; i++){
        if(props.scores[i] < min){
            min = props.scores[i]
        }
    }
    return(
        <div className = "Card-container">
            Best Score: {min}
            <p> </p>
            Average: {Math.round(avg)}
            <p> </p>
            Percent Improval: {}
        </div>
    )
}
export default Stats;