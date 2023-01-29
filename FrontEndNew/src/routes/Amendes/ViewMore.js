import React from "react";

import { Modal, Button, Row, Col, FormGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Input, Label } from "reactstrap";

function ViewMore({ show, handleClose, rowID }) {
  const {
    numero,
    nomchauffeur,
    nomvehicule,
    cause,
    date,
    etat,
    montant,
    piecejointe,
  } = useSelector((state) => state.amendes).filter(({ id }) => id === rowID)[0];

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title> Amende n 1 {rowID[0]} </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <h4>Details amende</h4>
        </Row>

        <Row>
          <Col>
            <Row>
              <h5 className="text-info col-6">nomchauffeur:</h5>
              <p className="col-6 text-left">{nomchauffeur}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">nomvehicule:</h5>
              <p className="col-6 text-left">{nomvehicule}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">cause :</h5>
              <p className="col-6 text-left">{cause}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">date:</h5>
              <p className="col-6 text-left">{date}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">montant</h5>
              <p className="col-6">{montant}</p>
            </Row>
          </Col>

          <Col>
            <row>
              <Row>
                <h5 className="text-info col-6">piecejointe</h5>
                <p className="col-6">{piecejointe}</p>
              </Row>
            </row>
            <Row>
              <FormGroup>
                <Label>Etat</Label>
                <Input type="select">
                  <option selected={etat === "attente"}>En attente</option>

                  <option selected={etat === "effectuée"}>Payée </option>
                </Input>
                <Button className="mt-2">Met jour l'état</Button>
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
