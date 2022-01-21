import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import "./MeatModal.css";
import DivineSliderTheSliderToEndAllSliders from "./DivineSliderTheSliderToEndAllSliders.js";

const MeatModal = (props) => {
    const [visible, setVisibility] = useState(false);
    const handleOpen = () => { setVisibility(true) };
    const handleClose = () => { setVisibility(false) };
    return (
        <>
         <div className = "modalDef">
            <span className="AddDetailsMeat" onClick={handleOpen}>
                Add Details
            </span>
           
            <Modal className = "modalDef" size="lg" show={visible} onHide={handleClose}>
                <Modal.Body> 
                    <h3>How often did you eat <b>beef</b>?</h3>
                    <DivineSliderTheSliderToEndAllSliders id='beef' save={props.serv} servs={props.servs} find = {props.find}/>
                    <h3>How often did you eat <b>lamb</b>?</h3>
                    <DivineSliderTheSliderToEndAllSliders id='lamb' save={props.serv} servs={props.servs} find = {props.find}/>
                    <h3>How often did you eat <b>pork</b>?</h3>
                    <DivineSliderTheSliderToEndAllSliders id='pork' save={props.serv} servs={props.servs} find = {props.find}/>
                    <h3>How often did you eat <b>poultry</b>?</h3>
                    <DivineSliderTheSliderToEndAllSliders id='poultry' save={props.serv} servs={props.servs} find = {props.find}/>
                
                </Modal.Body>
            </Modal>
            </div>
        </>
    );
};
  
export default MeatModal;

