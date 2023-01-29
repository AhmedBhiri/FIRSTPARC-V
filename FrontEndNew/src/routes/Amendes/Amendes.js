import React, { useState } from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import Table from "./Table";
import InfosCard from "../../components/InfosCard/InfosCard";

import AjouterAmende from "../../components/Modals/AjouterAmende/AjouterAmende.js";
function Amendes() {
  const [openAjouterAmende, setOpenAjouterAmende] = useState(false);

  const toggleOpenAjouterAmende = () => {
    setOpenAjouterAmende(!openAjouterAmende);
  };

  return (
    <Container>
      

      <h4>Liste des Amendes</h4>
      <Button
        className="btn btn-danger rounded "
        onClick={toggleOpenAjouterAmende}
      >
        Declarer une amende
      </Button>

      <Row className="mt-5">
        <Table />
      </Row>

      {openAjouterAmende && (
        <AjouterAmende
          show={openAjouterAmende}
          handleClose={toggleOpenAjouterAmende}
        />
      )}
    </Container>
  );
}
export default Amendes;
