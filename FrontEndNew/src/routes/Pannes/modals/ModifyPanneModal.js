import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
import getCurrentPosition from "../../../components/Modals/AjouterPanne/GetCurrentPosition";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { modifyPanne } from "../../../redux/actions/panneAction";

function ModifyPanneModal({ show, handleClose, rowID }) {
  const panne = useSelector((state) => state.pannes).filter(
    ({ id }) => id === rowID
  )[0];

  const [state, setState] = useState({
    id: panne.id,
    date: panne.date,
    cause: panne.cause,
    piecejointe: panne.piecejointe,
    chauffeur: panne.chauffeur,
    vehicule: panne.vehicule,
    lieu: panne.lieu,
    etat: panne.etat,
  });

  const dispatch = useDispatch();

  const changeCreds = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    dispatch(modifyPanne(state));

    handleClose();

    toast.success("Panne modifié avec succées");
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
        <h4>Modifer panne</h4>
      </ModalHeader>
      <ModalBody>
        <Form>
          <Row>
            <Col>
              <FormGroup>
                <Row>
                  <Col>
                    <Label for="numero">
                      Numéro <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="numero"
                      name="numero"
                      type="text"
                      required
                      value={state.id}
                      onChange={(event) => changeCreds(event)}
                    />
                  </Col>

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
                      //value={state.piecejointe}
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
                      <option>Mercedes </option>
                      <option>peugeot</option>
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
                      <option>Sousse</option>
                      <option>Sfax </option>
                      <option>Tunis</option>
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
          Modifier
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default ModifyPanneModal;
