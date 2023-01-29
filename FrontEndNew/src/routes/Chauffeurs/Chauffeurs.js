import { Card, Container, Row, Col  } from "react-bootstrap";
import React from "react";
import Table from "./TableChauffeur";
function Chauffeurs() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h3">Liste des chauffeurs </Card.Title>
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

export default Chauffeurs;
