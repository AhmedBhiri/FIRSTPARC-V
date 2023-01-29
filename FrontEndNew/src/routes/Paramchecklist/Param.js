import React from "react";
import Card from "../../components/Cards/Card";
import { Container, Row, Col } from "react-bootstrap";

function Param() {
  return (
    <Container>
      <Row>
        <Col lg="3" sm="6">
          <Card />
        </Col>

        <Col lg="3" sm="6">
          <Card />
        </Col>

        <Col lg="3" sm="6">
          <Card />
        </Col>
      </Row>
    </Container>
  );
}

export default Param;
