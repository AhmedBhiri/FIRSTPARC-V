import React, { useState } from "react";

import Alert from "@mui/material/Alert";

import { Button, Row } from "reactstrap";
import { Col } from "react-bootstrap";
import ViewMore from "../../Pannes/ViewMore";

function NotificationsItem2({ id, id_missionMec }) {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };
  return (
    <Alert variant="filled" severity="info">
      <Row className="d-flex">
        <Col>Notifications : vous avez une tada en attente!</Col>
        <Col className=" justify-self-end">
          <Button variant="info" onClick={toggleShow}>
            Voir plus details
          </Button>
        </Col>
      </Row>

      {show && (
        <ViewMore show={show} handleClose={toggleShow} rowID={id_missionMec} />
      )}
    </Alert>
  );
}

export default NotificationsItem2;
