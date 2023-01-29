import React, { useState } from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import Table from "./Table";
import AjouterPanne from "../../components/Modals/AjouterPanne/AjouterPanne";
function Panne() {
  const [openAjouterPanne, setOpenAjouterPanne] = useState(false);

  const toggleOpenAjouterPanne = () => {
    setOpenAjouterPanne(!openAjouterPanne);
  };

  return (
    <Container>
      <h4>Liste des pannes</h4>
      <Button
        className="btn btn-danger rounded "
        onClick={toggleOpenAjouterPanne}
      >
        Declarer une panne
      </Button>

      <Row className="mt-5">
        <Table />
      </Row>

      {openAjouterPanne && (
        <AjouterPanne
          show={openAjouterPanne}
          handleClose={toggleOpenAjouterPanne}
        />
      )}
    </Container>
  );
}
export default Panne;
