import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Contenuck } from '../../../api/CK/contenuck/Contenuck';

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
//import TypeCK from "routes/Checklist/Checklist";

const { createContenuCheckList } = Contenuck();

function AjouterContenuCK({ show, handleClose }) {
    const [state, setState] = useState({
        designation: ''
    });

    const changeCreds = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async () => {
        await createContenuCheckList({
            Designation: state.designation
        });

        handleClose(true);
    };

    return (
        <Modal isOpen={show} toggle={handleClose} centered fullscreen='sm' size='lg'>
            <ModalHeader toggle={handleClose}>
                {' '}
                <h4>Ajouter un Contenu </h4>
            </ModalHeader>
            <ModalBody>
                <Form>
                    <Row>
                        {/* Left col */}
                        <Col>
                            <FormGroup>
                                <Row>
                                    <Col>
                                        <Label for='designation'>
                                            Designation <strong className='text-danger'>*</strong>
                                        </Label>
                                        <Input
                                            name='designation'
                                            type='text'
                                            required
                                            value={state.designation}
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

export default AjouterContenuCK;
