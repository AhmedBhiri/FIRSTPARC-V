import React, { useState, useEffect } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { Link, BrowserRouter } from 'react-router-dom';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input
  } from "reactstrap";
  import { Card, Col } from "react-bootstrap";

import TableTypeCK from '../RemplirCK/RemplirTableCK';
  import { CheckList } from '../../../api/CK/CK/CK';

function AfficherCK() {

  const [reloadTypeCKTable, setReloadTypeCKTable] = useState(false);

  const [ck, setck] = useState([]);
  const [state, setState] = useState({
    DesignationCK: undefined
});

  const { getCK } = CheckList();

  useEffect(() => {
    getCK().then((res) => {
      setck(res.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const changeCreds = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

    return (
        <Container>
          <FormGroup>
          
          <Row>
          <i class="fa fa-eye" aria-hidden="true"></i>
          <Col lg="4" sm="8">
            <Label for='exampleCheckbox'>
                    <h3>Afficher un Checklist </h3>
                </Label>
          </Col>
          </Row>
            </FormGroup>

        <Card >
        <Card.Body className="table-full-width table-responsive">

        <Form>
          <Row>
            {/* Left col */}
            <Col>
              <FormGroup>
                <Row>
                <Col>
                    <Label for="DesignationCK">
                      Designation CK <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="DesignationCK"
                      name="DesignationCK"
                      type="select"
                      value={state.DesignationCK || ''}
                      required
                      onChange={(event) => changeCreds(event)}
                    >
                      <option>Fait votre choix...</option>
                      {ck.map(({ CodeCK, DesignationCK }) => {
                                return (
                                    <option key={CodeCK} value={CodeCK}>
                                        {DesignationCK}
                                    </option>
                                );
                            })}
                    </Input>
                  </Col>
                  </Row>                  
                  </FormGroup>
                  <FormGroup>
                <Row>
                  <Col>
                  <button  type='button' class='btn btn-primary rounded mt-3' >
                  <i class="fa fa-eye" aria-hidden="true"> </i>

                          Afficher
                    </button>

                  </Col>
                </Row>
               </FormGroup>
                  </Col>
                  </Row>
                  </Form>
                  </Card.Body>
        </Card>


        <Row>
            <Col md="12">
            <Card className="strpied-tabled-with-hover">
                    <Card.Header>
                    <Card.Title as="h4">Lignes </Card.Title>
                    </Card.Header>
                    <Card.Body className="table-full-width table-responsive">
                    <TableTypeCK reloadTypeCKTable={reloadTypeCKTable} />
                    </Card.Body>
            </Card>
            </Col>
         </Row>


            </Container>

    );

}

export default AfficherCK;