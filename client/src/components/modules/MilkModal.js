import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import RiceSlider from "./RiceSlider.js";
import OatSlider from "./OatSlider.js";
import SoySlider from "./SoySlider.js";
import AlmondSlider from "./AlmondSlider.js";
import "./MeatModal.css";

const MilkModal = () => {
    const [visible, setVisibility] = useState(false);

    const handleOpen = () => { setVisibility(true) };
    const handleClose = () => { setVisibility(false) };

    return (
        <>
            <span className="AddDetailsMeat" onClick={handleOpen}>
                Add Details
            </span>
            
            <Modal size="lg" show={visible} onHide={handleClose}>
                <Modal.Body> 
                    <h3>How often did you have <b>rice-based products</b>?</h3>
                    <RiceSlider />
                    <h3>How often did you eat <b>soy-based products</b>?</h3>
                    <SoySlider />
                    <h3>How often did you eat <b>oat-based products</b>?</h3>
                    <OatSlider />
                    <h3>How often did you eat <b>almond-based products</b>?</h3>
                    <AlmondSlider />
                
                </Modal.Body>
            </Modal>
        </>
    );
};
  
export default MilkModal;

