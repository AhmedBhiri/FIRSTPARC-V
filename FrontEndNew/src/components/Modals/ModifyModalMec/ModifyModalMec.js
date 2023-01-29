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
import { modifyMissionMec } from "../../../redux/actions/missionMecActions";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ModifyModalMec({ show, handleClose, rowID }) {
  const missionmec = useSelector((state) => state.missionsmec).filter(
    ({ id }) => id === rowID
  )[0];

  const [state, setState] = useState({
    id: missionmec.id,
    mecanicien: missionmec.mecanicien,
    vehicule: missionmec.vehicule,
    chauffeur: missionmec.chauffeur,
    typepanne: missionmec.typepanne,
    lieu:missionmec.lieu,
    etat: missionmec.etat,
  });

  const dispatch = useDispatch();

  const changeCreds = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    dispatch(modifyMissionMec(state));

    handleClose();

    toast.success("Mission modifié avec succées");
  };
  return (
    <Modal
      isOpen={show}
      toggle={handleClose}
      centered
      fullscreen="sm"
      size="lg"
    >
      <ModalHeader toggle={handleClose}>Modifier une mission</ModalHeader>
      <ModalBody>
        <Form>
          <Row>
            {/* Left col */}
            <Col>
              <FormGroup>
                <Row>
                  <Col>
                    <Label for="mecanicien">
                    Mecanicien <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="mecanicien"
                      name="mecanicien"
                      type="text"
                      required
                      value={state.mecanicien}
                      onChange={(event) => changeCreds(event)}
                    />
                  </Col>

                  <Col>
                    <Label for="vehicule">
                    vehicule <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="vehicule"
                      name="vehicule"
                      type="vehicule"
                      onChange={(event) => changeCreds(event)}
                      value={state.vehicule}
                      required
                    />
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
                      <option>Type 1 </option>
                      <option>Type 2</option>
                      <option>Type 3</option>
                      <option>Type 4</option>
                    </Input>
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                <Row>
                  <Col>
                    <Label for="chauffeur">
                      Chauffeur{" "}
                      <strong className="text-danger">*</strong>
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
                      <option>Ahmed Salah</option>
                      <option>Mohamed ALi</option>
                      <option>Samir bouali</option>
                    </Input>
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                <Row>
                  <Col>
                    <Label for="lieu">
                    lieu <strong className="text-danger">*</strong>
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
                      <option>sousse</option>
                      <option>sfax</option>
                      <option>tunis</option>
                      <option>beja</option>
                    </Input>
                  </Col>
                </Row>
              </FormGroup>
            </Col>

            {/* Right col */}
            
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
export default ModifyModalMec;
