import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

//import { addNotification } from "../../../redux/actions/notificationsActions";
import { addUser } from "../../../redux/actions/usersActions";

const today = new Date();

const date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

function AjouterUser({ show, handleClose }) {
  const [state, setState] = useState({
    id:"uuidv4",
    nom: "",
    prenom: "",
    //email: "",
    //numtel: "",
    role: "",
    datecreation: "",
  });

  const dispatch = useDispatch();

  const changeCreds = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    dispatch(addUser(state));

    handleClose();
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
        {" "}
        <h4>Ajouter un nouvel utilisateur </h4>
      </ModalHeader>
      <ModalBody>
        <Form>
          <Row>
            {/* Left col */}
            <Col>
              <FormGroup>
                <Row>
                  <Col>
                    <Label for="numero">
                      Nom d'utilisateur{" "}
                      <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="nom"
                      name="nom"
                      type="text"
                      required
                      value={state.nom}
                      onChange={(event) => changeCreds(event)}
                    />
                  </Col>

                  <Col>
                    <Label for="prenom">
                      Prénom d'utilisateur{" "}
                      <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="prenom"
                      name="prenom"
                      type="text"
                      onChange={(event) => changeCreds(event)}
                      value={state.prenom}
                      required
                    />
                  </Col>
                </Row>
              </FormGroup>
              {/* <FormGroup>
                <Row>
                  <Col>
                    <Label for="email">
                      Email <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={state.email}
                      onChange={(event) => changeCreds(event)}
                    />
                  </Col>
                </Row>
              </FormGroup>*/}

              <FormGroup>
                <Row>
                  <Col>
                    <Label for="role">
                      Role <strong className="text-danger">*</strong>
                    </Label>

                    <Input
                      id="role"
                      name="role"
                      type="select"
                      value={state.role}
                      required
                      onChange={(event) => changeCreds(event)}
                    >
                      <option>Fait votre choix...</option>
                      <option>Chauffeur</option>
                      <option>Mecanicien</option>
                      <option>Chef de parc</option>
                      <option>Autres..</option>
                    </Input>
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                <Row>
                  <Col>
                    <Label for="motdepasse">
                      Mot de passe <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="motdepasse"
                      name="motdepasse"
                      type="password"
                      value={state.motdepasse}
                      required
                      onChange={(event) => changeCreds(event)}
                    ></Input>
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col>
                    <Label for="confirmmotdepasse">
                      Confirmer mot de passe{" "}
                      <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="motdepasse2"
                      name="confirmmotdepasse"
                      type="password"
                      value={state.confirmmotdepasse}
                      required
                      onChange={(event) => changeCreds(event)}
                    ></Input>
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                <Row>
                  <Col>
                    <Label for="photo">
                      Photo <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="photo"
                      name="photo"
                      type="file"
                      value={state.lieu}
                      required
                      onChange={(event) => changeCreds(event)}
                    ></Input>
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

export default AjouterUser;
