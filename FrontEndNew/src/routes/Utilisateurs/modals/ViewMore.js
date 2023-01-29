import React from "react";

import { Modal, Button, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

import Avatar from "../../../assets/img/avatar.png";

function ViewMore({ show, handleClose, rowID }) {
  const { nom, prenom, role, datecreation, photo } = useSelector(
    (state) => state.users
  ).filter(({ id }) => id === rowID)[0];

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title> Utilisateur n: {rowID} </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <Row className="mb-3">
              <h4>Details utilisateurs</h4>
            </Row>

            <Row>
              <h5 className="text-info col-3">Nom :</h5>
              <p className="col-3 text-left">{nom}</p>
            </Row>

            <Row>
              <h5 className="text-info col-3">Prenom:</h5>
              <p className="col-6 text-left">{prenom}</p>
            </Row>

            {/* <Row>
              <h5 className="text-info col-6">E-mail :</h5>
              <p className="col-6 text-left">{email}</p>
            </Row>

            <Row>
              <h5 className="text-info col-6">Numero de telephone:</h5>
              <p className="col-6 text-left">{numtel}</p>
            </Row>*/}

            <Row>
              <h5 className="text-info col-3">Role:</h5>
              <p className="col-6">{role}</p>
            </Row>

            <Row>
              <h5 className="text-info col-3">Date de creation:</h5>
              <p className="col-6">{datecreation}</p>
            </Row>
          </Col>

          <Col className="d-flex justify-content-center align-items-center col-4">
            <img src={Avatar} alt="User pic" width={150} />
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
