import React, { useState, useEffect } from "react";
import { get } from "../../utilities";
import CardL from "../modules/CardL.js";
import "../App.css";
import "./Leaderboard.css";
import "../../utilities.css";


const Leaderboard = (props) => {
    const [entries, setEntries] = useState([]);
    const [users, setUsers] = useState([]);
    const [dict, setDict] = useState({});
    const [avgLoaded, setAvgLoaded] = useState(false)
    const [daniel, setDaniel] = useState({});
    const [ellie, setEllie] = useState({});
    const [elise, setElise] = useState({})
    //let dict = {}
    let sortUseravg = null
    let avgList = null;
    let dsortUseravg = null
    let davgList = null;
    let hsortUseravg = null
    let havgList = null;
    //let ustoid = {}
    useEffect(() => {
        get("/api/users").then((userz) => {
            setUsers(userz)
        })/*.then(() => {
        console.log(users)
        get("/api/allEntries").then((entriez) => {
            setEntries(entriez);
        }).then(loadDict)}); */
    },[]);

    useEffect(() => {
        get("/api/allEntries").then((entriez) => {
            setEntries(entriez);
        })
    }, [users]);

    useEffect(()=> {
        loadDict();
    }, [entries])

    const loadDict = () => {
        let uentries = null;
        let daily = null;
        let scores = null;
        let avg = null
        let myDict = {}
        let ustoid = {}
        let dDict = {}
        let yesterday = new Date()
        let dscores = null;
        let at = null;
        let hDict = {};
        let sco = null;
        yesterday.setDate(yesterday.getDate() - 1)
        for(let i = 0; i < users.length; i++){
            uentries = entries.filter(e => e.creator_id === users[i]._id)
            //daily = uentries.filter(e => (Number(e.timestamp.substring(0,4)) == Number(yesterday.getFullYear().toString()) && Number(e.timestamp.substring(5,7))== Number(yesterday.getMonth()))+1 && e.timestamp.substring(8,10) == yesterday.getDate().toString())
            daily = uentries.slice(-1)
            /*sco = uentries.map((e)=>(e.score))
            if(sco.length !== 0){
                at = Math.min(sco)
            }else{
                at = Number.POSITIVE_INFINITY
            }*/
            //console.log(at)
            if(uentries.length !== 0){
                scores = uentries.map((entryObj) => (
                    Number(entryObj.score)
                ))
            }else{
                scores = [Number.POSITIVE_INFINITY]
            }
            if(daily.length !== 0){
                dscores = daily.map((entryObj) => (
                    Number(entryObj.score)
                ))
            }else{
                dscores = [Number.POSITIVE_INFINITY]
            }
            at = Math.min(...scores)
            console.log(scores)
            console.log(at)
            avg = 0
            for (let j = 0; j < scores.length ;j++){
                avg += scores[j]
            }
            avg/=scores.length
            myDict[users[i]._id] = Math.round(avg)
            ustoid[users[i]._id] = users[i].name                          
            dDict[users[i]._id] = Math.round(dscores)
            hDict[users[i]._id] = Math.round(at)
            console.log(myDict)
        }
        if(Object.keys(myDict).length === users.length){
            setDaniel(ustoid);
            setEllie(dDict);
            setDict(myDict);
            setElise(hDict);
        }
    }


    sortUseravg = Object.keys(dict).sort((a,b) => dict[a] - dict[b])
    const hasUsers = users.length !== 0;
    console.log(sortUseravg)
    if (hasUsers && sortUseravg) {
        avgList = sortUseravg.map((user) => (
        <CardL
            avg = {dict[user]}
            userId = {user}
            map = {daniel}
            place = {sortUseravg.indexOf(user)}
        />
    ));
    } else {
        avgList = <div>No Users</div>;
    }
    dsortUseravg = Object.keys(ellie).sort((a,b) => ellie[a] - ellie[b])
    if (hasUsers && dsortUseravg) {
        davgList = dsortUseravg.map((user) => (
        <CardL
            avg = {ellie[user]}
            userId = {user}
            map = {daniel}
            place = {dsortUseravg.indexOf(user)}
        />
    ));
    } else {
        davgList = <div>No Users</div>;
    }
    hsortUseravg = Object.keys(elise).sort((a,b) => elise[a] - elise[b])
    if (hasUsers && hsortUseravg) {
        havgList = hsortUseravg.map((user) => (
        <CardL
            avg = {elise[user]}
            userId = {user}
            map = {daniel}
            place = {hsortUseravg.indexOf(user)}
        />
    ));
    } else {
        havgList = <div>No Users</div>;
    }



    return(
        <>
        <div className = "entireBody">
            <div>
                <div className = "Title">
                    Leaderboards
                </div>
                <div className = " Board u-inlineBlock"> 
                    <div className = "BoardTitle"> 
                    Average Emmision Score
                    </div>
                    {avgList}
                </div>
                <div className = "Board u-inlineBlock">
                    <div className = "BoardTitle"> 
                        Most Recent Scores
                    </div>
                    {davgList}
                </div>
                <div className = "Board u-inlineBlock">
                    <div className = "BoardTitle"> 
                        All Time
                    </div>
                    {havgList}
                </div>
            </div>
        </div>
        </>
    )
}
export default Leaderboard;