import { Link } from "@reach/router";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import React, { useState, useEffect } from "react";
import { get, post } from "../../utilities";

import "./NavBar.css";
import "../../utilities.css";
//import { indexOf } from "core-js/core/array";

// This identifies your web application to Google's authentication service
const GOOGLE_CLIENT_ID = "3024251785-1qunded9hga5p3h24s9fq9vg0gb1lcqm.apps.googleusercontent.com";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */

const NavBar = (props) => {
  const [name,setName] = useState(undefined)
  useEffect(() => {
    get("/api/whoami").then((user) => {
      console.log(user)
      if(Object.keys(user).length !== 0){
        setName(user.name.substring(0,user.name.indexOf(' '))) 
      }
    });
  })
  
  return (
    <nav className="NavBar-container parent">
      <div className = "navContainer"> <div className="photo"></div> </div>
      <div className="NavBar-linkContainer u-inlineBlock">
        <Link to="/" className="NavBar-link">
          Home
        </Link>
        {props.userId && (
          <Link to={`/journey/${props.userId}`} className="NavBar-link">
            Journey
          </Link>
        )}
        <Link to="/leaderboard/" className="NavBar-link">
          Leaderboard
        </Link>
        
      </div>
      <div className = "NavBar-linkContainerR u-inlineBlock child"> 
        
        {props.userId ? (
          <>
          <span className = "name"> 
            Hello, {name}
          </span>
          <Link to="/entry/1" className="NavBar-link NavBar-login">
            Log Now!
          </Link>
          <GoogleLogout
              clientId={GOOGLE_CLIENT_ID}
              buttonText="Sign Out"
              onLogoutSuccess={props.handleLogout}
              onFailure={(err) => console.log(err)}
              className="NavBar-link NavBar-login" /></>
        ) : (
          <GoogleLogin
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={props.handleLogin}
            onFailure={(err) => console.log(err)}
            className="NavBar-link NavBar-login"
          />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
