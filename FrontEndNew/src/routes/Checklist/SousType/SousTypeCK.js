import React, { useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import TableSousTypeCK from "./TableSousTypeCK";
import { Link, BrowserRouter } from 'react-router-dom';

import AjouterSousTypeCK from "../../../components/Modals/AjouterSousTypeCK/AjouterSousTypeCK";


function SousTypeCK() {
  

  const [openAjouterSousTypeCK, setOpenAjouterSousTypeCK] = useState(false);
  const [reloadSousTypeCKTable, setReloadSousTypeCKTable] = useState(false);


  const toggleOpenAjouterSousTypeCK= (reloadAfterAdd = false) => {
    setOpenAjouterSousTypeCK(!openAjouterSousTypeCK);
    if (reloadAfterAdd) {
      setReloadSousTypeCKTable(!reloadSousTypeCKTable)
    }

  };



  return (
    <Container>
   
        <div>
      <h4>Liste des soustypes checklist </h4>
      <Button className="btn btn-info rounded mt-3" onClick={() => toggleOpenAjouterSousTypeCK()}>
      + Créer un soustype
      </Button>
      

      <Row className="mt-5">
        <TableSousTypeCK reloadSousTypeCKTable={reloadSousTypeCKTable} />
      </Row>

      {openAjouterSousTypeCK && (
        <AjouterSousTypeCK
          show={openAjouterSousTypeCK}
          handleClose={toggleOpenAjouterSousTypeCK}
        />
      )}</div>
     
    </Container>
    
    
    
  );
}
export default SousTypeCK;
