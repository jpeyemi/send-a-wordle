import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import { get } from "../../utilities";
import "../App.css"
import { Chart } from "chart.js";
import * as Chartjs from "chart.js";
const controllers = Object.values(Chartjs).filter(
    (chart) => chart.id !== undefined
  );
  
  Chart.register(...controllers);
const Graph = (props) => {
    const[graph,setGraph] = useState([]);
    useEffect(()=> {
        console.log(get("../api/whoami"));
        console.log(props.data);
        get("../api/whoami").then((am) => {
            if(am !== {}){
                let xValues = [50,60,70,80,90,100,110,120,130,140,150];
                let yValues = [7,8,8,9,9,9,10,11,14,14,15];

                let myChart = document.getElementById('myChart').getContext('2d')
                try{
                    setGraph(new Chart(myChart, {
                        type: "line",
                        data: {
                            labels: Object.keys(props.data),
                            datasets: [{
                                backgroundColor: "rgba(0,0,0,1.0)",
                                borderColor: "rgba(0,0,0,0.1)",
                                data: Object.values(props.data),
                            }]
                        },
                        options:{
                            legend: {display: false},
                        }
                    }) )
                    /*graph =  new Chart(myChart, {
                        type: "line",
                        data: {
                            labels: Object.keys(props.data),
                            datasets: [{
                                backgroundColor: "rgba(0,0,0,1.0)",
                                borderColor: "rgba(0,0,0,0.1)",
                                data: Object.values(props.data),
                            }]
                        },
                        options:{
                            legend: {display: false},
                        }
                    });*/
                    }
                catch{
                    /*graph.data.labels.pop();
                    graph.data.lables.push(Object.keys(props.data))
                    graph.data.datasets.pop();
                    graph.data.datasets.push(Object.values(props.data))
                    graph.update()*/
                }
            }});
    });
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>

    return(
        <>
        <canvas id="myChart"></canvas>

        </>
    )
}
export default Graph;