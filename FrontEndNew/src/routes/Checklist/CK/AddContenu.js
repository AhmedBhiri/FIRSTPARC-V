import React, { useCallback } from 'react';
import { useEffect, useState } from 'react';

import { Modal, Button, Col, ModalFooter } from 'react-bootstrap';
import { Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { Contenuck } from '../../../api/CK/contenuck/Contenuck';
import { CheckList } from '../../../api/CK/CK/CK';

function AddContenu({ show, handleClose, CK }) {
    const [contenus, setcontenus] = useState([]);
    const [state, setState] = useState({CodeCK_Contenu :undefined});

  const { getContenuCK } = Contenuck();
  const { createCheckList } = CheckList();

    useEffect(() => {
        getContenuCK().then((res) => {
            setcontenus(res.data);
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const changeCredsN = (event) => {
        console.log('event.target.name', event.target.name);
        setState({...state, [event.target.name]: Number(event.target.value)});
    };

    const handleAddNewContenu = async () => {

        await createCheckList({
            
            CodeCK: CK.CodeCK,
            CodeCK_Type : CK.CK_Type.CodeCK_Type,
            CodeCK_SousType: CK.CK_SousType.CodeCK_SousType,
            CodeCK_Contenu: state.CodeCK_Contenu,
            DesignationCK: CK.DesignationCK         
        })
    };

    return (
        <Modal show={show} onHide={handleClose} size='xs'>
            <Modal.Header closeButton>
                <Modal.Title> CheckList N° : {CK.CodeCK} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Row className='mb-3'>
                        <h4>Ajouter Contenu à la CheckList</h4>
                    </Row>                    
                    <Row>
                        {' '}
                        <Col>
                            <h5 className='text-info col-3'>Type :</h5>{' '}
                        </Col>
                        <Col>
                            <p className='text-left'>{CK.CK_Type.Designation}</p>{' '}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h5 className='text-info col-3'>Sous type :</h5>
                        </Col>
                        <Col>
                            <p className=' text-left'>{CK.CK_SousType.Designation}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h5 className='text-info col-3'>Designation :</h5>
                        </Col>
                        <Col>
                            <p className='text-left'>{CK.DesignationCK}</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h5 className='text-info col-3'>Contenu :</h5>{' '}
                        </Col>
                        <Col>
                            
                        <Input
                            name='CodeCK_Contenu'
                            type='select'
                            value={state.CodeCK_Contenu || ''}
                            required
                            onChange={(event) => changeCredsN(event)}
                        >
                            <option>Selectionner le contenu </option>

                            {contenus.map(({ CodeCK_Contenu, Designation }) => {
                                return (
                                    <option key={CodeCK_Contenu} value={CodeCK_Contenu}>
                                        {Designation}
                                    </option>
                                );
                            })}
                        </Input>
                        </Col>
                    </Row>
                </Row>
            </Modal.Body>
            <ModalFooter className="d-flex justify-content-end">
            <Button variant='secondary' onClick={''}>
                    Fermer
                </Button>
                
                <Button color="success" onClick={handleAddNewContenu}>
                Ajouter Contenu
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default AddContenu;
