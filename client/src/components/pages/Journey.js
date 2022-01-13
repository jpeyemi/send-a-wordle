import React, { useState, useEffect } from "react";
import Card from "../modules/Card.js";
import { NewEntry } from "../modules/NewPostInput.js";
import { get } from "../../utilities";
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


    let entriesList = null;
    const hasEntries = entries.length !== 0;
    if (hasEntries) {
        entriesList = entries.map((entryObj) => (
        <Card
            entryObj = {entryObj}
            userId = {props.userId}
            _id = {entryObj._id}
        />
    ));
  } else {
    entriesList = <div>No Entries Yet!</div>;
  }
    return(
        <>
            {props.userId && <NewEntry addNewEntry={addNewEntry} userId = {props.userId}/>}
            {entriesList}
        </>
    )

    //using feed.js as basis
    //card component to create list of entries

}
export default Journey;