import React, { useState, useEffect } from "react";
import Card from "../modules/Card.js";
import { NewEntry } from "../modules/NewPostInput.js";
import { get } from "../../utilities";
import Stats from "../modules/Stats.js";
import { Link } from "@reach/router";
import "../App.css"
//import Chart from "../modules/Chart.js";
import Graph from "../modules/Graph.js";
import "../modules/Stats.css"
import { Button } from "react-bootstrap";
//import other components tbd
import { Chart } from "chart.js";
import * as Chartjs from "chart.js";
import 'chartjs-adapter-moment';
const controllers = Object.values(Chartjs).filter(
    (chart) => chart.id !== undefined
  );
  
  Chart.register(...controllers);



const Journey = (props) => { //pass user info to Journey
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
        console.log(wentryObjs)
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
        /*for(let entry in entryObjs){
            time = String(entryObjs[entry].timestamp).substring(0,10)
            data[time] = entryObjs[entry].score
        }*/
        setData(data);
    }

    useEffect(() => {
        get("/api/entries", {user: props.userId}).then((entries) => {
            let time = ' '
            console.log(entries)
            let entriez = entries.sort((a,b) => new Date(a.timestamp) - new Date(b.timestamp))
            console.log(entriez)
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
        });//may change depending on format of passed user info
    }, []);


    /*const addNewEntry = (entryObj) => {
        setEntries([entryObj].concat(entries.reverse()));
        makeScores([entryObj].concat(entries));
        makeData(entries.concat([entryObj]));
    };*/

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
        graph = (<Graph data={data} limit={limit}/>)
    } else {
        entriesList = <div>No Entries Yet!</div>;
    }
    const niamh = () => {
        console.log("niamh")
    }
    const all = () => {
        setLimit(Infinity)
        console.log("all")
    }
    const seven = () => {
        setLimit(7)
    }
    const thirty = () => {
        setLimit(30)
    }
    useEffect(() => {
        //graph = (<Graph data={data} limit={limit}/>)
        console.log("sama bad")
    }, [limit])


    /*let myChart = document.getElementById('myChart')
    const[graph,setGraph] = useState();
    const[exist,setExist] = useState(false);
  
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>;

    useEffect(()=> {
        console.log(get("../api/whoami"));
        console.log(data);
        console.log(limit)
        console.log(Object.keys(data))
        let xValues = null;
        let yValues = null;
        let xValues = entries.map((ent) => (
            ent.timestamp.substring(0,10)
        ));
        let yValues = entries.map((ent) => (
            ent.score
        ));
        console.log(xValues)
        get("../api/whoami").then((am) => {
            if(am !== {} && !exist){
                xValues = Object.keys(data).reverse().slice(-limit)
                let xval = xValues.map((val) => (
                  new Date(val)
                ));
              
                yValues = Object.values(data).reverse().slice(-limit)
                console.log(xValues)

                let myChart = document.getElementById('myChart')
                console.log(x)
                setGraph(new Chart(myChart, {
                    type: "line",
                    data: {
                        labels: x,
                        datasets: [{
                            label: "Emmision Score",
                            backgroundColor: "rgba(0,90,0,1.0)",
                            borderColor: "rgba(0,90,0,.2)",
                            data: y,
                        }]
                    },
                    options:{
                        legend: {display: true},
                        title: {
                          font: {
                            size: 20,
                            
                          },
                        },
                        tooltips: {
                          titleFontSize: 14,
                          //not working
                        },
                        plugins: {
                            title: {
                              display: true,
                              text: 'Your Progress',
                              font: {
                                size: 30,
                                family: "Inter",
                              },
                            }
                          },
                          scales: {
                            //adapters.date, 
                            x: {
                                type: 'time',
                                time: {
                                  unit: 'day'
                                },
                                title: {
                                    display: true,
                                    text: 'Date'
                                  }
                                },
                            y: {
                              min: 0,
                              max: 100,
                            }
                          }
                    }
                }) )
                setExist(true);
            }});
    } ,[exist]);
    useEffect(() => {
      if(exist){
        graph.data.labels.pop();
        graph.data.labels.push(x)
        graph.data.datasets.pop();
        graph.data.datasets.push(y)
        //graph.update();
        graph.destroy()
    }
    }, [x,y])*/
    
    
    return(
        <>
            <div className ="App-Graph">
                {/*<canvas id="myChart" height="175"></canvas>*/}

                {graph}
                {/*<Graph data={data} limit={limit}/>*/}
                
            </div>
            <div className="App-Stats info-container">
                Your Emission Score quantifies the negative contibutions of the food you eat to the preservation of the Amazon. 
                Make it your goal to minimize your score and help protect the forest.
            </div>
            <div className = "App-Stats">
                <span className="u-inlineBlock App-Statsspacing">
                {<Stats scores={wscores} kind="Last 7 Entries"/>}
                </span>
                <span className="u-inlineBlock App-Statsspacing">
                {<Stats scores={mscores} kind="Last 30 Entries"/>}
                </span>
                <span className ="u-inlineBlock App-Statsspacing">
                {<Stats scores={scores} kind="All Time"/>}
                {/*<Button onClick = {all} >
                {<Stats scores={scores} kind="All Time"/>}
                </Button>*/}
                </span>
            </div>
    {/*<span className="u-inlineBlock">{graph}</span>*/}
            <div>
            {/*<Link to="/entry/1">
                Entry
</Link>*/}
            </div>
            {/*props.userId && <NewEntry addNewEntry={addNewEntry} userId = {props.userId}/>*/}
            <div className ="App-entryContainer">
                <div className = "App-entryTitle">
                    Past Entries
                </div>
                {entriesList}
            </div>
            
        </>
    )

    //using feed.js as basis
    //card component to create list of entries

}
export default Journey;