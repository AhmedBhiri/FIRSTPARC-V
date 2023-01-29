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
import { modifyMission } from "../../../redux/actions/missionActions";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ModifyModal({ show, handleClose, rowID }) {
  const mission = useSelector((state) => state.missions).filter(
    ({ id }) => id === rowID
  )[0];

  const [state, setState] = useState({
    id: mission.id,
    numero: mission.numero,
    date: mission.date,
    client: mission.client,
    typeFacture: mission.typeFacture,
    vehicule: mission.vehicule,
    remorque: mission.remorque,
    chauffeur: mission.chauffeur,
    representant: mission.representant,
    nBT: mission.nBT,
    dateBT: mission.dateBT,
    nBonReception: mission.nBonReception,
    dateBonReception: mission.dateBonReception,
    produit: mission.produit,
    unite: mission.unite,
    lieuDepart: mission.lieuDepart,
    lieuArrive: mission.lieuArrive,
    distance: mission.distance,
    quantite: mission.quantite,
    ecartPoids: mission.ecartPoids,
    prixu: mission.prixu,
    brutht: mission.brutht,
    netht: mission.netht,
    mttTVA: mission.mttTVA,
    totalTTC: mission.totalTTC,
    numFacture: mission.numFacture,
    observation: mission.observation,
    etat: mission.etat,
  });

  const dispatch = useDispatch();

  const changeCreds = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    dispatch(modifyMission(state));

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
                    <Label for="numero">
                      Numéro <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="numero"
                      name="numero"
                      type="text"
                      required
                      value={state.numero}
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
                    <Label for="client">
                      Client <strong className="text-danger">*</strong>
                    </Label>

                    <Input
                      id="client"
                      name="client"
                      type="select"
                      value={state.client}
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
                    <Label for="typeFacture">
                      Type de facturation{" "}
                      <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="typeFacture"
                      name="typeFacture"
                      type="select"
                      value={state.typeFacture}
                      required
                      onChange={(event) => changeCreds(event)}
                    >
                      <option>Fait votre choix...</option>
                      <option>Type 1</option>
                      <option>Type 2</option>
                      <option>Type 3</option>
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
                      <option>V 1</option>
                      <option>V 2</option>
                      <option>V 3</option>
                    </Input>
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                <Row>
                  <Col>
                    <Label for="remorque">
                      Remorque <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="remorque"
                      name="remorque"
                      type="select"
                      value={state.remorque}
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
                    <Label for="represntant">
                      Representant <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="representant"
                      name="representant"
                      type="select"
                      required
                      value={state.representant}
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
                    <Label for="nBT">
                      N° BT <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="nBT"
                      name="nBT"
                      type="text"
                      placeholder="N° bon de réception"
                      value={state.nBT}
                      required
                      onChange={(event) => changeCreds(event)}
                    />
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                <Row>
                  <Col>
                    <Label for="dateBT">
                      Date BT <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="dateBT"
                      name="dateBT"
                      type="date"
                      value={state.dateBT}
                      required
                      onChange={(event) => changeCreds(event)}
                    ></Input>
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                <Row>
                  <Col>
                    <Label for="nBonReception">
                      N° bon de réception{" "}
                      <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="nBonReception"
                      name="nBonReception"
                      type="text"
                      placeholder="N° bon de réception"
                      value={state.nBonReception}
                      required
                      onChange={(event) => changeCreds(event)}
                    />
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                <Row>
                  <Col>
                    <Label for="dateBonReception">
                      Date bon de réception{" "}
                      <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="dateBonReception"
                      name="dateBonReception"
                      type="date"
                      value={state.dateBonReception}
                      required
                      onChange={(event) => changeCreds(event)}
                    />
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                <Row>
                  <Col>
                    <Label for="produit">
                      Produit <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="produit"
                      name="produit"
                      type="select"
                      value={state.produit}
                      required
                      onChange={(event) => changeCreds(event)}
                    >
                      <option>Fait votre choix...</option>
                      <option>Produit 1</option>
                      <option>Produit 2</option>
                      <option>Produit 3</option>
                    </Input>
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                <Row>
                  <Col>
                    <Label for="unite">
                      Unité <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="produit"
                      name="unite"
                      type="select"
                      value={state.unite}
                      required
                      onChange={(event) => changeCreds(event)}
                    >
                      <option>Fait votre choix...</option>
                      <option>Unité 1</option>
                      <option>Unité 2</option>
                      <option>Unité 3</option>
                    </Input>
                  </Col>
                </Row>
              </FormGroup>
            </Col>

            {/* Right col */}
            <Col>
              <FormGroup>
                <Row>
                  <Col>
                    <Label for="lieudepart">
                      Lieu de depart <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="lieudepart"
                      name="lieuDepart"
                      type="select"
                      value={state.lieuDepart}
                      onChange={(event) => changeCreds(event)}
                      required
                    >
                      <option>Fait votre choix...</option>
                      <option>Tunis</option>
                      <option>Sousse</option>
                      <option>Sfax</option>
                      <option>Monastir</option>
                    </Input>
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                <Row>
                  <Col>
                    <Label for="lieuarrivée">
                      Lieu d'arrivé <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="lieuarrivé"
                      name="lieuArrive"
                      type="select"
                      value={state.lieuArrive}
                      onChange={(event) => changeCreds(event)}
                      required
                    >
                      <option>Fait votre choix...</option>
                      <option>Tunis</option>
                      <option>Sousse</option>
                      <option>Sfax</option>
                      <option>Monastir</option>
                    </Input>
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                <Row>
                  <Col>
                    <Label for="distance">
                      Distance <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="distance"
                      name="distance"
                      type="text"
                      value={state.distance}
                      placeholder="0"
                      onChange={(event) => changeCreds(event)}
                      required
                    />
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                <Row>
                  <Col>
                    <Label for="Quantité">
                      Quantité <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="quantité"
                      name="quantite"
                      type="text"
                      value={state.quantite}
                      placeholder="0.000"
                      onChange={(event) => changeCreds(event)}
                      required
                    />
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                <Row>
                  <Col>
                    <Label for="Ecart Poids">
                      Ecart Poids <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="ecartPoids"
                      name="ecartPoids"
                      type="text"
                      placeholder="0.000"
                      value={state.ecartPoids}
                      onChange={(event) => changeCreds(event)}
                      required
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <h4>Facturation</h4>
                </Row>
                <Row>
                  <Col>
                    <Label for="prixu">
                      Prix U <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="prixu"
                      name="prixu"
                      type="text"
                      placeholder="Prix U"
                      value={state.prixu}
                      onChange={(event) => changeCreds(event)}
                      required
                    />
                  </Col>
                  <Col>
                    <Label for="brutht">
                      Brut HT<strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="brutht"
                      name="brutht"
                      type="text"
                      placeholder="Brut HT"
                      value={state.brutht}
                      onChange={(event) => changeCreds(event)}
                      required
                    />
                  </Col>

                  <Col>
                    <Label for="netht">
                      Net HT <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="netht"
                      name="netht"
                      type="text"
                      placeholder="Net HT"
                      value={state.netht}
                      onChange={(event) => changeCreds(event)}
                      required
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <h4>Taux</h4>
                </Row>
                <Row>
                  <Col>
                    <Label for="mttTVA">
                      MTT TVA <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="mttTVA"
                      name="mttTVA"
                      type="text"
                      placeholder="MTT TVA"
                      value={state.mttTVA}
                      onChange={(event) => changeCreds(event)}
                      required
                    />
                  </Col>
                  <Col>
                    <Label for="totalTTC">
                      Total TTC <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="totalTTC"
                      name="totalTTC"
                      type="text"
                      placeholder="TOTAL TTC"
                      value={state.totalTTC}
                      onChange={(event) => changeCreds(event)}
                      required
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col>
                    <Label for="numFacture">
                      N Facture' <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="numFacture"
                      name="numFacture"
                      type="text"
                      value={state.numFacture}
                      placeholder="numFacture"
                      onChange={(event) => changeCreds(event)}
                      required
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col>
                    <Label for="observation">
                      Observation <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="observation"
                      name="observation"
                      type="textarea"
                      value={state.observation}
                      placeholder="observation"
                      onChange={(event) => changeCreds(event)}
                      required
                    />
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

export default ModifyModal;
