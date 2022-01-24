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
            <div className = "Stats-title">
                {props.kind}
            </div>
            <div>
                <span className = "Stats-labels">
                    Best Score:
                </span>
                <span className ="Stats-data">{min}</span>
            </div>
            <div>
                <span className = "Stats-labels">
                    Average: 
                </span>
                <span className ="Stats-data">{Math.round(avg)}</span>
            </div>
                
        </div>
    )
}
export default Stats;