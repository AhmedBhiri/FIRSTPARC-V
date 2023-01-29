import React from "react";
import { Container } from "react-bootstrap";
import { Card, CardBody, Row, Col, CardFooter } from "reactstrap";
import styles from "./missionstatscard.module.css";

function MissionstatsCard() {
  return (
    <Card>
      <Container>
        <Row className="d-flex justify-content-between align-items-center border-bottom">
          <Col className="col-8 d-flex justify-content-start my-4">
            <h4 className="my-0">Missions effectués</h4>
          </Col>
          <Col className="d-flex justify-content-end">
            <h4
              className={`my-0 ${styles.stats__number} ${styles.stats__number__color1}`}
            >
              550
            </h4>
          </Col>
        </Row>

        <Row className="d-flex justify-content-between align-items-center border-bottom">
          <Col className="col-8 d-flex justify-content-start my-4">
            <h4 className="my-0">Missions en cours</h4>
          </Col>
          <Col className="d-flex justify-content-end">
            <h4
              className={`my-0 ${styles.stats__number} ${styles.stats__number__color2}`}
            >
              100
            </h4>
          </Col>
        </Row>

        <Row className="d-flex justify-content-between align-items-center border-bottom">
          <Col className="col-8 d-flex justify-content-start my-4">
            <h4 className="my-0">Missions en attente</h4>
          </Col>
          <Col className="d-flex justify-content-end">
            <h4
              className={`my-0 ${styles.stats__number} ${styles.stats__number__color3}`}
            >
              250
            </h4>
          </Col>
        </Row>

        <Row className="d-flex justify-content-between align-items-center border-bottom">
          <Col className="col-8 d-flex justify-content-start my-4">
            <h4 className="my-0">Missions annulées</h4>
          </Col>
          <Col className="d-flex justify-content-end">
            <h4
              className={`my-0 ${styles.stats__number} ${styles.stats__number__color4}`}
            >
              50
            </h4>
          </Col>
        </Row>

        <Row
          className={`d-flex justify-content-between align-items-center ${styles.card__footer}`}
        >
          <Col className="col-8 d-flex justify-content-start my-4">
            <h4 className="my-0">
              <strong>TOTALE missions</strong>
            </h4>
          </Col>
          <Col className="d-flex justify-content-end">
            <h4
              className={`my-0 ${styles.stats__number} ${styles.stats__number__color5}`}
            >
              1150
            </h4>
          </Col>
        </Row>
      </Container>
    </Card>
  );
}

export default MissionstatsCard;
