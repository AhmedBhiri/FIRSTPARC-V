import React, { useState } from "react";

import { Modal, Button, Row, Col, FormGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Input, Label } from "reactstrap";
import { modifyMission } from "../../redux/actions/missionActions";

function ViewMore({ show, handleClose, rowID }) {
  const mission = useSelector((state) => state.missions).filter(
    ({ id }) => id === rowID
  )[0];
  const dispatch = useDispatch();

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

  const changeCreds = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleChange = () => {
    dispatch(modifyMission(state));
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title> Mission M{rowID[0]} </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <h4>Informations mission:</h4>
        </Row>

        <Row>
          <Col>
            <Row>
              <h5 className="text-info col-6">Date:</h5>
              <p className="col-6 text-left">{mission.date}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Clients:</h5>
              <p className="col-6 text-left">{mission.client}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Type de facturation:</h5>
              <p className="col-6 text-left">{mission.typeFacture}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Véhicule:</h5>
              <p className="col-6 text-left">{mission.vehicule}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Remorque:</h5>
              <p className="col-6 text-left">{mission.remorque}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Chauffeur:</h5>
              <p className="col-6">{mission.chauffeur}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">N° BT:</h5>
              <p className="col-6">{mission.nBT}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Date BT:</h5>
              <p className="col-6">{mission.dateBT}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">N° bon réception:</h5>
              <p className="col-6">{mission.nBonReception}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Date bon réception:</h5>
              <p className="col-6">{mission.dateBonReception}</p>
            </Row>
            <Row>
              <h5 className="text-info col-6">Produit :</h5>
              <p className="col-6">{mission.produit}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Unité</h5>
              <p className="col-6">{mission.unite}</p>
            </Row>
          </Col>

          <Col>
            <Row>
              <h5 className="text-info col-6">Lieu depart:</h5>
              <p className="col-6">{mission.lieuDepart}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Lieu arrivée</h5>
              <p className="col-6">{mission.lieuArrive}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Distance</h5>
              <p className="col-6">{mission.distance}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Quantité</h5>
              <p className="col-6">{mission.quantite}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Ecart poids</h5>
              <p className="col-6">{mission.ecartPoids}</p>
            </Row>
            <Row>
              <h5 className="text-info col-6">Prix U</h5>
              <p className="col-6">{mission.prixu}</p>
            </Row>
            <Row>
              <h5 className="text-info col-6">Brut Ht</h5>
              <p className="col-6">{mission.brutht}</p>
            </Row>
            <Row>
              <h5 className="text-info col-6">NET HT</h5>
              <p className="col-6">{mission.netht}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">MTT TVA</h5>
              <p className="col-6">{mission.mttTVA}</p>
            </Row>
            <Row>
              <h5 className="text-info col-6">Total TTC</h5>
              <p className="col-6">{mission.totalTTC}</p>
            </Row>
            <Row>
              <h5 className="text-info col-6">Numéro Facture</h5>
              <p className="col-6">{mission.numFacture}</p>
            </Row>
            <Row>
              <h5 className="text-info col-6">Observation</h5>
              <p className="col-6">{mission.observation}</p>
            </Row>
            <Row>
              <FormGroup>
                <Label>Etat</Label>
                <Input type="select" name="etat" onChange={changeCreds}>
                  <option selected={mission.etat === "attente"} value="attente">
                    En attente
                  </option>
                  <option
                    selected={mission.etat === "en_cours"}
                    value="en_cours"
                  >
                    En cours
                  </option>
                  <option selected={mission.etat === "annulée"} value="annulée">
                    Annulée
                  </option>
                  <option
                    selected={mission.etat === "effectuée"}
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
