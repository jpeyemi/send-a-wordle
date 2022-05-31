import React, { useState, useEffect } from "react";
import "./Create.css";
import QRCode from "react-qr-code";

import "../../utilities.css";

const Create = (props) => {
    const [copied, setCopied] = useState(false);

    const copy = () => {
      const el = document.createElement('input');
      el.value = "https://friendle.herokuapp.com/play/" + localStorage.getItem("code");
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
    }

    return (
      <>
        <div id="container">
            <div class="header">Share to a Friend</div>
            <div className="create-Underline"></div>
            <div className="containerQR">
                <div class="smallHeader">Your Friendle Code:</div>
                <div class="codeText bold"> {localStorage.getItem("code")} </div>
                <QRCode class="qr" value={"https://friendle.herokuapp.com/play/" + localStorage.getItem("code")} />
            </div>
            <div className="containerLink">
                <div class="smallHeader">Share Link:</div>
                <div className="containerText">
                    <input className="w-1 px-2 linkText" disabled value={"https://friendle.herokuapp.com/play/" + localStorage.getItem("code")}></input>
                    <div className="linkButton" onClick={copy}>{!copied ? "Copy" : "Copied!"}</div>
                </div>
            </div>
        </div>
      </>
    );
  };
  
  export default Create;