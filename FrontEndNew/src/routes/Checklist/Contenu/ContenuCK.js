import React, { useState } from "react";
import { Container, Row, Button } from "react-bootstrap";

import TableContenuCK from "./TableContenuCK";

import AjouterContenuCK from "../../../components/Modals/AjouterContenuCK/AjouterContenuCK";
import { Link, BrowserRouter } from 'react-router-dom';


function TypeCK() {
 

  const [openAjouterContenuCK, setOpenAjouterContenuCK] = useState(false);
  const [reloadContenuCKTable, setReloadContenuCKTable] = useState(false);



 

  const toggleOpenAjouterContenuCK= (reloadAfterAdd = false) => {
    setOpenAjouterContenuCK(!openAjouterContenuCK);
    if (reloadAfterAdd) {
      setReloadContenuCKTable(!reloadContenuCKTable)
    }
  };

  return (
    <Container>
     
       <div>
      <h4>Liste des contenu checklist </h4>
      <Button className="btn btn-info rounded mt-3" onClick={() => toggleOpenAjouterContenuCK()}>
      + Créer un contenu
      </Button>
     

      <Row className="mt-5">
        <TableContenuCK reloadContenuCKTable={reloadContenuCKTable} />
      </Row>

      {openAjouterContenuCK && (
        <AjouterContenuCK
          show={openAjouterContenuCK}
          handleClose={toggleOpenAjouterContenuCK}
        />
      )}</div>
    </Container>
    
    
    
  );
}
export default TypeCK;
