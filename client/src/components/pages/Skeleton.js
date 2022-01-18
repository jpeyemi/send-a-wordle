import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { Link } from "@reach/router";

import "../../utilities.css";
import "./Skeleton.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "3024251785-1qunded9hga5p3h24s9fq9vg0gb1lcqm.apps.googleusercontent.com";

const Skeleton = ({ userId}) => {
  const handleClick = (event) => {
    return window.open('https://google.com');
  };

  return (
    <>
      <h1>What we eat matters.</h1>
      <p>The Amazonian Rainforest is reaching an irreversible tipping point, 
        and our everyday food choices directly impact its future. 
        Take your first step towards stabilizing the Amazonian forest 
        frontier today.</p>
      
      <Link to="/entry/1">
          Entry
      </Link>
   </>
  );
};

export default Skeleton;
