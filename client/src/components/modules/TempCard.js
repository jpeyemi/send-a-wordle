import "./Card.css";
import React, { useState, useEffect } from "react";
import { get } from "../../utilities";
import "../pages/Leaderboard.css";
import "./Temp.css";
import "../../utilities.css";

const TempCard = (props) => {
    let container = ["CardL-container1", "CardL-container2", "CardL-container3"]
    const placing = (num) => {
        let res = null
        if(num%10 == 1){
            res = String(num)+"st" 
        }else if( num%10 == 2){
            res = String(num)+"nd"
        }else if(num%10==3){
            res = String(num)+"rd"
        }else{
            res = String(num)+"th"
        }
        return res
    }
    
    let rank = props.place+1;
    if(props.avg < 101){
        if(props.place === 0){
            return( 
                <div className = "TempCard-container1">
                    <span className = "TempLeft">
                        {rank}
            </span>
                    <span className = "TempCenter">
                        {props.map[props.userId]}
                    </span>
                    <span className = "TempRight">
                        {props.avg} 
        </span>
                    
                </div>
            )
        }
    return (
        <div className = "TempCard-container1">
            <span className = "TempLeft">
                {rank}
            </span>
            <span className = "TempCenter">
                 {props.map[props.userId]}
            </span>
            <span className = "TempRight">
                {props.avg} 
            </span>
            
        </div>
    )
    }else{
        return(null)
    }
}
export default TempCard;