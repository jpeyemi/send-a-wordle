import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { post } from "../../utilities";
import CreateModal from "../modules/CreateModal.js";
import JoinModal from "../modules/JoinModal.js";

import "../../utilities.css";
import "./Skeleton.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "121479668229-t5j82jrbi9oejh7c8avada226s75bopn.apps.googleusercontent.com";

const Skeleton = (props) => {
  
  return (
    <>
      <div id="container">
        <CreateModal setCode={props.setCode} text="Create a Friendle" />
        <div className="orContainer">
          <div className="or"></div>
        </div>
        <JoinModal text="Join a Friendle" />
      { /* <button onClick={test} id="but"> jet</button> */ }
      
      
      </div>
    </>
  );
};

export default Skeleton;
