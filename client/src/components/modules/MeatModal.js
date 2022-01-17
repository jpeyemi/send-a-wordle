import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import "./MeatModal.css";
import Slider from "./Slider.js";
import BeefSlider from "./BeefSlider.js";
import TestSlider from "./TestSlider.js";
import PorkSlider from "./PorkSlider.js";
import PoultrySlider from "./PoultrySlider.js";

const MeatModal = () => {
    const [visible, setVisibility] = useState(false);
    const [servings, setServings] = useState({})
    const handleOpen = () => { setVisibility(true) };
    const handleClose = () => { 
        setVisibility(false) 
        console.log(servings)
    };
    const serv = (type, servs) => {
        servings[type] = servs;
    };
    return (
        <>
            <span className="AddDetailsMeat" onClick={handleOpen}>
                Add Details
            </span>
            
            <Modal size="lg" show={visible} onHide={handleClose}>
                <Modal.Body> 
                    <h3>How often did you eat <b>beef</b>?</h3>
                    <BeefSlider save={serv} servs={servings}/>
                    <h3>How often did you eat <b>lamb</b>?</h3>
                    <TestSlider />
                    <h3>How often did you eat <b>pork</b>?</h3>
                    <PorkSlider />
                    <h3>How often did you eat <b>poultry</b>?</h3>
                    <PoultrySlider />
                
                </Modal.Body>
            </Modal>
        </>
    );
};
  
export default MeatModal;

