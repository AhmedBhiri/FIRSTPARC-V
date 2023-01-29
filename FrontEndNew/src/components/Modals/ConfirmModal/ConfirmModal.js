import React from 'react';

import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';

function ConfirmModal({ show, handleClose, rowID, requestCallback }) {
    const handleRequest = () => {
        requestCallback(rowID);
    };

    return (
        <Modal centered fullscreen='sm' size='lg' isOpen={show} toggle={handleClose}>
            <ModalHeader toggle={handleClose}>Vous ếtes sûre ?</ModalHeader>
            <ModalBody>Voulez vous vraiment supprimer cette élément ?</ModalBody>
            <ModalFooter className='d-flex justify-content-end'>
                <Button color='light' onClick={handleClose}>
                    Annuler
                </Button>

                <Button color='danger' className='ml-2' onClick={handleRequest}>
                    Supprimer
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default ConfirmModal;
