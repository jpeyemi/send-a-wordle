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
    const [data, setData] =useState({});

    const makeScores = (entryObjs) => {
        let scores = entryObjs.map((entryObj) => (
            Number(entryObj.score)
        ));
        setScores(scores)
    }
    const makeData = (entryObjs) => {
        //let data = {}
        let time = " "
        for(let entry in entryObjs){
            time = String(entryObjs[entry].timestamp).substring(0,10)
            if(Object.keys(data).includes(time)){
                data[time] = [data[time][0]+entryObjs[entry].score, data[time][1]+1]
            }else{
                data[time] = [entryObjs[entry].score, 1]
            }
        }
        for(let key in data){
            data[key] = data[key][0]/data[key][1]
        }
        setData(data);
    }

    useEffect(() => {
        get("/api/entries", {user: props.userId}).then((entries) => {
            setEntries(entries.reverse());
            makeScores(entries);
            makeData(entries.reverse());
        });//may change depending on format of passed user info
    }, []);


    const addNewEntry = (entryObj) => {
        setEntries([entryObj].concat(entries.reverse()));
        makeScores([entryObj].concat(entries));
        makeData(entries.concat([entryObj]));
    };

    let entriesList = null;
    let graph = null;
    const hasEntries = entries.length !== 0;
    if (hasEntries) {
        entriesList = entries.map((entryObj) => (
        <Card
            entryObj = {entryObj}
            userId = {props.userId}
            _id = {entryObj._id}
        />
    ));
        graph = (<Graph data={data}/>)
    } else {
        entriesList = <div>No Entries Yet!</div>;
    }

    
    
    return(
        <>
            {graph}
            {<Stats scores={scores}/>}
            {/*<span className="u-inlineBlock">
            {<Stats scores={scores} />}
            </span>
    <span className="u-inlineBlock">{graph}</span>*/}
            <div>
            <Link to="/entry/1">
                Entry
            </Link>
            </div>
            {/*props.userId && <NewEntry addNewEntry={addNewEntry} userId = {props.userId}/>*/}
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