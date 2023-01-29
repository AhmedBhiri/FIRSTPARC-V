import React, { useState } from "react";

import { Modal, Button, Row, Col, FormGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Input, Label } from "reactstrap";
import { modifyPanne } from "../../redux/actions/panneAction";

function ViewMore({ show, handleClose, rowID }) {
  const panne = useSelector((state) => state.pannes).filter(
    ({ id }) => id === rowID
  )[0];
  const dispatch = useDispatch();
  const [state, setState] = useState({
    numero: panne.numero,
    date: panne.date,
    cause: panne.cause,
    piecejointe: panne.piecejointe,
    chauffeur: panne.chauffeur,
    vehicule: panne.vehicule,
    lieu: panne.lieu,
    etat: panne.etat,
  });

  const changeCreds = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  const handleChange = () => {
    dispatch(modifyPanne (state));
    handleClose();
  };
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title> panne M{rowID[0]} </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <h4>Pannes</h4>
        </Row>

        <Row>
          <Col>
            <Row>
              <h5 className="text-info col-6">Date:</h5>
              <p className="col-6 text-left">{panne.date}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Cause:</h5>
              <p className="col-6 text-left">{panne.cause}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Piece jointe:</h5>
              <p className="col-6 text-left">{panne.piecejointe}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Chauffeur:</h5>
              <p className="col-6 text-left">{panne.chauffeur}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Vehicule:</h5>
              <p className="col-6 text-left">{panne.vehicule}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Lieu:</h5>
              <p className="col-6">{panne.lieu}</p>
            </Row>
          </Col>

          <Col>
            <Row>
            <FormGroup>
                <Label>Etat</Label>
                <Input type="select" name="etat" onChange={changeCreds}>
                  <option selected={panne.etat === "attente"} value="attente">
                    En attente
                  </option>
                  <option
                    selected={panne.etat === "en_cours"}
                    value="en_cours"
                  >
                    En cours
                  </option>
                  <option selected={panne.etat === "annulée"} value="annulée">
                    Annulée
                  </option>
                  <option
                    selected={panne.etat === "effectuée"}
                    value="effectuée"
                  >
                    Effectuée
                  </option>
                </Input>
                <Button className="mt-2" onClick={handleChange}>
                  Met à jour l'état
                </Button>
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
