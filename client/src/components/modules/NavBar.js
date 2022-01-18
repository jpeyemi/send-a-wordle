import React from "react";
import { Link } from "@reach/router";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "./NavBar.css";
import "../../utilities.css";

// This identifies your web application to Google's authentication service
const GOOGLE_CLIENT_ID = "3024251785-1qunded9hga5p3h24s9fq9vg0gb1lcqm.apps.googleusercontent.com";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
const NavBar = (props) => {
  return (
    <nav className="NavBar-container">
      <div className="NavBar-title u-inlineBlock">rescue.rainforest</div>
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
        <Link to="/entry/1" className="NavBar-link">
          Log Now
      </Link>
        {props.userId ? (
          <GoogleLogout
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={props.handleLogout}
            onFailure={(err) => console.log(err)}
            className="NavBar-link NavBar-login"
          />
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
