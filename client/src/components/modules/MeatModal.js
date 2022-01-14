import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";

const MeatModal = () => {
    const [visible, setVisibility] = useState(false);

    const handleOpen = () => { setVisibility(true) };
    const handleClose = () => { setVisibility(false) };

    return (
        <>
            <Button variant="light" onClick={handleOpen}>
                Add Details
            </Button>
            
            <Modal show={visible} onHide={handleClose}>
                <Modal.Body> Insert sliders here! </Modal.Body>
            </Modal>
        </>
    );
};
  
export default MeatModal;

