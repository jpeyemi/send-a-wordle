import React, { useState, useEffect } from "react";
import { useMediaPredicate } from "react-media-hook";
import "./CreateModal.css";

const OpenButton = (props) => {
    const lt500 = useMediaPredicate("(max-width: 500px)");
    const lt330 = useMediaPredicate("(max-width: 330px)");

    return (
        <>
            {(lt330 && lt500) && <span onClick = {props.onClick} className = "startButton szSmall"> {props.text} </span>}
            {(lt500 && !lt330) && <span onClick = {props.onClick} className = "startButton sz"> {props.text} </span>}
            {!lt500 && <span onClick = {props.onClick} className = "startButton szLarge"> {props.text} </span>}
        </>
    );
};

export default OpenButton;