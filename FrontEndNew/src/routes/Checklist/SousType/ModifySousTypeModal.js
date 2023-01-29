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

function ModifySousTypeModal({ show, handleClose, soustypeCK,typeck, requestCallback }) {
    const [state, setState] = useState({
        designation: soustypeCK.Designation,
        //type:soustypeCK.CodeCK_Type
    });

    const changeCreds = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = () => {
        requestCallback(soustypeCK.CodeCK_SousType, {
            Designation: state.designation,
            //CodeCK_Type: state.CodeCK_Type
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
                            Designation <strong className='text-danger'>*</strong>
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
/*<Row>
                        <Label for='Type'>
                        Type <strong className='text-danger'>*</strong>
                        </Label>
                        <Input
                            name='Type'
                            type='select'
                            onChange={(event) => changeCreds(event)}
                            value={state.CodeCK_Type}
                            required
                        />
                    </Row> */
export default ModifySousTypeModal;
