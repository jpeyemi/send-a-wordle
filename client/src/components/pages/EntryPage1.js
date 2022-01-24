import React, { useState, useEffect } from "react";
import MeatModal from "../modules/MeatModal.js";
import DivineSliderTheSliderToEndAllSliders from "../modules/DivineSliderTheSliderToEndAllSliders.js";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./EntryPage.css";
import { Link } from "@reach/router";

const EntryPage1 = (props) => {

    document.body.style = 'background: #D9E2DC;';
    const keys = ["meat", "beef", "lamb", "pork", "poultry", "dairy", "non", "rice", "soy", "oat", "almond", "local"];
    const isTouched = ["meatTouched", "veganTouched"];
    const foods = ["acai", "cocoa", "nuts", "gua"];

    //const mapV = ["Never", "Rarely", "Sometimes", "Often",  "Very Often"];
    const mapV = [1, 2, 3, 4, 5];
    const mapL = [0, 1, 34, 67, 100]
    const mapU = [0, 33, 66, 99, 100];

    console.log(props.userId);

    const [isLoaded, setLoaded] = useState(false);
    
    const findTxt = (num) => {
        for (let i = 0; i < mapV.length; i++) {
            if (num >= mapL[i] && num <= mapU[i]) {
                return mapV[i];
            }
        }
    }

    const [servings, setServings] = useState({});

    useEffect(() => {
        setUp().then((loaded) => setLoaded(true));
    }, [setLoaded]);

    const setUp = () => {
        for (const key of keys) {
            if (!sessionStorage.getItem(key)) {
                sessionStorage.setItem(key, 20);
            }
        }
        for (const food of foods) {
            sessionStorage.setItem(food, false);
        }
        for (const t of isTouched) {
            sessionStorage.setItem(t, false);
        }
        return Promise.resolve();
    }
    
    const serv = (type, servs) => {
        servings[type] = servs;
        //console.log(console.log(JSON.stringify(servings)));
    };

    const handleRightArrowHover = () => {
        document.querySelector('.RightArrow').animate([
            {left: '0'},
            {left: '10px'},
            {left: '0'}
        ],{
            duration: 700,
            iterations: 2
        });
    }

    const handleLeftArrowHover = () => {
        document.querySelector('.LeftArrow').animate([
            {left: '0'},
            {left: '10px'},
            {left: '0'}
        ],{
            duration: 700,
            iterations: 2
        });
    }

    const handleClick = () => {
        /*for (const [key, value] of Object.entries(servings)) {
            sessionStorage.setItem(key, value);
        }*/
        /*for (let i = 0; i < sessionStorage.length; i++) {
            console.log(JSON.stringify(sessionStorage.key(i)) + ", " + sessionStorage.getItem(sessionStorage.key(i)));
        }*/
    }

    return (
        <>
        <div className="entryBody">
            <h6 className="EntryPageHeader">ANIMAL PRODUCTS</h6>
            <h2 className="EntryPageQuestion">How often did you eat meat?</h2>
            {/*<Slider handleChange={getData} />*/}
            {isLoaded && <DivineSliderTheSliderToEndAllSliders id='meat' save={serv} servs={servings} find = {findTxt}/>}
            <br />
            <MeatModal serv={serv} servs={servings} find = {findTxt}/>
            <br />
            <h2 className="EntryPageQuestion">How often did you consume eggs and/or dairy products?</h2>
            {/*<DairySlider />*/}
            {isLoaded && <DivineSliderTheSliderToEndAllSliders id='dairy' save={serv} servs={servings} find = {findTxt}/>}

            <Link to="/entry/2" className="RightArrowContainer" 
                onMouseOver = { handleRightArrowHover } 
                onClick = { handleClick }>
                <div className="RightArrow" />
            </Link>
        </div>
        </> 
    );
};

export default EntryPage1;