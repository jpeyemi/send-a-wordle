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
    let myChart = document.getElementById('myChart')
    let xValues = Object.keys(props.data)
    let yValues = Object.values(props.data)
    const[graph,setGraph] = useState();
    const[exist,setExist] = useState(false);
    let animation = (()=>{
        const totalDuration = 10000;
const delayBetweenPoints = totalDuration / props.data.size;
const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
const animation = {
  x: {
    type: 'number',
    easing: 'linear',
    duration: delayBetweenPoints,
    from: NaN, // the point is initially skipped
    delay(ctx) {
      if (ctx.type !== 'data' || ctx.xStarted) {
        return 0;
      }
      ctx.xStarted = true;
      return ctx.index * delayBetweenPoints;
    }
  },
  y: {
    type: 'number',
    easing: 'linear',
    duration: delayBetweenPoints,
    from: previousY,
    delay(ctx) {
      if (ctx.type !== 'data' || ctx.yStarted) {
        return 0;
      }
      ctx.yStarted = true;
      return ctx.index * delayBetweenPoints;
    }
  }
};
    })
    useEffect(()=> {
        console.log(get("../api/whoami"));
        console.log(props.data);
        get("../api/whoami").then((am) => {
            if(am !== {}){
                //let xValues = [50,60,70,80,90,100,110,120,130,140,150];
                //let yValues = [7,8,8,9,9,9,10,11,14,14,15];
                let xValues = Object.keys(props.data)
                let yValues = Object.values(props.data)
                console.log(xValues)

                let myChart = document.getElementById('myChart')
                
                setGraph(new Chart(myChart, {
                    type: "line",
                    data: {
                        labels: xValues,
                        datasets: [{
                            backgroundColor: "rgba(0,0,0,1.0)",
                            borderColor: "rgba(0,0,0,0.1)",
                            data: yValues,
                        }]
                    },
                    options:{
                        animation,
                        interaction: {
                            intersect: false
                        },
                        legend: {display: false},
                        plugins: {
                            title: {
                              display: true,
                              text: 'Your Progress'
                            }
                          },
                          scales: {
                            /*x: {
                                type: 'time',
                                time: {
                                  // Luxon format string
                                  tooltipFormat: 'MM-dd-yyyy'
                                },
                                title: {
                                    display: true,
                                    text: 'Date'
                                  }
                                },*/
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
    if(exist){
        graph.data.labels.pop();
        graph.data.labels.push(Object.keys(props.data))
        graph.data.datasets.pop();
        graph.data.datasets.push(Object.values(props.data))
        //graph.update();
    }
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>

    return(
        <>
        <canvas id="myChart"></canvas>

        </>
    )
}
export default Graph;