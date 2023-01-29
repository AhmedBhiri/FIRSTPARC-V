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

import { addAmende } from "../../../redux/actions/amendeActions";
import { addNotification } from "../../../redux/actions/notificationsActions";

const today = new Date();

const date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

function AjouterAmende({ show, handleClose }) {
  const [state, setState] = useState({
    id: uuidv4(),
    numero: "",
    nomchauffeur: "",
    nomvehicule: "",
    cause: "",
    date: "",
    montant: "",
    etat: "attente",
  });

  const dispatch = useDispatch();

  const changeCreds = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    dispatch(addAmende(state));
    dispatch(
      addNotification({ id: uuidv4(), date, seen: false, id_amende: state.id })
    );
    handleClose();
    toast.success("amende ajoutée avec succées");
  };

  return (
    <Modal
      isOpen={show}
      toggle={handleClose}
      centered
      fullscreen="sm"
      size="lg"
    >
      <ModalHeader toggle={handleClose}> <h4>Declarer une nouvelle amende</h4> </ModalHeader>
      <ModalBody>
        <Form>
          <Row>
            {/* Left col */}
            <FormGroup>
              <Row>
                <Col>
                  <Label for="nomchauffeur">
                    Nom et prenom du chauffeur{" "}
                    <strong className="text-danger">*</strong>
                  </Label>
                  <Input
                    id="nomchauffeur"
                    name="nomchauffeur"
                    type="text"
                    required
                    value={state.nomchauffeur}
                    onChange={(event) => changeCreds(event)}
                  />
                </Col>

                <Col>
                  <Label for="nomvehicule">
                    Vehicule <strong className="text-danger">*</strong>
                  </Label>
                  <Input
                    id="nomvehicule"
                    name="nomvehicule"
                    type="text"
                    required
                    value={state.nomvehicule}
                    onChange={(event) => changeCreds(event)}
                  />
                </Col>

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

                <Col>
                  <Label for="date">
                    Date <strong className="text-danger">*</strong>
                  </Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    onChange={(event) => changeCreds(event)}
                    value={state.date}
                    required
                  />
                </Col>
              </Row>
            </FormGroup>

            <FormGroup>
              <Row>
                <Col>
                  <Label for="montant">
                    Montant <strong className="text-danger">*</strong>
                  </Label>
                  <Input
                    id="montant"
                    name="montant"
                    type="text"
                    placeholder="montant"
                    value={state.montant}
                    required
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
                    placeholder="piecejointe"
                    value={state.piecejointe}
                    required
                    onChange={(event) => changeCreds(event)}
                  />
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

export default AjouterAmende;
