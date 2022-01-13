import React, { useState, useEffect } from "react";
//import other components tbd



const Journey = (props) => { //pass user info to Journey
    const [entries, setEntries] = useState([]);


    useEffect(() => {
        get("/api/entries", {user: props.userId}).then((entries) => {
            setEntries(entries);
        });//may change depending on format of passed user info
    }, []);


    const addNewEntry = (entryObj) => {
        setEntries([entryObj].concat(entries));
    };


    //using feed.js as basis
    //card component to create list of entries
    //i love pie

}
export default Journey;