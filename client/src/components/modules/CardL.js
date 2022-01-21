import React, { useState, useEffect } from "react";
import { get } from "../../utilities";
import "./Card.css";
import "../pages/Leaderboard.css";
const CardL = (props) => {
    let container = ["CardL-container1", "CardL-container2", "CardL-container3"]
    let text = ["Lt1", "Lt2", "Lt3"]
    const placing = (num) => {
        let res = null
        if(num%10 == 1){
            res = String(num)+"st" 
        }else if( num%10 == 2){
            res = String(num)+"nd"
        }else if(num%10==3){
            res = String(num)+"rd"
        }else{
            res = String(num)+"st"
        }
        return res
    }
    
    let rank = placing(props.place+1)
    if(props.avg < 101){
        if(props.place <3){
            return( 
                <div className = {container[props.place]}>
                    <span className = "Lt0">
                        {rank}
                    </span>
                    <span className = "Lt0">
                        {props.map[props.userId]}
                    </span>
                    <span className = "CardL-score">
                        {props.avg} 
                    </span>
                    
                </div>
            )
        }
    return (
        <div className = "CardL-container">
            <span className = "Lt">
                {rank}
            </span>
            <span className = "Lt">
                 {props.map[props.userId]}
            </span>
            <span className = "CardL-score">
                {props.avg} 
            </span>
            
        </div>
    )
    }else{
        return(null)
    }
}
export default CardL;