import React, { useCallback } from 'react';
import { useEffect, useState } from 'react';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import BtnLink from '@mui/material/Link';
import { toast } from 'react-toastify';
import TableTypeCK from './TableCK';
import { Col, Button, Container, Card } from 'react-bootstrap';
import { Form, FormGroup, Input, Label, Row, ModalFooter } from 'reactstrap';
import { Link, BrowserRouter } from 'react-router-dom';
import { Typeck } from '../../../api/CK/typeck/Typeck';
import { SousTypeck } from '../../../api/CK/soustypeck/SousTypeck';
import { Contenuck } from '../../../api/CK/contenuck/Contenuck';
import { CheckList } from '../../../api/CK/CK/CK';

import AjouterTypeCK from '../../../components/Modals/AjouterTypeCK/AjouterTypeCK';
import styles from "../table.module.css";
import TableCK from './TableCK';

import {
    Modal,
    ModalHeader,
    ModalBody
  } from "reactstrap";
  import { useHistory } from 'react-router-dom';

function CK({ show, handleClose }) {

    const [types, settypes] = useState([]);
    const [soustypes, setsousTypes] = useState([]);
    const [contenus, setcontenus] = useState([]);
    const [count, setCount] = useState([]);

    const [renderIt, setRenderIt] = useState(false);

    const [newData, setNewData] = useState();
    const { createCheckList } = CheckList();

    const { getCK } = Typeck();
    const { getSousTypeCK } = SousTypeck();
    const { getContenuCK } = Contenuck();
    const { getLastRow } = CheckList();
    const { getCountCKs } = CheckList();
    const [state, setState] = useState({
        CodeCK : undefined,
        CodeCK_Type: undefined,
        CodeCK_SousType: undefined,
        CodeCK_Contenu :undefined,
        DesignationCK : "",
    });

    const changeCredsN = (event) => {
        console.log('event.target.name', event.target.name);
        setState({...state, [event.target.name]: Number(event.target.value)});
    };

    const changeCredsS = (event) => {
        console.log('event.target.name', event.target.name);
        setState({...state, [event.target.name]: String(event.target.value)});
    };

    const [selectedOption, setSelectedOption] = useState(null);
    const [reloadCKTable] = useState(false);

    

    const options = [
        { label: 'Thing 1', value: 1 },
        { label: 'Thing 2', value: 2 }
    ];

    let formatedOptions = [];

    /*const formatContenu = () => {
        const newTab = contenu.map(({ Designation, CodeCK_Contenu }) => ({
            label: Designation,
            value: CodeCK_Contenu
        }));

        setNewData(newTab);
    };*/

    const handleCreateCks = () => {
        
        toast.success('CHEKCLIST est ajoutée avec succées!');

        createCheckList().then((response) => {
            console.log(response);
            setState({CodeCK: undefined, CodeCK_Type: undefined, CodeCK_SousType: undefined,CodeCK_Contenu: undefined, DesignationCK: ""});
            
        }).catch(e => {
            console.log(e);
        });
    };

    let history = useHistory();
    const handleCreateNewCk = async () => {

        await createCheckList({
            
            CodeCK: state.CodeCK ,
            CodeCK_Type : state.CodeCK_Type,
            CodeCK_SousType: state.CodeCK_SousType,
            CodeCK_Contenu: state.CodeCK_Contenu,
            DesignationCK: state.DesignationCK,
         
        })
        
        history.push("/ListCK");
    };

    const addContenuToCk = async () => {

        await createCheckList({
            CodeCK: state.CodeCK + 1,
            CodeCK_Type : state.CodeCK_Type,
            CodeCK_SousType: state.CodeCK_SousType,
            CodeCK_Contenu: state.CodeCK_Contenu,
            DesignationCK: state.DesignationCK,
         
        })
        
        history.push("/ListCK");
    };

    const LinkToListCK = async () => {
        history.push("/ListCK");
    };

    console.log(count);
    useEffect(() => {
        getLastRow().then((res) => {
            setState(res.data);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        getCountCKs().then((res) => {
            setCount(res.data);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    
    useEffect(() => {
        getCK().then((res) => {
            settypes(res.data);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        getSousTypeCK().then((res) => {
            setsousTypes(res.data);
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        getContenuCK().then((res) => {
            setcontenus(res.data);
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /*useEffect(() => {
        if (contenu.length) {
            formatContenu();
            setRenderIt(true);

            console.log('formatedOptions', formatedOptions);
        }
    }, [contenu]);*/

    return (
        <>
            <Container fluid>
                
        <Form>
            
            <FormGroup>
          <Row>
          <i class="fa fa-copy" aria-hidden="true"></i>
          <Col lg="4" sm="8">
            <Label for='exampleCheckbox'>
                    <h3>Ajouter un CheckList </h3>
                </Label>
          </Col>
          </Row>
            </FormGroup>

            <Card >
            <Card.Body className="table-full-width table-responsive">
            
            <FormGroup>
           
            <FormGroup>
                <Row>
                    <Col>
                        <Label for="CodeCK">
                        Code CK
                        <strong className='text-danger'>*</strong>
                        </Label>

                        <Input
                            id="CodeCK"
                            name="CodeCK"
                            type="text"
                            value= {state.CodeCK  }
                            onChange={(event) => changeCredsN(event)}
                            required
                            placeholder="Code CheckList"
                           />
                       
                    </Col>
                </Row>
            </FormGroup>
                <Row>
                    <Col>
                        <Label for='type'>
                            Selectionner un type{' '}
                             <strong className='text-danger'>*</strong>
                        </Label>


                        <Input
                            name='CodeCK_Type'
                            type='select'
                            value={state.CodeCK_Type }
                            required
                            onChange={changeCredsN}
                        >
                            <option>Selectionner votre choix...</option>

                            {types.map(({ CodeCK_Type, Designation }) => {
                                return (
                                    <option key={CodeCK_Type} value={CodeCK_Type}>
                                        {Designation}
                                    </option>
                                );
                            })}
                        </Input>
                    </Col>
                    <Col>
                    
                        <Button className='btn btn-info rounded btn-sm mt-3'>                    {' '}
                        <Link to='/TypeCK' onClick={() => {}}>
                        + Créer un nouveau type CHECKLIST
                        </Link>
                    </Button>
                    </Col>
            
                </Row>
            </FormGroup>

            <FormGroup>
                <Row>
                    <Col>
                        <Label for='CodeCK_SousType'>
                        Selectionner un sous type{' '}
                         <strong className='text-danger'>*</strong>
                        </Label>

                        <Input
                            name='CodeCK_SousType'
                            type='select'
                            value={state.CodeCK_SousType || ''}
                            required
                            onChange={(event) => changeCredsN(event)}
                        >
                            <option>Selectionner votre choix...</option>

                            {soustypes.map(({ CodeCK_SousType, Designation }) => {
                                return (
                                    <option key={CodeCK_SousType} value={CodeCK_SousType}>
                                        {Designation}
                                    </option>
                                );
                            })}
                        </Input>
                    </Col>
                <Col>

                    <Button className='btn btn-info rounded btn-sm mt-3'>
                        {' '}
                        <Link to='/SousTypeCK' onClick={() => {}}>
                    + Créer un nouveau sous type CHECKLIST
                        </Link>
                    </Button>{' '}
                </Col>
                    <Row>
                    
                </Row>
                </Row>

            </FormGroup>

            <FormGroup>
                <Row>
                <Col>
                        <Label for='CodeCK_Contenu'>
                        Selectionner un contenu{' '}
                         <strong className='text-danger'>*</strong>
                        </Label>

                        <Input
                            name='CodeCK_Contenu'
                            type='select'
                            value={state.CodeCK_Contenu || ''}
                            required
                            onChange={(event) => changeCredsN(event)}
                            Multi
                        >
                            <option>Selectionner votre choix...</option>

                            {contenus.map(({ CodeCK_Contenu, Designation }) => {
                                return (
                                    <option key={CodeCK_Contenu} value={CodeCK_Contenu}>
                                        {Designation}
                                    </option>
                                );
                            })}
                        </Input>
                    </Col>
                    <Col>
                        <Button className='btn btn-info rounded btn-sm mt-3'>
                            {' '}
                            <Link to='/ContenuCK' onClick={() => {}}>
                        + Créer un nouveau contenu CHECKLIST
                            </Link>
                        </Button>{' '}
                </Col>
                
                </Row>
            </FormGroup>

            <FormGroup>
                <Row>
                    <Col>
                        <Label for="DesignationCK">
                        Saisir la designation de CheckList{' '} 
                        <strong className='text-danger'>*</strong>
                        </Label>

                        <Input
                            id="DesignationCK"
                            name="DesignationCK"
                            type="text"
                            value={state.DesignationCK|| ''}
                            onChange={(event) => changeCredsS(event)}
                            required
                            placeholder="Designation CheckList"
                           />
                       
                    </Col>
                </Row>
            </FormGroup>

            <Row>
                <Col>
                <div class='bg-light clearfix'>
                <button
                                            onClick={handleCreateNewCk}
                                            type='button'
                                            class='btn btn-success rounded mt-3 btn-block'
                                        >
                                            <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                            <br />
                                             Valider
                                        </button>
                                        <button
                                          onClick={LinkToListCK}
                                          type='button'
                                          class='btn btn-warning rounded mt-3 btn-block'
                                      >
                                        <i class="fa fa-eye" aria-hidden="true"></i>
                                        <br />
                                          Afficher la liste des checklists
                                      </button>

                                       
                                        
                                    </div>
                    
                </Col>
            </Row>  
        </Card.Body>
        </Card>
        </Form>

      
         
               
            </Container>
        </>
    );
}

export default CK;
