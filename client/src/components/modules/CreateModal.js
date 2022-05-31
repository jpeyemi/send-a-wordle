import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import "./CreateModal.css";
import OpenButton from "./OpenButton.js";
import RedirectButton from "./RedirectButton.js";
import { get, post } from "../../utilities";

const CreateModal = (props) => {
    const [visible, setVisibility] = useState(false);
    const handleOpen = () => { setVisibility(true) };
    const handleClose = () => { setVisibility(false) };
    const [set, isSet] = useState(false);

    const handleSubmit = () => {
        console.log(document.getElementById('only').value);
        var inp = document.getElementById('only').value;
        get("/api/words", {word: inp}).then((words) => {
            if (words.length === 0) {
                setTimeout(() => {
                    document.getElementById('only').classList.remove('wiggle');
                }, 1000);
                document.getElementById('only').classList.add('wiggle');
            } else {
                // generate random 10-digit code
                // ascii from 48-122
                let gen = ""
                for (let i = 0; i < 10; i++) {
                    gen += String.fromCharCode(Math.floor(Math.random() * (91 - 65) + 65));
                }
                
                const body = {code: gen, word: inp};
                localStorage.setItem("code", gen);
                console.log(gen);
                post("/api/gamecodes", body).then(()=> {
                    window.location.href = '/create/:code';
                });
            }   
        });
    }

    return (
        <>
        <div>
            <OpenButton className="margC" text={props.text} onClick={handleOpen}> </OpenButton>
           
            <Modal className="width modalDef" centered="true" show={visible} onHide={handleClose}>
                <Modal.Body> 
                    <div className="joinModal-Header">Enter Valid Word:</div>
                    <div className="joinModal-Underline"></div>
                    <input id="only" type="email" className="joinInp border block rounded" placeholder="Enter word..." />
                    <RedirectButton className="margredir" text={'Submit'} onClick={handleSubmit}> </RedirectButton>


                </Modal.Body>
            </Modal>
        </div>
        </>
    );
}

export default CreateModal;