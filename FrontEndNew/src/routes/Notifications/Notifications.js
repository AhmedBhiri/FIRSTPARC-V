import React, { useState } from "react";

import Stack from "@mui/material/Stack";
import { Button, Container, Row } from "reactstrap";
import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import NotificationsItem from "./NotificationsItem/NotificationsItem";

function Notifications() {
  const notifications = useSelector((state) => state.notifications);

  return (
    <Container>
      <Row>
        <Col>
          <Stack spacing={2}>
            {notifications &&
              notifications.map(({ id, date, id_mission }, i) => (
                <NotificationsItem id={id} id_mission={id_mission} key={i} />
              ))}
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default Notifications;
