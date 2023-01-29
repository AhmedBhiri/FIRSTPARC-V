import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
import { addPanne } from "../../../redux/actions/panneAction";

import getCurrentPosition from "./GetCurrentPosition";

const today = new Date();

const date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

function AjouterPanne({ show, handleClose }) {
  const [state, setState] = useState({
    id: uuidv4(),
    date: "",
    cause: "",
    piecejointe: "",
    chauffeur: "",
    vehicule: "",
    lieu: "",
    etat: "attente",
  });

  const dispatch = useDispatch();

  const changeCreds = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    dispatch(addPanne(state));
    dispatch(
      addNotification({
        id: uuidv4(),
        date,
        seen: false,
        id_missionMec: state.id,
      })
    );
    handleClose();
    toast.success("Panne ajoutée avec succées");
  };

  return (
    <Modal
      isOpen={show}
      toggle={handleClose}
      centered
      fullscreen="sm"
      size="lg"
    >
      <ModalHeader toggle={handleClose}>
        <h4>Declarer une nouvelle panne</h4>
      </ModalHeader>
      <ModalBody>
        <Form>
          <Row>
            {/* Left col */}
            <Col>
              <FormGroup>
                <Row>
                  <Col>
                    <Label for="cause">
                      Cause <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="cause"
                      name="cause"
                      type="text"
                      required
                      value={state.cause}
                      onChange={(event) => changeCreds(event)}
                    />
                  </Col>

                  <Col>
                    <Label for="piecejointe">
                      Piece jointe <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="piecejointe"
                      name="piecejointe"
                      type="file"
                      onChange={(event) => changeCreds(event)}
                      value={state.piecejointe}
                      required
                    />
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
                      value={state.chauffeur}
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
                      Vehicule <strong className="text-danger">*</strong>
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
                      <option>Peugeot</option>
                      <option>mercedes</option>
                      <option>V 3</option>
                    </Input>
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                <Row>
                  <Col>
                    <Label for="lieu">
                      Lieu <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="lieu"
                      name="lieu"
                      type="select"
                      value={state.lieu}
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
                    <Label for="lieu">
                      Obtenir la position actuelle
                      <strong className="text-danger">*</strong>
                    </Label>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button className="btn-info" onClick={getCurrentPosition}>
                      Obtenir
                    </Button>
                  </Col>
                </Row>
              </FormGroup>
            </Col>
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

export default AjouterPanne;
