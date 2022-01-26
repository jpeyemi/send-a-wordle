import React, { useState, useEffect, Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { Link } from "@reach/router";
import LoginModal from "../modules/LoginModal.js";

import "../../utilities.css";
import "./Skeleton.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "3024251785-1qunded9hga5p3h24s9fq9vg0gb1lcqm.apps.googleusercontent.com";

const Skeleton = (props) => {
  const [val, setVal] = useState(0);
  const [canSee, setSee] = useState(false);
  const [isLogged, setLogged] = useState(false);

  document.body.style = 'background: #fff;';

  console.log(canSee);

  useEffect(() => {
    if (props.userId === undefined) {
      setLogged(false);
    } else {
      setLogged(true);
    }
  });

  const increment = () => {
    setVal(val + 1);
    if (val === 10) {
      setSee(true);
    }
  };

  return (
    <>
    <section id="intro">
      <div className='header' id="skel">
          <div className='header-item header-one'>
            <h1 className = "titleText">What we eat matters.</h1>
            <p className = "bodyText">The Amazonian Rainforest is reaching an irreversible tipping point, 
        and our everyday food choices directly impact its future. 
        Take your first step towards stabilizing the Amazonian forest 
        frontier today.</p>
        {isLogged && <Link to="/entry/00" className="StartButton">Start your Journey</Link> }
        {!isLogged && <LoginModal text="Start your Journey" handleLogin={props.handleLogin} /> }
          </div>
          
          <div className='header-item header-two'>
            {!canSee && <div className="acai" onClick={() => { increment(); console.log("here");}}> </div>}
            {canSee && <div className="cursed"> </div>}
          </div>
        </div>
        </section>
        <section id="forest">
        <div className = "forestText">Protect the forest. <br /> 
        <div className = "forestBody"> Thousands of trees are cleared daily in the Amazon to produce pasture land for cattle 
          ranching. By limiting your meat consumption and buying sustainably harvested forest products, 
          you can help conserve it. </div> </div>
        </section>
        <section id="features">
        <div className = "featuresTitle">How it Works
        <p className = "featuresText">Take a few minutes to learn how your dietary choices influence your carbon footprint. 
        Our free, interactive calculator generates your <span id="bolded">Emission Score</span> - a score from 0 to 100 that represents your impact 
        on the Amazon.</p>  

        <div className='tools'>
  <div className='tool-item tool-one'>
   <div className="firstContainer"> 
    <div className="first"></div>
   </div>
      <div className = "featuresTextBolded One">Daily Quiz</div>
      <div className = "featuresText One">Answer a few questions to discover how 
      your food impacts the Amazon.</div>
  </div>
  <div className='tool-item tool-two'>
  <div className="secondContainer">
     <div className="second"></div>
     </div>
     <div className = "featuresTextBolded Two">Track your Progress</div>
      <div className = "featuresText Two">Our Journey feature helps you understand your habits
       and eat more mindfully.</div>
  </div>
  <div className='tool-item tool-three'>
  <div className="thirdContainer"> <div className="third"></div></div>
  <div className = "featuresTextBolded Three">Leaderboard</div>
      <div className = "featuresText Three">Compete with friends and people around the globe for the best
       Emission Score.</div>
  </div>
</div>

        
        </div>
        
        </section>

        
   </>
  );
};

export default Skeleton;
