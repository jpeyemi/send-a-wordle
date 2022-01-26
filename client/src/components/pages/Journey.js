import React, { useState, useEffect } from "react";
import Card from "../modules/Card.js";
import { NewEntry } from "../modules/NewPostInput.js";
import { get, post } from "../../utilities";
import Stats from "../modules/Stats.js";
import { Link } from "@reach/router";
import "../App.css"
import Graph from "../modules/Graph.js";
import "../modules/Stats.css"
import "./Journey.css"
import { Button } from "react-bootstrap";
import { Chart } from "chart.js";
import * as Chartjs from "chart.js";
import 'chartjs-adapter-moment';
const controllers = Object.values(Chartjs).filter(
    (chart) => chart.id !== undefined
  );
  
  Chart.register(...controllers);



const Journey = (props) => {
    const [entries, setEntries] = useState([]);
    const [scores, setScores] = useState([]);
    const [wscores, setWScores] = useState([]);
    const [mscores, setMScores] = useState([]);
    const [data, setData] = useState({});
    const [limit, setLimit] = useState(7);
    const [ent, setEnt] = useState([]);
    const [saul, setSaul] = useState({});
    const [x, setX] = useState([]);
    const [y,setY] = useState([]);
    document.body.style = 'backround var(--primary--dim)'
    const makeScores = (entryObjs) => {
        let scores = entryObjs.map((entryObj) => (
            Number(entryObj.score)
        ));
        let wentryObjs = entryObjs.slice(-7)
        let wscores = wentryObjs.map((wentryObj) => (
            Number(wentryObj.score)
        ));
        let mentryObjs = entryObjs.slice(-30)
        let mscores = mentryObjs.map((mentryObj) => (
            Number(mentryObj.score)
        ));
        setMScores(mscores)
        setWScores(wscores)
        setScores(scores) 
    }
    const makeData = (entryObjs) => {
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
            let time = ' '
            let entriez = entries.sort((a,b) => new Date(a.timestamp) - new Date(b.timestamp))
            for(let i = 0; i<entriez.length;i++){
                time = String(entriez[i].timestamp).substring(0,10)
                saul[time] = i
            }
            for(let i = 0; i < Object.keys(saul).length; i++){
                ent.push(entriez[saul[Object.keys(saul)[i]]])
            }
            setEntries(ent.reverse());
            makeScores(ent.reverse());
            makeData(ent.reverse());
            setX(ent.map((e)=> (
                e.timestamp
            )))
            setY(ent.map((e)=> (
                e.score
            )))
        });
    }, []);

    let entriesList = null;
    let graph = null;
    let grapht = null;
    let grapha = null;
    const hasEntries = entries.length !== 0;
    if (hasEntries) {
        entriesList = entries.map((entryObj) => (
        <Card
            entryObj = {entryObj}
            userId = {props.userId}
            _id = {entryObj._id}
        />
    ));
        graph = (<Graph data={data} limit = {7} />)
        grapht = (<Graph data={data} limit = {30} />)
        grapha = (<Graph data={data} limit = {Number.MAX_SAFE_INTEGER} />)

    } else {
        entriesList = <div>No Entries Yet!</div>;
    }
    const all = () => {
        setLimit(Number.MAX_SAFE_INTEGER)
    }
    const seven = () => {
        setLimit(7)
    }
    const thirty = () => {
        setLimit(30)
    }
    
   /* useEffect(()=>{
        let x = new Date()
        let days = []
        let scores = []
        for(let i = 0; i < 40; i++){
            days.push(x - new Date(i*86400000))
            scores.push(80-(2*i)+ Math.round(Math.random()*20))
            if(Math.random()>.8){
                i++;
            }
        }
        console.log(days)
        console.log(scores)
        console.log(days.length)
        let body = {}
        scores = scores.reverse()
        for(let j = 0; j< days.length; j++)
        {
            console.log("ayo");
            body = {score: scores[j], creator_id: props.userId, timestamp: days[j]};
            console.log(body)
            console.log()
            post("/api/entry", body)
        }
    },[]);*/

    return(
        <>
            
            { entries.length !== 0 ? 
            (<>
<div className="Journey-Header-Sama"> Your Journey 
            <div className="Journey-Underline-Sama"> </div></div>
            <div className ="App-Graph">
            { limit === 7 ? (
                <>
                {graph}
                </>
            ):(
                <>
                </>
            )}
            {limit === 30 ? (
                        <>
                        {grapht}
                        </>
                    ):(
                        <></>
                    )}
            {limit > 31 ? (
                <>
                {grapha}
                </>):(
                    <></>
                )}
                
            </div>
            
            <div className="App-Stats info-container">
                Your Emission Score quantifies the negative contributions of the food you eat to preserving of the Amazon. 
                Make it your goal to minimize your score and help protect the forest.
            </div>
            <div className = "App-Stats">
                <span className="u-inlineBlock App-Statsspacing">
                {<Button onClick = {seven} className ="btn-GraphButton btn-outline-*">
                {<Stats scores={wscores} kind="Last 7 Entries"/>}
                </Button>}
                </span>
                <span className="u-inlineBlock App-Statsspacing">
                {<Button onClick = {thirty} className ="btn-GraphButton">
                {<Stats scores={mscores} kind="Last 30 Entries"/>}
                </Button>}
                </span>
                <span className ="u-inlineBlock App-Statsspacing">
                {<Button onClick = {all} className ="btn-GraphButton">
                {<Stats scores={scores} kind="All Time"/>}
                </Button>}
                </span>
            </div>
            <div className ="App-entryContainer">
                <div className = "App-entryTitle">
                    Past Entries
                </div>
                {entriesList}
            </div>

            </>):
            (<> 

<div className="Journey-Header-Sama">Log your first entry!</div>
                <div className="Journey-Underline-Sama"></div>
                <div className = "centering"> <Link to="/entry/1" className="Journey-Button">Start your Journey</Link> </div>

            </>)}
            
            
        </>
    )

    //using feed.js as basis
    //card component to create list of entries

}
export default Journey;