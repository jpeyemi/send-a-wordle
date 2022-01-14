import React, { useState, useEffect } from "react";
import Card from "../modules/Card.js";
import { NewEntry } from "../modules/NewPostInput.js";
import { get } from "../../utilities";
import Stats from "../modules/Stats.js";
import "../App.css"
//import other components tbd



const Journey = (props) => { //pass user info to Journey
    const [entries, setEntries] = useState([]);
    const [scores, setScores] = useState([]);

    const makeScores = (entryObjs) => {
        let scores = entryObjs.map((entryObj) => (
            Number(entryObj.score)
        ));
        setScores(scores)
    }

    useEffect(() => {
        get("/api/entries", {user: props.userId}).then((entries) => {
            setEntries(entries.reverse());
            makeScores(entries)
        });//may change depending on format of passed user info
    }, []);


    const addNewEntry = (entryObj) => {
        setEntries([entryObj].concat(entries));
        makeScores([entryObj].concat(entries))
    };

    let entriesList = null;
    const hasEntries = entries.length !== 0;
    if (hasEntries) {
        entriesList = entries.map((entryObj) => (
        <Card
            entryObj = {entryObj}
            userId = {props.userId}
            _id = {entryObj._id}
        />
    ));
    } else {
        entriesList = <div>No Entries Yet!</div>;
    }
    return(
        <>
            {<Stats scores={scores} />}
            {props.userId && <NewEntry addNewEntry={addNewEntry} userId = {props.userId}/>}
            <div className ="App-entryContainer">
                <div className = "App-entryTitle">
                    Entries
                </div>
                {entriesList}
            </div>
            
        </>
    )

    //using feed.js as basis
    //card component to create list of entries

}
export default Journey;