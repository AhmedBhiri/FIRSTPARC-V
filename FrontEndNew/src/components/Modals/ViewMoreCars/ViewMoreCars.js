import React from "react";

import { Modal, Button, Row, Col } from "react-bootstrap";
import car from "./car.png";

function ViewMoreCars({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Fiche technique</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <h4>Isuzu </h4>
        </Row>

        <Row>
          <Col>
            <Row>
              <h5 className="text-info col-6">Immatriculation</h5>
              <p className="col-6 text-left">3486TU84</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Carte grise:</h5>
              <p className="col-6 text-left">Type 1</p>
            </Row>
            <Row>
              <h5 className="text-info col-6">Date mise en service:</h5>
              <p className="col-6 text-left">20/03/2022</p>
            </Row>
            <Row>
              <h5 className="text-info col-6">Type carburant</h5>
              <p className="col-6 text-left">Essence</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Remorque:</h5>
              <p className="col-6 text-left">R1</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Chauffeur:</h5>
              <p className="col-6">Mohamed Salah</p>
            </Row>
            <Row>
              <h5 className="text-info col-6">Etat:</h5>
              <p className="col-6">En bonne etat</p>
            </Row>
            <Row>
              <h5 className="text-info col-6">Date achat:</h5>
              <p className="col-6">21-01-2019</p>
            </Row>
          </Col>

          <Col>
            <img src={car} width="250" />
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

export default ViewMoreCars;
