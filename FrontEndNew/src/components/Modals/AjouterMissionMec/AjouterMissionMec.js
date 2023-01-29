import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { v4 as uuidv4 } from "uuid";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addMissionMec } from "../../../redux/actions/missionMecActions";
// import { Modal, Button, Row, Container, Col } from "react-bootstrap";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";
import { addNotification } from "../../../redux/actions/notificationsActions";

const today = new Date();

const date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

function AjouterMissionMec({ show, handleClose }) {
  const [state, setState] = useState({
    id: uuidv4(),
    mecanicien: "",
    vehicule: "",
    chauffeur: "",
    typepanne: "",

    etat: "attente",
  });

  const dispatch = useDispatch();

  const changeCreds = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    dispatch(addMissionMec(state));
    dispatch(
      addNotification({
        id: uuidv4(),
        date,
        seen: false,
        id_missionmec: state.id,
      })
    );
    handleClose();

    toast.success("Mission ajoutée avec succée");
  };

  return (
    <Modal
      isOpen={show}
      toggle={handleClose}
      centered
      fullscreen="sm"
      size="lg"
    >
      <ModalHeader toggle={handleClose}>Ajouter une mission</ModalHeader>
      <ModalBody>
        <Form>
          <Row>
            {/* Left col */}

            <FormGroup>
              <Row>
                <Col>
                  <Label for="client">
                    Mecanicien <strong className="text-danger">*</strong>
                  </Label>

                  <Input
                    id="mecanicien"
                    name="mecanicien"
                    type="select"
                    value={state.mecanicien}
                    required
                    onChange={(event) => changeCreds(event)}
                  >
                    <option>Fait votre choix...</option>
                    <option>Mostfa</option>
                    <option>Hmed</option>
                    <option>Alekhandro</option>
                    <option>Tijeni</option>
                  </Input>
                </Col>
              </Row>
            </FormGroup>

            <FormGroup>
              <Row>
                <Col>
                  <Label for="vehicule">
                    Véhicule <strong className="text-danger">*</strong>
                  </Label>
                  <Input
                    id="vehicule"
                    name="vehicule"
                    type="select"
                    value={state.vehicule}
                    required
                    onChange={(event) => changeCreds(event)}
                  >
                    <option>Fait votre choix...</option>
                    <option>Ford</option>
                    <option>FIAT</option>
                    <option>Isuzu</option>
                  </Input>
                </Col>
              </Row>
            </FormGroup>

            <FormGroup>
              <Row>
                <Col>
                  <Label for="typepanne">
                    Type de panne <strong className="text-danger">*</strong>
                  </Label>
                  <Input
                    id="typepanne"
                    name="typepanne"
                    type="select"
                    value={state.typepanne}
                    required
                    onChange={(event) => changeCreds(event)}
                  >
                    <option>Fait votre choix...</option>
                    <option>R 1</option>
                    <option>R 2</option>
                    <option>R 3</option>
                  </Input>
                </Col>
              </Row>
            </FormGroup>

            <FormGroup>
              <Row>
                <Col>
                  <Label for="chauffeur">
                    Chauffeur <strong className="text-danger">*</strong>
                  </Label>
                  <Input
                    id="chauffeur"
                    name="chauffeur"
                    type="select"
                    required
                    value={state.chauffeur}
                    onChange={(event) => changeCreds(event)}
                  >
                    <option>Fait votre choix...</option>
                    <option>Ch 1</option>
                    <option>Ch 2</option>
                    <option>Ch 3</option>
                  </Input>
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <Col>
                  <Label for="vehicule">
                    Lieu <strong className="text-danger">*</strong>
                  </Label>
                  <Input
                    id="lieu"
                    name="lieu"
                    type="text"
                    value={state.lieu}
                    required
                    onChange={(event) => changeCreds(event)}
                  ></Input>
                </Col>
              </Row>
            </FormGroup>

            {/* Right col */}
          </Row>
        </Form>
      </ModalBody>

      <ModalFooter className="d-flex justify-content-end">
        <Button color="light" onClick={handleClose}>
          Annuler
        </Button>

        <Button color="success" onClick={handleSubmit}>
          Ajouter
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default AjouterMissionMec;
