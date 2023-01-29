import React, { useEffect } from "react";
import Table from "./Table";
import { Container, Row, Card, Button, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MissionMecanicien() {
  const notificationsNotSeen = useSelector(
    (state) => state.notifications
  ).filter(({ seen }) => seen === false);

  useEffect(() => {
    if (notificationsNotSeen.length > 0) {
      toast.warn("Vous avez des nouvelles notifications");
    }
  }, []);

  return (
    <Container>
      <Row className="d-flex justify-content-between align-items-center">
        <h4>Liste des missions </h4>
      </Row>
      <Row className="mt-5">
        <Table />
      </Row>
    </Container>
  );
}

export default MissionMecanicien;
