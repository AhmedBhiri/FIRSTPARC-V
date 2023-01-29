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

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { modifyUser } from "../../../redux/actions/usersActions";

function ModifyUserModal({ show, handleClose, rowID }) {
  const user = useSelector((state) => state.users).filter(
    ({ id }) => id === rowID
  )[0];

  const [state, setState] = useState({
    id: user.id,
    nom: user.nom,
    prenom: user.prenom,
    /*email: user.email,
    numtel: user.numtel,*/
    role: user.role,
    datecreation: user.datecreation,
    motdepasse: user.motdepasse,
  });

  const dispatch = useDispatch();

  const changeCreds = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    dispatch(modifyUser(state));

    handleClose();

    toast.success("Utilisateur modifié avec succées");
  };

  return (
    <Modal
      isOpen={show}
      toggle={handleClose}
      centered
      fullscreen="sm"
      size="lg"
    >
      <ModalHeader toggle={handleClose}>Ajouter un utilisateur</ModalHeader>
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
                      Prenom d'utilisateur{" "}
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

                  <Col>
                    <Label for="numtel">
                      N de telephone <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="numtel"
                      name="numtel"
                      type="text"
                      onChange={(event) => changeCreds(event)}
                      value={state.numtel}
                      required
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
                    <Label for="motdepasse">
                      Confirmer mot de passe <strong className="text-danger">*</strong>
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
          Modifier
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default ModifyUserModal;
