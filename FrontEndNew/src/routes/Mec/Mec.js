import React, { useState } from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import Table from "./Table";
import AjouterMissionMec from "../../components/Modals/AjouterMissionMec/AjouterMissionMec";
import InfosCard from "../../components/InfosCard/InfosCard";
function Mec() {
  const [openAjouterMissionMec, setOpenAjouterMissionMec] = useState(false);

  const toggleOpenAjouterMissionMec = () => {
    setOpenAjouterMissionMec(!openAjouterMissionMec);
  };

  return (
    <Container>
      <Row>
        <Col lg="3" sm="6">
          <InfosCard
            title="Effectuées"
            infos="5"
            iconName="fa-solid fa-circle-check"
            bgColor="#38b000"
            linkCard="/admin/mec"
          />
        </Col>

        <Col lg="3" sm="6">
          <InfosCard
            title="En cours"
            infos="10"
            iconName="fa-solid fa-spinner "
            bgColor="#f77f00"
            linkCard="/admin/mec"
          />
        </Col>

        <Col lg="3" sm="6">
          <InfosCard
            title="Attentes"
            infos="2"
            iconName="fa-solid fa-clock"
            bgColor="#00b4d8"
            linkCard="/admin/mec"
          />
        </Col>

        <Col lg="3" sm="6">
          <InfosCard
            title="Annulées"
            infos="5"
            iconName="fa-solid fa-ban"
            bgColor="#dc2f02"
            linkCard="/admin/mec"
          />
        </Col>
      </Row>
      <h4>Liste des missions</h4>
      <Button
        className=" btn btn-info rounded "
        onClick={toggleOpenAjouterMissionMec}
      >
        Ajouter une mission
      </Button>

      <Row className="mt-5">
        <Table />
      </Row>

      {openAjouterMissionMec && (
        <AjouterMissionMec
          show={openAjouterMissionMec}
          handleClose={toggleOpenAjouterMissionMec}
        />
      )}
    </Container>
  );
}
export default Mec;
