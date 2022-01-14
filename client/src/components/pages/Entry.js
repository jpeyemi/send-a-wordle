import React, { useState, useEffect } from "react";
import MeatModal from "../modules/MeatModal.js";

const Entry = (props) => {
    return (
        <>
            <h1>Quiz</h1>
            <h4>Question 1</h4>
            <div>
                <input type = "range" min = "0" max = "100" onInput = "rangeValue.innerText = this.value" /> 
            </div>
            <MeatModal />
        </>
    );
};

export default Entry;