import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import Table from "./TableMecanicien";

function Mecaniciens() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h3">Liste des mecaniciens </Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive ">
                <Table />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Mecaniciens;
