import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import "./MeatModal.css";
import DivineSliderTheSliderToEndAllSliders from "./DivineSliderTheSliderToEndAllSliders.js";

const MilkModal = (props) => {
    const [visible, setVisibility] = useState(false);
    const handleOpen = () => { setVisibility(true) };
    const handleClose = () => { setVisibility(false) };
    return (
        <>
            <span className="AddDetailsMeat" onClick={handleOpen}>
                Add Details
            </span>
            
            <div className = "modalDef">
            <Modal className = "modalDef" size="lg" show={visible} onHide={handleClose}>
                <Modal.Body> 
                <h3 className="modalHeading">How often did you have <b>rice-based products</b>?</h3>
                    <DivineSliderTheSliderToEndAllSliders id='rice' save={props.serv} servs={props.servs} find = {props.find}/>
                    <h3 className="modalHeading">How often did you eat <b>soy-based products</b>?</h3>
                    <DivineSliderTheSliderToEndAllSliders id='soy' save={props.serv} servs={props.servs} find = {props.find}/>
                    <h3 className="modalHeading">How often did you eat <b>oat-based products</b>?</h3>
                    <DivineSliderTheSliderToEndAllSliders id='oat' save={props.serv} servs={props.servs} find = {props.find}/>
                    <h3 className="modalHeading">How often did you eat <b>almond-based products</b>?</h3>
                    <DivineSliderTheSliderToEndAllSliders id='almond' save={props.serv} servs={props.servs} find = {props.find}/>
                
                </Modal.Body>
            </Modal>
            </div>
        </>
    );
};
  
export default MilkModal;

