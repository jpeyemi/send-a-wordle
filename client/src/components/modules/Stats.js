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
    let wavg = 0
    for (let i = 0; i < props.wscores.length ; i++){
        wavg += props.wscores[i]
    }
    wavg/=props.wscores.length

    return(
        <div className = "Stats-container">
                <span className = "Stats-labels">
                    Best Score:
                </span>
                <span className ="Stats-data">{min}</span>
                <span className = "Stats-labels">
                    Average: 
                </span>
                <span className ="Stats-data">{Math.round(avg)}</span>
                <span className = "Stats-labels">
                    Last 7 Entries Avg: 
                </span>
                <span className ="Stats-data">{Math.round(wavg)}</span>
                
        </div>
    )
}
export default Stats;