//import React, { Component } from "react";
import React, { useState, useEffect } from "react";
import "./Play.css";
import Row from "../modules/Row.js";

const Play = (props) => {
    const [rows, setRows] = useState([]);
    const [words, setWords] = useState([]);
    const [wordString, setWs] = useState('');
    const [wordStringL, setWsl] = useState('');
    const [completed, setCompleted] = useState(true);
    const [count, setty] = useState('');
    const wordLength = 5;
    //let rows = null;
    //let words = ['JAZZY', 'XYLEM', 'SHORT','FU','',''];
    //setWords(['JAZZY', 'XYLEM', 'SHORT','FU','',''])
    /*useEffect(() => {
        let words =[];
        let wordString = '';
        let completed = true;
    }, [words]);
    const setWords = (x) => {
        words = x;
    } 
    const setWs = (x) => {
        wordString = x;
    } 
    const setCompleted = (x) => {
        completed = x;
    } */
    useEffect(() => {
        let active = wordStringL.indexOf(' ')/wordLength;
        console.log(active)
        setRows( words.map((w) => (
            <Row
                word = {w}
                length = {wordLength}
                state = {words.indexOf(w)<=active}
            />
            //creates row features
        )))
    }, [words]);

    useEffect(() => {
        let temp = wordString;
        while(temp.length < wordLength*6){
            temp = temp+' ';
        }
        setWsl(temp);
        let temp2 = [];
        for (let i = 0, charsLength = temp.length; i < charsLength; i += wordLength) {
            temp2.push(temp.substring(i, i + wordLength));
        }
        console.log(temp2);
        setWords(temp2);
    }, [wordString]);

    /*rows = words.map((w) => (
        <Row
            word = {w}
            length = {5}
        />
        //creates row features
    ));*/
    let keysR1 = ('QWERTYUIOP').split('')
    let keysR2 = ('ASDFGHJKL').split('')
    let keysR3 = ('1ZXCVBNM0').split('')

    const handleClick = (x) => {
        //console.log(x);
        console.log(wordString);
        if(wordString.length%wordLength === 0){
            if(completed){
                if(x == 0 || x == 1){
                    return
                }
                setWs(wordString+x); 
                setCompleted(false);
            }else{
                if(x == 0){
                    setWs(wordString.slice(0,-1))
                }else if(x == 1){
                    //compare to valid word database here
                    // placeholder for check function
                    setCompleted(true);
                }else{
                    return;
                }
            }
        }else if(x == 0){
            if(wordString.length !== 0){
                if(wordString.length%wordLength === 1){
                    setCompleted(true);
                }
                setWs(wordString.slice(0,-1))
            }
        }else if(x == 1){
            //something to say word is not complete
            console.log("word not complete");
        }else{
            setWs(wordString+x);
        }
        //handles onscreen button click
    }
    

    const RowsK = (x) => {
        let bttn = null
        if(x == 0){
            bttn = (
                <div onClick = {() => {handleClick(x)}} className = "Play-KeyTile Back">
                    Back
                </div>
            )
        }else if(x == 1){
            bttn = (
                <div onClick = {() => {handleClick(x)}} className = "Play-KeyTile Enter">
                    Enter
                </div>
            )
        }else{
            bttn = (
            <div onClick = {() => {handleClick(x)}} className = "Play-KeyTile">
                {x}
            </div>
            )
        }
        return(bttn);
    }
    let keyboardR1 = keysR1.map((w) => (
        RowsK(w)
    ));
    let keyboardR2 = keysR2.map((w) => (
        RowsK(w)
    ));
    let keyboardR3 = keysR3.map((w) => (
        RowsK(w)
    ));
    /*const keyBoard = document.querySelector('.keyboard')
    
    if(keyBoard){
        console.log("here");
        keyBoard.addEventListener('keydown', e => {
            let name = e.key;
            let code = e.code;
            console.log(name);
            if(code < 91 && code > 64){
                handleClick(name.toUpperCase());
            }
        })
    }*/
    let validLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    /*function kmn(e){
        let name = e.key;
        let code = e.code;
        console.log(e.key)
        if(validLetters.includes(name)){
            console.log('here')
            handleClick(name.toUpperCase());
            //allowed = false;
        }else if(code == "Enter"){
            handleClick('1');
        }else if(code == "Backspace"){
            handleClick('0');
        }
        window.removeEventListener('keyup', kmn);
        setty(count+' ');
        
    }
    //let allowed = true;
    //need to control repeats so keystroke only causes one key input on being held
    //for useability i dont want to use keyup
    useEffect(() => {
        window.addEventListener('keyup', kmn)
    }, [count]);*/

    useEffect(() => {
        const handle = (e) => {
            let name = e.key;
            let code = e.code;
            console.log(e.key)
            if(validLetters.includes(name)){
                console.log('here')
                handleClick(name.toUpperCase());
                //allowed = false;
            }else if(code == "Enter"){
                handleClick('1');
            }else if(code == "Backspace"){
                handleClick('0');
            }
        }
        window.addEventListener('keyup', handle)
        return () => {
            window.removeEventListener('keyup', handle)
        }
    }, [handleClick])

    /*document.addEventListener('keyup', e => {
        let name = e.key;
        let code = e.code;
        allowed = true;
    })*/
    
    
    

    return(
        <>
        <div className="Play-Container">
            <div className = "Play-BoardContainer">
                <div className = "Play-Board">
                    {rows}
                </div>
            </div>
            <div className = "Play-KeyboardContainer">
                <div className = "Play-Keyboard">
                    <div className = "Play-KeyboardRow1">
                        {keyboardR1}
                    </div>
                    <div className = "Play-KeyboardRow2">
                        {keyboardR2}
                    </div>
                    <div className = "Play-KeyboardRow3">
                        {keyboardR3}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Play;