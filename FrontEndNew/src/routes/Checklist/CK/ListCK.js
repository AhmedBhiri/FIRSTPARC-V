import React, { useCallback } from 'react';
import { useEffect, useState } from 'react';
import { Form, FormGroup, Input, Label, Row, ModalFooter, Col, Container, Card, Button } from 'reactstrap';
import TableCK from './TableCK';
import { useHistory } from 'react-router-dom';
import { Link, BrowserRouter } from 'react-router-dom';
import { CheckList } from '../../../api/CK/CK/CK';

function ListCK({ show, handleClose }) {

    const [reloadCKTable] = useState(false);
    const { getLastRow } = CheckList();
    const [state, setState] = useState({
        CodeCK : undefined,
        DesignationCK : ""
    });

    useEffect(() => {
        getLastRow().then((res) => {
            setState(res.data);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    let history = useHistory();
    const LinkToCreateCK = async () => {
        history.push("/CK");
    };


    return (
        <Container>
          <FormGroup>
          
            <Row>
            <i class="fa fa-eye" aria-hidden="true"></i>
            <Col lg="4" sm="8">
                <Label for='exampleCheckbox'>
                        <h3>Afficher CheckLists  </h3>
                    </Label>
            </Col>
            </Row>
            </FormGroup>

            <Row>
            <Col md="12">
            <Card className="strpied-tabled-with-hover">
            <TableCK reloadCKTable={reloadCKTable} />
            </Card>
            </Col>
         </Row>


         <Row>
              <Col>
              <div class='bg-light clearfix'>
                   <button
                                          onClick={LinkToCreateCK}
                                          type='button'
                                          class='btn btn-success rounded mt-3 btn-block'
                                      >
                                          + Ajouter contenu à la Checklist
                                      </button>
                                      <button
                                          onClick={LinkToCreateCK}
                                          type='button'
                                          class='btn btn-primary rounded mt-3 btn-block'
                                      >
                                         ++ Créer Nouvelle CheckList
                                      </button>
              </div>
                                                 
              </Col>
          </Row>
       

        


            </Container>

    );

}

export default ListCK;