import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ModifyTypeModal({ show, handleClose, typeCK, requestCallback }) {
    const [state, setState] = useState({
        designation: typeCK.Designation
    });

    const changeCreds = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = () => {
        requestCallback(typeCK.CodeCK_Type, {
            Designation: state.designation
        });
    };

    return (
        <Modal isOpen={show} toggle={handleClose} centered fullscreen='sm' size='lg'>
            <ModalHeader toggle={handleClose}>
                {' '}
                <h4>Ajouter un nouvel utilisateur </h4>
            </ModalHeader>
            <ModalBody>
                <Form>
                    <Row>
                        <Label for='prenom'>
                            designation <strong className='text-danger'>*</strong>
                        </Label>
                        <Input
                            name='designation'
                            type='text'
                            onChange={(event) => changeCreds(event)}
                            value={state.designation}
                            required
                        />
                    </Row>
                </Form>
            </ModalBody>
            <ModalFooter className='d-flex justify-content-end'>
                <Button color='light' onClick={handleClose}>
                    Annuler
                </Button>

                <Button color='success' onClick={handleSubmit}>
                    Modifier
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default ModifyTypeModal;
