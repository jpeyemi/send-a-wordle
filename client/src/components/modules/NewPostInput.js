import React, { useState } from "react";

import "./NewPostInput.css";
import { post } from "../../utilities";

/**
 * New Post is a parent component for all input components
 *
 * Proptypes
 * @param {string} defaultText is the placeholder text
 * @param {string} storyId optional prop, used for comments
 * @param {({storyId, value}) => void} onSubmit: (function) triggered when this post is submitted, takes {storyId, value} as parameters
 */
const NewPostInput = (props) => {
  const [value, setValue] = useState("");

  // called whenever the user types in the new post input box
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // called when the user hits "Submit" for a new post
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit && props.onSubmit(value);
    setValue("");
  };

  return (
    <div className="u-flex">
      <input
        type="text"
        placeholder={props.defaultText}
        value={value}
        onChange={handleChange}
        className="NewPostInput-input"
      />
      <button
        type="submit"
        className="NewPostInput-button u-pointer"
        value="Submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

/**
 * New Entry is a way to submit entries
 * Proptypes
 * @param {string} defaultText is the placeholder text
 */
const NewEntry = (props) => {
  const addEntry = (value) => {
    let v = Number(value)
    const body = {score: v, creator_id: props.userId, creator_name: "filler"};
    post("/api/entry", body).then((entry) => {
      props.addNewEntry(entry);
    });
  };

  return <NewPostInput defaultText="New Entry" onSubmit={addEntry} />;
};

export { NewEntry };
