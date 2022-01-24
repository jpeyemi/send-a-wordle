import React, { useState, useEffect, Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { Link } from "@reach/router";
import Checkbox from "../modules/Checkbox.js";

import "../../utilities.css";
import "./Skeleton.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "3024251785-1qunded9hga5p3h24s9fq9vg0gb1lcqm.apps.googleusercontent.com";

const Skeleton = ({ userId}) => {
  const [val, setVal] = useState(0);
  const [canSee, setSee] = useState(false);

  document.body.style = 'background: #fff;';

  console.log(canSee);

  const increment = () => {
    setVal(val + 1);
    if (val === 10) {
      setSee(true);
    }
  };

  return (
    <>
    <section id="intro">
      <div class='footer' id="skel">
          <div class='footer-item footer-one'>
            <h1 className = "titleText">What we eat matters.</h1>
            <p className = "bodyText">The Amazonian Rainforest is reaching an irreversible tipping point, 
        and our everyday food choices directly impact its future. 
        Take your first step towards stabilizing the Amazonian forest 
        frontier today.</p>
        <Link to="/entry/1" className="SubmitButton" >
                Start your Journey
          </Link>
          </div>
          
          <div class='footer-item footer-two'>
            {!canSee && <div className="acai" onClick={() => { increment(); console.log("here");}}> </div>}
            {canSee && <div className="cursed"> </div>}
          </div>
        </div>
        </section>
        <section id="forest">
        <h1 className = "forestText">Saving the rainforest</h1>
        </section>
   </>
  );
};

export default Skeleton;
