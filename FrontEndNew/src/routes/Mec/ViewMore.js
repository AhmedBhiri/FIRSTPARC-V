import React, { useState } from "react";

import { Modal, Button, Row, Col, FormGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Input, Label } from "reactstrap";
import { modifyMissionMec } from "../../redux/actions/missionMecActions";

function ViewMore({ show, handleClose, rowID }) {
  const missionmec = useSelector((state) => state.missionsmec).filter(
    ({ id }) => id === rowID
  )[0];
  const dispatch = useDispatch();

  const [state, setState] = useState({
    id: missionmec.id,
    mecanicien: missionmec.mecanicien,
    vehicule: missionmec.vehicule,
    typepanne: missionmec.typepanne,
    chauffeur: missionmec.chauffeur,
    lieu: missionmec.lieu,

    etat: missionmec.etat,
  });

  const changeCreds = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleChange = () => {
    dispatch(modifyMissionMec(state));
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title> Mission M{rowID[0]} </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <h4> Informations mission: </h4>
        </Row>

        <Row>
          <Col>
            <Row>
              <h5 className="text-info col-3">mecanicien:</h5>
              <p className="col-3 text-left">{missionmec.mecanicien}</p>
            </Row>

            <Row>
              <h5 className="text-info col-3">vehicule:</h5>
              <p className="col-3 text-left">{missionmec.vehicule}</p>
            </Row>

            <Row>
              <h5 className="text-info col-3">typepanne :</h5>
              <p className="col-3 text-left">{missionmec.typepanne}</p>
            </Row>
            <Row>
              <h5 className="text-info col-3">Chauffeur:</h5>
              <p className="col-3">{missionmec.chauffeur}</p>
            </Row>

            <Row>
              <h5 className="text-info col-3">lieu:</h5>
              <p className="col-3 text-left">{missionmec.lieu}</p>
            </Row>

            <Row>
              <Col>
                <FormGroup>
                  <Label>Etat</Label>
                  <Input type="select" name="etat" onChange={changeCreds}>
                    <option
                      selected={missionmec.etat === "attente"}
                      value="attente"
                    >
                      En attente
                    </option>
                    <option
                      selected={missionmec.etat === "en_cours"}
                      value="en_cours"
                    >
                      En cours
                    </option>
                    <option
                      selected={missionmec.etat === "annulée"}
                      value="annulée"
                    >
                      Annulée
                    </option>
                    <option
                      selected={missionmec.etat === "effectuée"}
                      value="effectuée"
                    >
                      Effectuée
                    </option>
                  </Input>
                  <Button className="mt-2" onClick={handleChange}>
                    Met à jour l'état
                  </Button>
                </FormGroup>
              </Col>
              <Col></Col>
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
