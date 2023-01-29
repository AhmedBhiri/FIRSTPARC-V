import React, { useState } from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import Table from "./Table";
import AjouterMission from "../../components/Modals/AjouterMission/AjouterMission";
import InfosCard from "../../components/InfosCard/InfosCard";
function Missions() {
  const [openAjouterMission, setOpenAjouterMission] = useState(false);

  const toggleOpenAjouterMission = () => {
    setOpenAjouterMission(!openAjouterMission);
  };

  return (
    <Container>
      <Row>
        <Col lg="3" sm="6">
          <InfosCard
            title="effectués"
            infos="5"
            iconName="fa-solid fa-circle-check"
            bgColor="#38b000"
            linkCard="/admin/missions"
          />
        </Col>

        <Col lg="3" sm="6">
          <InfosCard
            title="En cours"
            infos="10"
            iconName="fa-solid fa-spinner "
            bgColor="#f77f00"
            linkCard="/admin/missions"
          />
        </Col>

        <Col lg="3" sm="6">
          <InfosCard
            title="Attentes"
            infos="2"
            iconName="fa-solid fa-clock"
            bgColor="#00b4d8"
            linkCard="/admin/missions"
          />
        </Col>

        <Col lg="3" sm="6">
          <InfosCard
            title="Annulées"
            infos="5"
            iconName="fa-solid fa-ban"
            bgColor="#dc2f02"
            linkCard="/admin/missions"
          />
        </Col>
      </Row>
      <h4>Liste des missions</h4>
      <Button
        className=" btn btn-info rounded "
        onClick={toggleOpenAjouterMission}
      >
        Ajouter une mission
      </Button>

      <Row className="mt-5">
        <Table />
      </Row>

      {openAjouterMission && (
        <AjouterMission
          show={openAjouterMission}
          handleClose={toggleOpenAjouterMission}
        />
      )}
    </Container>
  );
}
export default Missions;
