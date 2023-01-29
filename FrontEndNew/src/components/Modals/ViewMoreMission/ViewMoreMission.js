import React from "react";

import { Modal, Button, Row, Container, Col } from "react-bootstrap";

function ViewMoreMission({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>View more mission</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row className="d-flex align-items-center mb-2">
            <Col>
              <h5 className="mr-2 mb-0 text-info">Creer par:</h5>
              <h5 className="mr-2 mb-0 text-info">Date depart:</h5>
              <h5 className="mr-2 mb-0 text-info">Date arrivée:</h5>
            </Col>

            <Col>
              <img
                src="https://i.pinimg.com/originals/5d/4d/b6/5d4db6e517a689e87c4266f61d77f803.png"
                width={200}
              />
            </Col>
          </Row>

          <Row className="d-flex align-items-center mb-2">
            <Col>
              <h5 className="mr-2 mb-0 text-info">Numéro de téléphone:</h5>
              <p className="mb-0">123456</p>
            </Col>
          </Row>

          <Row className="d-flex align-items-center mb-2">
            <Col>
              <h5 className="mr-2 mb-0 text-info">Age:</h5>
              <p className="mb-0">25</p>
            </Col>
          </Row>

          <Row className="d-flex align-items-center mb-2">
            <Col>
              <h5 className="mr-2 mb-0 text-info">Poste:</h5>
              <p className="mb-0">aaaa</p>
            </Col>
          </Row>

          <Row className="d-flex align-items-center mb-2">
            <Col>
              <h5 className="mr-2 mb-0 text-info">Description:</h5>
            </Col>
          </Row>

          <Row className="d-flex align-items-center mb-2">
            <Col>
              <p className="mb-0">sfsfsf</p>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ViewMoreMission;
