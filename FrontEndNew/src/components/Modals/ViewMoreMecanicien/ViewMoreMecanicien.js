import React from "react";

import { Modal, Button, Row, Col } from "react-bootstrap";
import mec from "./mec.png";
function ViewMoreMecanicien({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} fullscreen="sm"
    size="l">
      <Modal.Header closeButton>
        <Modal.Title>Fiche technique</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <h4>Mecanicien : Mohamed Ali </h4>
        </Row>

        <Row>
          <Col>
            <Row>
              <h5 className="text-info col-6">Nom:</h5>
              <p className="col-6 text-left">Mohamed</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Prenom</h5>
              <p className="col-6 text-left">Ali</p>
            </Row>
            
            <Row>
              <h5 className="text-info col-6">Numero tel:</h5>
              <p className="col-6 text-left">55-555-555</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Adresse:</h5>
              <p className="col-6 text-left">Sousse jawhara</p>
            </Row>

            
           </Col>
          <Col>
            <img src={mec} width="250" />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-end align-items-center pb-1">
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ViewMoreMecanicien;
