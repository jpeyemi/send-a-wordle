import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";
import NavBar from "./modules/NavBar.js";
import Journey from "./pages/Journey.js";
import Leaderboard from "./pages/Leaderboard.js";

import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";
import "./App.css";
import EntryPage1 from "./pages/EntryPage1.js";
import EntryPage2 from "./pages/EntryPage2.js";
import EntryPage3 from "./pages/EntryPage3.js";
import EntryPage4 from "./pages/EntryPage4.js";

/**
 * Define the "App" component
 */
const App = () => {
  const [userId, setUserId] = useState(undefined);

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        setUserId(user._id);
      }
    });
  }, []);

  const handleLogin = (res) => {
    console.log(`Logged in as ${res.profileObj.name}`);
    const userToken = res.tokenObj.id_token;
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
      post("/api/initsocket", { socketid: socket.id }).then(() => {
        location.reload();
      });
      
    });
  };

  const handleLogout = () => {
    setUserId(undefined);
    post("/api/logout");
  };

  return (
    <>
      <NavBar
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        userId={userId}
      />
      <div className="App-container">
        <Router>
          <Skeleton path="/" userId={userId} />
          <Journey path="/journey/:userId"userId={userId}/>
          <Leaderboard path = "/leaderboard/" userId = {userId}/>
          <EntryPage1 path="/entry/1" userId={userId} />
          <EntryPage2 path="/entry/2" userId={userId} />
          <EntryPage3 path="/entry/3" userId={userId} />
          <EntryPage4 path="/entry/4" userId={userId} />
          
          <NotFound default />
        </Router>
      </div>
    </>
  );
};

export default App;
