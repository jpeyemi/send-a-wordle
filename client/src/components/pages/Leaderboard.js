import React, { useState, useEffect } from "react";
import { get } from "../../utilities";
import CardL from "../modules/CardL.js";
import "../App.css"


const Leaderboard = (props) => {
    const [entries, setEntries] = useState([]);
    const [users, setUsers] = useState([]);
    const [dict, setDict] = useState({});
    const [avgLoaded, setAvgLoaded] = useState(false)
    const [daniel, setDaniel] = useState({});
    //let dict = {}
    let sortUseravg = null
    let avgList = null;
    //let ustoid = {}
    useEffect(() => {
        console.log("here");
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
        let scores = null;
        let avg = null
        let myDict = {}
        let ustoid = {}
        console.log(users.length);
        for(let i = 0; i < users.length; i++){
            uentries = entries.filter(e => e.creator_id === users[i]._id)
            console.log(uentries)
            if(uentries.length !== 0){
                scores = uentries.map((entryObj) => (
                    Number(entryObj.score)
                ))
            }else{
                scores = [Number.POSITIVE_INFINITY]
            }
            console.log(scores)
            avg = 0
            for (let j = 0; j < scores.length ;j++){
                avg += scores[j]
            }
            avg/=scores.length
            myDict[users[i]._id] = Math.round(avg)
            ustoid[users[i]._id] = users[i].name
            console.log(myDict)
        }
        if(Object.keys(myDict).length === users.length){
            setDaniel(ustoid);
            setDict(myDict);
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
        />
    ));
    } else {
        avgList = <div>No Users</div>;
    }
    /*useEffect( () => {
        setAvgLoaded(true) 
    }, [dict])*/
   /* useEffect(() => {
        let dict = {}
        let scores = null
        let avg = null
        for(let i = 0; i < users.length; i++){
            get("/api/entries", {user: users[i]._id}).then((entries) => {
                scores = entries.map((entryObj) => (
                    Number(entryObj.score)
                ))
                avg = 0
                for (let j = 0; j < scores.length ;j++){
                    avg += scores[j]
                }
                avg/=scores.length
                dict[users[i]] = Math.round(avg) 
                if(dict.size() === users.length){
                    setAvgLoaded(true)
                }
            })
        }
        console.log(Object.keys(dict))
        setDict(dict)
        sortUseravg = Object.keys(dict).sort((a,b) => dict[a] - dict[b])
    }, [users]); */
    

    return(
        <>
            <div className ="App-entryContainer">
                <div className = "App-entryTitle">
                    Leaderboard
                </div>
                {avgList}
            </div>
        </>
    )
}
export default Leaderboard;