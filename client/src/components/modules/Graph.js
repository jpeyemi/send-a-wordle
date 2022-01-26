import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import { get } from "../../utilities";
import "../App.css"
import { Chart } from "chart.js";
import * as Chartjs from "chart.js";
import 'chartjs-adapter-moment';
const controllers = Object.values(Chartjs).filter(
    (chart) => chart.id !== undefined
  );
  
  Chart.register(...controllers);
const Graph = (props) => {
    let myChart = document.getElementById('myChart')
    let xValues = Object.keys(props.data)
    let yValues = Object.values(props.data)
    const[graph,setGraph] = useState();
    const[exist,setExist] = useState(false);
  
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>;
    <html>
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width"/>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/moment@2.27.0"></script>
        <script src="https://cdn.jsdelivr.net/npm/chartjs-adapter-moment@0.1.1"></script>
        <title>repl.it</title>
      </head>
      <body>
        <canvas></canvas>
        <script src="new.ts"></script>
      </body>
    </html>

    useEffect(()=> {
        console.log(get("../api/whoami"));
        console.log(props.data);
        get("../api/whoami").then((am) => {
            if(am !== {}){
                let xValues = Object.keys(props.data).reverse().slice(-props.limit)
                let xval = xValues.map((val) => (
                  val.substring(0,10)
                ));
                /*let xval = xValues.map((val) => (
                  new Date(val)
                ));*/
              
                let yValues = Object.values(props.data).reverse().slice(-props.limit)
                console.log(xValues)

                let myChart = document.getElementById('myChart')
                
                setGraph(new Chart(myChart, {
                    type: "line",
                    data: {
                        labels: xval,
                        datasets: [{
                            label: "Emmision Score",
                            backgroundColor: "rgba(0,90,0,1.0)",
                            borderColor: "rgba(0,90,0,.2)",
                            data: yValues,
                        }]
                    },
                    options:{
                        legend: {display: true},
                        title: {
                          font: {
                            size: 20,
                            
                          },
                        },
                        labels: {

                        },
                        tooltips: {
                          titleFontSize: 14,
                          //not working
                          callbacks: {
                            label: (tooltipItem) => {
                              return tooltipItem.dataset.label.substring(0,10);
                            }
                        },
                        },
                        plugins: {
                            title: {
                              display: true,
                              text: ' ',
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
    } ,[]);
    useEffect(() => {
      /*if(exist){
        graph.data.labels.pop();
        graph.data.labels.push(Object.keys(props.data))
        graph.data.datasets.pop();
        graph.data.datasets.push(Object.values(props.data))
        graph.update();
    }*/
    }, [props.limit])
    
    
    return(
        <>
        <canvas id="myChart" height="175"></canvas>

        </>
    )
}
export default Graph;