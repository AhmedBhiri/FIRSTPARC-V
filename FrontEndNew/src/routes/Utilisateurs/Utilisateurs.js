import React, { useState } from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import TableUser from "./TableUsers";
import AjouterUser from "../../components/Modals/AjouterUser/AjouterUser";
function Users() {
  const [openAjouterUser, setOpenAjouterUser] = useState(false);
  const toggleOpenAjouterUser = () => {
    setOpenAjouterUser(!openAjouterUser);
  };

  return (
    <Container>
      <h4>Liste des utilisateurs </h4>
      <Button className ="btn btn-info rounded mt-3" onClick={toggleOpenAjouterUser}>
        Ajouter un nouvel utilisateur
      </Button>

      <Row className="mt-5">
        <TableUser />
      </Row>

      {openAjouterUser && (
        <AjouterUser
          show={openAjouterUser}
          handleClose={toggleOpenAjouterUser}
        />
      )}
    </Container>
  );
}
export default Users;
