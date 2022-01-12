import React, { useState, useEffect } from "react";
//import other components tbd



const Journey = (props) => { //pass user info to Journey
    const [entries, setEntries] = useState([]);


    useEffect(() => {
        get("/api/entries", {user: props._id}).then((entries) => {
            setEntries(entries);
        });//may change depending on format of passed user info
    }, []);


    const addNewEntry = (entryObj) => {
        setEntries([entryObj].concat(entries));
    };
    //using feed.js as basis
}