import React, { useState } from "react";

import Alert from "@mui/material/Alert";

import { Button, Row } from "reactstrap";
import { Col } from "react-bootstrap";
import ViewMore from "../../Missions/ViewMore";

function NotificationsItem({ id, id_mission }) {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };
  return (
    <Alert variant="filled" severity="info">
      <Row className="d-flex">
        <Col>Notifications : vous avez une mission en attente!</Col>
        <Col className=" justify-self-end">
          <Button variant="info" onClick={toggleShow}>
            Voir plus details
          </Button>
        </Col>
      </Row>

      {show && (
        <ViewMore show={show} handleClose={toggleShow} rowID={id_mission} />
      )}
    </Alert>
  );
}

export default NotificationsItem;
