import React, { useState, useEffect } from "react";
import Card from "../modules/Card.js";
import { NewEntry } from "../modules/NewPostInput.js";
import { get } from "../../utilities";
import Stats from "../modules/Stats.js";
import { Link } from "@reach/router";
import "../App.css"
//import Chart from "../modules/Chart.js";
import Graph from "../modules/Graph.js";
//import other components tbd



const Journey = (props) => { //pass user info to Journey
    const [entries, setEntries] = useState([]);
    const [scores, setScores] = useState([]);
    const [data, setData] =useState([]);

    const makeScores = (entryObjs) => {
        let scores = entryObjs.map((entryObj) => (
            Number(entryObj.score)
        ));
        setScores(scores)
    }
    const makeData = (entryObjs) => {
        let dict = {}
        let time = " "
        for(let entry in entryObjs){
            time = String(entryObjs[entry].timestamp).substring(0,10)
            if(Object.keys(dict).includes(time)){
                dict[time] = [dict[time][0]+entryObjs[entry].score, dict[time][1]+1]
            }else{
                dict[time] = [entryObjs[entry].score, 1]
            }
        }
        for(let key in dict){
            dict[key] = dict[key][0]/dict[key][1]
        }
        setData(dict);
    }

    useEffect(() => {
        get("/api/entries", {user: props.userId}).then((entries) => {
            setEntries(entries.reverse());
            makeScores(entries);
            makeData(entries);
        });//may change depending on format of passed user info
    }, []);


    const addNewEntry = (entryObj) => {
        setEntries([entryObj].concat(entries));
        makeScores([entryObj].concat(entries));
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
            {<Graph data={data}/>}
            {<Stats scores={scores} />}
            <Link to="/entry/1">
                Entry
            </Link>
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