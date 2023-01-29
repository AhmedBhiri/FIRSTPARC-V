import React from "react";

import { Modal, Button, Row, Container, Col, FormGroup } from "react-bootstrap";
import { Input, Label } from "reactstrap";
import Dashboard from "../Dashboard/Dashboard";

function ViewMore({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title> Mission M01 </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <h4>Informations mission:</h4>
        </Row>

        <Row>
          <Col>
            <Row>
              <h5 className="text-info col-6">Date:</h5>
              <p className="col-6 text-left">20/03/2022</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Clients:</h5>
              <p className="col-6 text-left">Ines Bday</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Type de facturation:</h5>
              <p className="col-6 text-left">Type 1</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Véhicule:</h5>
              <p className="col-6 text-left">Peugot</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Remorque:</h5>
              <p className="col-6 text-left">R1</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Chauffeur:</h5>
              <p className="col-6">Ahmed Ali</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">N° BT:</h5>
              <p className="col-6">123456</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Date BT:</h5>
              <p className="col-6">22/03/2022</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">N° bon réception:</h5>
              <p className="col-6">22/03/2022</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">N° bon réception:</h5>
              <p className="col-6">22/03/2022</p>
            </Row>
          </Col>

          <Col>
            <Row>
              <FormGroup>
                <Label>Etat</Label>
                <Input type="select">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </Input>
                <Button className="mt-2">Mettre à jour l'état</Button>
              </FormGroup>
            </Row>
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

export default ViewMore;
