import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { SousTypeck } from '../../../api/CK/soustypeck/SousTypeck';

import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Row,
    Col
} from 'reactstrap';
import { Typeck } from '../../../api/CK/typeck/Typeck';

const { createSousTypeCheckList } = SousTypeck();

function AjouterTypeCK({ show, handleClose }) {
    const [types, setTypes] = useState([]);
    const { getCK } = Typeck();

    useEffect(() => {
        getCK().then((res) => {
            setTypes(res.data);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [state, setState] = useState({
        Designation: '',
        Typeck: ''
    });

    const changeCreds = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async () => {
        await createSousTypeCheckList({
            Designation: state.designation
        });

        handleClose(true);
    };

    return (
        <Modal isOpen={show} toggle={handleClose} centered fullscreen='sm' size='lg'>
            <ModalHeader toggle={handleClose}>
                {' '}
                <h4>Ajouter un sous type </h4>
            </ModalHeader>
            <ModalBody>
                <Form>
                    <Row>
                        {/* Left col */}
                        <Col>
                            <FormGroup>
                                <Row>
                                    <Col>
                                        <Label for='Designation'>
                                            Designation <strong className='text-danger'>*</strong>
                                        </Label>
                                        <Input
                                            name='designation'
                                            type='text'
                                            required
                                            value={state.nom}
                                            onChange={(event) => changeCreds(event)}
                                        />
                                    </Col>
                                </Row>
                                
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </ModalBody>

            <ModalFooter className='d-flex justify-content-end'>
                <Button color='light' onClick={handleClose}>
                    Annuler
                </Button>

                <Button color='success' onClick={handleSubmit}>
                    Ajouter
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default AjouterTypeCK;

/*
<Row>
                                    <Col>
                                        <Label for='type'>
                                            Selectionner le type{' '}
                                            <strong className='text-danger'>*</strong>
                                        </Label>

                                        <Input
                                            id='type'
                                            name='type'
                                            type='select'
                                            value={state.type}
                                            required
                                            onChange={(event) => changeCreds(event)}
                                        >
                                            <option>Fait votre choix...</option>

                                            {types.map(({ CodeCK_Type, Designation }) => {
                                                return (
                                                    <option key={CodeCK_Type} value={Designation}>
                                                        {Designation}
                                                    </option>
                                                );
                                            })}
                                        </Input>
                                    </Col>
                                </Row>
*/
