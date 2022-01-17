import React, { useState, useEffect } from "react";
import { get } from "../../utilities";
import "./Card.css";
import "./Stats.css";

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
        <div className = "Stats-container">
            <div className = "Stats-box">
                <span className = "Stats-labels">
                    Best Score:
                </span>
                <span className ="Stats-data">{min}</span>
            </div>
            <p> </p>
            <div className = "Stats-box">
                <span className = "Stats-labels">
                    Average: 
                </span>
                <span className ="Stats-data">{Math.round(avg)}</span>
            </div>
            <p> </p>
            <div className = "Stats-box">
                <span className = "Stats-labels">
                    Precent Improval: 
                </span>
                <span className ="Stats-data">{}</span>
            </div>
        </div>
    )
}
export default Stats;