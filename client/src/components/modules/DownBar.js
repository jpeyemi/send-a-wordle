import { Link } from "@reach/router";
import React, { useState, useEffect } from "react";

import "./DownBar.css";
import "../../utilities.css";
//import { indexOf } from "core-js/core/array";

const DownBar = (props) => {
  
  return (
    <nav className="DownBar-container">
        <div class='downer'>
            <div class='downer-item'>
                <div className = "DownContainer"> 
                    <div className="DownPhoto"></div> 
                </div>
            </div>
        </div>
        
    </nav>
  );
};

export default DownBar;
