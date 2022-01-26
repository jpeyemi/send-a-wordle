import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import "./MeatModal.css";
import "./NavBar.css";
import GoogleLogin, { GoogleLogout } from "react-google-login";

const LoginModal = (props) => {
    const GOOGLE_CLIENT_ID = "3024251785-1qunded9hga5p3h24s9fq9vg0gb1lcqm.apps.googleusercontent.com";
    const [visible, setVisibility] = useState(false);
    const handleOpen = () => { 
        setVisibility(true) 
        document.getElementById("loginM").classList.remove(".width");
    };
    const handleClose = () => { setVisibility(false) };
    return (
        <>
         <div className = "modalDef width" id="loginM" >
            <span className="StartButton" onClick={handleOpen}>
                {props.text}
            </span>
           
            <Modal className = "modalDef" centered="true" show={visible} onHide={handleClose}>
                <Modal.Body> 
                <div className="loginModal-Header">Please sign in to continue.</div>
                <div className="loginModal-Underline"></div>
                    <GoogleLogin
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={props.handleLogin}
            onFailure={(err) => console.log(err)}
            className="NavBar-link NavBar-login inLoginModal"
          />
                
                </Modal.Body>
            </Modal>
            </div>
        </>
    );
};
  
export default LoginModal;

